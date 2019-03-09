// CloudWall 2.4.2 brief static
// For user profile PIN and cryptokeys editor
// (c) 2019 ermouth

// ------------------------------------

// CloudWall 2.4.2
// Storage manager/decorator
// Requires Sugar, jQuery, PouchDB, cw.lib, cw.crypto

(function(window){

  const cw = window.cw,
        _pi = $.Deferred,
        hash 	= cw.lib.crc2,
        isS 	= Object.isString, 
        isO 	= Object.isObject, 
        isF 	= Object.isFunction,
        keys 	= Object.keys, 
        clone = Object.clone;

  var pool = {}, 
      remap = {},
      Pouch = window.PouchDB.bind(window.PouchDB),
      PouchDB = _connect;

  PouchDB._remap = _saveRemap;

  cw.pouch = Pouch;
  window.PouchDB = PouchDB;

  // - - - - - - - - - - - - - -

  function _connect (){

    // Calls original PouchDB constructor
    // with augmented, if needed, name

    for (var a=[], i=0, l=arguments.length; i<l; i++) a.push(arguments[i]);

    var opts = {};
    if (isO(a[0])) opts = clone(a[0]);
    else if (isS(a[0])) {
      opts = isO(a[1])?clone(a[1]):opts;
      opts.name = a[0];
    }

    if (!opts.name) throw new Error('Missing/invalid DB name');

    var name = opts.name, 
        key = _dbkey(opts);
    if (pool[key]) return pool[key];

    if (!/^http[s]?:\/\//.test(name) && name[0] != '/') {
      if (!remap[name]) opts.name = key;
      else opts.name = remap[name];
    }
    
    if (!/^http[s]?:\/\//.test(opts.name) && opts.name[0] != '/') {
      // Enforce IDB
      opts.adapter = 'idb';
    }

    //console.log(opts);
    
    var db = new Pouch (opts),
        pi = _pi(),
        proxy = {
          _key:key, 
          _local:!/^(\/|http[s]?:\/\/)/.test(opts.name),
          then: 	pi.then,
          catch:	pi.catch,
          fail:		pi.fail,
          always:	pi.always
        };

    var i, props = [];
    for (i in db) props.push(i);
    props.forEach(function(i){
      if (i.to(1) == '_') return;
      if (isF(db[i])) proxy[i] = db[i].bind(db);
      else if (isO(db[i])) {
        if (i != 'replicate') proxy[i] = db[i];
      }
      else proxy[i] = db[i];
    });

    pool[key] = proxy;
    proxy.replicate = {
      to:		db.replicate.to.bind(db),
      from:	db.replicate.from.bind(db)
    };
    
    //console.log(opts, proxy);
    
		pi.resolve(proxy);
    return pool[key];
  }

  // - - - - - - - - - - - - - -

  function _dbkey (opts){
    // Translates dbname to pool key name,
    // which may be also local DB name
    // for local buckets
    var me = isO(cw.userCtx)?cw.userCtx:null,
        salt = isO(cw.CW)?cw.CW.storageSalt || '':'',
        isStatic = isO(cw.CW)?!!cw.CW.static:isF(cw.config)?!!cw.config('static'):false,
        name = (salt?'_'+salt+'_':'') + opts.name;
    
    if (!me || isStatic) return opts.name+'';
    if (!/^http[s]?:\/\//.test(opts.name)) {
      if (remap[opts.name]) return 'cw-'+hash([me.name, {name:name, url:remap[opts.name]}]);
      return 'cw-'+hash([me.name, {name:name}]);
    }
    return 'cw-'+hash([
      me.name, 
      Object.merge(
        {size:100},
        Object.reject(
          opts, 
          ['adapter']
        )
      )
    ]);
  }

  // - - - - - - - - - - - - - -

  function _saveRemap(a) {
    if (isO(a)) $.extend(remap, a);
  }

})(window);

// ------------------------------------

// CW 2.4.2 
// Profile doc reader/writer
// (c) 2019 ermouth

if (!('cw' in window)) window.cw = {};

(function(cw){
  var Pouch = PouchDB,
      isO = Object.isObject,
      isA = Object.isArray,
      isF = Object.isFunction,
      db, dbname, docname,pr;

  cw.profile = _profile;
  return;

  // - - - - - - - - - - - - - - - -

  function _profile(doc) {
    var key = isF(cw.config)?cw.config('profile'):null;
    pr = /^(object|string)$/.test($.type(key))?Object.clone(key, !0):'cw/cw';

    // profile is a doc path or URL
    if (Object.isString(pr)) {
      cw.profile = _profileDoc;
      if (pr[0]=='/') {
				// ToDo
      }
      else if (/^http[s]?:\/\/.+/.test(pr)) {
				// ToDo
      }
      else {
        var a = pr.split('/').compact(true);
        if (a.length !=2) a = ['cw','cw'];
        dbname = a[0];
        docname = a[1];
      }
      return _profileDoc(doc);
    }
    // profile is fixed obj
    else {
      return _profileObj(doc);
    }
  }

  // - - - - - - - - - - - - - - - -

  function _profileObj(doc) {
    var pi = $.Deferred();
    if (doc) {
      pi.reject({
        error:	true, 
        status:	403, 
        name: 	'forbidden', 
        reason:	'forbidden', 
        message:'Profile is fixed'
      });
    }
    else {
      var u = cw.me() || (cw.userCtx||{}).name;
      pi.resolve($.extend(true, {}, pr, {
        name:	u,
        uid:	cw.lib.hash8(u)
      }));
    }
    return pi.promise();
  }

  // - - - - - - - - - - - - - - - -

  function _profileDoc(doc){
    var pi = $.Deferred();
    if (!db) db = new PouchDB(dbname);

    if (!doc || !isO(doc)) {
      db.get(docname).then(function(doc){ pi.resolve(doc); })
        .catch(function(err){ pi.reject(err); });
    }
    else if (isF(cw.config) && !cw.config('profileWritable')) {
      pi.reject({
        error:	true, 
        status:	403, 
        name: 	'forbidden', 
        reason:	'forbidden', 
        message:'Profile is not writable'
      });
    }
    else {
      db.get(docname).then(function(oldDoc){ 
        var err = _isInvalid (oldDoc, doc);
        if (err) return pi.reject(err);
        doc._rev = oldDoc._rev;
        _save(doc);
      })
        .catch(function(){ 
        var err = _isInvalid (null, doc);
        if (err) return pi.reject(err);
        _save(doc);
      });
    }

    return pi.promise();

    // - - - - - - - - - - - - - - - -

    function _save(doc){
      doc.type = 'settings';
      doc.stamp = Date.now();
      db.put(doc).then(function(msg){
        pi.resolve({ok:true});
      })
        .catch(function(err){
        pi.reject(err);
      });
    }
  }

  // - - - - - - - - - - - - - - - -

  function _isInvalid (old, doc) {
    var e = {error:true, name:'forbidden', reason:'forbidden', status:403},
        m = [];

    if (old) {
      if (old.crypto && !doc.crypto) m.push('Can’t save already encrypted profile as decrypted');
      if (old.name != doc.name) m.push('Stored and updated profiles must have equal names');
    }

    if (!m) {
      if (!/^[a-z][a-z0-9_\-]{1,40}$/i.test(doc.name)) m.push('Allowed chars for name are latins, nums and _-');
      if (!doc.pic || !/^data:image\/(jpeg|png);base64,/.test(doc.pic)) m.push('No pic found or pic is of invalid type');
      if (!doc.CRYPTO ^ !doc.crypto)  m.push('Incomplete crypto data');
      if (!doc.crypto) {
        if (!isA(doc.keys) || !isA(doc.dbs)) m.push('Doc must have .keys and .dbs lists');
        else if (!doc.dbs.length) m.push('DB list can’t be empty');
      }
    }

    if (!m.length) return false;
    e.message = m.join('\n');
    return e;
  }

})(window.cw);

// ------------------------------------

// CW 2.4.2 
// Crypto lib and settings sandbox
// (c) 2019 ermouth

if (!('cw' in window)) window.cw = {};

// ====== CloudWall log ====== 

