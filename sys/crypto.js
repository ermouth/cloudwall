/**
 * CloudWall 2.2.3 crypto lib and settings sandbox
 * (c) 2017 ermouth
 *
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
						+ 'It can take a time, but you may continue working during process. '
						+ 'On sync finish you’ll see a notification.'
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
						+'content of current DB will be discarded on this device. '
						+' Removing local copy does not affect remote data, if any.'
						+' When the process finishes, page reloads.'
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
			if (cw.lib.md5(doc)===crc) return pi.resolve("Nothing changed, no need to save");

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
							'<div class="tac mt15 mb5"><div class="dib vat w260 o80">'
							  + "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"100%\" viewBox=\"0, 0, 1000, 80\">\n  <defs>\n    <linearGradient id=\"G_0\" gradientUnits=\"userSpaceOnUse\" x1=\"9.905\" y1=\"60\" x2=\"137.96\" y2=\"20\">\n      <stop offset=\"0\" stop-color=\"#ACD6FF\"/>\n      <stop offset=\"0.455\" stop-color=\"#9AC4F5\"/>\n      <stop offset=\"1\" stop-color=\"#7494D0\"/>\n    </linearGradient>\n  </defs>\n      <path d=\"M92,0 C113,-0 128,17 127,35 C145,39 147,51 147,56 C147,71 136,79 122,79 L23,79 C10,79 0,70 0,58 C-0,46 9,38 19,37 C19,20 33,8 50,8 C58,8 63,11 65,13 C66,9 76,0 92,0 z\" fill=\"#FFFFFF\"/>\n      <path d=\"M22,80 L22,79 L21,79 C19,79 17,79 15,78 C9,76 4,72 1,67 C1,66 1,66 1,65 L25,65 L25,80 z M95,80 L95,65 L29,65 L29,80 z M125,80 L125,79 C127,79 127,79 130,79 C132,78 132,78 134,77 C138,75 142,72 144,69 C144,68 145,67 145,66 C146,66 146,65 146,65 L99,65 L99,80 z M147,61 C148,57 147,53 146,49 C145,47 144,46 143,44 C143,43 142,43 142,43 L136,43 L136,61 z M132,61 L132,43 L66,43 L66,61 z M62,61 L62,43 L6,43 C3,46 0,50 0,55 C-0,57 -0,58 0,60 C0,61 0,61 0,61 z M138,39 C138,39 137,39 137,38 C135,37 133,36 131,36 C129,35 129,35 127,35 C127,34 127,33 127,32 C127,28 126,24 125,21 L125,21 L99,21 L99,39 z M95,39 L95,21 L29,21 L29,39 z M25,39 L25,21 L24,21 C24,21 24,21 23,22 C21,26 19,32 19,37 C17,37 17,37 15,38 C13,39 14,38 12,39 z M123,17 C123,16 122,16 122,15 C121,13 119,12 118,10 C112,5 105,1 97,0 C96,0 94,-0 92,0 C86,0 80,1 75,4 C72,5 69,8 66,10 L66,11 L66,17 z M62,17 L62,11 C59,10 58,9 55,9 C54,9 53,8 51,8 C51,8 49,8 48,8 C46,8 44,9 42,9 C37,10 33,13 29,16 C28,16 28,16 28,17 z\" fill=\"url(#G_0)\"/>\n    <path d=\"M268,19 L256,23 Q244,11 223,11 Q207,11 197,19 Q187,27 187,39 Q187,52 197,60 Q207,68 224,68 Q245,68 256,56 L267,62 Q259,71 249,75 Q238,80 223,80 Q203,80 189,69 Q174,58 174,39 Q174,21 189,10 Q203,-0 223,-0 Q252,-0 268,19 z M416,45 Q416,55 408,62 Q400,68 387,68 Q373,68 365,62 Q357,55 357,45 Q357,35 365,29 Q373,22 387,22 Q400,22 408,29 Q416,35 416,45 z M430,45 Q430,30 416,20 Q404,11 387,11 Q369,11 357,20 Q343,30 343,45 Q343,61 357,71 Q369,79 387,79 Q404,79 416,71 Q430,61 430,45 z M519,13 L507,13 L507,54 Q507,68 481,68 Q456,68 456,54 L456,13 L443,13 L443,56 Q443,66 453,73 Q464,79 481,79 Q499,79 509,73 Q519,66 519,56 z M552,66 L552,25 L583,25 Q594,25 600,30 Q607,36 607,46 Q607,55 601,60 Q595,66 585,66 z M540,13 L540,77 L584,77 Q592,77 600,75 Q606,72 610,69 Q621,57 621,45 Q621,31 610,22 Q600,13 582,13 z M739,2 L720,65 L700,2 L684,2 L665,65 L645,2 L631,2 L656,77 L673,77 L692,14 L711,77 L728,77 L753,2 z M783,52 L799,24 L815,52 z M807,13 L791,13 L755,77 L769,77 L777,64 L821,64 L829,77 L843,77 z M916,66 L873,66 L873,13 L860,13 L860,77 L916,77 z M1000,66 L949,66 L949,13 L936,13 L936,77 L1000,77 z M339,66 L296,66 L296,13 L283,13 L283,77 L339,77 z\" fill=\"#719BD3\"/>\n</svg>"
								+'</div>',
							['','<input id="pin" type="password" placeholder="Enter PIN" class="w250 fs150 tac pt10 pb10 blue" >'],
							['', 'btn#btn-ok.fs105.pl20.pr20.mb10.br100',{val:"Decrypt profile"}]
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
				close:false,
				css:'p20',
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
		else  {
			cw.debug=true;
			_decSettings (doc);
		}

		return pi.promise();
		
		//- - - - - - - - - - - - - - - - - - -

		function _decSettings (doc) {
			var img, obj = decode(doc, PIN);
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
					if (obj.pic.length>4e4) {
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
				me.roles = cw.userCtx?cw.userCtx.roles:['_admin'];

				S = Object.merge({}, obj);

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
		enc: 					encode.fill(),
		dec: 					decode.fill(),
		keys: 				getKeysPub.fill(),
		has: 					hasKey.fill(),
		att: 					decodeAtt.fill(),
		share: 				function(){},
		install: 			function(){},
		_init: 				init.fill(),
		dblist:				dbs.fill(),
		me:						getme.fill(),
		_getDbSettings: dbsettings.fill(),
		_getSyncUrl:	getSyncUrl.fill(),
		_settings: 		(function () {return S}).fill()
	};

	return C;

	function _pin(s) {
		return cw.lib.md5(cw.lib.md5(s)+cw.lib.hash8(s));
	}

	function _pin2(s, user) {
		return cw.lib.md5(_pin(s)+user);
	}

})();
