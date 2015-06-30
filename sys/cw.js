/**
 * CloudWall 1.7.0 Main 
 * Created by ermouth 2015-06-27
 */

(function(){
	
	var VERSION = "1.7.0";
	
	// Some shortcuts and constants
	var $E = $.extend, 
		n = function (o) {return o!==null && o!==undefined;}, 
		nn=n, N = null, TMP, FN=function(){},
		ls = localStorage,
		d8="{yyyy}-{MM}-{dd}", h24="{HH}:{mm}", Ob="object", Da="data", Ar = "array", St = "string", Fu="function", 
		isA = Object.isArray, isB = Object.isBoolean, isS = Object.isString, isO = Object.isObject,
		isN = Object.isNumber, isR = Object.isRegExp, isF = Object.isFunction, 
		isP = function (a) {/*is promise*/return !!(null!=a&&(isO(a)||a.jquery)&&isF(a.then));},
		isRej = function (p) {/*is promise rejected*/ return isP(p)?(p.state()==="rejected"):null;}; 
		
	var Pouch = window.PouchDB,
		lib = cw.lib,
		Session = lib.hash4 (Date.now()+" "+Number.random(1e5,1e6)),
		CW = ({												
	
	// CONSTANTS AND SYSSETTINGS
	
	"$body":"#cw-body"								// body, real $ obj will be mounted here
	,"$header":"#cw-header"						// header, will came $ obj
	,"$upic":"#cw-upic"
	,"$notes":"#cw-notes"							// sys msg container
	,minBodyWidth:1200								// min body width, px
	,margins:100											// desired outer margins around body

	,"$space":"#cw-space"							// slots and panes container
	,maxSpaceWidth:$(window).width()-100			
	,defaultSpaceWidth:1200							// default width of work area

	,"$slots":"#cw-slots"							// app slots container
	,"$left":"#cw-side"								// db list app container
	,"$right":"#cw-dock"							// dock app container
	,leftWidth:180										// db list app width
	,rightWidth:200										// dock width
	,appLeft:"cw.Sys.Side"						// manifest id of db list
	,appRight:"cw.Sys.Dock"						// manifest id of dock app
	,appTrust:"cw.Sys.Trust"					//trust modal app

	,slot:'<div class="cw-app"></div>'
	,pane:'<div class="cw-pane"></div>'
	,paneP:'<div class="cw-pane-container"></div>'
	,paneBtn:'<span class="cw-side-hoverpane" title="Open panel">'
		+'<button class="fs110 pt4 pb4 lh100 pl8 pr8 mb0 mr0 lgray o80">'
		+'<span class="fi-list"></span>'
		+'</button></span>'
	,slotTimeout:3000
	,slotCloseTimeout:500
	,slotLayoutDelay:110

	,appDefault:"cw/List"
	,appToUrlTrackerDebounce:150	
	,urlObserverInterval:333	
	,readStateSaverInterval:5000	
	,dbWatchersDebounce:5
	,appNameMask:/^[A-Z][A-Za-z0-9]{2,24}(\.[A-Za-z0-9]{1,25}){0,4}$/
	,updateURL:"http://cloudwall.me/x/"
	,pluginSetDoc:"cw-Sys-Plugins-4vx1"

	,syncRestart:21000								// restart interval of replication
	,dbConnTimeout:30000

	,gcAttsInterval:600000						// ttl of freed attachments in cache
	,i20n:{}													// internationalization dict
})
	
	
		,Lock = {								// system lockstate promise
			pi:$.Deferred(), state:false
		}
		,$body=$("body")				// system DOM body, may change on init
		,sys										// system db
		,apps={}								// app slots by name
		,forms={								// forms cache by dbname
			"cw":{
				_src:{},
				_name:"System manifest cache"
			}
		}						
		,dbapps={"cw":{}}				// apps cache by dbname
		,appfiles={"cw":{}}			// app resources cache by dbname
		,dbs={}									// dbs by dbname, mapped to cw.db(dbname)
		,me={										// user obj 
			type:"user"
			,name:""
			,pic:""
			,uid:""
			,contact:""
			,crc:""
			,_id:""
		}		
		,ram={}									// cache object
		,tags={"cw":{}}					// tags cache
		,state={}								// user apps state holder, cw.state
		,types={"cw":{}}				// list of types
		,users ={}							// db users
		,read = Object.extended()				// list of readhidelist objects form cw, represent read and hidden states, cw.read
		,watchers = Object.extended()		// change watchers
		,_notifyWatchers				// system changes queue manager
		,_connect
		,_Events
		,_docChanged
		,_getSyncUrl
		,_getDbSettings
		,_getSettings
		,_initCrypto
		,_att
		,_logger;
	
	if (!cw.TMP) cw.TMP={};
	
	if (isF(cw.session)) Session = cw.session();
	else cw.session = function(){return Session};
	
	_logger=isF(cw.log)?cw.log:console.log.bind(console);
	
	con ("~~~ Started session "+Session+" ~~~");
	
	// -------- Includes -------------
	
	/******* LOCK *****/

function _lock(s) {
	if (undefined!==s) {
		cw.log(!!s?"Lock":"Unlock");
		Lock.state=!!s; 
		Lock.pi.notify(Lock.state);
	}
	return Lock.pi.promise();
}
function _locked () {return Lock.state;}


/******* PROMISE BUILDER *****/

function _pi(silent){
	var pi=$.Deferred();
	pi.then(function(data){
		// ToDo: log success
	}, function (e, msg) {
		// ToDo: log fail
	});
	return pi;
}


/******* MAIN EVENTS QUEUE *****/

_Events=_pi();
cw.event = function(A1,A2,A3) {
	if (isF(A1)) return _Events.promise().progress(A1), _Events.promise();
	else if (isS(A1)) _Events.notify(A1,A2,A3);
	else return _Events.promise();
};

/******* CONSOLE *****/

function con () {
	_logger.apply(null, arguments);
	if (cw.debug) console.log.apply(console, arguments);
}


/******* NOTE *******/

function _note (msg, type, delay){
	// Shows fading notes on right side of screen
	var type0=type||"";
	$('<div class="'+type0+'" style="display:none">'+msg+'</div>')
	.prependTo(CW.$notes)
	.slideDown(100)
	.delay(delay||3000)
	.fadeOut(700, function (){$(this).remove()});
	con((type?type+": ":"")+msg);
	return type0;
}


/******* QUEUE *****/

function _qnotify (watchers) {
	//system changes queues manager, 
	//notifies promises attached
	var i, j, a=[], r={},tmp;
	for (i in watchers) {
		if (tmp=watchers[i].queue.length) {
			a=watchers[i].queue.splice(0,tmp);
			watchers[i].revs={}; watchers[i].idxs={};
			r[i]={};
			for (j in watchers[i].types) r[i][j]=[];
			for (j=0;j<a.length;j++) {
				r[i][""].push(a[j]);
				if (undefined!==r[i][a[j].type] 
						&& undefined!==a[j].type)  
					r[i][a[j].type].push(a[j]);
			}
			for (j in watchers[i].types) if (!r[i][j].length) delete r[i][j];
		}
	}
	//we now have r filled with queues to send to watchers
	for (i in r) {
		for (j in r[i]) watchers[i].types[j].notify(r[i][j]);
	};	
};

function _qchanged (doc, watchers, notifier) {
	//manages notification mechanics of watchers queue
	var dbid = doc._db, w;

	// we've got update

	if (!doc.type || !doc._db || !doc._id || !doc._rev ) return null;
	//if (!watchers[dbid]) watchers[dbid]={queue:[], revs:{}, idxs:{}, types:{"":$.Deferred()}};
	w = watchers[dbid];
	if (!w.revs[doc._id]) {
		w.idxs[doc._id]=w.queue.push(doc)-1;
		w.revs[doc._id]=doc._rev;
	}
	else {
		w.queue[w.idxs[doc._id]]=doc;
		w.revs[doc._id]=doc._rev;
	} 
	notifier();

}


/**** INTERNATIONALIZATION ****/

function i20n (s) {
	if (s in CW.i20n) return CW.i20n[s];
	return s;
}


/******* MOUNT CRYPTO *******/

function _encrypt (obj) { return cw.crypto.enc(lib.dry(obj)); }
function _decrypt (obj) { return cw.crypto.dec(obj);  }


	/******* REGISTER APP *******/
function _register (A1, A2) {
	var b, c, i, j, dbid="cw", obj = A1, name, t, cache, oapp;
	if (isS(A2)) dbid=A2;

	if (!isO(obj)) return null;

	cache = $.my.cache(obj, (A2 && A2!=="cw")?forms[dbid]:undefined);
	if (!cache) return null;

	if (!(oapp=obj.app)  || !obj.id || !obj.app.name) return null; 

	con("Received app "+obj.id+" from "+dbid+", _rev is "+obj._rev);

	if (!dbapps[dbid][oapp.name]) dbapps[dbid][oapp.name]={};

	Object.merge(dbapps[dbid][oapp.name], {
		name:oapp.name,
		id:obj.id,
		pic:obj.pic||oapp.ico,
		ico:oapp.ico||obj.pic,
		title:oapp.title,
		author:oapp.author,
		isEditor:!!oapp.nodecmd
	});

	if(isO(obj.app.types) && Object.size(obj.app.types)) {

		//we have editor, register its types
		t = obj.app.types;
		name = obj.id;
		for (i in t) {
			if (!types[dbid][i]) types[dbid][i]={};
			b = types[dbid][i];
			for (j=0;j<t[i].length;j++) {
				if (!b[t[i][j]]) b[t[i][j]]=[];
				c =  b[t[i][j]];
				if (c.indexOf(n)===-1) c.push(name);
				b[t[i][j]]=c.unique();
			}
		}
		if (dbid!=="cw") Object.merge(types[dbid],types["cw"],true);
		else {
			for (i in types) if (i!=="cw") Object.merge(types[i],types["cw"],true);
		}
	};
	cw.event("app manifest update");
	return cache;
}
	
	/******* URL LIB *******/

$.extend(cw.lib, {
	"parseurl": function(url, num) {
		//returns array of components
		// of length num
		if (!url || !isS(url)) return con("--pu--not a tring"), null;
		var res={
			src:"",
			url:"",
			initurl:"",

			db:"",	dbtitle:"",
			app:"", apptitle:"", appid:"",
			state:"", initstate:"", 

			stateobj:{},

			cmd:"", cmdtypes:[], docid:"", doctype:""
		}, 
				a=[], s="", db, app, ap, state, newstate, newurl="";

		s=url.has("#")?url.split("#")[1]||"":(url+"");
		s=s.replace(/\/+$/,"");
		a=s.split("/").compact(true);

		if (a.length<2 || a.length>4)  return con("--pu--short/long"), (null);

		//db
		if (!(db = dbs[a[0]])) return con("--pu--no db"),  (null);
		res.db=db.name;
		res.dbtitle=db.title;

		//app
		if (!(app=cw.form(a[1], db.name))) return con("--pu--no app"),  (null);
		res.appid=app.id;
		res.app=app.app.name; 
		res.apptitle=app.app.title;
		ap=app.app;

		//init state
		if (null==a[2]) a[2]="";
		if (null===(state=lib.fromurl64(a[2]))) return con("--pu--cant fromurl64"),(null);
		if ($.type(state)!==$.type(ap.maskstate)) {
			if (state!=="") return con("--pu--invalid state"), null;
			else state=lib.mask(app.data, ap.maskstate);
		} else {
			state=lib.unmask(state, ap.maskstate);
		};

		if (null===state) return con("--pu--cant getstate"), null;

		//make editor fields if any,
		//extend and correct state if needed
		if (isA(ap.maskstate) 
				&& ap.maskstate.length===2
				&& ap.maskstate[0]===ap.nodecmd
				&& ap.maskstate[1]===ap.nodedoc+"._id"
			 ) {
			res.cmd= lib.mask(state,ap.maskstate[0])||"create";
			res.docid= lib.mask(state,ap.maskstate[1])||"";

			if (isS(res.cmd) && isO(ap.types) && Object.keys(ap.types).length) {
				//check if cmd allowed for app
				for (var i in ap.types) 
					if (isA(ap.types[i]) && ap.types[i].indexOf(res.cmd)!=-1)
						res.cmdtypes.push(i);
				if (!res.cmdtypes.length) return con("--pu--no such cmd"), null;
			}

			// if we have "create" cmd...
			if (res.cmd ==="create" ) {

				var newsrc = res.docid, 
						newid=lib.uuid(), 
						newtype, 
						oldid;

				if (!newsrc) {
					//no _id and app can edit only one post type
					if (isO(ap.types) && res.cmdtypes.length===1) newtype=res.cmdtypes[0];	
				} else {
					//shown type, not _id
					if (isO(ap.types) && ap.types[newsrc])newtype=newsrc;
					else oldid = newsrc;
				}

				if (newtype||oldid) {
					$.extend(true, state, lib.unmask(newid, ap.nodedoc+"._id"));
					res.doctype = newtype||"";
					res.oldid = oldid||"";
					res.docid = newid;
				} 
				else return con("--pu--cant create"), null;
			} //--- end "create" cmd
			else if (!res.docid) return con("--pu--invalid id for cmd"), null;
		}

		//...stash initstate
		res.initstate = lib.tourl64(lib.mask(state,ap.maskstate));

		// current state
		if (!a[3]) newstate=state, res.state = res.initstate;
		else if (null!==(newstate=lib.fromurl64(a[3]))) {
			if ($.type(newstate)===$.type(ap.maskstate)) {
				newstate=lib.unmask(newstate, ap.maskstate);
				if (isO(newstate)) {
					$.extend(true, state, newstate);
				}
			}	
		}

		if (null===newstate) return con("--pu--cant newstate"), null;

		res.state = lib.tourl64(lib.mask(state,ap.maskstate));
		res.stateobj = Object.clone(state,true);

		//recombine url
		newurl=[res.db,res.app,res.initstate].join("/");
		res.initurl=newurl;
		if (res.initstate!==res.state) newurl+="/"+res.state;
		res.url=newurl;
		res.src=s;
		return res;

	}
});


/*******  URL reflector *******/

function _urlObserver () {
	if (_locked()) return;
	var chash = (window.location.hash||"").replace(/^#/,""),
			slot=cw.state.get(),
			stateurl;
	if (slot) stateurl= slot.url||"";
	else stateurl=="";
	if ((!slot || (chash!==stateurl && chash!==slot.initurl))
			&& (chash !=="undefined" && chash !=="null" && chash!=="")) {

		con("URL changed from tab bar: ", chash);

		cw.state.set(chash).fail(function(a,b){
			con("Switch fail",a,b);
			window.location.hash = apps.active||"cw/List";
		});
	}
};

	/*******  Changes watchers and system notifier *******/

// Notifier, created from sys _qnotify fn curried with watchers list
_notifyWatchers = _qnotify.fill(watchers).debounce(CW.dbWatchersDebounce);

_lock().progress(function(islocked){
	// push changes when system goes unlocked
	if (!islocked) _notifyWatchers();
});

_docChanged = _qchanged.fill(undefined, watchers, function (){
	// Push changes if system is in unlocked state
	if (!_locked()) _notifyWatchers();
});



/******* Read state watcher and saver *******/

function _readsaver (){
	for (var i in read) {
		if (read[i]._dirty && i!="cw") {
			//try to read curr version
			sys.get(read[i]._id, function(e,res, i){
				if (!e && res._rev!==read[i]._rev) {
					//merge						
					_cmpreads(i, res);
					_save(i);
				} else if (!e || e.status===404) {
					_save(i);
				};
			}.fill(undefined,undefined,i));	
		}
		//----
		function _save(i){
			read[i]._db = "cw";
			sys.save(read[i], true).then(function (doc) {
				con(doc.db+": Saved read state to system db.");
				read[doc.db]._rev = doc._rev;
				read[doc.db]._dirty=0;
			},function (e,msg){
				con(doc.db+": Failed to save state.");
				con(e,msg);
			}); 
		}
	}
};

//- - - - - - - - - - - - - - - - - - - - -

function _cmpreads(dbname, res) {
	//merge
	var i=dbname, h=[], r=[], t=[],j, fh, fr,
			rh =read[i].hidden, rr = read[i].read, rt = read[i].trust||{},
			fh = res.hidden, fr = res.read, ft = res.trust||{};
	for (j in fh) if (!rh[j]) read[i].hidden[j]=fh[j], h.push(j);
	for (j in fr) if (!rr[j] || rr[j].rev!==fr[j].rev) read[i].read[j]=fr[j], r.push(j);
	for (j in ft) if (!rt[j] || rt[j].rev!==ft[j].rev) read[i].trust[j]=ft[j], t.push(j);
	//update
	con(dbname+": New hide/read lists ", h,r);
	if (h.length) for (j in h) dbs[i].hide(h[j]);
	if (r.length) for (j in r) dbs[i].markread(r[j]);
	//save
	read[i]._rev = res._rev;
}

//- - - - - - - - - - - - - - - - - - - - -

function _ReadHideListDoc(dbid){
	//local db settings doc constructor
	return {
		_id:"db-"+dbid+"-read",
		_dirty:0,
		db:dbid,
		type:"readhidelist",
		name:"Local settings for "+dbid,
		read:{},
		hidden:{},
		trust:{}
	}
}	
	
	/******* Cache && uncache document *******/

function _cache (doc0) {
	var doc=doc0, keys;
	if (!isO(doc) /*|| !doc.type*/ || !doc._db || !doc._id || !doc._rev) return null;

	//if no read doc -- create (its shim)

	if (!read.hasOwnProperty(doc._db)) {
		read[doc._db]=_ReadHideListDoc(doc._db);
	}

	var rr = read[doc._db].read,
			rh = read[doc._db].hidden, 
			odb=ram[doc._db],
			prev, i;		

	//encoded?
	if (doc.crypto && doc.CRYPTO) {
		if (!cw.crypto.has(doc.crypto)) doc._nokey = true;
	};

	//hidden?
	if (rh[doc._id] || (doc.parent && rh[doc.parent])) {
		doc._hidden=true;
	}
	else if (!rh[doc._id] && doc._hidden) {
		rh[doc._id] = true;
		if (!read[doc._db]._dirty) read[doc._db]._dirty=0;
		read[doc._db]._dirty++;
	}

	// get/set read state
	if (!rr[doc._id]) {
		if (doc._read===doc._rev) {
			rr[doc._id] = {rev:doc._rev, stamp:Date.now()}
			if (!read[doc._db]._dirty) read[doc._db]._dirty=0;
			read[doc._db]._dirty++;
		}
		else doc._read="";
	}
	else if (rr[doc._id]) {
		if (doc._read && doc._read.split("-")[0]*1>rr[doc._id].rev.split("-")[0]*1) {
			rr[doc._id].rev=doc._rev;
			rr[doc._id].stamp=Date.now();
			if (!read[doc._db]._dirty) read[doc._db]._dirty=0;
			read[doc._db]._dirty++;
		} else if (rr[doc._id].rev===doc._rev) {
			doc._read=doc._rev;
		} else doc._read="";
	}

	//check if updated
	if (prev = odb[doc._id]) {
		if (doc.type!=="manifest" && 
				!(prev._rev!==doc._rev 
					|| prev._read!==doc._read 
					|| prev._hidden!=doc._hidden
					|| prev._full!=doc._full
					|| prev._nokey!=doc._nokey
				 )) {
			// no change, return cache instance
			return prev;
		} else {
			//clean up current cache instance
			for (i in odb[doc._id]) delete odb[doc._id][i];
		}
	} else {
		//prepare empty cache instance
		ram[doc._db][doc._id] = Object.extended();
	}

	//rebuild tags if any
	doc._tags={};
	if (isA(doc.tags)) {
		for (i=0;i<doc.tags.length;i++) {
			if(isS(doc.tags[i]) || isN(doc.tags[i])) doc._tags[doc.tags[i]]=true;
		}
	}
	if (isO(doc.otags)) for (i in doc.otags) doc._tags[i]=true;


	//mount doc on cache
	odb[doc._id].merge(doc);
	Object.merge(tags[doc._db],doc._tags,true); 

	//if manifest, repo it
	if (doc.type==="manifest" && doc.manifest && doc.manifest.id) {
		var dbset = _dbsettings(doc._db), 
				man = lib.fuse({},doc.manifest,{_id:doc._id, _rev:doc._rev,_db:doc._db});
		if (doc._attachments) {
			man._attachments = doc._attachments;
			delete appfiles[doc._db][doc._id];
		}
		// All sys apps are trusted
		if (doc._db==="cw") _register (man,"cw"); 
		// ...or check trust and bets
		else if (! doc.beta || 
						 (doc.creator === me.name) ||
						 (isA(doc.log) 
							&& (doc.log[0][2]===me.name+"-"+me.uid || doc.log.last()[2]===me.name+"-"+me.uid)
						 ) 
						) {
			//check trust
			if (
				read[doc._db].trust[doc._id] !== doc._rev
				&& read[doc._db].trust[doc._id] !== "*"
			) Object.merge(man, {_notrust:true});
			else Object.merge(man, {_notrust:false});
			_register (man, doc._db);
		}
	}

	//if user
	if (doc.type==="user") {
		users[doc._db][doc.name+"-"+doc.uid]=doc.pic;
	}

	//if settings
	if (doc.type==="settings" && doc._db==="cw" && doc._id==="cw") {
		_initCrypto(doc).then(function(dblist, nochange){
			if (!nochange) {
				con ("Received settings update");
				_processSettings.delay(2);
			}
		});
	}

	_docChanged(odb[doc._id]);
	return odb[doc._id];
} 

//- - - - - - - - - - - - - - - - - - - - -

function _uncache (db, id) {
	//deletes doc from cache if any
	if (!ram[db] || !ram[db][id] || ram[db][id]._hidden) return null;

	_docChanged({
		_deleted:true,
		_db:db,
		_id:id, 
		_rev:ram[db][id]._rev,
		type:ram[db][id].type
	});
	delete ram[db][id];
};
	
	/******* Settings update handler *******/

function _processSettings() {
	var i, 
			pi0 = _pi(),
			dblist = cw.crypto.dblist(),
			finlist=[];

	Object.merge(me, cw.crypto.me());
	
	con("User for session "+Session+" is "+me.name+"-"+me.uid);
	
	if (CW.$upic && !isS(CW.$upic)) CW.$upic.attr("src", me.pic);

	if (dblist.length && me.name) {

		pi0.then(function(){cw.event("settings update");});

		var _allConnected = (function(){
			con("All local DBs connected");
			pi0.resolve(finlist);
		}).after(dblist.length);

		(function(){pi0.resolve(true)}).delay(CW.dbConnTimeout);

		dblist.forEach(function(dbid) {
			var db=dbs[dbid];
			if (db) {
				//we'r connected, restart replication
				// with new settings
				db.sync(false);
				(function(){db.sync(true);}).delay(1000);
				finlist.push(dbid);
				if (dbid==="cw") sys=db;
				_allConnected();
			}
			else {
				//connect to db
				_connect(dbid).then(function(db){
					try{db.sync(true);} catch(e) {con(e)}
					if (dbid==="cw") {
						sys=db;
						//load apps
						sys.load("cw-","cwz","manifest").then(function(a){
							finlist.push(db.name);
							con("System core apps read");
							_allConnected();
						}).fail(function(){
							pi0.reject(0,  "Loading core apps failed");
						});
					} else {
						finlist.push(db.name);
						_allConnected();
					}

				}).fail(function(e, msg){
					_note(msg, "error");
					_allConnected();
				});
			}
		});

	} else pi0.reject(0, "Invalid settings");

	return pi0.promise();
}


/******* DB Settings *******/

function _dbsettings (dbid, obj, done){
	return _getDbSettings(dbid, obj, done);
}

	//########################################################	
// App and component finder

cw["form"] = function _findForm (A1, A2) {	
	/* If A1 
		 * — is url, resolves app part into form 
		 * — is name – returns app manifest by name
		 * — is id – returns by id
		 */
		var i, f=null, a=[], s=A1, r;		
		if (isS(A1) && A1) {

			if (!cw.debug) {

				// Normal mode, system apps have priority

				r=$.my.cache();
				if (r[A1]) f= $.my.cache(A1);
				else if (A1.has("/")) s=A1.split("/")[1];
				f=_find(r,s);

				if (!f && isS(A2) && dbs[A2]) {
					r=forms[A2]._src;
					if (r[A1]) f= $.my.cache(A1, forms[A2]);
					else if (A1.has("/")) s=A1.split("/")[1];
					f=_find(r,s, forms[A2]);		
				}
			}
			else {

				// Debug mode, Db apps have priority
				if (isS(A2) && dbs[A2]) {
					r=forms[A2]._src;
					if (r[A1]) f= $.my.cache(A1, forms[A2]);
					else if (A1.has("/")) s=A1.split("/")[1];
					f=_find(r,s, forms[A2]);		
				}

				if (!f) {
					r=$.my.cache();
					if (r[A1]) f= $.my.cache(A1);
					else if (A1.has("/")) s=A1.split("/")[1];
					f=_find(r,s);					
				}

			}

		}
		return f;

		function _find(r,s, cont) {
			if (!f && CW.appNameMask.test(s) && s.length<130)
				for (var i in r) 
					if (!f  && r[i].hasOwnProperty("app") && r[i].app.name===s) 
						f = $.my.cache(i, cont);
			return f;
		}
	}

	// ########################################################	
// Adjusts layout in obj supplied

cw["layout"] = function (slot0, rw0) {
	var slot = isO(slot0)&&slot0.app?slot0:cw.state.get();
	var rw = rw0||_width(slot.app);
	Object.merge(slot.width,rw);
	slot.$app.width(rw.slot);
	CW.$leftPane.toggleClass("hide", !rw.left);//.width(rw.left);
	CW.$space.width(rw.space);
	CW.$body.width(rw.space);
	CW.$slots.removeClass("cw-shifted").width(rw.slot);
	CW.$rightPane.toggleClass("hide", !rw.right);//.width(rw.right);
	slot.notify("layout");
};

// - - - - - - - - - - - - - - - - - - - - -
// Gets app width from app, according to curr
// screen width
function _width (app0) {
	var app=app0.app?app0.app:app0,
			ws=[],i, width=0, res, 
			lwidth=CW.leftWidth, 
			rwidth=CW.rightWidth, 
			swidth=0, wslot=0;
	ws=(isA(app.width)&&app.width.length)?app.width:ws;
	ws=ws.map(function(e){return parseInt(e)}).compact(true);
	if (!ws.length) ws.push((CW.maxSpaceWidth||CW.defaultSpaceWidth)-rwidth-lwidth);
	for (i=0;i<ws.length;i++) if (width<ws[i] && ws[i]<=CW.maxSpaceWidth-rwidth-lwidth) width=ws[i];
	if (width===0) width=ws.min();

	//Determine if we need to hide left pane and/or dock
	swidth = width+lwidth+rwidth;
	if (swidth>CW.maxSpaceWidth) rwidth=0, swidth=width+lwidth;
	if (swidth>CW.maxSpaceWidth) lwidth=0, swidth=width;

	return { slot:width, space:swidth, left:lwidth, right:rwidth };
}
	
	
	// ########################################################	
// State object generator

(function(state){
	var pi = _pi(), 
			S = Object.merge(apps,{
				slot:{},
				active:"",
				status:{}
			});

	// State object generator

// Close slot

function _kill (url, nextStateUrl) {
	var domid,slot,pi=_pi();
	//kills slot
	if (slot=S.slot[url]) {
		domid = slot.domid;
		slot.closing=true;
		cw.log("Closing "+slot.url);
		if (S.active!==url) {
			S.status[domid].notify("close");
			_destroySlot.delay(CW.slotCloseTimeout, url, domid);
		} else {
			//find recent updated slot to switch to
			var stamp=0, url2="";
			for (var i in S.slot) {
				if (i!==url && S.slot[i].app.updated>stamp) stamp=S.slot[i].app.updated, url2=i;
			}
			if (!stamp) url2=CW.appDefault;
			//notify app its closed
			S.status[domid].notify("close");
			_lock(true);
			CW.$slots.find("#"+domid).animate({opacity:0.3},100,null, function(){
				var newext=window.location.href.split("#")[0]+"#"+url2;
				window.history.replaceState(null,null,newext);
				_lock(false);	
				//switch
				cw.state.set(url2).always(function(){
					_destroySlot.delay(CW.slotCloseTimeout, url, domid);
				});
			})

		}

	}
	return pi.promise();

	function _destroySlot(url, domid){
		_lock(true);
		var slot = S.slot[url];
		if (slot) for (var i in slot.attctr) {
			if (slot.attctr[i]>0) 
				_att(slot.db.name, i).free(slot.attctr[i]+1);
		}
		var $form=CW.$slots.find("#"+domid);
		delete S.status[domid];
		delete S.slot[url];
		var d;
		try {
			d = $.extend(true,{},$form.my("remove"),true);
		} catch (e) {}
		$form.remove();
		cw.log("App "+slot.url+" closed");
		slot=null;
		_lock(false);
		cw.event("slot close");
		pi.resolve(d);
	}
}; // --- end kill

	// mount functions to cw.state
	Object.merge(state,{

		"get": function () {
			//returns active app obj, which is slot
			return S.slot[S.active];
		},

		
		"slots": function (A1) {
			//returns array of all active slots in order they go
			return isS(A1)?S.slot[A1]:S.slot;
		},

		"url": function (){return S.active;},

		"set": function _setSlot (url0, callerUrl) {
			
			// If exists slot with nowUrl or startUrl 
			// equal to url, its activated,
			// else new app instance created.

			// Returns promise to resolve with slot obj.
			
			var pi = _pi(), 
					_fail = false, 
					appActive = false,
					isEditor = false,
					ctr = {}, //counter of .att(docid) calls to invoke .free(n) on app close
					i, a, url, runurl, reurl, rw, activedomid,
					db, dbset, app, domid, $app, _notifyslot, 
					oldslot;

			//Precheck
			if (_locked()) return _f(0, "System locked."), pi.promise();
			if (!isS(url0)) return _f(1, "Invalid params type for slot switch."), pi.promise();

			
			pi.always(function(){
				// Unlocker on resolve/reject,
				// with timeout guarantees sys unlock
				_lock(false);
			});

			pi.fail(function(e, msg){
				// Message if app start fails
				_note(msg,"error");
			});
			
			pi.then(function(newslot){
				// System notifier on appswitch,
				// forces url tracker to remount
				// on app
				window.location.hash=newslot.app.url;
			});


			//Start appswitch
			_lock(true);

			// Parse url
			runurl = lib.parseurl(url0); 
			if (!runurl) return _f(1, "Invalid params for slot switch."), pi.promise();

			url = runurl.url;

			cw.log("Appswitch: ", url0, callerUrl);
	
			//Check if app already in slots
			

			if (oldslot = S.slot[url] || S.slot[runurl.initurl] || S.slot[url0])  {

				domid=oldslot.domid;
				activedomid = S.slot[S.active].domid;

				//turn off active slot
				if (activedomid!==domid) S.status[activedomid].notify("inactive");

				S.status[domid].notify("active");

				// If new params received apply them
				if (url !== oldslot.initurl && url!==oldslot.url) oldslot.$app.my("data",runurl.stateobj);

				return pi.resolve(oldslot).promise();
			}
	
			// Prepare manifest instanse

			db = dbs[runurl.db];
			app = dbs[runurl.db].form(runurl.appid);
			dbset = _dbsettings(runurl.db);
			
			// Start app
			
			_isTrusted()
			.then(_loadDoc)
			.then(_isInvalid)
			.then(_isAppCapable)
			.then(_getAppResources)
			.then(_linkAll)
			.then(_runApp)
			.then(_finalizeSlot)
			.then(_appTrackers)
			.then(_allDone)
			.then(function(slot){
				$(document).scrollTop(0);
				cw.log("Appswitch success");
				pi.resolve(slot);
			})
			.fail(function(a,b){
				_f(a,b);
			});

			
			return pi.promise();
			
			
			// -------- Includes -----------
			
			// State object generator

// Set state

// Check trust


function _isTrusted() {
	
	//con ("started isTrusted");
	
	var i, req, stored, raw,
			z = _pi(),
			dirty=false, 
			forms={}, 
			untrusted=[];
	
	if (app._db==="cw") z.resolve();
	
	else {
		if (!read[runurl.db].trust) read[runurl.db].trust={}, dirty=1;
		stored = read[runurl.db].trust;
		//find components
		req = (raw=db.ram(function(e) {
			return (e.type==="manifest" 
							&& e.manifest 
							&& (e.manifest.id===runurl.appid || e.manifest.id.startsWith(runurl.appid+"."))
						 );
		})).reduce(function(a,b) {
			a[b._id]=b._rev;
			forms[b._id]=b;
			return a;
		}, {});

		for (i in req) {
			if (!(stored[i]==="*" || stored[i] === req[i])) {
				untrusted.push({id:forms[i].id, _id:forms[i]._id, _rev:forms[i]._rev});
			}
		}
		if (untrusted.length) {
			cw.log("Confirm trust modal");
			$.my.modal({
				manifest:CW.appTrust, 
				data:{trust:untrusted.sortBy("id")}
			})
			.then(function(obj){
				if (isO(obj)) {
					for (var i=0;i<obj.trust.length;i++) {
						stored[obj.trust[i]._id]=obj.trust[i]._rev;
					};
					if (obj.trust.length) read[runurl.db]._dirty=true;

					//unwind app
					cw.lib.unjson(app);

					//re-register now trusted components
					for (i=0;i<untrusted.length;i++) {
						var doc  = Object.clone(ram[app._db][untrusted[i]._id],true);
						_cache (doc);
					}
					
					cw.log("Trust confirmed");
					
					// continue app start
					z.resolve();


				} else z.reject(1,"App start terminated by user.");
			})
			.fail(function(){
				cw.log("App trust rejected by user");
				z.reject(1,"App start terminated by user.")
			});
		} 
		else z.resolve();
	}
	return z.promise();
}


			function _loadDoc(){
	
	//con ("started loadDoc");
	
	var z = _pi();
	
	//Load doc if requested
	if (runurl.cmd) {
		if (runurl.cmd==="create" && !runurl.oldid) {
			//create empty doc
			(function(){
				var doc = {type:runurl.doctype,_id:runurl.docid};
				z.resolve(doc, "isAppCapable");
			})();
		}
		else {
			// if doc is in cache...
			var cdoc = ram[runurl.db][runurl.oldid||runurl.docid];
			if (cdoc) {
				db.markread(cdoc._id); 
				z.resolve(cdoc, "isInvalid");
			}
			else {
				db.load([runurl.oldid || runurl.docid])
				.then(function(res){
					z.resolve(res[0], "isInvalid");
				})
				.fail(function(){
					z.reject(1, "Reading doc "+(runurl.oldid||runurl.docid).truncate(50)+" failed.")
				});
			}
		}

	} else {
		z.resolve(null, "getAppResources");
	}
	
	return z.promise();
}

			//check if doc has no key or does not exist
function _isInvalid(doc , skip) {
	
	//con("started isInvalid");
	
	var z = _pi();
	if (skip && skip!="isInvalid") {
		z.resolve(doc, skip);
		return z.promise();
	}
	if (doc) {
		if (!doc._nokey) {
			if (!doc.crypto) z.resolve(doc);
			else z.resolve(_decrypt(doc));
		}
		else {
			z.reject(
				1, 
				"Doc <b>"
				+(doc.title||doc.name||doc._id)
				+"</b> is encrypted with key "
				+doc.crypto+", which is not installed."
			);
		}
	}
	else {
		z.reject(
			1, 
			"Doc "
			+(runurl.oldid||runurl.docid)
			+" not found in DB "
			+db.name+"."
		);
	}
	return z.promise();
}

			//Check if app can perform action asked
function _isAppCapable(doc0, skip){
	
	//con ("started isAppCapable");

	var z = _pi();
	
	if (skip && skip!="isAppCapable") {
		(function() {z.resolve(doc0, skip);}).delay(1);
		return z.promise();
	}
	
	var type=doc0.type, 
			doc;
	
	if (runurl.cmdtypes.indexOf(type)>-1 || runurl.cmdtypes+""=="*") {
		doc=$.extend(true, {}, doc0);

		//if we have create...
		if (runurl.cmd==="create") {
			delete doc._rev;
			doc._cloned=runurl.oldid;
			doc._id = runurl.docid;
		}

		//mount doc on app manifest
		Object.merge(app.data, lib.unmask(doc,app.app.nodedoc), true);
		//$.extend(true, app.data, lib.unmask(doc,app.app.nodedoc));

		//_isTtrusted();
		z.resolve(doc0);
	}
	else {
		z.reject(1, "App "+app.app.name+" can not "+runurl.cmd+" doc of type "+type+".");
	}
	
	return z.promise();
}



			// Link/load attachments
function _getAppResources(doc0, skip){
	var i, att, atts, dbid, id, A,
			z = _pi();
	
	//con ("started getAppResources");
	
	if (skip && skip!="getAppResources") {
		z.resolve(doc0, skip);
		return z.promise();
	}
	
	if (app._attachments && app._id && app._db) {
		atts = app._attachments;
		dbid = app._db;
		id = app._id;
		// load all atts
		// and generate dataURLs

		if (!appfiles[dbid][id]) {
			// not cached, read
			appfiles[dbid][id]={};
			_att(dbid,id).url();
			_att(dbid,id).data()
			.then( function (obj){
				appfiles[dbid][id] = obj;
				app.files = Object.clone(appfiles[dbid][id]);
				z.resolve(doc0);
			})
			.fail(function(){
				z.resolve(doc0);
			});	
		} else {
			app.files = Object.clone(appfiles[dbid][id]);
			z.resolve(doc0);
		}					
	}
	else z.resolve(doc0);
	
	return z.promise();
}
			
			//Link all before $.my application			
function _linkAll() {
	
	//con ("started linkAll");
	
	var z = _pi();

	// Merge app manifest and state
	Object.merge(
		app.data,
		runurl.stateobj,
		true
	);

	// Augment manifest with local db repo component finder
	Object.merge(
		app,
		{params:{
			cache:function(ref){
				return dbs[runurl.db].form(ref);
			}
		}},
		true
	);


	// Mount app container on dom
	domid = "cw-app-"+lib.hash8(url+Number.random(1e12));
	$app=$(CW.slot); 
	$app.attr("id", domid);
	rw=_width(app.app);
	$app.addClass("cw-app-init").width(rw.slot);
	$app.prependTo(CW.$slots);


	// Create listener for app state changes
		// notifications:
		// "active"
		// "inactive"
		// "cancel"
		// "commit"
	
	_notifyslot=$.Deferred();

	// mount app show/hide actions
	_notifyslot.progress(function(status, initurl){
		//shows/hides and adds classes
		var slot, app, rw;
		if (slot=S.slot[initurl]) {
			if (status=="active") {
				appActive=true;
				S.active=initurl;
				app=slot.app;

				//App fade-in animation
				//-----
				rw=_width(app);
				//slot.width=rw;
				cw.layout(slot, rw);
				slot.app.updated=Date.now();

				(function(){
					$app.removeClass("hide cw-app-init")
					//.width(rw.slot)
					.addClass("cw-app-active")
					.find("textarea")
					.blur();

					if (slot.caret) {
						// {$node, pos, top}
						try{
							cw.lib.scroll(slot.caret.top, 80);
							slot.caret.$node.focus();
							cw.lib.caret(slot.caret.$node, slot.caret.pos);
						} catch(e){}
					}

					cw.event("slot open");
				}).delay(!rw.left?CW.slotLayoutDelay:0);
			} 
			else if (status==="inactive") {
				$.my.modal(true);
				appActive=false;
				$app.removeClass("cw-app-active").addClass("hide");
			}
			else if (status==="close") {
				if (S.active===initurl) $.my.modal(true);
			}
		}
	}.fill(undefined, runurl.initurl)); // curry with slot params

	S.status[domid]=_notifyslot; //stash slot notifier

	// Make app instance from manifest
	app = _app(app, db, _notifyslot, runurl);
	isEditor = app.app.isEditor();

	z.resolve(app);
	
	return z.promise();
}
//--- end link all

			// Run app, init $.my with no data, only with manifest
// to avoid app obj dupes

function _runApp(app){
	
	//con ("started runApp");
	
	var z = _pi();

	if(!_fail) {
		
		// Set fail on timeout
		(function(){
			if (pi.state()==="pending")
				_f(0, "App "+url.truncate(50)+" init timeout.");
		}).delay((app.app.timeout*1)||CW.slotTimeout);
		
		
		// Run app
		cw.log("Init $.my "+app.id);
		$app.my(app)
		.then(
			function(){
				cw.log("Started "+app.id);
				z.resolve();
			}, 
			function(e, msg) {
				z.reject(e, "App "+url+" init failed.");
			}
		);
	}
	else z.reject(1, "App "+url+" init failed.");
	
	return z.promise();
}
//--- end runApp fn
			
			function _finalizeSlot(){
	var i, slot,
			z = _pi();

	//con ("started finalizeSlot");
	
	// $.my init succeded,
	// make slot
	slot = S.slot[runurl.initurl] = {
		$app:$app,
		domid:domid,
		attctr:ctr,
		name:app.app.name,
		db:app.db,
		app:app.app,
		url:runurl.url,
		initurl:runurl.initurl,
		initstate:runurl.initstate,
		notify:function(a) {_notifyslot.notify(a)}.debounce(0),
		width:rw,
		title:lib.mask(app.data, app.app.nodetitle)||app.app.title
	};

	/* 7.1*/	// Mount slot on dom
	$app.data("app",slot);

	/* 7.2*/	// All other apps go to sleep
	// for (i in S.status) if (i!==domid) S.status[i].notify("inactive");
	activedomid = S.slot[S.active]?S.slot[S.active].domid:null;
	if (activedomid && activedomid!==domid) S.status[activedomid].notify("inactive");

	/* 8*/				
	_notifyslot.notify("active");
			
	z.resolve(slot);
	
	return z.promise();

}
			
			function _appTrackers (slot) {
	
	//con ("started appTrackers");
	
	var z = _pi();

	// Changes tracker
	$app.on("change", function(){
		if(appActive && $app.is(".cw-app-active") && !_locked()) {	
			var d = $app.my("data"), 
					m = app,
					title = lib.mask(d, m.app.nodetitle)||m.app.title,
					appstate=m.app.maskstate?lib.tourl64(lib.mask(d, m.app.maskstate)):null,
					newext="",
					newurl=[db.name, slot.name, slot.initstate,
									(appstate && appstate!==slot.initstate)?appstate:undefined
								 ].compact().join("/");

			// Update stamp
			if (document.title != title || newurl!==slot.url) slot.app.updated=Date.now();

			// Update url if not editor
			if (!isEditor && newurl!==slot.url) {	
				slot.app.url = slot.url = newurl;
				slot.app.state = appstate?appstate:null;
				newext=window.location.href.split("#")[0]+"#"+newurl;
				window.history.replaceState(null,null,newext);	
			}
			// Update browser tab title
			if (document.title != title) {
				document.title = title;
				slot.title=title;
				CW.$right.trigger("update.cw");
			}

		}
	}.debounce(CW.appToUrlTrackerDebounce));

	//hide panes on focus if needed
	$app.on("click", function (){
		var rw = $app.data("app").width;
		if (CW.$slots.is(".cw-shifted")) {
			if (!rw.left) CW.$leftPane.addClass("hide");
			if (!rw.right) CW.$rightPane.addClass("hide");
			(function(){CW.$slots.width(rw.slot).removeClass("cw-shifted")}).delay(50);
		}
	}.debounce(50));

	// commit
	$app.on("commit", function (evt){
		evt.stopPropagation();
		app.db.save().then(function(res){
			Object.merge(lib.getref(app.data,app.app.nodedoc), res, true);
			$app.my("redraw");
			app.app.crcdoc = lib.footprint (lib.getref(app.data, app.app.nodedoc));
		});
	});

	// close
	$app.on("cancel", function (evt){
		evt.stopPropagation();
		app.app.close();
	});
	
	z.resolve(slot);
	
	return z.promise();
}



			
			function _allDone (slot){
	
	var z = _pi();
				
	if (runurl.cmd) {
		// Mark doc as read if any
		if (runurl.cmd!=="create") db.markread(runurl.docid);
		// Hash doc content 
		try {
			//var tdoc = lib.getref(app.data, app.app.nodedoc);
			app.app.crcdoc = lib.footprint (lib.getref(app.data, app.app.nodedoc));
			//console.log(app.app.crcdoc, Object.clone(tdoc,true))
			//console.log(Object.keys(tdoc._attachments||{}), JSON.stringify(tdoc))
		}catch(e){}
	}
	
	z.resolve(slot);
	
	return z.promise();
}


			// - - - - - - - - - - - - - - - - - - - - -
// Closure for app manifest generator,
// holds app local watchers queues
function _app(app, db0, _notifyslot, run){
	
	var allw={}, w, 
			_docchanged,
			_notifyapp,
			dbid = db0.name,
			isEditor=false,
			active,
			db = Object.select(db0, [
				"get","put","query", "sync",
				"app", "actions", "del", "find", "hide", "tags",
				"inram", "isread", "markread", "ram", 
				"settings", "users","uuid"
			]);
	
	w = allw[dbid]={queue:[], revs:{}, idxs:{}, types:{"":$.Deferred()}};


	Object.merge(db, {
		
		"watch":function (type0) {
			// like .db.watch, but sleeps when app is invisible
			// and push all changes when it come visible
			var type = type0||"";
			if (!w.types[type]) {
				w.types[type]=$.Deferred();
			}
			return w.types[type].promise();
		},
		
		"form":function(a){
			var f = db0.form(a);
			return f._notrust?null:f;
		},
		
		"info":function(a){return db0.info(a||function(){})},
		
		"name":db0.name,
		
		"title":function(){return _dbsettings(dbid).title},
		
		"load": function () {
			var b=false,
					pi=db0.load.apply(app, arguments),
					f = (function(){if (!pi || !pi.status || pi.status()==="pending") b=true, app.app.busy(true)}).delay(200);
			pi.always(function(){if (b) app.app.busy(false); else f.cancel();});
			return pi;
		},
		
		"save": function (a, silent) {
			var b=false, pi = _pi(), doc,
					saveDoc = isEditor && null==a,
					f = (function(){
						if (!pi || !pi.status || pi.status()==="pending") 
							b=true, app.app.busy(true);
					}).delay(200);

			if (saveDoc) {
				// make timestamp
				doc=lib.getref(app.data, app.app.nodedoc);
				doc.stamp=Date.now();
				db0.save.call(app, doc, silent)
				.then(fin)
				.fail(function(a,b){pi.reject(a,b)});
			}
			else db0.save.apply(app, arguments)
			.then(fin)
			.fail(function(a,b){pi.reject(a,b)});;

			pi.then(function(res){
				//rehash
				if (isEditor && 
						// we save doc we’ve opened
						(res._id === lib.getref(app.data, app.app.nodedoc)._id
						 // or it was new doc
						 || lib.getref(app.data, app.app.nodecmd)==="create")
					 ) {
					app.app.crcdoc = lib.footprint (res);
				}
			});
			pi.always(function(){if (b) app.app.busy(false); else f.cancel();});
			return pi.promise();

			function fin (doc) {
				//decode doc if it is encoded
				if (!doc.hasOwnProperty("CRYPTO")) pi.resolve(doc);
				else pi.resolve(_decrypt(doc));
			}
		},
		
		"att": function (id){
			// augment sys method to 
			// ensure resources will be 
			// revoked on app close
			var att=_att(dbid,id);
			if (!att) return null;
			if (!ctr[id]) ctr[id]=0;
			ctr[id]+=1;
			return Object.merge({
				free:function (){
					ctr[id]-=1; if (ctr[id]<1) ctr[id]=0, att.free();
					return true;
				}
			}, Object.reject(att,"free"));
		}
	});

	_notifyapp = _qnotify.fill(allw).debounce(1);

	// fills changed queues
	_docchanged = _qchanged.fill(
		undefined, 
		allw, 
		function (){
			if (appActive) _notifyapp();
		}
	);
	db0.watch("")
	.progress(function(docs){
		if (isA(docs)) for (var i=0;i<docs.length;i++) _docchanged(docs[i]);
	});

	// monitor app states
	_notifyslot.progress(function(state){					
		if (state==="active") {
			//push all doc changes when app go active
			_notifyapp();
		}
	});

	// extend app if editor
	var am = app.app.maskstate;
	isEditor = (isA(am) && am.length === 2 && am[0] === app.app.nodecmd 
							&& am[1] === app.app.nodedoc+'._id');
	if (isEditor) {
		app.cmd = runurl.cmd;
		app.docid = runurl.docid;
	};

	// Extend manifest, make it app
	Object.merge(app.app,{
		"domid":domid,
		"url":runurl.url,
		"initurl":runurl.initurl,
		"caller":callerUrl||"",
		"state":runurl.state,
		"born":Date.now(),
		"updated":Date.now(),
		"isActive":function(){return appActive},
		"isEditor":function(){return isEditor},
		"busy":function(s){
			if (null==s) return $app.is(".cw-app-busy");
			$app.toggleClass("cw-app-busy", !!s);
		},
		"layout":_width.fill(app),
		"trigger":function(s) {
			$app.trigger(s);
		},
		"run": function (s){
			return cw.state.set(s, app.app.starturl);
		},
		"watch": _notifyslot?_notifyslot.promise():null,
		"local":function (key, obj) {
			var key = app.id+"/"+key, val;
			if (undefined===obj) return JSON.parse(ls.getItem(key));
			else if (null===obj) {
				val = JSON.parse(ls.getItem(key)); 
				ls.removeItem(key); 
				return val;
			}
			else {
				ls.setItem(key, JSON.stringify(obj))
			}
		},
		"modal": function(params){
			var pi=_pi(), o=params;
			if (!isO(o) || !o.manifest) return pi.reject(null);
			o=Object.merge({}, params, true);
			if (isS(o.manifest)) o.manifest =dbs[runurl.db].form(o.manifest);

			// Augment manifest with local db repo component finder
			Object.merge(o.manifest,{params:{cache:function(ref){return dbs[runurl.db].form(ref)}}},true);
			return $.my.modal(o);
		},
		"close": function (nextStateUrl, force) {

			// ToDo check if editor and doc edited changed
			// popup modal to ask whether save or not

			var pi = _pi(), crc, obj;
			pi.fail(function(msg){_note(msg)});
			if (isEditor && !force) {
				$.my.modal(true);
				obj = lib.getref(app.data, app.app.nodedoc)
				crc = lib.footprint (obj);
				if (crc !== app.app.crcdoc) {
					//console.log(crc, app.app.crcdoc, obj)
					//console.log(Object.keys(obj._attachments||{}), JSON.stringify(obj))
					$.my.modal({
						manifest:"cw.Sys.YesNoCancel",
						data:{
							text:'<span class="fi-alert o70 mr5 fs90" ></span> Doc has unsaved changes.',
							yes:'<span class="fi-save fs90" ></span> Save and close',
							no:'<span class="fi-x-circle fs90" ></span> Discard and close'
						},
						esc:true
					}).then(function(res){
						if (isO(res)) {
							//save
							if (res.cmd==="yes") db.save(obj)
							.then(function(){
								_kill(runurl.initurl, nextStateUrl)
								.then(function(a,b){pi.resolve(a,b)})
								.fail(function(a,b){pi.reject(a,b)});
							})
							.fail(function(){
								pi.reject("Save failed");
							});
							//save
							if (res.cmd==="no") _kill(runurl.initurl, nextStateUrl)
							.then(function(a,b){pi.resolve(a,b)})
							.fail(function(a,b){pi.reject(a,b)});
						} else {
							pi.reject("Cancelled");
						};
					}).fail(function(){
						pi.reject("App close cancelled");
					});
					return pi.promise();
				}
			}
			return _kill(runurl.initurl, nextStateUrl);
		},
		"me":function (a) {return cw.me(a)}
	});
	app.db = db;
	app.attctr=ctr;
	return app;
}


			//- - - - - - - - - - - - - - - - - - - - -
			//Rejects promise and resets view on fail
			function _f(a,b) {
				//fail
				if (!_fail){
					cw.log("Appswitch failed",a,b)
					if ($app) $app.remove();
					if (_notifyslot) _notifyslot.reject();
					pi.reject(a,b);
				}
				_fail = true;	
			}	
		}
	}); 

})(state);

	// ########################################################		
// Attachment manager

(function(cw){

	var at={}, ou={}, ctr={}; //caches

	_att = function _attachment (dbid, id){
		//prepares obj for reading attachments
		//source doc must be in cache

		// _att(dbid, docid).blob(attName) >> Blob
		//					  .url (attName) >> session dataUrl
		//					  .data(attName) >> base64 data
		//					  .image(imageAttname) >> base64 with prefix

		if (!ram[dbid] || !ram[dbid][id]) return null;
		var c, cu, doc = ram[dbid][id], db = dbs[dbid];

		if (!at[dbid]) at[dbid]={}, ou[dbid]={}, ctr[dbid]={};
		if (!at[dbid][id]) at[dbid][id]={}, ou[dbid][id]={}, ctr[dbid][id]=0;
		c = at[dbid][id];
		cu = ou[dbid][id];
		ctr[dbid][id]++;

		return {
			"blob": _cmd.fill(undefined,"blob"),
			"url": _cmd.fill(undefined,"url"),
			"data": _cmd.fill(undefined,"data"),
			"image": _cmd.fill(undefined,"image"),
			"free": function (steps){
				ctr[dbid][id]-= isNaN(steps)?1:(steps|0);
				if (ctr[dbid][id]<0) ctr[dbid][id]=0;
				if (ctr[dbid][id]<1) (function(){
					//garbage collector
					if (ctr[dbid][id]<1) _att.flush(dbid, id);
				}).delay(CW.gcAttsInterval);
			}
		};

		function _cmd (list, cmd) {
			var pi=_pi();
			_convey(list,cmd,function(res, data){pi.resolve(res, data);});
			return pi.promise();
		}

		function _convey (list0, op, done) {
			var list = _genlist(list0), res={},
					a = doc._attachments;

			var _read = (function(){
				(isF(done)?done:FN)(res);
			}).after(list.length);


			list.reduce(function(acc,fname) {
				var obj = Object.reject(a[fname],"data");
				//acc[fname] = obj;

				// in cache?
				if (c[fname] && c[fname][0]===obj.revpos) {
					_append(obj,c[fname][1],op,fname).always(function(res){
						acc[fname] = res;
						_read();
					});
				}

				// read attach and process
				else db.getAttachment(id, fname, function (e, blob) {
					if (!e) {
						_append(obj,blob,op,fname).always(function(res){
							acc[fname] = res;
							_read();
						});
					} else _read();
				});
				return acc;
			},res);
		}

		function _append (obj,blob,op, fname) {
			var pi=_pi();
			if (!c[fname] || c[fname][0]!==obj.revpos) c[fname] = [obj.revpos,blob];
			obj.size=blob.size;
			if ("blob"===op) {	
				obj.blob = blob;
				pi.resolve(obj, obj.blob);
			} else if ("url"===op) {
				// temp session objectURL
				if (cu[fname] && cu[fname][0]===obj.revpos) obj.url = cu[fname][1];
				else {
					//check prev and revoke if any to free mem
					if (cu[fname]) URL.revokeObjectURL(cu[fname][1]);
					cu[fname] = [obj.revpos, URL.createObjectURL(blob)];
					obj.url = cu[fname][1];
					obj.blob = blob;
				}
				pi.resolve(obj, obj.url);
			} else if ("data"===op){
				//base64
				lib.blob2base64(blob, function(s) {
					obj.data=s;
					obj.blob=blob;
					pi.resolve(obj, s);
				});
			} else if ("image"===op){
				//base64
				lib.blob2base64(blob, function(s) {
					obj.image=s;
					obj.blob=blob;
					pi.resolve(obj, s);
				}, true);
			}
			return pi.promise();
		}


		function _genlist (list0){
			var list, a = doc._attachments;
			if (!isO(a)) return [];
			if (null==list0) return Object.keys(a);
			if (isS(list0)) list=[list0];
			else if (isA(list0)) list=list0;
			else if (isO(list0)) list=Object.keys(list0);
			else if (isF(list0)) {
				list = Object.keys(Object.findAll(o, list0));
			} else if (isR(list0)) {
				list=Object.keys(a).filter(list0);
			} else return [];
			return list.findAll(function(e){return !!a[e]});
		}
	}

	Object.defineProperty(_att, "flush", {value:function (dbid, id) {
		if (at[dbid] && at[dbid][id]) {
			var i, c = at[dbid][id], cu = ou[dbid][id];
			for (i in c) delete c[i];
			for (i in cu) URL.revokeObjectURL(cu[i][1]), delete cu[i];
			return true;
		} else return false;
	}});


})(cw);

	// ########################################################	
// Connects to DB
// returns promise, that is resolved with db object

_connect = function (id) {

	var ext, db, dbid=id+"", pi=_pi();

	if (dbs[dbid]) pi.resolve(dbs[dbid]);
	else db = new Pouch(dbid, {size:100}, function(e,r){
		if (e) pi.reject(e,"Connection to DB "+dbid+" failed.");
		else {
			con(dbid+": DB connected");

			// register DB in local index dicts
			if (!watchers[dbid]) watchers[dbid]={queue:[], revs:{}, idxs:{}, types:{"":$.Deferred()}};
			if (!users[dbid]) users[dbid]={};
			if (!forms[dbid]) forms[dbid]={_src:{},_name:"DB "+dbid+" manifest cache"};
			if (!types[dbid]) types[dbid]=Object.clone(types["cw"],true);
			if (!ram[dbid]) ram[dbid]=Object.extended();
			if (!read[dbid]) read[dbid]=_ReadHideListDoc(dbid);
			if (!dbapps[dbid]) dbapps[dbid]={};
			if (!appfiles[dbid]) appfiles[dbid]={};
			if (!tags[dbid]) tags[dbid]={};

			//start monitor
			db.info(function (e, res) {
				var ls=0;
				if (!e) ls=res.update_seq;
				con(dbid+": last update sequence is "+ls);
				db.changes({
					since: ls,
					continuous: true,
					onChange: _dbchanged
				});

				function _dbchanged(c) {
					//check if we need load updated doc
					if (
						c.changes && 
						c.changes[0] && 
						c.changes[0].rev &&
						( !ram[dbid][c.id] || ram[dbid][c.id]._rev!=c.changes[0].rev )
					) {
						con(dbid+ ": changes in "+ c.id, c);
						if (/^db\-.*\-read$/.test(c.id))  {
							con("Readstate update");
							sys.get(c.id, function (e, res){if (!e) _cmpreads(res.db, res)});
						} else if (c.deleted) _uncache(dbid, c.id);
						else ext?ext.load([c.id]):"";
					}
				}
			}); //-- end of monitor

			// Check views
			_setViews(db)
			.then(_findRead)
			.fail(function(e){
				pi.reject(e,"Connection to DB "+dbid+" failed. "+e);
			});
		}


		//- - - - - - - - 

		function _findRead(){
			//try to find read
			if (sys && sys.load && (!read[dbid] || !Object.size(read[dbid].read))) {
				con(dbid+": reading read and hidden list");
				sys.load(["db-"+dbid+"-read"])
				.then(
					function(a){if (a.length) read[dbid]=a[0];}, 
					function (e,r) {con(e,r);}
				)
				.always(function(){
					_extdb(db,dbid);
					_loadForms();
				});
			} 
			//mount ext methods to db
			else {
				_extdb(db, dbid);
				_fin();
			}
		}

		//- - - - - - - - 

		function _loadForms() {
			//read and mount manifests
			ext.load("cw-","cwz","manifest").then(function(a){
				if (a.length) con ("Read "+a.length+" manifest"+(a.length>1?"s":"")+" from DB "+dbid+".");
				_fin();
			});
		}

		//replicate, then finalize
		function _fin(){
			_replicator (db, dbid);
			pi.resolve(dbs[dbid]);
		}
	}) // -- end new PouchDB instance init

	return pi.promise();

	
	//- - - - - - - -

	function _setViews(db) {
	// Checks if DB has _design/cloudwall views
	// and they match those in cw.Sys.Db.List.views
	var i, pi = _pi(), prev,
			newv = {
				_id:"_design/cloudwall", 
				language:"javascript", 
				views:{}, 
				type:'ddoc',
				options: {
					local_seq: true,
					include_design: true
				}
			},
			v = ($.my.cache("cw.Sys.Db.List")||{}).views;
	if (v && Object.size(v)) {
		// build 
		for (i in v) {
			newv.views[i] = {};
			if (v[i].map) newv.views[i].map = v[i].map.toString();
			if (v[i].reduce) newv.views[i].reduce = v[i].reduce.toString();
		}
		// read curr views
		db.get("_design/cloudwall").then(
			function (oldv) {
				prev = oldv;
				if (
					!Object.equal(
						Object.select(oldv.views, Object.keys(newv.views)), 
						newv.views
					) 
					|| oldv.type != newv.type
					|| !Object.equal(oldv.options, newv.options)
				) {
					$.extend(true, newv, Object.reject(oldv, ["language","views", "options"]));
					$.extend(true, newv.views, Object.reject(oldv.views, Object.keys(newv.views)))
					_saveDdoc(newv);
				} else {
					//con(dbid+": All cloudwall views are up to date.")
					pi.resolve();
				}
			},
			function(e){
				if (!e.status || e.status == 404) _saveDdoc(newv);
				else pi.reject("Can’t read design doc for DB "+dbid+".");
			}
		);
	}

	return pi.promise();

	// - - - - -

	function _saveDdoc(ddoc) {
		db.put(ddoc).then(
			function () {
				con(dbid+": updated views in _design/cloudwall ddoc.")
				pi.resolve();
			},
			function (e) {
				if (prev) con(dbid+": failed to write update for ddoc, proceeding with old ddoc and views.");
				else pi.reject("Can’t update design doc for DB "+dbid+".");
			}
		);
	}
}


	//- - - - - - - - - - - - - - - - - - - - -
// Manage replications

function _replicator (db, dbid) {
	var i, lock=false,status = false,p = _dbsettings(dbid),
			rto = {},rfrom={},state="stop",schedule = [],states = {};
	$.extend(ext, {
		"sync": function (A1){
			// () – get status
			// (false) – cancels replication
			// (true) – (re)starts replication		
			var i, dir, acc=0;
			if (null==A1) return states;
			else {
				schedule.forEach(function(e){e.cancel()});
				schedule=[];
				if (A1) { 
					state="warm";
					p = _dbsettings(dbid); //get settings
					for (i=0;i<p.sync.length;i++) {
						dir = p.sync[i].dir;
						if (isA(dir) && dir.length) {
							acc+=_channel (
								db, 
								_getSyncUrl(dbid,i), 
								dir.slice(0), 
								p.sync[i].interval*1 || 0
							)?1:0;
						}
					}
					if (!acc) status=true;
					state="start";	
				} else {
					state="stop";
					con ("Replication of "+dbid+" stopping...");
					for (i in rfrom) rfrom[i].cancel();
					for (i in rto) rto[i].cancel();
					for (i in states) states[i]=false;
					cw.event("db replication stopped",dbid);
				}
			}
			return states;
		}
	});


	function _channel (odb, url, dir, interval) {	
		var err=false, lock=false, 
				isTo = dir.indexOf("to")!=-1, 
				isFrom = dir.indexOf("from")!=-1,
				modeTo = !interval?{continuous:true, live:true}:{}, 
				modeFrom = !interval?{continuous:true, live:true}:{},
				pushed=false, 
				eto, efrom;

		if (state==="stop") 
			return con (dbid+": replication stopped, restart supressed."), true;
		if (!navigator.onLine) {
			con (dbid+": replication failed, browser is offline.");
			_f();
			return true;
		}
		try { // From-replication
			if ( rfrom[url] )  rfrom[url].cancel(); 
			if (isFrom) {
				if (interval) {
					if (_ls("from",_u(url))) Object.merge(modeFrom, {since:_ls("from",_u(url)).seq});
				}
				rfrom[url] = odb.replicate.from(
					url, modeFrom, 
					function(e,r){
						if (e && !interval) {
							_f();
							con (dbid+": sync-in closed.", e,r);
						} else if (e) {
							_f(interval);
							con (dbid+": sync-in failed, next cycle scheduled.", e,r);
						} else {
							_f(interval);
						}
						if (r && r.last_seq) _ls("from",_u(url),{seq:r.last_seq, stamp:Date.now()});
					}
				);	
			}
		} catch(e) {err=true;}

		try { // To-replication
			if ( rto[url] )  rto[url].cancel();
			if ( isTo && !err) {
				if (interval) {
					if (_ls("to",_u(url))) Object.merge(modeTo, {since:_ls("to",_u(url)).seq});
					else if (_ls("from",_u(url))) Object.merge(modeTo, {since:_ls("from",_u(url)).seq});
				}

				rto[url]=odb.replicate.to(
					url, modeTo, 
					function(e,r){
						//console.log()
						if (e && !interval) {
							_f();
							con (dbid+": sync-out closed.", e,r);
						} else if (e) {
							_f(interval);
							con (dbid+": sync-out failed, next cycle scheduled.", e,r);
						} else {
							_f(interval);
						}
						if (r && r.last_seq) _ls("to",_u(url),{seq:r.last_seq, stamp:Date.now()});
					}
				);	
			}
		} catch(e) {err=true;}

		states[_u(url)] = !err;
		if (err) {
			cw.event("db replication start failed", dbid);
			con (dbid+": sync failed, restart required.");
			_f();
		}
		else {
			cw.event("db replication started",dbid);
			con (dbid+": sync (re)started.");
		}

		return err;

		function _f(restart){ if (!pushed) {
			states[_u(url)]= !(restart||interval)?false:Date.now()+(restart||interval)*6e4;
			pushed=true;
			_schedule(_channel.fill(odb, url, dir, interval), restart||interval);
			if (undefined===restart) cw.event("db replication failed",dbid);
			else cw.event("db replication finished and rescheduled",dbid);
		}}
	}


	function _schedule (fn, interval) {
		var f;
		if (!lock && state==="start") {
			f= fn.delay(interval*6e4 || CW.syncRestart);
			schedule.add(f,0);
		}
		if (schedule.length>50) schedule.splice(50);
	}

	function _u(s){
		// masks pwd in url
		return s.replace(/^(http[s]?\:\/\/[^\:@\/]+:)[^@]+(@.+)$/,"$1•••••$2");
	}

	function _ls(dir, url, data) {
		if (!data) return cw.lib.unjson(JSON.parse(localStorage.getItem("_repl_"+dir+"_"+url)));
		else localStorage.setItem("_repl_"+dir+"_"+url, cw.lib.json(data));
	}
}; //--  end of replication manager


	//- - - - - - - - - - - - - - - - - - - - -
// Extends db with more straightforward
// and simple access methods, all promise-based

function _extdb(db, dbid) {
	var i, 
			rd=ram[dbid],
			slice = Array.prototype.slice;

	//find title
	var title="", dbset= _dbsettings(dbid);

	ext = {			
		//===========================================

		"name": dbid,
		"title":function(){return _dbsettings(dbid).title},
		"settings":_dbsettings.fill(dbid),
		"actions": function (type){
			//returns allowed actions for type
			// or all types list
			if (isS(type)) return (types[dbid]||{})[type]||{};
			else if (null==type) return types[dbid]||{};
			return {};

		},
		"form": function (A1) {
			/*if (undefined===A1) return forms[dbid]._src;
				else if (null===A1) return Object.reject(forms[dbid],/^_/);
				else*/ return cw.form (A1, dbid);

		},
		"app":function (appname) {
			if (null==appname) {
				if (dbid==="cw") return Object.keys(dbapps[dbid]).sort();
				return Object.keys(dbapps["cw"]).union(Object.keys(dbapps[dbid])).sort();
			}

			if (dbid==="cw") return Object.clone(dbapps[dbid][appname],true);
			return Object.clone(dbapps[dbid][appname] || dbapps["cw"][appname],true);
		},
		"att": function(id){return _att(dbid, id);},

		//===========================================

		"save":function _dbSave (doc0, silent){
			if (cw.debug && silent) console.log ("Silent save request", doc0);
			var pi=_pi(), tmp, doc, log, isnew, encdoc, att, myid;
			pi.fail(function(e, msg){ if (!silent) _note(msg,"error")});

			if (isO(doc0) ) {
				//encoded doc cannot be saved
				if (doc0.CRYPTO) {
					pi.reject({}, "Cannot save pre-encrypted.");
				}
				//no name or type, reject
				else if (!doc0.name || !doc0.type){
					pi.reject({}, "Undefined name or type.");
				}
				//reject sys settings
				else if (doc0._id==="cw" && dbid==="cw"){
					pi.reject({}, "Saving system settings is forbidden using .save() method.");
				}
				else {
					doc = Object.clone(Object.reject(doc0,"_attachments"),true);


					log = isA(doc.log);
					isnew = !doc._id || !doc._rev;

					//copy attachments
					if (doc0._attachments && Object.size(doc0._attachments)) {
						doc._attachments={};
						for (var i in doc0._attachments) {
							att = doc0._attachments[i];
							if (!att.data) doc._attachments[i]=Object.select(att,["content_type","digest", "revpos","stub"]);
							else doc._attachments[i]=Object.select(att,["data","content_type"])	
								}
					}



					if (isnew) {
						doc.stamp=Date.now();
						doc._id=doc._id||lib.uuid(me.name);
						delete doc._rev;
						if (log) doc.log=[[Date.now(), "create", me.name+"-"+me.uid, 1, dbid]];
						doc.creator = doc.creator||(me.name+"-"+me.uid);
					} 
					else if (log) {
						myid = me.name+"-"+me.uid;
						if (!doc.log.length || doc.log[0][2] != myid || Date.now()-doc.log[0][0]>6e5) doc.log.add([[
							Date.now(),
							"update", 
							myid, 
							doc._rev.split("-")[0]*1+1,
							dbid
						]],0);

						if (doc.log.length>50) doc.log = doc.log.to(49).add([doc.log.last()]);
					}

					encdoc=_encrypt(doc);
					_put(encdoc);
				}
			} else pi.reject({}, "No doc to save.");
			return pi.promise();

			function _put(encdoc){
				db.put(encdoc, function (e, res) {
					if (!e) {
						db.get(res.id, function(e, res) {
							var obj=res;
							if (!e) {

								// ******* SAVE OK ********

								obj._read=obj._rev;
								obj._db = dbid;
								obj = _cache (obj);

								pi.resolve(obj);

								if (!silent) _note((obj.type||"Doc").capitalize()+" "+(doc.name||doc._id)+" saved.","ok");

							} else pi.reject(e, "Error reading doc "+doc._id+" after save.");
						});
					} else {
						if (e.status=="409" && !silent) {
							//we have conflict, try to resolve
							$.my.modal({
								manifest:"cw.Sys.Confirm",
								data:{
									text:'<span class="fi-alert o70 mr5 fs90"></span> Conflict: document was updated externally while edit. '
									+'Saving doc will overwrite external changes.',
									ok:"Overwrite"
								}
							}).then(function(d){
								if (isO(d) && d.cmd==="commit") {
									db.allDocs({startkey:doc._id,endkey:doc._id}).then(function(a){
										var r=a.rows;
										if (r && r.length) {
											encdoc._rev=r[0].value.rev;
											_put(encdoc);
										} else {
											pi.reject(e, "Conflict on doc "+doc._id+". System error during overwrite");
											con("Doc read on overwite is", a);
										}
									}, function(){
										pi.reject(e, "Conflict on doc "+doc._id+". Overwrite failed reading new revision id.");
									});
								} else {
									con("Save of "+doc._id+" into "+ext.name+' was cancelled, conflict', e.message, e.stack);
									pi.reject(e, "Conflict on doc "+doc._id+". Save cancelled.");
								}
							}).fail(function(){
								con("Save of "+doc._id+" into "+ext.name+' was aborted, conflict', e.message, e.stack);
								pi.reject(e, "Conflict on doc "+doc._id+". Save failed.");
							});
						} else {
							con("Error saving "+doc._id+" into "+ext.name, e.message, e.stack);
							pi.reject(e, "DB failed on doc "+doc._id+". Save aborted.");
						}
					}
				});
			} // --- end _put 
		},

		//===========================================

		"load":function _dbLoad (A1, A2, A3){
			// .load(key, includeAttaches).then(fn(res){}) >> res is doc
			// .load(keyStart, keyEnd) >> res is [doc1,doc2,...]
			// .load([key1, key2, key3...]) >> res is [doc1,doc2,...]
			// .load (keyStart, keyEnd, docType) >> list of docs of type
			var pi=_pi(), list=[], type, rd=ram[dbid];
			//list of keys
			if (isA(A1)) {
				if (!A1.length) pi.resolve([]);
				list=A1.map(function(e){
					var i=e+"";
					if (n(e) && (i.length>0)) return i;
				}).compact();
				type=isS(A2)?A2:null;
				db.allDocs({
					keys:list,
					include_docs:true,
					conflicts:true
				}, function (e, res) {
					var a=[], row,i=0;
					if (!e) {
						if (!res.rows.length) pi.resolve([]);
						else {
							for (;i<res.rows.length;i++) {
								if (res.rows[i].doc && (!type || res.rows[i].doc.type===type)) {
									res.rows[i].doc._db=dbid;
									row = _cache(res.rows[i].doc);
									if (n(row)) a.push(row);
								}
							}
							pi.resolve(a);
						}
					} else pi.reject(e, "Error reading docs by keylist.");
				});
			}

			// one elt, get with attaches
			else if (isS(A1) && (undefined===A2 || isB(A2))) {
				//look in cache...
				if (rd.hasOwnProperty(A1) && rd[A1]._full) {
					if (rd[A1]._deleted || rd[A1]._hidden) pi.resolve(null);
					else pi.resolve(rd[A1]);
				}
				//...or read db
				else db.get(A1,{attachments:A2, conflicts:true},function (e, res){
					var obj=res;
					if (!e) {
						obj._db = dbid;
						obj._full = !!A2;
						obj = _cache (obj);
						pi.resolve(obj);
					} 
					else pi.resolve(null);
				});
			}

			// key range
			else if (isS(A1) && isS(A2)) {
				var start=A1, end=A2, reverse=false;
				if (A1>A2) start=A2, end=A1, reverse=true;
				type=isS(A3)?A3:null;
				db.allDocs({
					startkey:start,
					endkey:end,
					descending:reverse,
					include_docs:true,
					conflicts:true
				}, function (e, res) {
					var a=[], row,i=0;
					if (!e) {
						if (!res.rows.length) pi.resolve([]);
						else {
							for (;i<res.rows.length;i++) {
								if (!type 
										|| (res.rows[i].doc && res.rows[i].doc.type===type)
									 ) {
									res.rows[i].doc._db=dbid;
									row = _cache(res.rows[i].doc);
									if (n(row)) a.push(row);
								}
							}
							pi.resolve(a);
						}
					} else pi.reject(e, "Error reading docs by keylist.");
				});
			}
			return pi.promise();
		},

		//===========================================

		"ram": function (A1) {
			//traverse sync cache,
			//returns array of results
			var i,a=[];
			if (isS(A1) && rd[A1]) a.push(rd[A1]);
			else if (isA(A1)) {
				for (i=0;i<A1.length;i++) if (rd.hasOwnProperty(A1[i])) a.push(rd[A1[i]]);
			}
			else if (isF(A1)) {
				try {
					for (i in rd) if (A1(rd[i])) a.push(rd[i]);
				}catch(e){}
			}
			return a;
		},

		"inram": function (A1) {
			return isS(A1) && rd.hasOwnProperty(A1);
		},

		//===========================================

		"tags": function _dbTags (){
			//returns sortad tag list
			return Object.keys(tags[dbid]).sort();
		},

		//===========================================

		"find":function _dbFind (A1, A2, A3){
			var pi=_pi(), params={},
					sort=null, reverse=false,
					rnd, fn,filter=A1,start,end,str;

			if (isO(A2) && (isF(A1)||isS(A1))) {
				if (undefined!==A2.start && undefined!==A2.end) {
					start=A2.start, end=A2.end, reverse=false;
					if (start>end) start=A2.end, end=A2.start, reverse=true;
					params.startkey=start;
					params.endkey=end;
				}
				if (isF(A2.sort)) sort = A2.sort;
			}

			if (isO(A1) && A1.filter) {
				filter = A1.filter;
				if (undefined!==A1.start && undefined!==A1.end) {
					start=A1.start, end=A1.end, reverse=false;
					if (start>end) start=A1.end, end=A1.start, reverse=true;
					params.startkey=start;
					params.endkey=end;
				}
				if (isF(A1.sort)) sort = A1.sort;
			}

			if (isS(filter)) str=filter, filter = function (d) {return d.type===str?d._id:null};

			//filter 
			if (isF(filter)) {
				rnd=Date.now()+"-"+Number.random(1e6);
				cw.TMP[rnd] = filter;
				fn = eval('(function(d){var k=cw.TMP["'+rnd+'"](d);if(undefined!==k&&null!==k)emit(k,d);})');
				if (null===sort && (isF(A2) || isS(A2))) sort=A2, reverse = !!A3;
				db.query(fn, params, function(e,res){
					delete cw.TMP[rnd];
					var a=[], row,i=0;
					if (!e) {
						if (!res.rows.length) pi.resolve([]);
						else {
							for (;i<res.rows.length;i++) {
								res.rows[i].value._db=dbid;
								row = _cache(res.rows[i].value);
								if (n(row)) a.push(row);
							}
							pi.resolve(null!==sort?a.sortBy(sort,reverse):a);
						}
					} else pi.reject(e, "Error searching docs.");
				});
			} else pi.reject({}, "No filter function provided.");

			return pi.promise();
		},

		//===========================================

		"watch": function _dbWatch (type0){
			// watches changes of type or all changes if type==""
			// returns promise which receives notofocations
			// with arrays of updated/new items
			var type = type0||"";
			if (!watchers[dbid].types[type]) {
				watchers[dbid].types[type]=$.Deferred();
			}
			return watchers[dbid].types[type].promise();
		},

		//===========================================

		"markread": function _dbMarkRead (id){
			// not a promise
			// Marks id as read			
			var doc=ram[dbid][id],res={};
			if (dbid==="cw") return null;
			if (doc && doc._rev!==doc._read) {
				res=$.extend(res,doc);
				res._read=res._rev;
				return _cache(res);
			}
			return doc;

		},

		"isread": function _isRead(id) {
			if (dbid==="cw") return null;
			return read[dbid].read[id]||null;
		},


		//===========================================

		"hide":function _dbMarkHidden (id){
			// not a promise
			// Marks id as read
			var doc=ram[dbid][id],res={};
			if (dbid==="cw") return null;
			if (doc && !doc._hidden) {
				res=$.extend(res,doc);
				res._hidden=true;
				return _cache(res);
			}
			return doc;
		},

		//===========================================

		"uuid":function (a){
			return lib.uuid(a);
		},

		//===========================================

		"users":function (a){
			return users[dbid];
		},

		//===========================================

		"del": function(id){
			var doc=ram[dbid][id],res={},pi=_pi();
			if (dbid==="cw" && id=="cw") pi.reject("Settings can not be deleted");
			else if (doc && !doc._hidden) {
				db.remove(doc, function(e,res){
					if (!e) pi.resolve(true);
					else con(e), pi.reject("Fail to delete doc "+(doc.title||doc.name));
				});
			}
			return pi.promise();
		},

		"replicate":{
			to: db.replicate.to.bind(db),
			from:db.replicate.from.bind(db)
		}

	} // -- end ext


	for (i in db) if (!ext[i]) {
		if (isF(db[i])) ext[i] = db[i].bind(db);
	}


	return dbs[dbid]=ext;

} // -- end _extdb()

	
}
	
	// Ajax hook for $.my,
// intercepts requests, that can be 
// resolved with locally stashed versions
// of plugins

function _ajax (A1, A2){
	
	var p = sys.ram(CW.pluginSetDoc)[0],
			a, url, lib;
	
	if (p && (a=p._attachments)) {
		url = isS(A1)?A1:((A1||{}).url);
		if (url && !/^http[s]?:\/\//.test(url)) {
			// local url
			url = url.split("/").last();
			if (a[url]) {
				// Load attach
				var pi = _pi();
				
				sys.att(CW.pluginSetDoc)
				.data(url)
				.then(function(obj){
					var r, src = obj[url].data;
					try {
						r = decodeURIComponent(escape(window.atob(src)));
					}catch(e) {
						r=null;
					}
					if (r) {
						try {
							window.eval(r);
							con("Started local "+url);
						} catch (e) {
							con("Error starting local "+url, e.message);
							pi.reject("Error initializing local lib "+url);
						}
						pi.resolve(null);
						
					} else pi.resolve(null);
				})
				
				return pi.promise();
			}
		}
	}
	
	// No local, request real ajax
		
	return $.ajax.apply(this, Array.prototype.slice.call(arguments));	
}

$.my.ajax(_ajax);
	
	
	//#######################

	cw["me"] = function (A1){
		if (undefined===A1) return me.name;
		else if (null===A1) return Object.clone(me);
		else return me[A1];
	}
	
	
	//#######################
	
	cw["dbs"] = function (){
		var list={}, a=Object.keys(dbs);
		a.forEach(function(i){list[i]=dbs[i].title()});
		return list;
	}
	
	//#######################
	
	cw["version"] = function (){return VERSION;}
	cw["version"].toString = function (){return VERSION;}

	
	function _startCloudwall () {
	
	// Starts system up
	
	var pi=_pi(), 
			i, db0,
			_fail=false;

	// remount unsafe methods
	_getSyncUrl = cw.crypto._getSyncUrl;
	_getDbSettings = cw.crypto._getDbSettings;
	_getSettings = cw.crypto._settings;
	_initCrypto = cw.crypto._init;

	// exec startup sequence
	_db()											
	.then(_readSettings)			
	.then(_processSettings)		
	.then(_startUi)						
	.then(_startMonitors)		
	.then(_readUsers)				
	.then(_finalize)
	.fail(function(code, msg) {
		_note(msg,"error"), pi.reject(msg);
	});
	
	

	return pi.promise();
	
	
	// - - - - - - - - - - - - - - - - - - - 
	
	// #### FINALIZE
	
	function _finalize(){
		
		// hide unsafe methods
		if (!cw.debug) {

			delete cw.crypto._getSyncUrl;
			delete cw.crypto._getDbSettings;
			delete cw.crypto._settings;
			delete cw.crypto._init;


			delete window.PouchDB;
			delete cw.CW;
			delete cw.reg;
			delete cw.start;
			delete cw.lock;
			delete cw.read;
			
			delete $.my.ajax;
		} else {
			cw.forms = forms;
		}

		//freeze state obj
		Object.freeze(cw.state);

		//close tab hook
		window.onbeforeunload=function(){
			//check unsaved
			var slots = cw.state.slots(), unsaved=0;
			for (var i in slots) {
				var app = slots[i].app, data = slots[i].$app.my("data");
				if (app.isEditor() && app.crcdoc !== lib.footprint (lib.getref(data, app.nodedoc))) {
					unsaved+=1;
				}
			}
			cw.log("~~~ Tab close "+(unsaved?"requested, some docs are unsaved":"")+" ~~~");
			return unsaved?"Some docs are not saved. Proceed?":undefined;
		}

		pi.resolve(dbs);
	}
	

	//##### 7
	function _readUsers(){
		var pi0 = _pi(),
				i=0, 
				exist = false, 
				synced = false,
				doc;
		for (var dbid in dbs) {
			if (dbid!=="cw") dbs[dbid].load("user-","userz","user")
			.then(function(a, dbid){
				//check if self is in db

				for (;i<a.length && !exist;i++) {
					if (a[i]._id===me._id) 	exist=a[i];
				}
				if (!exist) {
					//check if db is replicated to somewhere
					var dbset = _dbsettings(dbid);
					for (i=0;i<dbset.sync.length;i++) if (dbset.sync[i].dir.indexOf("to")>-1) synced=true;
				}
				if (synced && (!exist || exist.crc !== me.crc)) {
					con("User card doesn’t exist or obsolete in "+dbid+", updating.");
					//save or update self
					doc = Object.clone(me,true);
					if (exist) {
						doc._rev = exist._rev;
						dbs[dbid].save(doc, true)
						.always(pi0.resolve());
					} else {
						(function(){
							//save
							if (!ram[dbid][me._id]) dbs[dbid].save(doc, true);
						}).delay(a.length?1000:10*60*1000);
						pi0.resolve();
					}
				} else {
					pi0.resolve();
				}
			}.fill(undefined, dbid)).fail(function(){
				pi0.reject(0,"Loading users from "+dbid+" failed");
			}.fill(undefined, dbid));
		}
		return pi0.promise();
	}

	//##### 6
	function _startMonitors(){
		con("Start url observers and savers");
		var pi0 = _pi();	
		if (!window.location.hash || window.location.hash==="#") 
			window.location.hash=CW.appDefault;
		try {
			// Start readsaver
			setInterval(_readsaver, CW.readStateSaverInterval);
			// Start url observer 
			setInterval(_urlObserver, CW.urlObserverInterval);
		} catch (e) {
			pi0.reject(0, "Observers start failed")
		}	
		pi0.resolve();
		return pi0.promise();
	}

	//##### 5
	function _startUi(){
		var pi0 = _pi(), _fail=false;
		var _paneStarted = function(){	
			pi0.resolve();
		}.after(2);

		// Prepare HTML bones
		try {_domPrepare();}
		catch (e) {pi0.reject(0, "DOM start failed: "+e);}

		// Run leftpane
		CW.$left
		.my(CW.appLeft,{},{})
		.then(_paneStarted)
		.fail(function(a,b){
			con (a,b)
			pi0.reject(0,"Error starting left pane")
		});

		// Run dock
		CW.$right
		.my(CW.appRight,{},{})
		.then(_paneStarted)
		.fail(function(a,b) {
			con (a,b)
			pi0.reject(0,"Error starting right pane")
		});	

		return pi0.promise();
	}

	//#### 4.1

	function _domPrepare(){
		//decode and mount all containers
		for (i in CW) if (i.to(1)==="$") {
			if (i==="$body" && $(CW[i]).size()) CW[i] = $body = $(CW[i]);
			else if ($(CW[i]).size()) CW[i] = $(CW[i]);
			else throw("Unsuitable DOM, some mount points does not exist");
		}

		CW.$upic.attr("src", me.pic);

		//--- left pane ---
		CW.$leftPane = CW.$left.css({width:CW.leftWidth+"px",left:"0px"}).wrap(CW.pane)
		.parent().attr("id","cw-pane-left")
		.css({width:CW.leftWidth+"px",margin:"0 26px 0 -26px"});
		CW.leftPaneP = CW.$leftPane.wrap(CW.paneP)
		.parent().append($(CW.paneBtn).css({left:"-42px"})).addClass("dib vat");

		//---left pinbutton
		CW.leftPaneP.on("click", ">.cw-side-hoverpane", function(){
			var that=$(this);
			CW.$slots.addClass("cw-shifted").css({width:CW.$slots.width()-CW.leftWidth+"px"});
			that.prev().removeClass("hide");
		});

		//--- right pane ---
		CW.$rightPane = CW.$right.css({width:CW.rightWidth+"px",right:"0px"}).wrap(CW.pane)
		.parent().attr("id","cw-pane-right").css({width:CW.rightWidth+"px"});
		CW.rightPaneP = CW.$rightPane.wrap(CW.paneP)
		.parent().append($(CW.paneBtn).css({left:"10px"}))
		.css({position:"absolute",right:0,top:0});

		//---right pinbutton
		CW.rightPaneP.on("click", ">.cw-side-hoverpane", function(){
			var that=$(this);
			CW.$slots.addClass("cw-shifted").css({width:CW.$slots.width()-CW.rightWidth+"px"});
			(function(){that.prev().removeClass("hide");}).delay(50);
		});

		//--- slots ---
		CW.$slots.css({width:(CW.defaultSpaceWidth-CW.rightWidth-CW.leftWidth)+"px"});

		//--- space ---
		CW.$space.css({width:CW.defaultSpaceWidth+"px",transition:"width 0.08s",display:"block"});


		//--- redraw on resize ---

		$(window).on("resize", function (){
			CW.maxSpaceWidth=$(window).width()-CW.margins;
			cw.layout();
		}.debounce(67));


		//---update on statechange

		cw.event().progress(function(evt){
			if (/^slot/i.test(evt)) {
				CW.$right.trigger("update.cw");
			}
			if (/^(slot|db|settings|app)/i.test(evt)) {
				CW.$left.trigger("update.cw");
			}
		}.debounce(2));
		con("End dom prepare");
	}

	//##### 2
	function _readSettings() {
		var pi0 = _pi();
		pi0.then(function(){
			//make system visble
			$(".cw-Runtime").removeClass("hide");
			$(".cw-Static").addClass("hide").html("");
			$("#cw-body").addClass("cw");
			//window width
			CW.maxSpaceWidth = Math.max($("body").width()-100, CW.defaultSpaceWidth);
		}).fail(function(){

		});
		sys.get("cw").then(function(doc){
			con("Settings doc read");
			_initCrypto(doc)
			.then(function(){
				con("Settings doc decoded");
				pi0.resolve();
			}).fail(function(msg){
				pi0.reject(0, msg, "Invalid PIN, access denied");
			});
		}, function(){
			pi0.reject(1, "No settings file");
		})
		return pi0.promise();
	}

	//#####  1
	function _db() {
		var pi0 = _pi();
		db0 = new Pouch("cw", {size:100}/*, {auto_compaction:true}*/)
		.then(
			function (res) {
					sys=res;
					(function(){pi0.resolve(res)}).delay(1);
					con("Connected to cw");
			},
			function(e) {
				pi0.reject(0, "Fail to connect system DB");
			}
		);
		return pi0.promise();
	}
}



// -- end system start up
	

//Mount var and fns to cw
	
	Object.merge(cw,{
		CW:CW,
		locked:_locked,
		lock:_lock,
		state:Object.clone(state),
		db:function(dbid){return dbs[dbid]?Object.merge({}, dbs[dbid]):null},
		con:function(){con.apply(null,arguments);},
		ram:function(dbid, docid) { return (ram[dbid] && ram[dbid][docid])?ram[dbid][docid]:null;},
		note:_note,
		read:read,
		reg:_register,
		start:_startCloudwall
	});
	
})(cw);