if (!cw.log) (function _logstart(){
  var f = function _logstart () {

  // System log, saves con() calls 
  // to localStorage under the key ‘_cw_log_curr’

  var isA = Object.isArray, isB = Object.isBoolean, isS = Object.isString, isO = Object.isObject,
      isN = Object.isNumber, isR = Object.isRegExp, isF = Object.isFunction;

  var ls = localStorage, 
      scurr = "_cw_log_curr",
      sprev = "_cw_log_prev",
      mcurr = 50*1000,
      mprev = 1000*1000,
      marg = 500,
      ses = isF(cw.session)?cw.session():Number.random(46656,1679615).toString(36),
      lastR = Date.now()-20000,
      lastM = Date.now();

  if (!isF(cw.session)) cw.session = _session;

  cw["log"] = (function _logger (A1){
    var i, a = [], 
        l = arguments.length,
        now = Date.now();
    if (null==A1 && l==1) return;
    if (l && !(l===1 && isN(A1))) {
      a = Array.prototype.slice.call(arguments, 0);
      _normalize (a);
      a.unshift(ses);

      if (now-lastR <2000) {
        a.unshift("+"+(now-lastM));
        lastM = now;
      } else {
        a.unshift(now);
        lastR = lastM = now;
      }
      _savelog(_stringify(a));
      a = [];
      return;
    }
    else if (isN(A1)) {
      i = A1.clamp(1, 1e6);
      a = (ls.getItem(scurr)||"").split("\n");
      if (a.length < i) {
        a = (ls.getItem(sprev)||"").split("\n").concat(a);
      }
      a = a.compact(true).last(i);
      return a;
    }
    else {
      return (ls.getItem(scurr)||"").split("\n").compact(true);
    }
  }).fill();

  //- - - - - - - - - - - - -

  function _stringify (a) {
    // stringifies array, truncates too long entries;
    // returns string
    var i=0, s=[], r="";
    for (i;i<a.length;i++) {
      r = JSON.stringify(a[i]);
      if (typeof r == 'string') {
        if (marg >= r.length) s.push(r);
        else {
          s.push(JSON.stringify("Truncated "+$.type(a[i])+": "+(isS(a[i])?a[i]:r).truncate(marg-1,"middle","…")));
        }
      }
    }
    return "["+s.join(",")+"]";
  }

  //- - - - - - - - - - - - -

  function _savelog (s){
    // appends string to log,
    // s must have no \n

    var lines, pl="", cl = ls.getItem(scurr)||"";
    if (cl.length + s.length > mcurr) {
      // move current log to prev log
      pl = ls.getItem(sprev)||"";
      if (pl.length > 0) pl+="\n";
      pl+= cl;
      if (pl.length > mprev) {
        // truncate prev log
        pl=pl.last(mprev - 1);
        pl=pl.from(1+pl.indexOf('\n'));
        ls.setItem (sprev, pl);
      }
      else {
        ls.setItem (sprev, pl);
      }
      ls.setItem (scurr, s);
      pl=""; 
      cl="";
    } else {
      ls.setItem(scurr, (cl.length?cl+"\n":"")+s);
      cl="";		 
    }
  } // -- end _savelog

  //- - - - - - - - - - - - -

  function _normalize (a) {
    // normalize array of arguments 
    // to allow serialization
    var r,i,jq;
    for (i=0;i<a.length;i++) {
      r = a[i];
      if (null!==r && undefined !== r && !isN(r) && !isS(r) && !Object.isDate(r)) {
        if (isO(r) || isA(r)) {
          try {
            r = JSON.stringify (r);
          } catch (e) {
            r = "Parsing "+$.type(r)+" of keys:["+Object.keys(r).join(", ")+"] failed: "+e.message;
            a[i] = r;
          }
        }
        else if (isF(r)) a[i] = "function "+r.name+"(){"+f.length+"}";
        else if ((typeof r == "object") && isS(r.jquery) && isF(r.each)) {
          // normalize jQuery object/collection
          if (r.length || (isF(r.size) && r.size())) {
            jq=[];
            r.each(function(){
              var n = this, id = n.id, clist = Array.prototype.slice.call(n.classList,0);
              jq.push(n.nodeName+(id?"#"+id:"")+(clist.length?"."+clist.join("."):""));
            });
            a[i] = {jQuery:jq}
          }
          else a[i]={jQuery:[]};
        }
        else a[i] = null;
      }
    }
  } // -- end _normalize

  function _session(){
    return ses;
  }

}
;
  try { f(); } catch(e) {};
  if (!Object.isFunction(cw.log)) cw.log = console.log.bind(console);
})();


// ====== CloudWall crypto ====== 

