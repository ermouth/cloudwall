(function(){
	
	// CloudWall profile creator,
	// for standalone build
	
	// Loads default profile, gen keys
	// and starts app
	
	$.ajax({
		url:'profile.json',
		method:'GET',
		dataType:'json',
		headers:{accept:'application/json'},
		cache:false
	})
	.then(function(res){
		
		res.stamp = Date.now();
		res._id = 'cw';
		
		res.keys.forEach(function(key){
			if (!key.id) {
				key.id = cw.lib.hash8(Number.random(-1e13,1e13)+Date.now()+"");
				key.key = cw.lib.key16(Number.random(-1e13,1e13));
				key.stamp = Date.now();
			}
		});
		
		res.dbs.forEach(function(db){
			if (!db.stamp) db.stamp = Date.now();
		});
		
		return $("#cw-space").my(
			{
  "id": "cw.Sys.Profile.Create",
  "build": 62,
  "params": {
    "animate": 100,
    "effect": function ($e,onoff,duration) {
            if (onoff) { $e.slideDown(duration); return; }
            $e.slideUp(duration);
          
      }
  },
  "error": "Could not decrypt settings file",
  "Dbs": ["sysmanual"],
  "ui": {
    "#dburl": {
      "bind": function (d,v,$o) {
              var a;
              if (v!=null) {
                if (a = v.match(/^http[s]?:\/\/([a-z0-9\-]{1,63}:[^@]{1,63}@)/)) {
                  d.dburl = v.replace(a[1],'');
                  d.dblogin = a[1].split(":")[0];
                  d.dbpwd = a[1].split(":")[1].to(-1);
                }
                else {
                  d.dburl = v;
                }
              }
              return d.dburl;
            
        },
      "check": function (d,v) {
              if (!v.length) return "";
              if (!/^http[s]?:\/\/.+/.test(v)) return "URL required";
              if (!/^http[s]?:\/\/([a-z0-9\-]{1,63}:[^@]{1,63}@)?[a-z0-9\-]{1,63}(\.[a-z0-9\-]{1,63}){1,5}/.test(v)) 
                return "Invalid domain";
              if (!/.+\/[a-zA-Z0-9_\-\(\)]{1,200}$/.test(v)) return "No DB name provided";
              return "";
            
        }
    },
    "#dblogin": {
      "bind": "dblogin",
      "watch": "#dburl"
    },
    "#dbpwd": {
      "bind": "dbpwd",
      "watch": "#dburl"
    },
    "#btn-connect": {
      "delay": 50,
      "bind": function (d,v,$o) {
            var that = this,
                db = this.db, 
                edb,
                url, 
                creds = "";
            if (v!=null && $o.my().root.my('valid') ) {
              if (!d.dburl) return;
              if (d.dbpwd+d.dblogin && (!d.dbpwd || !d.dblogin)) {
                cw.lib.note("Both login and password required.");
                return;
              }
              creds = d.dblogin?d.dblogin+":"+d.dbpwd+"@":"";
              url = d.dburl.replace(/^(http[s]?:\/\/)(.+)$/,"$1"+creds+"$2");
              console.log("Trying to connect to the remote DB...")
              //try to connect
              edb = new this.Pouch(url, function (e,res) {
                var msg;
                if (e) {
                  msg=e.message;
                  console.log(e)
                  if (!msg) _fail("Can’t connect to DB.");
                  else if (msg==="missing") _fail("DB does not exist.");
                  else if (/not\sauth/.test(msg)) _fail("Authorization required.");
                  else if (/or\spass/.test(msg)) _fail("Name or password are incorrect.");
                  else _fail("Error connecting to DB.")
                    }
                else {
                  edb.get("cw", function (e,res) {
                    var msg;
                    if (e) {
                      msg=e.message;
                      if (!msg) _fail("Can’t connect to DB.");
                      else if (msg==="missing") _fail("DB or account does not exist.");
                      else if (/not\sauth/.test(msg)) _fail("Invalid credentials.");
                      else _fail("Error reading account.");
                    } else {
                      console.log("Read remote cw", res)
                      _process(res);
                    }
                  });
                }
              });
            }
            function _process (doc){
              if (!d.isnew && d.doc) {
                //delete all dbs
                var dbs = d.doc.dbs.map(function(e){return e.name});
                console.log(dbs);
                cw.crypto.init(doc)
                .then(function(){
                  //delete dbs
                  $.my.modal({
                    manifest:that.Confirm,
                    data:{
                      text:"Delete local DBs "+dbs.join(", ")+"?",
                      ok:"Proceed"
                    }
                  })
                  .then(function(r){
                    var db,
                        d1 = that.Settings(),
                        d2 = cw.crypto.enc(d1);
                    var _done = (function(){
                      _create();
                    }).after(dbs.length);
                    if (Object.isObject(r)) {
                      dbs.forEach(function(e){
                        that.Pouch.destroy(e, _done);
                      });
                    } else _fail("Cancelled.");
                    function _create(){
                      console.log("Creating account doc...")
                      db = new that.Pouch("cw", function(){                    
                        $.my.modal(
                          '<div class=" pt20 pb15 w350 tac blue">'
                          +'Reloading account, it can take a time. '
                          +'Please, wait.'
                          +'<br><div class="cw-busy w50 mt10"></div>'
                          +'</div>'
                          ,function(){},500);
                        db.replicate.from (url, {
                          complete:function (e, res){
                            console.log("Replication ", e,res);
                            window.location.reload();
                          }
                        });
                      });
                    }
                  })
                  .fail(function(){
                    _fail("Cancelled.")
                  });
                })
                .fail(function(){
                  _fail("Invalid PIN for received account.")
                });
              } else {
                //load doc and save
                db = new that.Pouch("cw", function(){
                  $.my.modal(
                    '<div class=" pt20 pb15 w350 tac blue">'
                    +'Loading account, it can take a time. '
                    +'Please, wait.'
                    +'<br><div class="cw-busy w50 mt10"></div>'
                    +'</div>'
                    ,function(){},500);
                  db.replicate.from (url, {
                    complete:function (e, res){
                      console.log("Replication ", e,res);
                      window.location.reload();
                    }
                  });
                });
              }
            }
            function _fail(msg){
              cw.lib.note(msg, "error");
            }
          
        },
      "events": "click.my"
    },
    "#aboutLink": {
      "bind": function () {
              return this.IntroExt;
            
        }
    },
    "#pic": {
      "bind": function (d,v,$o) {
              if (v!=null) {
                $.my.modal({
                  manifest:this.Cropper,
                  data:{data:"",filename:""}
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
    "#pics": {
      "init": function ($o,form) {
              var files = this.files,
                  t = '';
              for (var i=1;i<5;i++) {
                var pic = files[i+'.png'],
                    url = 'data:'+pic.content_type+';base64,'+pic.data;
                t+='<img src="'+url+'" class="w36 h36 mr5 icosmall br4 cp" />';
              }
              t+=[
                '<button class="h36 w36 mt0 mb0 mr0 ml0 button pl0 pr0 dib vat blue o90" '
                  +'id="btn-addpic"  title = "Add custom image">',
                  '<span class="fi-photo"></span>',
                '</button>'
              ].join("");
              $o.html(t);
              $o.on("click",'.icosmall', function(){
                var im = $(this),
                    url = $(this).attr("src"),
                    pic = $o.my("find","#pic");
                im.attr("src", pic.attr("src"));
                pic.attr("src", url);
                form.data.doc.pic = url;
              });
            
        }
    },
    "#btn-addpic": {
      "bind": function (d,v,$o) {
              var that = this;
              if (v!=null) {
                $.my.modal({
                  manifest:that.Cropper,
                  data:{data:"",filename:""}
                }).then(function (crop) {
                  if (crop && crop.data) {
                    d.doc.pic="data:image/jpeg;base64,"+crop.data;
                    $o.my("find","#pic").trigger("recalc");
                    crop.data="";
                  }
                });
              }
            
        },
      "events": "click.my"
    },
    "#name": {
      "bind": "doc.name",
      "check": /^(|[a-z0-9]{3,40})$/i,
      "error": "3–40 latins and nums",
      "css": {
        ":disabled": function (d) {
          return !d.isnew || !!cw.userCtx
          },
        "self:bg-gray6 xgray": function () {
          return !!cw.userCtx
          }
      },
      "recalc": "#pin"
    },
    "#pin": {
      "bind": "pin"
    },
    "#btn-create": {
      "delay": 50,
      "bind": function (d,v,$o) {
            var i, db, d2, that=this, uname = d.doc.name+"-"+d.doc.uid;
            if (v!=null && $o.my().root.my("valid") && this.db) {
              if (cw.lib.sdbm($o.my("find","#pic").attr("src"))=="79adusu9") {
                cw.lib.note("Please change userpic","error");
              }
              else {
                if (d.isnew) {
                  d.doc.pin = _pin();
                  d.doc.dbs[0].creator = uname;
                  d.doc.dbs = d.doc.dbs.compact(true);
                  d.doc.keys = d.doc.keys.map(function(e){
                    e.emitter=uname; 
                    e.link=d.doc.contact;
                    return e;
                  });
                } else if (d.pin) d.doc.pin = _pin();
                //console.log(d.doc);
                try{cw.crypto.enc(d.doc)}
                catch(e) {console.log(e.message, e.stack, e);}
                if (d.isnew) {              
                  $.my.modal(
                    '<div class=" pt20 pb15 w350 tac blue">'
                    +'Loading system apps, please wait a minute.'
                    +'<br><div class="cw-busy w50 mt10"></div>'
                    +'</div>'
                    ,function(){},500);
                  // Read app list
                  $.ajax({ url:"sys/apps.json", type:"GET", dataType:"json", cache:false })
                  .then(function(a){
                    var b, i, j, o;
                    if (!Object.isArray(a) || !a.length) {
                      $.my.modal();
                      cw.lib.note("Oops, server responded with error. Please retry in 5-10 minutes.", "error", 5000);
                      console.log(a);
                    }
                    else {
                      b = Object.clone(a.filter(function(e){return Object.isObject(e)}), !0);
                      for (var i=0;i<b.length;i++) {
                        o=b[i];
                        o.srcrev = o._rev;
                        delete o._rev;
                        if (o._attachments) for (j in o._attachments) {
                          o._attachments[j] = Object.select(o._attachments[j],["content_type","data"]);
                        }
                      }
                      // encrypt settings doc
                      b.push(cw.crypto.enc(d.doc));
                      that.db.bulkDocs({docs:b})
                      .then(
                        function(a){
                          // everything is ok, reload page  
                          $.my.modal();
                          cw.lib.note("Account created, reloading page.", "ok", 5000);
                          //window.location.replace("./index.html#sysmanual/List");
                          var hash = (window.location.hash||"").replace(/^#/,'');
                          if (!hash) window.location.hash="sysmanual/List";
                          window.location.reload();
                        },
                        function(a){
                          $.my.modal();
                          cw.lib.note("Saving account info and apps failed. Try again, please.", "error", 5000);
                          console.log(a);
                        }
                      )
                    }
                  })
                  .fail(function(e){
                    $.my.modal();
                    cw.lib.note("Error loading apps. Try again, please.", "error", 5000);
                    console.log(e);
                  });
                } else {
                  this.db.put(cw.crypto.enc(d.doc), function (){
                    window.location.reload();
                  });
                }
              }
            }
            function _pin() {
              return cw.lib.md5(cw.lib.md5(cw.lib.md5(d.pin)+cw.lib.hash8(d.pin))+d.doc.name);
            }
          
        },
      "events": "click.my",
      "watch": "#name",
      "css": {
        ":disabled": function (d) {
          return !d.doc.name || !/^(|[a-z0-9]{3,40})$/i.test(d.doc.name)
          }
      }
    }
  },
  "data": {
    "isnew": true,
    "dburl": "",
    "dbpwd": "",
    "dblogin": "",
    "prevpin": "",
    "pin": "",
    "doc": {
    }
  },
  "style": {
    " .w36": "width:36px;",
    " .h36": "height:36px;",
    " h3": "margin:20px 0 12px 0;",
    " p": "margin: 0.2em 0 0.7em 0;"
  },
  "init": function ($o,form) {
      var db, that=this, 
          pi=$.Deferred(), _isnew=true, 
          _settings = cw.crypto._settings,
          d = form.data.doc;
      
      var pic = this.files["0.png"];
      d.pic = 'data:'+pic.content_type+';base64,'+pic.data;
      that.Pouch = PouchDB;
      that.Settings = _settings;
      form.data.isnew = _isnew;
      db = new PouchDB("cw", function(e,r){
        if (!e) {
          console.log("##### Connected to DB #####", db);
          _new({})
        } else {
          pi.reject("Can’t start DB, may be your browser is too old or whatever.");
        }
      });
      
      $o.on('click.my','.btn-link', function(){
        $o.find('.slide').slideToggle(200);
      });
      
      return pi.promise();
      //- - - - - - - - - - - - - - - - - 
      function _new(doc){
        $.extend(true, form.data.doc, doc);
        that.db = db;
        if (!form.data.doc.uid) form.data.doc.uid=cw.lib.hash8(Date.now()+Number.random(1e30));
        $o.formgen(that.HTML);
        $o.find("#abouttext").html(that.Intro);
        pi.resolve();
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
      "width": 820
    },
    "data": {
      "filename": "",
      "data": "",
      "cropped": false,
      "size": 200
    },
    "init": function ($o,form) {
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
  "HTML": ["<div id=\"cw-reg\" class=\"w550 vat dib tal xgray\" style=\"margin:0px auto 100px auto\">",
    "<div id=\"left\" class=\"w250 dib vat pr50\">",
    {
      "row": "200px",
      "rowCss": "my-row pb10 tac"
    },
    "<div class=\"slide\">",
    "<img id=\"pic\" src=\"\" style=\"width:200px;height:200px;cursor:pointer\" class=\"db mb5 br4\">",
    "<div id=\"pics\" class=\"mb10\"></div>",
    ["",
      "inp#name.w200.fs130.tac",
      {
        "plc": "Login",
        "title": "Can not be changed later, be careful!",
        "autocorrect": "off",
        "autocapitalize": "off",
        "autocomplete": "off"
      },
      "msg"],
    ["",
      "pwd#pin.w200.fs130.tac",
      {
        "plc": "New PIN code",
        "title": "Every time you log in \nCloudWall will ask you to enter PIN.\nLeave blank to skip PIN reenter.",
        "autocorrect": "off",
        "autocapitalize": "off",
        "autocomplete": "off"
      }],
    ["",
      "btn#btn-create.w180.fs100.tac.mt10.mb20",
      {
        "val": "Create profile",
        "style": "border-radius:100px"
      }],
    "</div>",
    "<div class=\"slide\" style=\"display:none\">",
    ["",
      "txt#dburl.w200.fs90.pb5",
      {
        "rows": 5,
        "plc": "URL of external CouchDB, which holds your account replica"
      },
      "msg"],
    ["",
      "inp#dblogin.w200.fs110.tac",
      {
        "plc": "DB login",
        "autocorrect": "off",
        "autocapitalize": "off",
        "autocomplete": "off"
      }],
    ["",
      "pwd#dbpwd.w200.fs110.tac",
      {
        "plc": "DB password",
        "autocorrect": "off",
        "autocapitalize": "off",
        "autocomplete": "off"
      }],
    ["",
      "btn#btn-connect.w120.fs100.tac.mt10.mb20",
      {
        "val": "Connect",
        "style": "border-radius:100px"
      },
      "<br>",
      "spn.btn-link.pseudolink.ml10.fs80",
      {
        "txt": "Or create new..."
      }],
    "</div>",
    "</div>",
    "<div id=\"right\" class=\"w300 dib vat\">",
    "<div class=\"fs90 xgray slide\" id=\"about\">",
    "<div class=\"w300\" id=\"abouttext\"></div>",
    "</div>",
    "<div class=\"fs90 gray slide\" style=\"display:none\" id=\"aboutLink\"></div>",
    "</div>",
    "</div>"],
  "Intro": "<h3 class=\"mt0 xgray\">Create local profile</h3> \n<p class=\"lh170 mb5\">\n  No user profile found on this device.\n  Please, provide data for creating <br>new local account.\n</p>\n<p class=\"lh170\">\n  Make your PIN short – CloudWall requests it on each start.\n</p>\n\n<h3 class=\"xgray\">Link to remote profile</h3>\n<p class=\"lh170\">\n  If you already have CouchDB, that holds your CloudWall account,\n  you can <span class=\"pseudolink btn-link\">link this device</span> \n  with your existing profile.\n</p>",
  "IntroExt": "<p class=\"lh170 mt-5\">\n  Connecting to external DB will sync this browser’s local databases \n  with external account. Sync destroys all existing local \n  CloudWall DBs if any – with no rollback possible.\n</p>\n<p class=\"\">\n  Please note that full account sync may take significant time.\n</p>",
  "files": {
    "0.png": {
      "content_type": "image/png",
      "digest": "md5-cJHlofu3xXv0gNoSzbjQ6w==",
      "data": "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"
    },
    "1.png": {
      "content_type": "image/png",
      "digest": "md5-O0fW36XtR6hqU2Hql2aq8Q==",
      "data": "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRF/7Fd/////+e4/4IA/8iL/9Sj/+jQ/5kw//Pn/4oR/711//n0/5Ef/6RF/921////17WySAAAABB0Uk5T////////////////////AOAjXRkAAA4LSURBVHja7J3ptpwoEICrlV2g3/9tRxZlUVtZWntyrn9mkpPk+kntBQW834wM//OHsPcb3mz4Bx72hn+CYyYB8m+AEBj+kecP5A/kD+QP5A/kD+QP5A/kD+QP5EEQjTFCQghwz/x/AiGM/0cgGIGicjx6uFQgkP5xECwUHy89EtDvggiafHmqlBMp+8zipShNMBX+SRDhX5KrWXLI9Dp4GJllbyGm+PdAlPvIiLyuPJP2yyd+DcS8lkTTq+Ah0JGkEwgyVkoUYVgU2k1TuoBoK1boVf5MhoSLHwFBRst5Dces+la8qP4FEPsqwF6Vj7aLgh4Hse8h9av+mUQPnYceHIq9mh5tZBMeBdHWWgUrhKcqEmu94EEQux5By8ks7KCnWuslngNJOQyIUVzA7H4SaLVXidXFco1tS2EsCX4GBCX64VFoEqgXiNkkjfV7AgTPtkYdRVDLQ6/TGMFUT4DMcYnM5AeBiX0ZyvJDqQS+EBRjI6n3gxjByvzgMGu6e2EN25xwXhxMPq7O/Jfk/SDzV4c8cJqFjXs4huh+imvSrgNDYP4+3A0yfz3O9oRjxKvQiyBiPE3lOZ2lbctjV/lmEL6N22exsWETBPkJLPOrz0l7XlyZfzORN1q9JLUg8xvL1ObMqSu1Yj6/XvypCYotskBIAM0rLesn0UY2bwWR6YJ49zED2ByL41T2McRLIWm+Nqp9SaDaZPFp49CN8k+uCAG5eZph6GGNS8daxu8EUZFPJ8prgVsGTyLxjvMmaKMmXInExchKX1IHMovyuPx47AVeLr/hSUZ14AMnYsrCrhRMNoZLVLp3qFV1GlnMTMGnxRuKioSLVMpWHQhdVX3lmLLP6uSmAoXWhfN1IM5AeQ/INxyBrwKlUrag0mY5ySImAKbb4NGn4V5XdKlsybtAYLFZhgEixWdBv1lkbKUgBSS8KsGCShXBa9y9OmYbjgT/4ao8nC4sl3N5VaUk0KIi84ubmrqKvUlkvWyJhcPSbhiV0FcUBlUpSQ0I9nGW8cLIBcFMBQ+nMzsssQaeRPGEhXVjs1cRikbxzuyk6D0gwi+CkQEXBDvVVnqy1iqqytt6kWk3aEHzVqKUPAruo2Bm/tU9IF7XzQ80Od3kjK2r/hIjTjTSbVvhnq0wmaMtcRhtJcl/lbbXgCin67NkmeYttjq/xn1OyKJFmRzKSK3pIrbnm6VZI8WZtqNbQKSztyZOMUEwyTIQ++JxWXtaihHcFCGsfkxMx43ETeoubgHhzmj5HqD5b+rYnQFLGg2RuvtYYP1/IDu+HW4B8arpXofptXSSLUra+pnS5GrJGL13YSzN/NUdIMbqel03oYralhuXRlSekxBjaHmoPrDgOuJvUWV/60DoWrEW0xpAZsGWdD213Yxk2shS/DGGm0B8yKgtCCF5FSKzVhSfthFVZn+rwsY6ELWAcCvQhz01Pp53393SxV+D1eRWjSDUgMDxx/ZxFhxG8t7CObV7EAQ+gwSU/U6Wa9BzzR4BEe7VifMiQ0jfDwRsbZnQpCbPsPcts8MhyT9y84owVyJMP+aB/ERFYKnAbnhaY3viPAc8BvLyBWsZEsSPLHsBI/epIyR1y7tBpAOBPYe4qy5axNW5uDLHk49xo/mlPkg1IPrIkRxX5zDWSWUu+yfuAlkSROF7IXzTuSp9sijnrhBFe/XGvuwgjl3i9S7oE0HjEv2yMWSKpAUk/xLoLhAeiijgbQ607A7KZfO2fGQxuOC1niTNkuIH5y71tgxRhfocX3oauknV0euRnH1xX2sqIppki+cJjbyrirK+N3iR0mfx1lnROtWZ2+pai2uf40G2/ugWFYEOrZ7KkinfSEe1tqM8xMG3lUyHPalmDV5EtFeDqtsK+nsrcmNbIa8AXclJPumIajdadSB5TNHVatUV46tSXemS8CFxxU1+hIS8WLn+1g0gKqqhT2uw1BA1hs/A1uZWedQIFW59/mI87q7jotRqW0oZg18NNW74Mohe6uxu8xLxvV3UAPJadhrB0pe3lWP9XRAIeq19qKX39tIVGmC55CHVu51KQaJAl3ijq5pU3esYTg2xLk7bS0EijxFV5RtPK4j1X5KRKfsqSJwEIRfttcXwq+sgNvbk0dYa/E2QSIyXIKm9iLJa4CiGK06uykEgiomKy1rHFli6ZSAB7TYQFzp2kKx1LSBsGr4BREXmnyzr0vq4f0UEh3SDaNE0dpeNRa1V31AS0dMvg0TRiLcxLalInpREWa/8stUaQnbOHFNLup4n7joI7vhlPxJlua7LNLXkVDlIaFyVt0hKQUKW6z9fzxUJmWZ5Qb4iaBRJGWfsqCOhrCS+HjQGs+VNTE+rFZa32GhV5SMsBunmR3RkAtn385GwCVusbZ52zz55G7LUx1B5ja4YZD0B40F6xlprsCXLS1vFINpnQUtLubHykNYfPAiuONdT0RrymS0EINXIwaLsn1QefisH0f5A6AJCxuYlWQsBaolDyw9a1fXZRzWFmFv16OrqxeoSe47mto7VSPUKQsa26sNE1y9hTGLlGf3a0wq2jIbDTr56X2JWYNnR6PerVH3dGpBBpMcHVYuaQPQZGqbwVJ56w8lIFyYbloRGginrB9dUH3HVcV0O2kBIW2ukDWSAL4Dw6jPHDSBxkNULpK7H0w6isii8FYQ9AhIXVESDJ4nKi+SRCQNxewc1xPJRrlx3KKkVZEjfQNUHjLxpo1Y7SBS/k/paik5VDR4AiTc38eoeCUqtuHgAJN5nRat7C7Hllo/MRRkgdSSi2miRaH+TfgAktr+4du9DrF21R9lbQXRUm5tqG4lxfIAarG/TNKe46aYqfXscN6uWqWctIHH8WylbyQZV3qDrTSBxtDXV9URjg0FadL0JBMcFbFGzJEkFpklF2ka38UjAWU3inhRgmlSkDSR5D1G+JQXHC8Kem0FnK1zhiL0sjRzN6AuRbK0ZHgJJZMvuFioJ5k3JgvaYSNUBBBINF0Uk5gh/dEKXtElWIwhOC1qQz9b6pB88nWEHTTareZYpTdcArs6msQdCozEXVtXRgyAoqzG6UTsQzWZlGikuIZ7P5megSZLGXHJ4EGTITRWh++cm/W8JWOe2JRO0WfPE31YQtCn7Ynphjn8+IAFaIvguIAPdjnIiIloITmexIig5Sgn5WGDdPoK5GQTvd0e25yb9UUo8bG2B8aV0eBhkgPbWm2j0IX1AjL7Lpm2muH0idhcQPLY1EU3IRYcfABnE2LL7wYYqPzEA36lJLQmTHRSkF4g9igFT7XqMPe6G6XTbBXW99/LKL+91cUev+0fMmsihxu6Ofe7q6XaRCozFN5DYuIx3utym39U2bqzW9fqDmxrY7ZKejpcNuWiRXqtu+eNU/X583+uf/KygUz9PgPe9M6n3hVzLlPWPdydpP+5Fdr2Rq/cVaRjiofd+3pyfy8iIRmuEL0XfH9z/rjd66YY03vvH9geRm3l5+eA5/r8AWSb9KiSWO/i4dAcwuaSwXmqHfhxER1Mkt4ZYR3KnfxvErAHRy9zyxNNPy0lcpcnYWv35LojGy103bJmotS6LXgf/Ml//olj/HghG6wTGJTFZl8WAIZ6NlYZ1WiPCz4LMrw4Kz4sg0pn20cya5UIV5odTxi5/4slVHiDm5cHmDs6bd9AtU+8zKyvzPSna3UeEtpMBuf3T43bCKb9tT6NZi3wsKVeANNk7FmPbndsxSe7My+zqYXPJqKxaFygkCNezSvAX1oioQL09FmOCdUQ3Rbz4gPFEZvl0tiB8IeNzSngug6D8yyG20zTcbq7B/o/jTZE0bwKbvf0M5SuNuoLgeFwvp4CUB/m01yd0osZtMXJvTqUHUSi5aYUD7gWCVVAEL0biACTfpTlZ30etl5yOtmllIMKLW1CfK3ua4SpGOo3/CCR7vzkrN2GWOdgik5Hfu/tSY5C1sC8vopyCwO79CEcgqcQsFyyozUT53Z3COyDBsUIbiLu0Ru2Nrd4FSXZpos0MbJQfc7sAskyglbgBRByVE45Aoumqdoy/TL1lKEfSnV7EEcgSqIlaEPfX0dEByD2Q8HvuylwWrkoDO2l5UZS93ZzHIH51P132CidiRcmrBGTdjuxqoWH6zDKNYFGUvSO+n0Dch/kgXvA51RMfjqTugvgjkWj1getVj6t3ROEMeQHIWX0VPqkH169SECv79ryXb6Mv1/WIUHxXUzap+BrI54o3fLC6kryKQYw1IvEVtcyDLL90irK7B/0MxH0GKAI521VyCGLiXD6O6bbNuDfnhpvvTg09BXH35UABCJy1Ow5BxOYeDpzGjOt4LlEB4oQWLoOI07bNIQhyd7dFUaLNBXmyA1Pum/ULII5EXARB5+2nQxDs1EOl282TXyinKLoK5HV0cBT201g6vepAmLQvEs/cireSMr+rVuy15i+B2IOkO+nwFkRf2QBwCPKa2HpYNbxgfNTFmV02vSpBbB94ewEv7HYDT7dkHIMEEQv1FBLXTvDH01YXQPYv4IU9RT/vn52CvHYPi34eu3cVxCqiOAEx3vNC7/8cBO357s9j9y6D2O1d+jOIsvc5dQDZ2yyvP8+cvg5i9xh/BEHjtb365yB7U9hPxu5dB7HxAfoEIi9uKrkAsp3CfjZ2rwBke7sz5Jp+bX/7BZBtefFsLHsJiHFI4hiEXz2XcwVkyBbAnsTtBWKMSdK+A5LGiheHtVwBeWWF0tMTJkUgdvx+eHUCrGZBroEkTvHEGZaDpEvC4M1iDZFTR5DUKZ7PoC0DmeK5POwN7zcjwWRdPbl2DSRxiuczaMtAogMnhL3f/wkwAOQsVnpobqx8AAAAAElFTkSuQmCC"
    },
    "2.png": {
      "content_type": "image/png",
      "digest": "md5-bdkheeCU4KhCK220aNFhRw==",
      "data": "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"
    },
    "3.png": {
      "content_type": "image/png",
      "digest": "md5-f93LlaPKibYgqE81Hdq/2w==",
      "data": "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"
    },
    "4.png": {
      "content_type": "image/png",
      "digest": "md5-xXtbGbTRRPxD9M9rRsquDg==",
      "data": "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"
    }
  }
},
			{doc: res }
		)
	})
	.fail(function (msg){
		cw.lib.note(msg, "error");
	});
	
})();