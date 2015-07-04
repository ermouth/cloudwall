/**
 * CloudWall 1.7.0 crypto lib and settings sandbox
 * Created by ermouth 2015-06-27
 */
if (!("cw" in window)) window.cw={};


// #### START LOG ####

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
			ses = isF(cw.session)?cw.session():
				(isO(cw.lib) && isF(cw.lib.hash4))? cw.lib.hash4 (Date.now()+" "+Number.random(1e5,1e6)):
				Number.random(65536,0x100000-1).toString(16).last(4),
			lastR = Date.now()-20000,
			lastM = Date.now();
	
	if (!isF(cw.session)) cw.session = _session;
	
	cw["log"] = (function _logger (A1){
		var i, a = [], 
				l = arguments.length,
				now = Date.now();
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
			if (marg >= r.length) s.push(r);
			else {
				s.push(JSON.stringify("Truncated "+$.type(a[i])+": "+(isS(a[i])?a[i]:r).truncate(marg-1,"middle","…")));
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
				lines = pl.split("\n");
				var ctr = 0, i = lines.length-1, slines = 1;
				for (i;i>-1;i--) {
					ctr = ctr+lines[i].length;
					if (ctr > mprev) break;
					slines+=1;
				}
				pl = lines.last(slines).join("\n");
				lines=null;
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
			if (!isN(r) && !isS(r) && !Object.isDate(r)) {
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
					if (r.size()) {
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


// #### START CRYPTO ####

if (!cw.crypto) cw.crypto = (function() {

	var Pouch = window.PouchDB,
			isA = Object.isArray, isB = Object.isBoolean, isS = Object.isString, isO = Object.isObject,
			isN = Object.isNumber, isR = Object.isRegExp, isF = Object.isFunction;

	var C, S, S0, PIN, PIN2, D0={}, D={}, me={}, 
			fields = "type crypto stamp creator name pic tags _id _rev _attachments".split(' '),
			fields1 = fields.slice(0).add('_attachments'),
			CR = 'CRYPTO',
			keys = {},
			keysTtl = 0;

	function _pi(){return $.Deferred();}
	
	
	//=======================================

	var encode = function(doc) {
		if(!doc || !Object.isObject(doc)) return doc;
		var key, toEnc, resDoc;


		if (doc.crypto) key = getKeys(doc.crypto), key=key?key.key:null;
		if (!key && doc._id==="cw" && doc.type==="settings") {
			key=doc.pin;
			if(key && !PIN) PIN=key;
		}

		if(key) {
			resDoc = Object.select(doc, fields);
			resDoc.CRYPTO = cw.lib.encDoc(Object.reject(doc, fields), key);
			//TODO: enc attachments
			return resDoc;
		}
		return doc;
	};
	
	
	//=======================================

	var decode = function(doc, pin) {
		if(!Object.isObject(doc)) return doc;
		var key, decoded, resDoc;

		if(doc.hasOwnProperty(CR)) {
			if (doc.crypto) key = getKeys(doc.crypto), key=key?key.key:null;
			if (!key && doc._id==="cw") key=pin;
		}

		if(key) {
			try {
				decoded = cw.lib.decDoc(doc.CRYPTO, key);
				resDoc = Object.reject(Object.merge(Object.clone(doc,true), decoded), CR);
			} catch (e) {
				return doc;
			}
			//doc.CRYPTO="";
			return resDoc;
		}
		return doc;
	};
	
	//=======================================

	var decodeAtt = function(dataBlob, keyId) {
		if(!dataBlob || !keyId) return dataBlob;
		var key;
		if((key = getKeys(keyId)) && (key = key.key)) {
			var dataBase64 = cw.lib.blob2base64(dataBlob),
					resBase64 = cw.lib.base64(btoa(cw.lib.dec(dataBase64, key).from(1)), true);
			return cw.lib.base642blob(resBase64);
		}
		return dataBlob;
	};
	
	
	//=======================================

	var getKeys = function(keyId) {
		if (keys[keyId]) return keys[keyId];
		keys={};
		var xkeys=S?S.keys:[];
		for (var i=0;i<xkeys.length;i++) {
			keys[xkeys[i].id] = xkeys[i];
		}
		return keys[keyId]||keys;
	};
	
	
	//=======================================

	var hasKey = function (keyId) {getKeys();return keys.hasOwnProperty(keyId);}
	

	//=======================================

	var getKeysPub = function() { // !!!!!!!!!! MODIFIED !!!!!!!!
		var keys = getKeys(),
				resKeys = [],
				key, k;
		Object.keys(keys).forEach(function(keyId) {
			if((key = keys[keyId]) && key.name) {
				resKeys.push({id:keyId, name:key.name+", "+key.emitter.split("-")[0]});
			}
		});
		return resKeys;
	};
	
	
	//=======================================

	var getme = function () {
		return Object.merge({}, me||{});
	}
	
	//=======================================

	var dbs = function () {
		return Object.keys(D);
	}
	
	//=======================================

	var dbsettings = function (dbid, update, done){
		if (isS(dbid) && null==update) return Object.merge({}, D[dbid]||{}, true);
		else if (null==dbid) return Object.merge({}, D, true);
		else if (isO(update)) {
			//we have settings update request
			var i,
					d = Object.clone(update,true), 
					pi=_pi(),
					S0 = Object.clone(S, true),
					crc = cw.lib.md5(cw.lib.dry(S)),
					re=/^(http[s]?\:\/\/)[^\:@\/]+:[^@]+@(.+)(\/?)$/,
					list="apps ico pic name title desc stamp start sync creator".split(" ").sort(),
					syncs={},
					sync=[],
					surl,
					xurl;

			S.type="settings";

			pi.always(function(){
				// restore settings if fail
				S=S0;
				D0 = {};
				for (var i=0, k;i<S.dbs.length;i++) {
					D0[S.dbs[i].name] = S.dbs[i];
				}
			});
			
			
			//- - - - - - - delete db - - - - - - -

			if (d._cmd === "delete"){
				$.my.modal({
					manifest:"cw.Sys.Confirm",
					data:{
						text:'<div class="red">'
						+'<span class="fi-alert mr5 fs90"></span> DB removal requested. Please '
						+'close all other tabs and browsers with CloudWall opened. Removing DB '
						+'on this machine does not remove it on linked machines’ accounts.'
						+' When DB purge finishes, tab reloads.'
						+'</div>',
						ok:"Remove DB"
					}
				}).then(function(res){
					var dbsnew=[];
					if (isO(res) && res.cmd == "commit") {
						for (var i=0;i<S.dbs.length;i++) {
							if (S.dbs[i].name!==d.name) dbsnew.push(S.dbs[i]);
							else cd = Object.clone(S.dbs[i],true);
						}
						S.dbs=dbsnew;

						cw.db(d.name).sync(false);
						pi.then(function(){

							if (Object.isArray(cd.sync)) {
								for (var i=0;i<cd.sync.length;i++) {
									cd.sync[i].dir.forEach(function(dir){
										localStorage.removeItem(["","repl",dir, _u(cd.sync[i].url)].join("_"))
									})
								}
							}

							Pouch.destroy(d.name).then(function(){
								cw.log("DB ‘"+d.name+"’ destroyed, reload scheduled.");
								window.location.reload();
							});
						}.debounce(500));
						
						cw.log("Local DB ‘"+d.name+"’ deletion confirmed, saving updated settings.");
						_saveSettings(S);
						//console.log(S, dbid);
					}
					function _u(s){
						// masks pwd in url
						return s.replace(/^(http[s]?\:\/\/[^\:@\/]+:)[^@]+(@.+)$/,"$1•••••$2");
					}
				}).fail(function(){
					pi.reject("DB deletion cancelled.");
				})
			}
			
			
			//- - - - - - - sync db - - - - - - -
			
			else if (d._cmd === "sync" || d._cmd === "sync0"){
				$.my.modal({
					manifest:"cw.Sys.Confirm",
					data:{
						text:'<div class="">'
						+'<span class="fi-clock mr5 fs90 green"></span> DB forced sync requested. '
						+'It can take some time, but you can continue working during process. '
						+' When replication finish you’ll see notification.'
						+'</div>',
						ok:"Force replication"
					}
				}).then(function(res){
					
					var cd = D0[d.name], dbsnew=[], ptr=0;
					if (isO(res) && res.cmd == "commit") {
						for (var i=0;i<cd.sync.length;i++) {
							if (cd.sync[i].dir.length) {
								(function(sync, sync1){
									cw.log("Started forced sync ‘"+d.name+"’ "+sync.dir.join("&")+" "+sync.url);
									var ptr=0;
									cw.db(d.name).sync(false);
									
									var opts = d._cmd === "sync0"?{since:0}:{};
									
									cw.db(d.name)
									.replicate[sync.dir[ptr]](sync.url, opts, function(e, ok){

										if (!e) _ok(ok);
										else _fail(e);
										ptr+=1;
										
										if (sync.dir[ptr]) cw.db(d.name)
										.replicate[sync.dir[ptr]](sync.url, opts, function(e, ok){
											if (!e) _ok(ok);
											else _fail(e);
											_done(e,ok);
										});
										else _done(e,ok);
									});
									
									function _ok (msg) {
										cw.log("Forced sync ‘"+d.name+"’ "+sync.dir[ptr]+" "+sync.url+" finished", msg);
										cw.note("Replication "+sync.dir[ptr]+" "+sync1.url+" finished.", "ok");
									}
									
									function _fail (msg) {
										cw.log("Forced sync ‘"+d.name+"’ "+sync.dir[ptr]+" "+sync.url+" failed", msg);
										cw.note("Replication "+sync.dir[ptr]+" "+sync1.url+" failed.", "error");
										console.log(msg);
									}
									
									function _done(e,ok) {
										if (isF(done)) try {done(e, ok);}catch(err){};
										cw.db(d.name).sync(true);
									}
									
								})(cd.sync[i], d.sync[i]);
							}
						}
						pi.resolve("Started forced DB sync.");
					}
					
				}).fail(function(){
					pi.reject("DB forced sync cancelled.");
				})
			}
			
			
			//- - - - - - - resync db - - - - - - -
			
			else if (d._cmd === "resync"){
				$.my.modal({
					manifest:"cw.Sys.Confirm",
					data:{
						text:'<div class="">'
						+'<span class="fi-alert mr5 fs90 red"></span> DB resync requested. All '
						+'content of current DB will be discarded on on this machine. '
						+' Operation does not remove it on linked machines’ accounts.'
						+' When process is finished, tab reloads.'
						+'</div>',
						ok:"Clean and resync DB"
					}
				}).then(function(res){
					var dbsnew=[];
					if (isO(res) && res.cmd == "commit") {
						
						cw.log("Starting ‘"+d.name+"’ destroy+resync.");

						var cd = D0[d.name];
						for (i=0;i<cd.sync.length;i++) {
							cd.sync[i].dir.forEach(function(dir){
								localStorage.removeItem(["","repl",dir, _u(cd.sync[i].url)].join("_"))
							})
						}

						Pouch.destroy(d.name).then(function(){
							cw.log("DB ‘"+d.name+"’ destroyed for resync, reload scheduled.");
							window.location.reload();
						}.debounce(500));
						//console.log(S, dbid);
					}

					function _u(s){
						// masks pwd in url
						return s.replace(/^(http[s]?\:\/\/[^\:@\/]+:)[^@]+(@.+)$/,"$1•••••$2");
					}

					function _ls(dir, url, data) {
						if (!data) return cw.lib.unjson(JSON.parse(localStorage.getItem("_repl_"+dir+"_"+url)));
						else localStorage.setItem("_repl_"+dir+"_"+url, cw.lib.json(data));
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
						surl=cd.sync[i].url.replace(re,"$1$2");
						syncs[surl]=cd.sync[i].url;
					}
					//check if and what urls changed
					for (i=0;i<d.sync.length;i++) {
						xurl = d.sync[i].url;
						if (xurl){
							if (xurl.has("•••••")) {
								surl =syncs[xurl.replace(re,"$1$2")];
								if (surl) {
									d.sync[i].url = surl;
									sync.push(d.sync[i]);
								}
							} else sync.push(d.sync[i]);
						};

					}
					D0[d.name].sync=sync.slice(0);
					Object.merge(D0[d.name], Object.reject(d,"sync"));
					_saveSettings(S);
				} else if (d.name && isA(d.sync) && d.title && d.pic) {
					S.dbs.push(Object.clone(Object.select(d, list)));
					_saveSettings(S);
				}
			}



			return pi.promise();
		}

		function _saveSettings(obj) {
			//S.pin=PIN2;
			var doc = cw.lib.dry(S);
			if (cw.lib.md5(doc)===crc) return pi.resolve("Nothing changed – no need to save");

			var db = new Pouch("cw", function (e, res) {
				if (e) pi.reject("Error connectiong DB during settings save");
				else db.get("cw", function (e, res) {
					if (e) pi.reject("Error reading previous settings during settings save");
					else db.put(
						Object.merge(
							encode(Object.merge(doc,{crypto:"PIN", pin:PIN2||doc.pin})), 
							{_rev:res._rev, stamp:Date.now()}
						), 
						function (e,res){
							if (e) pi.reject("Error saving settings");
							else {
								pi.resolve.debounce(1)("Settings saved sucessfully");
							}
							//db.close();
						}
					);
				});
			});	
		}
	}

	var getSyncUrl = function (dbid, idx) {
		return cw.lib.getref(D0[dbid]||{}, 'sync.'+idx+'.url');
	}


	/* ############# INIT ###############*/

	var init = function(doc) {
		var pi=_pi();
		if (!isO(doc) || !/^settings$/.test(doc.type) || !doc.name) pi.reject("Invalid settings doc");
		if (isO(S) && doc._rev===S._rev) {
			pi.resolve(Object.keys(D), true);
			return pi.promise();
		}
		if (/*isS(doc.crypto) &&*/ doc.CRYPTO && !isS(PIN)) {
			//check if pin===""
			if (decode(doc, _pin2("",doc.name)).uid) {
				PIN=_pin("");
				PIN2=_pin2("", doc.name);
				_decSettings (doc);
			}
			else $.my.modal({
				manifest:{
					data:{pin:""},
					init:function ($o){
						$o.formgen([
							{row:"350px",rowCss:"my-row pt20 tac"},
							'<div class="tac mt15 mb5"><img src="http://s3-eu-west-1.amazonaws.com/cloudwall.me/0.9/i/logo.png" '
							+'class="mr20 o60" style="width:266px;"></div>',
							['','<input id="pin" type="password" placeholder="Enter PIN" class="w250 fs150 tac pt10 pb10 blue" >'],
							['', 'btn#btn-ok.fs110.pl30.pr30.mb10',{val:"Log in", style:"border-radius:100px"}]
						]);
						$o.find("#pin").keydown(function(e){
							if(e.keyCode==13) cw.debug=false, $o.trigger("commit.my");
							if(e.keyCode==9) e.preventDefault(), cw.debug=true, $o.trigger("commit.my");
						})/*.trigger("focus")*/;
					},
					ui:{
						"#pin":"pin",
						"#btn-ok": {
							bind: function(d,v,$o){
								if (v!=null) $o.trigger("commit.my");
							},
							events:"click.my"
						}
					}
				},
				width:350,
				esc:true
			})
			.always(function(res){	
				if (isO(res)) {
					PIN=_pin(res.pin);
					PIN2=_pin2(res.pin, doc.name);
					_decSettings (doc);	
				} else pi.reject("No PIN provided to decrypt settings")
			});
		}
		else  cw.debug=true, _decSettings (doc);

		return pi.promise();
		
		//- - - - - - - - - - - - - - - - - - -

		function _decSettings (doc) {
			var obj = decode(doc, PIN);
			if (!obj.dbs || !obj.uid) {
				obj = decode(doc, PIN2);
				if (!obj.dbs || !obj.uid) {
					cw.log ("Invalid PIN entered on start.");
					pi.reject("Invalid PIN, can’t decrypt settings");
				}
			}
			if (obj.dbs && obj.uid) {

				//gen me
				me.name=obj.name;
				me.pic=obj.pic;
				try {
					if (obj.pic.length>2e3) {
						var upic=new Image(); upic.src=obj.pic;
						img = cw.lib.image(upic);
						me.pic = img.sharpen(0.5).resample(64,64).sharpen(0.1).jpeg(0.99);
					};
				}catch(e) {
					me.pic = obj.pic;
				}
				me.uid=obj.uid||cw.lib.hash8(obj.name+cw.lib.hash8(obj.pin));
				me.contact=obj.contact||"";
				me._id=["user",obj.name,obj.uid].join("-");
				me.crc = cw.lib.hash8(obj.pic+me._id+me.contact);

				S = Object.merge({}, obj);

				// send stats
				/*try {
					//enum
					var synced = S.dbs.reduce(function(a,b){
						return a+(b.sync.length?1:0);
					},0);
					$.ajax({
						url:"/x/started",
						dataType:"json",
						type:"POST",
						data:{
							user:me.name, 
							uid:me.uid, 
							dbs:S.dbs.length, 
							synced:synced
						}
					});
				} catch(e) {}*/

				// gen shadow dbsettings
				D = {};
				D0 = {};
				for (var i=0, k;i<S.dbs.length;i++) {
					k=S.dbs[i].name;
					D[k] = Object.clone(S.dbs[i], true);
					D0[k] = S.dbs[i];
					//augment passwords
					if (isA(D[k].sync)){
						for (var j=0;j<D[k].sync.length;j++)
							D[k].sync[j].url = D[k].sync[j].url.replace(/^(http[s]?\:\/\/[^\:@\/]+:)[^@]+(@.+)$/,"$1•••••$2");
					}
				}
				// delete unsafe
				if (!cw.debug) {
					C._getDbSettings=C._settings=C._settings=null;
					delete C._getDbSettings;
					delete C._getSyncUrl;
					delete C._settings;
				}

				(function(){pi.resolve(Object.keys(D));}).delay(300);

			}
		}
	}

	// Return public methods
	C = {
		"enc": encode.fill(),
		"dec": decode.fill(),
		"keys": getKeysPub.fill(),
		"has": hasKey.fill(),
		"att": decodeAtt.fill(),
		"share": (new Function),
		"install": (new Function),
		"_init": init.fill(),
		"dblist":dbs.fill(),
		"me":getme.fill(),
		"_getDbSettings": dbsettings.fill(),
		"_getSyncUrl":getSyncUrl.fill(),
		"_settings": (function () {return S}).fill()
	};

	return C;

	function _pin(s) {
		return cw.lib.md5(cw.lib.md5(s)+cw.lib.hash8(s));
	}

	function _pin2(s, user) {
		return cw.lib.md5(_pin(s)+user);
	}

})();
