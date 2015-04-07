(function(system, jQuery, Pouch) {
	var cw = Object.merge({},system),
		$ = Object.clone(jQuery),
		PouchDB = Pouch;
	
[
//####### Start system manifests #########
	
{
	"id": "cw.Sys.Db.DocInfo",
	"init": function ($o, form) {

	var that=this, pi=$.Deferred(),
			k1="name type crypto title _id _rev _read _nokey _conflicts contact creator stamp log created owners _attachments parent pic".split(" "),
			k2="_id _rev parent title contact type creator created stamp _read crypto _conflicts _attachments".split(" "),
			d = form.data, 
			db=d.db,
			fi;
	if (!db || !Object.isObject(db) || !db.load) throw "No DB provided";

	//this.Actions = $.my.cache("cw.Sys.Db.List.Actions"); 

	db.load([d.id])
	.fail( function(){
		pi.reject("Doc does not exist")
	})
	.then(function(a){
		var val;
		Object.merge(d.doc, Object.select(a[0],k1));
		try {
			// mount doc info
			k2.forEach(function(e){
				var r;
				if (val=d.doc[e]) {
					val=(val+"").escapeHTML();
					if (e==="stamp") d.info.push({n:"Modified",v:cw.lib.date(d.doc[e]*1,"full")});
					else if (e==="created") d.info.push({n:"Created",v:cw.lib.date(d.doc[e]*1,"full")});
					else if (e==="crypto") d.info.push({
						n:"Crypto",
						v:"AES256 key ID: "+val
						+(d.doc._nokey?', key is unknown':'')
					});
					else if (e==="_read" && val) {
						r=db.isread(d.id);
						if (r) d.info.push({n:"Read",v:(d.doc._rev===r.rev?"":"Rev "+r.rev.split("-")[0]+", ")+cw.lib.date(r.stamp*1,"full")});
					}
					else if (e==="creator" || e==="author") {
						r = val.split("-");
						d.info.push({
							n:"Creator",
							v:'<span class="fi-torso"> '+r[0]+'</span>'+(r[1]?' <i class="fs90 gray">('+r[1]+')</i>':'')
						});
					}
					else if (e==="_conflicts") {
						r = d.doc[e].length;
						if (r) d.info.push({
							n:"Conflicts",
							v:r+' fork doc'+(r>1?'s':'')+' stored'
						});
					}
					else if (e==="_attachments") {
						r = Object.keys(d.doc[e]);
						if (r.length) d.info.push({
							n:"Attaches",
							v:r.length<6?r.map(function(e) {
								var t = e.escapeHTML();
								return '<span title="'+t+'">'+t.truncate(40,"middle")+'</span>';
							}).join('<br>'):r.length+" files"
						});
					}
					else d.info.push({n:e.replace(/^_/,'Doc ').capitalize(),v:val});
				}
			});

			// mount actions
			// ...app
			if (d.doc.type==="manifest" && a[0].manifest.app && a[0].manifest.app.name) {
				//we have app
				if (a[0].manifest.app.nodecmd) d.actions["_runnew"]=[a[0].manifest.id];
				else d.actions["_run"]=[a[0].manifest.id];
			}
			// ...doc
			if (!d.doc._nokey) Object.merge(d.actions, db.actions(d.doc.type));
			// ..system
			if (d.id!=="cw" && d.doc.type!=="readhidelist") {
				d.actions["_export"]=true;
				d.actions2["_hide"]=true;
				if (!d.doc._nokey && 
						(d.doc.type!=="manifest" 
						 || 
						 (Object.isArray(d.doc.log) 
							&& 
							d.doc.log.last()[2].startsWith(cw.me())
						 ))
					 ) {
					d.actions2["_delete"]=true;
				}
			}
			if (d.doc.type=="readhidelist") d.actions2["_hide"]=true;
			d.actions["_json"]=true;
		} catch(e) {
			con("Error during doc info render.",e.message, e.stack)
		}

		$o.html($.my.formgen([
			'<div class="w700">',
			'<img src="" id="pic" class="br6 vat dib '+(!d.doc.pic?'hide':'w50 mr20')+'">', 
			'<div class="ha dib vat '+(!d.doc.pic?'w600':'w500')+' mt-2 ">',
			'<div class="fs150 bold vat dib lh120 xgray ml-2 mb5" id="name"></div>',
			'<div id="list" class="xgray fs90 cb"></div>',
			'</div>',
			'<div id="actions" class="my-row hide pt15 mt20 btd '
			+(Object.size(d.actions)>4?"fs80":"fs85")+'"></div>',
			'</div>'

		].compact()));

		$o.on("click",".button", function (){
			d.cmd = $(this).data("action");
			(function(){$o.trigger("commit");}).delay();
		});

		pi.resolve();
		
	});

	return pi.promise();
		
		},
	"params": {
		"width": 700
	},
	"data": {
		"db": null,
		"id": "",
		"cmd": "",
		"info": [],
		"doc": {
		},
		"actions": {
		},
		"actions2": {
		}
	},
	"ui": {
		"#pic": "doc.pic",
		"#name": "doc.name",
		"#list": function (d) {

			return $.my.formgen(d.info.reduce(function(a,b){
				a.push([b.n,'<span>'+b.v+'</span>']);
				return a;
			},[{row:"500px",label:"80px", labelCss:"gray fs90", rowCss:"my-row pt8"}]))
		
			},
		"#actions": {
			"bind": function (d) {

				var html="", fi, name, that=this;
				if(Object.size(d.actions2)) {
					html+='<div class="fr ml10">'+_btns(d.actions2, "ml5 mr0")+'</div>';
				}
				html+=_btns(d.actions,"mr5");
				return html;
				
				//--------
				
				function _btns (list, css) {
					var i, html='';
					for (i in list) {
						fi=that.Actions.fi[i]||"";
						name = that.Actions.name[i]||i.capitalize();
						html+='<span data-action="'+i+'" '
							+' title="'+(that.Actions.tip[i]||"").assign(d.doc)+'"'
							+' class="'+css+' button'
						if (fi) html+=' fs90 '+fi+'"> <span class="fs110">'+name+'</span></span>';
						else html+='"> '+name+'</span>';
					}
					return html;
				}
			
				},
			"css": {
				"hide": function (d) {
					return !Object.size(d.actions)
					}
			}
		}
	},
	"Actions": {
		"fi": {
			"edit": "fi-pencil",
			"view": "fi-eye",
			"create": "fi-page-copy",
			"_more": "fi-info",
			"_export": "fi-page-export",
			"_run": "fi-play-circle green",
			"_runnew": "fi-play-circle green",
			"_delete": "fi-trash red",
			"_hide": "fi-minus-circle orange",
			"_json": "fi-indent-more"
		},
		"name": {
			"create": "Clone",
			"_more": "Info",
			"_export": "Copy...",
			"_run": "Run",
			"_runnew": "Run",
			"_delete": "Del",
			"_hide": "Hide",
			"_json": "JSON"
		},
		"tip": {
			"edit": "Edit {type}",
			"create": "Create new {type} with the content of this one",
			"_run": "Run application",
			"_runnew": "Open app and create empty {type}",
			"_delete": "Delete {type} permanently",
			"_hide": "Hide {type}. Doc remains in DB, \nbut you’ll never see it again.",
			"_export": "Copy {type} to other DB",
			"_json": "Edit as JSON"
		}
	}
},
{
	"id": "cw.Sys.Db.Settings",
	"init": function ($o, form) {

		var that=this;
		$o.html($.my.formgen(that.HTML));
		Object.merge(form.data, this.db.settings(), true);
		this.App.db=this.db;
		if (!form.data.pic) form.data.pic=form.data.ico;
	
			},
	"app": {
		"name": "DBSettings",
		"version": "2",
		"timeout": "5000",
		"title": "DB Settings",
		"author": "ermouth",
		"ico": "data:image/jpeg;base64,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",
		"nodetitle": "title",
		"maskstate": {
			"name": true
		},
		"width": [800]
	},
	"params": {
		"delay": 20
	},
	"data": {
		"ico": "",
		"pic": "",
		"name": "",
		"title": "",
		"desc": "",
		"stamp": 0,
		"start": "",
		"creator": "",
		"apps": [],
		"sync": []
	},
	"ui": {
		"#dbtitle": {
			"bind": "title",
			"watch": "#title"
		},
		"#title": {
			"bind": "title",
			"check": function (d,v) {

				if (v && v.length<3) return "At least 3 characters";
				if (v && v.length>40) return "40 chars maximum";
				return "";
			
					}
		},
		"#desc": {
			"bind": "desc",
			"check": /^[\s\S]{0,300}$/,
			"error": "300 chars maximum"
		},
		"#dbinfo": {
			"bind": function (d,v,$o) {

				var that=this;
				that.db.info().then(function(res){
					var h="", docs=0, users=1, useq=0;
					docs=res.doc_count;
					useq=res.update_seq;
					h='Internal ID: '+that.db.name+'. ';
					if (d.stamp) {
						h+="Created "+cw.lib.date(d.stamp*1, "tiny")
						+(d.creator?' by '+d.creator+'. ':". ");
					}
					if (docs) {
						h+='Contains '+docs+' doc'+(docs>1?'s':'')+'. '
					} else h+='DB is empty. ';
					$o.html(h);
				});
			
					}
		},
		"#pic": {
			"bind": function (d,v) {

				if (!d.ico.length) d.ico=d.pic;
				return d.pic;
			
					}
		},
		"#apps": {
			"bind": "apps",
			"manifest": "App",
			"check": true,
			"watch": "#btn-addapp"
		},
		"#sync": {
			"bind": "sync",
			"manifest": "Sync",
			"check": true,
			"watch": "#btn-addsync"
		},
		"#start": {
			"bind": function (d,v) {

			if (v!=null) {
				var a = v.split("#").last().split("/").slice(0,4).compact(true);
				if (a[0]==this.db.name) a=a.slice(1);
				d.start=a.join("/");
			}
			return d.start;
		
					}
		},
		"#btn-close": {
			"bind": function (d,v,$o) {

			if (v!=null)this.app.close(true);
		
					},
			"events": "click.my"
		},
		"#btn-save": {
			"bind": function (d,v,$o) {

			var that=this;
			if (v!=null){
				if (!$o.my().root.my("valid")) {
					cw.note(
						"Save failed – some settings are invalid. Fix reds and try again.",
						"error"
					);
					return;
				}
				var db = cw.db("cw");
				d._cmd="";
				db.settings(d).then(function(){
					cw.note("Settings saved");
					that.app.close(true);
				}).fail(function(a){
					cw.note(a,"error");
				});
			}
		
					},
			"events": "click.my"
		},
		"#btn-addapp": {
			"bind": function (d,v) {

			if (v!=null) {
				d.apps.push(Object.merge({stamp:Date.now()},this.App.data, true));
			}
		
					},
			"events": "click.my"
		},
		"#btn-compact": {
			"bind": function (d,v,$o) {

			var dbid = this.db.name;
			if (v!=null) {
				$o.parent().find(".cw-busy").removeClass("hide");
				cw.db(dbid)
				.compact()
				.then(function(){
					if ($o && $o.is(":visible")) $o.parent().find(".cw-busy").addClass("hide"); 
					cw.note("DB "+dbid+" sucessfully compacted.","ok")
				});
			}
		
					},
			"events": "click.my"
		},
		"#btn-delete": {
			"bind": function (d,v,$o) {

			var that=this;
			if (v!=null){
				var db = cw.db("cw");
				d._cmd="delete";
				db.settings(d).then(function(){
					cw.note("Settings saved. DB is being removed.","warning");
				}).fail(function(a){
					cw.note(a,"error");
				});
			}
		
					},
			"events": "click.my"
		},
		"#btn-pic": {
			"bind": function (d,v,$o) {

			if (v!=null) {
				//console.log($o, $o.data(), this)
				$.my.modal({
					manifest:"cw.Sys.Cropper.Square",
					data:{data:"",filename:"", size:250}
				}).then(function (crop) {
					if (crop && crop.data) {
						var I=new Image;
						I.src="data:image/jpeg;base64,"+crop.data;
						I.onload=function(){
							var img=cw.lib.image(I);
							try {
								d.pic = img.resample(128).sharpen(0.2).jpeg(0.96, true);
								d.ico = img.resample(50).sharpen(0.2).jpeg(0.96);
								$o.my().root.trigger("change");
							}catch(e){
								console.log(e)
							}								
							crop.data="";
							$o.my("find", "#pic").trigger("check");
						}
					}
				});
			}
		
					},
			"events": "click.my"
		},
		"#btn-resync": {
			"bind": function (d,v,$o) {

			var that=this;
			if (v!=null){
				var db = cw.db("cw");
				d._cmd="resync";
				db.settings(d).then(function(){
					cw.note("Settings saved. DB is prepared to resync","warning");
				}).fail(function(a){
					cw.note(a,"error");
				});
			}
		
					},
			"events": "click.my",
			"css": {
				"hide": function (d,v,$o) {
						return !d.sync.length
						}
			}
		},
		"#btn-tosync": {
			"bind": function (d,v,$o) {

			var that=this;
			if (v!=null){
				$o.parent().find(".cw-busy").removeClass("hide");
				d._cmd="sync";
				
				var sl = that.db.settings().sync.filter(function(e){return !!e.dir.length}).length,
						end = function(){
							if ($o && jQuery.contains(document, $o[0])) $o.parent().find(".cw-busy").addClass("hide");
						},
						end2 = end.after(sl);
				
				cw.db("cw").settings(d, function(){
					end2();
				}).then(function(a){
					cw.note(a,"ok");
				}).fail(function(a){
					end();
					cw.note(a,"error");
				});

				//_getSyncUrl(dbid,i)
			}
		
					},
			"events": "click.my",
			"css": {
				"hide": function (d) {
						return !d.sync.length
						}
			}
		},
		"#btn-addsync": {
			"bind": function (d,v) {

			if (v!=null) {
				d.sync.push(Object.merge({stamp:Date.now()},this.Sync.data, true));
			}
		
					},
			"events": "click.my"
		}
	},
	"App": {
		"data": {
			"ico": "",
			"title": "",
			"url": ""
		},
		"init": [{
				"row": "350px",
				"rowCss": "my-row pb10"
			},
			["",
				"<div class=\"w125 mr5 dib\">",
				"inp#apptitle.fs85.w125",
				{
					"plc": "Title"
				},
				"</div><div class=\"dib\">",
				"inp#appurl.fs75.w220.pt4.pb4.gray",
				{
					"plc": "App URL hash"
				},
				"</div>"]],
		"ui": {
			"#apptitle": {
				"bind": "title",
				"check": /^.{0,40}$/,
				"error": "40 chars max"
			},
			"#appurl": {
				"bind": function (d,v) {

				if (v!=null) {
					var a = v.split("#").last().split("/").slice(0,4).compact(true);
					if (a[0]==this.db.name) a=a.slice(1);
					d.url=a.join("/");
				}
				return d.url;
			
						}
			}
		}
	},
	"Sync": {
		"data": {
			"url": "",
			"interval": "0",
			"dir": ["from"]
		},
		"init": [{
				"row": "350px",
				"rowCss": "my-row pb15"
			},
			["",
				"<div class=\"w350 mb5 dib\">",
				"inp#syncurl.fs80.w350",
				{
					"plc": "CouchDB URL"
				},
				"</div>",
				"spn#syncdir.dib.mt1.vat.fs80",
				"<div class=\"w250 dib vat\">",
				"<span class=\"fs80 gray ml2\"> in </span>",
				"num#interval.fs80.w70.pt2.pb2",
				{
					"min": 0,
					"max": 7220
				},
				"<span class=\"fs80 gray\"> minute intervals</span>",
				"</div>"]],
		"ui": {
			"#interval": "interval",
			"#syncurl": {
				"bind": "url",
				"check": /^(|http[s]?:\/\/([^\/]{1,100}\/){1,5}[a-z0-9_$\(\)+\-]{2,200}[\/]?)$/,
				"error": "Invalid CouchDB URL"
			},
			"#syncdir": {
				"bind": "dir",
				"init": function ($o) {

				$o.tags({tags:[{"From":"from"},{"To":"to"}]})
			
						}
			}
		}
	},
	"HTML": ["<div class=\"pl50 pr50 cw-Settings\">",
		"<div id=\"nav\" class=\"fs90 pb20 mb25 bbs\">",
		"<div id=\"xDbtitle\" class=\"fi-wrench pr20 fs140 lh120 w250 dib vat gray\"> <span class=\"fs110 bold\" id=\"dbtitle\"></span></div>",
		"<div id=\"dbinfo\" class=\"w230 dib vat fs80 lh120 gray\"></div>",
		"<div class=\"w200 ml20 dib vat\">",
		{
			"row": "200px",
			"rowCss": "my-row"
		},
		["",
			"btn#btn-save.fs100.w90.tac.mr5.green",
			{
				"val": "Save",
				"title": "Saves DB settings"
			},
			"btn#btn-close.fs100.w90.tac",
			{
				"val": "Close",
				"title": "Close and discards changes"
			}],
		"</div>",
		"</div>",
		"<div id=\"sets\" class=\"mb20\">",
		"<table width=\"100%\"><tr>",
		"<td class=\"w120 pr20 tac\">",
		"<img id=\"pic\" class=\"db\" style=\"width:100px;height:100px;border-radius:5px;\"/>",
		"<div style=\"z-index:+2;margin-top:-24px;height:24px;background-color:rgba(255,255,255,0.5)\">",
		"<span id=\"btn-pic\" class=\"pseudolink dib vat fs70 lh140 o80\">Change...</span>",
		"</div>",
		"</td>",
		"<td style=\"width:580px\">",
		{
			"row": "580px",
			"rowCss": "my-row pb10"
		},
		["",
			"inp#title.fs120.w350",
			{
				"plc": "DB title"
			},
			"<div class=\"tip\">DB title as it will be shown in the left pane</div>",
			"msg"],
		["",
			"txt#desc.fs90.w350",
			{
				"plc": "Description"
			},
			"<div class=\"tip\">Short memo about db source, owner if any and so on</div>",
			"msg"],
		"</td>",
		"</tr></table>",
		"</div>",
		"<div id=\"extsets\">",
		{
			"row": "700px",
			"label": "120px",
			"rowCss": "my-row pb10",
			"labelCss": "my-label fs80 gray"
		},
		["Default app",
			"inp#start.w350.fs90",
			{
				"plc": "App name or app URL hash"
			},
			"<div class=\"tip\">Default app to run when DB is clicked in left pane</div>",
			"msg"],
		["Other apps",
			"<div class=\"w350 dib vat\">",
			"div#apps.w350",
			{
				"style": "min-height: 9px;"
			},
			"<div class=\"mt-10\">",
			"spn#btn-addapp.pseudolink.fs70",
			{
				"txt": " Add application to left aside panel"
			},
			"</div>",
			"</div>",
			"<div class=\"tip\">Apps pinned in the left pane. Paste URL – and app is pinned.</div>"],
		"<div class=\"btd pb30 mt25\"></div>",
		["External sync",
			"<div class=\"w350 dib vat\">",
			"div#sync.w350",
			{
				"style": "min-height: 9px;"
			},
			"<div class=\"mt-10\">",
			"spn#btn-addsync.pseudolink.fs70",
			{
				"txt": " Add link to external CouchDB"
			},
			"</div>",
			"</div>",
			"<div class=\"tip\">External DBs to replicate to/from</div>"],
		["Force sync",
			"spn#btn-tosync.pseudolink.fs90.green.my-tags",
			{
				"txt": "One-time full replication"
			},
			"<div class=\"cw-busy ml20 w50 hide\"></div>",
			"<div class=\"tip fr\">Tries to make full sync, it can take time.</div>",
			"msg"],
		["Resync DB",
			"spn#btn-resync.pseudolink.fs85.o80.red.my-tags",
			{
				"txt": "Clear and resync DB"
			},
			"<div class=\"tip fr\">Deletes DB and resyncs it back. No rollback if DB isn’t synced.</div>",
			"msg"],
		"<div class=\"btd pb30 mt25\"></div>",
		["Compact",
			"spn#btn-compact.pseudolink.fs90.green",
			{
				"txt": "Start compaction"
			},
			"<div class=\"cw-busy ml20 w50 hide\"></div>",
			"<div class=\"tip fr\">Perfoms DB compaction, can fix replication issues.</div>",
			"msg"],
		["Delete DB",
			"spn#btn-delete.pseudolink.fs85.o80.red",
			{
				"txt": "Delete DB permanently"
			},
			"<div class=\"tip fr\">Deletes DB and all docs in it. No rollback if DB isn’t synced.</div>",
			"msg"],
		"</div>",
		"</div>",
		"<style>",
		".cw-Settings #xDbtitle{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}",
		".cw-Settings .tip {width:200px; font-size:72%; opacity:0.6;line-height:1.2em;display:inline-block;vertical-align:top;margin:-2px 0 0 30px}",
		".cw-Settings .my-error .tip {display:none}",
		".cw-Settings .my-error div.my-error-tip {display:inline-block;font-size:75%!important;margin-left:30px;vertical-align: top;}",
		"</style>"]
},	
{
	"id": "cw.Sys.Db.List",
	"init": function ($o, form) {


	var pi = $.Deferred(), 
			changes,
			fd = form.data,
			posts = fd.items, 
			acts = fd.actions,
			apps = fd.apps,
			types=fd.types,
			bytype=fd.bytype,
			that=this,
			$list, $start,$blist,
			sets = this.db.settings(),
			dbid=this.db.name;

	$o.formgen(that.HTML);

	$blist = $o.find("#brieflist");
	$start = $o.find("#start");
	
	// load docs info
	that.db.query("cloudwall/info", {descending:true})
	.then(
		function(res){
			(function(){pi.resolve();}).delay(1);	
			_rebuild(res);
			that.db.watch("").progress(function(docs){
				
				//console.log(docs)
				
				var i, keys=[], del=[];
				for (i=0;i<docs.length;i++) {
					if (docs[i]._deleted || docs[i]._hidden) {
						del.push(docs[i]._id);
					}
					else if (docs[i].type) {
						keys.push(docs[i]._id);
					}
				}
				if (keys.length) {
					that.db.query("cloudwall/info",{keys:keys})
					.then(function(res){
						_rebuild (res, del);
					});
				} else if (del.length) {
					_rebuild ({rows:[]}, del);
				}
			}.debounce(0));
			
		},
		function(e){
			pi.reject(e, "Error reading docs info.");
		}
	);
	

	// show/hide start menu
	$o.find("#btn-start").click(function(){
		$start.parent().slideToggle(150);
		$blist.toggleClass("o50");
	});

	
	$o.then(function(){
		
		// redraw on settings update
		
		var _r = function(){
			_rebuild();
		}.debounce(100);
		cw.event(function(e){
			if (/^(settings)/.test(e)) {
				$o.my("redraw");
			}
			else if (/^(app\smanifest)/.test(e)) _r();
		});
		
		// update on width changed
		that.app.watch.progress(function(msg){
			if (msg!="inactive" && msg!="close") $blist.trigger("check");
		}.debounce(100));
		
	});
	
	// search tags
	$o.on("click.my", ".btag", function(){
		var tag = $(this).data("search") || $(this).text();
		$o.find("#search").val(tag).blur();
	});

	pi.then(function(){tips.delay(1000)})

	return pi.promise();
	
	
	//----------------
	
	function _rebuild(res, del){
		that.Filter(res, del);
		$blist.trigger("recalc");
	}

	//----------------

	function tips (){
		var tips = {
			"tip-db.png":[".cw-pane-container", 106, -42],
			"tip-sync.png":[".cw-pane-container", 136, 46],
			"tip-start.png":["#cw-slots", 146,18],
			"tip-apps.png":["#cw-dock", -122, 44],
			"tip-profile.png":["#cw-upic", -195,2],
			"tip-wait.png":["#cw-slots", 312,84]
		}, $tips=[], x,y,ofs,$p;


		if (!that.app.local("tips")) {
			that.app.local("tips", Date.now());
			for (var i in tips) {
				$p=$(tips[i][0]);
				ofs = $p.offset();
				x = ofs.left+tips[i][1];
				y = ofs.top+tips[i][2];
				$tips.push($('<img src="i/'
										 +i+'" style="display:none;position:absolute;z-index:99;top:'+y+'px;left:'+x+'px;" '
										 +'class="cw-List-tips">'
										).appendTo($("body")));
			}
			(function(){
				$(".cw-List-tips").fadeIn(500, function(){
					$o.on("click.tips", function(){
						$(".cw-List-tips").fadeOut(500, function(){$(".cw-List-tips").remove()});
						$o.unbind(".tips");
					})
				}).on("click", function(){
					$(".cw-List-tips").fadeOut(500, function(){$(".cw-List-tips").remove()})
				});
			}).delay(20);
		}
	}
		
			},
	"Filter": function (dbres, del) {

	var i,j,r, a, obj, reg, tmp,
			that = this, 
			f=[];
	
	// Parse DB response
	if (dbres && dbres.rows) {
		tmp = {};
		for(i=0;i<dbres.rows.length;i++) {
			r = dbres.rows[i];
			
			if (r) {
				
			}
			
			obj = $.extend(!0,{id:r.id}, r.value);
			tmp[r.id] = obj;
		}
		$.extend(that.All, tmp);
		tmp=null;
	}
	
	if (del && del.length) {
		for (i=0;i<del.length;i++) delete that.All[del[i]];
	}
	
	for (i in that.All) {
		r = that.All[i];
		
		if (!Object.size(r.actions) || !r.pic.length) {
			tmp = that.GetActions(r.type);

			// Add icon
			if (!r.pic.length) {
				r.pic = tmp[0].app.ico || that.files["unknown.png"].url;
			}

			// Add actions
			r.actions = tmp[1];
		}
		
		// Index
		if (!r.index) {
			r.index = ([
				r.title,
				"="+r.type+(r.app?" =app":""),
				r.id,
				Date.create(r.stamp).format("{mon}{d}"),
				"@"+r.creator,
			])
			.add ( Object.keys(r.tags).map(function(e){return "#"+e}) )
			.compact(true)
			.join(" ")
		}
		
		// Add read mark
		r.read = that.db.isread(r.id);
	}
				
	a = Object.values(that.All);
	
	// Filter
	if (that.data.search.compact().length) {
		reg = that.data.reg;
		a = a.filter(function(e){return reg.test(e.index||"")})
	}
	
	// Sort
	a=a.sortBy(that.Sorters[that.data.sort]);
	
	// Stash it
	that.Show = a;
	
		
			},
	"GetActions": function (type, force) {

	var that = this,
			acts = that.data.actions,
			apps = that.data.apps,
			a,j,b, 
			cmds;
	if (!acts[type] || force) {
		acts[type] = that.db.actions(type);
		a = Object.values(acts[type]).unique();
		for (j=0;j<a.length;j++) {
			//cache apps
			if (!apps[a[j]] || force) b = cw.form(a[j][0], that.db.name);
			if (b) apps[a[j]] = b;
		}
	}
	cmds = acts[type];
	if (!cmds) cmds={};
	else return [apps[cmds.edit || cmds.view] || {app:{}}, cmds];
		
			},
	"Cmd": function (form, act, db, id, app) {


	// executes command over doc
	var url, doc=cw.ram(db,id), dblist;
	if (doc && act.to(1)==="_") {
		if (act.startsWith("_run") && doc) {
			url=db+"/"+doc.manifest.app.name+"/";
			url+=(act==="_runnew"?cw.lib.tourl64(["create",""]):"")
		} 
		else if (act==="_delete" && doc) {
			form.app.modal({
				manifest:"cw.Sys.Confirm",
				data:{
					text:" Delete doc?",
					css:"fi-x red",
					ok:"Delete"
				}
			}).always(function(r){
				if (Object.isObject(r) && r.cmd==="commit") {
					cw.db(db).del(id).then(
						function(){cw.note("Doc deleted","ok")},
						function(){cw.note("Fail to delete doc","error")}
					);
				}
			});
		} 
		else if (act==="_json" && doc) {
			url=db+"/Sys.JSON/"+cw.lib.tourl64(["edit",id]);
		}
		else if (act==="_hide" && doc) {
			form.app.modal({
				manifest:"cw.Sys.Confirm",
				data:{
					text:'<span class="fi-minus-circle orange"> Hide doc?</span>'
					+'<p class="fs90">You’ll never see this doc again, but it is not removed '
					+'from DB. Useful for shared DBs.</p>',
					ok:"Mark as hidden"
				}
			}).always(function(r){
				if (Object.isObject(r) && r.cmd==="commit") {
					cw.db(db).hide(id);
					cw.note("Doc hidden","ok");
				}
			});
		} 
		else if (act==="_export" && doc) {
			dblist = cw.dbs(); delete dblist[db];
			form.app.modal({
				manifest:Object.merge(
					form.db.form("cw.Sys.Confirm"),{
						ui:{
							"#dest":{
								init: function ($o) {
									var html="", list=dblist;
									Object.keys(list).forEach(function (e) {
										$o.append('<option value="'+e+'">'+list[e].escapeHTML()+'</option>');
									});
									$o.select2();
								},
								bind:"dest"
							}
						}
					}, true),
				data:{
					text:'<span class="fi-page-copy"> Select destination DB</span>'
					+'<p class="mt15 mb20 fs100"><select id="dest" class="w350">'
					//+'<option value="-">—</option>'
					+'</select></p>',
					ok:"Copy",
					dest:Object.keys(dblist)[0]
				}
			}).always(function(r){
				if (Object.isObject(r) && r.cmd==="commit") {
					cw.db(db)
					.get(id, {attachments:true})
					.then(function(doc){
						var pi=$.Deferred();
						// check if doc exists in dest DB
						cw.db(r.dest+"").get(doc._id, function(e, destdoc){
							if (!destdoc) {
								_save(true);
							} else {
								// confirm overwrite
								$.my.modal({
									manifest:"cw.Sys.Confirm",
									data:{
										text:'<span class="fi-alert o70 mr5 fs90"></span> Doc exists in destination DB. '
										+'Saving will overwrite existing doc.',
										ok:"Overwrite"
									}
								}).then(function(d){
									if (Object.isObject(d) && d.cmd==="commit") {
										doc._rev = destdoc._rev;
										_save(false);
									} 
									else pi.reject("Overwite cancelled");
								}).fail(function(){
									pi.reject("Overwite cancelled");
								});
							}
						});

						pi.then(function(doc){
							cw.note('Doc '+(doc.title||doc.name||doc._id).stripTags()+' copied to '+dblist[r.dest],"ok");
						})
						.fail(function(){
							cw.note("Copy failed","error");
						});

						return pi.promise();
						function _save(isnew){
							cw.db(r.dest+"")
							.save(Object.reject(doc,isnew?["_db","_rev"]:"_db"), true)
							.then(function(a,b){
								pi.resolve(a,b);
							})
							.fail(function(a,b){pi.reject(a,b)});
						};

					}, function(a,b){pi.reject("Failed reading file to copy")});
				}
			});
		} 
	} else if (app) {
		url=db+"/"+app.app.name+"/"+cw.lib.tourl64([act,id]);
	}
	if (url) _run(url);
	function _run(url) {form.app.run(url);}
		
			},
	"app": {
		"name": "List",
		"version": "2",
		"timeout": "15000",
		"title": "Doc List",
		"author": "ermouth",
		"ico": "data:image/jpeg;base64,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",
		"nodetitle": "title",
		"maskstate": {
			"mode": true,
			"search": true,
			"sort": true
		},
		"width": [795,
			1060,
			1325]
	},
	"params": {
		"delay": 50
	},
	"Show": [],
	"All": {
	},
	"data": {
		"search": "",
		"reg": "",
		"title": "List All DB Items",
		"mode": ["columns-brief"],
		"sort": ["Type"],
		"items": {
		},
		"actions": {
		},
		"apps": {
		},
		"types": {
		},
		"bytype": {
		},
		"start": []
	},
	"ui": {
		"#dbname": function (d) {

		var t = this.db.settings().title, html="", tail='</span>'; 
		d.title=t;
		if (t.length>18) html+='<span class="fs75 lh130">'+t.truncate(18,"right","")+'<span class="fs80 lh120">...</span>';
		else if (t.length>16) html+='<span class="fs75  lh130">'+t;
		else if (t.length>14) html+='<span class="fs80  lh130">'+t;
		else html=t, tail="";
		return html+'<span class="vam dib o40 blue fs60 lh110 pb4 pl5">▼</span>'+tail;
	
				},
		"#dbico": function (d) {

		return d.ico = (this.db.settings().ico || this.db.settings().pic);
	
				},
		"#start": {
			"init": function ($o, form) {

		var that=this;
		$o.list({
			data:[],
			chunk:100,
			delay:1,
			template:function(doc,idx){
				var html="";
				html+=
					'<div class="dib vat w120 mr10 mb10 tac hoverlink blue '
				+'fs80 lh120 cw-List-app" style="cursor:pointer" '
				+'data-app="'+doc.name+'">'
				+'<img src="'+doc.pic+'" class="w32">'
				+'<div class="tac">'
				+'<span class="pseudolink">'+doc.title+'</span>'
				+'</div>'
				+'</div>';
				return html;
			},
			hash: function (e) {return e.title+e.name+e.pic.length},
			id: function (e) {return e.id}
		});
		$o.on("click.my", ".cw-List-app", function(){
			$o.my("find","#btn-start").click();
			that.app.run(that.db.name+"/"+$(this).data("app"));
		});
		cw.event().progress(function(e){
			if (/^app/.test(e)) $o.trigger("check");
		});
	
					},
			"bind": function (d,v,$o) {

		var that=this;
		if (null!=v) {
			d.start = that.db.app().map(function(e){
				return e==="List"?null:that.db.app(e)
			}).compact().sortBy("title");
			$o.list("data", d.start);
		}
	
					}
		},
		"#sort": {
			"bind": "sort",
			"init": function ($o) {

			$o.tags({
				tags:[Object.keys(this.Sorters).slice(1)],
				empty:(function(t){
					var r={}, k=Object.keys(t.Sorters)[0];
					r[k]=k;
					return r;
				})(this)
			});
		
					}
		},
		"#mode": {
			"bind": "mode",
			"init": function ($o) {

			$o.tags({
				empty:{'<span class="fi-list-thumbnails pl2 pr2"></span>':"columns-brief"},
				tags:[[{'<span class="fi-results"></span>':"grid-medium"}]],
				groupshim:""
			});
		
					}
		},
		"#search": {
			"bind": function (d,v) {

			if (v!=null) {
				d.search=v.to(100);
				if (v.length>0) d.reg = new RegExp(
					"("
					+d.search.toLowerCase()
					.compact().split(/[\s,]/)
					.compact(true)
					.map(function(e){return RegExp.escape(e)})
					.join("|")+")","i"
				);
				return v;
			}
			return d.search;
		
					},
			"css": {
				"my-search": /^[^\s][^\s]+/
			}
		},
		"#xproxy": {
			"delay": 100,
			"bind": function (d,v,$o) {

			this.Filter();
		
					},
			"watch": "#filter,#search,#sort,#mode"
		},
		"#xstatus": {
			"delay": 100,
			"bind": function (d,v,$o) {

			if (!this.Show.length) return '<div class="p20 tac lh110 lgray">List is empty<br>— ※ —</div>';
			else return "";
		
					},
			"watch": "#xproxy,#brieflist"
		},
		"#brieflist": {
			"bind": "this.Show",
			"id": function (e) {

		return cw.lib.sdbm([
			e.id,
			e.rev,
			(new Date()).getDate(),
			e.read
		]);
	
					},
			"hash": function (e) {

		return cw.lib.sdbm([
			e.id,
			e.rev,
			(new Date()).getDate(),
			e.read
		]);
	
					},
			"init": function ($o, form) {

		var that =this,
				_act = that.Cmd.fill(that);
		
		// list trackers				
		$o.on("click.my", "#bimg,#btxt", function (){
			var $p=$(this).my().root,
					data = $p.my("data"),
					id = data.id, 
					db = that.db.name,
					act = $(this).data("action")||"_more",
					url, 
					app,
					appid,
					acts = form.data.actions,
					apps = form.data.apps;
			
			if (act==="_more") {
				that.app.modal({
					manifest:"cw.Sys.Db.DocInfo", 
					width:700,
					data:{db:that.db, id:id}, 
					esc:true
				}).always(function(a) {
					var act;
					if (Object.isObject(a) && a.cmd) {
						act=a.cmd;
						app = $o.my().data.apps[((acts[data.type]||{})[act]||[])[0]];
						_act( act, db, id, app);
					}
				});
			}
			else {
				appid = ((acts[data.type]||{})[act]||[])[0];
				app = apps[appid];
				_act(act, db, id, app);	
			}
		});
		
	
					},
			"list": "<div class=\"bitem hoverlink gray\"><img id=\"bimg\"/><div id=\"binfo\"><span id=\"bpicto\"></span><span id=\"btxt\" class=\"pseudolink\"></span><div id=\"btype\" class=\"baux gray o70 pt2\"></div><div id=\"btags\" class=\"baux gray o70\"></div></div></div>",
			"manifest": "this.ItemBrief",
			"watch": "#xproxy",
			"css": {
				"xcol5": function (d,v,$o) {
						var w = $o.width(); return (w>=1099); 
						},
				"xcol4": function (d,v,$o) {
						var w = $o.width(); return (w>900 && w<1110); 
						},
				"xcol3": function (d,v,$o) {
						var w = $o.width(); return (w<=900); 
						},
				"columns-brief": function (d) {
						return d.mode == "columns-brief" 
						},
				"grid-medium": function (d) {
						return d.mode == "grid-medium" 
						}
			}
		},
		"#btn-settings": {
			"bind": function (d,v) {

			if (v!=null) {
				this.app.run(this.db.name+"/DBSettings");
			}
		
					},
			"events": "click.my"
		}
	},
	"ItemBrief": {
		"id": "cw.Sys.Db.List2.ItemBrief",
		"ui": {
			"#bpicto": function (d) {

			var css="";
			if (d.crypto) {
				css="fi-key "+(cw.crypto.keys().findIndex(function(e){return e.id==d.crypto})>-1?"green":"red");
			}
			//else if (d.type == "user") css="fi-torso fs90 o70";
			if (css) return '<span class="'+css+'"></span> ';
		
					},
			"#btype": function (d) {

			var css="", h=[], 
					t = d.type.capitalize();
			
			if (d.app) t = "App";
			if (t==="Manifest") css="fi-widget";
			else if (t==="App") css="fi-layout";
			else if (t==="User") css="fi-torso";
			h.push((css?'<span class="mr5 '+css+'"></span>':'')
						 +'<span class="pseudolink btag" data-search="='+t+'">'+t+'</span>');
			
			if (d.stamp) h.push(
				'<span class="pseudolink btag" data-search="'
				+Date.create(d.stamp).format("{mon}{d}")
				+'">'+cw.lib.date(+d.stamp, "short")
				+'</span>'
			);
			
			if (d.files.length) h.push('<span class="fi-paperclip"></span> '+d.files.length);
			
			return h.length?h.join(" · "):"";
		
					},
			"#bimg": {
				"bind": "pic",
				"css": {
					"bapp": function (d) {
							return !!d.app
							}
				}
			},
			"#btxt": {
				"bind": function (d, v, $o) {

				var css = "", cmd="";
				if (d.app) {
					css+="fs110 lh120 bold ";
					cmd="_run";
				}
				else if (d.actions && d.actions.edit) {
					cmd="edit";
				}
				
				if (!d.app && d.title.length>30 && Object.size(d.actions)) css+="lh130 fs95 ";
				
				if (cmd) $o.data("action", cmd);
				return '<span class="'+css+'">'+d.title+'</span>';
			
						},
				"css": {
					"fs90": function (d) {
							return d.type!="user" && !Object.size(d.actions)
							}
				}
			},
			"#binfo": {
				"css": {
					"blue": function (d) {
							return d.read && !d.read.rev.startsWith(d.rev);
							},
					"skyblue": function (d) {
							return !d.read && d.type!="user" && Object.size(d.actions)
							},
					"o90 trim lh110": function (d) {
							return !Object.size(d.actions)
							}
				}
			},
			"#btags": {
				"bind": function (d) {

				var h="", t = Object.keys(d.tags);
				if (t.length) {
					h = '<b class="lgray">#</b>'
						+t.map(function(e){
							return '<i class="pseudolink btag ml4 mr1" data-search="#'+e+'">'+e+'</i>';
						}).to(6).join(", ");
				}
				return h;
			
						},
				"css": {
					"hide": function (d) {
							return !Object.size(d.tags)
							}
				}
			}
		}
	},
	"Sorters": {
		"Type": function (e) {

		var t="";
		if (e.type==="manifest" && e.app) t="0|"+e.title;
		else if (e.type==="user") t="￣0|"+e.title;
		else if (!Object.size(e.actions)) t="￣1|"+e.type+"|"+e.title;
		else t="1|"+e.type+"|"+e.title;
		return t;
	
				},
		"AZ": function (e) {

		return e.title;
	
				},
		"Modified": function (e) {

		return 1e16-e.stamp;
	
				}
	},
	"style": {
		" .bitem": "transition:width 0.1s, padding:0.1s, margin:0.1s;width:245px;display:inline-block;vertical-align:top;",
		" #bimg": "transition:width 0.1s, height 0.1s, margin 0.1s;margin-right:10px;display:inline-block;vertical-align:top;border-radius:3px;cursor:help;cursor:context-menu;",
		" #binfo": "transition:width 0.1s, font-size 0.1s;display:inline-block;vertical-align:top;font-size:90%;line-height:1.2em;",
		" .baux": "transition:height 0.1s, opacity 0.1s; overflow:hidden; font-size:80%; padding-top: 0.1em;",
		" .pseudolink.btag": "border-bottom-style: dotted!important;",
		" .trim": "white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis",
		" .cw-List-nav .dbname": "margin:-4px 8px 0 10px;white-space:nowrap;width:220px;overflow:hidden;text-overflow:ellipsis",
		" .xcol5": "overflow-y: visible!important;clear: both;height: auto!important;-webkit-column-count: 5!important;-webkit-column-gap: 25px; column-count: 5!important; column-gap: 25px;-moz-column-count: 5!important;-moz-column-gap: 25px;",
		" .xcol4": "overflow-y: visible!important;clear: both;height: auto!important;-webkit-column-count: 4!important;-webkit-column-gap: 25px; column-count: 4!important; column-gap: 25px;-moz-column-count: 4!important;-moz-column-gap: 25px;",
		" .xcol3": "overflow-y: visible!important;clear: both;height: auto!important;-webkit-column-count: 3!important;-webkit-column-gap: 25px; column-count: 3!important; column-gap: 25px;-moz-column-count: 3!important;-moz-column-gap: 25px;",
		" .columns-brief": {
			" .bitem": "padding:3px 0 5px 0;",
			" #bimg": "width:20px;height:20px;border-radius:2px;",
			" #binfo": "width:215px;font-size:85%;",
			" .baux": "display:none;opacity:0;"
		},
		" .grid-medium": {
			" .bitem": "padding:9px 0 11px 0;",
			" #bimg": "width:25px;height:25px;border-radius:3px;margin:2px 18px 0 7px;",
			" #bimg.bapp": "width:38px;height:38px;border-radius:3px;margin:3px 12px 0 0;",
			" #binfo": "width:195px;font-size:90%;",
			" .baux": "display:block;opacity:1;"
		}
	},
	"HTML": ["<div id=\"nav\" class=\"cw-List-nav fs90 pb20 mb15 bbs\">",
		"<div id=\"xsearch\" class=\"fr ha w170 mr-2\">",
		"<input type=\"text\" id=\"search\" class=\"ui-search w170 ml0 mr0 mt0 small\">",
		"<img src=\"//s3-eu-west-1.amazonaws.com/cdn.cloudwall.me/0.9/ico/cross-small-gray.png\" class=\"ui-search-clear\" onclick=\"$(this).siblings('input:eq(0)').val('').blur()\">",
		"</div>",
		"<div class=\"hoverlink dib vat w275\" id=\"btn-start\" style=\"cursor:pointer\" title=\"Show/hide DB apps list\">",
		"<img src=\"\" id=\"dbico\" class=\"br4 vat dib mt-2\" style=\"width:32px;height:32px;image-rendering:pixelated;image-rendering:-webkit-optimize-contrast;\"/>",
		"<h2 class=\"dbname dib vat fs150 lh130 blue\"><span id=\"dbname\" class=\"pseudolink\"></span></h2>",
		"</div>",
		{
			"label": "65px",
			"row": "265px",
			"labelCss": "fs90 lh110 gray",
			"rowCss": "my-row dib vat mt2"
		},
		["",
			"spn#mode.fs100.mr15",
			" <span class=\"fi-shuffle fs90 gray\">&nbsp;</span>",
			"spn#sort.fs95"],
		"<span class=\"dib w150 vat fi-wrench mt2 gray ml5 hide\"> <span class=\"pseudolink\" id=\"btn-settings\">Settings</span></span>",
		"</div>",
		"<div id=\"xstart\" style=\"display:none\"><div id=\"start\" class=\"pb5 mb15 bbs\" style=\"width:100%\"></div></div>",
		"<section id=\"brieflist\" class=\"mt10 dib vat cw-List-col\" style=\"width:100%\"></section>",
		"<div id=\"xproxy\" class=\"hide\"></div>",
		"<div id=\"xstatus\"></div>"],
	"views": {
		"info": {
			"map": function (doc) {

			var i, stamp=0,
					type = doc.type,
					tags = {}, mantype = "", 
					obj, att, atts=[];
			if (typeof type === "string" && type) {
				stamp = doc.stamp || doc.created || stamp;
				if (typeof doc.tags === "object") {
					if (typeof doc.tags.slice === "function") {
						for (i=0;i<doc.tags.length; i++) tags[doc.tags[i]] = 1;
					} else {
						for (i in doc.tags) tags[i] = 1;
					}
				}
				if (doc.type ==="manifest"  && doc.manifest && doc.manifest.app && doc.manifest.app.name) {
					mantype = typeof doc.manifest.app.types ==="object"?"editor":"app";
				}
				obj = {
					rev: +doc._rev.split("-")[0],
					type: type,
					app: mantype,
					crypto: doc.crypto || "",
					title: doc.title || doc.name || (type.substr(0,1).toUpperCase +type.substr(1) +", ID "+doc._id),
					stamp: stamp,
					tags: tags,
					creator: doc.creator || "",
					pic: (typeof doc.pic === "string" && doc.pic.length<20*1024 && doc.pic.substr(0,10)==="data:image")?doc.pic:"",
					owners: doc.owners ||[],
					acl: doc.acl ||[],
					parent:doc.parent || "",
					files:[]
				};
				if (doc._attachments) {
					for (i in doc._attachments) {
						att = doc._attachments[i];
						atts.push([i, att.content_type, att.length||att.size||0, att.revpos]);
					}
					obj.files = atts;
				};
				emit (doc._id, obj);
			}
		
					}
		}
	},
	"files": {
		"unknown.png": {
			"content_type": "image/png",
			"digest": "md5-M6nwyK6OobaFbftCi9/raQ==",
			"data": "iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRF////tre99fX219fa5eboy8zPIEyigwAAAL5JREFUeNqM1VEOxCAIBFAd4P5X3trdbgQGy3w2L1M12I6xBSGjiMwQq1ysMOs5LpljkrssKxdl7bw8uV0Gl476kc5BbEU0S+fUnkiU4M7MdV4I021/vVUlVSaI7+Lu5iPcliANeG9d36GmJXJIHIVIZ1NAJY5CMTLXVSM6cIii1UhDIZqN6O46DcT4zWJ8SiCmkKu7JkKZy53hbv1d9THK7iidO8jgSplcIYmjkjoiC3fJ+LGX8igOv4+PAAMAOM0EMf5JMSUAAAAASUVORK5CYII="
		}
	}
},
{
	"id": "cw.Sys.Db.Ddocs",
	"init": function ($o, form) {

		var that = this,
				pi = $.Deferred(),
				db = cw.db(that.db?that.db.name:'cw');
		
		$o.formgen(that.HTML);
		that.dbname = db.name;
		form.data.dbname = db.name+', ddocs'; 
		
		db.allDocs({startkey:'_design/',endkey:'_design0',include_docs:true})
		.then(function(res){
			form.data.ddocs = res.rows;
			pi.resolve();
		});
		
		$o.on("click.my", ".ddoc", function(){
			var id = $(this).text();
			db.load([id]).then(function(a){
				cw.state.set(db.name+"/Sys.JSON/"+cw.lib.tourl64(["edit",id]));
			});
		})
		
		return pi.promise();
	
		},
	"app": {
		"name": "Sys.Db.Ddocs",
		"version": "2",
		"timeout": "3000",
		"title": "Ddoc List",
		"author": "ermouth",
		"ico": "data:image/jpeg;base64,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",
		"maskstate": "",
		"nodetitle": "dbname",
		"width": [1000]
	},
	"data": {
		"ddocs": []
	},
	"ui": {
		"#dbname": "this.dbname",
		"#dlist": {
			"bind": "ddocs",
			"list": "<div class=\"ddoc dib vat hoverlink w200 pr20 pt5 pb5 blue\"><span class=\"pseudolink ddocname\"></span></div>",
			"manifest": {
				"ui": {
					".ddocname": "id"
				}
			}
		}
	},
	"HTML": ["<h3>Ddocs in <i id=\"dbname\"></i> DB</h3>",
		"<div id=\"dlist\"></div>"]
},
	
{
	"id": "cw.Sys.Side",
	" ": " ",
	"init": function ($o, form) {

	var d = form.data;
	$o.formgen(this.HTML);

	var icos = {};

	$o.on("update.cw", function(){
		var a=[], slot, st=cw.crypto.dblist(), dbc, n, nurl,
				state = cw.state.get()||{},
				url=state.initurl||"",
				surl=state.url||"",
				sdbm, ico, sync;

		for (var j=0; j<st.length;j++) {
			if (st[j]!=='cw') {
				dbc=cw.db(st[j]).settings()//st.dbs[j];
				//push default
				n=dbc.name;
				nurl = n+"/"+dbc.start;

				var ico = dbc.ico;
				var sync = cw.db(n).sync(), 
						syncstate=0,
						vals = Object.values(sync),
						times = vals.map(function(e){return Object.isNumber(e)?e:null}).compact(true);

				if (Object.size(sync)>0) {
					syncstate = 1;
					if (Object.size(sync)!=vals.compact(true).length) syncstate = 2;
					if (times.length) syncstate = times.min();
				}


				a.push({
					url:nurl,
					active:!!(nurl===url || nurl===surl),
					ico:dbc.ico,
					title:dbc.title,
					bubble:"",
					bubbleCss:"",
					shift:false,
					sync:syncstate
				});

				for (var i in dbc.apps) {
					slot=dbc.apps[i];
					nurl = n+"/"+slot.url;
					if (cw.form(nurl,n)) a.push({
						url:nurl,
						active:!!(nurl===url || nurl===surl),
						ico:cw.form(nurl,n).app.ico||"",
						title:slot.title,
						bubble:"",
						bubbleCss:"",
						shift:true
					});
					//a=a.sortBy(function(e){return e.born*1}, true);
				}
			}
		}

		//$o.my("data",{list:a})
		d.list=a;
		$o.find("#list").trigger("recalc");
		//console.log(a.length)
	}.debounce(105));
	$o.on("click","span#appname", function(){	
		var url=$(this).data("url");
		cw.state.set(url);
	});
		
		},
	"params": {
		"delay": 50
	},
	"data": {
		"title": "",
		"list": [],
		"collapsed": {
		}
	},
	"ui": {
		"#list": {
			"bind": "list",
			"check": true,
			"list": "<div class=\"hoverlink blue cw-dock-item\"></div>",
			"manifest": "List"
		},
		"#sidelogo": {
			"bind": function (d,v,$o) {

				if (v!=null) {
					cw.lib.note("Here must be introducing app, not yet implemented.")
				}
			
				},
			"events": "click.my"
		},
		"#btn-update": {
			"bind": function (d,v) {

		if (null!=v) {
			var pi=$.Deferred(),  
					url = (cw.CW.updateURL||"/x/")+"snapshot";
			$.my.modal(
				'<div class=" pt20 pb15 w350 tac blue">'
				+'Loading updates...'
				+'<br><div class="cw-busy w90 mt10"></div>'
				+'</div>'
				,function(){},300);


			var db = cw.db("cw");

			// Read app list	
			$.ajax({ url:"sys/apps.json", type:"GET", dataType:"json", cache:false })
			.then(function(a){
				var b, i, j, o, news = {}, olds, del={};
				if (!Object.isArray(a) || !a.length) {
					$.my.modal();
					cw.lib.note("Oops, server responded with error. Please retry in 5-10 minutes.", "error", 5000);
					console.log(a);
				}
				else {
					b = Object.clone(a, !0)
					for (var i=0;i<b.length;i++) {
						o=b[i];
						
						if (Object.isString(o)) {
							// Wire deletion
							del[o]=true;
						} 
						else {
							o.srcrev = o._rev;
							delete o._rev;
							if (o._attachments) for (j in o._attachments) {
								o._attachments[j] = Object.select(o._attachments[j],["content_type","data"]);
							}
							news[o._id] = o;
						}
					}

					db.allDocs({keys:Object.keys(news).add(Object.keys(del)), include_docs:true})
					.then(
						function(res) {
							var i, o, b;

							// Compare
							for (i=0;i<res.rows.length;i++) {
								o=res.rows[i].doc;
								if (o && news[o._id]){
									if (news[o._id].srcrev==o.srcrev) delete news[o._id];
									else news[o._id]._rev = o._rev;
								} 
								else if (o && del[o._id]){
									news[o._id]={_id:o._id, _rev:o._rev, _deleted:true, name:o.name}
								}
							}

							if (!Object.size(news)) pi.resolve("All system apps are up to date.","ok");
							else {
								b = Object.values(news);
								$.my.modal(true);
								$.my.modal({
									manifest:Object.merge(
										$.my.cache("cw.Sys.Confirm"),{
											ui:{
												"input[name=apps]":"apps"
											}
										}, true),
									data:{
										text:'<p class="xgray">Select apps and docs to update</p>'
										+b.map(function(e){
											return '<div class="fs90 pb3"><label>'
											+'<input type="checkbox" class="mr5 w15" value="'
											+e._id+'" name="apps"/> '
											+'<span class="'+(e._deleted?'tdl':'')+'">'
											+e.name
											+'</span></label></div>';	
										}).join(""),
										apps:b.map(function(e){return e._id}),
										ok:"Update"
									},
									esc:true
								})
								.always(function(res){
									if (Object.isObject(res) && res.apps.length) {
										var list = cw.lib.a2o(res.apps),
												fin = [];
										for(var i=0; i<b.length; i++) {
											if (list[b[i]._id]) fin.push(b[i]);	
										}
										db.bulkDocs({docs:fin}, function(e,res){
											if(e) {
												console.log(e, fin)
												pi.reject("Failed to write documents to local DB.");
											}
											else {
												pi.resolve("Succesfully updated "+fin.length+" doc"+(fin.length>1?"s":"")+".");
											}
										});
									} else {
										console.log(res);
										pi.reject("Update cancelled.")	
									}
								});


							}

						},
						//err
						function(err) {
							pi.reject("Error fetching new docs. Retry later.");
						}
					);
				}
			})
			.fail(function(a,b){
				$.my.modal();
				cw.lib.note("Failed reading system apps set. Please, try again in several seconds.", "error", 5000)
				console.log(a,b);
			});

			pi.then(function(a){
				$.my.modal();
				cw.lib.note(a,"ok",5000);
			}).fail(function(a){
				$.my.modal();
				cw.lib.note(a,"error", 3000);
			});


		}
	
				},
			"events": "click.my"
		},
		"#btn-newdb": {
			"bind": function (d,v,$o) {

		var that=this;
		if (v!=null) $.my.modal({
			manifest:Object.merge(
				cw.form("cw.Sys.Confirm"),{
					ui:{
						"#name":{
							bind:function (d,v) {
								if (v!=null) {
									d.name=v.compact();
								}
								return d.name;
							},
							check:function (d,v){
								if (v.length<2) return "2+ latins and nums";
								if (/^http[s]?:\/\//.test(v)) {
									//check url
									if (v.has("•")) return "Impossible password in URL";
									if (!/^http[s]?:\/\/([^\/]{2,100}\/){1,5}[a-z0-9_$\(\)+\-]{1,200}[\/]?$/.test(v))
										return "Invalid CouchDB URL";
								} else {
									if (!/^[a-z0-9\s\-]{2,30}$/i.test(v)) return "2-30 latins and nums";
									else if (d.dbs.indexOf(v.replace(/\s/g,'-').toLowerCase())!==-1) return "This name already exist";
								}
								return "";
							}
						},
						"#btn-ok":{
							bind: function(d,v,$o){
								if (v!=null) {
									if ($o.my().root.my("valid")) $o.trigger("commit");
									else cw.note("Correct name fist!","error");
								}
							}
						},
						'#syncdir':{
							bind:"dir",
							init: function($o){
								$o.tags({tags:[{"From":"from"},{"To":"to"}]});
							}
						},
						'#interval':"interval",
						'#sync':{
							watch:'#name',
							css:{
								hide: function(d,v,$o){ return !/^http[s]?:\/\/.+/.test(d.name) || $o.my("errors")['#name'] }
							}
						}
					}
				}, true),
			data:{
				text:([
					'<span class="fi-list gray fs90"></span> New DB title or URL ',
					'<div class="mt10 mb10">',
					'<textarea id="name" class="w350 fs110 lh120" style="word-wrap:break-all;" placeholder="Latins and nums"></textarea>',
						'<div class="my-error-tip"></div>',
					'</div>',
					'<section id="sync" class="hide mt-5">',
						$.my.formgen([['','spn#syncdir.dib.mt1.vat.fs80',
						'<div class="w250 dib vat">',
						'<span class="fs80 gray ml2"> in </span>',
						'num#interval.fs80.w70.pt2.pb2',{min:0, max:7220},
						'<span class="fs80 gray"> minute intervals</span>']]),
					'</section>'
				]).join(""),
				ok:"Create DB",
				name:"",
				dir:["from"],
				interval:"5",
				dbs:Object.keys(cw.dbs()).map(function(e){return e.toLowerCase()})
			}
		}).then(function(res){
			var s, name;
			if (Object.isObject(res)) {

				if (/^http[s]?:\/\//.test(res.name)){
					//url
					name = res.name.split("/").compact(true).last();
					s = cw.lib.fuse({}, that.DB, {
						title:name.to(50).capitalize(), 
						name:rename(name), 
						stamp:Date.now(), 
						creator:cw.me(),
						sync:[{
							url:res.name,
							dir:res.dir.slice(0),
							interval:res.interval
						}]
					});
				}
				else if (false) {
					//share code

				} 
				else {

					s = cw.lib.fuse({}, that.DB, {
						title:res.name.to(50), 
						name:rename(res.name), 
						stamp:Date.now(), 
						creator:cw.me()
					});
				}
				console.log(s);
				if (s) cw.db("cw").settings(s)
				.then(function(){
					cw.note("DB created","ok");
				})
				.fail(function(msg){
					cw.note("DB creation failed during settings update. "+msg,"error");
				})
					}

			function rename(newname) {
				var name = newname;
				if ( name.replace(/[^a-z0-9\-]/ig,"").to(30) !== name ) {
					name = name.replace(/[^a-z0-9]/ig,"-").to(30);
					if (name.length<2 || cw.dbs()[name]) name = cw.lib.hash8(name+Number.random(1e12));
				}
				return name;
			}
		});
	
				},
			"events": "click.my"
		},
		"#btn-sysdb": {
			"bind": function (d,v,$o) {

		if(v!=null) {
			$("#cw-header").slideDown(200);
			cw.state.set("cw/List");
		}
	
				},
			"events": "click.my"
		}
	},
	"List": {
		"init": function ($o, form) {

			$o.html('<div id="cont" class="xgray ov '
				+(form.data.shift?"pl25":"")
				+'" style="white-space:nowrap;"'
				+'><img id="ico" class="w16 h16 mt3 mb-3 '+(form.data.shift?"mr0":"mr5")+'" src=""/>'
				+'<div class="'+(form.data.shift?"w130":"w150")+' oh dib vat pl5" '
					+'style="text-overflow:ellipsis;white-space:nowrap;">'
					+(form.data.sync===2?'<span class="fr pt8 salmon pl3 fs90 lh90 fi-minus-circle" title="Replication failed"></span>':"")
					+(form.data.sync===1?'<span class="fr pt8 green pl3 fs90 lh90 fi-flag" title="Replication started"></span>':"")
					+(form.data.sync>3?'<span class="fr pt8 sky pl3 fs90 lh90 fi-clock" '
							+'title="Replication sheduled to '
							+cw.lib.date(form.data.sync,"tiny")+'"></span>':""
					)
					+'<span id="appname" class="pseudolink" data-url="'
					+form.data.url+'"></span>'
				+'</div>'
				+'<span id="bubble"class="hide oh fs80" style="max-width:25px;position:absolute;top:0;right:0;"></span>'
				+'</div>'
			);
		
			},
		"data": {
		},
		"ui": {
			"#appname": "title",
			"#ico": "ico",
			"#cont": {
				"bind": function () {

					},
				"css": {
					"blue": function (d) {
						return d.active
						},
					"xgray o50": function (d) {
						return !d.active
						}
				}
			},
			"#bubble": {
				"bind": function (d,v,$o) {

					
				
					}
			}
		}
	},
	"style": {
		" .green": "color:#BEEA00!important",
		" #sidelogo": "cursor:pointer;",
		" #sidelogo img": "width:180px; opacity:0.8; transition:opacity 0.3s; display:block;",
		" #sidelogo:hover img": "opacity:1;"
	},
	"DB": {
		"ico": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABMpJREFUeNrsWU1oG1cQHoWndlWksoI1rEACGVSQWsV2wAEbkpC4bUhTVGhoc3GLDz34UHLN3efSY2kg+JASX0JTigI+tNQOpCWGBKK2KhHUJaIVREVLd4k2eEEPnJmVLK1Wq5/VjysHjVi93ff/vTfzzbxdz/7+PrwMcgxeEpkAmQCZAOksjP48Hk9Plde/24oKDF5z0fvz5YtLf+PdyKjxgHU9dNMNyI30D9OMCd/j7UwfY/3GDX5p5dLSX6ME0lW1NjY2X2eMbfYJgmSGCXD7y1u3fCNXrQ7igaD/JqZxAr+YjHkkUey5c0XT4H52l4aZlf3Sdbz5ZFRAWlSrZgdvIkQvPr6Nk7hC+cdjUTj+RsT1AI8eP4HH+UL1gfMvsN9fBpjvM02HB59fXtLb2sh6Oh0QmLiOeR/bW0dkCU6fSPQ9+vaD3+Gpog1r8cu4IFeXP1i65mgjCOKmE4igX4CFZGKgkU/NxSGA/QxJAsDY1xvprY9aVOubO9szaNC/UkYiGoZkLAxer3fsfEW5vAc/Z7Kg6obJhssXz8w27QiCmKWUpn4iMT2WIMytCPggjrZak+Ta2toxm2fnr/TEYePgwZklKkkk2CTWGutYaxCpVCpQRGqlS9GI3jn4/X6QJdG8Aj7f+AMpqWXI5HahhCC4NR8BPSkUTeqei8cgEppqAm4Sy5AJpW8gKlLhw2zOnHTbOkiT9zI5eA8BYeAImd08GJjST8Jdi4blJpD/C5B8sQii6DevXsTgpHICXo28Au6kbhgQC0dg0A3qC0h5bw9kW/AoYICG/gj0qrNqEo4gqDwqyw50ykwHVqn5sUMFks3lG4FgTU4mYyDicv+4k3Hn5HCXLpyaR5UzYCoYPFwgxE60ys2r3lAha6fcMgh3GLBSa1coKocLZA/VqoyrxzvU4R2eeZvausEPx0ZIhwtPS6DhbiSirbouodELggB4+HI9BbITEVWspKqYBvsyfNarcZMOh9HBMcdVrakV1hEdTpBEtaRyxFBOQs6UnCjtCueqmReaCg4fSBb5/898ET48uwDbD7OglXVXg6TOLVSPvY9yvU3KyyCFBODGx3QFQp6YQFiptNnOeZuubGbOwdaufXsagxZvqEDIE5PKMIHVh+UW5WpMldefeT3lNgvnLWrZrj1FDG58S1cgBGBxLtm4T8Y7WImziDUieHdxruc2VN+NzXcN431IIVItDNmtqxhrueg1UViSHMsKRQ00XXcsownH8HhNqTVfdHnG75l+7+NZWVF1cNAfMz13MmmCuXNvx9lsuG3UWjsx4IdPL5yF7R3qXzPz5KAIKSSWoR+siApT7yxANCJXbYRDS2r18Bws5dyWZ29Xaba7aEhGEPPo5QOj2ZEQhg9Ev0VFMX2CYfPEBw4xdXretScTWJVuia1kWTLVeaQhis/nhelIqGMdtytZfwnoG+xcMnn5MK5Ajs43aotpyqq63wQEy/49OBvQWXycRWm8I1BXV1crzcZe4ndhChR8lO7iCS+MzMHG8K0jRcf/FBXaBQ8u/7fWsvpnhRubW+/j3G8jmFePgH79Yej8zGeXz//n+A1xI71FH3iuIJi3sPIYvslmz9DZ/MRV/tXKyvnnpnFbgUzodwJkAmQC5MjICwEGAN+u7O9LPns7AAAAAElFTkSuQmCC",
		"pic": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAC0BJREFUeNrsXW9oI2kZf7r3RiZeCsldCi220HottJBqCjntYg92S3e9W7jaLux+sB/O8zjFLyJ36KGI53L6QQ/97IKL9rTsWeG8q9hdd4/2dAtbaGELLddiAw000kCDiTaQkbxefZ9J0s4mM0km08yf5PlBMpOZeTPvPM/vfZ7n/Tttx8fHQGhdnCMREAEIRAACEYBABCAQAQhEAAIRgEAEIBABCEQAAhGAQAQgEAEIRABCM4JpHWxra2voTW/N33tKktgznMHTjEObxU/8CXD4V0JObr1+/Xq2VRStN+6jTetEowgwt7A0JhTwpti9KDTxhL0i4f8VX3/iMrz50tXxfxABGkyAucW//1Rsvo9/7zDZCCvAvz5zZfzdViSAJTGAKPlvic0PHKh8hFdYo7nZxaXnWzEGaLgFEIK9zoD9wfmi4P+UZQi9cnU8TRbgrJS/sPQ5ofzfuCQe/owITN9xqJVynwWYfW/paSaxNbHbp2l3GQO/32fLQyeTacjpW4Ifi3jgBgWBJnBtfv6JKV/wrihVE1rn2yUGE2MR8Ho8tgjj4DAFy+tburISJJgWJPiAXECdmPJ1/lxP+ajysUjINuUjujoCMNTbqWsVxef3InYJtYILOHMCiIh/Rmxe0zs/Gh6EQHu77Q8+MjQAHbouiPlE7PIBujGKAUpw48aNc70j5z/PGBO+nT0JnJ9ezMRvgF/kq1blGOrtFoLvc04DQC4Hd1fWIStzvUseiOf7tXPjVqVV89/CZe3MTF7ebWgMIErDM0yCN8Rdp8TPDsNmN+iHi88OO06GqdQRfLi6USEodAt4VJDhXWDyL2euXEmdGQGUgE4K/kSU7tcLLtww2iUJnh8Lg8dGv18JeweH8HBjp1msekpYre/MTI6/Y5oANxcWPu1jvvdEqf9yvbnxMICJ0Yjw+15HS+3R9h5sx+LN49w5f1uQ4HtmagFtPub/rRnlK0FfaNDxys8HhX3QI9xU04Cx74qA/LW6awFzi0uvogcwk4fh/m7o6epwjcxGw8MQ8EnNRIK3ZxfujVSOIzUwO3sPo3nd1jD05EFRWiTGdP9YEn5/eKDPVfLCEOVCJAQb0ZhLzDxARpbhMJ3RLeCMST8T28uGCMA62LT41mwpQTMZEXV5r0MDOrPwer1wfnjIXVHf0RGsiiA2lZG1Tl+aXVjqF9uoERcwpXUQG06eE1W5ZlW+W4ENaxciYaV/RdsTwFcMxgDsC1pHQ/29JG3HWi4P9Os2b2vrs5IF0PynoD9AknYwgn7dWkynUQJ49IIkgpODfr2gnH/KcDWQ0BogAhABCEQAAhGAQAQgEAEIRACXIZfLj+XB72w2B0fZ7GPHivsEnbYDNys9lkhCXHzS6QxkeXlHiFeSIOjzKT2Xvd2d4mE91JjlZgKg3jNyFjZ2onCQTOYPctWTcNUTif1sRoZ9WXwESR5tRSHg90F4sB+CHQEgHriMAFjqsctzL5HUvoA/vi3yAb+K+9hvfn91AwLCKuDcBF+7t+WJcM4NpR5n8rz/4aq+8ivwoXQfkcpk4M8frUJ0bx9yZAGcjUTysNI0LlNYE24BR9SEhwY0LQFaHRzJjMEl53lTggLDQSNKHCLOeYgAjSv5scRBw4drb0fjSqDY19N1onTU9U4srgSYaC200O6ToDsYVPrgfe3triWCYwmwE9uHRztRlRnnIrOsitnXv6bSuXVhCYoEwBJ/++5y1fRHIsDczsSVoeQYXEYwuPQHXFfLOOfM0p+DzWhMETpXcVX5zU+P5ff5iYKK/l4x14VjtabP6ZCmlvQpEVzeWV2HlY1NsgBnASyRXRaP0VcX3J7OYN3/s7y26cgpcK4hAPr+SKjf+vsWSIDbsfCgaQvmlgDRcQTI+1D7ROc5zQRVA+1A6sjY2o3qaWdYXZM5t/0Z3DAVzpEE2Nzdg4dbUUNpLkVCJxE8Vt3WdqKGBcBNCrA0/Uh/Lzw7PFAg9JEjFsRwfC0A/Wa8WjOvsVOOSC/L3NGtjY4hANa/D5LpYv2q8CnsQ8lW/dFSh9H0WteaSa8mgDgW2z8gAtRiAXiZUnm5YquWVoPpeaVrzKbPYycad+y4BMcQoJ7gjddjzk1cX2/6k65rCgIr+0puIChjJhXDdK5lDUiPv9OZDHQEAmQB9CBJzFCp4iZLZWPTl59NJNNkATR9f+Erehbr83AHSphzpza52JervNJzykoc2B2bOSqM5yu2xXpUF1Y7xjX+3Eh6dWzmOaP0Gg9cnLdZHGPQ0gSQs1nIZGSlPx0/ZoDLvhaBffPdnUHbhVp0ZwhspJq+lF93CEc24Tmfg/oJbCFAu9erfM4aSoubAxvd1CRtWRegrgYXLWAOdEymDbA1Tx77ur+YNcrPQSyehLioD+MiBqOhfsUP4kMvO2QQRbEP3448oVuIDA7Z0glpCQGwCnTn4XreHAb8uNiQso+LNW/uxuz32R4GY+HhEwXYkSccbhYeHLCcBA1vB0Bren9966Q2lNOrJYFOS69GUzzwxqSvVLVs9P0fbu6AzK1/jWHDCZAUkW86lalYTy/rV9HrY+Gnm4ppDKavVIW34v7F/Y9WtyzvM2goAXIlDTxG2mk4L0/BDfyLkfTc5vsXsbufAKvHszTYAuQKs3k4VG981duCRekrKc+6/EfjieYhAEb66aNMlbJWi/C0ruMGhF8tfQ1BQEPvf7qNJRKWuoGGxwDqcfRgUNx1uQ6T6bVSWHn/lP7Cz+6sBvIqPtCIwLh6p3Q6+Bmmr5qvBt6fW9yj1XAC+L1SySMx1Z4HfF771+dn8PhIcMnGPElMah4CoC97+doL5e3Ahd+4++rUBNgPz0kvHWbNzjzl85BrDgKcdHuWNm+pfjuna9Sjypq9ebJSJrRKWIuj4TEAmrPbd1cgfpisMTvGgqDpi6Mw1Nej7D94tC0+WybFYX6ayPnhwZPOpd39A/jj/ZWaUg/0dMPUhUhzWQB8mEujYROVKCvBbU0/MRqy3CVa4gKC+KqZkVB52wuv0naiNby25LpKHTC1pDd7f91r9fihk/6ikI9Psr72YUl3MLIaxwDgzZbXtvQH9NeihGrC5nWkN3v/atdWmcCAhSNSGCPRlAQokuD8yBB0Bv1w+85KTYXFTObsTl8rrr0wJnx/V/MGgaXAQZsvT08ogVFa+zVnJjwqr7g8nNURgVaeivD7JHhRBLDdNr+t1HICoCXAQZLfuvYiROO4EFQMYgf1doOabTDJmazzG0uPL9rs6+mEcH839Hb3OGIdCttmK+DDY/Wtv7vzpPULtzif3gjUc+8joUFHvNpO3Zw7IJ7xR9/oUbU00ryAMoug3ppZTAFfaOnUl1qWPqdTQC2BLQ4iABGAQAQgEAEIRAACEYBABCAQAQhEgE9ING6EbofK/4wSQHNJK6MLOROsRUa/dzVtkAD8Y62j0XicpOxg6M4r5PCxUQvwF62Du7EE7Dl43dtWxtrmrvJeRCP6ROj1Bs4L2rx1urjZKXA5d3xla29nECRJIsnb7PNxUE1MlPyUvvnff19OrnxV52Tb8fFx+cG2NphbXPqVIMA3SciuJ8nXZq6Mz2rpuXI1kMMPxVeMBOhq5f81uvbgd5Wu0LUAiLmFe8PApL+J3QAJ03XK35JleO6Vq+NKDcC4BRCYmby8CVz+ovizHRKoq7AIKflLReXXbQGKuHVrSZI64NsiJnxD/HyK5OvYUh9F1z0zOT6PhV59Rs8C1ESAIm7evOmRugYuMMYmxM0+K4LEJ0notiocW2z/I/SwzTm/89Lk+LrelYYIQGgdUGcQEYBABCAQAQhEAAIRgEAEIBABCEQAAhGAQAQgEAEIRAACEYBABCA0Jf4vwADTIj96RMYWrAAAAABJRU5ErkJggg==",
		"title": "",
		"desc": "",
		"stamp": "",
		"start": "List/!eyJtb2RlIjogWyJjb2x1bW5zLWJyaWVmIl0sInNlYXJjaCI6ICIiLCJzb3J0IjogWyJUeXBlIl19",
		"creator": "",
		"apps": [],
		"sync": []
	},
	"HTML": ["<div id=\"sidelogo\" class=\"pb30 pt5 mb20 bbs hide\">",
		"<img src=\"i/logo.png\" id=\"sidelogoimg\"/>",
		"</div>",
		"<div id=\"list\" class=\"oh fs80\"></div>",
		"<div class=\"mt25 pt15 pb15 bts lgray fs80 mr10 lh170\">",
		"<div id=\"btn-sysdb\" class=\"fs100 fi-folder-lock hoverlink\">",
		"<span class=\"pseudolink fs95 ml6 \">System DB</span>",
		"</div>",
		"<div id=\"btn-newdb\" class=\"fs80 fi-plus hoverlink ml2\">",
		"<span class=\"pseudolink fs120 ml7\">Add new DB...</span>",
		"</div>",
		"<div id=\"btn-update\" class=\"fs100 fi-lightbulb hoverlink\">",
		"<span class=\"pseudolink fs95 ml5 \">Check updates...</span>",
		"</div>",
		"<div id=\"btn-profile\" class=\"fs100 fi-torso hoverlink ml2\">",
		"<a class=\"pseudolink fs95 ml7 \" href=\"profile.html\" target=\"_blank\">Profile...</a>",
		"</div>",
		"</div>"]
},
{
	"id": "cw.Sys.Dock",
	"init": function ($o, form) {

		$o.parent().parent().css({top:"25px"}); 
		var d = form.data;
		$o.html('<div id="list" class="w200 oh pl25 fs80"></div>');
		$o.on("update.cw", function(){
			var a=[], slot, slots = cw.state.slots(), active, atitle="";
			for (var i in slots) {
				slot=slots[i];
				active=slot.app.isActive();
				//if we have editor
				//if (slot.app.nodedoc && slot.app.nodecmd) 
				if (!slot.closing) a.push({
					url:slot.app.url,
					initurl:i,
					active:active,
					ico:slot.app.ico,
					title:slot.title||slot.app.title,
					born:slot.app.born
				});
				if (active) atitle = slot.title;
			}
			a=a.sortBy(function(e){return e.born*1}, true);
			//$o.my("data",{list:a})
			d.list=a; $o.find("#list").trigger("recalc");
			document.title = atitle;
		}.debounce(105));
		$o.on("click","span#appname", function(){
			var url=$(this).data("url");
			cw.state.set(url);
		});
	
		},
	"params": {
		"delay": 50
	},
	"data": {
		"list": []
	},
	"ui": {
		"#list": {
			"manifest": "AppList",
			"bind": "list",
			"check": true,
			"list": "<div class=\"hoverlink blue cw-dock-item\"></div>"
		}
	},
	"AppList": {
		"init": function ($o, form) {

		$o.html(
			'<div id="cont" class="blue"><img id="ico" class="w16 h16 mt2 mb-2 mr10" src=""/>'
			+'<div class="w130 oh dib vat" '
			+'style="text-overflow:ellipsis;white-space:nowrap;">'
			+'<span id="appname" class="pseudolink" data-url="'
			+form.data.url+'"></span>'
			+'</div>'
			+'<span id="btn-closeapp" class="pseudolink ml5 pl2" title="Close app instance">×</span>'
			+'</div>'
		);
	
			},
		"data": {
		},
		"ui": {
			"#appname": function (d,v) {

			return d.title.escapeHTML();
		
				},
			"#ico": "ico",
			"#cont": {
				"bind": function () {

					},
				"css": {
					"blue": function (d) {
						return d.active
						},
					"xgray o50": function (d) {
						return !d.active
						}
				}
			},
			"#btn-closeapp": {
				"bind": function (d,v,$o) {

				if(v!=null) {
					cw.state.slots(d.initurl).app.close().then(function(){
						if ($o.my()) $o.my().root.slideUp(150);
					});
				}
			
					},
				"events": "click.my"
			}
		}
	}
},
	
	
{
	"id": "cw.Sys.Trust",
	"init": function ($o) {

		$o.formgen([
		    '<h4 class="fi-check lgreen"> <span class="green">Confirm trust</span></h3>',
			{label:"70px", row:"350px", rowCss:"my-row mt10 fs80 xgray"},
			['', '<p>These app components are untrusted or were changed since last used:</p>'],
			['','div#list.lh140'],
			{rowCss:"my-row mt20 pt15 fs80 xgray btd"},
			['', 'btn#btn-ok.green.mr5',{val:"Trust this version"}, 
				'btn#btn-all.green.mr5',{val:"Trust forever"},
				'btn#btn-cancel',{val:"Stop"}]
		]);
	
		},
	"params": {
		"delay": 5,
		"width": 350
	},
	"data": {
		"trust": []
	},
	"ui": {
		"#list": function (d) {

			var i=0, html="";
			for (i;i<d.trust.length;i++) {
				html+='<span class="orange">—</span> '+d.trust[i].id+'<br/>';
			}
			return html; 
		
			},
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
		},
		"#btn-all": {
			"bind": function (d,v,$o) {

				if (v!=null) {
					for (var i=0;i<d.trust.length;i++) d.trust[i]._rev="*";
					$o.trigger("commit");
				}
			
				},
			"events": "click"
		}
	}
},
{
	"id": "cw.Sys.Confirm",
	"init": function ($o, form) {

		var d=form.data;
		$o.formgen([
		    '<div class="'+d.css+'">'+d.text+'</div>',
			{label:"70px", row:"350px", rowCss:"my-row mt15 pt15 fs90 mb-5 xgray btd"},
			['', 'spn#btn-ok.mr5.button.green',{txt:d.ok}, 
				'span#btn-cancel.button',{txt:d.cancel}]
		]);
	
		},
	"params": {
		"delay": 5,
		"width": 350
	},
	"data": {
		"text": "",
		"css": "xgray",
		"ok": "Ok",
		"cancel": "Cancel",
		"cmd": ""
	},
	"ui": {
		"#btn-ok": {
			"bind": function (d,v,$o) {

				if (v!=null) {
					d.cmd="commit";
					$o.trigger("commit");
				}
			
				},
			"events": "click.my"
		},
		"#btn-cancel": {
			"bind": function (d,v,$o) {

				if (v!=null) {
					d.cmd="cancel";
					$o.trigger("cancel");
				}
			
				},
			"events": "click.my"
		}
	}
},
{
	"id": "cw.Sys.YesNoCancel",
	"init": function ($o, form) {

		var d=form.data;
		$o.formgen([
		    '<div class="'+d.css+'">'+d.text+'</div>',
			{label:"70px", row:"450px", rowCss:"my-row mt15 pt15 fs90 mb-5 xgray btd"},
			['', 'spn#btn-yes.button.green.mr5',{txt:d.yes}, 
			 	'spn#btn-no.button.mr5',{txt:d.no}, 
				'spn#btn-cancel.button.fr',{txt:d.cancel}]
		]);
	
		},
	"params": {
		"delay": 5,
		"width": 450
	},
	"data": {
		"text": "",
		"css": "xgray",
		"yes": "Yes",
		"no": "No",
		"cancel": "Cancel",
		"cmd": ""
	},
	"ui": {
		"#btn-yes": {
			"bind": function (d,v,$o) {

				if (v!=null) {
					d.cmd="yes";
					$o.trigger("commit");
				}
			
				},
			"events": "click.my"
		},
		"#btn-no": {
			"bind": function (d,v,$o) {

				if (v!=null) {
					d.cmd="no";
					$o.trigger("commit");
				}
			
				},
			"events": "click.my"
		},
		"#btn-cancel": {
			"bind": function (d,v,$o) {

				if (v!=null) {
					d.cmd="cancel";
					$o.trigger("cancel");
				}
			
				},
			"events": "click.my"
		}
	}
},
{
	"id": "cw.Sys.Cropper.Square",
	"init": function ($o, form) {

		var html = $.my.formgen([
		'<div class="fl mr20 tac vat bg-lgray" style="width:600px;height:450px;' 
				+'overflow:hidden;position:relative;line-height:450px;" id="crop-frame">',
		  			'<img id="source" class="vam" style="max-width:600px; max-height:450px; background:white" src="" />',
		  			'<div class="w600  dib" style="height:450px;position:absolute;top:0;left:0">',
		  				'<span class="dib vam fs110 button">',
		  					'<span class="fi-photo"><span class="fs110"> &nbsp;Select Image</span></span>',
		  				'</span>',
	    		'<input type="file" id="file" class="w600 dib" accept="image/jpeg,image/png" '
	    			+'style="height:450px;cursor:pointer;opacity:0; position:absolute;top:0;left:0">',
	    	'</div>',
		  		'</div>',
		  		'<div class="w200 dib vat" id="xpreview">',
		  			'<canvas id="preview" class="bg-lgray" style="width:200px;height:200px" width='
		  				+form.data.size+' height='+form.data.size+' style="overflow:hidden;"></canvas>',
		  			{row:"200px",rowCss:"mt10 pt15 btd fs90 tac"},
		      		["","btn#btn-apply.mr5.green",{val:"Apply"}, "btn#btn-close.mr0",{val:"Cancel"}],
		  		'</div>',
		  		'<div class="w200 dib vat" id="xwarn">',
		  			
		  		'</div>',
		  		'<div class="hide"><canvas id="x2" width='+form.data.size*2+' height='+form.data.size*2+'></canvas></div>'
		]);
		$o.html(html);
	
		},
	"params": {
		"width": 820
	},
	"data": {
		"filename": "",
		"data": "",
		"cropped": false,
		"size": 200
	},
	"style": {
		" .jcrop-holder": "display:inline-block;vertical-align:middle"
	},
	"ui": {
		"#file": {
			"bind": function (d, v, $o) {


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
						this.animateTo([100,100,300,300]);
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
						.toDataURL('image/jpeg',0.95)
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
{
	"id": "cw.Sys.Attachments",
	"init": function ($o, form) {

		var that=this,
			d = form.data;
		$o.addClass(d.css);
		//preload
		$o.html(
			'<div id="att-flist"></div>'
			+'<div id="att-fpanel"></div>'
			+'<div class="mt5">'
				+'<span class="cw-att-upload"></span>'
				+'<input id="upload" type="file" '
				+(d.accept?'accept="'+d.accept+'" ':"")
				+'/>'
			+'</div>'
		);
		$o.on("click",".cw-att-dl", function(){
			var fname =$(this).data("fname"), 
				text = $(this).attr("title"),
				oatt = cw.db(d.doc._db).att(d.doc._id);
			
			if (d.doc._attachments && d.doc._attachments[fname] && !d.doc._attachments[fname].stub) {
				var att = {}; 
				att[fname] = d.doc._attachments[fname];
				if (null != att[fname].data) processAtt(fname, att);
			} else if (oatt) {
				oatt.url(fname).then(processAtt.fill(fname));
			} 
		});
		
		function processAtt (fname, att){
			var o, html="", width=450, file, 
				mod = Object.clone(that.ModalManageAtt, true);
			if (Object.size(att)) {
				o = att[Object.keys(att)[0]];
				file = o.url||("data:"+o.content_type+";base64,"+o.data);
				
				if (/^image/.test(o.content_type)) width=800;
				$.my.modal({manifest:mod, data:{
					name:fname,
					size:o.size,
					digest:o.digest,
					url:file,
					mime:o.content_type
				}, width:width, esc:true}).then(function(res){
					if (Object.isObject(res)) {
						if (res.cmd==="delete") {
							delete d.doc._attachments[fname];
							$o.find("#att-fpanel").trigger("redraw");
						}
					}
				});
			} 
		}
	
		},
	"Unfold": function (A, elt, doc) {

		var r;
		try {
			if (Object.isFunction(A)) r = A(elt, elt.name, doc);
			else if (typeof A === "string") r=A;
		} catch(e) {}
		return r;
	
		},
	"params": {
		"width": 400
	},
	"data": {
		"sort": function (fobj, fname, doc) {
			 return fname; 
			},
		"width": 200,
		"truncate": 200,
		"limit": 10000000,
		"ico": function (fobj, fname) {

		var css="fi-paperclip",
				types={
					"fi-photo":/\.(png|jp[e]?g|gif|tif[f]?|bmp)$/i,
					"fi-social-adobe":/\.(pdf|ai|psd)$/i,
					"fi-page-doc":/\.(doc[x]?|txt|rtf)$/i,
					"fi-graph-pie":/\.(xls[x]?|csv)$/i,
					"fi-archive":/\.(zip|rar|7z|7zip)$/i,
					"fi-html5 pl2":/\.(htm[l]|php)$/i,
					"fi-css3 pl2":/\.css$/i,
					"fi-widget":/\.(js[on]?|php|asp|jar|c|erl)$/i,
					"fi-sound":/\.(wav|aiff|mp3|ogg|mpeg3)$/i
				};
		if (!fobj.digest) css="orange fi-burst-new";
		else Object.each(types, function(key, re){
			if (re.test(fname)) css=key;
		});
		return '<span class="'+css+' dib vam o80 lh110" style="width:1.3em;"></span>';
	
			},
		"aux": function (fobj, fname, doc) {

		return "";
	
			},
		"css": "cw-att-files",
		"itemCss": "cw-att-item hoverlink",
		"download": function (fobj, fname, doc) {
			 return "Manage "+fname; 
			},
		"upload": "<span class=\"pseudolink\">Upload file...</span>",
		"accept": "",
		"doc": {
		},
		"files": []
	},
	"Attachment": {
		"init": function ($o, form) {

		var d = form.data;
		$o.html(
			d.ico
			+'<div class="dib vat oh">'
			+'<div class="oh" style="white-space:nowrap">'
			+(d.dl?'<span class="pseudolink cw-att-dl" title="'
				+d.dl+'" data-fname="'+d.name+'">':"")
			+'<span class="cw-att-fname"></span>'
			+'<span class="cw-att-ext"></span>'
			+(d.dl?'</span>':"")
			+'</div>'
			+(d.aux?'<div class="cw-att-aux">'+d.aux+'</div>':"")
			+'</div>'
		);
	
			},
		"data": {
			"name": "",
			"title": "",
			"ext": "",
			"ico": "",
			"aux": "",
			"dl": ""
		},
		"ui": {
			".cw-att-fname": "title",
			".cw-att-ext": "ext"
		}
	},
	"ModalManageAtt": {
		"init": function ($o, form) {

		var html="", d=form.data;
		if (/^image/.test(d.mime)) {
			html+='<div class="w800 tac">'
			+'<img src="'+d.url+'" class="dib mb15" style="max-width:800px; max-height:600px;" />'
			+'</div>';
		}
		html+= '<div class="lh110 fs130 xgray" style="word-break: break-all;">'+d.name+'</div>';
		html+= '<div class="lh110 fs90 gray mt5">'
		+d.size.format(0,' ')+' byte'+(/(^1|[02-9]1)$/.test(d.size+"")?'':'s')
		+(!d.digest?", not yet saved to DB":"")
		+'</div>';
		html+= '<div class="my-row pt15 mt20 btd fs85 mb-5">'
		+'<a class="button tdn green mr5" href="'
		+d.url+'" target="_blank" download="'
		+d.name+'"><span class="fi-download fs90"></span> Download</a>'
		+(/.+\.(jp[e]?g|png|tif[f]?|pdf|txt|js|css|htm[l])$/i.test(d.name)?
			'<a class="button tdn green mr5" href="'
			+d.url+'" target="_blank"><span class="fi-eye fs90"></span> Open</a>':"")

		+ '<span class="button red" id="btn-del"><span class="fi-trash fs90"></span> Delete</span>'
		+ '<div class="fr"><span class="button" id="btn-cancel">Cancel</span></div>'

		+'</div>';

		$o.html(html);
		$o.on("click","a", function (){
			(function(){$o.trigger("cancel");}).delay(100);
		})
	
			},
		"data": {
			"name": "",
			"size": "",
			"url": "",
			"mime": "",
			"cmd": ""
		},
		"ui": {
			"#btn-cancel": {
				"bind": function (d,v,$o) {
					if (v!=null) $o.trigger("cancel")
					},
				"events": "click.my"
			},
			"#btn-del": {
				"bind": function (d,v,$o) {

				if (v!=null) {
					d.cmd="delete";
					$o.trigger("commit");
				}
			
					},
				"events": "click.my"
			}
		}
	},
	"ui": {
		"#att-fpanel": function (d, v, $o) {

		var i,j,k,
				a=d.doc._attachments,
				ao=[],
				_unfold = this.Unfold;
		if (/*v!=null && */a && Object.size(a)) {
			//build flist
			for (i in a) ao.push(Object.merge({
				name:i
			},a[i]));
			ao=ao.filter(function(elt, idx){
				var ok=true;
				try{
					if (Object.isFunction(d.sort)) {
						ok = !!d.sort(elt, elt.name, d.doc);
					}
					else if (Object.isRegExp(d.sort)) {
						ok = d.sort.test(elt.name);
					}
				} catch (e){}
				return ok;
			}).sortBy(function(elt,idx){
				var ok=elt.fname;
				if (Object.isFunction(d.sort)) {
					try{ok = d.sort(elt, elt.name, d.doc);} 
					catch (e){}
				}
				return ok;
			});
			d.files=ao.map(function(elt, idx) {
				var o = {
					name:elt.name,
					ext:(elt.name.match(/\.[^\.]+$/)||[""])[0],
					aux:	_unfold (d.aux, elt, d.doc),
					ico:	_unfold (d.ico, elt, d.doc),
					dl:		_unfold (d.download, elt, d.doc)
				};
				o.title = (elt.name.match(/(.+)(?:\.[^\.]+$)/)||[0,elt.name])[1]
				.truncate(d.truncate-o.ext.length,"middle");
				return null===o.data?null:o;
			}).compact();

		} else d.files=[];
		$o.my("find", "#att-flist").trigger("redraw");
	
			},
		".cw-att-upload": "upload",
		"#att-flist": {
			"bind": "files",
			"check": true,
			"manifest": "Attachment",
			"list": "<div class=\"cw-att-item hoverlink\"></div>"
		},
		"#upload": {
			"bind": function (d,v,$o) {

		var f, a={}, data;
		if (v!=null && v) {
			f = $o[0].files[0];
			if (f.size>d.limit){
				cw.note("Max upload file size is "+(d.limit*1).abbr(1)+"b","error");
				$o.wrap('<form>').closest('form').get(0).reset();
			}
			else if (f) (function(){
				a.content_type = f.type||"application/octet-stream";
				var fr = new FileReader(), ri, sb64 = [];
				fr.onload=function(e){
					ri = new Uint8Array(e.target.result);
					for (var i=0; i<ri.length; i++) sb64.push(String.fromCharCode(ri[i]));
					data = window.btoa(sb64.join(""));
					a.data = data;
					a.size = sb64.length;
					if (!d.doc._attachments) d.doc._attachments={};
					d.doc._attachments[f.name] = a;
					$o.wrap('<form>').closest('form').get(0).reset();
					$o.my("find", "#att-fpanel").trigger("redraw")
				};
				fr.readAsArrayBuffer(f);	
			})();
		}
	
				},
			"css": {
				"hide": function (d) {
					return !d.upload
					}
			}
		}
	},
	"style": {
		" .cw-att-item": "white-space:nowrap; overflow:hidden; padding:0.2em 0 0.2em 0; line-height:1.4em;",
		" input[type=file]": "width:100%;cursor:pointer;opacity:0; position:absolute;top:0;left:0;height:1.5em"
	}
},
	
	
{
	"id": "cw.Manifest",
	"init": function ($o, form) {

		
		var pi=$.Deferred(), that=this;
				
		$o.formgen([
		'<div class="fs90">',
			'<div id="cmcont" class="dib vat maned oh hide" style="border:1px solid #C1D0DA">',
				'<textarea id="cm" class="maned fs80"></textarea>',
			'</div>',
			'<div id="manifesto" class="dib vat maned"></div>',
			'<div id="aside" class="w200 ml20 vat dib">',
				'<div id="pane" class="w200 vat dib"></div>',
				'<div id="warn" class="fs85 lh120 o80"></div>',
				{row:"200px", rowCss:"my-row mt15"},
				['', 'btn#btn-save.fs100.w90.tac.mr5.green',{val:"Save",title:"Saves manifest"},
				 	'btn#btn-close.fs100.w90.tac',{val:"Close",title:"Close and discards changes"}],
				'<div id="atts" class="w200 fs90 gray mt15"></div>',
			'</div>',
		'</div>'
		]);
		
		$o.find("#pane").on("keyup","textarea", function (){
			var $t=$(this);
			$t.height(0).height($t[0].scrollHeight-6);
		});
		var ed = form.data.editor;
		
		that.MakePostfix(ed._id);
		that.Editor.Prefix = function(){
			return {id:form.data.editor.id};
			/*return $.extend(
				{id:form.data.editor.id},
				(form.data.editor.manifest && form.data.editor.manifest.app)?{app:Object.reject(form.data.editor.manifest.app,"com")}:{}
			);*/
		};
		
		that.$Ed = $o.find("#manifesto");
		
		that.Editor.Postfix = function(){
			return that.Postfix;
		};
		
		(function(){pi.resolve();}).delay(1);
		
		return pi.promise();
	
			},
	"MakePostfix": function (docid) {

		this.Postfix = {}
		var that = this;
		this.db.load(docid, true).then(function(doc){
			if ( doc && doc._attachments ) that.Postfix.files = doc._attachments;
		})
	
			},
	"app": {
		"name": "Manifest",
		"version": "2",
		"timeout": "15000",
		"title": "App Editor",
		"author": "ermouth",
		"ico": "data:image/jpeg;base64,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",
		"nodetitle": "editor.title",
		"nodedoc": "editor",
		"nodecmd": "cmd",
		"maskstate": ["cmd",
			"editor._id"],
		"width": [1320,
			1170],
		"types": {
			"manifest": ["edit",
				"create"]
		}
	},
	"params": {
		"delay": 50
	},
	"data": {
		"cmd": "",
		"editor": {
			"_id": "",
			"name": "",
			"title": "",
			"type": "manifest",
			"desc": "",
			"beta": false,
			"manifest": {
				"app": {
				}
			},
			"raw": {
				"_src": "",
				"_new": false
			},
			"log": []
		},
		"err": []
	},
	"ui": {
		"#pane": {
			"manifest": function () {

			console.log(this.Side);
			return this.Side;
		
					},
			"check": true,
			"bind": "editor.raw",
			"init": function ($o,d) {

			//console.log($o,d)
		
					}
		},
		"#manifesto": {
			"bind": "editor.raw",
			"manifest": "Editor",
			"check": true,
			"delay": 20,
			"events": "change.my"
		},
		"#warn": {
			"delay": 200,
			"bind": function (d,v,$o) {


		var i,j,k, 
				that = this,
				r=d.editor.raw, 
				m=d.editor.manifest,
				$ed = that.$Ed,
				ed = d.editor, 
				ok=["Manifest check ok."],
				err=[], js, app;

		if (!$o.my("find","#pane").my("valid")) {
			err.push("Component description has errors.");
			delete d.editor.app;
		} else {
			//check if unique
			if (!ed._rev) {
				if (false) {//(cw.form(r.name) || $.my.forms("cw."+r.name, "exist")) {
					err.push ("Component name must be unique – and it’s not.");
					d.editor.id="";
				} else {
					r.author = cw.me();
					d.editor.id = "cw."+r.name;
					d.editor._id = d.editor.id.replace(/\./g,"-")+"-"+cw.lib.hash4(r.author+"/"+r.version);
				}
			}
			if (this.Side.IsApp(r)) {
				var trim=[/^_/,"pic","types","com"];
				if (!this.Side.IsEd(r)) trim.push("nodecmd","nodedoc");

				app = Object.clone(Object.reject(r,trim),true);

				if (this.Side.IsEd(r)) {
					//update maskstate
					app.maskstate='["'+app.nodecmd+'","'+app.nodedoc+'._id"]';
				}

				if (/^[\[\{]|[\}\]]$/.test(app.maskstate)) 
					app.maskstate = JSON.parse(app.maskstate);

				// mount editor-specific fields
				var tmp={}, ttype;
				if (this.Side.IsEd(r)) {

					if (r._cmd && r._cmd.length) for (i=0;i<r._cmd.length;i++) {
						if (ttype=r._cmd[i].type) {
							if (!tmp[ttype]) tmp[ttype]=[];
							tmp[ttype]=tmp[ttype].union(r._cmd[i].actions);
						}
					}

					if (!Object.keys(tmp).length) err.push ("Editor must have types/actions defined.");
					else {
						app.types=tmp;
					}
				} 
			}


			//try to parse js
			try { 
				js=eval("("+$ed.my().manifest._src+")"); 
				//js=JSON.parse(r._src); 
			} 
			catch(e) {
				err.push("Error in manifest: "+ e.message+(e.getLineNumber?", "+e.getLineNumber():""));
			}
			if (Object.isObject(js)) {
				js=Object.reject(js,["app","type", "id", "files", /^_/]);
				if (!Object.isObject(js.ui) || !Object.keys(js.ui)) err.push("No ui section, expected object.");
				if (!Object.isObject(js.data) || !Object.keys(js.data)) err.push("No data section, expected object.");
			} else err.push("Invalid manifest.");


			//mount js on manifest
			if (!err.length) {
				d.editor.manifest=Object.merge(app?{id:"",app:app}:{id:""}, JSON.parse($.my.tojson(js)), true);

				//check if field pointers are valid
				var n1,n2,n3,n4;
				if (this.Side.IsEd(r)) {
					n1=!Object.isString(cw.lib.mask(d.editor.manifest.data, d.editor.manifest.app.nodetitle));
					n3=!Object.isObject(cw.lib.mask(d.editor.manifest.data, d.editor.manifest.app.nodedoc));
					n4 = !Object.isString(cw.lib.mask(d.editor.manifest.data, d.editor.manifest.app.nodecmd));
				}
				if (n1) err.push("Title mount ref poins to null.");
				if (n3) err.push("Invalid doc mount pointer.");
				if (n4) err.push("Cmd mount ref poins to null.");
			} else d.editor.manifest=null;


			if (!err.length) {
				d.editor.manifest.id = d.editor.id;
				d.editor.title=r.title;

				if (r.pic.length) d.editor.pic = r.pic; 

				ok.push("$.my id is <i>"+d.editor.id+"</i>");
				ok.push("DB _id is <i>"+d.editor._id+"</i>");
			}

			d.editor.desc=r._desc;
			d.editor.name=r.name;
			d.editor.beta = !!(r._type.indexOf("beta")>-1);
		}
		if (err.length) d.err=err; else d.err=[];
		return err.length?'<div class="orange">'+err.join("<br>")+'</div>':'<div class="green">'+ok.join("<br>")+'</div>';
	
					},
			"watch": "#pane,#manifesto"
		},
		"#btn-save": {
			"bind": function (d,v,$o) {

			var dbid=this.db.name, that=this; 
			if (v!=null) {
				d.editor.stamp=Date.now();
				cw.read[dbid].trust[d.editor._id]="*";
				this.db.save(d.editor)
				.then(
					function (res){

						// mark manifest as trusted
						cw.read[dbid].trust[res._id]=res._rev;
						cw.read[dbid]._dirty=true;

						//push to app
						Object.merge(
							d.editor,
							Object.select(res,[/^_/, "stamp", "log"])
						);

						//redraw file list
						$o.my("find","#atts").trigger("redraw");

						//rebuild 
						that.MakePostfix(d.editor._id);

					}, function (e,msg) {
						console.log(msg, e);
					}
				);
			}
		
					},
			"events": "click.my"
		},
		"#btn-close": {
			"bind": function (d,v,$o) {

			if (v!=null) $o.trigger("cancel");
		
					},
			"events": "click.my"
		},
		"#atts": {
			"init": function ($o, form) {

			$o.my("cw.Sys.Attachments", {
				doc:form.data.editor,
				truncate:18
			});
		
					},
			"bind": function () {

					}
		}
	},
	"Side": {
		"IsApp": function (d) {
				 return !(d._type.indexOf("app")<0 && d._type.indexOf("editor")<0);
				},
		"IsEd": function (d) {
				 return !(d._type.indexOf("editor")<0);
				},
		"init": function ($o) {

		
		$o.formgen(this.HTML);
	
				},
		"data": {
			"_src": "",
			"_desc": "",
			"name": "",
			"version": "1",
			"timeout": "3000",
			"title": "",
			"author": "",
			"pic": "",
			"ico": "",
			"maskstate": "",
			"nodetitle": "",
			"nodedoc": "",
			"nodecmd": "",
			"types": "",
			"_type": ["manifest"],
			"_cmd": [],
			"width": []
		},
		"ui": {
			"#type": {
				"bind": "_type",
				"init": function ($o) {

			$o.tags({tags:[[{"App":"app"},{"Editor":"editor"}],{"<i>&beta;eta</i>":"beta"}], empty:{"Manifest":"manifest"}});
		
						}
			},
			"#title": {
				"bind": "title",
				"check": function (d,v) {

			var t=v.compact();
			if (t.length<3) return "Enter title";
			if (t.length>50) return "Too long!";
			return "";
		
						}
			},
			"#name": {
				"bind": function (d,v) {

			if (v!=null) d.name=v.to(1).toUpperCase()+v.from(1);
			return d.name;
		
						},
				"check": function (d,v) {

			if (!/^[A-Z][A-Za-z0-9]{2,24}(\.[A-Za-z0-9]{1,25}){0,4}$/.test(v)) return "Like App.Some.Ext";
			if (v.to(1).toUpperCase() !== v.to(1)) return "First – cap";
			if (v.length>129) return "Too long";
			return "";
		
						}
			},
			"#ver": {
				"bind": "version",
				"check": /^(|[0-9][a-z0-9\.]{0,5})$/,
				"error": "Like 12 or 5.6.8"
			},
			"#desc": {
				"bind": "_desc",
				"check": /^.{0,140}$/,
				"error": "<i>Short</i> desc, please"
			},
			"#isapp": {
				"bind": function () {

						},
				"watch": "#type",
				"css": {
					"hide": function (d) {
							return !this.IsApp(d)
							}
				}
			},
			"#maskstate": {
				"delay": 50,
				"bind": "maskstate",
				"check": function (d,v) {

			//v must be ref or json array or obj
			var t=v.compact(), obj;
			if (!this.IsApp(d) || this.IsEd(d)) return "";
			if (t.length>150) return "Too long";
			if (/^["']|["']$/.test(t)) return "No quots for single string";
			if (/^[\[\{]|[\}\]]$/.test(t)){
				try{
					obj=JSON.parse(t);
				} catch(e) {}
				if (!obj) return "Invalid JSON";
				if (Object.isArray(obj)) {
					if (!obj.length) return "At least one elt";
					for (var i=0;i<obj.length;i++) if (!Object.isString(obj[i])) return "Only strings in array";
					if (obj.length!==obj.unique().length) return "Array has dupes";
				} else if (Object.isObject(obj)) {
					if (!Object.keys(obj).length) return "Mask is empty"
						} else return "Invalid JSON type";
			} 
			return "";
		
						},
				"watch": "#type",
				"css": {
					"hide": function (d) {
							return this.IsEd(d)
							}
				}
			},
			"#nodetitle": {
				"bind": "nodetitle",
				"check": function (d,v) {

			if (!this.IsApp(d)) return "";
			var t=v.compact();
			if (!t.length && this.IsEd(d)) return "Data field to map as app title";
			if (t.length>150) return "Too long";
			if (/^["']|["']$/.test(t)) return "No quots for single string";
			return "";
		
						},
				"watch": "#type"
			},
			"#timeout": {
				"bind": "timeout",
				"check": function (d,v) {

			if (!this.IsApp(d)) return "";
			if (!/^\d{1,5}$/.test(v)) return "Num, 0 to 99K";
			return "";
		
						},
				"watch": "#type"
			},
			"#width": {
				"bind": function (d,v,$o) {

			if (v!=null) {
				d.width=v.split(/[\s,]/).map(function(e){return parseInt(e)}).compact(true);
				return v;
			}
			return d.width.join(" ");
		
						},
				"check": function (d,v) {

			if (!this.IsApp(d)) return "";
			var t=v.compact();
			if (!/^(\d{3,4}([\s,]\d{3,4})*[\s,]?)$/.test(t)) return "Num list";
			return "";
		
						},
				"watch": "#type"
			},
			"#iseditor": {
				"bind": function () {

						},
				"watch": "#type",
				"css": {
					"hide": function (d) {
							return !this.IsEd(d);
							}
				}
			},
			"#nodedoc": {
				"bind": "nodedoc",
				"check": function (d,v) {

			if (!this.IsEd(d)) return "";
			var t=v.compact();
			if (!t.length) return "Field to map doc object to edit";
			if (t.length>150) return "Too long";
			if (/^["']|["']$/.test(t)) return "No quots for single string";
			return "";
		
						},
				"watch": "#type"
			},
			"#btn-addpic": {
				"bind": function (d,v,$o) {

			if (v!=null) {
				//console.log($o, $o.data(), this)
				$.my.modal({
					manifest:"cw.Sys.Cropper.Square",
					data:{data:"",filename:"", size:250}
				}).then(function (crop) {
					if (crop && crop.data) {	
						var I=new Image();
						I.src="data:image/jpeg;base64,"+crop.data;
						I.onload=function(){
							var img=cw.lib.image(I);
							try {
								d.pic = img.resample(128).sharpen(0.2).jpeg(0.95, true);
								d.ico = img.resample(50).brightness(1.05).contrast(1.05).sharpen(0.5).jpeg(0.96);
								$o.my("find","#pic,#ico").trigger("recalc");
							}catch(e){
								console.log(e)
							}								
							crop.data="";
							$o.html("Change image...").addClass("w75");
						}
					}
				});
			}
			if (d.pic) $o.html("Change image...").addClass("w75");
		
						},
				"events": "click.my"
			},
			"#pic": {
				"bind": "pic",
				"css": {
					"hide": function (d) {
							return !d.pic.length
							}
				}
			},
			"#ico": {
				"bind": "ico",
				"css": {
					"hide": function (d) {
							return !d.ico.length
							}
				}
			},
			"#nodecmd": {
				"bind": "nodecmd",
				"check": function (d,v) {

			if (!this.IsEd(d)) return "";
			var t=v.compact();
			if (!t.length) return "Field to map editor command";
			if (t.length>150) return "Too long";
			if (/^["']|["']$/.test(t)) return "No quots for single string";
			return "";
		
						},
				"watch": "#type"
			},
			"#cmd": {
				"bind": "_cmd",
				"manifest": "TypeLine",
				"check": true,
				"watch": "#btn-addcmd"
			},
			"#btn-addcmd": {
				"bind": function (d,v) {

			if (v!=null) {
				d._cmd.push(Object.clone(this.TypeLine.data,true));
			}
		
						},
				"events": "click.my"
			}
		},
		"TypeLine": {
			"data": {
				"type": "",
				"actions": []
			},
			"init": [{
					"row": "200px",
					"rowCss": "my-row pb7"
				},
				["",
					"<div class=\"w75 dib vat\">",
					"inp#type.w70.fs90.vat.dib.pt3.pb5",
					{
						"plc": "Type"
					},
					"</div><div class=\"w125 dib vat\">",
					"inp#actions.w125.fs95",
					{
						"plc": "Actions"
					},
					"</div>"]],
			"ui": {
				"#type": {
					"bind": function (d,v) {

				if (v!=null) d.type=(v+"").replace(/[^a-z0-9\*]/ig,"");
				return d.type;
			
							}
				},
				"#actions": {
					"bind": "actions",
					"init": function ($o) {

				$o.select2({tags:["create","edit","view","comment","hide","copy","move","delete"]});
			
							}
				}
			}
		},
		"HTML": [{
				"row": "200px",
				"label": "75px",
				"rowCss": "my-row pt0 pb10",
				"labelCss": "fs85 gray"
			},
			["",
				"inp#title.fs120",
				{
					"plc": "Component title"
				},
				"msg"],
			["",
				"<div class=\"dib vat mr5 w150\">",
				"inp#name.w150",
				{
					"plc": "IdName"
				},
				"msg",
				"</div>",
				"<div class=\"ml5 dib vat w40\">",
				"inp#ver.w40",
				{
					"plc": "Ver"
				},
				"</div>"],
			["",
				"txt#desc",
				{
					"plc": "Short description"
				},
				"msg"],
			["",
				"spn#type.fs80"],
			"<div id=\"isapp\">",
			{
				"rowCss": "my-row mt-2"
			},
			["",
				"<span class=\"fs85 gray\">State mask:</span>",
				"txt#maskstate",
				{
					"plc": "String reference or JSON obj/array mask"
				},
				"msg"],
			{
				"rowCss": "my-row pt10"
			},
			["Title node",
				"inp#nodetitle.fs90",
				{
					"plc": "Like item.title"
				},
				"msg"],
			["Widths",
				"inp#width.fs90",
				{
					"plc": "Like 800,1200"
				},
				"msg"],
			["Timeout",
				"inp#timeout.fs90.w70",
				{
					"plc": "Start in"
				},
				"<span class=\"gray fs90\"> ms</span>"],
			"<div id=\"iseditor\">",
			["Doc node",
				"inp#nodedoc.fs90",
				"msg"],
			["Cmd node",
				"inp#nodecmd.fs90",
				"msg"],
			{
				"rowCss": "my-row pt7"
			},
			["",
				"spn#btn-addcmd.pseudolink.fs85",
				{
					"txt": "Add type/command..."
				}],
			["",
				"<div id=\"cmd\"></div>"],
			"</div>",
			"</div>",
			"<div id=\"xpreview\" class=\"w200 oh ha mt10 mb10\" style=\"max-height:125px\">",
			"<img id=\"ico\" src=\"\" class=\"fr hide br2 ml8\" style=\"max-width:32px;max-height:32px\"/>",
			"<img id=\"pic\" src=\"\" class=\"fr hide br2\" style=\"max-width:85px;max-height:85px\"/>",
			"<span id=\"btn-addpic\" class=\"fs85 pseudolink dib vat lh120\">Add component image...</span>",
			"</div>"]
	},
	"style": {
		" #cmcont .CodeMirror": "height:auto;line-height:1.4em;",
		" #xmanifesto .CodeMirror": "height:auto;line-height:1.4em;",
		" .maned": function ($o) {

			return "width:"+($o.width()<1300?"950":"1100")+"px!important;"
		
				}
	}
},
{
	"id": "cw.Manifest.Editor",
	"GetTabHash": function (item, idx) {
		return $.my.f.sdbmCode(item)
		},
	"GetTabId": function (e) {
		return e.stamp || e.id
		},
	"Postfix": function () {
		return {}
		},
	"Prefix": function () {
		return {}
		},
	"init": function ($form, form) {
	
	var d = form.data, that = this;
	
	$form.html(this.HTML);	

	this.js2txt = cw.lib.js2txt;
	
	$.extend (this.Ed, {NewTab: Object.clone(this.NewTab, true), Types: this.Types});
	
	$.extend(this.Tab, {Types: this.Types});

	if (this.Mode.saveToLs) {
		// Saved?
		var ls = localStorage, old = ls.getItem("Manifesto");
		if (old) Object.merge(d, JSON.parse(old));
		// localStorage saver
		$form.then(function(){
			$form.on("change", function (){
				ls.setItem("Manifesto", JSON.stringify($form.my("data")));
			}.debounce(500));
		});
	}
	
	if (d._preview!==void 0) delete d._preview;
	
	if (!d.com) d.com = [];
	d.com = d.com.map(function(e){
		if (!Object.isObject(e) || !e.id || !("data" in e)) return null;
		if (!that.Types[e.type]) e.type="text";
		return e;
	}).compact(true);
	if (!d.com.length) {
		d.com.push(Object.clone(this.Item, !0));
		d.com[0].stamp = Date.now()+"";
		d.com[0].data = that.NewAppSrc;
	}
	
	d._src="";
	
	var act = d.com.find(function(e){return e.active}) || d.com[0];
	act.active = true;
	this.Editors.push(act);	
	
	$form.on("removetab.my", function(evt, data){
		var t = d.com, e = that.Editors;
		t.removeAt(t.indexOf(data));
		e.removeAt(e.indexOf(data));
		t[0].active=true;
		
		$form.find("#coms,#eds").trigger("recalc");
	});
	
		
		},
	"HTML": "<!-- btns -->\n<div id=\"cmd\" class=\"buttons fr fs85\">\n\t<button  id=\"btn-opts\" class=\"button btnl\"><span \n\t\tclass=\"fi-wrench\"></span></button><button \n\t\tid=\"btn-compile\" class=\"button validate\"><span \n\t\tclass=\"fi-shopping-bag\"></span></button><button \n\t\tid=\"btn-run\" class=\"button btnr green pl10 pr10 validate\"><span \n\t\tclass=\"fi-play\"></span></button>\n</div>\n<!-- tabs -->\n<div id=\"coms\" class=\"gray\">\n\t<div class=\"tab dib vat\">\n\t\t\t<span id=\"xtitle\">\n\t\t\t\t<span id=\"title\" class=\"\"></span>\n\t\t\t</span>\n\t\t\t<span class=\"ctype\"></span>\n\t</div>\n</div>\n<span class=\"fi-plus fs90 p5 pseudolink tdn\" id=\"btn-add\"></span>\n<!-- editors -->\n<div id=\"eds\" class=\"cb\"></div>\n<!-- hidden -->\n<div id=\"warnM\" class=\"hide\"></div>",
	"NewAppSrc": "// More detailed manifest structure description \n// read at http://jquerymy.com/api/\n({\n\tparams:{},\n\tdata:{\n\t\t// Data to bind with controls,\n\t\t// freeform like \n\t\t// { type:\"box\", size:{x:\"7\", y:\"5\"}, count:\"6\" }\n\t},\n\tinit: function ($form, form) {\n\t\t// Init function, executed before controls init.\n\t\t// Renders ui skeleton and prepares data if needed.\n\t\t// Any init function can return promise to become async.\n\t},\n\tui:{\n\t\t/*\n\t\t\"#someControl\":{\n\t\t\tbind:\"size.x\",\n\t\t\tcheck:/someRegexp/\n\t\t}, ...\n\t\t*/\n\t},\n\tstyle:{\n\t\t/*\n\t\t// Creates runtime stylesheet with rules\n\t\t// selective for manifest, like\n\t\t\t\" .red\":\"color:red\",\n\t\t\t\" .item\":{\n\t\t\t\t\" .red\":\"color:#c02\"\n\t\t\t}\n\t\t*/\n\t}\n})",
	"require": [{
			"_": "lib/underscore.js",
			"UglifyJS": "lib/uglify.js"
		},
		{
			"JSHINT": "lib/jshint.js"
		}],
	"data": {
		"_src": "",
		"com": [],
		"_err": [],
		"_opts": {
			"runWidth": "800",
			"runCss": "",
			"runId": "manifest-preview",
			"compileTo": ["js"],
			"runMode": ["modal"]
		}
	},
	"Item": {
		"stamp": 0,
		"id": "Root",
		"type": "js",
		"data": "({})",
		"active": true,
		"opts": []
	},
	"Mode": {
		"saveToLs": false,
		"previewParent": "#cw-body",
		"fullscreenStyle": "padding:50px; min-width:150px;"
	},
	"Editors": [],
	"ui": {
		"#btn-opts": function (d,v,$o) {

		if (v!=null) {
			$o.modal({
				manifest: this.Settings,
				data:Object.clone(d._opts,true),
				width:500,
				esc:true,
				enter:true,
				global:true,
				screen:true
				//align:"top:-3px;right:-3px"
			}).then(function(r){
				Object.merge(d._opts,r,true)
			})
		}
	
			},
		"#btn-run": function (d,v,$o) {

	var $r, $e, $p, dui, ref, doc, parentapp, _prefix, that=this, runnow=true;
	if (v!=null) {
		if (d._err.length) cw.lib.note(d._err.join("<br>"),"error");
		else {
			$r = $o.my().root;
			if ($r) dui = $r.my().dui;
			
			if (dui) {
				ref = dui.bind.split(".").to(-1).join(".");
				doc = $.my.f.getref($r.my().ddata, ref);
				if (doc && Object.isObject(doc._attachments) && Object.size(doc._attachments)) {
					// try read attaches
					parentapp = $r.my().root.data("app");
					if (parentapp && parentapp.db && parentapp.db.load) {
						runnow = false;
						parentapp.db.load(doc._id, true)
						.then(function(res){
							if (res._attachments) _prefix = {files:res._attachments};
							_runPreview();
						})
					} 
				}	
			} 
			if (runnow) _runPreview();
		}
	}
	
	function _runPreview(){ 
		// Preview in modal
		if (d._opts.runMode=="modal") {
			$o.parents(".cw-app").eq(0).modal({
				root:$("#cw-body"),
				manifest: that.Preview,
				data:{
					_opts:d._opts,
					_src:that._preview,
					_prefix:_prefix
				},
				width:d._opts.runWidth||1000,
				esc:true,
				global:false,
				screen:false,
				drag:true
			}).then(function(r){
				//Object.merge(d._opts,r,true)
			})
			/*.fail(function(res){
				cw.lib.note("Preview failed to init. "
					+"See console for details", "error");
			});*/
		}

		// Preview fullscreen
		else if (d._opts.runMode=="fullscreen") {
			$p = $(that.Mode.previewParent||"body");
			$p.find(">*:visible")
			.addClass("hide my-manifesto-preview-hide");
			$e = $(
				'<div class="my-manifesto-preview-run db" '
				+'style="'+that.Mode.fullscreenStyle
				+';"></div>'
			);

			$e.appendTo($p)
			.my(that.Preview, {
				_opts:d._opts,
				_src:that._preview,
				_prefix:_prefix
			}).fail(function(){
				cw.lib.note("Preview failed to init. "
										+"See console for details", "error");
				_kill();
			}.debounce(50));
			$e.on("cancel.my", _kill.debounce(50));

		}
	}
	
	function _kill (){
		try {
			$e.my("remove");
		} catch (e) {}
		$e.unbind(".my");
		$e.remove();
		$p.find(".my-manifesto-preview-hide")
		.removeClass("hide my-manifesto-preview-hide");
	}
			
			},
		"#coms": {
			"bind": "com",
			"check": true,
			"init": function ($o , form) {

			var d = form.data,
					that = this;

			$o.sortable({handle:"#xtitle"});

			$o.on("switch.my", function(evt, data){	
				var $f = $(this).my().root,  e = that.Editors, i = 0;			
				for (;i<d.com.length;i++) d.com[i].active=!1;
				data.active = !0;	
				if (e.indexOf(data)===-1) e.unshift(data);
				return false;
			});
		
				},
			"manifest": "Tab",
			"hash": "GetTabHash",
			"id": "GetTabId",
			"list": ">div",
			"delay": 20,
			"css": {
				"fs90 lh160 mb10": function (d) {

				return d.com.length>25;
			
					}
			}
		},
		"#eds": {
			"bind": "this.Editors",
			"watch": "#coms",
			"recalc": "#coms",
			"recalcDepth": 1,
			"manifest": "Ed",
			"hash": "GetTabHash",
			"id": "GetTabId",
			"list": "<section></section>",
			"delay": 100
		},
		"#btn-add": {
			"bind": function (d,v,$o) {

			var that=this;
			if (v!=null) {
				if (!$o.data("modal")) $o.modal({
					manifest:this.NewTab,
					data:{},
					esc: true,
					enter:true,
					root:$o.parent(),
					align:"top:100%",
					bound:0,
					css:"mt10", 
					nose:"top",
					screen:'rgba(255,255,255,0.5)'
				}, function (e){ 
					return !!(e && Object.size(e)) 
				}).then(function(r){
					$o.my("find","#coms").trigger("insert", {
						where:1e6,
						what:r.result
					})
				});
				else $o.modal(true);
			}
		
				},
			"events": "click.my"
		},
		"#btn-compile": {
			"bind": function (d,v,$o) {

		var that = this;
		if (v!=null) {
			if (d._err.length) cw.lib.note(d._err.join("<br>"),"error");
			else {
				$o.modal({
					manifest: this.Compiler,
					data:{
						_src:that._src,
						opts:d._opts.compileTo
					},
					width:$o.my().root.width(),
					esc:true,
					enter:true,
					global:true,
					screen:true
				}).then(function(r){
					d._opts.compileTo=r.opts.slice(0);
				})

			}
		}
	
				}
		},
		"#warnM": {
			"bind": function (d,v,$o) {

		var opts = this.Types, that=this,
				err=[], r={}, p={}, 
				row, ext, conv, a;
		if (Object.isFunction(that.Prefix)) $.extend(true, r, that.Prefix());
		$.extend(true, p, r);

		for (var i=0;i<d.com.length;i++) {
			row = d.com[i];
			ext = {}, ins={};
			
			conv = opts[row.type].compile || function(s){return [[], s||""];};
			a = conv(row.data);
			
			if (a[0].length) err.push("Invalid ‘"+row.id+"’. "+a[0].join("; ")+".");
			if (a[1]!==undefined) {
				if (row.id.to(1)===".") {
					ext=cw.lib.unmask(a[1], row.id.from(1));
				} else {
					ext = a[1];
				}
			}
			
			Object.merge(p, ext, true);
			if (!row.opts || row.opts.indexOf("nocompile")===-1) Object.merge(r, ext, true);
		}
		
		if (Object.isFunction(that.Postfix)) {
			var tmp = that.Postfix()||{}
			$.extend(true, p, tmp);
			$.extend(true, r, tmp);
		}
		
		d._err = err;
		
		that._src = "("+this.js2txt(r,'\t')+")";;
		//d._src = "("+this.js2txt(r,'\t')+")";
		//d._src = this.js2txt(r,'\t');
				
		that._preview = "("+this.js2txt(p,'\t')+")";
		
		if (err.length) $o.my("find",".validate").addClass("red");
		else $o.my("find",".validate").removeClass("red");
		
		$o.trigger("change");
	
				},
			"watch": "#coms",
			"delay": 300
		}
	},
	"Tab": {
		"ui": {
			"#xtitle": {
				"watch": "#title",
				"css": {
					"active": function (d) {
						 return d.active 
						},
					"bold fs105": function (d) {
						 return (d.id||"").to(1)!=="."
						},
					"itl": function (d) {
						 return (d.opts||[]).indexOf("nocompile")>-1
						},
					"red": function (d) {
						return d.err && d.err.length
						}
				}
			},
			"#title": {
				"bind": function (d,v,$o) {

				if (null != v && !d.active) $o.trigger("switch", d);
				return d.id;
			
					},
				"events": "click.my",
				"init": function ($o, form) {

				var d = form.data;
				$o.on("dblclick.my", function(){	
					if (d.err && d.err.length && d.active) {
						cw.lib.note("Tab errors:<br>"+d.err.join("<br>"), "error");
					} 
				})
				.parent().parent().find(".ctype")
				.addClass(this.Types[d.type].css||"hide");
			
					}
			}
		}
	},
	"Ed": {
		"id": "cw.Manifesto.CM",
		"init": function ($o, form) {

		$o.html([
			'<div style="position:absolute;top:7px;right:7px;z-index:+5">',
			'<button  id="btn-opts" class="button fs90"><span '
				+'class="fi-widget"></span></button>',
			'</div>',
			'<div>',
			'<textarea id="cm"></textarea>',
			'</div>',
			'<div class="warn hide"></div>'
		].join(""))
		//console.log(form)
	
			},
		"ui": {
			"#cm": {
				"bind": "data",
				"init": function ($o, form) {

			var opts = this.Types[form.data.type];
			CodeMirror.fromTextArea($o[0], {
				mode:opts.CM.mode,
				lineNumbers:true,
				indentWithTabs:!0,
				indentUnit:2,
				tabSize:2,
				theme: opts.CM.theme||"default"
			});
		
					},
				"delay": 50,
				"css": {
					"hide": function (d) {
						return !d.active
						}
				}
			},
			"#btn-opts": {
				"bind": function (d,v,$o) {

			if (null!=v) {
				$o.modal({
					manifest: Object.merge(
						this.NewTab,
						{
							Opts:{apply:"Save", title:"Tab settings", del:"Del tab"},
							style:{" #xtype":"display:none;"}
						}
					),
					data:{result:Object.clone(d,true)},
					width:400,
					align:"top:0px,right:0px", css:"fs90", xnose:"top"
				}).then(function(r){
					if (r.op === "Del") {
						$o.trigger("removetab", d);
						//$o.trigger("remove");	
					} else if (r.op === "Save") {
						Object.merge(d, Object.reject(r.result, ["data","stamp","type"]));
						$o./*my("find",".warn").*/trigger("change");
					}
				}.debounce(50));
			}
			if (d.id.to(1)!==".") $o.addClass("hide");
		
					}
			},
			".warn": {
				"bind": function (d,v,$o) {

			var  row = d, ext = {}, ins={}, err=[];

			var $r, cmp = this.Types[d.type].compile,
					a = cmp?cmp(d.data):[[], d.data],
					err=a[0].slice(0);

			if ((d.err||[]).length!=err.length) {
				d.err = err;
				$o.trigger("change");
			}
			else d.err = err;
			$r = $o.my().root;
			$r.toggleClass("hide", !d.active);
			$r.toggleClass("ed-error", !!err.length);
			
		
					},
				"watch": "#cm",
				"delay": 100
			}
		},
		"style": {
			" #btn-opts": "border-radius:100px;padding:5px 7px;transition: opacity 0.3s;opacity:0.5;margin:0px!important;line-height:0.95em;",
			" #btn-opts:hover": "opacity:1;",
			" .CodeMirror ": function ($o) {

			var ofs = $("#cw-header").is(":visible")?$("#cw-header").outerHeight(true):0,
					pad = parseInt($("#cw-space").css("paddingTop")) || 0,
					tab = $o.parents(".my-manifest-1a9u4bgu").find("#coms").outerHeight(true),
					css = "height:"+($(window).height()-(pad+ofs+tab+15))+"px;";
			return css;
		
				}
		}
	},
	"NewTab": {
		"init": function ($o , form) {

		$o.formgen(this.HTML);
		form.data.result.stamp = form.data.result.stamp || (Date.now()+"");
	
			},
		"params": {
			"width": 400
		},
		"Opts": {
			"apply": "Create",
			"title": "New tab"
		},
		"data": {
			"op": "Save",
			"root": {
			},
			"result": {
				"stamp": 0,
				"id": "",
				"type": "js",
				"data": "",
				"active": false,
				"err": [],
				"opts": []
			}
		},
		"ui": {
			"input[name=\"opts\"]": "result.opts",
			"#btn-cancel": function (d,v,$o) {

			if (v!=null) $o.trigger("cancel");
		
				},
			"#btn-apply": function (d,v,$o) {

			if (v!=null) $o.trigger("commit");
			return this.Opts.apply;
		
				},
			"#title": "this.Opts.title",
			"#id": {
				"bind": function (d,v,$o) {

				if (v!=null) {
					if (d.result.type=="js") d.result.data = "({\n\n})";
					if (d.result.type=="html") d.result.data = "<div>\n\n</div>";
					d.result.id=v;

				}
				return d.result.id;
			
					},
				"check": /^(\.[^\.\s\t\r\n]+)+\.?$/i,
				"error": "Branch name like .Branch or .Branch.Leaf",
				"delay": 100
			},
			"#type": {
				"bind": "result.type",
				"init": function ($o) {

				$o.select2();
			
					},
				"watch": "#id"
			},
			"#btn-del": {
				"bind": function (d,v,$o) {

				if (v!=null) {
					d.op = "Del";
					$o.trigger("commit");
				}
				return this.Opts.del||"";
			
					},
				"css": {
					"hide": function () {
						return !this.Opts.del
						}
				}
			}
		},
		"HTML": ["<h3 id=\"title\"></h3>",
			{
				"row": "400px",
				"label": "0px",
				"rowCss": "my-row pt10 pb2"
			},
			["",
				"inp#id.fs120",
				{
					"plc": "Property name"
				},
				"msg"],
			["",
				"<span id=\"xtype\" class=\"mr20\">",
				"sel#type.w140",
				{
					"vals": ["js",
						"html",
						"text",
						"css"]
				},
				"</span><span>",
				"<label class=\"fs80 xgray dib\">",
				"<input type=\"checkbox\" value=\"nocompile\" name=\"opts\"/>",
				" Preview only</label>"],
			{
				"rowCss": "my-row mt15 pt15 btd"
			},
			["",
				"btn#btn-apply.green.mr5",
				{
					"val": "Create tab"
				},
				"<span class=\"fr\">",
				"btn#btn-del.red.mr0",
				{
					"val": "Delete"
				},
				"</span>",
				"btn#btn-cancel",
				{
					"val": "Cancel"
				}]],
		"style": {
		}
	},
	"Settings": {
		"init": function ($o) {
			 $o.formgen(this.HTML); 
			},
		"data": {
			"runWidth": "500",
			"runCss": "",
			"runId": "manifest-preview",
			"compileTo": ["js"],
			"runMode": ["modal"]
		},
		"params": {
			"width": 500
		},
		"ui": {
			"#runwidth": "runWidth",
			"#runcss": "runCss",
			"#runid": "runId",
			"#btn-apply": function (d,v,$o) {
				if (null!=v) $o.trigger("commit");
				},
			"#btn-cancel": function (d,v,$o) {
				if (null!=v) $o.trigger("cancel");
				},
			"#runmode": {
				"bind": "runMode",
				"init": function ($o) {

				$o.tags({
					tags:[[
						//{"Inline":"inline"},
						{"Fullscreen":"fullscreen"}
					]], 
					empty:{"Modal":"modal"}
				})
			
					}
			},
			"#compileto": {
				"bind": "compileTo",
				"init": function ($o, form) {

				$o.tags({tags:[[
					{"JS min":"jsmin"},
					{"JSON":"json"},
					{"JSON min":"cjson"}
					//{"Apply over...":"selector"}
				]], empty:{"JS object":"js"}})
			
					}
			}
		},
		"HTML": [{
				"row": "500px",
				"label": "120px",
				"rowCss": "my-row pt15 fs90"
			},
			"<h3>Form’s settings</h3>",
			["Compile mode",
				"spn#compileto.fs90"],
			["Preview mode",
				"spn#runmode.fs90"],
			["Preview CSS",
				"inp#runcss.fs90"],
			["Preview id",
				"inp#runid.fs90.w150"],
			["Preview width",
				"inp#runwidth.fs90.w100",
				"<small> px</small>"],
			{
				"rowCss": "my-row pt15 mt25 btd fs90"
			},
			["",
				"btn#btn-apply.green.mr5",
				{
					"val": "Save"
				},
				"btn#btn-cancel",
				{
					"val": "Cancel"
				}]]
	},
	"Compiler": {
		"init": function ($o) {
			 $o.formgen(this.HTML); 
			},
		"Stats": 0,
		"Critic": function (content) {


	var globalVarsToIgnore = [
		'Array', 'Boolean', 'Date', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'Error', 'eval', 'EvalError', 'Function', 'hasOwnProperty', 'isFinite', 'isNaN', 'JSON', 'Map', 'Math', 'NaN', 'Number', 'Object', 'parseFloat', 'parseInt', 'RangeError', 'ReferenceError', 'RegExp', 'Set', 'String', 'SyntaxError', 'TypeError', 'URIError', 'WeakMap'

		, 'addEventListener', 'applicationCache', 'atob', 'Audio', 'Blob', 'blur', 'btoa', 'CanvasGradient', 'CanvasPattern', 'CanvasRenderingContext2D', 'clearInterval', 'clearTimeout', 'close', 'closed', 'CustomEvent', 'defaultStatus', 'document', 'DOMParser', 'Element', 'ElementTimeControl', 'event', 'FileReader', 'focus', 'FormData', 'frames', 'getComputedStyle', 'history', 'HTMLAnchorElement', 'HTMLBaseElement', 'HTMLBlockquoteElement', 'HTMLBodyElement', 'HTMLBRElement', 'HTMLButtonElement', 'HTMLCanvasElement', 'HTMLDirectoryElement', 'HTMLDivElement', 'HTMLDListElement', 'HTMLElement', 'HTMLFieldSetElement', 'HTMLFontElement', 'HTMLFormElement', 'HTMLFrameElement', 'HTMLFrameSetElement', 'HTMLHeadElement', 'HTMLHeadingElement', 'HTMLHRElement', 'HTMLHtmlElement', 'HTMLIFrameElement', 'HTMLImageElement', 'HTMLInputElement', 'HTMLIsIndexElement', 'HTMLLabelElement', 'HTMLLayerElement', 'HTMLLegendElement', 'HTMLLIElement', 'HTMLLinkElement', 'HTMLMapElement', 'HTMLMenuElement', 'HTMLMetaElement', 'HTMLModElement', 'HTMLObjectElement', 'HTMLOListElement', 'HTMLOptGroupElement', 'HTMLOptionElement', 'HTMLParagraphElement', 'HTMLParamElement', 'HTMLPreElement', 'HTMLQuoteElement', 'HTMLScriptElement', 'HTMLSelectElement', 'HTMLStyleElement', 'HTMLTableCaptionElement', 'HTMLTableCellElement', 'HTMLTableColElement', 'HTMLTableElement', 'HTMLTableRowElement', 'HTMLTableSectionElement', 'HTMLTextAreaElement', 'HTMLTitleElement', 'HTMLUListElement', 'HTMLVideoElement', 'Image', 'length', 'localStorage', 'location', 'matchMedia', 'MessageChannel', 'MessageEvent', 'MessagePort', 'MouseEvent', 'moveBy', 'moveTo', 'MutationObserver', 'name', 'navigator', 'Node', 'NodeFilter', 'onbeforeunload', 'onblur', 'onerror', 'onfocus', 'onload', 'onresize', 'onunload', 'open', 'openDatabase', 'opener', 'Option', 'parent', 'print', 'removeEventListener', 'resizeBy', 'resizeTo', 'screen', 'scroll', 'scrollBy', 'scrollTo', 'sessionStorage', 'setInterval', 'setTimeout', 'SharedWorker', 'status', 'SVGAElement', 'SVGAltGlyphDefElement', 'SVGAltGlyphElement', 'SVGAltGlyphItemElement', 'SVGAngle', 'SVGAnimateColorElement', 'SVGAnimatedAngle', 'SVGAnimatedBoolean', 'SVGAnimatedEnumeration', 'SVGAnimatedInteger', 'SVGAnimatedLength', 'SVGAnimatedLengthList', 'SVGAnimatedNumber', 'SVGAnimatedNumberList', 'SVGAnimatedPathData', 'SVGAnimatedPoints', 'SVGAnimatedPreserveAspectRatio', 'SVGAnimatedRect', 'SVGAnimatedString', 'SVGAnimatedTransformList', 'SVGAnimateElement', 'SVGAnimateMotionElement', 'SVGAnimateTransformElement', 'SVGAnimationElement', 'SVGCircleElement', 'SVGClipPathElement', 'SVGColor', 'SVGColorProfileElement', 'SVGColorProfileRule', 'SVGComponentTransferFunctionElement', 'SVGCSSRule', 'SVGCursorElement', 'SVGDefsElement', 'SVGDescElement', 'SVGDocument', 'SVGElement', 'SVGElementInstance', 'SVGElementInstanceList', 'SVGEllipseElement', 'SVGExternalResourcesRequired', 'SVGFEBlendElement', 'SVGFEColorMatrixElement', 'SVGFEComponentTransferElement', 'SVGFECompositeElement', 'SVGFEConvolveMatrixElement', 'SVGFEDiffuseLightingElement', 'SVGFEDisplacementMapElement', 'SVGFEDistantLightElement', 'SVGFEFloodElement', 'SVGFEFuncAElement', 'SVGFEFuncBElement', 'SVGFEFuncGElement', 'SVGFEFuncRElement', 'SVGFEGaussianBlurElement', 'SVGFEImageElement', 'SVGFEMergeElement', 'SVGFEMergeNodeElement', 'SVGFEMorphologyElement', 'SVGFEOffsetElement', 'SVGFEPointLightElement', 'SVGFESpecularLightingElement', 'SVGFESpotLightElement', 'SVGFETileElement', 'SVGFETurbulenceElement', 'SVGFilterElement', 'SVGFilterPrimitiveStandardAttributes', 'SVGFitToViewBox', 'SVGFontElement', 'SVGFontFaceElement', 'SVGFontFaceFormatElement', 'SVGFontFaceNameElement', 'SVGFontFaceSrcElement', 'SVGFontFaceUriElement', 'SVGForeignObjectElement', 'SVGGElement', 'SVGGlyphElement', 'SVGGlyphRefElement', 'SVGGradientElement', 'SVGHKernElement', 'SVGICCColor', 'SVGImageElement', 'SVGLangSpace', 'SVGLength', 'SVGLengthList', 'SVGLinearGradientElement', 'SVGLineElement', 'SVGLocatable', 'SVGMarkerElement', 'SVGMaskElement', 'SVGMatrix', 'SVGMetadataElement', 'SVGMissingGlyphElement', 'SVGMPathElement', 'SVGNumber', 'SVGNumberList', 'SVGPaint', 'SVGPathElement', 'SVGPathSeg', 'SVGPathSegArcAbs', 'SVGPathSegArcRel', 'SVGPathSegClosePath', 'SVGPathSegCurvetoCubicAbs', 'SVGPathSegCurvetoCubicRel', 'SVGPathSegCurvetoCubicSmoothAbs', 'SVGPathSegCurvetoCubicSmoothRel', 'SVGPathSegCurvetoQuadraticAbs', 'SVGPathSegCurvetoQuadraticRel', 'SVGPathSegCurvetoQuadraticSmoothAbs', 'SVGPathSegCurvetoQuadraticSmoothRel', 'SVGPathSegLinetoAbs', 'SVGPathSegLinetoHorizontalAbs', 'SVGPathSegLinetoHorizontalRel', 'SVGPathSegLinetoRel', 'SVGPathSegLinetoVerticalAbs', 'SVGPathSegLinetoVerticalRel', 'SVGPathSegList', 'SVGPathSegMovetoAbs', 'SVGPathSegMovetoRel', 'SVGPatternElement', 'SVGPoint', 'SVGPointList', 'SVGPolygonElement', 'SVGPolylineElement', 'SVGPreserveAspectRatio', 'SVGRadialGradientElement', 'SVGRect', 'SVGRectElement', 'SVGRenderingIntent', 'SVGScriptElement', 'SVGSetElement', 'SVGStopElement', 'SVGStringList', 'SVGStylable', 'SVGStyleElement', 'SVGSVGElement', 'SVGSwitchElement', 'SVGSymbolElement', 'SVGTests', 'SVGTextContentElement', 'SVGTextElement', 'SVGTextPathElement', 'SVGTextPositioningElement', 'SVGTitleElement', 'SVGTransform', 'SVGTransformable', 'SVGTransformList', 'SVGTRefElement', 'SVGTSpanElement', 'SVGUnitTypes', 'SVGURIReference', 'SVGUseElement', 'SVGViewElement', 'SVGViewSpec', 'SVGVKernElement', 'SVGZoomAndPan', 'TimeEvent', 'top', 'URL', 'WebSocket', 'window', 'Worker', 'XMLHttpRequest', 'XMLSerializer', 'XPathEvaluator', 'XPathException', 'XPathExpression', 'XPathNamespace', 'XPathNSResolver', 'XPathResult'

		, 'escape', 'unescape'

		// added on top of JSHint
		, 'Int8Array', 'Int16Array', 'Int32Array'

		, 'Uint8Array', 'Uint16Array', 'Uint32Array', 'Uint8ClampedArray'

		, 'Float32Array', 'Float64Array'

		, 'ArrayBuffer'

		, 'ActiveXObject', 'console', 'define', 'exports', 'module', 'performance', 'requestAnimationFrame', 'require', 'self'
	];

	JSHINT(content, {
		browser: true,
		es3: true,
		freeze: true,
		maxerr: 10000,
		undef: true,
		funcscope: true
	});

	var result = JSHINT.data();
	var jscriticResult = {};


	(result.globals || []).forEach(function(name) {
		if (name === 'navigator') {
			// pretty weak sauce but what can we do...
			var index = content.indexOf('navigator.userAgent');
			if (index > -1) {
				jscriticResult.hasBrowserSniff = true;
				jscriticResult.browserSniffExcerpt =
					'\n...' +
					content.slice(index - Math.min(500, index), index + 500) +
					'...\n';
			}
		}
	});

	jscriticResult.extendedNatives = [];
	(result.errors || []).forEach(function(e) {
		if (e.code === 'W121') {
			jscriticResult.doesExtendNative = true;
			jscriticResult.extendedNatives.push(e.a);
		}
	});

	jscriticResult.extendedNatives = _.unique(jscriticResult.extendedNatives);

	(result.errors || []).forEach(function(e) {
		if (e.code === 'W060') {
			jscriticResult.hasDocumentWrite = true;
		}
	});

	(result.errors || []).forEach(function(e) {
		if (e.code === 'W061' || e.code === 'W054') {
			jscriticResult.hasEval = true;
			jscriticResult.evalExcerpt = e.evidence;
		}
	});

	(result.errors || []).forEach(function(e) {
		if (e.code === 'W119') {
			jscriticResult.doesUseES6 = true;
		}
	});

	jscriticResult.mozillaOnlyFeatures = [];

	(result.errors || []).forEach(function(e) {
		if (e.code === 'W118') {
			jscriticResult.hasMozillaOnlyFeatures = true;
			jscriticResult.mozillaOnlyFeatures.push(e.a);
		}
	});

	jscriticResult.mozillaOnlyFeatures = _.unique(jscriticResult.mozillaOnlyFeatures);

	jscriticResult.ieIncompats = [];
	(result.errors || []).forEach(function(e) {
		if (e.code === 'W070' /* last comma */ ||
				e.code === 'E034' /* getters/setters */ ) {
			jscriticResult.hasIEIncompat = true;
			jscriticResult.ieIncompats.push(e.reason.match(/[^\.]*/)[0]);
		}
	});

	jscriticResult.ieIncompats = _.unique(jscriticResult.ieIncompats);

	var globals = _.difference(_.unique(result.globals || []), globalVarsToIgnore);

	var leakedVars = [];
	(result.errors || []).forEach(function(e) {
		if (e.code === 'W117' || e.code === 'W120') {
			jscriticResult.doesLeakVars = true;
			leakedVars.push(e.a);
		}
	});

	jscriticResult.realLeakedVars = _.difference(_.unique(leakedVars), globalVarsToIgnore);

	jscriticResult.realGlobals = globals.concat(jscriticResult.realLeakedVars);

	jscriticResult.unused = _.unique((result.unused || []).map(function(o) {
		return o.name;
	}));


	return jscriticResult;

			
			},
		"About": {
		},
		"ui": {
			"#btn-apply": function (d,v,$o) {
				if (null!=v) $o.trigger("commit");
				},
			"#btn-cancel": function (d,v,$o) {
				if (null!=v) $o.trigger("cancel");
				},
			"#opts": {
				"bind": function (d,v,$o) {

				var jsmin = cw.lib.jsmin, toj = $.my.tojson;
				if (v!=null) {
					var i = v+"";
					if (i == "json") d.src = toj(eval(jsmin(d._src)), '\t');
					else if (i == "cjson") d.src = toj(eval(jsmin(d._src)));
					else if (i == "jsmin") d.src = jsmin(d._src);
					else if (i == "uglify") {
						// compress and uglify 
						var u = UglifyJS,
								ast = u.parse(d._src);
						ast.figure_out_scope();
						ast = ast.transform(u.Compressor({side_effects  : false}));
						ast.figure_out_scope();
						ast.compute_char_frequency();
						ast.mangle_names();
						d.src = ast.print_to_string().replace(/;$/,'');
					}
					else d.src=d._src;
					this.Stats = unescape(encodeURIComponent(d.src)).length;
					this.About = this.Critic(/json$/.test(i)?d._src:d.src);
					d.opts = v;
				}
				return d.opts;
			
					},
				"init": function ($o, form) {

				$o.tags({tags:[[
					{"JS min":"jsmin"},
					{"JS ugly":"uglify"},
					{"JSON":"json"},
					{"JSON min":"cjson"}
					//{"Apply over...":"selector"}
				].compact()], empty:{"JS object":"js"}})
			
					}
			},
			"#critic": {
				"bind": function (d,v,$o) {

				var a=[];
				a.push( '<span class="gray fs90 w90 dib">Globals</span> '+((this.About.realGlobals||[]).join(", ")||"—") );
				
				a.push( '<span class="gray fs90 w90 dib">Ok for IE8</span> '+(this.About.hasIEIncompat?"No (orphan commas or getters)":"Yes") );
				
				return a.join("<br>");
			
					},
				"watch": "#opts"
			},
			"#src": {
				"init": function ($o) {

				CodeMirror.fromTextArea($o[0], {
					mode:"javascript",
					lineNumbers:false,
					indentWithTabs:!0,
					indentUnit:2,
					tabSize:2,
					theme:"default",
					readOnly:true,
					lineWrapping:true
				});
			
					},
				"bind": "src",
				"watch": "#opts"
			},
			"#stats": {
				"bind": function () {

				return "Code is "+(this.Stats||0).bytes(2)+" long."
			
					},
				"watch": "#opts"
			}
		},
		"style": {
			" .CodeMirror": "font:13px 'PT Mono',Monaco,monospace;overflow:scroll; height:300px;line-height:1.3em;border:1px solid #cde;"
		},
		"HTML": ["<div id=\"stats\" class=\"fs80 gray fr mt3\"></div>",
			"<h3 class=\"dib vat mt0 mb15\">Manifest compiler</h3>",
			"<div class=\"fs85 ml20 dib vat mt3\">",
			"<span id=\"opts\"></span>",
			"</div>",
			"<div><textarea id=\"src\"></textarea></div>",
			{
				"rowCss": "my-row pt15 fs90 fr"
			},
			["",
				"btn#btn-apply.green.mr5",
				{
					"val": "Remember mode"
				},
				"btn#btn-cancel",
				{
					"val": "Cancel"
				}],
			"<div id=\"critic\" class=\"fs80 lh130 dib vat mt15 xgray\"></div>"]
	},
	"Preview": {
		"id": "cw.Manifesto.Preview",
		"init": function ($o, form) {

		var d=form.data, 
				p = d._opts, 
				m = d._src;
		this.Manifest = $.extend({},(d._prefix||{}),eval(d._src));
		$o.html(
			'<div id="btn-close" class="'
			+(p.runMode=="modal"?"hide":"")
			+'">×</div>'
			+'<div id="'+p.runId+'" class="'
			+p.runCss+'" style="margin:0 auto;width:'
			+d._opts.runWidth+'px"></div>'
		);
	
			},
		"data": {
			"_runtime": {
			}
		},
		"ui": {
			"#btn-close": {
				"bind": function (d,v,$o) {

				if (null!=v) {					
					if (/^(full|modal)/.test(d._opts.runMode+"")) {
						$o.trigger("cancel");
					} 
				}
			
					},
				"events": "click.my"
			},
			">div:eq(1)": {
				"bind": "_runtime",
				"manifest": "Manifest"
			}
		},
		"style": {
			">#btn-close": "position:absolute;top:0;right:0;cursor:pointer;z-index:+100;font-size:50px;line-height:1em; padding:0 10px;transition:color 0.3s; color:rgba(0,0,0,0.2);",
			">#btn-close:hover": "color:#c02"
		}
	},
	"Types": {
		"html": {
			"css": "fi-html5",
			"compile": null,
			"CM": {
				"mode": "htmlmixed",
				"theme": "base16-light"
			}
		},
		"text": {
			"compile": null,
			"CM": {
				"mode": ""
			}
		},
		"js": {
			"compile": function (s) {

			var err=[], res = null;
			try {
				// Eval is unsafe and resource-consuming
				//res = eval(s);
				
				// More safe way
				res = (new Function ("", "return ("+s+");"))();

			} catch (e) {
				err.push(e.message+".");
			}
			return err.length?[err, undefined]:[err,res];
		
				},
			"CM": {
				"mode": "javascript"
			}
		},
		"css": {
			"css": "fi-css3",
			"compile": function (css) {

			var err=[], res="";
			res = ((css+"")
			.replace(/\/\*[\s\S]+\*\//gm,"")
			.replace(/@charset[^;]+;/gim,'')
			.replace(/[\n\t\s]+/g,' ')
			.replace(/\}/g,'}⊻')
			.replace(/^\n+/g,"").replace(/[\n\s]+$/g,"")
			.split('⊻')
			.compact(true)
			.reduce(function(a,b){
				var t = b.trim(), p, k, v;
				if (/^[^{]+\{[^\}]+\}$/.test(t)) {
					p = t.to(-1).split("{");
					k = " "+p[0].trim();
					v = p[1].trim();
					if (v.last()!=";") v+=";";
					if (!a[k]) a[k]="";
					a[k]+=v;
				} else {
					err.push("Invalid rule "+t.truncate(40));
				}
				return a;
			},{}));
			return [err, res];
		
				},
			"CM": {
				"mode": "css",
				"theme": "base16-light"
			}
		}
	},
	"style": {
		"": "width:100%; margin-top:3px",
		" .CodeMirror": "font:13px 'PT Mono',Monaco,monospace;line-height:1.4em;",
		" button:focus": "outline:none;",
		" .itl": "font-style:italic;",
		" .itl:after": "content:\"*\";font-style:normal;margin-left:1px;",
		" #coms": {
			"": "float: left;margin-bottom: 15px;max-width: 85%;",
			" .tab": "margin-right:2px;",
			" #xtitle": "padding:4px 7px; cursor:move;",
			" #title": "cursor:pointer;",
			" .active": "background-color:rgba(142, 211, 255, 0.25);color:#3C5168;",
			" .active.red": "background-color:rgba(255, 200, 200, 0.75);",
			" .ctype": "font-size:80%; opacity:0.7; display:block;position:absolute;top:-8px;right:-5px;"
		},
		" #eds": {
			"": "border:1px solid #ddd; margin-top:10px;border-radius:2px",
			">xdiv": "height:0;overflow:hidden;",
			">xdiv:first-child": "height:auto;",
			" .CodeMirror-linenumbers": "transition: background-color 0.3s",
			" .ed-error .CodeMirror-linenumbers": "background-color:rgba(255, 200, 200, 0.75)"
		},
		" #cmd": {
			" .button": "margin:0 0 0 2px; border-radius:0; padding: 5px 8px;",
			" .btnl": "border-radius: 4px 0 0 4px;",
			" .btnr": "border-radius: 0 4px 4px 0;"
		}
	}
},
	

//######## End systaem manifests #########
].sortBy("id").forEach(function(e){cw.reg(e)});

})(cw, jQuery, PouchDB);