if (!cw.crypto) cw.crypto = (function() {

  var Pouch = window.PouchDB,
      _profile = cw.profile,
      isA = Object.isArray, isB = Object.isBoolean, isS = Object.isString, isO = Object.isObject,
      isN = Object.isNumber, isR = Object.isRegExp, isF = Object.isFunction;

  var S, S0, PIN, PIN2, D0={}, D={}, me={}, 
      fields = 'type crypto stamp creator owners name pic tags parent _id _rev _attachments'.split(' '),
      CR = 'CRYPTO',
      keys = {},
      keysTtl = 0,
      lang = setLocale($.my.locale());

  // Return public methods
  var C = {
    enc:					encode.fill(),
    dec:					decode.fill(),
    keys: 				getKeysPub.fill(),
    has: 					hasKey.fill(),
    att: 					decodeAtt.fill(),
    share: 				function(){},
    install: 			function(){},
    dblist:				dbs.fill(),
    locale:				setLocale.fill(),
    me:						getme.fill(),

    _init: 				init.fill(),
    _getDbSettings: dbsettings.fill(),
    _getSyncUrl:	getSyncUrl.fill(),
    _settings: 		(function () {return S}).fill()
  };

  return C;

  // - - - - - - - - - - - - - - - -

  function _pi(){return $.Deferred();}

  // - - - - - - - - - - - - - - - -

  function encode(doc, async) {
    if(!doc || !Object.isObject(doc)) return async?$.Deferred().resolve(doc).promise():doc;
    var key, toEnc, resDoc;

    if (doc.crypto) key = (getKeys(doc.crypto)||{key:null})['key'];
    if (!key && doc._id == 'cw' && doc.type == 'settings') {
      key = doc.pin;
      if(key && !PIN) PIN = key;
    }
    if(!key) return async?$.Deferred().resolve(doc).promise():doc;

    resDoc = Object.select(doc, fields);

    if (!async) {
      resDoc.CRYPTO = cw.lib.encDoc(Object.reject(doc, fields), key);
      return resDoc;
    }

    // async
    var pi = $.Deferred();
    cw.lib.encAsync(Object.reject(doc, fields), key)
      .then(function(res){
      resDoc.CRYPTO = res;
      pi.resolve(resDoc);
      /*
			// no attaches
			if (!doc._attachments) pi.resolve(resDoc);

			// search for attaches with b64 data
			var src = [];
			Object.keys(doc._attachments).forEach(function(fname){
				if (!doc._attachments[fname].data) return;
				src.push({
					old: fname,
					data: doc._attachments[fname].data,
					fname:cw.lib.enc([
						fname, 
						doc._attachments[fname].content_type
					],key).substr(8)
					.replace(/\+/g,'-')
					.replace(/\//g,'~')
					.replace(/=/g,'!')
					+'.CRYPTO'
				});
			});
			// no attaches with data
			if (!src.length) pi.resolve(resDoc);

			// encode each attach
			var pis = [];
			src.forEach(function(elt){
				pis.push(cw.lib.encAsync(atob(elt.data), key, !!'isBinaryString')
				.then(function(res){
					delete resDoc._attachments[elt.old];
					resDoc._attachments[elt.fname] = {
						content_type:'application/octet-stream',
						data:res
					}
				}));
			});
			Q.allSettled(pis).
			then(function(){
				pi.resolve(resDoc);
			});
			*/
    })
      .fail(function(e){
      pi.reject(e);
    });

    return pi.promise();
  };


  // - - - - - - - - - - - - - - - -

  function decode(doc, pin, async) {
    if(!isO(doc)) return async?$.Deferred().resolve(doc).promise():doc;
    var key, decoded, resDoc;

    if(doc.hasOwnProperty(CR)) {
      if (doc.crypto) key = (getKeys(doc.crypto)||{key:null})['key'];
      if (!key && doc._id == 'cw') key = pin;
    }
    if(!key) return async?$.Deferred().resolve(doc).promise():doc;

    if (!async) {
      try {
        decoded = cw.lib.decDoc(doc.CRYPTO, key);
        resDoc = Object.reject(Object.merge(Object.clone(doc,true), decoded), CR);
      } catch (e) {
        return doc;
      }
      //doc.CRYPTO="";
      return resDoc;
    }

    // async
    var pi = $.Deferred();
    cw.lib.decAsync(doc.CRYPTO, key)
      .then(function(decoded){
      resDoc = Object.reject(Object.merge(Object.clone(doc,true), decoded), CR);
      pi.resolve(resDoc);
    })
      .fail(function(e){
      pi.reject(e);
    });

    return pi.promise();

  };

  // - - - - - - - - - - - - - - - -

  function decodeAtt(dataBlob, keyId) {
    if(!dataBlob || !keyId) return dataBlob;
    var key;
    if((key = getKeys(keyId)) && (key = key.key)) {
      var dataBase64 = cw.lib.blob2base64(dataBlob),
          resBase64 = cw.lib.base64(btoa(cw.lib.dec(dataBase64, key).from(1)), true);
      return cw.lib.base642blob(resBase64);
    }
    return dataBlob;
  };


  // - - - - - - - - - - - - - - - -

  function getKeys(keyId) {
    if (keys[keyId]) return keys[keyId];
    keys={};
    var xkeys=S?S.keys:[];
    for (var i=0;i<xkeys.length;i++) {
      keys[xkeys[i].id] = xkeys[i];
    }
    return keys[keyId]||keys;
  };


  // - - - - - - - - - - - - - - - -

  function hasKey (keyId) {
    getKeys();
    return keys.hasOwnProperty(keyId);
  }	

  // - - - - - - - - - - - - - - - -

  function getKeysPub() {
    var keys = getKeys(),
        resKeys = [],
        key, k;
    Object.keys(keys).forEach(function(keyId) {
      if((key = keys[keyId]) && key.name) {
        resKeys.push({id:keyId, name:key.name+', '+key.emitter.split('-')[0]});
      }
    });
    return resKeys;
  };


  // - - - - - - - - - - - - - - - -

  function getme() {
    return Object.merge({}, me||{}, true);
  }

  // - - - - - - - - - - - - - - - -

  function dbs(key) {
    return !key?Object.keys(D):Object.clone(D[key], true);
  }

  // - - - - - - - - - - - - - - - -

  function dbsettings(dbid, update, done){

  // Applies update over dbid bucket,
  // returns Promise, which is resolved 
  // on profile saved.
  // Optional callback done is called on update command
  // finishes or fails.

  if (isS(dbid) && null== update) return Object.merge({}, D[dbid]||{}, true);
  if (isS(dbid) && isS(update)) 	return Object.clone(D[dbid][update], true);
  else if (null==dbid) return Object.merge({}, D, true);
  else if (isO(update)) {
    //we have settings update request
    var i, l, 
        d = 		Object.clone(update,true), 
        pi = 		_pi(),
        S0 = 		Object.clone(S, true),
        crc = 	cw.lib.md5(cw.lib.dry(S)),
        re = 		/^(http[s]?\:\/\/)[^\:@\/]+:[^@]+@(.+)(\/?)$/,
        list = 	('apps ico pic name url title desc stamp start sync creator'+
                 'hidden dataOnly readOnly autoCompact').split(' ').sort(),
        syncs = {},
        sync = 	[],
        surl,
        xurl;

    S.type = 'settings';

    pi.always(function(){
      // restore settings if fail
      S = S0;
      D0 = {};
      for (var i=0, k; i<S.dbs.length; i++) D0[S.dbs[i].name] = S.dbs[i];
    });


    //- - - - - - - delete db - - - - - - -

    if (d._cmd == 'delete'){
      $.my.modal({
        manifest:'cw.Sys.Confirm',
        data:{
          text:[
            '<div class="">',
            (d.url?lang.MSG_DB_UNMOUNT:lang.MSG_DB_DELETE).assign(d.name.escapeHTML()),
            '</div>'
          ].join(''),
          ok: d.url ? lang.BTN_DB_UNMOUNT : lang.BTN_DB_DELETE,
          cancel: lang.BTN_CANCEL
        },
        css:'fs90 lh160'
      })
      .then(function(res){
        var dbsnew=[],
            cd,
            cdb = (new Pouch(d.name)),
            remote = (cdb._local == false), 
            key = cdb._key;
        if (isO(res) && res.cmd == "commit") {
          for (var i=0;i<S.dbs.length;i++) {
            if (S.dbs[i].name!==d.name) dbsnew.push(S.dbs[i]);
            else cd = Object.clone(S.dbs[i],true);
          }
          S.dbs = dbsnew;

          // Stop sync
          try {
            cw.db(d.name).sync(false);
          } catch (e) {}

          pi.then(function(){

            if (Object.isArray(cd.sync)) {
              for (var i=0; i<cd.sync.length; i++) {
                cd.sync[i].dir.forEach(function(dir){
                  localStorage.removeItem(['', 'repl', dir, _u(cd.sync[i].url)].join('_'))
                });
              }
            }

            if (!remote) {
              (new Pouch(d.name)).destroy().then(function(){
                cw.log('DB ‘'+d.name+'’ destroyed, reload scheduled.');
                window.location.reload();
              });
            }
          }.debounce(500));

          if (remote) cw.log('Remote DB ‘'+d.name+'’ unmount confirmed, saving updated settings.');
          else cw.log('Local DB ‘'+d.name+'’ deletion confirmed, saving updated settings.');
          _saveSettings(S);
          //console.log(S, dbid);
        }
        function _u(s){
          // hashes local db key and url
          return key.from(3)+'-'+cw.lib.crc2([s]);
        }
      })
        .catch(function(){
        pi.reject("DB deletion cancelled.");
      });
    }

    //- - - - - - - resync db - - - - - - -

    else if (d._cmd === 'resync'){
      $.my.modal({
        manifest:'cw.Sys.Confirm',
        data:{
          text:'<div class="">'
          +'<span class="fi-alert mr5 fs90 red"></span> DB resync requested. All '
          +'content of current DB will be discarded on this device. '
          +' Removing local copy does not affect remote data, if any.'
          +' When the process finishes, page reloads.'
          +'</div>',
          ok:"Clean and resync DB"
        },
        css:'fs90 lh160'
      }).then(function(res){
        var dbsnew=[],
            cdb = (new Pouch(d.name)),
            key = cdb._key;
        if (isO(res) && res.cmd == 'commit') {

          if (cdb._local == false) pi.reject("Can‘t resync remotely mounted bucket.");
          else {
            cw.log('Starting ‘'+d.name+'’ destroy+resync.');

            var cd = D0[d.name];
            for (i=0;i<cd.sync.length;i++) {
              cd.sync[i].dir.forEach(function(dir){
                localStorage.removeItem(['', 'repl', dir, _u(cd.sync[i].url)].join('_'))
              })
            }

            (new Pouch(d.name)).destroy().then(function(){
              cw.log('DB ‘'+d.name+'’ destroyed for resync, reload scheduled.');
              window.location.reload();
            }.debounce(500));
          }
        }

        function _u(s){
          // hashes local db key and url
          return key.from(3)+'-'+cw.lib.crc2([s]);
        }

      }).fail(function(){
        pi.reject("DB deletion cancelled.");
      })
    }


    //- - - - - - - other cmd - - - - - - -

    else  {
      //check if we already have this db
      if (D0[d.name]) {
        var cd = D0[d.name];
        // stash curr syncs idxs
        for (i=0;i<cd.sync.length;i++) {
          surl = cd.sync[i].url.replace(re, '$1$2');
          syncs[surl] = cd.sync[i].url;
        }
        //check if and what urls changed
        for (i=0;i<d.sync.length;i++) {
          xurl = d.sync[i].url;
          if (xurl){
            if (xurl.indexOf('•••••') > -1) {
              surl = syncs[xurl.replace(re, '$1$2')];
              if (surl) {
                d.sync[i].url = surl;
                sync.push(d.sync[i]);
              }
            } else sync.push(d.sync[i]);
          };
        }
        // check if ext url changed
        if (d.url && _stripPwd(d.url) != d.url || cd.url != d.url) {
          D0[d.name].url = d.url;
        }

        D0[d.name].sync = sync.slice(0);
        Object.merge(D0[d.name], Object.reject(Object.select(d, list), 'sync'));
        _saveSettings(S);
      } 
      else if (d.name && isA(d.sync) && d.title && d.pic) {
        S.dbs.push(Object.clone(Object.select(d, list)));
        _saveSettings(S);
      }
    }

    return pi.promise();
  }


  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  function _saveSettings(obj) {
    //S.pin=PIN2;
    var doc = cw.lib.dry(S);

    if (cw.lib.md5(doc)===crc) return pi.resolve('Nothing changed, no need to save');

    _profile(encode(Object.merge(doc, {crypto:'PIN', pin:PIN2||doc.pin})))
    .then(function(){
      _updateDbRemap();
      pi.resolve('Settings saved sucessfully');
      if ($ && $.my) $.my.radio('settings.cw', Object.keys(D0));
    })
    .fail(function(res){
      pi.reject('Error saving settings');
    });
  }
}

  // - - - - - - - - - - - - - - - -

  function _updateDbRemap() {
    if (!S || !S.dbs || !S.dbs.length || !isF(Pouch._remap)) return;
    Pouch._remap(S.dbs.reduce(function(a, elt){
      var u = elt.url || '';
      if (u[0] == '/') u = (cw.root || '').replace(/\/$/,'') + u;
      a[elt.name] = u;
      return a;
    }, {}));
  }

  // - - - - - - - - - - - - - - - -

  function getSyncUrl(dbid, idx) {
    return cw.lib.getref(D0[dbid]||{}, ['sync', idx, 'url']);
  }

  // - - - - - - - - - - - - - - - -

  function init(doc) {
    var pi = _pi();
    if (!isO(doc) || !/^settings$/.test(doc.type) || !doc.name) {
      // console.log(doc);
      pi.reject('Invalid settings doc');
    }
    if (isO(S) && doc._rev===S._rev) {
      pi.resolve(Object.keys(D), true);
      return pi.promise();
    }
    if (doc.CRYPTO && !isS(PIN)) {
      // check if pin is unset
      if (decode(doc, _pin2('', doc.name)).uid) {
        PIN = _pin('');
        PIN2 = _pin2('', doc.name);
        _decSettings (doc);
      }
      else {
        $.my.modal({
          manifest:_pinManifest(),
          width:320,
          close:false,
          css:'15'
        })
        .always(function(res){	
          if (isO(res)) {
            PIN = _pin(res.pin);
            PIN2 = _pin2(res.pin, doc.name);
            _decSettings (doc);	
          } 
          else pi.reject(lang.PIN.ERR_NOPIN);
        });
      }
    }
    else  {
      _setDebug(true);
      _decSettings (doc);
    }

    return pi.promise();

    //- - - - - - - - - - - - - - - - - - -

    function _decSettings (doc) {
      var img, obj = decode(doc, PIN);
      if (!obj.dbs || !obj.uid) {
        obj = decode(doc, PIN2);
        if (!obj.dbs || !obj.uid) {
          cw.log ('Invalid PIN entered on start.');
          pi.reject('Invalid PIN, can’t decrypt settings');
        }
      }
      if (obj.dbs && obj.uid) {

        //gen me
        me.name = obj.name;
        me.pic = obj.pic;
        try {
          if (obj.pic.length>4e4) {
            var upic = new Image(); 
            upic.src = obj.pic;
            img = cw.lib.image(upic);
            me.pic = img.sharpen(0.5).resample(64,64).sharpen(0.1).jpeg(0.99);
          };
        }catch(e) {
          me.pic = obj.pic;
        }
        me.uid = obj.uid || cw.lib.hash8(obj.name + cw.lib.hash8(obj.pin));
        me.contact = obj.contact || '';
        me._id = ['user', obj.name, obj.uid].join('-');
        me.crc = cw.lib.hash8(obj.pic + me._id + me.contact);
        me.roles = (cw.userCtx?cw.userCtx.roles:['_admin']).slice(0);

        S = Object.merge({}, obj);
        _updateDbRemap();

        // gen shadow dbsettings
        D = {};
        D0 = {};
        for (var i=0, k;i<S.dbs.length; i++) {
          k=S.dbs[i].name;
          D[k] = Object.clone(S.dbs[i], true);
          D0[k] = S.dbs[i];
          //augment passwords
          if (isA(D[k].sync)) {
            for (var j=0; j<D[k].sync.length; j++) {
              D[k].sync[j].url = _stripPwd(D[k].sync[j].url);
            }
          }
          // augment bucket ext url if any
          if (isS(D[k].url && D[k].url)) {
            D[k].url = _stripPwd(D[k].url);
          }
        }
        // delete unsafe
        if (!cw.debug) {
          C._getDbSettings = C._settings = C._settings = null;
          delete C._getDbSettings;
          delete C._getSyncUrl;
          delete C._settings;
        }

        (function(){pi.resolve(Object.keys(D));}).delay(100);

      }
    }
  }

  // - - - - - - - - - - - - - - - -

  function _pin(s) {
    return cw.lib.md5(cw.lib.md5(s)+cw.lib.hash8(s));
  }

  function _pin2(s, user) {
    return cw.lib.md5(_pin(s)+user);
  }

  // - - - - - - - - - - - - - - - -

  function _setDebug(mode){
    if (mode && cw.userCtx && isA(cw.userCtx.roles) && cw.userCtx.roles.find('_admin')) {
      return cw.debug = true;
    }
    return cw.debug = false;
  }

  // - - - - - - - - - - - - - - - -

  function _pinManifest(){
    // returns Enter PIN manifest
    return {
      data:{pin:''},
      init:function ($o){
        var that = this,
            cfg = Object.merge (
              {title:'CloudWall', titleColor:'#60a9e6', logo:'logo.svg'},
              Object.select(cw.CW || {}, ['title','titleColor','logo'])
            );
        $o.html($.my.formgen([
          '<div class="tac pt15">',

            '<div class="dib vat w100p nw oh">'
              + '<img class="pin-logo" src="'+cfg.logo+'">'
              + '<div class="pin-nodetitle" style="color:'+cfg.titleColor+';">'
              + (cfg.title || 'CloudWall').escapeHTML()
              +'</div>'
            +'</div>',
          	{row:'320px', rowCss:'my-row pt15 tac'},
            ['', '<input id="pin-pin" type="password" placeholder="{PLC_PIN}" class="w230 fs150 tac pt10 pb10 blue">'],
            ['', 'btn#pin-btn-ok.fs105.pl20.pr20.mb25.br100.mt5', {val:'{BTN_DECRYPT}'}],
          	'<div id="pin-logout" class="hide fs75 o70 xgray mb-5">',
          		'{MSG_LOGGED_IN} ',
          	'<i><span id="pin-username"></span></i>. ',
          	'<span id="pin-btn-logout" class="pseudolink tdn ml2">{BTN_LOGOUT}</span>. ',
          '</div>',

          '</div>'
        ]).assign(lang.PIN));

        $o.find('#pin-pin').keydown(function(e){
          if (e.keyCode == 13) {
            _setDebug(false);
            that.my.commit();
          }
          if (e.keyCode == 9) {
            e.preventDefault();
            _setDebug(true);
            that.my.commit();
          }
        });
      },
      ui:{
        '#pin-pin':'pin',
        '#pin-btn-ok': {
          bind: function(d,v,$o){
            if (v!=null) this.my.commit();
          },
          watch:['#pin-pin'],
          events:'click.my',
          css:{':disabled':function(d){return !d.pin}}
        },
        '#pin-logout':{
          css:{hide:function(){	return !cw.root || !cw.userCtx;}}
        },
        '#pin-username':function(){
          if (cw.userCtx) return cw.userCtx.name;
        },
        '#pin-btn-logout':{
          bind:function(d,v){
            if (v==null) return;
            cw.lib.note('Logging out...');
            $.ajax({
              url:cw.root+'_session', data:JSON.stringify({name:'0', password:'0'}),
              method:'POST', dataType:'json', headers:{'Content-type':'application/json'}
            })
            .always(function(){
              location.reload();
            }.debounce(100));
          },
          events:'click.my'
        }
      },
      style:{
        ' .pin-logo':'max-width:40px;max-height:30px; display:inline-block; vertical-align:middle; margin-top:2px;',
        ' .pin-nodetitle':[
          'max-width:calc(100% - 40px); font-size:1.6em; line-height:1.3em; padding:0 0 2px 7px;',
          'display:inline-block; vertical-align:middle;  overflow:hidden; text-overflow:ellipsis;'
        ].join('')
      }
    };
  }

  // - - - - - - - - - - - - - - - -

  function _stripPwd(s) {
    return s.replace(/^(http[s]?\:\/\/[^\:@\/]+:)[^@]+(@.+)$/, '$1•••••$2');
  }

  // - - - - - - - - - - - - - - - -

  function setLocale(l) {
    var dict = {
      en: ({
  
  BTN_CANCEL: 'Cancel',
  
  BTN_DB_DELETE: 'Remove bucket',
  MSG_DB_DELETE:[
    '<span class="fi-alert mr5 fs90 red"></span> ',
    'Bucket <span class="bolder">{1}</span> removal requested. ',
   	'Please close all other tabs and browsers with CloudWall. ',
    'Removing bucket on this machine does not remove it on linked machines’ accounts.'
  ].join(''),
  
  BTN_DB_UNMOUNT: 'Unmount bucket',
  MSG_DB_UNMOUNT:[
    '<span class="fi-alert mr5 fs90 orange"></span> ',
    'Bucket <span class="bolder">{1}</span> unmount requested. ',
   	'It’d be better to close all other tabs and browsers with CloudWall. ',
    'Unmounting bucket does not remove remote data.'
  ].join(''),
	
	SYNC:{
		MSG_DLG:	[
			'<div class="">',
				'<span class="fi-clock mr5 fs90 green"></span> Forced sync of the {1} bucket requested. ',
				'It can take a time, but you may continue working during process. ',
				'On finish you’ll see notification.',
			'</div>'
		].join(''),
		BTN_DLG_OK:'Force sync',
		BTN_DLG_CANCEL:'Cancel',
		
		MSG_SYNC_START:	'Started forced DB replication.',
		MSG_CANCEL:			'Bucket forced re-sync cancelled.',
		
		MSG_SYNC_OK: function (dbname, dir, url0) {
			var url = url0.split('@').last().replace(/^http[s]?:\/\//i,'');
			return 'Forced sync of {1} bucket {2} {3} finished succesfully. Default sync interval restored.'.assign(
				dbname.escapeHTML(),
				dir,
				url.escapeHTML()
			);
		},
		
		MSG_SYNC_FAIL: function (dbname, dir, url0) {
			var url = url0.split('@').last().replace(/^http[s]?:\/\//i,'');
			return 'Forced sync of {1} bucket {2} {3} failed.'.assign(
				dbname.escapeHTML(),
				dir,
				url.escapeHTML()
			);
		}
	},
	
	PIN:{
		PLC_PIN:			'Enter PIN',
		BTN_DECRYPT:	'Decrypt profile',
		MSG_LOGGED_IN:'Logged in as',
		BTN_LOGOUT:		'Log out',
		ERR_NOPIN:		'No PIN provided to decrypt settings'
	}
}) ,
      ru: ({
  
  BTN_CANCEL: 'Отмена',
  
  BTN_DB_DELETE: 'Удалить БД',
  MSG_DB_DELETE:[
    '<span class="fi-alert mr5 fs90 red"></span> ',
    'Запрошено удаление БД <span class="bolder">{1}</span>. ',
   	'Лучше закрыть все вкладки с CloudWall, запущенные с текущего домена. ',
    'Удаление локальной реплики БД не удаляет данные на других устройствах.'
  ].join(''),
  
  BTN_DB_UNMOUNT: 'Отключить БД',
  MSG_DB_UNMOUNT:[
    '<span class="fi-alert mr5 fs90 orange"></span> ',
    'Запрошено отключение БД <span class="bolder">{1}</span>. ',
   	'Лучше закрыть все вкладки с CloudWall, запущенные с текущего домена. ',
    'Отключение внешней БД не удаляет в ней данные данные.'
  ].join(''),
	
	SYNC:{
		MSG_DLG:	[
			'<div class="">',
				'<span class="fi-clock mr5 fs90 green"></span> Запрошена принудительная синхронизация ',
      	'БД <span class="bolder">{1}</span>. ',
				'Это может занять некоторое время, однако во время репликации можно продолжать работу. ',
				'По окончанию процесса вы увидите сообщение.',
			'</div>'
		].join(''),
		BTN_DLG_OK:'Начать репликацию',
		BTN_DLG_CANCEL:'Отмена',
		
		MSG_SYNC_START:	'Начата принудительная репликация.',
		MSG_CANCEL:			'Репликация отменена.',
		
		MSG_SYNC_OK: function (dbname, dir0, url0) {
			var url = url0.split('@').last().replace(/^http[s]?:\/\//i,''),
					dir = ({from: '(загрузка из ', to:'(выгрузка в'})[dir0];
			return 'Репликация БД {1} {2} {3}) завершена.'.assign(
				dbname.escapeHTML(),
				dir,
				url.escapeHTML()
			);
		},
		
		MSG_SYNC_FAIL: function (dbname, dir0, url0) {
			var url = url0.split('@').last().replace(/^http[s]?:\/\//i,''),
					dir = ({from: '(загрузка из ', to:'(выгрузка в'})[dir0];
			return 'Репликация БД {1} {2} {3}) не удалась.'.assign(
				dbname.escapeHTML(),
				dir,
				url.escapeHTML()
			);
		},
	},
	
	PIN:{
		PLC_PIN:			'Введите PIN',
		BTN_DECRYPT:	'Войти',
		MSG_LOGGED_IN:'Вы авторизованы как',
		BTN_LOGOUT:		'Выйти',
		ERR_NOPIN:		'Не введён PIN, профиль не может быть расшифрован'
	}
})
    };

    lang = $.extend(true, {}, dict.en, dict[l] || {});

    return lang;
  }

})();


// ------------------------------------

// CW 2.4.2 static
// CouhDB login and profile editor start
// (c) 2019 ermouth

(function(){

  // Mounts CloudWall profile editor starter
  // as cw.login

  cw.login = function _startAsStatic(){

    var isS = Object.isString, 
        isO = Object.isObject, 
        isA = Object.isArray,
        loc = window.location,
        needLogout = false,
        hasLocalProfile = false;
    
    return _checkLocalProfileStatic()
    .then(function(){
      $.my.modal.parent("#cw-body");
      $("#cw-space").my({
  "id": "cw.Sys.Profile.Editor",
  "build": 27,
  "params": {
    "animate": 100,
    "effect": function ($e,onoff,duration) {
            if (onoff) { $e.slideDown(duration); return; }
            $e.slideUp(duration);
          
      }
  },
  "error": "<span class=\"xgray fs110\">Sorry, no CloudWall profile found.</span><br><a href=\"./index.html\" class=\"button tdn lh160 pl30 pr30 mt20\"><span class=\"fi-torso o70 mr5\"></span>Create profile...</a>",
  "ui": {
    "#hheader": function (d) {
          var that = this, 
              cfg = cw.config || function(k){
                return ({title:'CloudWall', titleColor:'#60a9e6', logo:'logo.svg'})[k];
              };
          return [
            '<div class="dib vat w100p nw oh">',
              '<img class="hub-logo" src="'+cfg('logo')+'">',
              '<div class="hub-title" style="color:'+cfg('titleColor')+';">',
                (cfg('title') || 'CloudWall').escapeHTML(),
              '</div>',
            '</div>'
          ].join('');
        
      },
    "#pic": {
      "bind": function (d,v,$o) {
              if (v!=null) {
                $.my.modal({
                  manifest:this.Cropper,
                  data:{data:'', filename:''}
                }).then(function (crop) {
                  if (crop && crop.data) {
                    d.doc.pic="data:image/jpeg;base64,"+crop.data;
                    $o.trigger("recalc");
                    crop.data="";
                  }
                });
              }
              return d.doc.pic;
            
        },
      "events": "click.my"
    },
    "#name": {
      "bind": "doc.name",
      "check": /^(|[a-z0-9]{3,40})$/i,
      "error": "3–40 latins and nums",
      "recalc": "#pin"
    },
    "#pin": {
      "bind": "pin"
    },
    "#btn-save": {
      "delay": 50,
      "bind": function (d,v,$o) {
            var db, d2, x,
                that = this, 
                uname = d.doc.name + '-' + d.doc.uid;
            
            if (v!=null && that.my.valid()) {
              
              if (cw.lib.sdbm(that.my.find('#pic').attr('src'))=='79adusu9') {
                cw.lib.note('Please change userpic', 'error');
                return;
              }
              if (d.pin) d.doc.pin = _pin();
              try { x = cw.crypto.enc(d.doc) }
              
              catch(e) {console.log(e.message, e.stack, e);}
              cw.profile(cw.crypto.enc(d.doc))
              .then(function (){
                window.location.replace('./')
              })
              .fail(function(err){
                cw.lib.note('Saving settings failed, see console for details', 'error');
                console.log('Saving settings failed', err);
              });
            }
            function _pin() {
              return cw.lib.md5(cw.lib.md5(cw.lib.md5(d.pin)+cw.lib.hash8(d.pin))+d.doc.name);
            }
          
        },
      "events": "click.my"
    },
    "#keylist": {
      "manifest": "Keys",
      "bind": "doc.keys",
      "check": true,
      "list": "<div class=\"mb20 pt20 btd\"></div>"
    },
    "#btn-addkey": {
      "bind": function (d,v,$o) {
            if (v!=null) {
              $.my.modal({
                manifest:cw.lib.fuse(
                  {},
                  this.Confirm,
                  {ui:{
                    "#key":{
                      bind:function(d,v){
                        var that=this;
                        if (v!=null) {
                          if (/^.{3,40}$/.test(v.compact())) {
                            d.key = cw.lib.fuse(
                              {},
                              d.empty,
                              {
                                id: cw.lib.hash8(Number.random(-1e13,1e13)+Date.now()+""),
                                key: cw.lib.key16(Number.random(-1e13,1e13)),
                                stamp:Date.now(),
                                emitter:('{name}-{uid}').assign(cw.crypto.me()),
                                link:cw.crypto.me().contact,
                                local:false,
                                name:v.compact(),
                                desc:v.compact()
                              }
                            )
                          }
                          else if (v.length>100) {
                            try{
                              var key = cw.lib.base64(v,true);
                              if (Object.isObject(key) 
                                  && key.name 
                                  && key.id 
                                  && key.emitter 
                                  && key.key
                                  && !key.local
                                 ) {
                                d.key = cw.lib.fuse(
                                  {},
                                  d.empty,
                                  key,
                                  {stamp:Date.now()}
                                )
                              } else delete d.key;
                            }catch(e){
                              delete d.key;
                            }
                          } else {
                            delete d.key;
                          }
                        }},
                      check: function (d,v0) {
                        var that=this, isName=false, isKey = false, v=(v0||"").compact();
                        if (/^.{3,40}$/.test(v)) {
                          if (d.names.indexOf(v+"|"+cw.crypto.me().name)>-1) 
                            return "Name already exists, no dupes allowed";
                          isName=1;
                        }
                        else if (v.length>100) {
                          try{
                            var key = cw.lib.base64(v,true);
                            if (Object.isObject(key) 
                                && key.name 
                                && key.id 
                                && key.emitter 
                                && key.key
                               ) {
                              if (key.local) return "This is non-public key, unable to install";
                              if (d.ids.indexOf(key.id)>-1) return "Key already installed";
                              if (d.names.indexOf(key.name+"|"+key.emitter.split("-")[0])>-1) 
                                return "Key with this name/user pair already exist, no dupes allowed";
                              isKey=1;
                            }
                            else return "Invalid key structure";
                          }catch(e){
                            return "Invalid key code";
                          }
                        }
                        if (!isName && !isKey) return "Input required";
                        return "";
                      }
                    }
                  }}
                ),
                data:{
                  empty:this.Keys.data,
                  names:d.doc.keys.map(function(e){return e.name+"|"+e.emitter.split("-")[0]}),
                  ids:d.doc.keys.map(function(e){return e.id}),
                  text:'<p>Enter key name or key share code</p>'
                  +'<div><input type="text" id="key" placeholder="Short name or long code" class="w350 fs120">'
                  +'<div class="my-error-tip fs80"></div></div>',
                  ok:"Add key"
                },
                esc:true
              })
              .then(function(data){
                if (Object.isObject(data) 
                    && data.key) {
                  //d.doc.keys.insert(Object.clone(data.key,true),0);
                  $o.my("find","#keylist")
                  .trigger("insert",{
                    where:0, 
                    what:Object.clone(data.key,true)
                  });
                }
              })
            }
          
        },
      "events": "click.my"
    }
  },
  "data": {
    "isnew": false,
    "dburl": "",
    "dbpwd": "",
    "dblogin": "",
    "prevpin": "",
    "pin": "",
    "doc": {
      "_id": "cw",
      "type": "settings",
      "stamp": 0,
      "name": "",
      "pin": "",
      "uid": "",
      "contact": "",
      "crypto": "PIN",
      "tags": {
      },
      "keys": [],
      "dbs": [],
      "pic": ""
    }
  },
  "init": function ($o,form) {
      var that = this,
          pi = $.Deferred(), 
          _isnew = false, 
          _settings = cw.crypto._settings;
      that.Pouch = PouchDB;
      that.Settings = _settings; 
      that.data.isnew = _isnew;
      cw.log("~~~ Profile editor started ~~~");
      
      cw.profile().then(function(doc){
        if (!doc.CRYPTO) {
          cw.log("Profile is not encrypted");
          _new(doc);
        } else {
          cw.log("PIN requested.");
          cw.crypto._init(doc)
          .then(function(){
            cw.log("PIN ok.");
            _new(_settings());
          })
          .fail(function(){
            cw.log("Error: can‘t decrypt profile");
            pi.reject("Invalid PIN");
          });
        }
      })
      .fail(function(err){
        pi.reject('Error reading CloudWall profile or no profile found. See console for details.');
      });
      
      return pi.promise();
      //- - - - - - - - - - - - - - - - - 
      function _new(doc){
        
        if (doc) {
          
          // Start editor
          
          cw.log('Starting cw.SysProfile.Editor');
          
          $.extend(true, that.data.doc, doc);
          if (!that.data.doc.uid) that.data.doc.uid = cw.lib.hash8(Date.now()+Number.random(1e30));
          $o.formgen(that.FormHTML);
          $o.find("#abouttext").html(that.Intro);
          if (!_isnew) {
            $o.find("#btn-save").val("Save");
            $o.find(".btn-link").hide();
            $o.find ("#keys").show();
            $o.find ("#abouttext").hide();
          }
          pi.resolve();
        }
        else {
          
          // No profile, fail
          $("#cw-header img").animate({
            "margin-left":"162px",
            "margin-top":"40px"
          },200)
          pi.reject('No CloudWall profile found.');
        }
      }
    },
  "Confirm": {
    "id": "cw.Sys.Confirm",
    "params": {
      "delay": 20,
      "strict": true,
      "width": 350
    },
    "data": {
      "text": "",
      "css": "xgray",
      "ok": "Ok",
      "cancel": "Cancel"
    },
    "init": function ($o,form) {
          var d=form.data;
          $o.formgen([
            '<div class="'+d.css+'">'+d.text+'</div>',
            {label:"70px", row:"350px", rowCss:"my-row mt15 pt15 fs90 mb-5 xgray btd"},
            ['', 'btn#btn-ok.green.mr5',{val:d.ok}, 
             'btn#btn-cancel',{val:d.cancel}]
          ]);
        
      },
    "ui": {
      "#btn-ok": {
        "bind": function (d,v,$o) {
                  if (v!=null) {
                    $o.trigger("commit");
                  }
                
          },
        "events": "click"
      },
      "#btn-cancel": {
        "bind": function (d,v,$o) {
                  if (v!=null) {
                    $o.trigger("cancel");
                  }
                
          },
        "events": "click"
      }
    }
  },
  "Cropper": {
    "params": {
      "strict": true,
      "width": 770
    },
    "data": {
      "filename": "",
      "data": "",
      "cropped": false,
      "size": 150
    },
    "lang": {
      "en": {
        "APPLY": "Apply",
        "CANCEL": "Cancel",
        "IMG": "Select image"
      },
      "ru": {
        "APPLY": "Сохранить",
        "CANCEL": "Отмена",
        "IMG": "Выберите картинку..."
      }
    },
    "init": function ($o,form) {
          var that = this,
              d = that.data;
          var html = $.my.formgen([
            '<div class="fl mr20 tac vat bg-lgray" style="width:600px;height:450px;'
            +'overflow:hidden;position:relative;line-height:450px;" id="crop-frame">',
            '<img id="source" class="vam" style="max-width:600px; max-height:450px; background:white" src="" />',
            '<div class="w600  dib" style="height:450px;position:absolute;top:0;left:0">',
            '<span class="dib vam fs110 button">',
            '<span class="fi-photo"><span class="fs110"> &nbsp;{IMG}</span></span>',
            '</span>',
            '<input type="file" id="file" class="w600 dib" accept="image/jpeg,image/png" '
            +'style="height:450px;cursor:pointer;opacity:0; position:absolute;top:0;left:0">',
            '</div>',
            '</div>',
            '<div class="w150 dib vat" id="xpreview">',
            '<canvas id="preview" class="bg-lgray" style="width:150px;height:150px" width='
            +form.data.size+' height='+form.data.size+' style="overflow:hidden;"></canvas>',
            {row:"150px",rowCss:"fs90 tac"},
            ["","btn#btn-apply.mb5.green.w150",{val:"{APPLY}"}, "btn#btn-close.mr0.w150",{val:"{CANCEL}"}],
            '</div>',
            '<div class="w150 dib vat" id="xwarn">',    
            '</div>',
            '<div class="hide"><canvas id="x2" width='+form.data.size*2+' height='+form.data.size*2+'></canvas></div>'
          ]);
          $o.html(html.assign(that.lang));
        
      },
    "style": {
      " .jcrop-holder": "display:inline-block;vertical-align:middle"
    },
    "ui": {
      "#file": {
        "bind": function (d,v,$o) {
                  var f,
                      $r = $o.my().root,
                      $c = $r.find("#preview"),
                      $img = $r.find("#source"),
                      $c2 = $r.find("#x2"),
                      n={k:1}, img="";
                  if (v!=null && v) {
                    f = $o[0].files[0];
                    if (f) (function(){
                      d.filename = f.name;
                      var fr = new FileReader(), ri, sb64 = [];
                      fr.onload=function(e){
                        ri = new Uint8Array(e.target.result);
                        for (var i=0; i<ri.length; i++) sb64.push(String.fromCharCode(ri[i]));
                        img = window.btoa(sb64.join(""));
                      };
                      fr.onloadend = function (){
                        $img.load(function(){
                          n.k = $img[0].naturalWidth/$img.width();
                        });
                        $img.removeClass("hide")
                        .attr("src","data:image/jpeg;base64,"+img);
                        n.k=$img[0].naturalWidth/$img.width();  
                        $img.Jcrop({
                          onChange: preview,
                          onSelect: preview.debounce(20),
                          aspectRatio: 1,
                          allowMove:true
                        }, function (){
                          this.animateTo([0,0,400,400]);
                        });
                        img="";
                        $o.parent().addClass("hide");
                      };
                      fr.readAsArrayBuffer(f);  
                    })();
                  }
                  function preview (c){
                    if(parseInt(c.w) > 0) {
                      // Show image preview
                      var img = $img[0], cs, ctx, cs2, ctx2, 
                          k = n.k,
                          w = c.w*k; //width to scale in 200px
                      if (w>d.size*2) {
                        // double downsample to remove
                        // bilinear-scaler artifacts
                        cs2 = $c2[0];
                        ctx2 = cs2.getContext("2d");
                        ctx2.fillStyle="white";
                        ctx2.fillRect(0,0,d.size*2, d.size*2);
                        ctx2.drawImage(img, c.x*k, c.y*k, w, w, 0, 0, d.size*2, d.size*2);
                        cs = $c[0];
                        ctx = cs.getContext("2d");
                        ctx.drawImage(cs2, 0, 0, d.size*2, d.size*2, 0, 0, d.size, d.size);
                      } else {
                        cs = $c[0];
                        ctx = cs.getContext("2d");
                        ctx.fillStyle="white";
                        ctx.fillRect(0,0,d.size, d.size);
                        ctx.drawImage(img, c.x*k, c.y*k, w, w, 0, 0, d.size, d.size);
                      }
                      d.cropped=true;
                    }
                  }
                
          }
      },
      "#btn-apply": {
        "bind": function (d,v,$o) {
                  if (v!=null && d.cropped) {
                    d.data = $o.my().root.find("#preview")[0]
                    .toDataURL('image/jpeg',0.93)
                    .substr(23);
                    $o.my().root.trigger("commit");
                  }
                
          },
        "events": "click.my"
      },
      "#btn-close": {
        "bind": function (d,v,$o) {
          if (v!=null) $o.my().root.trigger("cancel");
          },
        "events": "click.my"
      }
    }
  },
  "Keys": {
    "data": {
      "id": "",
      "key": "",
      "stamp": 0,
      "name": "Noname",
      "emitter": "",
      "link": "",
      "desc": "",
      "local": false,
      "shared": []
    },
    "init": function ($o) {
          $o.html($.my.formgen([
            {row:"350px", label:"0px", rowCss:"my-row pb5"},
            ["",'<span class="mr10">','inp#keyid.w90.xgray.bold',{disabled:"disabled"},
             '</span><span>','inp#keyname.w250',{plc:"3-40 chars key name"},'</span>'],
            '<div class="ml6"  style="word-break:break-all">Key is <span id="keyval"></span></div>',
            '<div class="ml6">',
            '<div class="fr w120 hoverlink blue tar lh120 o80 hide mt3" id="xbtn">',
            '<span id="xshare"><span class=" fi-share o70"></span> ',
            '<span id="btn-share" class="pseudolink mr10">Share</span></span>',
            '<span class="fs90 fi-minus o70"></span> ',
            '<span id="btn-delkey" class="pseudolink">Del</span>',
            '</div>',
            'Emitted by <span id="emitter"></span>',
            '</div>'
          ]));
        
      },
    "ui": {
      "#keyid": "id",
      "#keyname": {
        "bind": "name",
        "check": /^.{3,40}$/
      },
      "#keyval": "key",
      "#emitter": function (d) {
              return d.emitter.split("-")[0];
            
        },
      "#xbtn": {
        "bind": function () {
          },
        "css": {
          "hide": function (d) {
            return d.local && d.emitter==cw.crypto.me().name
            }
        }
      },
      "#xshare": {
        "bind": function () {
          },
        "css": {
          "hide": function (d) {
            return d.emitter.split("-")[0]!=cw.crypto.me().name
            }
        }
      },
      "#btn-delkey": {
        "bind": function (d,v,$o) {
                  if (v!=null) $o.trigger("remove");
                
          },
        "events": "click.my"
      },
      "#btn-share": {
        "bind": function (d,v,$o) {
                  if (v!=null) {
                    $.my.modal(
                      '<p>Copy and send this code:</p>'+
                      '<textarea class="w500 fs80 lh120" rows=7>'+
                      cw.lib.base64(d)+
                      '</textarea>'
                      ,500);
                  }
                
          },
        "events": "click.my"
      }
    }
  },
  "FormHTML": ["<div id=\"hheader\" class=\"bbs\"></div>",
    "<div id=\"cw-reg\" class=\"vat dib tal\" style=\"margin:0px auto 20px auto\">",
    "<div id=\"left\" class=\"w180 dib vat pr30 \">",
    {
      "row": "150px",
      "rowCss": "my-row pb10 tac"
    },
    "<div class=\"slide\">",
    "<img id=\"pic\" src=\"\" style=\"width:150px;height:150px;cursor:pointer\" class=\"mt3 db br2\">",
    "<div class=\"xgray w100p tac nw oh ell fs120 mb10 mt10 pr20\">",
    "<span class=\"fi-torso o50 fs80 ml-2\"></span> <span id=\"name\"></span>",
    "</div>",
    ["",
      "inp#pin.w150.fs120.tac",
      {
        "plc": "New PIN code",
        "title": "Leave blank to skip previous PIN.",
        "autocorrect": "off",
        "autocapitalize": "off",
        "autocomplete": "off"
      }],
    ["",
      "btn#btn-save.pl30.pr30.fs100.tac.mt10.mb20",
      {
        "val": "Save profile",
        "style": "border-radius:100px"
      }],
    "</div>",
    "</div>",
    "<div id=\"right\" class=\"w350 dib vat\">",
    "<div class=\"fs90 gray slide\" id=\"about\">",
    "<div class=\"fs90 w350\" id=\"keys\" style=\"display:none\">",
    "<div class=\"pb10\">",
    "<div class=\"fr w120 hoverlink blue tar\">",
    "<span class=\"fi-plus o70\"></span> ",
    "<span id=\"btn-addkey\" class=\"pseudolink\">Add key</span>",
    "</div>",
    "<h3 class=\"xgray mb0 mt0\">Cryptokeys</h3>",
    "</div>",
    "<div id=\"keylist\" class=\"lh150\"></div>",
    "</div>",
    "<div class=\"w350\" id=\"abouttext\"></div>",
    "</div>",
    "<div class=\"gray slide\" style=\"display:none\" id=\"aboutLink\"></div>",
    "</div>",
    "</div>"],
  "style": {
    "": "font-size:18px; line-height:25px;",
    " #hheader": {
      "": "padding:0px 20px 14px 20px;margin:0 0 20px 0; text-align:center;width:100%;",
      " .hub-logo": "max-width:44px;max-height:33px; display:inline-block; vertical-align:middle;",
      " .hub-title": "max-width:calc(100% - 44px); font-size:1.76em; line-height:1.3em; padding:0 0 0 9px;display:inline-block; vertical-align:middle;  overflow:hidden; text-overflow:ellipsis;"
    },
    "#cw-reg": "width:530px;"
  }
} ,{ })
        .fail(function (msg){
        cw.lib.note(msg, "error")
      });
    })
    .fail(function(code, msg, e){

      // Write error
      $('#cw-page #cw-space').html(
        '<div class="dib vat p100 red1 tac">CloudWall Profile Editor can’t start. ' 
        + (msg+'').escapeHTML()
        +'</div>'
      );
      console.log("=== CloudWall Profile Editor failed to start ===", code, msg, e);
    });

    // - - - - - - - - - 

    function _checkLocalProfileStatic() {
      // System DB and profile
      var pi = $.Deferred();

      cw.profile().then(function(profile){
        cw.userCtx = {name:profile.name, roles:['_admin']};
        hasLocalProfile = true;
        pi.resolve();
      })
      .fail(function(){ pi.resolve(); });

      return pi.promise();
    }
  }

})();

// ------------------------------------

// CW 2.4.2 
// Plugins localizer
// (c) 2019 ermouth

(function (){

  var LANG = {en:{}, ru:{}};

  cw.localizePlugins = function(lang){
    if (LANG[lang]) Object.keys(LANG[lang]).forEach(function(k){
      try{LANG[lang][k]()}catch(e){}
    });
  };

  // ==== RU locale ====

  //$.ui
  LANG.ru.datepicker = function(){
    if (!$.datepicker) return;
    $.datepicker.regional['RU'] = $.datepicker.regional['ru'] = {
      closeText: 'Закрыть',
      prevText: '&#x3c;Пред',
      nextText: 'След&#x3e;',
      currentText: 'Сегодня',
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthNamesShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
      dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
      dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
      dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      weekHeader: 'Нед',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: '',
      dateFormat:"dd.mm.yy"//"d M y"
    };
    $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
  }

  // select2
  LANG.ru.select2 = function(){
    if (!$.fn.select2) return;
    $.extend($.fn.select2.defaults, {
      formatNoMatches: function () { return 'Ничего не нашлось'; },
      formatInputTooShort: function (input, min) { 
        var l = min - input.length;
        return 'Ещё ' + (l) + ' знак'; 
      },
      formatSelectionTooBig: function (limit) {
        var ll = (+limit).pad(3).last(2);
        return 'Не более ' + limit + ' значени' + (ll!='11' && ll.last(1)=='1'? 'я' : 'й'); 
      },
      formatLoadMore: function (pageNumber) { return 'Загрузка…'; },
      formatSearching: function () { return 'Поиск…'; }
    });
  }

  // Redactor
  LANG.ru.redactor = function(){
    if (!$.fn.redactor) return;
    try {
      window.RLANG = {
        html: 					'Код',
        video: 					'Видео',
        image: 					'Изображение',
        table: 					'Таблица',
        link: 					'Ссылка',
        link_insert: 		'Вставить ссылку...',
        link_edit: 			'Изменить ссылку',
        unlink: 				'Удалить ссылку',
        formatting: 		'Форматирование',
        paragraph: 			'Обычный текст',
        quote: 					'Цитата',
        code: 					'Код',
        header1: 				'Заголовок 1',
        header2: 				'Заголовок 2',
        header3:				'Заголовок 3',
        header4: 				'Заголовок 4',
        bold:  					'Полужирный',
        italic: 				'Наклонный',
        fontcolor:			'Цвет текста',
        backcolor: 			'Заливка текста',
        unorderedlist: 	'Обычный список',
        orderedlist: 		'Нумерованный список',
        outdent: 				'Уменьшить отступ',
        indent: 				'Увеличить отступ',
        cancel: 				'Отменить',
        insert: 				'Вставить',
        save: 					'Ok',
        _delete: 				'Удалить',
        insert_table: 				'Вставить таблицу',
        insert_row_above: 		'Добавить строку сверху',
        insert_row_below: 		'Добавить строку снизу',
        insert_column_left: 	'Добавить столбец слева',
        insert_column_right: 	'Добавить столбец справа',
        delete_column: 				'Удалить столбец',
        delete_row: 					'Удалить строку',
        delete_table: 				'Удалить таблицу',
        rows: 					'Строки',
        columns: 				'Столбцы',
        add_head: 			'Добавить заголовок',
        delete_head: 		'Удалить заголовок',
        title: 					'Подсказка',
        image_position: 'Обтекание текстом',
        none: 					'Нет',
        left: 					'Cлева',
        right: 					'Cправа',
        image_web_link: 'Cсылка на изображение',
        text: 					'Текст',
        mailto: 				'e-mail',
        web: 						'URL',
        video_html_code: 'Код видеоролика',
        file: 					'Файл',
        upload: 				'Загрузить',
        download: 			'Скачать',
        choose: 				'Выбрать',
        or_choose: 			'Или выберите',
        drop_file_here: 'Перетащите файл сюда',
        align_left:			'По левому краю',
        align_center: 	'По центру',
        align_right: 		'По правому краю',
        align_justify: 	'Выровнять текст по ширине',
        horizontalrule: 'Горизонтальная линейка',
        fullscreen: 		'Во весь экран',
        deleted: 				'Зачеркнутый',
        anchor: 				'Якорь',
        link_new_tab: 	'Открывать в новой вкладке',
        underline: 			'Подчеркнутый',
        alignment: 			'Выравнивание',
        filename: 			'Название (необязательно)'
      };
    } catch(e){};
  }
})();

// ------------------------------------

cw.config = function(key){return cw.CW[key]};

