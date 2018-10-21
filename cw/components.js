// CloudWall 2.4.1, couchapp build 
// Preloaded apps and component manifests
// (c) 2018 ermouth

(function(system, jQuery, Pouch) {
	var cw = Object.merge({}, system);
	var $ = Object.clone(jQuery);
	var PouchDB = Pouch;

[{
    "id": "cw.DB.Config",
    "build": 101,
    "app": {
      "name": "Config",
      "title": "DB Config",
      "version": "3",
      "build": 101,
      "collapsed": [],
      "author": "ermouth",
      "timeout": "3000",
      "ico": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwLCAwLCAxMjgsIDEyOCI+CiAgPGcgaWQ9IkxheWVyXzEiPgogICAgPHBhdGggZD0iTTExNS44NjcsMjEuODcgTDcxLjY0NSwyMS44NyBDNjguNzk1LDE4LjQ3NSA2NS44NjYsMTQuODk4IDY1LjEwNiwxMy44MTIgQzY0LjM3LDEyLjI3NyA2Mi43OTIsMTEuMjIxIDYwLjk2NiwxMS4yMjEgTDI5LjI1LDExLjIyMSBDMjcuODYyLDExLjIyMSAyNi41NSwxMS44NDYgMjUuNjgsMTIuOTE5IEwxOC40NSwyMS44NzEgTDEyLjEzNCwyMS44NzEgQzcuNzg0LDIxLjg3MSA0LjIzNywyNS4zOTYgNC4yMzcsMjkuNzMgTDQuMjM3LDk4LjkyMyBDNC4yMzcsMTAzLjI1NyA3Ljc4NCwxMDYuNzc5IDEyLjEzNCwxMDYuNzc5IEwxMTUuODY2LDEwNi43NzkgQzEyMC4yMTYsMTA2Ljc3OSAxMjMuNzYzLDEwMy4yNTcgMTIzLjc2Myw5OC45MjMgTDEyMy43NjMsMjkuNzI4IEMxMjMuNzY1LDI1LjM5NSAxMjAuMjE2LDIxLjg3IDExNS44NjcsMjEuODcgeiIgZmlsbD0iI0ZGRkZGRiIvPgogICAgPHBhdGggZD0iTTI5LjI1LDExLjIyMSBMNjAuOTY2LDExLjIyMSBMNzIuNSwyNS4wOTEgTDE3LjUsMjUuMDkxIEwyOS4yNSwxMS4yMjEgeiIgZmlsbD0iI0ZGQkQxRiIvPgogICAgPHBhdGggZD0iTTYwLjk2Niw4IEM2My44MzUsOC4wNjYgNjYuMzY5LDkuNTE5IDY3Ljc5MiwxMi4wMTMgQzY5LjUxMSwxNC4yNzkgNzEuMzM3LDE2LjQ2NyA3My4xNjIsMTguNjQ5IEwxMTUuODY3LDE4LjY0OSBDMTIyLjAwNiwxOC42NDkgMTI3LjAwMiwyMy42MTggMTI3LDI5LjcyOCBMMTI3LDk4LjkyMyBDMTI3LDEwNS4wMzQgMTIyLjAwNSwxMTAgMTE1Ljg2NiwxMTAgTDEyLjEzNCwxMTAgQzUuOTk1LDExMCAxLDEwNS4wMzQgMSw5OC45MjMgTDEsMjkuNzMgQzEsMjMuNjE5IDUuOTk1LDE4LjY1IDEyLjEzNCwxOC42NSBMMTYuODk5LDE4LjY1IEwyMy4xNjEsMTAuODk3IEMyNC42NDUsOS4wNjUgMjYuODg0LDggMjkuMjUsOCBMNjAuOTY2LDggeiBNNjAuOTY2LDE0LjQ0MiBMMjkuMjUsMTQuNDQyIEMyOC44NDEsMTQuNDQyIDI4LjQ1NiwxNC42MjYgMjguMjAzLDE0LjkzNyBMMjAuOTczLDIzLjg4OSBMMjAuMDAxLDI1LjA5MiBMMTIuMTM0LDI1LjA5MiBDOS41NywyNS4wOTIgNy40NzQsMjcuMTc3IDcuNDc0LDI5LjczIEw3LjQ3NCw5OC45MjMgQzcuNDc0LDEwMS40NzUgOS41NjksMTAzLjU1OCAxMi4xMzQsMTAzLjU1OCBMMTE1Ljg2NiwxMDMuNTU4IEMxMTguNDMxLDEwMy41NTggMTIwLjUyNiwxMDEuNDc1IDEyMC41MjYsOTguOTIzIEwxMjAuNTI2LDI5LjcyNyBDMTIwLjUyNywyNy4xNzYgMTE4LjQzMSwyNS4wOTEgMTE1Ljg2NywyNS4wOTEgTDcwLjEzMiwyNS4wOTEgTDY5LjE2MSwyMy45MzUgQzY1LjkzNSwyMC4wOTIgNjMuMjMzLDE2Ljc3MSA2Mi40NSwxNS42NTMgTDYyLjI5OSwxNS40MzcgTDYyLjE4NSwxNS4xOTkgQzYxLjk2NSwxNC43NDEgNjEuNDk2LDE0LjQ0MiA2MC45NjYsMTQuNDQyIHoiIGZpbGw9IiM0QkU0RkYiLz4KICAgIDxwYXRoIGQ9Ik05MC43MjksNDUuNDM1IEw4Ny40NjMsNDguNjg2IEw4NC4zMDUsNTEuODI4IEw4MC4yODQsNTUuODI5IEM3OC4xNTUsNTUuOTY0IDc1Ljk3OSw1NS4yMjkgNzQuMzUxLDUzLjYwOSBDNzIuNzIzLDUxLjk4OCA3MS45ODUsNDkuODI0IDcyLjEyLDQ3LjcwNSBMNzYuMTQxLDQzLjcwMyBMNzkuMjk4LDQwLjU2MiBMODIuNTY1LDM3LjMxIEM4Mi43NzcsMzcuMDk5IDgyLjc3NywzNi43NTcgODIuNTY1LDM2LjU0NiBDODIuNTI2LDM2LjUwNiA4Mi40NzksMzYuNDgzIDgyLjQzNCwzNi40NTggTDgyLjQzNSwzNi40NTcgQzgyLjQzMiwzNi40NTcgODIuNDI5LDM2LjQ1NSA4Mi40MjYsMzYuNDU1IEM4Mi4zOTgsMzYuNDQgODIuMzcxLDM2LjQyOCA4Mi4zNCwzNi40MTggQzgwLjA3OSwzNS40MTUgNzcuNTg0LDM0LjgzOSA3NC45NDgsMzQuODM5IEM2NC44NjEsMzQuODM5IDU2LjY4NCw0Mi45NzcgNTYuNjg0LDUzLjAxNSBDNTYuNjg0LDU0LjkzMSA1Ni45ODYsNTYuNzc3IDU3LjUzOCw1OC41MTIgTDQzLjg2OCw3Mi4wOSBDMzcuNDk0LDcyLjE5MSAzMi4zNTUsNzcuMzU4IDMyLjM1NSw4My43MjYgQzMyLjM1NSw5MC4xNTkgMzcuNTk2LDk1LjM3MyA0NC4wNTgsOTUuMzczIEM1MC40NTksOTUuMzczIDU1LjY1MSw5MC4yNTkgNTUuNzU0LDgzLjkxNSBMNjkuNDI2LDcwLjMzNyBDNzEuMTY4LDcwLjg4OCA3My4wMjQsNzEuMTg4IDc0Ljk1LDcxLjE4OCBDODUuMDM3LDcxLjE4OCA5My4yMTUsNjMuMDUxIDkzLjIxNSw1My4wMTQgQzkzLjIxNSw1MC4zOTIgOTIuNjM1LDQ3LjkxNCA5MS42MjgsNDUuNjY0IEM5MS42MTksNDUuNjMgOTEuNjA0LDQ1LjU5OCA5MS41ODcsNDUuNTY1IEM5MS41NzksNDUuNTUgOTEuNTc0LDQ1LjUzNSA5MS41NjgsNDUuNTIxIEw5MS41NjIsNDUuNTI3IEM5MS41NDEsNDUuNDk2IDkxLjUyOCw0NS40NjIgOTEuNSw0NS40MzMgQzkxLjI4Niw0NS4yMjMgOTAuOTQyLDQ1LjIyMyA5MC43MjksNDUuNDM1IHogTTQ4Ljg5NSw4My43MjYgQzQ4Ljg5NSw4Ni4zODQgNDYuNzMsODguNTM5IDQ0LjA1OCw4OC41MzkgQzQxLjM4OCw4OC41MzkgMzkuMjI0LDg2LjM4NCAzOS4yMjQsODMuNzI2IEMzOS4yMjQsODEuMDY4IDQxLjM4OCw3OC45MTQgNDQuMDU4LDc4LjkxNCBDNDYuNzMsNzguOTE0IDQ4Ljg5NSw4MS4wNjggNDguODk1LDgzLjcyNiB6IiBmaWxsPSIjMDBDQ0YxIi8+CiAgPC9nPgo8L3N2Zz4K",
      "maskstate": {
        "name": true
      },
      "nodetitle": "title",
      "width": [[630,
          4096],
        600],
      "padding": "none"
    },
    "params": {
      "restyle": 1
    },
    "data": {
      "name": "",
      "title": "",
      "url": "",
      "desc": "",
      "stamp": 0,
      "creator": "",
      "ico": "",
      "pic": "",
      "dataOnly": false,
      "readOnly": false,
      "autoCompact": false,
      "hidden": false,
      "apps": [],
      "start": "",
      "sync": []
    },
    "RO": false,
    "Src": {
    },
    "Ext": "",
    "Compacting": false,
    "DBs": [],
    "RT": function (key) {
          return null==key?this:Object.isArray(key)?cw.lib.getref(this,key):this[key];
        
      },
    "init": function ($o) {
          var that = this,
              d = that.data;
          that.RO = !cw.config('profileWritable') || (d.readOnly && !cw.me('roles').find('_admin'));
          
          $.extend(true, d, that.db.settings()); 
          $.extend(true, that.Src, d); 
          
          //
          // Disable sync for remote buckets
          if (d.url) {
            that.Ext = d.url;
            d.sync = [];
          }
          // DBs present in system
          that.DBs = Object.keys(cw.dbs()).remove(d.name);
    
          // HTML
          $o.html($.my.formgen(that.HTML).assign(that.lang));
          
          // Mount lang sections
          ['Sync','Resync'].forEach(i => that[i].lang = that.lang[i]);
          
          $o.then(function(){
            if (that.RO) {
              $o.find('input,textarea').attr('disabled','disabled')
            }
          }.debounce(100))
        
      },
    "ui": {
      "#cpic": {
        "init": function ($o) {
                var that = this,
                    d = that.data;
                
                if (!d.ico) d.ico = d.pic || that.Ico;
                
                $o.on('click.my', function(){
                  if (that.RO) return false;
                  $.my.modal({
          manifest:'cw.Sys.Cropper.Square',
                    esc: true,
                    data:{data:'', filename:'', size:256, png:true, allowSVG:true}
        })
                  .then(function (crop) {
                    if (!crop || !crop.data) return;  
                    var I = new Image();
                    I.src = 'data:' + crop.mime + ';base64,' + crop.data;
                    I.onload = function(){
                      var img = cw.lib.image(I);
                      try {
                        if (crop.mime == 'image/svg+xml') d.pic = I.src;
                        else d.pic = img.resample(128).sharpen(0.2).png(true);
                        d.ico = img.resample(64).brightness(1.05).contrast(1.05).sharpen(0.5).png();
                        that.my.recalc('#cpic');
                      }
                      catch(e){console.log(e)}                
                      crop.data = '';
                    }
                  });
                });
              
          },
        "bind": function (d,v) {
                return d.pic || d.ico;
              
          },
        "css": {
          "cp": function () {
            return !this.RO
            }
        }
      },
      "#ctitle": {
        "bind": function (d,v) {
                if (v==null) return d.title;
                d.title = v.compact().removeTags();
                return v;
              
          },
        "check": function (d,v) {
                if (!/^[\S].{0,39}$/.test(v.removeTags())) return this.lang.ERR_TITLE;
              
          }
      },
      "#cdesc": {
        "bind": function (d,v,$o) {
                $o.height(0).height($o[0].scrollHeight-11);
                if (v==null) return d.desc;
                if (v!=null) d.desc = v.compact().removeTags();
                return v;
              
          },
        "check": function (d,v) {
                if (v.length > 200) return this.lang.ERR_DESC;
              
          }
      },
      "#capp": {
        "bind": function (d,v) {
                var that = this;
                if (v!=null) {
                  var a = v.split('#').last().split('/').slice(0,4).compact(true);
                  if (a[0] == that.db.name) a = a.slice(1);
                  d.start = a.join('/').substr(0,1024);
                }
                return d.start;
              
          },
        "check": function (d,v) {
                if (!v) return this.lang.ERR_APP;
              
          }
      },
      "#sdataonly": {
        "bind": function (d,v) {
                if (v!=null) d.dataOnly = v.length?true:false;
                return d.dataOnly?['x']:[];
              
          }
      },
      "#sreadonly": {
        "bind": function (d,v) {
                if (v!=null) d.readOnly = v.length?true:false;
                return d.readOnly?['x']:[];
              
          }
      },
      "#sautocompact": {
        "bind": function (d,v) {
                if (v!=null) d.autoCompact = v.length?true:false;
                return d.autoCompact?['x']:[];
              
          },
        "css": {
          "hide": function (d) {
                    return !!this.Ext;
                  
            }
        }
      },
      "div.cremote": {
        "css": {
          "hide": function (d,v) {
            return !this.Ext
            }
        }
      },
      "#cext": {
        "bind": "url",
        "check": function (d,v) {
                if (
                  this.Ext 
                  && !/^http[s]?:\/\/.+$/.test(v) 
                  && !/^\/[a-z0-9_\-]{1,200}$/.test(v)
                ) return this.lang.ERR_EXT;
              
          }
      },
      "#csyncs": {
        "bind": "sync",
        "manifest": "Sync",
        "list": "<div class=\"csyncrow\"></div>",
        "check": true
      },
      "#csynclist": {
        "css": {
          "hide": function (d,v) {
            return !d.sync.length
            }
        },
        "watch": ["#csyncs"]
      },
      "#btn-apply": {
        "delay": 50,
        "bind": function (d,v) {
      var that = this;
      if (v != null){
        if (!that.my.valid()) {
          cw.note(that.lang.ERR_SAVE_DATA, 'error');
          return;
        }
        //var db = cw.db('cw');
        d._cmd = '';
        that.db.settings(d).then(function(){
          cw.lib.note(that.lang.MSG_SAVE_OK, 'ok');
          that.app.close(true);
        })
                  .fail(function(a){
                    var that = this,
                        msg = (Object.isObject(a)?(a.reason||a.message)+'':'') || 'Unknown error';
                    console.log(a);
          cw.lib.note(that.alng.ERR_SAVE.assign(d.title.escapeHTML(), msg), 'error');
        });
      }
    
          },
        "css": {
          ":disabled": function (d) {
              
                    return this.RO || !this.my.valid() || cw.lib.sdbm(d) == cw.lib.sdbm(this.Src); 
                  
            }
        },
        "watch": ["#cpic",
          "#ctitle",
          "#cdesc",
          "#capp",
          "#cext",
          "#csyncs",
          "#sdataonly",
          "#sreadonly",
          "#sautocompact"]
      },
      "#btn-close": function (d,v) {
            if (v!=null) this.my.cancel();
          
        },
      "#btn-newsync": {
        "bind": function (d,v) {
                var that = this;
                if (v!=null && !d.sync.find(e=>!e.url)) {
                  that.my.insert(
                    '#csyncs', 
                    1e6, 
                    $.extend(
                      true,
                      {},
                      that.Sync.data,
                      {stamp: Date.now(), dir: ['from','to']}
                    )
                  )
                }
              
          },
        "css": {
          "self:hide": function (d,v) {
            return this.RO;
            }
        }
      },
      "#btn-compact": {
        "bind": function (d,v) {
                // fi-loop o80 dib vab arot2s
                var that = this,
                    title = d.title.escapeHTML(),
                    dbname = that.db.name,
                    tmpl = '<span class="{1}"></span>\u2009'+that.lang.BTN_COMPACT,
                    css = '';
                if (v!=null && !that.Compacting) {
                  that.Compacting = true;
                  cw.lib.note(that.lang.PRE_COMPACT.assign(title), 'ok');
                  cw.db(dbname).compact()
                  .then(function(){
                    _check();
                    cw.lib.note(that.lang.MSG_COMPACT.assign(title), 'ok');
                  }.debounce(500))
                  .catch(function(e){
                    _check();
                    cw.lib.note(that.lang.ERR_COMPACT.assign(title), 'error');
                    cw.log('Compaction of bucket '+dbname+' failed', e);
                  });
                }
                css = that.Compacting?'fi-loop o80 dib vab w12 tac arot2s':'fi-foundation o80 dib vab w12 tac';
                return tmpl.assign(css);
                
                function _check(){
                  that.Compacting = false;
                  that.my.check('#btn-compact');
                }
              
          },
        "css": {
          ":disabled": function (d,v) {
            return this.Compacting || d.autoCompact;
            }
        },
        "watch": ["#sautocompact"]
      },
      "#btn-deldb": {
        "bind": function (d,v,$o) {
                var that = this,
                    title = d.title.escapeHTML();
                if (v!=null){
                  d._cmd = 'delete';
                  that.db.settings(d)
                    .then(function(){
                    cw.lib.note(that.lang.MSG_DELDB.assign(title), 'warning');
                    that.my.cancel();
                  })
                  .fail(function(a){
                    cw.lib.note(a, 'error');
                  });
                }
              
          },
        "css": {
          ":disabled": function (d,v) {
            return this.Compacting;
            },
          "self:hide": function (d,v) {
            return this.RO;
            }
        },
        "watch": ["#btn-compact"]
      },
      "#btn-unmount": {
        "bind": function (d,v,$o) {
                var that = this,
                    title = d.title.escapeHTML();
                if (v!=null){
                  d._cmd = 'delete';
                  that.db.settings(d)
                    .then(function(){
                    cw.lib.note(that.lang.MSG_DELDB.assign(title), 'warning');
                    that.my.cancel();
                  })
                  .fail(function(a){
                    cw.lib.note(a, 'error');
                  });
                }
              
          },
        "css": {
          ":disabled": function (d,v) {
            return this.Compacting;
            },
          "self:hide": function (d,v) {
            return this.RO;
            }
        },
        "watch": ["#btn-compact"]
      }
    },
    "lang": {
      "en": {
        "TIP_PIC": "Click to change DB icon",
        "PLC_TITLE": "Bucket display title",
        "ERR_TITLE": "Non-empty, up to 40 chars",
        "PLC_DESC": "Bucket short description",
        "ERR_DESC": "200 chars maximum",
        "LBL_APP": "Default app",
        "PLC_APP": "URL hash of a default app",
        "ERR_APP": "Path required, copy/paste or input one",
        "LBL_MODE": "Integrity",
        "LBL_RO": "Read only",
        "TIP_RO": "No doc can be edited and saved, but docs can be viewed",
        "LBL_ZIP": "Auto compact",
        "TIP_ZIP": "Automatically compacts the bucket on any update or sync, which means old revisions are discarded immediately",
        "LBL_NOAPPS": "Data only",
        "TIP_NOAPPS": "Bucket apps, if any, are ignored. Only system apps are visible for this bucket.",
        "LBL_EXT": "Mapped to",
        "PLC_EXT": "Remote CouchDB bucket URL",
        "ERR_EXT": "Full URL or /dbname for current domain",
        "LBL_SYNC": "Sync with",
        "BTN_COMPACT": "Compact",
        "TIP_COMPACT": "Compacts local data, removing obsolete doc revisions",
        "PRE_COMPACT": "Started {1} bucket compaction",
        "ERR_COMPACT": "Compaction of the {1} bucket was unsuccessful",
        "MSG_COMPACT": "Compaction of the {1} bucket finished",
        "BTN_COMPACT_EXT": "Compact",
        "PRE_COMPACT_EXT": "Started {1} external bucket compaction",
        "TIP_COMPACT_EXT": "Starts compaction of remote CouchDB bucket, requires admin privileges",
        "ERR_COMPACT_EXT": "Starting compaction of the {1} bucket failed",
        "BTN_DELDB": "Del...",
        "MSG_DELDB": "List of buckets updated, removing local data of bucket {1}",
        "TIP_DELDB": "Deletes local copy of data. If the bucket is in sync, remote data stay intact.",
        "BTN_NEWSYNC": "Add sync",
        "TIP_NEWSYNC": "Adds another CouchDB bucket as a sync source",
        "BTN_UNMOUNT": "Unmount...",
        "MSG_UNMOUNT": "List of buckets updated, unmounting bucket {1}",
        "TIP_UNMOUNT": "Unmounts remote CouchDB bucket.",
        "BTN_SAVE": "Save config",
        "ERR_SAVE_DATA": "Some settings are invalid. Fix reds and try again.",
        "ERR_SAVE": "Error saving settings for {1} bucket. DB responded {2}",
        "MSG_SAVE_OK": "Settings successfully updated",
        "BTN_CLOSE": "Close",
        "Resync": {
          "BTN_GO": "Start resync",
          "OPT_NOW": "Restart since last checkpoint",
          "OPT_ALL": "Resync all docs in the bucket"
        },
        "Sync": {
          "PLC_URL": "Remote CouchDB bucket URL or local DB",
          "ERR_URL": "Local bucket name or remote CouchDB bucket URL",
          "ERR_URL_REQUIRED": "Required for new sync sources",
          "LBL_SYNCFROM": "Download",
          "PLC_FILTERFROM": "Optional filter, ddoc/filter or _id-s json array",
          "LBL_SYNCTO": "Upload",
          "PLC_FILTERTO": "Optional filter, ddoc/filter or _id-s json array",
          "LBL_INTERVAL": "Every",
          "VAL_INTERVAL": "min",
          "VAL_CONT": " (realtime)",
          "BTN_RESYNC": "Restart sync...",
          "TIP_RESYNC": "Forces immediate resync of the bucket with this external CouchDB source",
          "MSG_RESYNC": "Started forced sync of the {1} bucket with {2}",
          "MSG_RESYNC_ALL": "Started forced full re-sync of the {1} bucket with {2}",
          "ERR_FJSON": "Invalid JSON, should be non-empty array",
          "ERR_FJSON_STR": "Only valid doc _id strings allowed",
          "ERR_FDDOC": "Filter name like ddocName/filterName"
        }
      },
      "ru": {
        "TIP_PIC": "Нажмите для выбора новой иконки для БД",
        "PLC_TITLE": "Название БД",
        "ERR_TITLE": "Обязательно, строка до 40 символов",
        "PLC_DESC": "Короткое описание БД",
        "ERR_DESC": "Максимум 200 символов",
        "LBL_APP": "Автостарт",
        "PLC_APP": "URL хэш приложения, запускаемого по умолчанию",
        "ERR_APP": "Требуется валидный хэш, можно скопипэйстить с работающего приложения",
        "LBL_MODE": "Защита",
        "LBL_RO": "Только чтение",
        "TIP_RO": "Документы могут быть просмотрены, но не могут быть отредактированы и сохранены",
        "LBL_ZIP": "Автосжатие",
        "TIP_ZIP": "Автоматически удаляет старые равизии документов при сохранении/обновлении БД",
        "LBL_NOAPPS": "Только данные",
        "TIP_NOAPPS": "Приложения в бакете, если такие есть, игнорируются. Для бакета доступны только системные приложения.",
        "LBL_EXT": "Внешняя БД",
        "PLC_EXT": "URL внешней базы CouchDB",
        "ERR_EXT": "Полный URL или /dbname для БД в текущем домене",
        "LBL_SYNC": "Связать с",
        "BTN_COMPACT": "Сжать",
        "TIP_COMPACT": "Сжимает локальные данные, удаляя старые ревизии документов",
        "PRE_COMPACT": "Начато сжатие БД {1}",
        "ERR_COMPACT": "Сжатие БД {1} не удалось",
        "MSG_COMPACT": "Сжатие БД {1} окончено",
        "BTN_COMPACT_EXT": "Сжать",
        "PRE_COMPACT_EXT": "Начато сжатие внешней БД {1}",
        "TIP_COMPACT_EXT": "Стартует процесс сжатия внешней БД CouchDB. Требует админских полномочий.",
        "ERR_COMPACT_EXT": "Старт сжатия внешней БД {1} не удался",
        "BTN_DELDB": "Удалить...",
        "MSG_DELDB": "Список баз данных обновлён, удаляется БД {1}",
        "TIP_DELDB": "Удаляет локальную копию данных. Если БД синхронизирована с внешними источниками, внешние данные не будут затронуты.",
        "BTN_NEWSYNC": "Доп. связь",
        "TIP_NEWSYNC": "Добавляет дополнительный источник синхронизации",
        "BTN_UNMOUNT": "Отключить...",
        "MSG_UNMOUNT": "Список баз данных обновлён, БД {1} отключается",
        "TIP_UNMOUNT": "Отключает внешнюю БД.",
        "BTN_SAVE": "Сохранить",
        "ERR_SAVE_DATA": "Некоторые поля заполнены с ошибками, необходимо их исправить.",
        "ERR_SAVE": "Ошибка сохранения настроек для БД {1}. Причина: {2}",
        "MSG_SAVE_OK": "Конфигурация успешно обновлена",
        "BTN_CLOSE": "Закрыть",
        "Resync": {
          "BTN_GO": "Синхронизировать",
          "OPT_NOW": "Старт с последнего чекпоинта",
          "OPT_ALL": "Все документы с начала"
        },
        "Sync": {
          "PLC_URL": "URL внешнего бакета CouchDB или локальная БД",
          "ERR_URL": "Валидный URL внешнего бакета CouchDB или локальная БД",
          "ERR_URL_REQUIRED": "Обязательно для новых источников репликации",
          "LBL_SYNCFROM": "Оттуда",
          "PLC_FILTERFROM": "Фильтр, ddoc/filter или json-массив _id",
          "LBL_SYNCTO": "Туда",
          "PLC_FILTERTO": "Фильтр, ddoc/filter или json-массив _id",
          "LBL_INTERVAL": "Интервал",
          "VAL_INTERVAL": "мин.",
          "VAL_CONT": " (непрерывно)",
          "BTN_RESYNC": "Рестарт...",
          "TIP_RESYNC": "Немедленно ре-синхронизирует локальные данные с внешней CouchDB",
          "MSG_RESYNC": "Запущена принудительная синхронизация БД {1} с источником {2}",
          "MSG_RESYNC_ALL": "Запущена полная повторная синхронизация БД {1} с источником {2}",
          "ERR_FJSON": "Неверный JSON, требуется непустой массив",
          "ERR_FJSON_STR": "Массив должен состоять из строковых _id документов",
          "ERR_FDDOC": "Имя фильтра – строго ddocName/filterName"
        }
      }
    },
    "HTML": ["<div id=\"cdbsettings\" class=\"xgray w100p\">",
      "<div class=\"w100 dib vat\">",
      "<img id=\"cpic\" class=\"br2 bg-gray7\" title=\"{TIP_PIC}\">",
      "</div>",
      "<div class=\"dib vat pb8\" style=\"width:calc(100% - 100px);\">",
      {
        "row": "100%",
        "rowCss": "my-row pb8"
      },
      ["",
        "inp#ctitle.bolder",
        {
          "plc": "{PLC_TITLE}"
        },
        "msg"],
      ["",
        "txt#cdesc",
        {
          "plc": "{PLC_DESC}"
        },
        "msg"],
      "</div>",
      {
        "row": "100%",
        "label": "100px",
        "labelCss": "my-label fs90 o80",
        "rowCss": "my-row pb10"
      },
      ["{LBL_APP}",
        "inp#capp",
        {
          "plc": "{PLC_APP}"
        },
        "msg"],
      {
        "rowCss": "my-row pb10"
      },
      ["{LBL_MODE}",
        "<label class=\"mr16 dib\" title=\"{TIP_NOAPPS}\">",
        "<input type=\"checkbox\" id=\"sdataonly\" value=\"x\" class=\"w22 dib vat mt3 ml-1\">",
        "{LBL_NOAPPS}",
        "</label>",
        "<label class=\"mr16 dib\" title=\"{TIP_RO}\">",
        "<input type=\"checkbox\" id=\"sreadonly\" value=\"x\" class=\"w22 dib vat mt3\">",
        "{LBL_RO}",
        "</label>",
        "<div class=\"dib\"><label class=\"mr16 dib\" title=\"{TIP_ZIP}\">",
        "<input type=\"checkbox\" id=\"sautocompact\" value=\"x\" class=\"w22 dib vat mt3\">",
        "{LBL_ZIP}",
        "</label></div>"],
      "<div class=\"cremote\">",
      ["{LBL_EXT}",
        "inp#cext",
        {
          "plc": "{PLC_EXT}"
        },
        "msg"],
      "</div>",
      "<div id=\"csynclist\" class=\"csync btd mt10 pt18\">",
      "<div class=\"dib vat w100 fs90 o80 pt6\">{LBL_SYNC}</div>",
      "<div id=\"csyncs\" class=\"dib vat\" style=\"width:calc(100% - 100px);\">",
      "</div>",
      "</div>",
      "<div id=\"btns\" class=\"btd mt10 pt18\">",
      "<div class=\"cremote fr\">",
      "<button id=\"btn-compactext\" class=\"ml2\" title=\"{TIP_COMPACT_EXT}\">",
      "<span class=\"fi-foundation o80\"></span> {BTN_COMPACT_EXT}",
      "</button>",
      "<button id=\"btn-unmount\" class=\"ml2 red\" title=\"{TIP_UNMOUNT}\">",
      "<span class=\"fi-trash o70 fs95\"></span> {BTN_UNMOUNT}",
      "</button>",
      "</div>",
      "<div class=\"csync fr\">",
      "<button id=\"btn-newsync\" class=\"ml2\" title=\"{TIP_NEWSYNC}\">",
      "<span class=\"fi-share o70 fs90 dib vab\"></span> {BTN_NEWSYNC}",
      "</button>",
      "<button id=\"btn-compact\" class=\"ml2\" title=\"{TIP_COMPACT}\">",
      "<span class=\"fi-foundation o80 dib vab w12 tac\"></span> {BTN_COMPACT}",
      "</button>",
      "<button id=\"btn-deldb\" class=\"ml2 red\" title=\"{TIP_DELDB}\">",
      "<span class=\"fi-trash o70 fs95\"></span> {BTN_DELDB}",
      "</button>",
      "</div>",
      "<button id=\"btn-apply\" class=\"green mr2\"><span class=\"fi-save\"></span> {BTN_SAVE} </button>",
      "<button id=\"btn-close\" class=\"\"><span class=\"o70\">✕</span> {BTN_CLOSE} </button>",
      "</div>",
      "</div>"],
    "style": {
      " ": "font-size:16px;line-height:22px;background-color:#cdd6e7; background-image:linear-gradient(to top,#a4b2ca,#cdd6e6);",
      " textarea": "resize:none;",
      " label": "color:inherit;line-height:inherit;margin:0;font-size:inherit;",
      " input[type=\"checkbox\"]:checked": "opacity:0.85;filter:grayscale(90%) contrast(2);",
      " input[type=\"radio\"]:checked": "opacity:0.85;filter:grayscale(90%) contrast(2);",
      " #cpic": "width:84px;height:84px;display:block;",
      " #ctitle": "font-size:22px;line-height:26px;padding:7px;",
      " #cdesc": "font-size:16px;line-height:20px;padding:5px 7px 6px 7px;",
      " .cremote.hide+.csync": "display:block;",
      " .csync": "display:none;",
      " .csyncrow": "border-top: 1px dotted rgba(108, 164, 205, 0.35); padding-top:12px; padding-bottom:12px;",
      " .csyncrow:first-child": "border-top: none; padding-top:0; padding-bottom:12px;",
      "": function ($o) {
            var isApp = !!this.app,
                h = window.innerHeight,
                cdb = [
                  'max-width:660px;',
                  'padding:30px 30px 25px 30px; margin:50px auto; background:white; border-radius:1px;',
                  'box-shadow:1px 8px 15px -5px rgba(9,20,47,0.14), 0 0 20px 0px rgba(9,20,47,0.06);'
                ].join('');
            return {
              '':'min-height:'+(isApp?(h - 32)+'px!important;':'auto'),
              ' #cdbsettings':isApp?cdb:'background:white; '
            }
          
        }
    },
    "Sync": {
      "id": "cw.DB.Config.Sync",
      "data": {
        "dir": ["from",
          "to"],
        "url": "",
        "interval": "0",
        "filter": {
          "from": "",
          "to": ""
        }
      },
      "inherit": ["RT",
        "db"],
      "Src": {
      },
      "lang": {
      },
      "init": function ($o) {
            var that = this,
                d = that.data;
            $.extend(true, that.Src, d);
            $o.html($.my.formgen(that.HTML).assign(that.lang));
          
        },
      "HTML": [{
          "row": "100%"
        },
        ["",
          "txt#surl.w100p",
          {
            "plc": "{PLC_URL}"
          },
          "msg"],
        "<div class=\"w100p pt8\">",
        "<label class=\"w110 dib vat pt4 ml-1\">",
        "<input type=\"checkbox\" name=\"sfromto\" value=\"from\" class=\"w22 dib vat mt3\">",
        "{LBL_SYNCFROM}",
        "</label>",
        "<div class=\"dib vat\" style=\"width:calc(100% - 110px);\">",
        ["",
          "txt#sfilterfrom.w100p.fs90",
          {
            "plc": "{PLC_FILTERFROM}"
          },
          "msg"],
        "</div>",
        "</div>",
        "<div class=\"w100p pt4\">",
        "<label class=\"w110 dib vat pt2 ml-1\">",
        "<input type=\"checkbox\" name=\"sfromto\" value=\"to\" class=\"w22 dib vat mt3\">",
        "{LBL_SYNCTO}",
        "</label>",
        "<div class=\"dib vat\" style=\"width:calc(100% - 110px);\">",
        ["",
          "txt#sfilterto.w100p.fs90",
          {
            "plc": "{PLC_FILTERTO}"
          },
          "msg"],
        "</div>",
        "</div>",
        {
          "row": "100%",
          "label": "110px",
          "labelCss": "",
          "rowCss": "my-row pt4"
        },
        ["{LBL_INTERVAL}",
          "<div class=\"fr fs90 o80 pt6\">",
          "<span id=\"btn-sresync\" class=\"tdn pseudolink\"><span class=\"fi-loop o70\"></span> {BTN_RESYNC}</span>",
          "</div>",
          "num#sinterval.w80.fs90",
          {
            "min": "0",
            "max": "99999",
            "step": "0.5"
          },
          null,
          " ",
          "spn#sintmins"]],
      "ui": {
        "input[name=\"sfromto\"]": "dir",
        "#surl": {
          "bind": function (d,v,$o) {
                  $o.height(0).height($o[0].scrollHeight-11);
                  if (v!=null) d.url = v;
                  return d.url;
                
            },
          "check": function (d,v) {
                  if (!v) {
                    if (!this.Src.url) return this.lang.ERR_URL_REQUIRED;
                    return;
                  }
                  if (this.RT('DBs').indexOf(v) == -1 && !/^http[s]?:\/\/([^\/]{1,100}\/){1,5}[a-z0-9_$\(\)+\-]{2,200}[\/]?$/.test(v)) {
                    return this.lang.ERR_URL;
                  }
                
            },
          "css": {
            "self:tdl": function (d) {
              return !d.dir.length
              },
            ":disabled": function (d) {
              return !d.dir.length
              }
          },
          "watch": ["input[name=\"sfromto\"]"]
        },
        "#sinterval": {
          "bind": function (d,v) {
                  if (v==null) return d.interval;
                  var v0 = parseFloat(v);
                  d.interval = (Math.floor((isNaN(v0)?+d.interval:v0)*2).clamp(0,199999)/2)+'';
                  return d.interval;
                
            },
          "css": {
            "hide": function (d) {
              return !d.dir.length
              }
          },
          "watch": ["input[name=\"sfromto\"]"]
        },
        "#sintmins": {
          "bind": function (d,v) {
                  return this.lang.VAL_INTERVAL+(+d.interval?'':this.lang.VAL_CONT);
                
            },
          "watch": "#sinterval"
        },
        "#sfilterfrom": {
          "bind": function (d,v,$o) {
                  var json;
                  $o.height(0).height(($o[0].scrollHeight-11).clamp(18,400));
                  if (!d.dir.find('from')) return '';
                  if (v!=null) {
                    if (v == '') return d.filter.from = v;
                    try {json = JSON.parse(v); }catch(err){}
                    if (Object.isArray(json) && json.length) d.filter.from = json;
                    else d.filter.from = v;
                    return v;
                  }
                  return Object.isString(d.filter.from)?d.filter.from:JSON.stringify(d.filter.from);
                
            },
          "check": function (d,v) {
                  if (!v || !d.dir.find('from')) return;
                  var that = this,
                      l = that.lang,
                      isS = Object.isString;
                  if (v[0]=='[' && v.last()==']') {
                    var json;
                    try {json = JSON.parse(v); }catch(err){}
                    if (
                      !Object.isArray(json) 
                      || !json.length
                    ) return l.ERR_FJSON;
                    if (
                      json.length != 
                      json.map(e=>isS(e)&&e&&(e[0]!='_'||/^_design\/.+$/.test(e))).compact(true).length
                    ) return l.ERR_FJSON_STR;
                    return;
                  }
                  if (!/^[a-z0-9][a-z0-9_\-$\.]*\/[a-z0-9_\-$\.]+$/i.test(v)) return l.ERR_FDDOC;
                  return '';
                
            },
          "css": {
            ":disabled": function (d) {
              return !d.dir.find('from')
              }
          },
          "watch": ["input[name=\"sfromto\"]"]
        },
        "#sfilterto": {
          "bind": function (d,v,$o) {
                  var json;
                  $o.height(0).height(($o[0].scrollHeight-11).clamp(18,400));
                  if (!d.dir.find('to')) return '';
                  if (v!=null) {
                    if (v == '') return d.filter.to = v;
                    try {json = JSON.parse(v); }catch(err){}
                    if (Object.isArray(json) && json.length) d.filter.to = json;
                    else d.filter.to = v;
                    return v;
                  }
                  return Object.isString(d.filter.to)?d.filter.to:JSON.stringify(d.filter.to);
                
            },
          "check": function (d,v) {
                  if (!v || !d.dir.find('to')) return;
                  var that = this,
                      l = that.lang,
                      isS = Object.isString;
                  if (v[0]=='[' && v.last()==']') {
                    var json;
                    try {json = JSON.parse(v); }catch(err){}
                    if (
                      !Object.isArray(json) 
                      || !json.length
                    ) return l.ERR_FJSON;
                    if (
                      json.length != 
                      json.map(e=>isS(e)&&e&&(e[0]!='_'||/^_design\/.+$/.test(e))).compact(true).length
                    ) return l.ERR_FJSON_STR;
                    return;
                  }
                  if (!/^[a-z0-9][a-z0-9_\-$\.]*\/[a-z0-9_\-$\.]+$/i.test(v)) return l.ERR_FDDOC;
                  return '';
                
            },
          "css": {
            ":disabled": function (d) {
              return !d.dir.find('to')
              }
          },
          "watch": ["input[name=\"sfromto\"]"]
        },
        "#btn-sresync": {
          "bind": function (d,v) {
                  var that = this;
                  if (v == null) return;
                  
                  that.my.modal('#btn-sresync',{
                    manifest:that.RT('Resync'),
                    data:{},
                    align:'right:88px;bottom:-16px;',
                    //align:'right:0;bottom:-14px;',
                    width:280,
                    esc:true,
                    nose:'right',
                    css: 'p10',
                    screen:'#ffffff80',
                    focus:'#btn-start'
                  })
                  .then(function(res){
                    if (res.mode == 'now') {
                      cw.lib.note(
                        that.lang.MSG_RESYNC.assign(
                          that.RT('data').title.escapeHTML(), 
                          d.url.split('@').last().replace(/^http[s]?:\/\//i,'').escapeHTML()
                        )
                      );
                      that.db.sync(true, d.url);
                    }
                    else if (res.mode == 'all') {
                      cw.lib.note(
                        that.lang.MSG_RESYNC_ALL.assign(
                          that.RT('data').title.escapeHTML(), 
                          d.url.split('@').last().replace(/^http[s]?:\/\//i,'').escapeHTML()
                        )
                      );
                      that.db.sync(0, d.url);
                    }
                  });
                
            },
          "watch": ["#surl",
            "input[name=\"sfromto\"]",
            "#sinterval"],
          "events": "click.my",
          "css": {
            "self:hide": function (d) {
                      var s = this.Src;
                      return !d.url
                      || d.url != s.url
                      || !d.dir.length
                      || d.dir+'' != s.dir+''
                      || d.interval != s.interval;
                    
              }
          }
        }
      }
    },
    "Resync": {
      "data": {
        "mode": "now"
      },
      "init": function ($o) {
            $o.html(this.HTML.assign(this.lang));
          
        },
      "ui": {
        "input[name=\"mode\"]": "mode",
        "#btn-start": function (d,v) {
          if (v!=null) this.my.commit();
          }
      },
      "HTML": "<div class=\"lh170\"><label><input type=\"radio\" name=\"mode\" value=\"now\" class=\"w22 dib vat mt4\">{OPT_NOW}</label><label><input type=\"radio\" name=\"mode\" value=\"all\" class=\"w22 dib vat mt4\">{OPT_ALL}</label></div><div class=\"pt10 fs95\"><button id=\"btn-start\" class=\"green\">{BTN_GO}</button></div>"
    },
    "Ico": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwLCAwLCAyNTYsIDI1NiI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJGb2xkZXJfMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2OS4zIiB5MT0iMjA0LjIiIHgyPSIxODYuMSIgeTI9IjM5LjciPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzZEQjdGRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzg4REVGRiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJGb2xkZXJfMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI4My43IiB5MT0iMTcwLjMiIHgyPSIxNzAuOCIgeTI9Ijg4LjY3Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM2REI3RkYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4OERFRkYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBpZD0iRm9sZGVyTF8xIj48cGF0aCBkPSJNMCwwIEw0LDAgTDQsNCBMMCw0IEwwLDAgeiBNMjUyLDI1MiBMMjUyLDI1NiBMMjU2LDI1NiBMMjU2LDI1MiBMMjUyLDI1MiB6IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjxnPjxwYXRoIGQ9Ik0yMjMuOTIsNTIuOCBMMTQxLjksNTIuOCBDMTM2LjYsNDYuNSAxMzEuMiwzOS44NSAxMjkuOCwzNy44IEMxMjguNCwzNC45IDEyNS41LDMzIDEyMi4xLDMzIEw2My4zLDMzIEM2MC43LDMzIDU4LjM2LDM0LjEgNTYuNywzNi4xIEw0My4zLDUyLjggTDMxLjYsNTIuOCBDMjMuNSw1Mi44IDE3LDU5LjQgMTcsNjcuNCBMMTcsMTk2LjMgQzE3LDIwNC40IDIzLjUsMjExIDMxLjYsMjExIEwyMjMuOSwyMTEgQzIzMS45LDIxMSAyMzguNSwyMDQuNCAyMzguNSwxOTYuMyBMMjM4LjUsNjcuNCBDMjM4LjUsNTkuNCAyMzEuOSw1Mi44IDIyMy45Miw1Mi44IHoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMTIyLjEsMjcgQzEyNy40LDI3LjEgMTMyLjE3LDI5LjgzIDEzNC44LDM0LjQgQzEzNy45LDM4LjYgMTQxLjMsNDIuNyAxNDQuNyw0Ni44IEwyMjMuOTIsNDYuOCBDMjM1LjIsNDYuOCAyNDQuNSw1Ni4wIDI0NC41LDY3LjQgTDI0NC41LDE5Ni4zIEMyNDQuNSwyMDcuNzUgMjM1LjIsMjE3IDIyMy45LDIxNyBMMzEuNiwyMTcgQzIwLjIsMjE3IDExLDIwNy43NSAxMSwxOTYuMyBMMTEsNjcuNCBDMTEsNTYuMCAyMC4yLDQ2LjggMzEuNiw0Ni44IEw0MC40Nyw0Ni44IEw1Mi4wLDMyLjMgQzU0LjgsMjguOSA1OC45LDI3IDYzLjMsMjcgTDEyMi4xLDI3IHogTTEyMi4xLDM5IEw2My4zLDM5IEM2Mi42LDM5IDYxLjgsMzkuMyA2MS40LDM5LjkgTDQ4LjAsNTYuNSBMNDYuMjIsNTguOCBMMzEuNiw1OC44IEMyNi44LDU4LjggMjMsNjIuNyAyMyw2Ny40IEwyMywxOTYuMyBDMjMsMjAxLjEyIDI2LjgsMjA1IDMxLjYsMjA1IEwyMjMuOSwyMDUgQzIyOC42LDIwNSAyMzIuNSwyMDEuMTIgMjMyLjUsMTk2LjMgTDIzMi41LDY3LjQgQzIzMi41LDYyLjcyIDIyOC42LDU4LjggMjIzLjkyLDU4LjggTDEzOS4xLDU4LjggTDEzNy4zLDU2LjYgQzEzMS4zLDQ5LjUgMTI2LjMsNDMuMyAxMjQuOSw0MS4yIEwxMjQuNiw0MC44IEwxMjQuNCw0MC40MSBDMTI0LjAsMzkuNSAxMjMuMSwzOSAxMjIuMSwzOSB6IiBmaWxsPSJ1cmwoI0ZvbGRlcl8xKSIvPjwvZz48cGF0aCBkPSJNNDAuNSwxNTEuOSBMMTMwLjY1LDE1MS45IEwxMzAuNjUsMTc2LjYgTDY5LjQsMTc2LjYgTDY1LjYsMTc2LjYgTDY5LjAsMTc2LjYgQzU2LjQsMTc2LjQzIDQ1LjMsMTY4LjQgNDEuNCwxNTYuMyBDNDAuOSwxNTQuOSA0MC44LDE1My40IDQwLjUsMTUxLjkgeiBNMjE0LjMzLDE1MS45IEwxMzUuNjUsMTUxLjkgTDEzNS42NSwxNzYuNiBMMTg3LjcsMTc2LjYgTDE5MC4yLDE3Ni40IEMxOTEuOSwxNzYuMCAxOTMuNSwxNzUuOSAxOTUuMSwxNzUuNCBDMjA1LjYsMTcxLjY1IDIxMi45LDE2My4wIDIxNC4zMywxNTEuOSB6IE0xOTIuODMsMTIyLjIyIEwxOTIuMSwxMjIuMDkgTDE3OC4zLDEyMi4wOSBMMTc4LjMsMTQ2LjkgTDIxNC4zLDE0Ni45IEMyMTMuMiwxMzQuNiAyMDQuNCwxMjUuMyAxOTIuODMsMTIyLjIyIHogTTU2LjQsMTIyLjA5IEM0Ny4wLDEyNi4yIDQwLjYsMTM2LjUgNDAuMSwxNDYuOSBMODcuOSwxNDYuOSBMODcuOSwxMjIuMDkgTDU2LjQsMTIyLjA5IHogTTE3My4zLDEyMi4wOSBMOTIuOSwxMjIuMDkgTDkyLjksMTQ2LjkgTDE3My4zLDE0Ni45IEwxNzMuMywxMjIuMDkgeiBNMTU2LjMsODguOSBMMTU0LjUsODguOSBDMTQ3Ljg3LDg5LjIgMTQxLjEsOTAuNCAxMzUuNyw5NC4zIEwxMzUuNjUsOTQuMiBMMTM1LjY1LDExNy4wOSBMMTg4LjMsMTE3LjA5IEMxODYuNiwxMDEuNjcgMTcyLjgsOTAuMCAxNTYuMyw4OC45IHogTTEwMi43LDgyLjMgTDEwMi43LDgyLjMgQzgwLjcsODIuMyA2Mi44LDk2LjkgNjIuOCwxMTUuMCBDNjIuOCwxMTUuNyA2Mi44NSwxMTYuNCA2Mi45LDExNy4wOSBMMTMwLjY1LDExNy4wOSBMMTMwLjY1LDkyLjUgQzEyMi44LDg2LjUgMTE0LjEsODIuNCAxMDIuNyw4Mi4zIHoiIGZpbGw9InVybCgjRm9sZGVyXzIpIi8+PC9nPjwvc3ZnPgo="
  },
  {
    "id": "cw.DB.Shell",
    "build": 98,
    "app": {
      "name": "List",
      "title": "DB Shell",
      "version": "2.4",
      "build": 98,
      "collapsed": [".Icons"],
      "author": "ermouth",
      "timeout": "30000",
      "ico": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwLCAwLCAxMjgsIDEyOCI+CiAgPGcgaWQ9IkxheWVyXzEiPgogICAgPHBhdGggZD0iTTExNS44NjcsMjEuODcgTDcxLjY0NSwyMS44NyBDNjguNzk1LDE4LjQ3NSA2NS44NjYsMTQuODk4IDY1LjEwNiwxMy44MTIgQzY0LjM3LDEyLjI3NyA2Mi43OTIsMTEuMjIxIDYwLjk2NiwxMS4yMjEgTDI5LjI1LDExLjIyMSBDMjcuODYyLDExLjIyMSAyNi41NSwxMS44NDYgMjUuNjgsMTIuOTE5IEwxOC40NSwyMS44NzEgTDEyLjEzNCwyMS44NzEgQzcuNzg0LDIxLjg3MSA0LjIzNywyNS4zOTYgNC4yMzcsMjkuNzMgTDQuMjM3LDk4LjkyMyBDNC4yMzcsMTAzLjI1NyA3Ljc4NCwxMDYuNzc5IDEyLjEzNCwxMDYuNzc5IEwxMTUuODY2LDEwNi43NzkgQzEyMC4yMTYsMTA2Ljc3OSAxMjMuNzYzLDEwMy4yNTcgMTIzLjc2Myw5OC45MjMgTDEyMy43NjMsMjkuNzI4IEMxMjMuNzY1LDI1LjM5NSAxMjAuMjE2LDIxLjg3IDExNS44NjcsMjEuODcgeiIgZmlsbD0iI0ZGRkZGRiIvPgogICAgPHBhdGggZD0iTTI2LjM4NiwxMC43MjMgTDYxLjk5MiwxMC43MjMgTDc0LjAxOSwyNC43MiBMMTYuNjc1LDI0LjcyIEwyNi4zODYsMTAuNzIzIHoiIGZpbGw9IiNGRjNFNDgiLz4KICAgIDxwYXRoIGQ9Ik02MC45NjYsOCBDNjMuODM1LDguMDY2IDY2LjM3LDkuNTE5IDY3Ljc5MiwxMi4wMTIgQzY5LjUxMSwxNC4yNzkgNzEuMzM3LDE2LjQ2NyA3My4xNjIsMTguNjQ5IEwxMTUuODY3LDE4LjY0OSBDMTIyLjAwNiwxOC42NDkgMTI3LjAwMiwyMy42MTggMTI3LDI5LjcyOCBMMTI3LDk4LjkyMyBDMTI3LDEwNS4wMzQgMTIyLjAwNSwxMTAgMTE1Ljg2NiwxMTAgTDEyLjEzNCwxMTAgQzUuOTk1LDExMCAxLDEwNS4wMzQgMSw5OC45MjMgTDEsMjkuNzMgQzEsMjMuNjE5IDUuOTk1LDE4LjY1IDEyLjEzNCwxOC42NSBMMTYuODk4LDE4LjY1IEwyMy4xNjEsMTAuODk3IEMyNC42NDUsOS4wNjUgMjYuODg0LDggMjkuMjUsOCBMNjAuOTY2LDggeiBNNjAuOTY2LDE0LjQ0MiBMMjkuMjUsMTQuNDQyIEMyOC44NDIsMTQuNDQyIDI4LjQ1NiwxNC42MjYgMjguMjAzLDE0LjkzNyBMMjAuOTczLDIzLjg4OSBMMjAuMDAxLDI1LjA5MiBMMTIuMTM0LDI1LjA5MiBDOS41NywyNS4wOTIgNy40NzQsMjcuMTc3IDcuNDc0LDI5LjczIEw3LjQ3NCw5OC45MjMgQzcuNDc0LDEwMS40NzUgOS41NjksMTAzLjU1OCAxMi4xMzQsMTAzLjU1OCBMMTE1Ljg2NiwxMDMuNTU4IEMxMTguNDMxLDEwMy41NTggMTIwLjUyNiwxMDEuNDc1IDEyMC41MjYsOTguOTIzIEwxMjAuNTI2LDI5LjcyNyBDMTIwLjUyNywyNy4xNzYgMTE4LjQzMSwyNS4wOTEgMTE1Ljg2NywyNS4wOTEgTDcwLjEzMiwyNS4wOTEgTDY5LjE2MSwyMy45MzUgQzY1LjkzNSwyMC4wOTIgNjMuMjMzLDE2Ljc3MSA2Mi40NSwxNS42NTMgTDYyLjI5OCwxNS40MzcgTDYyLjE4NCwxNS4xOTkgQzYxLjk2NSwxNC43NDEgNjEuNDk2LDE0LjQ0MiA2MC45NjYsMTQuNDQyIHoiIGZpbGw9IiNGRkE5MDAiLz4KICA8L2c+Cjwvc3ZnPgo=",
      "maskstate": {
        "order": true,
        "filter": true
      },
      "nodetitle": "title",
      "width": [[350,
          1920],
        1200,
        1400],
      "padding": "auto"
    },
    "params": {
      "restyle": 1
    },
    "data": {
      "title": "Starting…",
      "mode": "columns",
      "start": null,
      "limit": 5000,
      "order": "type",
      "filter": [],
      "search": "",
      "asideOn": true,
      "aside": [{
          "key": "#",
          "rows": [],
          "view": "full"
        },
        {
          "key": ":",
          "rows": [],
          "view": "full"
        },
        {
          "key": "@",
          "rows": [],
          "view": "full"
        }],
      "clrUnread": " #2a70a6",
      "clrRead": " #4d5a6a",
      "clrNew": " #818b98",
      "clrHover": " #12a5dc",
      "clrBg": " #e3e9ec",
      "clrBgBrd": " #d7dde1",
      "clrBgHov": " #e3f2fd",
      "frame": {
      }
    },
    "ui": {
      "#dbname": function (d) {
            var t = this.db.settings().title, 
                html="", 
                tail='</span>'; 
            d.title = t;
            if (t.length>18) html+='<span class="fs75 lh130">'+t.truncate(18,"right","")+'<span class="fs80 lh120">...</span>';
            else if (t.length>16) html+='<span class="fs75  lh130">'+t;
            else if (t.length>14) html+='<span class="fs80  lh130">'+t;
            else html=t, tail="";
            return html+tail;
          
        },
      "#dbico": function (d) {
            return d.ico = (this.db.settings().ico || this.db.settings().pic || this.app.ico);
          
        },
      "#sdocs": {
        "init": function ($o) {
      $o.niceScroll({ cursorcolor:'#234', cursoropacitymin:0.07, cursoropacitymax:0.4, railoffset:{top:-2, left:0}});
              
          }
      },
      "#sfilters": {
        "init": function ($o) {
                $o.niceScroll({ cursorcolor:'#234', cursoropacitymin:0.07, cursoropacitymax:0.4, railoffset:{top:-2, left:2}});
              
          },
        "css": {
          "hide": function (d,v) {
            return !d.asideOn;
            }
        },
        "watch": ["#btn-filter"]
      },
      "#sorder": {
        "init": function ($o) {
                $o.tags({
                  empty:{name:'‹T›', value:'type'},
                  tags:[[
                    {name:'AZ', value:'az'},
                    {name:'<span class="fi-clock o70"></span>', value:'stamp'}
                  ]],
                  tagshim:'',
                  groupshim:'',
                  tagcss:'tag w40 dib vat tac'
                })
              
          },
        "bind": "order"
      },
      "#ssearch": {
        "delay": 100,
        "bind": "search",
        "css": {
          "my-search": /^.{2,}$/
        }
      },
      "#btn-filter": {
        "bind": function (d,v) {
                if (v!=null) {
                  d.asideOn = !d.asideOn;
                }
                var len = d.filter.length,
                    css = 'o50',
                    space = '&thinsp;',
                    t = '<span class="fi-filter {1} lh120"></span>{2}{3}';
                if (!len || len > 9) space = '';
                return t.assign(css, space, !len?'':len); 
              
          },
        "events": "click.my",
        "css": {
          "self:active": function (d,v) {
                    return !!d.asideOn;
                  
            }
        },
        "watch": ["#spanels"]
      },
      "#slist": {
        "init": function ($o) {
                var that = this,
                    d = that.data;
                
                // init list
                $o.list({
                  data:[],
        delay:0,
        chunk:50,
        sortBy:null,
        id: function(e){return e.id},
        hash:function(e) {
          var h = cw.lib.sdbm([e.css, e.pcss, e.rev]);
          return h;
        },
        template: function(e, i){ 
                    var h = that.HTML[!e.css?'RowIco':'RowP'].assign(e); 
          return h;
        }
                });
                
                // click doc/app
                $o.on('click.my', '.drow>.dname', function(){
                  var id = $(this).parent().data('docid'),
                      err = that.RunDoc(id);
                  if (err) cw.lib.note(err, 'error');
                });
                
                // click doc icon
                $o.on('click.my', '.drow>.dico', function(){
                  var $p = $(this),
                      id = $(this).parent().data('docid');
                  //console.log(that.All[id])
                  that.ShowDlg($p, {
                    manifest:  that.DocInfo,
                    data:      Object.clone(that.All[id], true),
                    css:      'p15',
                    width:    440,
                    bound:    5,
                    focus:    '#cmds button.icmd:eq(0)',
                    esc:      true,
                    enter:    false,
                    align:    'top:-16px;left:-17px;',
                    drag:      '.iheader .ititle'
                  })
                  .then(function(){
                    that.my.recalc('#slist');
                    //console.log(11)
                  })
                  .fail(function(e){
                    //console.log(113, e)
                  });
                });
              
          },
        "bind": function (d,v,$o) {
                if (v != null) return v;
                var that = this,
                    a = that.FilterAll();
                //console.log(a);
                $o.list('data', a.rows);
                that.my.recalc('#spanels');
              
          },
        "watch": ["#sorder",
          "#ssearch"]
      },
      "#spanels": {
        "init": function ($o) {
                var that =this,
                    d = that.data;
                
                // on/off filters
                $o.on('click.my', '.frow', function(evt){
                  var filter = $(this).data('filter');
                  if (d.filter.indexOf(filter) > -1) d.filter.remove(filter);
                  else d.filter.push(filter);
                  that.my.recalc('#slist');
                });
                
                // clear filter groups
                $o.on('shellclearfilter.my', (function(evt, val){
                  d.filter = d.filter.filter(e => e[0] != val);
                  //(d.aside.find(e => e.key == val)||{}).view = 'brief';
                  that.my.recalc('#slist');
                }).debounce(20));
                
              
          },
        "bind": "aside",
        "manifest": function (row) {
                var man = Object.clone(this.Panel, true);
                man.Name = this.lang.PAN_TITLES[row.key];
      //console.log(man.Name)
                return man;
              
          },
        "id": ["key"],
        "hash": ["rows",
          "view"],
        "merge": true,
        "list": "<div></div>",
        "watch": ["#sorder"],
        "check": function (d,v) {
           this.SaveLocalCfg(); 
          }
      },
      "#btn-runapp": {
        "bind": function (d,v,$o) {
                var that = this;
                if (v == null) return;
                if ($o.data('modal')) {
                  $o.modal(true);
                  return;
                }
                
                var ids = {'cw.Sys.Hub':true};
                ids[that.id] = true;
                
                var rows = that.db.app()
                .map(function(name){
                  var app = that.db.app(name);
                  
                  if (app.isEditor || ids[app.id]) return null;
                  
                  ids[app.id] = true;
                  return {
                    txt:  app.title.escapeHTML(),
                    css:  'app-'+cw.lib.sdbm(app.id),
                    url:  [that.db.name, app.name].join('/')
                  }
                }).compact();
                
                var w = $o.parent().outerWidth() - 50;
                if (w<200) w = w + 18 + $o.parent().next().outerWidth();
                
                that.ShowDlg($o, {
                  align:  'top:103%;left:'+(-$o.position().left)+'px',
                  nose:    'top',
                  width:  w,
                  esc:    true,
                  screen:  '#ffffff80',
                  manifest: that.ActionsList,
                  css:    'p15 pt13 pb13',
                  data:    {title: that.lang.RUNAPP.TITLE, rows: rows}
                })
              
          },
        "css": {
          "self:hide": function (d,v) {
                    var that = this,
                        n = that.app?that.app.name:'DB.Shell';
                    return !that.db.app().filter(e=>e!=n&&!that.db.app(e).isEditor).length;
                  
            }
        },
        "listen": {
          "settings.cw": function (d,v) {
                    this.my.check('#btn-runapp');
                  
            }
        }
      },
      "#btn-newdoc": {
        "bind": function (d,v,$o) {
                var that = this;
                if (v == null) return;
                if ($o.data('modal')) {
                  $o.modal(true);
                  return;
                }
                
                var ids = {};
                ids[that.id] = true;
                
                var acts0 = that.db.actions(),
                    eds = {};
                
                Object.keys(acts0).forEach(function(t){
                  (acts0[t].create || []).forEach(function(id){
                    if (!eds[id]) eds[id] = t;
                  });
                });
                
                //console.log(eds)
                
                var rows = that.db.app()
                .map(function(name){
                  var app = that.db.app(name);
                  //console.log(app.id)
                  if (!app.isEditor || ids[app.id] || !eds[app.id]) return null;
                  
                  ids[app.id] = true;
                  
                  return {
                    txt:  that.lang.NEWDOC.APPTYPE.assign(app.title.escapeHTML()),
                    //txt:  app.title.escapeHTML(),
                    css:  'app-'+cw.lib.sdbm(app.id),
                    url:  [that.db.name, app.name, cw.lib.tourl64(['create',''])].join('/')
                  }
                }).compact();
                
                var w = $o.parent().outerWidth() - 50;
                if (w<200) w = w + 18 + $o.parent().next().outerWidth();
                
                that.ShowDlg($o, {
                  align:  'top:103%;left:'+(-$o.position().left)+'px',
                  nose:    'top',
                  width:  w,
                  esc:    true,
                  screen:  '#ffffff80',
                  manifest: that.ActionsList,
                  css:    'p15 pt13 pb13',
                  data:    {title: that.lang.NEWDOC.TITLE, rows: rows}
                })
              
          },
        "css": {
          "self:hide": function (d,v) {
                    var that = this,
                        n = that.app?that.app.name:'DB.Shell',
                        act = that.db.actions(),
                        ok = false;
                    if (that.db.settings('readOnly')) return true;
                    Object.values(act).forEach(e=>e.create?ok=true:'');
                    return !ok;
                  
            }
        },
        "listen": {
          "settings.cw": function (d,v) {
                    this.my.check('#btn-newdoc');
                  
            }
        }
      },
      "#btn-resync": {
        "bind": function (d,v) {
                if (v == null) return;
      var that = this;
                that.db.sync(false);
                cw.note(that.lang.MSG_RESYNC);
                (function(){
                  that.db.sync(true);
                  that.Syncing = true;
                }).delay(700);
    
          },
        "events": "click.my",
        "css": {
          "self:hide": function (d,v) {
                    if (!this.db.sync) return true;
                    return (
                      this.db.settings('url') || (
                        Object.size(this.db.sync())  == 0
                        && 
                        !this.db.settings('sync').filter(e=>!!e.dir.length).length
                      )
                    );
                  
            }
        },
        "listen": {
          "sync.cw": function (d,v) {
                    if (v && v.dbid == this.db.name) this.my.check('#btn-resync');
                  
            }
        }
      }
    },
    "All": {
    },
    "Filtered": {
      "rows": [],
      "ctr": {
      },
      "total": 0
    },
    "Actions": {
    },
    "Apps": {
    },
    "Ico": {
    },
    "Blobs": {
    },
    "Types": {
    },
    "RT": function (key) {
    return null==key?this:Object.isArray(key)?cw.lib.getref(this,key):this[key];
  
      },
    "Restyle": function () {
      this.my.restyle();
      },
    "die": function ($o) {
          
    // Revoke obj urls on app close
    var that = this;
    Object.keys(that.Blobs)
          .forEach(k => URL.revokeObjectURL(that.Blobs[k]));
          
          // Unmount niceScroll
          ['#sdocs','#sfilters'].forEach(function(i){
            var f = $o.find(i).getNiceScroll;
      if (typeof f == 'function') f().remove();
          });
          
          // Unmount list
          $o.find('#slist').list('remove');
  
      },
    "lang": {
      "en": {
        "TIP_FILTER": "Show/hide filters panel",
        "BTN_NEWDOC": "Doc...",
        "TIP_NEWDOC": "Create new document in this bucket...",
        "BTN_RUN": "Run...",
        "TIP_RUN": "Start an app...",
        "BTN_RESYNC": "Sync ",
        "TIP_RESYNC": "Resync bucket with the remote DB",
        "MSG_RESYNC": "Started forced resync",
        "PLC_SEARCH": "Search...",
        "ERR_NOAPP": "No app to open doc {1}, sorry",
        "PAN_TITLES": {
          "#": "Tags",
          ":": "Types",
          "@": "Users"
        },
        "PAN_APPTYPE": "{1} docs",
        "PAN_ROLES": "Roles",
        "NEWDOC": {
          "TITLE": "Create new doc",
          "APPTYPE": "{1} doc"
        },
        "RUNAPP": {
          "TITLE": "Start bucket app"
        },
        "E_400": "Can’t run app, invalid params",
        "E_404": "Document not found",
        "E_404_NOAPP": "App not found, can’t run",
        "E_405": "Unrecognized command, can’t open document"
      },
      "ru": {
        "TIP_FILTER": "Показать/скрыть панель фильтров",
        "BTN_NEWDOC": "Создать...",
        "TIP_NEWDOC": "Создать новый документ...",
        "BTN_RUN": "Старт...",
        "TIP_RUN": "Запустить приложение...",
        "BTN_RESYNC": "Синхр.",
        "TIP_RESYNC": "Синхронизировать локальные данные с сервером",
        "MSG_RESYNC": "Запущена принудительная репликация",
        "PLC_SEARCH": "Поиск...",
        "ERR_NOAPP": "Нет подходящего приложения для открытия документа {1}",
        "PAN_TITLES": {
          "#": "Теги",
          ":": "Типы документов",
          "@": "Пользователи"
        },
        "PAN_APPTYPE": "Документы {1}",
        "PAN_ROLES": "Роли",
        "NEWDOC": {
          "TITLE": "Создать документ",
          "APPTYPE": "{1}"
        },
        "RUNAPP": {
          "TITLE": "Запуск приложения"
        },
        "E_400": "Невозможно запустить приложение, неверные параметры",
        "E_404": "Документ не найден",
        "E_404_NOAPP": "Приложение не найдено",
        "E_405": "Неизвестная команда приложению"
      }
    },
    "init": function ($o) {
  var that = this,
            d = that.data,
            T0 = Date.now();
        
        // Move bound F.* functions to this.
        Object.keys(that.F).forEach(k=>that[k] = that.F[k].bind(that));
        
        // Debounce Restyler
        that.Restyle = that.Restyle.debounce(1000);
        
        // Debounce cfg to ls saver
        that.SaveLocalCfg = that.SaveLocalCfg.debounce(300);
        
        // Set title
        d.title = that.db.settings().title;
        
        // Prepare if /_users DB
        that.isUsersDB();
        
        // Generate icons
        that.Icons['type-unknown'] = that.Ico2url(that.Icons['type-unknown']);
        that.GenIcons(null, true);
        
        // restore tags state
        if (that.app && that.app.local) {
          var t = that.app.local('tags/'+that.db.name);
          if (Object.isObject(t)) {
            d.aside.forEach(function(e){
              e.view = t[e.key]=='brief'?'brief':'full';
            });
          }
        }
        
        // On after app start...
        $o.then(function(){
          that.my.restyle();
          return that.ReadRows({}, true);
        })
        .then(function(){
          // start watchers
          that.db.watch('').progress(function(docs){
            var i, keys=[], del=[];
            for (i=0;i<docs.length;i++) {
              if (docs[i]._deleted || docs[i]._hidden) del.push(docs[i]._id);
              else if (docs[i].type) keys.push(docs[i]._id);
            }
            if (keys.length) that.ReadRows({keys:keys}, true);
            if (del.length) {
              del.forEach(i => delete that.All[i]);
              if (!keys.length) that.my.recalc('#slist');
            }
          }.debounce(0));
        });
        
        // read stale view before start
        return that.ReadRows({stale:'ok'}, false)
        .then(function(){
           // Build html after stale view read success
          $o.html(that.Despace(that.HTML.App).assign(that.lang));
        });
        
        // - - - - - -
        
        function _t(s){
          var T1 = Date.now();
          //console.log(s || 'T', T1 - T0);
          T0 = T1;
        }
      },
    "style": {
      " ": function ($o) {
            var that = this,
                d = that.data,
                docInfo = !! that.DocInfo;
            
            var fs = 16,            // font size
                nh = 2*fs - 2,      // nav panel content height
                lh = 1.4*fs | 0;    // line height
            
            var frame = _calculateDimensions();
            
            $.extend(that.data.frame, frame); 
            
            // Generate obj with values rewrited, 
            // tricky but very fast way
            var css = JSON.parse(JSON.stringify({
              // Entire app
              ' ':        'width:{w}px; height:{h}px; font-size:{fs}px; line-height:{lh}px;',
              
              // Navpane
              ' #snav':    {
                '':          '{dv}; width:{w}px; height:{navh}px;',
                ' #dbico':  '{dv}; width:{nh}px; height:{nh}px; ',
                ' #dbname':  [
                  '{dv}; {oh}; {ell}; width:calc({colw}px - {nh}px - {padw}px - 40px); ',
                  'font-size:1.5em; line-height:{nh}px; padding:0 0 0 4px;'
                ].join('')
              },
              
              // Filters and doc list block below navpane
              ' #sapp':    '{dv}; height:{apph}px; padding-top:{padh}px;',
              ' .colh':    'height:{colh}px;',
              ' .colw':    'width:{colw}px;',
              ' .colwg':  'width:calc({pcolw}px + {padh}px);',
              ' .panw':    'width:{panw}px;',
              
              // Filters
              ' #sfilters':  {
                '':  [
                  '{dv}; width:calc({colw}px - {padw}px); height:{colh}px; border-right:1px dashed rgba(108,164,205,0.35);',
                  'padding-right:{padw}px; margin-right:{padw}px; outline:none; white-space:normal;'
                 ].join(''),
                
                ' .fpanel #fname':{
                  '':'color:inherit; transition:color 0.3s;',
                  ':hover':'color:{clrUnread};'
                },
                
                ' .frow':{
                  ':hover':{
                    '':            'color:{clrHover};',
                    ' .ficon':    'opacity:0.6;',
                    ' .ficon.ficon-type':  'opacity:1;'
                  },
                  '.factive':        {
                    '':  'background-color:{clrBg}b0;',
                    ' .ficon':'opacity:0.7;',
                    ' .ficon.ficon-type':'opacity:1;'
                  },
                  '.factive:hover':  'background-color:{clrBgHov};'
                }
              },
              
              
              
              // Docs with filters pane open
              '  #sdocs':  {
                '':          '{dv}; width:{panw}px; height:{colh}px; outline:none; white-space:normal;',
                
                // ... doc list itself
                ' #slist':  [
                  'width:100%; height:auto!important; overflow-y:visible!important;',
                  'column-count:{xcols}; column-gap:{padh}px; clear:both;'
                ].join(' ')
              },
              // Docs with filters pane hidden
              ' #sfilters.hide + #sdocs':{
                '':          'width:{w}px; padding-left:0px;',
                ' #slist':  'column-count:{cols};'
              },
              
              // Row
              ' .drow':{
                '':          '{dv}; width:{pcolw}px; height:{rowh}px; margin-bottom:1px; white-space:nowrap;',
                
                '.row-sub':{
                  ':before':[
                    'content:" ";position:absolute; width:1px; height:11px; top:-10px; left:9px; ',
                    'border-right:1px solid #95a4b7; {oh};'
                  ].join(''),
                  ' .dico':'opacity:0.6;background-size:18px;background-position:2px 3px;width:23px;'
                },
                
                '.row-parent':'font-weight:bolder; font-size:1.05em;',
                
                ' .dname':{  
                  '':          '{dv}; {oh}; {ell}; max-width:{rname}px; padding-left:3px; transition: color 0.3s; cursor:pointer;',
                  ':hover':    'color:{clrHover}!important;'
                },
                '.row-app .dname':  'font-weight:500; font-size:1.05em;',
                
                ' .dico':    [
                  '{dv}; width:{lh}px; height:{lh}px; background-position: 0px 1px;',
                  'background-repeat:no-repeat; background-size:{xlh}px {xlh}px;',
                  docInfo ? 'cursor:help; cursor:context-menu;':''
                 ].join(' ')
              },
              
              // Row colors
              ' .drow.upd-new .dname':    'color:{clrNew};',
              ' .drow.upd-read .dname':    'color:{clrRead};',
              ' .drow.upd-unread .dname':  'color:{clrUnread};',
              
              ' .drow.crypto-lock .dname':{
                '':  'padding-right:10px;',
                ':after':{
                  '': 'content:"\\f16a";position:absolute;top:2px;right:0;font-size:11px;line-height:12px;'
                  +'color:rgba(255,0,42,0.42);font-family:"foundation-icons";'
                },
              },
              
              ' .drow.crypto-ok .dname':{
                '':  'padding-right:10px;',
                ':after':{
                  '': 'content:"\\f20a";position:absolute;top:2px;right:0;font-size:11px;line-height:12px;'
                  +'color:rgba(106,186,0,0.56);font-family:"foundation-icons";'
                }
              },
              
              // Tags as buttons
              ' .btnswitch':{
                ' .tag':'border: 1px solid {clrBgBrd}; color:{clrRead};',
                ' .tag:hover':'color:{clrHover};',
                ' .tag.active':'border:1px solid {clrBg}!important;background-color:{clrBg};color:{clrRead};z-index:2;',
                ' .tag.active:hover':'border:1px solid {clrBgHov}!important;background-color:{clrBgHov};color:{clrUnread};z-index:2;',
                ' .tag:first-child':'border-radius:3px 0 0 3px; border-left: 1px solid {clrBgBrd};',
              },
              
            })
            .assign(frame));
            
            // Add icons classes
            Object.keys(that.Icons).forEach(function(k){
              var s = 'background-image:url("'+that.Icons[k]+'");';
              css[' .drow.'+k+'>.dico'] = s;
              //if (k.substr(0,4) == 'type'){
                css[' .ficon.'+k] = s;
              //}
            });
            
            return css;
            
            
            // - - - - - - - - - - - - 
            function _calculateDimensions(){
              var h   = that.data.maxHeight || window.innerHeight || $(window).height(),
                  ofs = $('#cw-header').is(':visible')?$('#cw-header').outerHeight(true):0,
                  $sp = $('#cw-space'),
                  pt   = parseInt($sp.css('paddingTop')) || 0,
                  pth = pt - 2,
                  pb   = parseInt($sp.css('paddingBottom')) || 10,
                  ah   = h - ofs - pt - pb;
              var w     = $o.width() | 0,
                  cols  =  w<390?1:w<660?2:w<880?3:w<1100?4:w<1320?5:w<1540?6:7,
                  xcols  = cols - 1,
                  colw  = w / cols | 0,
                  panw  = w - colw,
                  pcolw = (panw - (xcols - 1) * pth) / xcols | 0,
                  col1  = 1;
              var s = {
                dv:      'display:inline-block;vertical-align:top',
                oh:      'overflow:hidden',
                ell:    'white-space:nowrap; text-overflow:ellipsis',
                fs:      fs,
                lh:      lh,
                xlh:    lh - 2,
                h:      ah,
                padh:    pth,
                nh:      nh,
                navh:    nh + pth,
                apph:    ah - nh - pth,
                colh:    ah - nh - 2*pth,
                w:      w,
                padw:    pth - 2,
                cols:    cols,
                xcols:  xcols,
                colw:    colw,
                panw:    panw,
                pcolw:  pcolw,
                rowh:    nh + 2,
                rname:  pcolw - lh
              };
              
              // copy colors
              Object.keys(d)
              .filter (k=>'clr'==k.substr(0,3))
              .forEach(k=>s[k]=d[k]);
              
              return s;
            }
          
        },
      " #sfilters": {
        " .frow": {
          "": ["white-space:nowrap;padding:0 4px 0 0;border-radius:1px; margin-top:1px;",
            "cursor:pointer; transition: color 0.3s, background-color 0.4s;"],
          " .ffilter": "width:calc(80% - 20px); display:inline-block;vertical-align:top; overflow:hidden;text-overflow:ellipsis;",
          " .ficon": "display:inline-block;vertical-align:top;width:20px;height:20px;overflow:hidden;opacity:0.4; font-size:14.5px; text-align:center; background-position: 2px 3px;background-repeat:no-repeat; background-size:14px 14px; transition: opacity 0.3s;",
          " .ficon.ficon-type": "opacity:0.7;",
          " .ficon.ficon-type.type-unknown": "opacity:1;"
        },
        " .fpanel": {
          "": "",
          " #flines": "width:100%; display:block; padding: 0 0 6px 8px; font-size:14px; line-height:20px;",
          " #fname": {
            "": "cursor:pointer;"
          }
        }
      },
      " #snav": {
        " button, input": "font-size:15px; line-height:19px; padding-top:3px; padding-bottom:4px;",
        " #sactions button": "padding-left:12px;padding-right:12px;"
      },
      " .btnswitch": {
        "": "padding-left:1px;",
        " .tag": ["border-radius:0; transition:background-color 0.3s, color 0.3s;font-size:inherit; line-height:19px",
          "margin-left:-1px; cursor:pointer; padding: 3px 0 4px 0"],
        " .tag:first-child": "border-radius:3px 0 0 3px;",
        " .tag:last-child": "border-radius:0 3px 3px 0;",
        " .tag:first-child:last-child": "border-radius:3px;"
      },
      " button.markfocus:focus:after": "content:\" \";position:absolute;top:3px; right:3px;width:4px;height:4px;border-radius:3px; overflow:hidden;background-color: #fff!important;z-index:+2;"
    },
    "HTML": {
      "App": "<div id=\"snav\" class=\"bbs xgray\">\n\n  <div class=\"colw dib vat oh\">\n    <img id=\"dbico\" src=\"\">\n    <div id=\"dbname\" class=\"bolder\"></div>\n    <div class=\"dib vat btnswitch pt1\">\n      <div id=\"btn-filter\" class=\"active w40 dib vat tac nw fs90 tag\" title=\"{TIP_FILTER}\"></div>\n    </div>\n  </div>\n\n  <div id=\"sactions\" class=\"panw dib vat oh nw tac pt1\">\n    \n    <div class=\"fr tal\" style=\"max-width:200px;width:20%;\">\n      <div class=\"fi-magnifying-glass blue o50 fs95\" style=\"position: absolute; z-index: +1; left: 7px;top: 3px;\"></div>\n      <input type=\"text\" id=\"ssearch\" class=\"ui-search w100p ml0 mr0 mt0 pr10\" \n             placeholder=\"{PLC_SEARCH}\" style=\"background-image:none;padding-right:19px!important;\">\n      <span class=\"fs80 dib vat pt2 blue ui-search-clear\" style=\"margin-left:-19px!important;\" \n            onclick=\"$(this).siblings('input:eq(0)').val('').blur()\">✕</span>\n    </div>\n\n    <div class=\"pr16 dib vat\">\n      <button id=\"btn-newdoc\" class=\"mr2 green\" data-sdlg=\"nav\"><span class=\"fi-plus o60 fs90 lh120\"></span> {BTN_NEWDOC}</button>\n      <button id=\"btn-runapp\" class=\"mr2\"\tdata-sdlg=\"nav\"><span class=\"fi-play o60 fs90 lh120\"></span> {BTN_RUN}</button>\n      <button id=\"btn-resync\" class=\"mr2 hide\"><span class=\"fi-loop o70 lh120\"></span> {BTN_RESYNC}</button>\n    </div>\n    \n    <div id=\"sorder\" class=\" dib vat btnswitch\"></div>\n\n  </div>\n</div>\n\n<div id=\"sapp\" class=\"xgray nw\">\n  <section id=\"sfilters\" class=\"mt-3 hide\">\n    <section id=\"spanels\" class=\"\">\n    </section>\n  </section>\n\n  <section id=\"sdocs\">\n    <section id=\"slist\">\n    </section>\n  </section>\n</div>",
      "Row": "<div class=\"drow {css}\" data-docid=\"{hid}\"><div class=\"dico\"></div><div class=\"dname\">{htitle}</div></div>",
      "RowP": "<div class=\"drow {css} {pcss}\" data-docid=\"{hid}\"><div class=\"dico\"></div><div class=\"dname\">{htitle}</div></div>",
      "RowIco": "<div class=\"drow {css}\" data-docid=\"{hid}\"><div class=\"dico\" style=\"background-image:url('{pic}');\"></div><div class=\"dname\">{htitle}</div></div>"
    },
    "F": {
      "ReadRows": function _readRows(opts0,redraw) {
          var that = this,
              d = that.data,
              opts = $.extend(true, {
                limit:    d.limit,
                startkey:  d.start
              }, opts0 || {});
          
          if (opts.keys) ['startkey','endkey'].forEach(k => delete opts[k]);
          var q = cw.version() < '2.4.0' ? 'cloudwall/info':'info';
          return that.db.query(q, opts)
          .then(function(res){
            that.CacheRows(res.rows);
            if (redraw) {
              that.Restyle();
              that.my.recalc('#slist');
            }
          })
        },
      "CacheRows": function _cacheRows(list) {
  var that     = this,
              d       = that.data,
              noApps   = !!that.db.settings().dataOnly,
              ckeys    = cw.lib.a2o(cw.crypto.keys().map(e => e.id)),
              types,
              isStar = true,
              acc     = {},
              _sdbm   = cw.lib.sdbm;
          
          // Restrict types if acl present
          if (cw.acl) {
            types = Object.values(that.db.acl()).reduce(function(a,b){
              Object.keys(b).forEach(t => a[t] = b[t].slice(0));
              return a;
            }, {});
            isStar = !!types['*'];
          }
          
          list.forEach(function(r){
            var v   = r.value,
                t   = v.type || '',
                css = 'type-unknown',
                idx,
                url;
            if (noApps && t == 'manifest') return;
            if (null != types && !types[t] && !isStar) return;
            
            // Generate ico class
            
            // ...icon present in the doc
            if (v.pic) {
              idx = 'doc-'+_sdbm(r.id);
              url = that.Ico2url(v.pic);
              if (!url) css = '';
              else {
                that.Icons[idx] = url;
                css = idx;
              }
            }
            // ...icon by type
            if (!v.pic || !css) {
              idx = 'type-'+_sdbm(t);
              css = that.Icons[idx]? idx : css;
            }
            
            if (v.creator && /^-[a-z0-9]{8}$/.test(v.creator.substr(-9)) && v.creator.length > 10) {
              v.creator = v.creator.substr(0, v.creator.length-9);
            }
            
            // Mark manifest
            if (v.app && t == 'manifest') css += ' row-app';
            
            // Index
            if (!v.index) {
              v.index = ([
                v.title,
                '='+v.type+(v.app?' =app':''),
                r.id,
                v.creator?'@'+v.creator:''
              ])
              .add ( Object.keys(v.tags).map(e=>'#'+e) )
              .join(' ')
            }
            
            // Is read?
            var read = that.db.isread(r.id);
            if (!read) css += ' upd-new';
            else if (read.rev.split('-')[0] != v.rev+'') css += ' upd-unread';
            else css += ' upd-read';
            
            // Is crypto?
            if (v.crypto) {
              css += ckeys[v.crypto]?' crypto-ok':' crypto-lock'
            }
            
            acc[r.id] = $.extend(true, {
              id:      r.id,
              hid:    r.id.escapeHTML(),
              css:     css,
              pcss:    '',
              htitle:  v.title.escapeHTML()
            }, v);
          });
          
          $.extend(that.All, acc);
          acc = {};
          
        },
      "GenIcons": function (arg,force) {
          
          // Generates icon(s) urls and stores them:
          // — in this.Blobs{} under blob hash
          // — in this.Icons{} under 
          
          // arg values:
          // — null for updating all app icons
          // — string doc.type for updating only type
          // — 
          
  var that = this,
              d = that.data,
              isS = Object.isString,
              isA = Object.isArray,
              isO = Object.isObject,
              Blobs = that.Blobs,
              _sdbm = cw.lib.sdbm,
              _ico2url = that.Ico2url;
          
          var types = [];
          
          if (isS(arg)) types.push(arg);
          else if (null == arg) types = Object.keys(that.db.actions());
          
          if (null == arg && force) {
            // rebuild app icons
            var apps = that.db.app().reduce(function(apps, id){
              var app = that.db.app(id);
              if(app.ico) apps[app.id] = {
                name:   app.name,
                title:   app.title,
                id:     app.id, 
                ico:     app.ico,
                types:  app.types || {}
              };
              return apps;
            }, {});
            
            Object.keys(apps).forEach(function(k){
              var app = apps[k];
              that.Icons['app-'+_sdbm(app.name)] = that.Icons['app-'+_sdbm(app.id)] = _ico2url(app.ico);
              if (isO(app.types)) {
                Object.keys(app.types).forEach(function(t){
                  var acl = that.db.acl(app.id.from(3), t),
                      types = app.types[t],
                      actions = acl.indexOf('*')==-1?acl.intersect(types):types;
                  if (actions.indexOf('edit')>-1 || actions.indexOf('view')>-1) {
                    that.Types[t] = {
                      name:     app.name,
                      title:    app.title || app.name,
                      id:        app.id,
                      actions:  actions.slice(0)
                    };
                  }
                })
              }
            });
          }
            
          types.forEach(function(type){
    var stype = _sdbm(type);
            Object.values(that.db.actions(type))
            .flatten().unique().forEach(function(id){
              var sid = _sdbm(id);
              // gen icons by type
              if (that.Icons['app-'+sid]) {
                // icon already in place
                that.Icons['type-'+stype] = that.Icons['app-'+sid];
              }
              else {
                var form = that.db.form(id);
                if (form && form.app) {
                  if (form.app.ico) that.Icons['type-'+stype] = _ico2url(form.app.ico);
                  if (form.app.types && form.app.types[type]) that.Types[type] = {
                    name:      form.app.name,
                    title:    form.app.title,
                    id:        form.id,
                    actions:  form.app.types[type]
                  };
                }
              }
            });
          });
          
          return that.Icons;
          
        },
      "FilterAll": function _filterRows(filters) {
  var that = this,
              size = Object.size,
              keys = Object.keys,
              d = that.data,
              ftags  = {},
              fusers = {},
              ftypes = {},
              search = d.search.trim(),
              ishidden = that.db.ishidden || function(){return null;},
              refind = null,
              ord = d.order+'';
          
          if (search) refind = search.split(' ').compact(true).map(function(e){
            return new RegExp(RegExp.escape(e), 'i');
          });
          
          var res = {
            rows:    [],
            ctr:     {},
            total:  0
          };
          
          // build filters
          (Object.isArray(filters)?filters:d.filter).forEach(function(i){
            var pf   = i[0],
                tail = i.substr(1);
            if (!tail) return;
            res.ctr[i] = 0;
            if (pf == '#') return ftags [tail] = true;
            if (pf == '@') return fusers[tail] = true;
            if (pf == ':') return ftypes[tail] = true;
          });
          
          var atags      = Object.keys(ftags),
              hastags    = !!atags.length,
              hasusers   = !!size(fusers),
              hastypes   = !!size(ftypes),
              parents    =  {};
          
          var fr = Object.values(that.All)
          .filter(function(row){
            var i, ok = true;
            
            if (ishidden(row.id)) return false;
            
            // all tags must be present in the doc
            if (hastags) {
              if (!size(row.tags)) ok = false;
              for (i = 0; i < atags.length && ok; i++) {
                if (!row.tags[atags[i]]) ok = false;
              }
            }
            if (!ok) return false;
            
            keys(row.tags).forEach(t => res.ctr['#'+t] = (res.ctr['#'+t] || 0) + 1);
            
            return ok;
          })
          .filter(function(row){
            var i, ok = true;
            
            // type must be present if filtered
            if (ok && hastypes) ok = !!ftypes[row.type];
            if (row.type)  res.ctr[':'+row.type] = (res.ctr[':'+row.type] || 0) + 1;
            
            // user must be present if filtered
            if (ok && hasusers) ok = !!fusers[row.creator];
            if (row.creator) res.ctr['@'+row.creator] = (res.ctr['@'+row.creator] || 0) + 1;
            
            if (!ok) return false;
            
            // full-text search
            if (null!==refind && row.index) {
              refind.forEach(re => ok = ok && re.test(row.index))
            }
            
            res.total += ok?1:0;
            return !!ok;
            
          });
          
          if (ord == 'type') {
            
            // stash filtered parents
            var frid = {};
             fr.forEach(row=>frid[row.id]=row.type);
            
            fr = fr.map(function(row){
              var p;
              if (ord != 'type') {
                row._p = null;
                row.pcss = '';
                return row;
              }
              if (row.parent && frid[row.parent] && (p = that.All[row.parent])) {
                if (!row._p && row.pcss.indexOf('row-sub')==-1) row.pcss += ' row-sub';
                row._p = {type: p.type, title: p.title, app:!!p.app};
                parents[row.parent] = true;
              }
              else {
                row._p = null;
                row.pcss = '';
              }
              return row;
            })
            .map(function(row){
              if (ord != 'type') {
                row._p = null;
                row.pcss = '';
                return row;
              }
              var isp = row.pcss.indexOf('row-parent')>-1;
              if (parents[row.id]) {
                if (!isp) row.pcss += ' row-parent';
              }
              else if (isp) {
                row.pcss = row.pcss.replace(' row-parent','')
              }
              return row;
            });
          }
          else {
            fr = fr.map(function(row){
              row._p = null;
              row.pcss = '';
              return row;
            });
          }
          
          
          // Sort;  
          res.rows = fr.sort(that.Sort[d.order]);
          
          // Build aside panel
          that.BuildAside(res);
          
          return res;
          
        },
      "BuildAside": function (r) {
          
          // Builds data struct for aside panel
          // arg r is the result of this.FilterAll call,
          // {rows:[], ctr: {}, total:0 }
          
  var that = this,
              d = that.data,
              keys = Object.keys,
              asd = that.data.aside,
              m = {'#':[], '@':[], ':':[]},
              f = cw.lib.a2o(d.filter),
              acts = that.db.actions();
          
          keys(r.ctr).forEach(function(k){
            var panel = k[0];
            if (!m[panel]) return;
            
            var sname = k.substr(1),
                hname = sname.escapeHTML();
            
            if (panel==':' && that.Types[sname]) hname = that.lang.PAN_APPTYPE.assign(that.Types[sname].title.escapeHTML());
            
            var icon;
            if (panel == ':') {
              if (acts[sname]) icon = 'ficon-type type-'+cw.lib.sdbm(sname);
              else icon = 'ficon-type type-unknown';
            }
            else {
              icon = panel=='#'?'fi-price-tag':'fi-torso';
            }
            
            m[panel].push({ 
              name:    sname,
              hname:  hname,
              ctr:    r.ctr[k], 
              css:     !!f[k]?'factive':'',
              active:  !!f[k],
              filter:  k.escapeHTML(),
              icon:    icon
            });
          });
          
          asd.forEach(function(panel){
            var k = panel.key;
            panel.rows = m[k].sort(_sortFilters);
          });
          
          // - - - - - -
          
          function _sortFilters(a,b) {
            //return b.ctr - a.ctr;
            return a.name>b.name?1:a.name==b.name?0:-1;
          }
        },
      "Ico2url": function _ico2url(s) {
          var hash = cw.lib.sdbm(s),
              Blobs = this.Blobs;
          if (Blobs[hash]) return Blobs[hash];
          var blob = s.split(';base64,');
          Blobs[hash] = URL.createObjectURL(cw.lib.base642blob(blob[1], null, blob[0].substr(5)));
          return Blobs[hash];
        },
      "Despace": function (s) {
  return s.split(/[\r\n]{1,2}/).map(e=>e.replace(/^[\t\s]*/,'')).join('')
        },
      "ShowDlg": function (node,params) {
  var that = this,
              d = that.data;
          
          var opts = $.extend({
            root: that.my.root()
          }, params);
          
          var res, $n;
          
          // detect ctrl group
          
          
          if (Object.isString(node)) $n = that.my.find(node);
          else if (node) $n = node;
          
          if ($n.length) {
            var g = $n.data('sdlg');
            
            if (g) {
              var $a = that.my.find('*[data-sdlg="{1}"]'.assign(g));
              $a.each(function(){
                var $e = $(this);
                if ($e.data('modal')) $e.modal(true);
              });
            }
            
            res = $n.modal(opts);
          }
          
          return res || $.Deferred().reject('Cancel').promise();
          
        },
      "RunDoc": function _runDoc(id) {
          var that = this;
          if (!that.All[id]) return false;
          var doc = that.All[id],
              t = that.Types[doc.type],
              err = '';
          // open doc in editor
          if (t && !doc.app) {
            var action = (that.db.settings('readOnly')?['view','edit']:['edit','view']).reduce(function(acc, b){
              if (acc) return acc;
              if (t.actions.indexOf(b)>-1) return b;
            },'');
            var url = [that.db.name, t.name, cw.lib.tourl64([action, id])].join('/');
            that.app.run(url);
          }
          // run the app
          else if (doc.app == 'app') {
            var man = that.db.ram(doc.id);
            if (man && man.length) {
              that.app.run([that.db.name, man[0].manifest.app.name].join('/'));
            }
          }
          // run the editor with empty doc
          else if (doc.app == 'editor'){
            var man = that.db.ram(doc.id);
            if (man && man.length) {
              var url = [that.db.name, man[0].manifest.app.name, cw.lib.tourl64(['create', ''])].join('/');
              that.app.run(url);
            }
          }
          // if json ed present, open as json
          else if (that.db.app().indexOf('Sys.JSON')>-1) {
            that.app.run([that.db.name, 'Sys.JSON', cw.lib.tourl64(['edit', id])].join('/'));
          }
          else err = that.lang.ERR_NOAPP.assign(doc.hname);
          
          return err;
        },
      "Cmd": function _cmd(cmd,id,params) {
  var that = this,
              d = that.data,
              lang = that.lang,
              db = that.db,
              pi = $.Deferred(),
              doc = that.All[id],
              err = [];
          
          if (!cmd || !id)   return _err(400, lang.E_400);
          if (!doc)         return _err(404, lang.E_404);
          
          var type = doc.type,
              T = that.Types[type];
          
          if ('_run' == cmd) {
            var man = that.db.ram(doc.id);
            if (!man || !man.length || !cw.lib.getref(man[0], 'manifest.app.name')) {
              return _err(400, lang.E_404_NOAPP);
            }
            // try to run
            _run(man[0].manifest, params);
          } 
          else {
          
            var acts = db.actions(type);
            if (!acts[cmd] || !acts[cmd].length) acts = db.actions('*');
            if (!acts[cmd] || !acts[cmd].length) return _err(405, lang.E_405);
            
            var man = db.form(acts[cmd][0]);
            
            if (!man || !cw.lib.getref(man, 'app.name')) {
              return _err(400, lang.E_404_NOAPP);
            }
            // try to run
            _run(man, [cmd, id]);
            
          }
          
          
          return pi.promise();
          
          // - - - - - - -
          
          function _err(code, msg) {
            return pi.reject(code, msg).promise();
          }
          
          function _run(man, opts) {
            // try to run
            var url = [
              that.db.name, 
              man.app.name
            ].join('/');
            
            if (opts) url += '/'+ cw.lib.tourl64(opts);
            
            that.app.run(url)
            .then(function(slot)      {  pi.resolve(); })
            .fail(function(code, msg)  { _err(code==1?400:500, msg); });
          }
        },
      "SaveLocalCfg": function () {
  // saves local cfg to ls
          var that = this,
              d = that.data;
          
          if (!that.app || !that.app.local) return;
          
          // save tags
          var t = {};
          d.aside.forEach(e => t[e.key] = e.view);
          that.app.local('tags/'+that.db.name, t);
          
        },
      "isUsersDB": function () {
          var that = this,
              d = that.data;
  if (!that.app || !that.db || !Object.isFunction(that.db.settings)) return false;
          
          var s = that.db.settings();
          
          if (!/\/_users$/.test(s.url) && !(s.sync||[]).find(e=>(/\/_users$/).test(e.url))) return false;
          
          d.aside = [d.aside.find(e=>e.key=='#')];
          that.lang.PAN_TITLES['#'] = that.lang.PAN_ROLES;
          
          return true;
        }
    },
    "Sort": {
      "type": function (a,b) {
            var ta = a.type, tb = b.type;
            if (ta == 'app' || ta == 'manifest' && a.app) ta = '!0';
            if (tb == 'app' || tb == 'manifest' && b.app) tb = '!0';
            
    if (a._p) {
              if (a._p.type == 'app' || a._p.type == 'manifest') ta = '!0';
              else ta = a._p.type;
            }
            if (b._p) {
              if (b._p.type == 'app' || b._p.type == 'manifest') tb = '!0';
              else tb = b._p.type;
            }
            if (ta > tb)   return 100;
            if (ta < tb)  return -100;
            ta = a.title;
            tb = b.title;
            
            if (a._p) ta = a._p.title + ta;
            if (b._p) tb = b._p.title + tb;
            if (ta > tb)   return 10;
            if (ta < tb)  return -10;
            var sa = a.stamp, sb = b.stamp;
            if (sa > sb)   return 1;
            if (sa < sb)  return -1;
            return 0;
          
        },
      "az": function (a,b) {
            var ta = a.title, tb = b.title;
            if (ta > tb)   return 10;
            if (ta < tb)  return -10;
            var sa = a.stamp, sb = b.stamp;
            if (sa > sb)   return 1;
            if (sa < sb)  return -1;
            return 0;
          
        },
      "stamp": function (a,b) {
            return b.stamp - a.stamp;
          
        }
    },
    "ActionsList": {
      "inherit": ["RT"],
      "data": {
        "title": "",
        "rows": []
      },
      "lang": {
        "en": {
          "TXT_TITLE": ""
        },
        "ru": {
        }
      },
      "init": function ($o) {
            var that = this,
                d = that.data;
            $o.html(that.HTML);
          
        },
      "ui": {
        "#lapps": {
          "init": function ($o) {
                    var that = this;
                    $o.on('click.my', '.ititle', function(){
                      var $p = $(this),
                          url = $p.data('url');
                      
                      that.RT('app').run(url);
                      that.my.cancel();
                    })
                  
            },
          "bind": function (d,v) {
                    var that = this,
                        h = [];
                    
                    d.rows.sortBy('txt').forEach(function(row){
                      h.push([
                        '<div class="lapp nw oh ell w100p">',
                          '<div class="iicon ficon {css}"></div>',
                          '<div class="ititle pseudolink tdn" data-url="{url}">{txt}</div>',
                        '</div>'
                      ].join('').assign(row));
                    });
                    
                    return h.join('');
                  
            }
        },
        "#ltitle": {
          "bind": "title",
          "css": {
            "hide": function (d) {
              return !d.title
              }
          }
        }
      },
      "HTML": "<div class=\"w100p bolder fs130 mb7 xgray\" id=\"ltitle\"></div><div class=\"w100p\" id=\"lapps\"></div>",
      "style": {
        " #lapps": {
          "": "font-size:17px; line-height:29px;"
        },
        " .ititle": "display:inline; vertical-align:top; ",
        " .iicon": "display:inline-block; vertical-align:top; font-size:19px; line-height:19px; width:1em; height:1em;background-repeat:no-repeat; background-size:1em 1em;margin:4px 8px 0 0;"
      }
    },
    "Panel": {
      "inherit": ["RT"],
      "init": function ($o) {
            var that = this;
            $o.html(that.HTML);
          
        },
      "lang": {
        "en": {
          "BTN_CLEAR": "✕"
        },
        "ru": {
          "BTN_CLEAR": "✕"
        }
      },
      "Name": "Panel",
      "ui": {
        "#fname": {
          "bind": function (d,v) {
                    if (v!=null) {
                      d.view = d.view == 'brief'?'full':'brief';
                    }
                    return [
                      '<span class="fs70 o50 lh100 dib vam w12">',
                        (d.view=='brief'?'►':'▼'),
                      '</span>',
                      '<span class="bolder">',
                        this.Name,
                      '</span>'
                    ].join('');
                  
            },
          "events": "click.my"
        },
        "#flines": {
          "bind": function (d,v) {
                    var that = this,
                        t = that.Row,
                        rows = d.rows;
                    if (d.view=='brief') rows = rows.filter(e=>e.active);
                    return rows.map(e=>t.assign(e)).join('');
                  
            },
          "css": {
          },
          "watch": "#fname"
        },
        "#btn-fclear": {
          "bind": function (d,v,$o) {
                    var a = d.rows.filter(e=>e.active);
                    if (v!=null) {
                      if (a.length) $o.trigger('shellclearfilter.my', d.key);
                    }
                    return a.length?this.lang.BTN_CLEAR.assign(a.length):d.rows.length;
                  
            },
          "events": "click.my",
          "css": {
            "pseudolink tdn o60": function (d,v) {
              return !!d.rows.filter(e=>e.active).length
              },
            "hide": function (d,v) {
              return d.view!='brief' && !d.rows.filter(e=>e.active).length
              }
          },
          "watch": "#fname"
        }
      },
      "HTML": "<div class=\"fpanel\"><div id=\"fname\" class=\"w80p dib vat\"></div><div class=\"w20p dib vat tar fs85 o80 pr4 mt2 lh150\"><span  id=\"btn-fclear\" class=\"pseudolink tdn\"></span></div><div id=\"flines\" class=\"xhide\"></div></div>",
      "Row": "<div class=\"frow {css}\" data-filter=\"{filter}\"><div class=\"ficon {icon}\"></div><div class=\"ffilter\"> {hname}</div><div class=\"w20p tar dib vat fs90 o60\">{ctr}</div></div>"
    },
    "DocInfo": {
      "inherit": ["db",
        "RT"],
      "params": {
        "restyle": 1
      },
      "id": "cw.DB.Shell.DocInfo",
      "data": {
        "id": "",
        "rev": 0,
        "title": "",
        "type": "",
        "hid": "",
        "htitle": "",
        "acl": [],
        "app": false,
        "creator": "",
        "crypto": "",
        "css": "type-unknown",
        "files": [],
        "owners": [],
        "parent": "",
        "pic": "",
        "stamp": 0,
        "tags": {
        }
      },
      "Action": "",
      "Bucket": "",
      "Doc": {
      },
      "Protected": false,
      "ui": {
        ".iicon": {
          "init": function ($o) {
                  var d = this.data,
                      css = 'type-unknown';
                  if (d.css.indexOf('type-')>-1) return $o.addClass(d.css);
                  if (d.pic) return $o.css({'background-image':'url(\''+d.pic+'\')'});
                
            },
          "bind": function (d,v) {
            if(v!=null && !this.my.root().parent().hasClass('ui-draggable-dragging')) this.my.cancel()
            },
          "events": "click.my"
        },
        ".ititle": "htitle",
        "#docid": function (d) {
          return d.id.escapeHTML()
          },
        "#docrev": function (d) {
              var that = this,
                  lang = that.lang,
                  dt = Date.create(d.stamp || 0),
                  ds = d.stamp?dt.format(dt.isThisYear()?lang.T_DATE0:lang.T_DATE, lang._LANG):'',
                  rev = (d.rev+'').split('-')[0];
              return rev + (ds?' · '+ds:'');
            
          },
        "#doctype": function (d) {
              var that = this,
                  t = (d.type+'').escapeHTML(),
                  tmpl = '<span class="o60"> ({1})</span>';
              return t + (d.app?tmpl.assign(that.lang.APP_TYPE[d.app]) :'')
            
          },
        "#xcipher": {
          "css": {
            "hide": function (d) {
              return !d.crypto
              }
          }
        },
        "#doccipher": function (d) {
              var that = this,
                  lang = that.lang,
                  c = d.crypto;
              if (!c) return '';
              var keys = cw.crypto.keys(),
                  key = keys.find(e=>e.id==c) || {id:c, name:'unknown key'};
              return lang.ENCKEY_T.assign(key.id.escapeHTML(), key.name.escapeHTML());
            
          },
        "#docread": function (d) {
              var that = this,
                  lang = that.lang,
                  read = that.db.isread(d.id) || {stamp:0, rev:''},
                  dt = Date.create(read.stamp || 0);
              return dt.format(dt.isThisYear()?lang.T_DATE0:lang.T_DATE, lang._LANG);
            
          },
        "#xread": {
          "css": {
            "hide": function (d) {
                    var read = this.db.isread(d.id);
                    return !read || Math.abs(read.stamp - d.stamp) < 10000;
                  
              }
          }
        },
        "#cnfl": function (d) {
              return this.lang.CNFL_T(d.conflicts || 0);
            
          },
        "#xcnfl": {
          "css": {
            "hide": function (d) {
              return !(d.conflicts || 0) 
              }
          }
        },
        "#xfiles": {
          "css": {
            "hide": function (d) {
              return !d.files.length
              }
          }
        },
        "#xfnum": function (d,v) {
              return this.lang.FILES.assign(d.files.length);
            
          },
        "#docfiles": {
          "init": function ($o) {
                  $o.niceScroll({ 
                    cursorcolor:'#234', 
                    cursoropacitymin:0.07, 
                    cursoropacitymax:0.4, 
                    railoffset:{top:-2, left:2}
                  });
                
            },
          "bind": function (d,v) {
                  return (d.files || []).map(function(e){
                    return [
                      '<div class="pb1">',
                        '<div class="dib vat w75p nw oh ell">{1}</div>',
                        '<div class="dib vat w25p fs90 o70 tar nw">{2}</div></div>',
                      '</div>'
                    ].join('').assign(
                      e[0].escapeHTML(), 
                      e[2].bytes(1)
                      .replace(/B$/,'b')
                      .replace(/^(\d{2,3})(\.\dkb)$/,'$1kb')
                      .replace(
                        /^([0-9\.]+)([a-z]+)$/i,
                        '$1<div class="w30 dib tal pl2">$2</div>'
                      ));
                  }).join('');
                
            }
        },
        "#doccre": function (d) {
              return '<span class="fi-torso o40 dib vat mt1 mb-1 mr4"></span>'+(d.creator || 'unknown user').escapeHTML();
            
          },
        "#cmds": {
          "bind": function (d,v) {
                  var that = this,
                      a = Object.clone(that.db.actions(d.type), true),
                      ax = Object.clone(that.db.actions('*'), true),
                      h = [],
                      acl = (that.db.acl || function(){return !0}),
                      app = that.RT('id').replace(/^[^.]+\./,''),
                      type = d.type,
                      ro = !!that.db.settings('readOnly');
                  
                  if (d.app == 'app') a._run = [];
                  if (d.app == 'editor') a._newdoc = [];
                  //console.log(a);
                  Object.keys(that.lang.CMD).forEach(function(cmd){
                    var b = that.lang.CMD[cmd],
                        c = that.Cmds[cmd];
                    if (!c) return;
                    if (!a[cmd] && !(ax[cmd] && c && c.aux) && !(c && c.aux && cmd[0]=='_')) return;
                    if (ro && c.noro) return;
                    h.push(that.Btn.assign(cmd, b.lbl, c.ico, (c.css||''), 'mr2', b.tip));
                  });
                  return h.join('');
                
            }
        },
        "#cmds2": {
          "bind": function (d,v) {
                  var that = this,
                      a = Object.clone(that.db.actions(d.type), true),
                      h = [],
                      acl = (that.db.acl || function(){return !0}),
                      app1 = that.RT('id').replace(/^[^.]+\./,''),
                      app2 = (that.RT(['app','name']) || '').replace(/^[^.]+\./,''),
                      type = d.type,
                      ro = !!that.db.settings('readOnly');
                  //console.log(a);
                  Object.keys(that.lang.CMD2).forEach(function(cmd){
                    if ( !( a[cmd] || acl(app1, type, cmd) || (app2 && acl(app2, type, cmd)))) return;
                    var b = that.lang.CMD2[cmd],
                        c = that.Cmds[cmd];
                    if (ro && c.noro) return;
                    h.push(that.Btn.assign(cmd, b.lbl, c.ico, (c.css||''), 'ml2', b.tip));
                  });
                  return h.join('');
                
            }
        },
        "#imsg": function (d,v) {
              var that = this,
                  cmd = that.Action,
                  loc = that.lang.CMD[cmd] || that.lang.CMD2[cmd];
              if (!cmd || !loc || !loc.msg ||  !(this.AvailDBs || []).length) return '';
              return loc.msg;
            
          },
        "#iselect": {
          "init": function ($o) {
                  var that = this,
                      dblist = cw.dbs(),
                      dbname = that.db.name,
                      tags = Object.keys(dblist).map(function(n){
                        if (!dblist[n]) return;
                        if (n == dbname || cw.db(n).settings('hidden')) return;
                        return {name: dblist[n],value:n}
                      }).compact(true);
                  that.AvailDBs = tags;
                  $o.tags({
                    tags:[tags],
                    empty:{name: dblist[dbname],value:dbname, css:'tag bolder'},
                    groupshim:'\u00a0·\u00a0',
                    tagshim:'\u00a0· '
                  });
                
            },
          "bind": "this.Bucket",
          "css": {
            "self:hide": function (d,v) {
              return this.Action != '_copy' || !(this.AvailDBs || []).length
              }
          },
          "watch": "#imsg"
        },
        "#btn-proceed": {
          "bind": function (d,v,$o) {
                  var that = this,
                      cmd = that.Action,
                      loc = that.lang.CMD[cmd] || that.lang.CMD2[cmd],
                      z;
                  if (v!=null) {
                    that.Cmds[cmd].cmd(d.id)
                    .always(function(){
                      that.my.commit();
                    });
                  }
                  if (!cmd || !loc || !loc.msg) return '';
                  $o.attr('class', 'mr2 '+ (loc.gocss || ''))
                  return loc.goalt&&that.Bucket==that.db.name?loc.goalt:loc.go;
                
            },
          "events": "click.my",
          "watch": ["#imsg",
            "#iselect"]
        },
        "#btn-cancel": {
          "bind": function (d,v) {
                  if (v!=null) {
                    cw.lib.note(this.lang.MSG_CANCEL);
                    this.my.cancel();
                  }
                
            },
          "watch": "#imsg"
        }
      },
      "die": function ($o) {
            
            // Unmount niceScroll
            ['#docfiles'].forEach(function(i){
              var f = $o.find(i).getNiceScroll;
      if (typeof f == 'function') f().remove();
            });
  
        },
      "Btn": "<div class=\"icmddiv dib vat {5}\"><button class=\"markfocus icmd {4}\" data-cmd=\"{1}\" title=\"{6}\"><span class=\"{3}\"></span><span class=\"ibtn-txt\"> {2}</span></button></div>",
      "HTML": ["<div class=\"iheader nw ell oh w100p bolder mb5\">",
        "<div class=\"iicon ficon br2\" title=\"{TIP_LOGO}\"></div>",
        "<div class=\"ititle fs120\"></div>",
        "</div>",
        {
          "label": "80px",
          "row": "100%",
          "labelCss": "my-label fs90 o70",
          "rowCss": "my-row lh130 pt6"
        },
        ["{ID}",
          "spn#docid"],
        ["{REV}",
          "spn#docrev"],
        "<div id=\"iinfo\" class=\"w100p\">",
        ["{TYPE}",
          "spn#doctype"],
        "<div id=\"xcipher\" class=\"w100p hide\">",
        ["{ENCKEY}",
          "spn#doccipher.nw.oh.dib.w100p.vat.ell"],
        "</div>",
        ["{CREATOR}",
          "spn#doccre"],
        "<div id=\"xread\" class=\"w100p hide\">",
        ["{READ}",
          "spn#docread"],
        "</div>",
        "<div id=\"xcnfl\" class=\"w100p hide\">",
        ["{CNFL}",
          "spn#cnfl"],
        "</div>",
        "<div id=\"xfiles\" class=\"w100p hide\">",
        ["<span id=\"xfnum\"></span>",
          "div#docfiles.w100p.dib.vat"],
        "</div>",
        "<div class=\"ibtns btd mt12 pt15\">",
        "<div id=\"cmds2\" class=\"fr ml10\" style=\"z-index:+1\"></div>",
        "<div id=\"cmds\"></div>",
        "</div>",
        "</div>",
        "<div id=\"iconfirm\" class=\"w100p\" style=\"display:none\">",
        "<div id=\"imsg\" class=\"pt10 pb5\"></div>",
        "<div id=\"iselect\" class=\"pt2 pb5 hide lh150\"></div>",
        "<div class=\"btd mt12 pt15\">",
        "<button id=\"btn-proceed\" class=\"mr2\" style=\"min-width:120px;\"></button>",
        "<button id=\"btn-cancel\">{BTN_CANCEL}</button>",
        "</div>",
        "</div>"],
      "style": {
        " .iheader": {
          "": "",
          " .ititle": "display:inline; vertical-align:top; cursor:move;",
          " .iicon": "display:inline-block; vertical-align:top; font-size:22px; width:1em; height:1em;background-repeat:no-repeat; background-size:1em 1em;margin-right:5px;"
        },
        " button": "font-size:15px; line-height:19px; padding:3px 9px 4px 8px; min-width:40px;",
        " #cmds": function ($o) {
                var w = $o.width(),
                    b = w<400?1:w<500?2:w<600?3:4,
                    c = {' .icmddiv button .ibtn-txt':'display:none;'};
                
                c[' .icmddiv:nth-child(-n+'+b+') button .ibtn-txt'] = 'display:inline;';
                return c;
              
          },
        " #cmds2": function ($o) {
                if ($o.width() < 500) return {
                  ' button .ibtn-txt':'display:none;'
                }
                else return {}
              
          },
        " #docfiles": function () {
                var h = ((this.RT('data').frame.colh || 400) - 180).clamp(70,140);
                return {
                  '':'font-size:15px; max-height:'+h+'px; overflow:hidden;'
                }
              
          }
      },
      "init": function ($o) {
          var that = this,
              d = that.data;
          // bind this. to this.Cmd.*.cmd fns
          Object.keys(that.Cmds).forEach(function(cmd){
            if (!Object.isFunction(that.Cmds[cmd].cmd)) return;
            that.Cmds[cmd].cmd = that.Cmds[cmd].cmd.bind(that);
          });
          // build HTML
          $o.html($.my.formgen(that.HTML).assign(that.lang));
          // Restyle after start
          $o.then((function(){
            that.my.restyle();
          }).debounce(20));
          
          // default bucket for clone cmd
          that.Bucket = that.db.name;
          
          // detect crypto and if key present
          var c = d.crypto;
          if (d.crypto &&!cw.crypto.keys().find(e=>e.id==d.crypto)) {
            that.Protected = true;
          }
          // handle cmds btns clicks
          $o.on('click.my', 'button.icmd', function(){
            var $b = $(this),
                cmd = $b.data('cmd'),
                pi;
            
            that.Action = cmd;
            
            var loc = that.lang.CMD[cmd] || that.lang.CMD2[cmd];
            
            if (loc && loc.msg) {
              that.my.check('#imsg');
              that.my.find('#iinfo').slideToggle(100);
              that.my.find('#iconfirm').slideToggle(80);
              return;
            }
            if (that.Cmds[cmd].cmd) {
              pi = that.Cmds[cmd].cmd(d.id);
            }
            else pi = that.RT('Cmd')(cmd, d.id);
            pi.then((function(){
              that.my.commit();
            }).debounce(5))
            .fail(function(code, err){
              cw.con('Fail', cmd, d.id, err);
              //cw.lib.note(err.escapeHTML(), 'error');
              that.my.cancel();
            });
          });
          
        },
      "lang": {
        "en": {
          "TIP_LOGO": "Click to close popup",
          "BTN_PROCEED": "Proceed",
          "BTN_CANCEL": "Cancel",
          "MSG_CANCEL": "Action cancelled",
          "ID": "Doc _id ",
          "REV": "Revision ",
          "TYPE": "Type ",
          "CREATOR": "Creator ",
          "ENCKEY": "Ciphered",
          "ENCKEY_T": "Key {1} <span class=\"o60 fs90\">({2})</span>",
          "STAMP": "Modified ",
          "T_DATE": "{yyyy}, {Mon} {d}, {h}:{mm}{tt}",
          "T_DATE0": "{Month} {d}, {h}:{mm}{tt}",
          "READ": "Last read ",
          "CNFL": "Conflicts ",
          "CNFL_T": function (n) {
             return n>1?n+' more doc versions stored':'One more doc version stored'; 
            },
          "FILES": function (n) {
             return n>1?n+' files':'One file'; 
            },
          "CMD": {
            "_run": {
              "lbl": "Run",
              "tip": "Start application"
            },
            "_newdoc": {
              "lbl": "New doc",
              "tip": "Open editor with new doc"
            },
            "edit": {
              "lbl": "Edit",
              "tip": "Open document in editor"
            },
            "view": {
              "lbl": "View",
              "tip": "Open document for view"
            },
            "json": {
              "lbl": "JSON",
              "tip": "Open doc as raw JSON"
            },
            "diff": {
              "lbl": "Diff",
              "tip": "Compare document revisions"
            },
            "_copy": {
              "lbl": "Copy…",
              "tip": "Copy doc into other bucket, or clone doc",
              "msg": "Select a bucket to copy the doc into:",
              "go": "Copy doc",
              "goalt": "Clone doc",
              "gocss": "green",
              "success": "Doc {1} copied.",
              "fail": "Failed copying doc {1}.",
              "failread": "Failed reading doc to copy",
              "failclone": "Failed opening the doc in editor for cloning into current DB"
            },
            "_overwrite": {
              "msg": "Doc exists in destination DB. Saving will overwrite existing doc. Proceed?",
              "go": "Overwrite",
              "gocss": "orange",
              "success": "Doc {1} copied.",
              "fail": "Failed copying doc {1}."
            }
          },
          "CMD2": {
            "_hide": {
              "lbl": "Hide",
              "tip": "Hide document from your eyes without deleting",
              "msg": "You ask to hide this document from your doc lists without deleting it from the DB. The doc however is kept visible for other users, if any. Proceed?",
              "go": "Hide the doc",
              "gocss": "orange",
              "success": "Doc {1} is now hidden from your doc lists.",
              "fail": "Failed hiding doc {1}."
            },
            "_delete": {
              "lbl": "Del",
              "tip": "Delete document",
              "msg": "Current revision of this document will be deleted from the DB. Please, confirm.",
              "go": "Yes, delete",
              "gocss": "red",
              "success": "Doc {1} successfully deleted.",
              "fail": "Failed deleting doc {1}."
            }
          },
          "APP_TYPE": {
            "app": "application",
            "editor": "editor app"
          }
        },
        "ru": {
          "TIP_LOGO": "Нажмите чтобы закрыть",
          "BTN_PROCEED": "Продолжить",
          "BTN_CANCEL": "Отмена",
          "MSG_CANCEL": "Команда отменена",
          "ID": "ID док-та ",
          "REV": "Версия ",
          "TYPE": "Тип ",
          "CREATOR": "Создан ",
          "ENCKEY": "Шифрован",
          "ENCKEY_T": "Ключ {1} <span class=\"o60 fs90\">({2})</span>",
          "STAMP": "Изменён ",
          "CNFL": "Конфликт ",
          "CNFL_T": function (n0) {
                
                var n = +n0,
                    s = n+'',
                    sl = s.last(),
                    e = '';
                if (/^[2-4]$/.test(sl)) e = !(n>11 && n<15)?'ии':'ий';
                else if (sl == '1') e = n==11?'ий':'ия';
                else if (n>1) e = 'ий';
                return 'Есть ещё '+n+' верс'+e+' док-та';
              
            },
          "T_DATE": "{d} {Mon} {yyyy}, {H}:{mm}",
          "T_DATE0": "{d} {Month}, {H}:{mm}",
          "READ": "Прочитан ",
          "FILES": function (n0) {
                var n = +n0,
                    s = n+'',
                    sl = s.last(),
                    e = '';
                if (/^[2-4]$/.test(sl)) e = !(n>11 && n<15)?'а':'ов';
                else if (sl == '1') e = n==11?'ов':'';
                else if (n>1) e = 'ов';
                return n+' файл'+e;
              
            },
          "CMD": {
            "_run": {
              "lbl": "Старт",
              "tip": "Запуск приложения"
            },
            "_newdoc": {
              "lbl": "Создать",
              "tip": "Создать пустой документ"
            },
            "edit": {
              "lbl": "Правка",
              "tip": "Открыть документ в редакторе"
            },
            "view": {
              "lbl": "Просмотр",
              "tip": "Просмотр документа"
            },
            "json": {
              "lbl": "JSON",
              "tip": "Открыть документ как JSON"
            },
            "diff": {
              "lbl": "Diff",
              "tip": "Сравнить версии документа"
            },
            "_copy": {
              "lbl": "Копировать…",
              "tip": "Копировать или клонирвоать документ",
              "msg": "БД для копирования:",
              "go": "Копировать",
              "goalt": "Клонировать",
              "gocss": "green",
              "success": "Документ {1} скопирован.",
              "fail": "Не удалось скопировать документ {1}.",
              "failread": "Не удалось прочитать документ для копирования",
              "failclone": "Не получилось открыть документ в редакторе для клонирования"
            },
            "_overwrite": {
              "msg": "Документ уже существует в БД. Сохранение заменить существующий документ. Продолжить?",
              "go": "Перезаписать",
              "gocss": "orange",
              "success": "Документ {1} скопирован.",
              "fail": "Не удалось скопировать документ {1}."
            }
          },
          "CMD2": {
            "_hide": {
              "lbl": "Скрыть",
              "tip": "Скрыть документ из списка без удаления из БД",
              "msg": "Скрытие документа убирает его из списков только для вас. Другие пользователи всё равно будут видеть этот документ. Продолжить?",
              "go": "Скрыть",
              "gocss": "orange",
              "success": "Документ {1} скрыт из ваших списков.",
              "fail": "Не удалось скрыть документ {1}."
            },
            "_delete": {
              "lbl": "Удалить",
              "tip": "Удалить документ из БД",
              "msg": "Текущая редакция документ будет удалена из БД. Подтвердите удаление.",
              "go": "Да, удалить",
              "gocss": "red",
              "success": "Документ {1} удалён.",
              "fail": "Не удалось удалить документ {1}."
            }
          },
          "APP_TYPE": {
            "app": "application",
            "editor": "editor app"
          }
        }
      },
      "Cmds": {
        "_run": {
          "ico": "fi-play o80",
          "css": "green",
          "noro": false,
          "cmd": function (id) {
                  return this.RT('Cmd')('_run', id);
                
            }
        },
        "_newdoc": {
          "ico": "fi-page",
          "css": "green",
          "noro": true,
          "cmd": function (id) {
                  return this.RT('Cmd')('_run', id, ['create','']);
                
            }
        },
        "edit": {
          "ico": "fi-pencil",
          "css": "",
          "noro": true
        },
        "view": {
          "ico": "fi-eye",
          "css": ""
        },
        "json": {
          "ico": "fi-indent-more",
          "css": "",
          "aux": true
        },
        "diff": {
          "ico": "fi-shuffle",
          "css": "",
          "aux": true
        },
        "_copy": {
          "ico": "fi-page-export",
          "css": "",
          "aux": true,
          "cmd": function (id) {
                var that = this,
                    d = that.data,
                    dbname = that.db.name,
                    dbdest = that.Bucket+'',
                    dblist = cw.dbs(),
                    pi = $.Deferred(),
                    lang = that.lang.CMD._copy;
                
    // Other db, copy
                if (dbname != dbdest) {
                  that.db.get(id, {attachments:true})
                  .then(function(doc){
                    // check if doc exists in dest DB
                    cw.db(dbdest).allDocs({keys:[id]})
                    .then(function(res){
                      if (!res.rows || !res.rows.length || res.rows[0].error || res.rows[0].value.deleted ) {
                        delete doc._rev;
                        _save(doc);
                      }
                      else {
                        doc._rev = res.rows[0].value.rev;
                        that.Doc = doc;
                        that.Action = '_overwrite';
                        that.my.check('#imsg');
                      }
                    });
                  })
                  .catch(function(a,b){
                    pi.reject(0, that.lang.MSG_CANCEL);
                    cw.lib.note(lang.failread, 'error');
                  });
                }
                // Same DB, clone
                else {
                  that.RT('Cmd')('create', id)
                  .then(function(){
                    pi.resolve();
                  })
                  .catch(function(){
                    pi.reject(0, lang.failclone);
                    cw.lib.note(lang.failclone, 'error');
                  })
                }
                return pi.promise();
                // - - - - - - - - - 
                function _save(doc){
                  var doc0 = Object.reject(doc, '_db');
                  if (dbname == dbdest) doc0._id = (cw.uuid || cw.lib.uuid)(); 
                  cw.db(dbdest).save(doc0, true)
                  .then(function(a,b){
                    cw.lib.note(lang.success.assign(id.escapeHTML()), 'ok')
                    pi.resolve(a,b);
                  })
                  .fail(function(a,b){
                    cw.lib.note(lang.fail.assign(id.escapeHTML()), 'error');
                    pi.reject(a,b)
                  });
                };
              
            }
        },
        "_hide": {
          "ico": "fi-minus-circle",
          "css": "orange",
          "cmd": function (id) {
                  this.db.hide(id);
      cw.lib.note(this.lang.CMD2._hide.success.assign(id.escapeHTML()), 'ok');
                  return $.Deferred().resolve().promise();
                
            }
        },
        "_delete": {
          "ico": "fi-trash",
          "css": "red",
          "noro": true,
          "cmd": function (id) {
                  var that = this,
                      lang =  that.lang.CMD2._delete;
                  
                  return that.db.del(id)
                  .then(function(){
                    cw.lib.note(lang.success.assign(id.escapeHTML()), 'ok');
                  })
                  .fail(function(code, err){
                    cw.lib.note(lang.fail.assign(id.escapeHTML()), 'error');
                    cw.con('failed to delete doc', id, code, err);
                  });
                
            }
        },
        "_overwrite": {
          "cmd": function (id) {
                var that = this,
                    d = that.data,
                    dbname = that.db.name,
                    dbdest = that.Bucket+'',
                    dblist = cw.dbs(),
                    pi = $.Deferred(),
                    lang = that.lang.CMD._overwrite,
                    doc = that.Doc;
                
                var doc0 = Object.reject(doc, '_db');
                if (dbname == dbdest) doc0._id = (cw.uuid || cw.lib.uuid)(); 
                cw.db(dbdest).save(doc0, true)
                .then(function(a,b){
                  cw.lib.note(lang.success.assign(id.escapeHTML()), 'ok')
                  pi.resolve(a,b);
                })
                .fail(function(a,b){
                  cw.lib.note(lang.fail.assign(id.escapeHTML()), 'error');
                  pi.reject(a,b)
                });
                
                return pi.promise();
              
            }
        }
      }
    },
    "queries": {
      "info": {
        "map": " function(doc){\n    var i, stamp = 0,\n        type = doc.type,\n        tags = {}, \n        mantype = '', \n        obj, att, atts = [];\n\n    function isS(s) {return typeof s == 'string' ? s : '';}\n    function T(t) {if (typeof t == 'string') tags[t] = 1;}\n\n    if (!type && doc._id.substr(0,8) == '_design/') type = '_ddoc';\n\n    stamp = doc.stamp || doc.created || stamp;\n\n    var dt = doc.tags;\n    if (dt && typeof dt == 'object') {\n      if (isArray(dt)) dt.forEach(T);\n      else Object.keys(dt).forEach(T);\n    }\n    if (type=='user' && doc._id == 'org.couchdb.user:'+doc.name) {\n      if (isArray(doc.roles)) doc.roles.forEach(T);\n    }\n    if (type == 'manifest' && doc.manifest && doc.manifest.app && isS(doc.manifest.app.name)) {\n      mantype = typeof doc.manifest.app.types == 'object'?'editor':'app';\n    }\n    obj = {\n      rev:     +doc._rev.split('-')[0],\n      type:   isS(type) || '⁇',\n      app:     mantype,\n      crypto: isS(doc.crypto),\n      title:   isS(doc.title) || isS(doc.name) || (type.substr(0,1).toUpperCase() +type.substr(1) +', ID '+doc._id),\n      stamp:   stamp,\n      tags:   tags,\n      parent:  isS(doc.parent),\n      creator: isS(doc.creator),\n      owners:  isArray(doc.owners)?doc.owners:[],\n      conflicts: isArray(doc._conflicts)?doc._conflicts.length:0,\n      pic:(isS(doc.pic) && doc.pic.length<20*1024 && doc.pic.substr(0,10) == 'data:image')?doc.pic:'',\n      files:  []\n    };\n    if (doc._attachments) {\n      for (i in doc._attachments) {\n        att = doc._attachments[i];\n        atts.push([i, att.content_type, att.length||att.size||0, att.revpos]);\n      }\n      obj.files = atts;\n    };\n    emit (doc._id, obj);\n  }"
      }
    },
    "Icons": {
      "type-unknown": "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwLCAwLCAyNTYsIDI1NiI+PGc+PHBhdGggZD0iTTAsMCBMNCwwIEw0LDQgTDAsNCBMMCwwIHogTTI1MiwyNTIgTDI1MiwyNTYgTDI1NiwyNTYgTDI1NiwyNTIgTDI1MiwyNTIgeiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PGc+PHBhdGggZD0iTTgyLDIzNyBMMTgsMTczIEwxOCw4MiBMODIsMTggTDE3MywxOCBMMjM3LDgyIEwyMzcsMTczIEwxNzMsMjM3IHoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMTc1LDEzIEwxNzcsMTQgTDI0MSw3OCBMMjQzLDgwIEwyNDMsODIgTDI0MywxNzMgTDI0MywxNzUgTDI0MSwxNzcgTDE3NywyNDEgTDE3NSwyNDMgTDgwLDI0MyBMMTQsMTc3IEwxMywxNzUgTDEzLDE3MyBMMTMsODIgTDEzLDgwIEwxNCw3OCBMNzgsMTQgTDgwLDEzIEw4MiwxMyBMMTczLDEzIEwxNzUsMTMgeiBNMTcxLDIzIEw4NCwyMyBMMjMsODQgTDIzLDE3MSBMODQsMjMyIEwxNzEsMjMyIEwyMzIsMTcxIEwyMzIsODQgTDE3MSwyMyB6IiBmaWxsPSIjQ0VDRkQyIi8+PC9nPjxwYXRoIGQ9Ik0xMTgsMTUxIEwxMzcsMTQ2IEMxMzYsMTQ0IDEzNCwxNDEgMTM0LDEzOCBDMTM0LDEyMyAxNjMsMTIxIDE2Myw5NiBDMTYzLDgwIDE1MCw2OCAxMjcsNjggQzExMiw2OCA5OCw3NCA4OSw4NSBMMTAzLDEwMSBDMTA4LDk1IDExNiw5MCAxMjQsOTAgQzEzNCw5MCAxMzgsOTUgMTM4LDEwMCBDMTM4LDExMiAxMTIsMTE1IDExMiwxMzYgQzExMiwxNDIgMTE1LDE0NyAxMTgsMTUxIHogTTEyNywxODkgQzEzNCwxODkgMTQxLDE4MiAxNDEsMTc1IEMxNDEsMTY3IDEzNCwxNjAgMTI3LDE2MCBDMTE5LDE2MCAxMTIsMTY3IDExMiwxNzUgQzExMiwxODIgMTE5LDE4OSAxMjcsMTg5IHoiIGZpbGw9IiNDRUNGRDIiLz48L2c+PC9zdmc+"
    }
  },
  {
    "id": "cw.Sys.Attachments",
    "build": 75,
    "params": {
      "width": 400
    },
    "data": {
      "doc": {
      },
      "sort": function (fobj,fname,doc) {
         return fname; 
        },
      "width": 200,
      "truncate": 200,
      "limit": 10000000,
      "ico": function (fobj,fname) {
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
      "aux": function (fobj,fname,doc) {
    return "";
  
        },
      "css": "cw-att-files",
      "itemCss": "cw-att-item hoverlink",
      "uploadCss": "mt5",
      "accept": "",
      "namePopup": false,
      "previews": null,
      "files": [],
      "noDelete": function (fname,doc) {
         return false; 
        }
    },
    "init": function ($o,form) {
    var that=this,
        d = form.data;
    
    // since we may transfer functions using data,
    // unjson data
    cw.lib.unjson(d);
    
    // L10N
    /*var lang = 'en';
    if (cw.me && that.Lang[cw.me('locale')]) lang = cw.me('locale');
    that.Lang = that.Lang[lang];*/
    var lang = that.lang._LANG;
    that.Lang = that.Lang[lang];
    
    if (!d.download) d.download = function (fobj,fname,doc) { return that.Lang.MANAGE; };
    if (!d.upload && d.upload!==false) d.upload = '<span class="pseudolink">'+that.Lang.UPLOAD+'</span>';
    
    // Format
    $o.addClass(d.css);
    
    // HTML
    $o.html(
      '<div id="att-flist"></div>'
      +'<div id="att-fpanel"></div>'
      +'<div class="mt5 '+d.uploadCss+'">'
        +'<span class="cw-att-upload"></span>'
        +'<input id="upload" type="file" '
        +(d.accept?'accept="'+d.accept+'" ':"")
        +'/>'
      +'</div>'
    );
    
    // Preload
    $o.on("click.my",".cw-att-dl", function(){
      var fname =$(this).data("fname"), 
        text = $(this).attr("title"),
        oatt;
      
      if (d.doc._attachments && d.doc._attachments[fname] && !d.doc._attachments[fname].stub) {
        var att = {}; 
        att[fname] = d.doc._attachments[fname];
        if (null != att[fname].data) processAtt(fname, att);
      } else {        
        try {
          oatt = cw.db(d.doc._db).att(d.doc._id);
        } catch (e) {}
        if (oatt) oatt.url(fname).then(processAtt.fill(fname));
      } 
    });
    
    function processAtt (fname, att){
      var o, html="", width=450, file, 
          mod = $.extend({Lang:that.Lang}, that.ModalManageAtt, true),
          noDel = false;
      if (Object.size(att)) {
        o = att[Object.keys(att)[0]];
        file = o.url||("data:"+o.content_type+";base64,"+o.data);
        if (/^image/.test(o.content_type)) width=($(window).width()-120).clamp(800, 1200);
        try{
          noDel = !!d.noDelete(fname, d.doc);
        } catch(e){}
        $.my.modal({
          manifest:mod, 
          data:{
            name:fname,
            size:o.size,
            digest:o.digest,
            url:file,
            mime:o.content_type,
            noDelete:noDel
          }, 
                css: 'p20',
          width:width, 
          esc:true
        })
        .then(function(res){
          if (Object.isObject(res)) {
            if (res.cmd==="delete") {
              delete d.doc._attachments[fname];
              $o.find("#att-fpanel").trigger("redraw");
              $o.trigger('change');
            }
          }
        });
      } 
    }
  
      },
    "Unfold": function (A,elt,doc) {
    var r;
    try {
      if (Object.isFunction(A)) r = A(elt, elt.name, doc);
      else if (typeof A === "string") r=A;
    } catch(e) {}
    return r;
  
      },
    "Attachment": {
      "data": {
        "name": "",
        "title": "",
        "ext": "",
        "ico": "",
        "aux": "",
        "dl": "",
        "desc": ""
      },
      "init": function ($o,form) {
    var d = form.data;
    $o.html(
      d.ico
      +'<div class="dib vat oh">'
      +'<div class="oh" style="white-space:nowrap">'
      +(d.dl?'<span class="cw-att-iblock pseudolink cw-att-dl lh110" title="'
        +d.dl+'" data-fname="'+d.name+'">':"")
      +'<span class="cw-att-fname"></span>'
      +'<span class="cw-att-ext"></span>'
      +'<div class="cw-att-desc"></div>'
      +(d.dl?'</span>':"")
      +'</div>'
      +(d.aux?'<div class="cw-att-aux">'+d.aux+'</div>':"")
      +'</div>'
    );
  
        },
      "ui": {
        ".cw-att-fname": "title",
        ".cw-att-ext": "ext",
        ".cw-att-desc": "desc",
        ".cw-att-iblock": {
          "css": {
            "fs90": function (d) {
          var t = (d.title || d.name),
              l = t.length,
              s = t.replace(/[^A-HJ-SU-Zmw02-9А-Яжмшщю]+/g,'').length;
          return l > 15 && s>2 && s<6;
        
              },
            "fs85": function (d) {
          var t = (d.title || d.name),
              l = t.length,
              s = t.replace(/[^A-HJ-SU-Zmw02-9А-Яжмшщю]+/g,'').length;
          return l > 15 && s>5;
        
              }
          }
        }
      }
    },
    "ModalManageAtt": {
      "data": {
        "name": "",
        "size": "",
        "url": "",
        "mime": "",
        "cmd": ""
      },
      "MaxH": 600,
      "init": function ($o,form) {
    var that = this,
        html = "", 
        d = form.data, 
        size = +(d.size || d.length || 0), 
        L = that.Lang;
    
    if (/^image/.test(d.mime)) {
        html+='<div class="w100p tac">'
        +'<img src="'+d.url+'" class="dib mb15" id="iimg" style="max-width:100%; max-height:'+(that.MaxH)+'px;" />'
        +'</div>';
    }
    
    html+= '<div class="lh110 fs130 xgray" style="word-break: break-all;">'+d.name+'</div>';
    html+= '<div class="lh110 fs90 gray mt5">'
    +size.format(0,' ')+' byte'+(/(^1|[02-9]1)$/.test(size+"")?'':'s')
    +(!d.digest? L.UNSAVED:"")
    +'</div>';
    html+= '<div class="my-row pt15 mt20 btd fs85 mb-5">'
    
    + '<span class="button teal hide mr5" id="btn-rot"><span class="fi-refresh fs90"></span> '+L.ROT90+'</span>'
    
    +'<a class="button tdn green mr5" href="'
    +d.url+'" target="_blank" download="'
    +d.name+'"><span class="fi-download fs90"></span> '+L.DOWNLOAD+'</a>'
    +(/.+\.(jp[e]?g|png|tif[f]?|pdf|txt|js|css|htm[l])$/i.test(d.name)?
      '<a class="button tdn green mr5" href="'
      +d.url+'" target="_blank"><span class="fi-eye fs90"></span> '+L.VIEW+'</a>':"")
    + '<span class="button red" id="btn-del"><span class="fi-trash fs90"></span> '+L.DEL+'</span>'
    + '<div class="fr"><span class="button" id="btn-cancel">'+L.CANCEL+'</span></div>'
    +'</div>';
    $o.html(html);
    $o.on("click","a", function (){
      (function(){$o.trigger("cancel");}).delay(100);
    });
    
    // image rotate
    $o.on("click","#iimg", function(evt){
      var $i = $(evt.target);
      $i.removeClass("irot1 irot2 irot3");
      if ($i.data("rot") == "3") {
        
        $i.data("rot","0");
        $i.parent().css("padding-top","0px").innerHeight($i.data("dim").h.clamp(0,that.MaxH));
      } else {
        if (!$i.data("rot")) {
          $i.data("rot","0");
          $i.data("dim",{w:$i.width(),h:$i.height()});
        }
        
        $i.data("rot",+$i.data("rot")+1);
        $i.addClass("irot"+$i.data("rot"));
        
        var dim = $i.data("dim");
        
        if ($i.data("rot")%2) {
          if (dim.w > dim.h) $i.parent().css("padding-top",(dim.w-dim.h)/2+"px");
          $i.parent().innerHeight(dim.w.clamp(0,that.MaxH));
        } else {
          $i.parent().innerHeight(dim.h).css("padding-top","0px");
        }
      }
      $o.trigger("layout");
    })
    
  
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
          "events": "click.my",
          "css": {
            "self:hide": function (d) {
               return !!d.noDelete
              }
          }
        },
        "#btn-rot": {
          "bind": function (d,v,$o) {
        if (v!=null) {
          this.my.find("#iimg").trigger("click");
        }
      
            },
          "events": "click.my",
          "css": {
            "self:hide": function (d) {
              return !/^image/.test(d.mime)
              }
          }
        }
      },
      "style": {
        "": function ($o) {
      var that = this,
          h, w;
      h = that.MaxH = $(window).height()-230;
      w = $(window).width()-200;
      
      return {
        ' #iimg':'transition: width 0.1s, height 0.1s;',
        " .irot1":"transform:rotate(90deg);max-height:"+w+'px!important;max-width:'+h+'px!important;',
        " .irot2":"transform:rotate(180deg);",
        " .irot3":"transform:rotate(270deg);max-height:"+w+'px!important;max-width:'+h+'px!important;',
      }
    
          }
      }
    },
    "ui": {
      "#att-flist": {
        "init": function ($o) {
      var b = navigator.userAgent,
          mode = '';
      if (/Mac.+Firefox/.test(b)) mode = "scroll";
      else if (
        /Mac.+Chrome\//.test(b)
        || /Mac.+Safari/.test(b)
        || /Mac.+Opera/.test(b)
      ) mode = "overlay";
      $o.css({'overflow-x':'hidden'});
      if (mode) {
        $o.css({'overflow-y':mode});
      } 
      else if ($.fn.niceScroll) {
        $o.niceScroll({zindex:7});
      }
      else {
        $o.css({'overflow-y':'auto'});
      }
    
          },
        "bind": "files",
        "check": true,
        "manifest": "Attachment",
        "list": "<div class=\"cw-att-item hoverlink\"></div>"
      },
      "#att-fpanel": {
        "bind": function (d,v,$o) {
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
        var previews = d.previews && d.doc[d.previews] ? d.doc[d.previews] : {};
        d.files=ao.map(function(elt, idx) {
          var o = {
            name:elt.name,
            ext:(elt.name.match(/\.[^\.]+$/)||[""])[0],
            aux:  _unfold (d.aux, elt, d.doc),
            ico:  _unfold (d.ico, elt, d.doc),
            dl:    _unfold (d.download, elt, d.doc)
          };
          o.title = (elt.name.match(/(.+)(?:\.[^\.]+$)/)||[0,elt.name])[1]
          .truncate(d.truncate-o.ext.length,"middle");
          if (previews[elt.name]) {
            o.desc = [
              previews[elt.name].dim, 
              previews[elt.name].size
            ].compact(true).join(", ");
          }
          return null===o.data?null:o;
        }).compact();
      } else d.files=[];
      $o.my("find", "#att-flist").trigger("redraw");
    
          }
      },
      "#upload": {
        "bind": function (d,v,$o) {
    var that = this, 
        f, a={}, data;
    if (v!=null && v) {
      f = $o[0].files[0];
      if (f.size>d.limit){
        cw.lib.note(that.Lang.TOO_LARGE.assign((d.limit*1).abbr(1)),"error");
        $o.wrap('<form>').closest('form').get(0).reset();
      }
      else if (f) (function(){
        
        // Set mime
        a.content_type = f.type||"application/octet-stream";
        
        // Mount and end up functions
        
        function _mountEnd(){
          $o.wrap('<form>').closest('form').get(0).reset();
          $o.my("find", "#att-fpanel").trigger("redraw")
        }
        
        function _mount (fname, a) {
          if (fname && a) d.doc._attachments[fname] = a;
          
          // Previews
          if (d.previews && a) {
            if (!d.doc[d.previews]) d.doc[d.previews]= {};
            
            if (/^image\/(png|jpeg|gif|svg\+xml)$/.test(a.content_type)) {
              that.GenPreview(fname, a)
              .always(_mountEnd);
            } 
            else {
              delete d.doc[d.previews][fname];
              _mountEnd()
            }  
          }
          else _mountEnd();
        }
        
        // Read and process file
        var fr = new FileReader(), 
            ri, 
            sb64 = [];
        
        fr.onload = function(e){
          ri = new Uint8Array(e.target.result);
          for (var i=0; i<ri.length; i++) sb64.push(String.fromCharCode(ri[i]));
          data = window.btoa(sb64.join(""));
          a.data = data;
          a.size = sb64.length;
          if (!d.doc._attachments) d.doc._attachments={};
          var fname = _prepareFname(f.name);
          if (!d.namePopup) _mount(fname, a);
          else {
            $.my.modal({
              width:400,
              manifest: {
                init:[
                  '<div class="mb10 blue-1 fs110">'+that.Lang.ATTACHMENT+'</div>',
                  {row:'400px'},
                  ['','inp#fname.w100p.fs90',{plc:that.Lang.FILENAME},'msg'],
                  ['','but#btn-fapply.mt15.mr4',{txt:'Ок'}, 'but#btn-fcancel.mt15',{txt:that.Lang.CANCEL}]
                ],
                ui:{
                  '#fname':{
                    bind:'fname',
                    //check:/^[a-z0-9\.\-_~]{2,64}$/i,
                    //error:'2…64 символа a-z, 0-9 и -_~',
                    check: function(d,v){
                      if (/^_/i.test(v)) return that.Lang.FILENAME_ERR_U;
                      if (!/^[a-z0-9\-_~][a-z0-9\.\-_~]{2,64}$/i.test(v)) return that.Lang.FILENAME_ERR;
                    }
                  },
                  '#btn-fapply': {
                    bind:function(d,v){
                      if (v!=null) this.my.commit();
                    },
                    watch:'#fname',
                    css:{ ':disabled':function(){return !this.my.valid()} }
                  },
                  '#btn-fcancel':function(d,v){if(v!=null) this.my.cancel();}
                }
              },
              data:{ fname:fname.toLowerCase() },
              esc:false,
              screen:true,
              enter:true,
              close:false
            })
            .then(
              function(res){  _mount(_prepareFname(res.fname), a) },
              function(){  a = null; _mount() }
            )
          }
        };
        fr.readAsArrayBuffer(f);
  
      })();
      
      
      //- - - - - - - - - - - 
      
      function _prepareFname(fname0, size) {
        var fname = fname0+'',
            sfname = fname.split('.'),
            ln = !isNaN(size)?+size:60;
        if (sfname.length>1)  {
          fname = sfname.to(-1).join('.').truncate(ln,'middle','_') + '.' +sfname.last().toLowerCase();
        } 
        else fname = fname.toLowerCase().truncate(ln,'middle','_');
        // translit cyr and replace invalid chars
        var cr = 'аa бb вv гg дd еe ёyo жzh зz иi йiy кk лl мm нn оo пp рr сs тt уu фf хh цts чch шsh щsch ъ- ыy ь- эe юyu яya'
        .split(" ").reduce(function(a,b){
          var key = b.to(1), val = b.from(1);
          a[key] = val;
          a[key.toUpperCase()] = val.toUpperCase();
          return a; 
        },{});
        fname = fname.split('').map(function(e){
          if (cr[e]) return cr[e];
          else if (!/[a-z0-9\.\-_~]/i.test(e)) return '-';
          return e;
        }).join('').replace(/-+/g,'-').replace(/^_/,'');
        return fname;
      }
      
    }
  
          },
        "css": {
          "hide": function (d) {
            return !d.upload
            }
        }
      },
      ".cw-att-upload": function (d) {
            return d.upload || ('<span class="pseudolink">'+this.Lang.UPLOAD+'</span>')
          
        }
    },
    "style": {
      " .cw-att-item": "white-space:nowrap; overflow:hidden; padding:0.2em 0 0.2em 0; line-height:1.4em;",
      " input[type=file]": "width:100%;cursor:pointer;opacity:0; position:absolute;top:0;left:0;height:1.5em"
    },
    "Lang": {
      "en": {
        "CANCEL": "Cancel",
        "UPLOAD": "Upload file...",
        "MANAGE": "Manage attachment...",
        "ROT90": "Rot 90º",
        "DOWNLOAD": "Download",
        "VIEW": "View",
        "DEL": "Delete",
        "UNSAVED": ", not yet stored to DB",
        "TOO_LARGE": "Max upload file size is {1}b",
        "ATTACHMENT": "Attachment",
        "FILENAME": "New file name",
        "FILENAME_ERR": "2…64 chars, a-z, 0-9 and -_~",
        "FILENAME_ERR_U": "File name can’t start with underscore"
      },
      "ru": {
        "CANCEL": "Закрыть",
        "UPLOAD": "Загрузить файл...",
        "MANAGE": "Просмотр...",
        "ROT90": "90º",
        "DOWNLOAD": "Скачать",
        "VIEW": "Просмотр",
        "DEL": "Удалить",
        "UNSAVED": ", ещё не сохранён в БД",
        "TOO_LARGE": "Максимальный размер файла {1}b",
        "ATTACHMENT": "Новый файл",
        "FILENAME": "Имя файла",
        "FILENAME_ERR": "2…64 символа a-z, 0-9 и -_~",
        "FILENAME_ERR_U": "Имя файла не может начинаться с _"
      }
    },
    "GenPreview": function (fname,res) {
  
  // res is modal response
  
  var that = this,
      $i = $('<img src=""/>'),
      pi = $.Deferred();
  $i.attr("src", 'data:' + res.content_type + ';base64,'+res.data);
  $i.load(function(){
    var x = $i[0].naturalWidth,
        y = $i[0].naturalHeight,
        ico = cw.lib.image($i, "white").resample(150),
        l = res.data.length/4*3 | 0;
    if (ico.height()>150) ico.resample(22500/ico.height());
    
    var pobj = that.data.doc[that.data.previews];
    if (!pobj) pobj = that.data.doc[that.data.previews] = {};
    pobj[fname] = {
      fname:fname,
      size:l.metric(l>1e6?2:0,false).replace(/([a-z])$/i,' $1')+"b",
      desc:'',
      dim:x+'×'+y,
      data:ico.sharpen(res.content_type=='image/jpeg'?0.2:0.4).contrast(1.05).jpeg(0.75)
    };
    $i.remove();
    pi.resolve(pobj[fname]);
  });
  
  return pi.promise();
      },
    "lang": {
      "en": {
      },
      "ru": {
      }
    }
  },
  {
    "id": "cw.Sys.Colorpicker",
    "build": 69,
    "params": {
      "delay": 5
    },
    "data": {
      "css": "#818283",
      "rgba": [],
      "hsb": [],
      "apply": "Apply",
      "cancel": "Cancel"
    },
    "Mode": false,
    "init": function ($o,form) {
    var that = this,
        d = form.data,
        html = this.HTML.assign(form.data);
    $o.html(html);
    if (d.css) that.Mode = "rgb";
    $o.then(function(){
      that.Mode = false;
    }.debounce(300));
  
      },
    "Color": {
      "sl": {
        "top": 0,
        "left": 255
      },
      "h": {
        "top": 0,
        "left": 0.125
      },
      "a": {
        "top": 0,
        "left": 191
      },
      "base": [0,
        0,
        0]
    },
    "Render": function ($o,rgbSaturated) {
  // renders color rects
  var d = this.data,
      c = this.Color,
      sat;
  
  if (rgbSaturated) sat = rgbSaturated;
  else {
    sat = (function(a){
      var max = a.max(),
          min = a.min(),
          b;
      if (max == min) return [255,0,0];
      if (max == 255 && min == 0) return a;
      
      var k = 255 / (max-min);
      return a.map(function(e){return (k*(e-min)).clamp(0,255).round();});  
    })(d.rgba.to(3).map(parseFloat));
  }
  
  $o.my("find",".clr0").css({'background-color':'rgb('+sat.join(",")+')'});
  
  $o.my("find",".clr1").css({'background-color':'rgb('+d.rgba.to(3).join(",")+')'});
  
  $o.my("find","#cpwatch").css({'background-color':'rgba('+d.rgba.join(",")+')'});
      },
    "ui": {
      "#cprgb": {
        "init": function ($o,form) {
    $o.on("blur.my", function(){
      $(this).val(form.data.css);
    })
  
          },
        "recalcDepth": 1,
        "bind": function (d,v0,$o) {
    var parsed= false, rgba, v=v0;
    if (!this.InitRgb) {
      v = d.css;
      this.InitRgb = true;
    }
    if (v!=null) {
      if (/^(#[0-9a-f]{8}|#[0-9a-f]{6}|#[0-9a-f]{3})$/i.test(v)) {
        if (v.length==4) {
          rgba = [
            parseInt(v[1]+v[1],16),
            parseInt(v[2]+v[2],16),
            parseInt(v[3]+v[3],16),
            1
          ];
        } 
                  if (v.length==9) {
          rgba = [
            parseInt(v[1]+v[2],16),
            parseInt(v[3]+v[4],16),
            parseInt(v[5]+v[6],16),
            (parseInt(v[7]+v[8],16)/255*100 | 0)/100,
          ];
        }
                  else {
          rgba = [
            parseInt(v[1]+v[2],16),
            parseInt(v[3]+v[4],16),
            parseInt(v[5]+v[6],16),
            1
          ];
        }
        parsed=true;
      }
      else if (/^rgb[a]?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*(,\s*(0(\.\d+)?|1)\s*)?\)\s*$/.test(v)) {
        var rgba = v.split("(")[1].split(")")[0].replace(/\s/g,'').split(",");
        if (rgba.length!=4) rgba[3]=1;
        parsed = true;
      }
      if (!parsed) return v;
      else {
        d.rgba = rgba.slice(0);
        d.hsb = this.Rgb2hsb(d.rgba);
        if (rgba[3] == 1) {
          d.css = "#"+rgba.to(3).map(function(e){
            return e.toString(16).padLeft(2,"0");
          }).join("").toUpperCase();
        } else {
          d.css = 'rgba('+rgba.join(",")+')'
        }
        
        var c = this.Color;
        c.h.left = d.hsb[0]/359*191;
        c.sl.left = d.hsb[1]/100*255;
        c.sl.top = 128-d.hsb[2]/100*128;
        c.a.left = d.rgba[3]*191;
        
        this.Render($o);
        
        return v;
      }
    }
    return d.css
  
          },
        "watch": "#cpwatch",
        "recalc": "#cphue,#cpsat,#cpbri,.slptr,.aptr,.hptr"
      },
      "#cpwatch": {
        "bind": function (d,v,$o) {
    var that = this,
        c = that.Color,
        s = 255-c.sl.left.clamp(0,255),
        l = 128-c.sl.top,
        h = c.h.left,
        a = c.a.left,
        r,g,b,
        rgbs, rgbl, rgba;
    if (that.Mode!="rgb") {
    
      r = h<32?255:h<64?256-(h-31)*8:h<128?0:h<160?(h-128)*8:255;
      g = h<32?h*8:h<96?255:h<128?256-(h-95)*8:0;
      b = h<64?0:h<96?(h-63)*8:h<160?255:256-(h-159)*8;
      $o.my("find",".clr0").css({'background-color':'rgb('+[r|0,g|0,b|0].join(",")+')'});
      rgbs = [r|0,g|0,b|0];
      rgbl = [r,g,b].map(function(e){
        if (s<1) return e|0;
        var d = 255-e,
            k = s/255;
        return (e+d*k).clamp(0,255.999)|0;
      })
      .map(function(e){
        if (l>127) return e;
        var k = (l*2)/255;
        return (e*k).clamp(0,255.999)|0;
      });
      rgba = rgbl.slice(0).add(+(a/191).format(2));
      if (a==191) {
        d.css = "#"+rgbl.map(function(e){
          return e.toString(16).padLeft(2,"0");
        }).join("").toUpperCase();
      } else {
        d.css = 'rgba('+rgba.join(",")+')'
      }
      d.hsb = [(h*359/191).round(), ((255-s)/2.55 ).round(), (l/1.28).round()];
      d.rgba = rgba.slice(0);
      this.Render($o, rgbs)
    }
  
          },
        "watch": ".slptr,.aptr,.hptr"
      },
      "#hsb2Color": {
        "bind": function (d,v,$o) {
    var c = this.Color;
    c.h.left = d.hsb[0]/359*191;
    c.sl.left = d.hsb[1]/100*255;
    c.sl.top = 128-d.hsb[2]/100*128;
  
          },
        "recalc": ".slptr,.aptr,.hptr,#cpwatch,#cprgb",
        "watch": "#cphue,#cpsat,#cpbri"
      },
      ".slptr": {
        "delay": 0,
        "bind": "this.Color.sl",
        "init": function ($o) {
           $o.draggable({ containment:"parent" }); 
          }
      },
      ".hptr": {
        "delay": 0,
        "bind": "this.Color.h",
        "init": function ($o) {
           $o.draggable({ containment:"parent", axis:"x" }); 
          }
      },
      ".aptr": {
        "delay": 0,
        "bind": "this.Color.a",
        "init": function ($o) {
           $o.draggable({ containment:"parent", axis:"x" }); 
          }
      },
      "#cphue": {
        "bind": function (d,v,$o) {
        if (v!=null) {
          if (isNaN(v)) {
            d.hsb[0]=0;
          }
          else d.hsb[0] = parseInt(v+"").clamp(0,359);
        }
        return d.hsb[0];
      
          },
        "watch": "#cpwatch"
      },
      "#cpsat": {
        "bind": function (d,v,$o) {
        if (v!=null) {
          if (isNaN(v)) d.hsb[1]=0;
          else d.hsb[1] = parseInt(v+"").clamp(0,100);
        }
        return d.hsb[1];
      
          },
        "watch": "#cpwatch"
      },
      "#cpbri": {
        "bind": function (d,v,$o) {
        if (v!=null) {
          if (isNaN(v)) d.hsb[2]=0;
          else d.hsb[2] = parseInt(v+"").clamp(0,100);
        }
        return d.hsb[2];
      
          },
        "watch": "#cpwatch"
      },
      "#btn-clrcancel": {
        "bind": function (d,v,$o) {
        if (v!=null) {
          this.my.cancel();
          //$o.trigger("commit");
        }
        return d.cancel;
      
          }
      },
      "#btn-clrapply": {
        "bind": function (d,v,$o) {
    if (v!=null) {
      this.my.commit();
      //$o.trigger("commit");
    }
    return d.apply
  
          }
      }
    },
    "InitRgb": false,
    "style": {
      "": "font-family:Cousine, \"PT Mono\", Monaco, monospace;color:#89a;",
      " .i1": "z-index:+2;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/JJREFUeNrs2+tymkAAgNElsU00b8P7P4OPU3Jlq3ZJN9uF4OVHB86Z2cGAK4rkC9ZpEw/CH3OWY7fzdVP3P3fdOdtvNfor79OfsX7Oukvuc83Pt37sS+9z7rG81ft3y3HJOf3durHftbm/o1+WdwFYLQEAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQABAABwCEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQACA/9PmMBqHAVwBAAIACACwin8DWLemiaej8DMbj9nYZmOXjaeR28PI5w2P9ZDt40cI8T6Et/B3vGTjORtdGr8qy3x0xXjOlsPjvqZx3N/7YfThPp0G6UmdnuQwtpUDkb/Asdvli98Wj5sdhOO+39MTGp5cfiC64iB0xYufut0VBzF/3GF/h33ffYQvp8DDyCmwq4ynkfW7yttfngKb01/gj/ROvFbOgm7kLJjzwsuz4KV6FrgCAB8BAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEAbqKJMToK4AoAEABAAIDl2zgEoU/LmI3Tz/v9PtbWH0fbtuW2z5HN68tt2bxyWz8xr0/z8vX9xLx+ZF6+HOZVt1Xm5furzkmvr585b2x//9wnzavOnTGvtn14ntVtI68v319tW21enJhXe9/jxLyp8+y78zMU80La7goAfAQABAAQAEAAAAEAFmv1XwMevxIZ07ateeYtep4rAPARABAAQAAAAQAEAFiq1X8N6Ksi89Y4b9juCgB8BAAEABAAQAAAAQCWyv8G9FWReSue5woAfAQABAAQAEAAAAEAlqqJMToK4AoAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAOBavwUYAJ4ctbuzEBaFAAAAAElFTkSuQmCC');",
      " .i2": "z-index:+3;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9FJREFUeNrs3X1nUAEchuH2Yk0ppcyUJJkkSRKZGUkkkUgi0WdLJJFIIokkkSRJkiQpSWlKqenlVPQVIu7r4nyBh3P7nb/OyDAMS4CmEQEAAQCKAfj7ANEAjJoBugEYMwN0AzBuBugGYMIM0A3AUjNANwCTZoBuAJaZAboBWG4G6AZghRmgG4CVZoBuAFaZAboBWG0G6AZgjRmgG4C1ZoBuAKbMAN0ATJsBugFYZwboBmC9GaAbgA1mgG4ANpoBugHYZAboBmCzGaAbgBkzQDcAW8wA3QBsNQN0A7DNDNANwHYzQDcAO8wA3QDsNAN0A7DLDNANwG4zQDcAe8wA3QDMmgG6AZgzA3QDMG8G6AZgrxmgG4B9ZoBuAPabAboBOGAG6AbgoBmgG4BDZoBuAA6bAboBOGIG6AbgqBmgG4BjZoBuAI6bAboBOGEG6AbgpBmgG4BTZoCm8d/PqBmgG4AxM4ALAHABAC4AwAUACADgEwBwAQAuAMAFALgAABcA4AIAXACACwBwAQAuAMAFAAgA4BMAcAEALgDABQC4AIB/4s+fgU6bAboBOGMG6AbgrBmgG4BzZoBuAM6bAboBuGAG6AbgohmgG4BLZoBuAC6bAboBuGIG6AbgqhmgG4BrZoBuAK6bAboBuGEG6AbgphmgG4BbZoBuAG6bAboBuGMG6AbgrhmgG4B7ZoBuAO6bAboBeGAG6AbgoRmgG4BHZoBuAB6bAboBeGIG6AbgqRmgG4BnZoBuAJ6bAboBeGEG6AbgpRmgG4BXZoBuAF6bAboBeGMG6AbgrRmgG4B3ZoBuAN6bAboBWDADdAPwwQzQDcBHM0A3AJ/MAN0AfDYDdAPwxQzQDcBXM0A3AItmgG4AvpkBugH4bgboBuCHGaAbgJ9mgG4ABjNANADD4P0HAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQABAAKwAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAP+FXwIMAIl7uz9axMOPAAAAAElFTkSuQmCC');",
      " .i1, .i2": "position:absolute;top:8px;left:8px;width:256px;height:256px;",
      " .cpick": "width:272px;height:290px;display:inline-block;overflow:hidden;",
      " #cpwatch": "position:absolute;z-index:+4;top:140px;left:8px;width:60px;height:60px;background-color:#CCC",
      " .clr0": "position:absolute;z-index:+1;top:8px;left:8px;width:256px;height:128px;",
      " .clr1": "position:absolute;z-index:+1;top:172px;left:72px;width:192px;height:28px;",
      " .slframe": "position:absolute; z-index:+5;top:0;left:0;width:272px;height:144px;overflow:hidden;",
      " .slptr": {
        "": "width:16px;height:16px;border:1px solid rgba(0,0,0,0.5);border-radius:8px;position:absolute;z-index:+6;",
        ":after": "content:\" \";width:12px;height:12px;border:1px solid rgba(255,255,255,0.8);border-radius:8px;position:absolute;z-index:+7;top:0px;left:0px;overflow:hidden;"
      },
      " .hframe": "position:absolute; z-index:+5;top:140px;left:66px;width:203px;height:28px;overflow:hidden;",
      " .hptr": {
        "": "width:12px;height:28px;border:1px solid rgba(0,0,0,0.5);border-radius:8px;position:absolute;z-index:+6;"
      },
      " .aframe": "position:absolute; z-index:+5;top:172px;left:66px;width:203px;height:28px;overflow:hidden;",
      " .aptr": {
        "": "width:12px;height:28px;border:1px solid rgba(0,0,0,0.5);border-radius:8px;position:absolute;z-index:+6;"
      },
      " .aptr:after, .hptr:after": "content:\" \";width:8px;height:24px;border:1px solid rgba(255,255,255,0.8);border-radius:8px;position:absolute;z-index:+7;top:0px;left:0px;overflow:hidden;",
      " .slptr, .hptr, .aptr": "cursor:move",
      " .cpinputs": {
        "": "position:absolute; top:204px;left:8px;height:52px;z-index:+8;",
        " input, button": "font-size:13px;text-align:center; line-height:19px;height:24px;vertical-align:top;padding:2px 5px;margin:0 0 4px 0;font-family:Cousine, \"PT Mono\", Monaco, monospace;border-radius:1px;",
        " input": "background:transparent;",
        ">div": "height:28px"
      },
      " .cplabel": "width:30px;display:inline-block;margin-right:-30px; padding-left:5px; font-size:14px;line-height: 27px;vertical-align: top;",
      " #btnframe": {
        "": "position:absolute; top:260px; width:272px; padding:0 0 0 0px;text-align:center; ",
        " button": "font-size:13px;text-align:center; line-height:22px;height:26px;border-radius:1px;vertical-align:top;padding:1px 15px 3px 15px;margin:0 2px; width:126px;font-family:Cousine,\"PT Mono\", Monaco, monospace;"
      }
    },
    "HTML": "<div class=\"cpick\">\n\t<div class=\"clr0\"></div>\n\t<div class=\"clr1\"></div>\n\t<div class=\"i2\"></div>\n\t<div class=\"i1\"></div>\n\t<div id=\"cpwatch\"></div>\n\t<div class=\"slframe\">\n\t\t<div class=\"slptr\"></div>\n\t</div>\n\t<div class=\"hframe\">\n\t\t<div class=\"hptr\"></div>\n\t</div>\n\t<div class=\"aframe\">\n\t\t<div class=\"aptr\"></div>\n\t</div>\n\t<div class=\"cpinputs\">\n\t\t<div><input type=\"text\" id=\"cprgb\" placeholder=\"#RRGGBBB or rgba(r, g, b, alpha)\" \n\t\t\tstyle=\"width:256px;display:block;\" value=\"{css}\"/></div>\n\t\t<div><span class=\"cplabel\">H</span><input type=\"number\" id=\"cphue\" \n\t\tmin=\"0\" max=\"359\" style=\"width:84px;padding-left:30px;margin-right:4px;\" /><span \n\t\tclass=\"cplabel\">S</span><input type=\"number\" id=\"cpsat\" \n\t\tmin=\"0\" max=\"100\" style=\"width:82px;padding-left:30px;margin-right:4px;\" /><span \n\t\tclass=\"cplabel\">B</span><input type=\"number\" id=\"cpbri\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t min=\"0\" max=\"100\" style=\"width:82px;padding-left:30px;\" /></div>\n\t</div>\n\t<div style=\"display:none;\" id=\"hsb2Color\"></div>\n\t<div id=\"btnframe\">\n\t\t<button id=\"btn-clrapply\">Apply</button><button id=\"btn-clrcancel\">Cancel</button>\n\t</div>\n</div>",
    "Rgb2hsb": function (a) {
  var hsb=[],
      c = this.Color,
      min = Math.min(a[0],a[1],a[2]),
      max = Math.max(a[0],a[1],a[2]),
      sat, br;
  br = (100*max/255);
  
  if (br==0) sat=0;
  else sat = (100*(max-min)/max);
  
  if (sat==0) hsb[0]=0;
  else {
    var k = 255/(max-min),
        r = k*(a[0]-min),
        g = k*(a[1]-min),
        b = k*(a[2]-min),
        h=0;
    if (r>=254.99) h= +g-b;
    else if (g>=254.99) h = 510+b-r;
    else if (b>=254.99) h = 1020+r-g;
    hsb[0] = ((360+(h*360/1530))%360).round();
  }
  hsb[1] = sat.round();
  hsb[2] = br.round();
  return hsb;
      }
  },
  {
    "id": "cw.Sys.Confirm",
    "build": 5,
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
    "init": function ($o,form) {
    var d=form.data;
    $o.formgen([
        '<div class="'+d.css+'">'+d.text+'</div>',
      {label:"70px", row:"350px", rowCss:"my-row mt15 pt15 fs90 mb-5 xgray btd"},
      ['', 'spn#btn-ok.mr5.button.green',{txt:d.ok}, 
        'span#btn-cancel.button',{txt:d.cancel}]
    ]);
  
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
    "id": "cw.Sys.Cropper.Square",
    "build": 13,
    "params": {
      "width": 820
    },
    "data": {
      "filename": "",
      "filesize": 0,
      "data": "",
      "cropped": false,
      "size": 200,
      "png": false,
      "mime": "",
      "nativeMime": "",
      "nativeData": "",
      "allowSVG": false
    },
    "init": function ($o) {
          var that = this,
              d = that.data;
    var html = $.my.formgen([
    '<div class="fl mr20 tac vat bg-lgray" style="width:600px;height:450px;' 
        +'overflow:hidden;position:relative;line-height:450px;" id="crop-frame">',
            '<img id="source" class="vam" style="max-width:600px; max-height:450px; min-width:250px;background:white" src="" />',
              '<div class="w600  dib" style="height:450px;position:absolute;top:0;left:0">',
                '<span class="dib vam fs110 button">',
                  '<span class="fi-photo"><span class="fs110"> &nbsp;Select Image</span></span>',
                '</span>',
          '<input type="file" id="file" class="w600 dib" accept="image/jpeg,image/png,image/gif'
                  + (d.allowSVG?',image/svg+xml':'')+'" '
            +'style="height:450px;cursor:pointer;opacity:0; position:absolute;top:0;left:0">',
        '</div>',
            '</div>',
            '<div class="w200 dib vat" id="xpreview">',
              '<canvas id="preview" class="bg-lgray" style="width:200px;height:200px" width='
                +d.size + ' height=' + d.size + ' style="overflow:hidden;"></canvas>',
              {row:"200px",rowCss:"mt10 pt15 btd fs90 tac"},
              [
                '', 'btn#btn-svg.mr0.w200.mb5.green',{val:'Save original SVG'},
                'btn#btn-apply.mr5.green.w100',{val:'Save'}, 
                'btn#btn-close.mr0.w95',{val:'Cancel'}
              ],
            '</div>',
            '<div class="w200 dib vat" id="xwarn">',
              
            '</div>',
            '<div class="hide"><canvas id="x2" width='+d.size*2+' height='+d.size*2+'></canvas></div>'
    ]);
    $o.html(html);
  
      },
    "style": {
      " .jcrop-holder": "display:inline-block;vertical-align:middle"
    },
    "ui": {
      "#file": {
        "bind": function (d,v,$o) {
              if (!v || v == null) return;
              var f,
                  $r = $o.my().root,
                  $c = $r.find("#preview"),
                  $img = $r.find("#source"),
                  $c2 = $r.find("#x2"),
                  n = {k:1}, 
                  img = '';
              
              if (f = $o[0].files[0]) (function(){
                d.filename = f.name;
                d.nativeMime = f.type+'';
      d.filesize = f.size;
                
                var fr = new FileReader(), 
                    ri, 
                    sb64 = [];
                fr.onload=function(e){
                  ri = new Uint8Array(e.target.result);
                  for (var i=0; i<ri.length; i++) sb64.push(String.fromCharCode(ri[i]));
                  img = window.btoa(sb64.join(''));
                };
                fr.onloadend = function (){
                  $img.load(function(){n.k = $img[0].naturalWidth/$img.width()});
                  d.nativeData = img;
                  $img.removeClass('hide').attr('src', 'data:'+f.type+';base64,'+img);
                  n.k = $img[0].naturalWidth/$img.width(); // xbrowser compat
                  $img.Jcrop({
                    onChange: preview,
                    onSelect: preview.debounce(20),
                    aspectRatio: 1,
                    allowMove:true
                  }, function (){
                    this.animateTo([100,100,300,300]);
                  });
                  img = '';
                  $o.parent().addClass('hide');
                };
                
                fr.readAsArrayBuffer(f);  
                
              })();
              function preview (c){
                if(parseInt(c.w) > 0) {
                  // Show image preview
                  var img = $img[0], cs, ctx, cs2, ctx2, 
                      k = n.k,
                      w = c.w*k; 
                  if (w>d.size*2) {
                    // double downsample to remove
                    // bilinear-scaler artifacts
                    cs2 = $c2[0];
                    ctx2 = cs2.getContext('2d');
                    ctx2.clearRect(0,0, d.size*2, d.size*2);
                    ctx2.fillStyle = 'transparent';
                    ctx2.fillRect(0, 0, d.size*2, d.size*2);
                    ctx2.drawImage(img, c.x*k|0, c.y*k|0, w, w, 0, 0, d.size*2, d.size*2);
                    cs = $c[0];
                    ctx = cs.getContext('2d');
                    ctx.drawImage(cs2, 0, 0, d.size*2, d.size*2, 0, 0, d.size, d.size);
                  } else {
                    cs = $c[0];
                    ctx = cs.getContext('2d');
                    ctx.clearRect(0, 0, d.size, d.size);
                    ctx.fillStyle = 'transparent';
                    ctx.fillRect(0, 0, d.size, d.size);
                    ctx.drawImage(img, c.x*k|0, c.y*k|0, w, w, 0, 0, d.size, d.size);
                  }
                  d.cropped=true;
                }
              }
            
          }
      },
      "#btn-svg": {
        "delay": 50,
        "bind": function (d,v) {
                  if (v==null) return;
                  d.data = d.nativeData;
                  d.mime = d.nativeMime;
                  this.my.commit();
                
          },
        "css": {
          "self:hide": function (d,v) {
                      return d.nativeMime != 'image/svg+xml' || d.filesize > 20000;
                    
            }
        },
        "watch": "#file"
      },
      "#btn-apply": {
        "bind": function (d,v,$o) {
        if (v==null || !d.cropped) return;
                  var c = this.my.find('#preview')[0];
                  if (!d.png) d.data = c.toDataURL(d.mime = 'image/jpeg',0.95).substr(23);
                  else  d.data = c.toDataURL(d.mime = 'image/png').substr(22);
                  this.my.commit();
      
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
    "id": "cw.Sys.Db.Ddocs",
    "build": 5,
    "app": {
      "name": "Sys.Db.Ddocs",
      "title": "Ddoc List",
      "version": "2",
      "build": 5,
      "timeout": "3000",
      "author": "ermouth",
      "ico": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwLCAwLCAxMjgsIDEyOCI+CiAgPGcgaWQ9IkxheWVyXzEiPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0xMTUuMDQ0LDIzLjg3IEw3MS41MjQsMjMuODcgQzY4LjcxOSwyMC40NzUgNjUuODM3LDE2Ljg5OCA2NS4wODgsMTUuODEyIEM2NC4zNjQsMTQuMjc3IDYyLjgxMSwxMy4yMjEgNjEuMDE0LDEzLjIyMSBMMjkuODAyLDEzLjIyMSBDMjguNDM2LDEzLjIyMSAyNy4xNDUsMTMuODQ2IDI2LjI4OSwxNC45MTkgTDE5LjE3MywyMy44NzEgTDEyLjk1OCwyMy44NzEgQzguNjc2LDIzLjg3MSA1LjE4NiwyNy4zOTYgNS4xODYsMzEuNzMgTDUuMTg2LDEwMC45MjMgQzUuMTg2LDEwNS4yNTcgOC42NzYsMTA4Ljc3OSAxMi45NTgsMTA4Ljc3OSBMMTE1LjA0MywxMDguNzc5IEMxMTkuMzI0LDEwOC43NzkgMTIyLjgxNSwxMDUuMjU3IDEyMi44MTUsMTAwLjkyMyBMMTIyLjgxNSwzMS43MjggQzEyMi44MTYsMjcuMzk1IDExOS4zMjQsMjMuODcgMTE1LjA0NCwyMy44NyB6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICAgIDxwYXRoIGQ9Ik02MS4wMTQsMTAgQzYzLjgzOCwxMC4wNjYgNjYuMzMyLDExLjUxOSA2Ny43MzIsMTQuMDEzIEM2OS40MjQsMTYuMjc5IDcxLjIyLDE4LjQ2NyA3My4wMTcsMjAuNjQ5IEwxMTUuMDQ0LDIwLjY0OSBDMTIxLjA4NSwyMC42NDkgMTI2LjAwMiwyNS42MTggMTI2LDMxLjcyOCBMMTI2LDEwMC45MjMgQzEyNiwxMDcuMDM0IDEyMS4wODUsMTEyIDExNS4wNDIsMTEyIEwxMi45NTgsMTEyIEM2LjkxNSwxMTIgMiwxMDcuMDM0IDIsMTAwLjkyMyBMMiwzMS43MyBDMiwyNS42MTkgNi45MTYsMjAuNjUgMTIuOTU4LDIwLjY1IEwxNy42NDYsMjAuNjUgTDIzLjgwOSwxMi44OTcgQzI1LjI3LDExLjA2NSAyNy40NzMsMTAgMjkuODAyLDEwIEw2MS4wMTQsMTAgeiBNNjEuMDE0LDE2LjQ0MiBMMjkuODAyLDE2LjQ0MiBDMjkuNCwxNi40NDIgMjkuMDIsMTYuNjI2IDI4Ljc3MiwxNi45MzcgTDIxLjY1NiwyNS44ODkgTDIwLjY5OSwyNy4wOTIgTDEyLjk1OCwyNy4wOTIgQzEwLjQzNCwyNy4wOTIgOC4zNzEsMjkuMTc3IDguMzcxLDMxLjczIEw4LjM3MSwxMDAuOTIzIEM4LjM3MSwxMDMuNDc1IDEwLjQzMywxMDUuNTU4IDEyLjk1OCwxMDUuNTU4IEwxMTUuMDQyLDEwNS41NTggQzExNy41NjcsMTA1LjU1OCAxMTkuNjI5LDEwMy40NzUgMTE5LjYyOSwxMDAuOTIzIEwxMTkuNjI5LDMxLjcyNyBDMTE5LjYzLDI5LjE3NiAxMTcuNTY3LDI3LjA5MSAxMTUuMDQ0LDI3LjA5MSBMNzAuMDM0LDI3LjA5MSBMNjkuMDc5LDI1LjkzNSBDNjUuOTA1LDIyLjA5MiA2My4yNDUsMTguNzcxIDYyLjQ3NCwxNy42NTMgTDYyLjMyNiwxNy40MzcgTDYyLjIxMywxNy4xOTkgQzYxLjk5NywxNi43NDEgNjEuNTM2LDE2LjQ0MiA2MS4wMTQsMTYuNDQyIHoiIGZpbGw9IiNBNkI1QzAiLz4KICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik0yMS45NzMsOTIuNjI4IEwyMS45NzMsODcuNTIxIEw0Ni45MzQsODcuNTIxIEw0Ni45MzQsOTIuNjI4IHoiIGZpbGw9IiM4MTk4QTciLz4KICAgIDxwYXRoIGQ9Ik01MS40Myw4MS4wNTEgUTQ4LjIzLDc2Ljk4NyA0OC4yMyw3MC4wMDggUTQ4LjIzLDYzLjA4MyA1MS40NTYsNTguOTkyIFE1NC42NTYsNTQuOTI4IDYwLjEyOSw1NC45MjggUTYzLjA5MSw1NC45MjggNjUuNDQ0LDU2LjI5MiBRNjcuNzQ1LDU3LjY1NiA2OC45MDgsNjAuMDYyIEw2OS4zNTgsNjAuMDYyIEw2OS4zNTgsNDQuMSBMNzUuOTE1LDQ0LjEgTDc1LjkxNSw4NC42NiBMNjkuNTY5LDg0LjY2IEw2OS41NjksODAuMDM1IEw2OS4xMiw4MC4wMzUgUTY2LjUwMiw4NS4xNDEgNjAuMTI5LDg1LjE0MSBRNTQuNjI5LDg1LjE0MSA1MS40Myw4MS4wNTEgeiBNNTYuODc3LDYzLjA4MyBRNTQuOTQ2LDY1LjYyMyA1NC45NDYsNzAuMDM1IFE1NC45NDYsNzQuNDczIDU2Ljg3Nyw3Ni45ODcgUTU4Ljc4MSw3OS41IDYyLjE2NSw3OS41IFE2NS41NSw3OS41IDY3LjUwNyw3Ni45NiBRNjkuNDM3LDc0LjQ0NyA2OS40MzcsNzAuMDM1IFE2OS40MzcsNjUuNjUgNjcuNDgsNjMuMTEgUTY1LjUyMyw2MC41NyA2Mi4xNjUsNjAuNTcgUTU4LjgwNyw2MC41NyA1Ni44NzcsNjMuMDgzIHoiIGZpbGw9IiM4MTk4QTciLz4KICA8L2c+Cjwvc3ZnPgo=",
      "maskstate": "",
      "nodetitle": "dbname",
      "width": [1000],
      "collapsed": [],
      "padding": "auto"
    },
    "data": {
      "ddocs": []
    },
    "init": function ($o,form) {
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
      db.load(id, true).then(function(a){
        cw.state.set(db.name+"/Sys.JSON/"+cw.lib.tourl64(["edit",id]));
      });
    })
    
    return pi.promise();
  
      },
    "ui": {
      "#dbname": "this.dbname",
      "#dlist": {
        "bind": "ddocs",
        "manifest": {
          "ui": {
            ".ddocname": "id"
          }
        },
        "list": "<div class=\"ddoc dib vat hoverlink w200 pr20 pt5 pb5 blue\"><span class=\"pseudolink ddocname\"></span></div>"
      }
    },
    "HTML": ["<h3>Ddocs in <i id=\"dbname\"></i> DB</h3>",
      "<div id=\"dlist\"></div>"]
  },
  {
    "id": "cw.Sys.Dock",
    "build": 125,
    "params": {
      "delay": 20,
      "restyle": 1
    },
    "lang": {
      "en": {
        "SLOT_STARTING": "Starting...",
        "SLOT_LOADDOC": "Loading doc...",
        "CFG_NOTICE": "Not yet implemented, sorry. Here should be local config."
      },
      "ru": {
        "SLOT_STARTING": "Запуск...",
        "SLOT_LOADDOC": "Загрузка документа...",
        "CFG_NOTICE": "Здесь должны быть локальные настройки. Пока не реализовано."
      }
    },
    "data": {
      "list": []
    },
    "Tabs": [],
    "init": function ($o,form) {
    var that = this, 
              d = form.data;
          
    that.RebuildSlots = that.GetSlots.debounce(60);
          
    //$o.html(that.HTML);
          $o.formgen('init', that.HTML);
          
          // on state update
    $o.on('update.cw', that.RebuildSlots);
          
    // ico, refer state
    $o.on('click.my', 'img#l-ico', function(){
      
      var $i = $(this), 
          $f = $i.my().root,
          slot = $i.my('data');
      if ($i.data('modal')) return $i.modal(true);
      $i.modal({
        root:    $i.parents(".my-form").eq(1),
        //screen:  'rgba(255,255,255,0)',
        close:  '<div class="my-modal-close fs100" title="Close">✕</div>',
        esc:    true,
        width:  $f.width()-12,
        align:  'left:-1px;top:25px;',
        nose:    'top',
        css:    'fs90 lh140 pl6 pt5 pr5 pb4 blue',
        data:    $i.my('data'),
        manifest:  that.SlotInfo
      })
      .always(function(a,b){
        // console.log(a,b)
      });
      
    });
  
      },
    "ui": {
      "#l-apptabs": {
        "init": function ($o) {
                var that = this;
                //$o.sortable({ axis:'x', distance: 5 });
              
          },
        "delay": 1,
        "merge": true,
        "id": ["id"],
        "hash": function (e) {
                return cw.lib.sdbm([ e.name, e.path, e.active, e.error, e.hash0, e.hash1, e.busy ]);
              
          },
        "list": "<div class=\"l-tab\"></div>",
        "bind": "this.Tabs",
        "manifest": "this.Tab"
      },
      "#l-proxy": {
        "listen": {
          "slot.cw": function (d,v) {
                    var ev = v.event+'';
                    if (ev == 'crc' || ev == 'statechange') this.RebuildSlots();
                    else if (ev.substr(0,6) == 'start.' || ev == 'busy') this.GetSlots();
                  
            }
        }
      },
      "#l-root": {
        "bind": function (d,v,$o) {
                var that = this,
                    logo = that.SVG.logo,
                    url = 'cw/Sys.Hub';
                if (Object.isFunction(cw.config)) {
                  logo   = cw.config('logo')       || logo;
                  url   = cw.config('appDefault') || url;
                }
                $o.attr('href','#'+url);
                if (logo.indexOf('>')==-1) logo = '<img id="l-root-logo" src="{1}">'.assign(logo);
                return logo;
              
          }
      },
      "#btn-aside-auth": {
        "bind": function (d,v,$o) {
                var that = this;
                if (v!=null) {
                  if ($o.data('modal')) $o.modal(true);
                  else $o.modal({
                    manifest:that.User,
                    align:'top:25px;right:0;',
                    close:  '<div class="my-modal-close fs100" title="Close">✕</div>',
                    nose:'top',
                    css:'p8 pl10',
                    width:200,
                    esc:true,
          enter:false,
          screen:false,
          z:1996
                  });
                }
                return this.SVG.profile;
              
          },
        "events": "click.my"
      },
      "#btn-aside-config": {
        "bind": function (d,v) {
                if (v!=null) {
                  cw.lib.note(this.lang.CFG_NOTICE);
                }
                return this.SVG.config;
              
          },
        "events": "click.my"
      }
    },
    "GetSlots": function _rebuildSlots() {
        var that = this,
            d = that.data,
            a = [], 
            slot, 
            slots = cw.state.slots(), 
            active, 
            atitle = "",
            lang = that.lang;
        for (var i in slots) {
          slot    =  slots[i];
          active  =  slot.app.isActive?slot.app.isActive():false;
          //if we have editor
          //if (slot.app.nodedoc && slot.app.nodecmd) 
          if (!slot.closing) a.push({
            url:    slot.app.url || slot.url,
            domid:  slot.domid,
            busy:    slot.busy,
            initurl:i,
            active:  active,
            state:  slot.state,
            editor:  slot.isEditor,
            ico:    slot.app.ico,
            title:  slot.title || slot.app.title,
            born:    slot.app.born || slot.started,
            crc0:    slot.app.crcdoc,
            crc1:    slot.app.crccurr
          });
          if (active) atitle = slot.title;
        }
        a = a.sortBy(function(e){return e.born*1}, true);
        // close modals
        $('img#l-ico').each(function(){
          if ($(this).data('modal')) $(this).modal();
        });
        // generate tabs
        (function(){
          d.list = a;
          that.Tabs = a.reverse().map(function(e){
            var h0 = cw.lib.sdbm(e.url),
                name = e.title;
            
            if (e.state == 'init') name = e.editor?lang.SLOT_LOADDOC:lang.SLOT_STARTING;
            else if (e.state != 'running') name = lang.SLOT_STARTING;
            
            var t = {
              id:      e.domid,
              name:    name,
              busy:    e.busy,
              initurl:e.initurl,
              ico:    e.ico,
              type:    e.editor?'editor':'app',
              hash0:  e.crc0 || h0, 
              hash1:  e.crc1 || h0,
              active:  e.active,
              path:    [e.url],
              error:  false,
              run:    true
            }
            return t;
          });
          that.my.recalc('#l-apptabs');
          that.my.check  ('#l-apptabs');
          that.my.restyle();
          (function() {
            that.my.find('div.my-modal').each(function(){
              $(this).trigger('layout.my');
            });
           }).debounce(50)();
          
        }).fill(a).delay(5);
        
        document.title = atitle;
      },
    "SlotInfo": {
      "init": ["<div class=\"o90 bold fs110 lh100 pl15 mt1 mb2\"><span class=\"fi-page dib vat w15 ml-15\"></span>",
        "<span id=\"docname\"><span></div>",
        "<div class=\"o70 pl15\"><span class=\"fi-folder dib vat w15 ml-15\"></span><span id=\"db\"><span></div>",
        "<div class=\"o70 pl15\"><span class=\"fi-layout dib vat w15 ml-15\"></span><span id=\"appname\"><span></div>",
        "<div class=\"o70 pl15\"><span class=\"fi-clock dib vat w15 ml-15\"></span><span id=\"started\"><span></div>"],
      "data": {
      },
      "ui": {
        "#db": function (d) {
           
      return d.path[0].split('/')[0];
    
          },
        "#appname": function (d) {
      return d.path[0].split('/')[1];
    
          },
        "#docname": function (d) {
      return d.name.truncate(200,'middle',' … ');
    
          },
        "#started": function (d) {
      return cw.lib.date(d.born);
    
          }
      }
    },
    "Tab": {
      "id": "cw.Sys.Dock.Tab",
      "lang": {
        "en": {
          "BTN_CLOSETAB": "Close tab"
        },
        "ru": {
          "BTN_CLOSETAB": "Закрыть вкладку"
        }
      },
      "data": {
        "id": "",
        "name": "",
        "type": "",
        "busy": false,
        "hash0": "",
        "hash1": "",
        "active": false,
        "path": [],
        "error": false,
        "run": false
      },
      "init": function ($o) {
    var that = this;
    $o.html(that.HTML.assign(that.lang));
  
        },
      "ui": {
        "#l-ico": "ico",
        "#l-tabname": {
          "bind": function (d,v,$o) {
        var that = this;
        that.my.find('a#l-tabname').attr('href','#'+d.path.join('/'));
        that.my.root().toggleClass('active',!!d.active);
                    that.my.root().toggleClass('tab-busy',!!d.busy);
        return d.name.escapeHTML();
      
            },
          "css": {
            "smaller": function (d) {
               return d.name.length > 20; 
              }
          },
          "events": "click.my"
        },
        "#l-tabstate": {
          "css": {
            "hide": function (d) {
               return  !d.error && d.hash0 == d.hash1 
              },
            "red": function (d) {
               return !!d.error;
              }
          },
          "watch": "#l-tabname"
        },
        "#btn-tabclose": {
          "bind": function (d,v) {
                    if(v!=null) {
                      cw.state.slots(d.initurl).app.close();
                      if (d.hash0 == d.hash1) this.my.root().css({padding:'0','min-width':'0', width:'0'});
                    }
      
            },
          "events": "click.my"
        },
        "#tab-proxy": {
          "bind": function () {
            },
          "listen": {
            "appbusy": function (d,v) {
          if (!Object.isObject(v) || v.id != d.id) return;
          this.my.root().toggleClass('tab-busy',!!v.busy);
        
              },
            "pathchange": function (d,v) {
          if (!Object.isObject(v)) return;
          var that = this,
              newpath = v.path.slice(0);
          if (v.id != d.id) {
            // other tab changed path, check is this tab a dup
            if (newpath.join('\ufffd') != d.path.join('\ufffd')) return;
            // decide should we close
            if (d.hash0 == d.hash1) that.Pho('Close')({tabid:d.id, enforce:true});
          }
          else {
            // it is all about this tab
            d.path = newpath;
            d.name = v.title || d.name;
            if(that.Pho('_compiled') && d.active) {
              window.location.replace('#'+that.p2u(newpath).join('/'));
            }
            that.my.check('#l-tabname');  
          }
        
              }
          }
        }
      },
      "HTML": "<img id=\"l-ico\" src=\"\"/><a href=\"\" id=\"l-tabname\"></a><div id=\"l-tabstate\" class=\"l-tabmark\">•</div><div id=\"btn-tabclose\" class=\"l-tabmark\" title=\"{BTN_CLOSETAB}\">✕</div><div id=\"tab-proxy\" class=\"hide\"></div>"
    },
    "User": {
      "id": "cw.Sys.Dock.User",
      "lang": {
        "en": {
          "TXT_LOGOUT": "Log out",
          "TXT_PROFILE": "Profile",
          "MSG_LOGOUT_START": "Logging out...",
          "MSG_LOGOUT_OK": "You was logged out successfully",
          "MSG_LOGOUT_FAIL": "Log out failed. Server responded {1}: {2}"
        },
        "ru": {
          "TXT_LOGOUT": "Выход",
          "TXT_PROFILE": "Профиль",
          "MSG_LOGOUT_START": "Выход...",
          "MSG_LOGOUT_OK": "Вы вышли из системы",
          "MSG_LOGOUT_FAIL": "Закрытие сессии не удалось, сервер ответил {1}: {2}"
        }
      },
      "data": {
      },
      "init": function ($o) {
    var that = this;
    $o.html(that.HTML.assign(that.lang))
  
        },
      "HTML": "<div id=\"ltitle\" class=\"mb6 lh140\"></div><div class=\"gray pl1\"><div id=\"xprofile\" class=\"hide\"><span class=\"fi-torso\"></span> <a id=\"btn-profile\" href=\"\" target=\"_blank\" class=\"pseudolink tdn\">{TXT_PROFILE}</a></div><div><span class=\"fi-power\"></span> <span id=\"btn-logout\" class=\"pseudolink tdn\">{TXT_LOGOUT}</span></div></div>",
      "ui": {
        "#ltitle": {
          "bind": function (d,v) {
        var h = '<div class="fs130 xgray lh120 w100p oh ell">{1}</div>'.assign(cw.me().escapeHTML());
        var r = cw.me('roles') || [];
        if (r.length) {
          h+='<div class="gray fs90">{1}</div>'.assign(r.map(function(s){
            return '<nobr>'+s.escapeHTML()+'</nobr>'
          }).join(', '));
        }
        return h;
      
            }
        },
        "#btn-profile": {
          "delay": 30,
          "bind": function (d,v,$o) {
        $o.attr('href','profile.html');
        if (v!=null) this.my.cancel();
      
            }
        },
        "#xprofile": {
          "css": {
            "hide": function () {
                        return !cw.config('profileWritable');
                      
              }
          }
        },
        "#btn-logout": {
          "delay": 30,
          "bind": function (d,v,$o) {
        if (v==null) return;
        this.doLogout();
        this.my.cancel();
      
            }
        }
      },
      "doLogout": function () {
            var that = this,
                l = that.lang,
                es = function(s){return (s+'').escapeHTML()};
            cw.lib.note(l.MSG_LOGOUT_START, '', 1000);
            that.my.ajax({
              url:'/_session', method:'POST', dataType:'json',
              headers:{'Content-type':'application/json'},
              data:JSON.stringify({name:'0',password:'0'})
            })
            .then(function(res){
              cw.lib.note(l.MSG_LOGOUT_FAIL.assign(999,'Server returned invalid response'), 'error');
            })
            .fail(function(res, b){
              var data;
              try {data = JSON.parse(res.responseText);} catch(e){}
              if (!Object.isObject(data)) data = {};
              data.ok = false;
              var code = res.status,
                  msg = data.reason || data.message || '';
              if (code!=401 && code !=403) {
                cw.lib.note(l.MSG_LOGOUT_FAIL.assign(code, es(msg)), 'error');
              }
              else {
                cw.lib.note(l.MSG_LOGOUT_OK, 'ok');
                window.location.reload();
              }
            });
          
        }
    },
    "HTML": "<div id=\"l-header\">\n\t<div id=\"l-tabs\">\n\t\t<div id=\"l-roottab\" class=\"l-tab\" style=\"width:72px;\">\n\t\t\t<a id=\"l-root\" href=\"\" class=\"cw-logo-header\"></a>\n\t\t</div>\n\t\t\n\t\t<div id=\"l-apptabs\" class=\"dib vat nw oh\"></div>\n\t\t\n\t\t<div id=\"l-aside\">\n\t\t\t<div id=\"btn-aside-auth\"></div>\n\t\t\t<div id=\"btn-aside-config\"></div>\n\t\t</div>\n\t</div>\n  <div id=\"l-proxy\" class=\"hide\"></div>\n</div>",
    "style": {
      " ": "font-size:15px;width:100%;height:32px;padding:0;position:fixed;top:0;left:0;z-index:1950;",
      " div.my-modal.my-modal-overlay": "box-shadow:0 0 0px 1px rgba(0,20,47,0.2)!important; border-radius:1px;background-color:rgb(245,250,255);word-wrap: break-word;",
      " div.my-modal.nose-top:before": "background-color:rgb(245,250,255);",
      " .bolder": "font-weight:bolder;",
      " .lighter": "font-weight:lighter;",
      " #l-header": {
        "": "width:100%;height:32px;overflow:hidden;background-size: 2px 32px;background-position:0 0;background-image: linear-gradient(to bottom, #0c1932, #4b627c);",
        " #l-tabs ": function ($o) {
      return 'max-width:'+this.Cfg.maxWidth+'px;'
    
          },
        " #l-tabs": {
          "": "min-width:210px;margin:0 auto;",
          " .ui-sortable-helper": "background-color:rgba(102,120,152,0.8);border-left:1px solid #9ea6b0;",
          " .ui-sortable-placeholder+.l-tab": "border-left:1px solid #9ea6b0;",
          " .tab-busy:after": "\t\t\t\tcontent:\" \";\t\t\t\tposition:absolute;\t\t\t\tz-index:+1980;\t\t\t\twidth:100%;\t\t\t\theight:2px;\t\t\t\tbottom:0;\t\t\t\tleft:0;\t\t\t\toverflow:hidden;\t\t\t\tbackground-image: url(i/loader-bar2.gif);\t\t\t\tbackground-repeat: repeat-x;\t\t\t\tbackground-position-y: -1px;"
        },
        " #l-roottab": {
          "": "border-left:1px solid #9ea6b0;",
          " #l-root": "padding:1px 20px 0 21px; width:72px; display:block;",
          " img#l-root-logo": "height:20px; max-width:28px; display:inline-block; vertical-align:top; margin-top:5px;"
        },
        " #l-apptabs": "width:calc(100% - 72px - 64px);",
        " .l-tab": {
          "": "line-height:29px; height:32px; min-width:45px; max-width:220px; transition:width 0.2s;border-right:1px solid #9ea6b0;display:inline-block;vertical-align:top;overflow:hidden;",
          " ": function () {
        return 'width:calc(100% / '+(this.Tabs.length || 1)+');';
      
            },
          ":hover": {
          },
          " #btn-tabclose": "cursor:pointer;display:none;color:rgba(255,255,255,0.25);",
          " #l-tabstate": "color:rgba(141,209,255,0.92);",
          " #l-tabstate.hide+#btn-tabclose": "display:block;",
          " .l-tabmark": {
            "": "width:16px;position:absolute;line-height:20px;right:0;top:0;text-align:center;",
            "  ": "transition: opacity 0.3s, color 0.3s;"
          },
          ":hover ": {
            " #l-tabstate": "display:none!important;",
            " #btn-tabclose": "display:block!important;color:rgba(255,255,255,0.6);"
          },
          " #btn-tabclose:hover": "color:rgba(255,255,255,0.8);",
          " a": "text-decoration:none;transition: opacity 0.3s;color:white!important;opacity:0.8!important;",
          ":hover a": "opacity:1!important;",
          " #l-tabname": {
            "": "width:calc(100% - 27px - 16px); display:inline-block; overflow:hidden; text-overflow:ellipsis;padding:0 0 3px 0; white-space: nowrap;",
            ".smaller": "font-size:0.95em;"
          },
          " #l-ico": "width:27px;height:32px;padding:7px 5px 9px 6px;display:inline-block;vertical-align:top;opacity:0.75;transition:opacity 0.3s; cursor:help; cursor:context-menu;",
          ":hover #l-ico": "opacity:0.9;",
          ".active": {
            " a": "color:#001328!important;opacity:0.8!important;font-weight:bolder;",
            ":hover a": "opacity:0.95!important;",
            "": " background-size: 2px 32px;background-position:0 0;background-image: linear-gradient(to bottom, #a4b2ca, #cdd6e6);",
            " #l-tabstate": "color:rgba(37,137,215,0.8);",
            " #btn-tabclose": "color:rgba(0,18,40,0.3);",
            ":hover #btn-tabclose": "color:rgba(0,18,40,0.6);",
            " #btn-tabclose:hover": "color:rgba(0,18,40,0.8);",
            " #l-ico": "opacity:1!important;;"
          }
        },
        " #l-aside": {
          "": "position:absolute;top:0;right:0;width:96px;border-right:1px solid #9ea6b0;white-space: nowrap;width:auto;z-index:2;",
          ">div": "height:32px; width:32px; cursor:pointer;border-left:1px solid #9ea6b0;display:inline-block; vertical-align:top; overflow:hidden;transition: color 0.3s, opacity 0.3s; color:white!important;opacity:0.7!important;",
          ">div:hover": "opacity:0.9!important;",
          "a": "text-decoration:none;"
        }
      }
    },
    "SVG": {
      "logo": "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"26\" height=\"13\" viewBox=\"0, 0, 38, 20\">\n  <defs>\n    <linearGradient id=\"G1\" gradientUnits=\"userSpaceOnUse\" x1=\"9.5\" y1=\"18.66\" x2=\"28.5\" y2=\"1.34\">\n      <stop offset=\"0\" stop-color=\" #6DB7FF\"/>\n      <stop offset=\"1\" stop-color=\" #88DEFF\"/>\n    </linearGradient>\n  </defs>\n  <path d=\"M0.08,14.763 L19.736,14.763 L19.736,20 L6.385,20 L5.567,19.996 L6.3,20 C3.542,19.954 1.125,18.254 0.274,15.689 C0.175,15.389 0.145,15.072 0.08,14.763 z M37.989,14.763 L20.826,14.763 L20.826,20 L32.196,20 L32.741,19.95 C33.099,19.879 33.466,19.843 33.815,19.737 C36.097,18.94 37.68,17.124 37.989,14.763 z M33.299,8.456 L33.151,8.428 L30.133,8.428 L30.133,13.703 L38,13.703 C37.759,11.096 35.835,9.125 33.299,8.456 z M3.554,8.428 C1.489,9.312 0.096,11.502 0,13.703 L10.429,13.703 L10.429,8.428 L3.554,8.428 z M29.043,8.428 L11.519,8.428 L11.519,13.703 L29.043,13.703 L29.043,8.428 z M25.334,1.399 L24.952,1.391 C23.492,1.457 22.028,1.726 20.841,2.545 L20.826,2.527 L20.826,7.368 L32.32,7.368 C31.951,4.097 28.942,1.624 25.334,1.399 z M13.649,-0 L13.649,0 C8.841,0 4.943,3.104 4.943,6.933 C4.948,7.078 4.946,7.223 4.963,7.368 L19.736,7.368 L19.736,2.155 C18.038,0.899 16.13,0.015 13.649,-0 z\" fill=\"url(#G1)\"/>\n</svg>",
      "profile": "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"32\" height=\"32\" viewBox=\"0, 0, 32, 32\">\n  <g id=\"btn-user-svg\">\n    <g>\n      <path d=\"M26.25,20.65 L23.55,23.35 L21.75,21.55 M24,17.5 C21.51,17.5 19.5,19.51 19.5,22 C19.5,24.48 21.51,26.5 24,26.5 C26.48,26.5 28.5,24.48 28.5,22 C28.5,19.51 26.48,17.5 24,17.5 z\" fill-opacity=\"0\" \n      stroke=\" #B3FF94\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      <path d=\"M18.99,18.44 L16,17.36 L16,15.32 M17,22.5 L6.5,22.5 L6.5,21.01 C6.5,20.01 7.11,19.11 8.05,18.77 L12,17.36 L12,15.32 M17.94,11.23 C17.94,8.62 16.18,6.5 14,6.5 C11.81,6.5 10.05,8.62 10.05,11.23 C10.05,13.85 11.81,15.97 14,15.97 C16.17,15.97 17.94,13.85 17.94,11.23 z M10.09,10.47 C10.57,10.72 11.05,10.84 11.62,10.84 C12.76,10.84 14.14,10.17 14.59,9.31 C15.33,10.61 16.19,11.10 17.54,10.84 C17.67,10.81 17.78,10.82 17.91,10.81\" fill-opacity=\"0\" \n      stroke=\" #FFFFFF\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </g>\n  </g>\n</svg>",
      "config": "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"32\" height=\"32\" viewBox=\"0, 0, 32, 32\">\n  <g id=\"Layer_1\">\n    <path d=\"M16.48,18.5 L16.48,11.5 M22.51,16.5 L22.51,18.5 M10.48,7.5 L10.48,12.5 M10.48,14.5 L10.48,18.5 M22.51,7.5 L22.51,14.5 M16.48,7.5 L16.48,9.5 M20.51,16.5 L24.51,16.5 L24.51,14.5 L20.51,14.5 z M14.48,11.5 L18.48,11.5 L18.48,9.5 L14.48,9.5 z M8.48,14.5 L12.48,14.5 L12.48,12.5 L8.48,12.5 z M22.52,21.5 C21.69,21.5 21.02,22.17 21.02,23 C21.02,23.82 21.69,24.5 22.52,24.5 C23.35,24.5 24.02,23.82 24.02,23 C24.02,22.17 23.35,21.5 22.52,21.5 z M16.48,21.5 C15.65,21.5 14.98,22.17 14.98,23 C14.98,23.82 15.65,24.5 16.48,24.5 C17.31,24.5 17.98,23.82 17.98,23 C17.98,22.17 17.31,21.5 16.48,21.5 z M10.48,21.5 C9.65,21.5 8.98,22.17 8.98,23 C8.98,23.82 9.65,24.5 10.48,24.5 C11.31,24.5 11.98,23.82 11.98,23 C11.98,22.17 11.31,21.5 10.48,21.5 z\" fill-opacity=\"0\" \n    stroke=\" #FFFFFF\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </g>\n</svg>"
    }
  },
  {
    "id": "cw.Sys.Hub",
    "build": 139,
    "app": {
      "name": "Sys.Hub",
      "title": "Dashboard",
      "version": "3",
      "build": 139,
      "collapsed": [],
      "author": "ermouth",
      "timeout": "3000",
      "ico": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAOO0lEQVR4XuWbeXBc1ZXGf1fdLam1L5EsC68Y22BbxsuAWYqpEAJhDIRMGBIKksrEkGIJIQl/EDLGGUzYbFxmKRc2sQ0JM1kqCRVmgjEJkEoKEuzYibCxDZYXbGNJSFa3Wmot3erlTp23yK/bkvp1S7JJza1qd8v33eV899xzvnPufYr/50WdDvl/FNCXaC9LtIf5JDgfxXQNFfbgGlAQQvOhjnNE+3gnmeTvd1eoN8d7fuMCwCatq2J93KkHuCHay8JkPDcx8rxQUMwelc8vfEWsv02pYG49Dd9qTAFY162vz0vwaLSHOclE6qBJIKlBVtv4yD+OopShBeSJNijz21nyPFBQwj48LL+rTL08VkCMCQDrg/qmgX5eiMcpNKSzhExoU2j51BXCFB9U+KDYY37bQgo4oRh0xSEYg7Y4tEYgT4BQ4LHAMTqW316CRX7uvqNK/Xy0QIwKgBeiuqGzgzd0nFpbcBFaPr48mOeHhjKoL8xtmsf64WAPNPbBQBK8Fhh2byqfA8XVfP72AvVBbiOYWpdTebZLr492c4et6iJ0TMM0P1xSBtOKcup22EYf9cNbXXCkH3wOIIytUcaGu8rVnbmMmDUAz4d1TaibRh3jLBlQ1FdWZ6YfPlMJ1QW5TMN9m64YvBIA0Q7RMnsbKR/NFWUsXFaqTrjvLUsN2DSgL+xuY7tOmIZMVr3IA9dXw+QxXvFMQhzuhd8GIJo8aSOUB6onsOhr+aoxU/vBbeT2wY1xvTTcyhZbeFn1eUVwXa1pmM5EEU/yP+3wfh/k55nTEBBKJ3LNN7zqVTdzcjX152P6s6GPeV2Et1X+ykq4oMLNEOP/zI4QvN4JBQ4Qyiey9Fav2pppdFcAPNutt/cHudD25V+ZAPX+TF2f3vqP+uDn7ZbrBIqq+fudpWpxplm4AuCZoL6zO8Sz4oaW1UFNjm4t02RGW38iAptbTS0tqeaRb5erBzL16QoArfUPI0keyBemlk7RMo1wmuvjGsJxqPSxUyl1QabhMwKgtf4MMO5BSaaJ5lj/jFLq2yO1HRIAYXiRKK9FEjR/s4IFPvDlOIEz3mxjN9tjirrifK7490J1KH1CQwLwZKtuTkapF1d3eQUsqTzjcuQ0gZ0heKPTdJF5Plq/e5aqzwiABDZ93RhBRiQJX62DyZ8wi+8WjbYobG6BAllmDfml3HxPTWoAdYoGPHVcxxJxvMLyJIi5pc7tcKnPdQ5AaxS64xBNQIEHyr0wyQ+l3tz6zKXVf7dCc5/JFj0+AvdOUZ9y9pMCwIaA/rfeML+yV/+uSWbY6rpo2B6Cd8LQlzB9ssHO7ByAlROo8MLFZbCw3HXPOT8YHIB1R8GvTPpeUsON36xQv7Y7TAFgXUjvj4aYJas/rRBuzGL1j/TBr9tB8iDCF0ZyL+KnxV1JXuBLNTDBwSv290BzP3ycgN44lHug0gNzS6A+x3jjF83wYa8ZOOWX0XTvRDX7FAA29eup4QBHJH0lAYao/hSXe7+xC14NmlQ0G5ogiZLeJHx/Ghzrg5c6zEyRaI6dOpK/k0mIJaHMA9dOgHNKs1OIQ2H4abMZRguPKa7krG/VqBbpZXCh1gX0smiYzbI6soLfmeJukH1h+E0HFFo83F2rk0+Job1vKrzeAe/1mWOL8CL44Cdp/o4nIRKHJVVw7Sn2fOSRn2gyFzZPg7+EZfdOUS+kALBWa3/8GMFInMIv1sBcFyjLhNZ+BJ5RBIQ2AG8GYFevCYAhuCW0/dvIJybN9JoY1YVl8MWp7uHe2wn/dQwK8xmYXMrE2yabCdaUraq1ngEcdNvtnwPwdthUrVyLE4Dd1j5NB0C2gJFEtb4FhP44fH0azMwiIrW80XeUUk8PaQS11vcBq9wKs/E4dIm1d9tgiOecALzbY2qTU1h71VNAkWRMAsp98N05WQ/+J6XUp4cD4DXgc267/OHh3Pe+PYYA8L1p8GYHNIZPAmBvgUTaVrBT6lIvXuI/5kF1ltGpUpJ4N4vx46daLw508uLsJOdcVY0Efa7KT1pMmjmaInT75jqQpMahfmtCTqGtgwSnUTS2AhBLwKfr4NwsqPrrH0NjN28V1/LVuyvVUQOADd16f0+QWbIaN9TAuSWjEemT23Z/CDYeNPOYxVXsu3+ammsDEOwNUimr8YUMAPyxA/4StvbpEMZPSNTCYrhuAqw4ZG6Rkcrgykqi1V7tpJlwHdz3suIKYnG47iyYWQKP7YF8ZXIE4R+LquAqYa4jcJf3O+HHB01aXlhB5/IZqsoGQPcGTT+5bGIqM3NO/sUWaBkwrf5whl8Y3vwiuLoWHvkQ/CMBMISvt4lPCgewDONAHP7FAuCJPabgsh0EBBlX6q+ZClcOw2FaeuDJfeai+Mth+SzLGGzo1hkB2NoOu/syu7xsAEj39Ybw6RzAAZJogAFAKTzxngmA0YcFkHiG/gR8tg6un3Wq3jX3wFN7zXYCwAOzXQIQiMKGFncW3y0Aw5IdBwDpjDAah6WTYHYprNptAWAB5CRKfTH41nw4rzoVhONheEo0xwNFAsC5LgHY0g57bZqawca5ASCd4tp+3xDCqQGysjb5ScJAAq6ZZGrAagcA0s4Ay0GZq7yw4tLUyTaHYa1ojgXAivNOAjBoBIUGz0rzAquPmGrmhvCJ8Tq/GJbWwkMWT3D6XJmsGkLVbbZnACAG0abE1lmE/J8Y6c9Pglll8Pi7kO81n00HzgiyorD6MqguPgnCex3w4ybTdReV0/mDObYRDOu9PQHmiBu8qRZmOBpJ8/9tMy2umyLBVH0BLCiH37adajOM03Nrpa2fKcGPUWezQfs561u0a14FTCyC146lBk4GN7BAk9+iLf88BaY6qPKeE/CjD6DQa9iApofmqtmGWC/26+mhCJsWKC67rPwfNwHqZoFeOgBvn6CpvJpbVp6rdqYHQ28DaTsHVh0x4/GTBNLNUKnPpPt7+VtorqzUQ3NgSwts7zDjCvvZlG1hRYKDdbZ2WPwh3aP0x+D+JTBXzi7TyilU2K7XWj8OfC+9we/b4V2XRnAoaOxJOw2V7e8lqvvBHNjaCjuD4Emz6ukG09g2TjBs2uygz3JnQSK/DVcPuVAHlVIznXZp8Cmt9aUDCd7Ol5DMUXri8LTE0h53hjCl8TDJDdtt9cXhwXmwtRl2WADYRs0Ofwc9g6Udg5qRHihZYwkhunQi3DI/DQDTkq9USj14CgDrunV1b4iPIzG8Eg+kJ0S2d8IfQiePod1ugpGSG1InAKxssAAImBpwijt0gJhClNIAEA2LJ8yLE2uusFJr1kQb22HDLvDm01OrqXnwchWRqkEb8Gyn/np/F8+PlBL7QwdsC1sHDS4QGMrfpyc3DADmw6vHYUfATFkN1S6dJQ61nSQ6FJb3n5dCeVpM8P23zHSaCOyv4tZHF6jnUwBwmxQ91Au/C0IonnZ7ywGIDDK4iuL37T07xN4V6vpwA7xyHLZ1nLQBhiu0DZxFdNJpsg2mYUxjcLGl9rJVneWDDnhmlxWY5UF1GdMeWKSOpgAgfzjT4mcXwg0jpMXlGtvxCMidHfHP6cXp7+3qwWjPZm5yvygOX5gCuwJwtMc6Q3DUO+mwQRBsf29d0/H7oNYP82qhdJj7Sc81wp6AyRvyS2hafdEQaXER4LmAvrEnzC9lHIkMb68f/0tPLnbSqB5pD8OKd8wcgABYUM6XV12ofjmkF5D/HKujsVHNegwbP70DDnSCV84s8gg8ecUIR2My7vpOvayvm82CViQBt9YPnx8Yw3mOS1cHO2D1DpBtIgTLW8Yta5aonzkHG/Z4PBGhXsjE1dWwKIvU87hIkmOnbxyGXzWB32u4xpY1VyjjbmNGADZF9DkDEd7wDtD6jRouynH8M95MaPbDf6Gnx0OoqpCrVixW77sCwPmQ1nojcNsZlya3CRxWSslhz7DFVZCrtW4KRJkpR+WeUabBc5PDfSvhCpEYFJnJ/SqlVOeoAVj7kX4sGOJ+uWRw19mm3/0kltYueGSbmRdcMIVH72lQyzPN05UGPN2md4Y7WGwzr69Nh6mfsLODQ0FYu9Nipwr8ZWxftURltF+uAFgX1Eu72tgidwfkAoRw7msnwkVDxNqZEB+P+j8dgZ99YOb6jJcs5Ap9DZc/3qD+mGk8VwBIJ0+c0NdE23lFUs9CaSWwOL8cvnz26BIlmSaYqX5zI/y1zQrVLeHza7h2VYPakqmt1LsGQB5+8ohe1NPL3xIx8+RGQs8SL9w4NbtjajcTy/RMUwf8ZC90Rs3w1xBEsr0TuOixuWp7pvZ2fVYASKOnDusJXWH+Fo+bL0zYaa1zSuCmGVCe5Umt24naz7V0wcsH4N0OU+XFMBuy59FcXcvi5Q2qLZs+swbA7vzhg3r9QDd3yJYwEhFJkIOL2WXwuckwfYzZ4/4O2HoI9gVBMlbijmXyst99fjasvvg0vTLjRHfNAT0n3M3L8RgzJZEiRYAQIylngpfUwXmVMCOL42tn/0c7YVsLbGs1b4T4LCMngsvHq2jOn8DSRxvU7mxW3flszhrg7OSRPfrmaIRnYjGqxTaIRsjWkI/kCsRoygXJqaVQWwTVRcZt7sGb55LElNfluiLQFobD3XAoZEZwstLGtTtrpobweQQ8JdyTHtjkAsKYAGAPvHKf/td4lIcHIsxJyNuijoMN4x1CCxQ7vWUfaRlC2ZcqrTfCjKtyjiKq7vGzizxWrlmifpOLsEO1GVMA7AHW7NefCg1we3KAm2L9zBOvYWSD0k98Mkghr876CmjEx0tFiuce/CfVMVaC2/2MCwDpk7yvUV/phQUkuFgnmJbMY7pKUmE7YQMbRYgkHyrNLjzsVvDXxy5Qfx5rgdP7Oy0AjLcQo+n//wBapCCq2qbw9AAAAABJRU5ErkJggg==",
      "maskstate": "",
      "nodetitle": "",
      "width": [[300,
          5000],
        900,
        1200],
      "padding": "none"
    },
    "params": {
      "restyle": 0
    },
    "data": {
      "dbs": []
    },
    "lang": {
      "en": {
        "BTNS_ACTIONS_GLOBAL": {
          "NewBucket": "<span class=\"fi-folder-add o60\"></span> Add new bucket...",
          "CheckUpdates": "<span class=\"fi-database o60\"></span> Update apps...",
          "Logout": "<span class=\"fi-power o60\"></span> Log out "
        },
        "LOGOUT": {
          "MSG_LOGOUT_START": "Logging out...",
          "MSG_LOGOUT_OK": "You was logged out successfully",
          "MSG_LOGOUT_FAIL": "Log out failed. Server responded {1}: {2}"
        },
        "UPD": {
          "LOADING": "Loading apps...",
          "BTN_DOUPD": "Update",
          "ERR_LOAD": "Oops, server responded with error. Please retry in 5-10 minutes.",
          "OK_NOUPDNEED": "All system apps are up to date, no update needed.",
          "H_APPSLIST": "Select apps and docs to update",
          "ERR_FAILSAVE": "Failed writing updated apps to profile DB.",
          "ERR_CANCEL": "Update cancelled.",
          "ERR_FAILR": "Failed reading system apps set. Please, try again in several seconds.",
          "OK_UPD": function (fin) {
                    return 'Succesfully updated '+fin.length+' app'+(fin.length>1?'s.':'.')
                  
            }
        }
      },
      "ru": {
        "BTNS_ACTIONS_GLOBAL": {
          "NewBucket": "<span class=\"fi-folder-add o60\"></span> Добавить БД...",
          "CheckUpdates": "<span class=\"fi-database o60\"></span> Обновить...",
          "Logout": "<span class=\"fi-power o60\"></span> Выход "
        },
        "LOGOUT": {
          "MSG_LOGOUT_START": "Выход...",
          "MSG_LOGOUT_OK": "Вы вышли из системы",
          "MSG_LOGOUT_FAIL": "Закрытие сессии не удалось, сервер ответил {1}: {2}"
        },
        "UPD": {
          "LOADING": "Загрузка приложений...",
          "BTN_DOUPD": "Обновить",
          "ERR_LOAD": "Сервер ответил ошибкой. Повторите минут через 10",
          "OK_NOUPDNEED": "Ни одно приложение не требует обновления.",
          "H_APPSLIST": "Выберите приложения и документы для обновления",
          "ERR_FAILSAVE": "Не удалось сохранить обнвления в БД пользователя.",
          "ERR_CANCEL": "Обновление отменено.",
          "ERR_FAILR": "Не удалось прочитать список приложений из БД профиля. Попробуйте снова через минуту",
          "OK_UPD": function (fin) {
                    return 'Обновлено '+fin.length+' приложений';
                  
            }
        }
      }
    },
    "init": function ($o) {
    var that = this;
          
          that.UpdateList100 = that.UpdateList.debounce(100);
          
          $o.formgen('init', that.HTML);
          $o.then(function(){
            that.UpdateList();
          }.debounce(1));
          
          $o.on('click.my', '.action-add', function(){
            var act = $(this).data('action');
            that[act]();
          });
  
      },
    "ui": {
      "#alldbs": {
        "bind": "dbs",
        "manifest": function (e) {
                  if (e.type=='actions') return this.Action;
                  return this.Card;
                
          },
        "list": "<div class=\"bucket hoverlink\"></div>",
        "merge": true,
        "id": ["stamp"],
        "hash": function (d) {
                  return cw.lib.sdbm(d);
                
          },
        "check": true
      },
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
      "#hproxy": {
        "listen": {
          "settings.cw": function (d,v) {
                      this.UpdateList();
                    
            },
          "sync.cw": function (d,v) {
                      this.UpdateList100();
                    
            }
        }
      }
    },
    "RT": function (key) {
    return null==key?this:Object.isArray(key)?cw.lib.getref(this,key):this[key];
  
      },
    "HTML": "<div id=\"hheader\" class=\"w100p tac pl10 pr40\"></div><div id=\"alldbs\" class=\"w100p xgray tac\"></div><div id=\"hproxy\" class=\"hide\"></div>",
    "style": {
      " ": "font-size:16px;line-height:22px;background-color:#cdd6e7;background-image:linear-gradient(to top,#a4b2ca,#cdd6e6);",
      " #alldbs": {
        "": "display:flex; flex-wrap:wrap; justify-content:center; align-items:stretch; margin: 8px auto 30px auto;",
        " .hoverlink .pseudolink": "border-bottom:none!important;"
      },
      "": function ($o) {
            var isApp = !!this.app,
                dbnum = window.cw.crypto.dblist().length,
                h = window.innerHeight,
                cdb = dbnum>6?'max-width:1500px;':'max-width:1200px;',
                ww = $o.width(),
                pad = ww < 400?0:30,
                w = (ww - pad*2).clamp(600, dbnum>6?1500:1200),
                cw = (w / 340 | 0).clamp(1,10),
                w0 = (w/cw - 20 | 0).clamp(300,400)+1
            return {
              '':          'min-height:'+(isApp?(h - 32)+'px!important;':'auto'),
              ' #alldbs':  isApp?cdb:'background:white; ',
              ' .bucket':  'width:calc(100% / '+cw+' - 20px);max-width:'+w0+'px;',
              ' .cpanel':  w0<330?'padding:0 0 20px 20px;':'padding:0 0 25px 70px;'
            }
          
        },
      " .bucket": {
        "": "margin:10px;text-align:left;min-width:200px; display:inline-block; border-radius:1px; padding:5px; background:white;",
        " ": "box-shadow:1px 8px 15px -5px rgba(9,20,47,0.11), 0 0 15px 0px rgba(5,23,69,0.06);",
        " #dbico": "width:40px; height:40px; margin: -2px 10px 2px -50px;background-size:contain; background-repeat:no-repeat; background-position:50% 50%;",
        " .cpanel": {
          " .button": "padding:0.3em 0.8em 0.4em 0.6em;line-height:1.3em;background:white!important;text-decoration:none;"
        }
      },
      " .xbtn": {
        "": "display:inline-block; vertical-align:top; line-height:1.3em; border-radius:3px;padding:0.35em 0.8em 0.4em 0.6em; margin-bottom:2px;cursor:pointer; transition:background-color 0.5s, color 0.5s, border 0.5s;color:#98accd; border:1px solid #c1cae0;background-color:white;text-align:center;",
        ":hover": "color:#2a70a6!important;border:1px solid #2a70a6a0!important;"
      },
      " #hheader": {
        "": "padding:18px 20px 0 20px;filter: contrast(0.7);opacity: 0.6;",
        " .hub-logo": "max-width:44px;max-height:33px; display:inline-block; vertical-align:middle;",
        " .hub-title": "max-width:calc(100% - 44px); font-size:1.76em; line-height:1.3em; padding:0 0 0 9px;display:inline-block; vertical-align:middle;  overflow:hidden; text-overflow:ellipsis;"
      }
    },
    "Card": {
      "id": "cw.Sys.Hub.Card",
      "inherit": ["RT"],
      "data": {
      },
      "init": function ($o) {
            var that = this,
                dbid = that.data.name;
            //that.lang = that.RT(['lang','BUCKET']);
            $o.html($.my.formgen(this.HTML).assign(that.lang));
            var db = cw.db(dbid),
                dbset = cw.dbsettings(dbid);
            that.AllowConfig = !!db && cw.db(that.data.name) && !!Object.size(cw.db(that.data.name).acl('Config'));
          
        },
      "AllowConfig": false,
      "ui": {
        "#dbico": function (d,v,$o) {
              $o.css({'background-image':'url('+(d.pic||d.ico||this.RT('files')['bucket.svg'].url)+')'})
            
          },
        "#dbtitle": function (d) {
              return d.title.escapeHTML();
            
          },
        "#dbname": {
          "bind": function (d,v,$o) {
                  $o.parent().attr('href','#'+d.name+(d.start?'/'+d.start:''));
                  return d.name.escapeHTML();
                
            }
        },
        "#dbext": {
          "bind": function (d) {
                  var that = this,
                      a = that.RT('CardState')(d),
                      lang = that.lang['B_'+a[0]];
                  return '<span class="{1}"><span class="{2}"></span> {3}</span>'.assign(lang.color, lang.icon, lang.text(a[2]));
                
            }
        },
        "#btn-view": {
          "bind": function (d,v,$o) {
                  $o.attr('href','#'+d.name+'/'+d.start);
                
            },
          "css": {
            "self:hide": function (d) {
              return !cw.db(d.name);
              }
          }
        },
        "#btn-settings": {
          "bind": function (d,v,$o) {
                  $o.attr('href','#'+d.name+'/Config');
                
            },
          "css": {
            "self:hide": function (d) {
              return !this.AllowConfig;
              }
          }
        },
        "#btn-unmount": {
          "bind": function (d,v) {
                  var that = this;
                  if (v==null) return;
                  cw.dbsettings(d.name, Object.merge({_cmd:'delete'},cw.dbsettings(d.name),true));
                
            },
          "css": {
            "self:hide": function (d) {
              return !!cw.db(d.name) || !(cw.dbsettings(d.name)||{}).url;
              }
          },
          "events": ["click.my"]
        },
        "#btn-syncstartstop": {
          "bind": function (d,v) {
                  var that = this,
                      l = that.lang,
                      s,
                      h = '';
                  
                  var stop = '<span class="fi-pause fs120 dib vat lh100 o70"></span>\u00a0',
                      start= '<span class="fi-play dib vat o70"></span>\u2009';
                  
                  s = that.RT('CardState')(d);
                  
                  if (v!=null) {
                    
                    if (s[0] == 'SYNC') {
                      cw.db(d.name).sync(false);
                      h = start + l.BTN_SYNC_START;
                    }
                    else if (s[0] == 'PAUSED') {
                      cw.db(d.name).sync(true);
                      h = stop + l.BTN_SYNC_STOP;
                    }
                  }
                  else {
                    if (s[0] == 'SYNC') h = stop + l.BTN_SYNC_STOP;
                    else if (s[0] == 'PAUSED')  h = start + l.BTN_SYNC_START;
                  }
                  
                  return h;
                  
                
            },
          "css": {
            "self:hide": function (d) {
                      var that = this,
                          s = that.RT('CardState')(d);
                      return !/^(SYNC|PAUSED)$/.test(s[0]);
                    
              }
          },
          "events": ["click.my"]
        }
      },
      "Urler": function (s) {
            
            if (!/^http[s]?:\/\//.test(s)) {
              return s.escapeHTML();
            }
            
            var url = new URL(s),
                path = url.pathname.from(1).split('/')[0],
                p = url.hostname.truncate((26-path.length).clamp(10,100),'right','…').escapeHTML() + '/'+path.escapeHTML(),
                pf = [
                  url.protocol == 'https:'?'':'<span class="fi-unlock o50 ml3"></span>',
                  url.username ?'<span class="fi-torso o50 ml3 fs90"></span>':''
                ].join('');
            
            return p + pf;
          
        },
      "Compact": function () {
            var that = this,
                name = that.data.name,
                db = cw.db(name),
                pi = $.Deferred();
            
            cw.note('Started compaction of '+name);
            db.compact()
            .then(function(){
              cw.note('The '+name+' bucket was compacted sucessfully', 'ok');
              pi.resolve();
            })
            .catch(function(err){
              console.log(err);
              cw.note('Failed compacting the '+name+' bucket, see console for details', 'error');
              pi.reject(err);
            });
            
            return pi.promise();
          
        },
      "isCompacting": false,
      "lang": {
        "en": {
          "B_SYNC": {
            "icon": "fi-check fs90 o60",
            "text": function (num) {
               return 'In sync with '+num+' DB'+(num>1?'s':'')  
              },
            "color": "green1"
          },
          "B_PAUSED": {
            "icon": "fi-clock fs90 o80",
            "text": function (num) {
               return 'Sync with '+num+' DB'+(num>1?'s':'')+' paused' 
              },
            "color": "gray"
          },
          "B_INACTIVE": {
            "icon": "fi-prohibited fs90 o80",
            "text": function () {
               return 'External, disconnected' 
              },
            "color": "red2"
          },
          "B_LOCAL": {
            "icon": "fi-laptop fs90 o60",
            "text": function () {
               return 'Local bucket, no sync' 
              },
            "color": "gray"
          },
          "B_EXTERNAL": {
            "icon": "fi-cloud fs90 o50",
            "text": function () {
               return  'External bucket'
              },
            "color": "teal1"
          },
          "BTN_DOCS": "Docs",
          "BTN_CFG": "Config",
          "BTN_SYNC_STOP": "Pause",
          "BTN_SYNC_START": "Sync",
          "BTN_UNMOUNT": "Unmount"
        },
        "ru": {
          "B_SYNC": {
            "icon": "fi-check fs90 o60",
            "text": function (num) {
               return 'Репликация в '+num+' БД'  
              },
            "color": "green1"
          },
          "B_PAUSED": {
            "icon": "fi-clock fs90 o80",
            "text": function (num) {
               return 'Репликация с '+num+' БД'+(num>1?'s':'')+' на паузе' 
              },
            "color": "gray"
          },
          "B_INACTIVE": {
            "icon": "fi-prohibited fs90 o80",
            "text": function () {
               return 'Внешняя БД, отключена' 
              },
            "color": "red2"
          },
          "B_LOCAL": {
            "icon": "fi-laptop fs90 o60",
            "text": function () {
               return 'Локальная БД' 
              },
            "color": "gray"
          },
          "B_EXTERNAL": {
            "icon": "fi-cloud fs90 o50",
            "text": function () {
               return  'Внешняя БД'
              },
            "color": "teal1"
          },
          "BTN_DOCS": "Доки",
          "BTN_CFG": "Конфиг",
          "BTN_SYNC_STOP": "Cинхр.",
          "BTN_SYNC_START": "Cинхр.",
          "BTN_UNMOUNT": "Отключить"
        }
      },
      "HTML": "<div class=\"w100p\">\n  <a class=\"w100p pl70 pt20 lh130 db hoverlink pseudolink\">\n    <div id=\"dbico\" class=\"fl\"></div>\n    <div id=\"dbtitle\" class=\"fs210 nw w100p oh ell lh110 mb2\"></div>\n    <div id=\"dbname\" class=\"fs100 o80 nw oh ell pl1\"></div>\n  </a>\n</div>\n<div id=\"dbext\" class=\"pl70 fs90 mt10 mb15\"></div>\n<div id=\"dbsync\" class=\"fs90 gray pl3 mt3 hide\"></div>\n<div class=\"cpanel gray fs90 nw\">\n  <a id=\"btn-view\" class=\"xbtn tdn mr3\">\n    <span class=\"fi-list-thumbnails o70\"></span>&nbsp;{BTN_DOCS}\n  </a>\n  <a id=\"btn-settings\" class=\"xbtn tdn mr3\">\n    <span class=\"fi-wrench o70\"></span>&nbsp;{BTN_CFG}\n  </a>\n  <span id=\"btn-syncstartstop\" class=\"xbtn hide\">\n    <span class=\"fi-pause fs120 dib vat lh100 o70 mr2\"></span>&nbsp;{BTN_SYNC_STOP}\n  </span>\n  <span id=\"btn-unmount\" class=\"xbtn hide\">\n    <span class=\"fi-x fs95 lh100 o70\"></span>&nbsp;{BTN_UNMOUNT}\n  </span>\n</div>"
    },
    "Action": {
      "init": function ($o) {
            $o.html(this.HTML.assign(this.lang));
          
        },
      "lang": {
        "en": {
          "TXT_TITLE": "Actions"
        },
        "ru": {
          "TXT_TITLE": "Действия"
        }
      },
      "ui": {
        "#gactions": {
          "bind": function (d,v) {
                    return Object.keys(d.html).map(function(k){
                      var h = d.html[k];
                      return '<div><span class="action-add xbtn" data-action="{2}">{1}</span></div>'.assign(h, k);
                    });
                  
            }
        },
        "#gname": {
          "bind": function (d) {
            return cw.me().escapeHTML()
            }
        },
        "#gupic": function () {
          return cw.me('pic')
          }
      },
      "HTML": "<div class=\"pl70 pt15\"><img id=\"gupic\" src=\"\" class=\"w40 dib vat br100\" style=\"margin:0px 10px 0 -50px\"><div id=\"gname\" class=\"fs180 lh120 gray pb12 dib vat\"></div></div><div id=\"gactions\" class=\"cpanel w100p pb20 pl70 lh250 fs90 blue oh\" style=\"max-height:300px\"></div>"
    },
    "CreateBucket": {
      "init": function ($o) {
            var that = this;
            $o.html($.my.formgen(that.HTML).assign(that.lang));
            $o.then(function(){
              that.my.check('#name')
            })
          
        },
      "ui": {
        "#name": {
          "bind": function (d,v,$o) {
                  $o.height(0).height($o[0].scrollHeight-11);
                  if (v!=null) d.name = v.compact();
                  return v;
                
            },
          "check": function (d,v) {
                  var L = this.lang;
                  if (v.length<2) return L.ERR_LAT;
                  if (/^http[s]?:\/\//.test(v)) {
                    //check url
                    if (v.has("•")) return L.ERR_PWD;
                    if (!/^http[s]?:\/\/([^\/]{2,100}\/){1,5}[a-z0-9_$\(\)+\-]{1,200}[\/]?$/.test(v))
                      return L.ERR_URL;
                  } 
                  else if (v.to(1) == '/' && window.cw.userCtx != null ) {
                    if (
                      !/^\/[a-z][a-z0-9_$\(\)+\-]{0,200}$/.test(v)
                      && v != '/_users'
                      && v != '/_replicator'
                    ) 
                    return L.ERR_DBNAME;
                  }
                  else {
                    if (!/^[a-z0-9\s\-]{2,30}$/i.test(v)) return L.ERR_230;
                    else if (d.dbs.indexOf(v.replace(/\s/g,'-').toLowerCase())!==-1) return L.ERR_EXIST;
                  }
                
            }
        },
        "#btn-ok": {
          "bind": function (d,v,$o) {
                  if (v!=null) {
                    if ($o.my().root.my('valid')) $o.trigger('commit');
                    else cw.note(this.lang.MSG_ERRNAME, 'error');
                  }
                
            },
          "events": "click.my"
        },
        "#btn-cancel": {
          "bind": function (d,v,$o) {
                  if (v!=null) {
                    d.cmd = 'cancel';
                    $o.trigger('cancel');
                  }
                
            },
          "events": "click.my"
        },
        "#mountmode": {
          "bind": "mount",
          "init": function ($o) {
                  $o.tags(this.lang.SEL_MOUNT);
                
            }
        },
        "#mount": {
          "watch": "#name",
          "css": {
            "hide": function (d,v,$o) {
               
                      var isurl = /^http[s]?:\/\/.+/.test(d.name),
                          hide = false;
                      if (window.cw.userCtx) {
                        hide = d.name.to(1) != '/' && !isurl;
                      }
                      else {
                        hide = !isurl;
                      }
                      return (hide || $o.my('errors')['#name']);
                    
              }
          }
        },
        "#syncdir": {
          "bind": "dir",
          "init": function ($o) {
                  $o.tags(this.lang.SEL_DIR);
                
            }
        },
        "#interval": "interval",
        "#sync": {
          "watch": ["#name",
            "#mountmode"],
          "css": {
            "hide": function (d,v,$o) {
               
                      if (d.mount == 'external') return true;
                      var isurl = /^http[s]?:\/\/.+/.test(d.name),
                          hide = false;
                      if (window.cw.userCtx) {
                        hide = d.name.to(1) != '/' && !isurl;
                      }
                      else {
                        hide = !isurl;
                      }
                      return (hide || $o.my('errors')['#name']);
                    
              }
          }
        }
      },
      "data": {
        "name": "",
        "dir": ["from",
          "to"],
        "interval": "0",
        "mount": "",
        "dbs": []
      },
      "style": {
        " ": "font-size:16px;line-height:22px;",
        " textarea": "resize:none;min-height:1em;"
      },
      "lang": {
        "en": {
          "TXT_TITLE": "New bucket title or CouchDB bucket URL:",
          "PLC_LAT": "URL or new bucket name (latins and nums)",
          "LBL_MOUNT": "Mount",
          "LBL_SYNC": "Sync",
          "TXT_SYNC1": "in",
          "TXT_SYNC2": "min interval",
          "ERR_LAT": "2+ latins and nums",
          "ERR_PWD": "Impossible password in URL",
          "ERR_URL": "Invalid CouchDB URL",
          "ERR_DBNAME": "Invalid CouchDB bucket name",
          "ERR_230": "2-30 latins and nums",
          "ERR_EXIST": "This name is already taken",
          "BTN_OK": "Create new bucket",
          "BTN_CANCEL": "Cancel",
          "MSG_ERRNAME": "Correct name fist!",
          "SEL_MOUNT": {
            "tags": [[{
                  "External, no local sync": "external"
                }]],
            "empty": {
              "Sync locally": ""
            }
          },
          "SEL_DIR": {
            "tags": [{
                "From": "from"
              },
              {
                "To": "to"
              }]
          }
        },
        "ru": {
          "TXT_TITLE": "Название БД или внешний URL:",
          "PLC_LAT": "URL или имя новой БД (латиница, цифры)",
          "LBL_MOUNT": "Режим",
          "LBL_SYNC": "Репликация",
          "TXT_SYNC1": "интервал",
          "TXT_SYNC2": "мин",
          "ERR_LAT": "2+ символа, латиница и цифры",
          "ERR_PWD": "Невозможный пароль в URL",
          "ERR_URL": "Неверный путь к CouchDB бакету",
          "ERR_DBNAME": "Неверное имя CouchDB бакета",
          "ERR_230": "2-30 символов, латиница и цифры",
          "ERR_EXIST": "Это имя уже используется",
          "BTN_OK": "Создать БД",
          "BTN_CANCEL": "Отмена",
          "MSG_ERRNAME": "Санчала исправьте имя!",
          "SEL_MOUNT": {
            "tags": [[{
                  "Внешняя БД": "external"
                }]],
            "empty": {
              "Реплицировать локально": ""
            }
          },
          "SEL_DIR": {
            "tags": [{
                "Оттуда": "from"
              },
              {
                "Туда": "to"
              }]
          }
        }
      },
      "HTML": ["<div class=\"xgray fs120\">{TXT_TITLE} </div>",
        "<div class=\"mt10\">",
        "<textarea id=\"name\" class=\"w100p fs110 lh120\" style=\"word-wrap:break-all;\" placeholder=\"{PLC_LAT}\"></textarea>",
        "<div class=\"my-error-tip\"></div>",
        "</div>",
        {
          "label": "90px",
          "row": "100%",
          "rowCss": "my-row pt6",
          "labelCss": "fs90 my-label pt6 gray"
        },
        "<section id=\"mount\" class=\"hide\">",
        ["{LBL_MOUNT}",
          "spn#mountmode.dib.mt1.vat"],
        "</section>",
        "<section id=\"sync\" class=\"hide lh170\">",
        ["{LBL_SYNC}",
          "spn#syncdir.dib.mt1.vat",
          "<div class=\"dib vat\">",
          "<span class=\"ml2\"> {TXT_SYNC1} </span>",
          "num#interval.w70.pt2.pb2",
          {
            "min": 0,
            "max": 9999
          },
          "<span> {TXT_SYNC2}</span>",
          "</div>"],
        "</section>",
        {
          "label": "90px",
          "row": "100%",
          "rowCss": "my-row mt15 pt15 xgray btd"
        },
        ["",
          "spn#btn-ok.mr5.button.green",
          {
            "txt": "{BTN_OK}"
          },
          "span#btn-cancel.button",
          {
            "txt": "{BTN_CANCEL}"
          }]]
    },
    "UpdateList": function () {
        var that = this,
            d = that.data,
            all = cw.dbs(),
            ord = cw.crypto.dblist(),
            a = Object.keys(all).map(function(k){
              if (!all[k]) return;
              var db = cw.db(k),
                  dbset = db.settings();
              if (!dbset.name || dbset.hidden) return null;
              return $.extend(
                true, 
                {
                  _local:      db._local === false?false:true,
                  syncState:  Object.clone(db.sync(), true)
                }, 
                dbset
              );
            }).compact();
        
        // search for inactive buckets
         ord.forEach(function(k){
          if (all[k]) return;
          // we have DB failed to connect
          a.push($.extend(
            true,
            {
              _local: false,
              _inactive:true,
              syncState:{}
            },
            cw.crypto.dblist(k)
          ));
        });
        
        a = a.sortBy(e=>ord.indexOf(e.name));
        
        if (cw.config === undefined || cw.config('profileWritable')) a.push({
          stamp: '-1',
          type:'actions',
          html:that.lang.BTNS_ACTIONS_GLOBAL
        });
        d.dbs = a;
        that.my.recalc('#alldbs');
        that.my.check('#alldbs');
        //console.log(1)
      },
    "CardState": function (d) {
        var t = 'LOCAL', 
            an = 0, 
            sn = 0;
        if (d.url) {
          t = d._inactive?'INACTIVE':'EXTERNAL';
        }
        else if (
          d.sync.length && 
          (sn = d.sync.map(e=>(e.dir||[]).length?1:0).sum())
        ) {
          an = Object.values(d.syncState).map(e=>e?1:0).sum();
          t = an?'SYNC':'PAUSED';
        }
        return [t, an, sn];
      },
    "NewBucket": function _newBucketModal() {
        var that = this,
            d = that.data;
        return $.my.modal({
          manifest:  that.CreateBucket,
          width:    420,
          css:      'p20 xgray',
          esc:      true,
          data:{
            dbs:Object.keys(cw.dbs()).map(function(e){return e.toLowerCase()})
          }
        })
        .then(function(res){
          var s, name, url = '', sync = [];
          if (Object.isObject(res)) {
            if (/^http[s]?:\/\//.test(res.name)){
              //url
              name = res.name.split("/").compact(true).last();
              if (res.mount+'' != 'external') {
                sync.push({
                  url:      res.name,
                  dir:      res.dir.slice(0),
                  interval:  res.interval
                });
              }
              else {
                url = res.name;
              }
              s = cw.lib.fuse({}, that.DB, {
                title:    name.to(50).capitalize(), 
                name:      rename(name), 
                url:       url,
                stamp:    Date.now(), 
                creator:  cw.me(),
                sync:      sync
              });
            }
            else if (window.cw.userCtx && res.name[0] == '/') {
              // relative path, in-domain CouchDB bucket
              name = res.name.from(1).compact(true);
              if (res.mount+'' != 'external') {
                sync.push({
                  url:      (cw.root || (window.location.protocol+'//'+window.location.host+'/')) + name,
                  dir:      res.dir.slice(0),
                  interval:  res.interval
                });
              }
              else {
                url = (cw.root || (window.location.protocol+'//'+window.location.host+'/')) + name;
              }
              s = cw.lib.fuse({}, that.DB, {
                title:name.to(50).replace(/[_+\-]/g, ' ').capitalize(), 
                name:      rename(name), 
                url:       url,
                stamp:    Date.now(), 
                creator:  cw.me(),
                sync:      sync
              });
            }
            else {
              s = cw.lib.fuse({}, that.DB, {
                title:    res.name.to(50), 
                name:      rename(res.name), 
                url:      '',
                stamp:    Date.now(), 
                creator:  cw.me(),
                sync:      []
              });
            }
            if (s.sync && s.sync.length) {
              localStorage.removeItem(_key (s.sync[0].url, "to"));
              localStorage.removeItem(_key (s.sync[0].url, "from"));
            }
            // console.log(s);
            if (s) cw.db('cw')
            .settings(s)
            .then(function(){
              cw.note("DB created","ok");
            })
            .fail(function(msg){
              cw.note("DB creation failed during settings update. "+msg,"error");
            });
          }
          //- - - - -
          function _key (url, dir){
            // masks pwd in url
            return "_repl_"+dir+"_"+url.replace(/^(http[s]?\:\/\/[^\:@\/]+:)[^@]+(@.+)$/,"$1•••••$2");
          }
          //- - - - -
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
    "CheckUpdates": function (d,v) {
        var that = this,
            d = that.data,
            pi = $.Deferred(),  
            lang = that.lang.UPD,
            url = cw.config?cw.config('appUpdateURL'):'apps.json';
        $.my.modal(
          '<div class=" pt20 pb15 w350 tac blue">'
          +lang.LOADING
          +'<br><div class="cw-busy dib vat w90 mt10"></div>'
          +'</div>'
          ,function(){},300);
        var db = cw.db('cw');
        // Read app list  
        that.my.ajax({ 
          url:url, 
          type:'GET', 
          dataType:'json', 
          cache:false 
        })
        .then(function(a){
          var b, i, j, o, news = {}, olds, del={};
          if (!Object.isArray(a) || !a.length) {
            $.my.modal();
            //cw.lib.note(lang.ERR_LOAD, 'error', 5000);
            console.log(a);
            pi.reject(lang.ERR_LOAD);
          }
          else {
            b = Object.clone(a, true);
            for (var i=0; i<b.length; i++) {
              o = b[i];
              if (Object.isString(o)) del[o] = true;
              else {
                o.srcrev = o._rev;
                delete o._rev;
                if (o._attachments) {
                  for (j in o._attachments) {
                    o._attachments[j] = Object.select(o._attachments[j],['content_type', 'data']);
                  }
                }
                news[o._id] = o;
              }
            }
            db.allDocs({
              keys:Object.keys(news).add(Object.keys(del)), 
              include_docs:true
            })
            .then(function(res) {
              var i, o, b;
              // Compare
              for (i=0; i<res.rows.length; i++) {
                o=res.rows[i].doc;
                if (o && news[o._id]){
                  if (news[o._id].srcrev==o.srcrev) delete news[o._id];
                  else news[o._id]._rev = o._rev;
                } 
                else if (o && del[o._id]) news[o._id] = {
                  _id:o._id, 
                  _rev:o._rev, 
                  _deleted:true, 
                  name:o.name
                }
              }
              if (!Object.size(news)) pi.resolve(lang.OK_NOUPDNEED, 'ok');
              else {
                b = Object.values(news);
                $.my.modal(true);
                $.my.modal({
                  manifest:Object.merge(
                    $.my.cache("cw.Sys.Confirm"),
                    {
                      ui:{
                        '#gapps':{
                          init:function($o){
                            $o.niceScroll({
                              bouncescroll: true,
                              cursorcolor:'#234',
                              cursoropacitymin:0.07,
                              cursoropacitymax:0.4,
                            });
                          }
                        },
                        'input[name=apps]': 'apps'
                      },
                      die:function($o){
                        // Unmount niceScroll
                        var $v = $o.find('#gapps'),
                            f =  $v.getNiceScroll;
                        if (typeof f == 'function') f().remove();
                      }
                    }, 
                    true
                  ),
                  data:{
                    text:'<p class="xgray">{H_APPSLIST}</p>'.assign(lang)
                    +'<div id="gapps" class="w100p oh" style="max-height:300px">'
                    +b.map(function(e){
                      return '<div class="fs90 pb3"><label>'
                      +'<input type="checkbox" class="mr5 w15" value="'
                      +e._id.escapeHTML()+'" name="apps"/> '
                      +'<span class="'+(e._deleted?'tdl':'')+'">'
                      +e.name.escapeHTML()
                      +'</span></label></div>';  
                    }).join('')
                    +'</div>',
                    apps:b.map(function(e){return e._id}),
                    ok:  lang.BTN_DOUPD
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
                        pi.reject(lang.ERR_FAILSAVE);
                      }
                      else {
                        pi.resolve(lang.OK_UPD(fin));
                      }
                    });
                  } else {
                    console.log(res);
                    pi.reject(lang.ERR_CANCEL);  
                  }
                });
              }
            })
            .catch(function(err) {
              pi.reject(lang.ERR_FAILR);
            });
          }
        })
        .catch(function(a,b){
          pi.reject(lang.ERR_LOAD);
          console.log(a,b);
        });
        pi.then(function(a){
          $.my.modal();
          cw.lib.note(a, 'ok', 5000);
        })
        .catch(function(a){
          $.my.modal();
          cw.lib.note(a, 'error', 3000);
        });
      },
    "Logout": function () {
        var that = this,
            l = that.lang.LOGOUT,
            es = function(s){return (s+'').escapeHTML()};
        cw.lib.note(l.MSG_LOGOUT_START, '', 1000);
        that.my.ajax({
          url:'/_session', method:'POST', dataType:'json',
          headers:{'Content-type':'application/json'},
          data:JSON.stringify({name:'0',password:'0'})
        })
        .then(function(res){
          cw.lib.note(l.MSG_LOGOUT_FAIL.assign(999, 'Server returned invalid response'), 'error');
        })
        .fail(function(res, b){
          var data;
          try {data = JSON.parse(res.responseText);} catch(e){}
          if (!Object.isObject(data)) data = {};
          data.ok = false;
          var code = res.status,
              msg = data.reason || data.message || '';
          if (code != 401 && code != 403) {
            cw.lib.note(l.MSG_LOGOUT_FAIL.assign(code, es(msg)), 'error');
          }
          else {
            cw.lib.note(l.MSG_LOGOUT_OK, 'ok');
            window.location.reload();
          }
        });
      },
    "DB": {
      "ico": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABMpJREFUeNrsWU1oG1cQHoWndlWksoI1rEACGVSQWsV2wAEbkpC4bUhTVGhoc3GLDz34UHLN3efSY2kg+JASX0JTigI+tNQOpCWGBKK2KhHUJaIVREVLd4k2eEEPnJmVLK1Wq5/VjysHjVi93ff/vTfzzbxdz/7+PrwMcgxeEpkAmQCZAOksjP48Hk9Plde/24oKDF5z0fvz5YtLf+PdyKjxgHU9dNMNyI30D9OMCd/j7UwfY/3GDX5p5dLSX6ME0lW1NjY2X2eMbfYJgmSGCXD7y1u3fCNXrQ7igaD/JqZxAr+YjHkkUey5c0XT4H52l4aZlf3Sdbz5ZFRAWlSrZgdvIkQvPr6Nk7hC+cdjUTj+RsT1AI8eP4HH+UL1gfMvsN9fBpjvM02HB59fXtLb2sh6Oh0QmLiOeR/bW0dkCU6fSPQ9+vaD3+Gpog1r8cu4IFeXP1i65mgjCOKmE4igX4CFZGKgkU/NxSGA/QxJAsDY1xvprY9aVOubO9szaNC/UkYiGoZkLAxer3fsfEW5vAc/Z7Kg6obJhssXz8w27QiCmKWUpn4iMT2WIMytCPggjrZak+Ta2toxm2fnr/TEYePgwZklKkkk2CTWGutYaxCpVCpQRGqlS9GI3jn4/X6QJdG8Aj7f+AMpqWXI5HahhCC4NR8BPSkUTeqei8cgEppqAm4Sy5AJpW8gKlLhw2zOnHTbOkiT9zI5eA8BYeAImd08GJjST8Jdi4blJpD/C5B8sQii6DevXsTgpHICXo28Au6kbhgQC0dg0A3qC0h5bw9kW/AoYICG/gj0qrNqEo4gqDwqyw50ykwHVqn5sUMFks3lG4FgTU4mYyDicv+4k3Hn5HCXLpyaR5UzYCoYPFwgxE60ys2r3lAha6fcMgh3GLBSa1coKocLZA/VqoyrxzvU4R2eeZvausEPx0ZIhwtPS6DhbiSirbouodELggB4+HI9BbITEVWspKqYBvsyfNarcZMOh9HBMcdVrakV1hEdTpBEtaRyxFBOQs6UnCjtCueqmReaCg4fSBb5/898ET48uwDbD7OglXVXg6TOLVSPvY9yvU3KyyCFBODGx3QFQp6YQFiptNnOeZuubGbOwdaufXsagxZvqEDIE5PKMIHVh+UW5WpMldefeT3lNgvnLWrZrj1FDG58S1cgBGBxLtm4T8Y7WImziDUieHdxruc2VN+NzXcN431IIVItDNmtqxhrueg1UViSHMsKRQ00XXcsownH8HhNqTVfdHnG75l+7+NZWVF1cNAfMz13MmmCuXNvx9lsuG3UWjsx4IdPL5yF7R3qXzPz5KAIKSSWoR+siApT7yxANCJXbYRDS2r18Bws5dyWZ29Xaba7aEhGEPPo5QOj2ZEQhg9Ev0VFMX2CYfPEBw4xdXretScTWJVuia1kWTLVeaQhis/nhelIqGMdtytZfwnoG+xcMnn5MK5Ajs43aotpyqq63wQEy/49OBvQWXycRWm8I1BXV1crzcZe4ndhChR8lO7iCS+MzMHG8K0jRcf/FBXaBQ8u/7fWsvpnhRubW+/j3G8jmFePgH79Yej8zGeXz//n+A1xI71FH3iuIJi3sPIYvslmz9DZ/MRV/tXKyvnnpnFbgUzodwJkAmQC5MjICwEGAN+u7O9LPns7AAAAAElFTkSuQmCC",
      "pic": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAC0BJREFUeNrsXW9oI2kZf7r3RiZeCsldCi220HottJBqCjntYg92S3e9W7jaLux+sB/O8zjFLyJ36KGI53L6QQ/97IKL9rTsWeG8q9hdd4/2dAtbaGELLddiAw000kCDiTaQkbxefZ9J0s4mM0km08yf5PlBMpOZeTPvPM/vfZ7n/Tttx8fHQGhdnCMREAEIRAACEYBABCAQAQhEAAIRgEAEIBABCEQAAhGAQAQgEAEIRABCM4JpHWxra2voTW/N33tKktgznMHTjEObxU/8CXD4V0JObr1+/Xq2VRStN+6jTetEowgwt7A0JhTwpti9KDTxhL0i4f8VX3/iMrz50tXxfxABGkyAucW//1Rsvo9/7zDZCCvAvz5zZfzdViSAJTGAKPlvic0PHKh8hFdYo7nZxaXnWzEGaLgFEIK9zoD9wfmi4P+UZQi9cnU8TRbgrJS/sPQ5ofzfuCQe/owITN9xqJVynwWYfW/paSaxNbHbp2l3GQO/32fLQyeTacjpW4Ifi3jgBgWBJnBtfv6JKV/wrihVE1rn2yUGE2MR8Ho8tgjj4DAFy+tburISJJgWJPiAXECdmPJ1/lxP+ajysUjINuUjujoCMNTbqWsVxef3InYJtYILOHMCiIh/Rmxe0zs/Gh6EQHu77Q8+MjQAHbouiPlE7PIBujGKAUpw48aNc70j5z/PGBO+nT0JnJ9ezMRvgF/kq1blGOrtFoLvc04DQC4Hd1fWIStzvUseiOf7tXPjVqVV89/CZe3MTF7ebWgMIErDM0yCN8Rdp8TPDsNmN+iHi88OO06GqdQRfLi6USEodAt4VJDhXWDyL2euXEmdGQGUgE4K/kSU7tcLLtww2iUJnh8Lg8dGv18JeweH8HBjp1msekpYre/MTI6/Y5oANxcWPu1jvvdEqf9yvbnxMICJ0Yjw+15HS+3R9h5sx+LN49w5f1uQ4HtmagFtPub/rRnlK0FfaNDxys8HhX3QI9xU04Cx74qA/LW6awFzi0uvogcwk4fh/m7o6epwjcxGw8MQ8EnNRIK3ZxfujVSOIzUwO3sPo3nd1jD05EFRWiTGdP9YEn5/eKDPVfLCEOVCJAQb0ZhLzDxARpbhMJ3RLeCMST8T28uGCMA62LT41mwpQTMZEXV5r0MDOrPwer1wfnjIXVHf0RGsiiA2lZG1Tl+aXVjqF9uoERcwpXUQG06eE1W5ZlW+W4ENaxciYaV/RdsTwFcMxgDsC1pHQ/29JG3HWi4P9Os2b2vrs5IF0PynoD9AknYwgn7dWkynUQJ49IIkgpODfr2gnH/KcDWQ0BogAhABCEQAAhGAQAQgEAEIRACXIZfLj+XB72w2B0fZ7GPHivsEnbYDNys9lkhCXHzS6QxkeXlHiFeSIOjzKT2Xvd2d4mE91JjlZgKg3jNyFjZ2onCQTOYPctWTcNUTif1sRoZ9WXwESR5tRSHg90F4sB+CHQEgHriMAFjqsctzL5HUvoA/vi3yAb+K+9hvfn91AwLCKuDcBF+7t+WJcM4NpR5n8rz/4aq+8ivwoXQfkcpk4M8frUJ0bx9yZAGcjUTysNI0LlNYE24BR9SEhwY0LQFaHRzJjMEl53lTggLDQSNKHCLOeYgAjSv5scRBw4drb0fjSqDY19N1onTU9U4srgSYaC200O6ToDsYVPrgfe3triWCYwmwE9uHRztRlRnnIrOsitnXv6bSuXVhCYoEwBJ/++5y1fRHIsDczsSVoeQYXEYwuPQHXFfLOOfM0p+DzWhMETpXcVX5zU+P5ff5iYKK/l4x14VjtabP6ZCmlvQpEVzeWV2HlY1NsgBnASyRXRaP0VcX3J7OYN3/s7y26cgpcK4hAPr+SKjf+vsWSIDbsfCgaQvmlgDRcQTI+1D7ROc5zQRVA+1A6sjY2o3qaWdYXZM5t/0Z3DAVzpEE2Nzdg4dbUUNpLkVCJxE8Vt3WdqKGBcBNCrA0/Uh/Lzw7PFAg9JEjFsRwfC0A/Wa8WjOvsVOOSC/L3NGtjY4hANa/D5LpYv2q8CnsQ8lW/dFSh9H0WteaSa8mgDgW2z8gAtRiAXiZUnm5YquWVoPpeaVrzKbPYycad+y4BMcQoJ7gjddjzk1cX2/6k65rCgIr+0puIChjJhXDdK5lDUiPv9OZDHQEAmQB9CBJzFCp4iZLZWPTl59NJNNkATR9f+Erehbr83AHSphzpza52JervNJzykoc2B2bOSqM5yu2xXpUF1Y7xjX+3Eh6dWzmOaP0Gg9cnLdZHGPQ0gSQs1nIZGSlPx0/ZoDLvhaBffPdnUHbhVp0ZwhspJq+lF93CEc24Tmfg/oJbCFAu9erfM4aSoubAxvd1CRtWRegrgYXLWAOdEymDbA1Tx77ur+YNcrPQSyehLioD+MiBqOhfsUP4kMvO2QQRbEP3448oVuIDA7Z0glpCQGwCnTn4XreHAb8uNiQso+LNW/uxuz32R4GY+HhEwXYkSccbhYeHLCcBA1vB0Bren9966Q2lNOrJYFOS69GUzzwxqSvVLVs9P0fbu6AzK1/jWHDCZAUkW86lalYTy/rV9HrY+Gnm4ppDKavVIW34v7F/Y9WtyzvM2goAXIlDTxG2mk4L0/BDfyLkfTc5vsXsbufAKvHszTYAuQKs3k4VG981duCRekrKc+6/EfjieYhAEb66aNMlbJWi/C0ruMGhF8tfQ1BQEPvf7qNJRKWuoGGxwDqcfRgUNx1uQ6T6bVSWHn/lP7Cz+6sBvIqPtCIwLh6p3Q6+Bmmr5qvBt6fW9yj1XAC+L1SySMx1Z4HfF771+dn8PhIcMnGPElMah4CoC97+doL5e3Ahd+4++rUBNgPz0kvHWbNzjzl85BrDgKcdHuWNm+pfjuna9Sjypq9ebJSJrRKWIuj4TEAmrPbd1cgfpisMTvGgqDpi6Mw1Nej7D94tC0+WybFYX6ayPnhwZPOpd39A/jj/ZWaUg/0dMPUhUhzWQB8mEujYROVKCvBbU0/MRqy3CVa4gKC+KqZkVB52wuv0naiNby25LpKHTC1pDd7f91r9fihk/6ikI9Psr72YUl3MLIaxwDgzZbXtvQH9NeihGrC5nWkN3v/atdWmcCAhSNSGCPRlAQokuD8yBB0Bv1w+85KTYXFTObsTl8rrr0wJnx/V/MGgaXAQZsvT08ogVFa+zVnJjwqr7g8nNURgVaeivD7JHhRBLDdNr+t1HICoCXAQZLfuvYiROO4EFQMYgf1doOabTDJmazzG0uPL9rs6+mEcH839Hb3OGIdCttmK+DDY/Wtv7vzpPULtzif3gjUc+8joUFHvNpO3Zw7IJ7xR9/oUbU00ryAMoug3ppZTAFfaOnUl1qWPqdTQC2BLQ4iABGAQAQgEAEIRAACEYBABCAQAQhEgE9ING6EbofK/4wSQHNJK6MLOROsRUa/dzVtkAD8Y62j0XicpOxg6M4r5PCxUQvwF62Du7EE7Dl43dtWxtrmrvJeRCP6ROj1Bs4L2rx1urjZKXA5d3xla29nECRJIsnb7PNxUE1MlPyUvvnff19OrnxV52Tb8fFx+cG2NphbXPqVIMA3SciuJ8nXZq6Mz2rpuXI1kMMPxVeMBOhq5f81uvbgd5Wu0LUAiLmFe8PApL+J3QAJ03XK35JleO6Vq+NKDcC4BRCYmby8CVz+ovizHRKoq7AIKflLReXXbQGKuHVrSZI64NsiJnxD/HyK5OvYUh9F1z0zOT6PhV59Rs8C1ESAIm7evOmRugYuMMYmxM0+K4LEJ0notiocW2z/I/SwzTm/89Lk+LrelYYIQGgdUGcQEYBABCAQAQhEAAIRgEAEIBABCEQAAhGAQAQgEAEIRAACEYBABCA0Jf4vwADTIj96RMYWrAAAAABJRU5ErkJggg==",
      "apps": [],
      "title": "",
      "desc": "",
      "stamp": "",
      "start": "List/!eyJtb2RlIjogWyJjb2x1bW5zLWJyaWVmIl0sInNlYXJjaCI6ICIiLCJzb3J0IjogWyJUeXBlIl19",
      "sync": [],
      "url": "",
      "creator": ""
    },
    "files": {
      "bucket.svg": {
        "digest": "md5-Zeaf7uuuoM72TUp8V5vfiA==",
        "content_type": "image/svg+xml",
        "data": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwLCAwLCAyNTYsIDI1NiI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJGb2xkZXJfMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2OS4zIiB5MT0iMjA0LjIiIHgyPSIxODYuMSIgeTI9IjM5LjciPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzZEQjdGRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzg4REVGRiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJGb2xkZXJfMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI4My43IiB5MT0iMTcwLjMiIHgyPSIxNzAuOCIgeTI9Ijg4LjY3Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM2REI3RkYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4OERFRkYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBpZD0iRm9sZGVyTF8xIj48cGF0aCBkPSJNMCwwIEw0LDAgTDQsNCBMMCw0IEwwLDAgeiBNMjUyLDI1MiBMMjUyLDI1NiBMMjU2LDI1NiBMMjU2LDI1MiBMMjUyLDI1MiB6IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjxnPjxwYXRoIGQ9Ik0yMjMuOTIsNTIuOCBMMTQxLjksNTIuOCBDMTM2LjYsNDYuNSAxMzEuMiwzOS44NSAxMjkuOCwzNy44IEMxMjguNCwzNC45IDEyNS41LDMzIDEyMi4xLDMzIEw2My4zLDMzIEM2MC43LDMzIDU4LjM2LDM0LjEgNTYuNywzNi4xIEw0My4zLDUyLjggTDMxLjYsNTIuOCBDMjMuNSw1Mi44IDE3LDU5LjQgMTcsNjcuNCBMMTcsMTk2LjMgQzE3LDIwNC40IDIzLjUsMjExIDMxLjYsMjExIEwyMjMuOSwyMTEgQzIzMS45LDIxMSAyMzguNSwyMDQuNCAyMzguNSwxOTYuMyBMMjM4LjUsNjcuNCBDMjM4LjUsNTkuNCAyMzEuOSw1Mi44IDIyMy45Miw1Mi44IHoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMTIyLjEsMjcgQzEyNy40LDI3LjEgMTMyLjE3LDI5LjgzIDEzNC44LDM0LjQgQzEzNy45LDM4LjYgMTQxLjMsNDIuNyAxNDQuNyw0Ni44IEwyMjMuOTIsNDYuOCBDMjM1LjIsNDYuOCAyNDQuNSw1Ni4wIDI0NC41LDY3LjQgTDI0NC41LDE5Ni4zIEMyNDQuNSwyMDcuNzUgMjM1LjIsMjE3IDIyMy45LDIxNyBMMzEuNiwyMTcgQzIwLjIsMjE3IDExLDIwNy43NSAxMSwxOTYuMyBMMTEsNjcuNCBDMTEsNTYuMCAyMC4yLDQ2LjggMzEuNiw0Ni44IEw0MC40Nyw0Ni44IEw1Mi4wLDMyLjMgQzU0LjgsMjguOSA1OC45LDI3IDYzLjMsMjcgTDEyMi4xLDI3IHogTTEyMi4xLDM5IEw2My4zLDM5IEM2Mi42LDM5IDYxLjgsMzkuMyA2MS40LDM5LjkgTDQ4LjAsNTYuNSBMNDYuMjIsNTguOCBMMzEuNiw1OC44IEMyNi44LDU4LjggMjMsNjIuNyAyMyw2Ny40IEwyMywxOTYuMyBDMjMsMjAxLjEyIDI2LjgsMjA1IDMxLjYsMjA1IEwyMjMuOSwyMDUgQzIyOC42LDIwNSAyMzIuNSwyMDEuMTIgMjMyLjUsMTk2LjMgTDIzMi41LDY3LjQgQzIzMi41LDYyLjcyIDIyOC42LDU4LjggMjIzLjkyLDU4LjggTDEzOS4xLDU4LjggTDEzNy4zLDU2LjYgQzEzMS4zLDQ5LjUgMTI2LjMsNDMuMyAxMjQuOSw0MS4yIEwxMjQuNiw0MC44IEwxMjQuNCw0MC40MSBDMTI0LjAsMzkuNSAxMjMuMSwzOSAxMjIuMSwzOSB6IiBmaWxsPSJ1cmwoI0ZvbGRlcl8xKSIvPjwvZz48cGF0aCBkPSJNNDAuNSwxNTEuOSBMMTMwLjY1LDE1MS45IEwxMzAuNjUsMTc2LjYgTDY5LjQsMTc2LjYgTDY1LjYsMTc2LjYgTDY5LjAsMTc2LjYgQzU2LjQsMTc2LjQzIDQ1LjMsMTY4LjQgNDEuNCwxNTYuMyBDNDAuOSwxNTQuOSA0MC44LDE1My40IDQwLjUsMTUxLjkgeiBNMjE0LjMzLDE1MS45IEwxMzUuNjUsMTUxLjkgTDEzNS42NSwxNzYuNiBMMTg3LjcsMTc2LjYgTDE5MC4yLDE3Ni40IEMxOTEuOSwxNzYuMCAxOTMuNSwxNzUuOSAxOTUuMSwxNzUuNCBDMjA1LjYsMTcxLjY1IDIxMi45LDE2My4wIDIxNC4zMywxNTEuOSB6IE0xOTIuODMsMTIyLjIyIEwxOTIuMSwxMjIuMDkgTDE3OC4zLDEyMi4wOSBMMTc4LjMsMTQ2LjkgTDIxNC4zLDE0Ni45IEMyMTMuMiwxMzQuNiAyMDQuNCwxMjUuMyAxOTIuODMsMTIyLjIyIHogTTU2LjQsMTIyLjA5IEM0Ny4wLDEyNi4yIDQwLjYsMTM2LjUgNDAuMSwxNDYuOSBMODcuOSwxNDYuOSBMODcuOSwxMjIuMDkgTDU2LjQsMTIyLjA5IHogTTE3My4zLDEyMi4wOSBMOTIuOSwxMjIuMDkgTDkyLjksMTQ2LjkgTDE3My4zLDE0Ni45IEwxNzMuMywxMjIuMDkgeiBNMTU2LjMsODguOSBMMTU0LjUsODguOSBDMTQ3Ljg3LDg5LjIgMTQxLjEsOTAuNCAxMzUuNyw5NC4zIEwxMzUuNjUsOTQuMiBMMTM1LjY1LDExNy4wOSBMMTg4LjMsMTE3LjA5IEMxODYuNiwxMDEuNjcgMTcyLjgsOTAuMCAxNTYuMyw4OC45IHogTTEwMi43LDgyLjMgTDEwMi43LDgyLjMgQzgwLjcsODIuMyA2Mi44LDk2LjkgNjIuOCwxMTUuMCBDNjIuOCwxMTUuNyA2Mi44NSwxMTYuNCA2Mi45LDExNy4wOSBMMTMwLjY1LDExNy4wOSBMMTMwLjY1LDkyLjUgQzEyMi44LDg2LjUgMTE0LjEsODIuNCAxMDIuNyw4Mi4zIHoiIGZpbGw9InVybCgjRm9sZGVyXzIpIi8+PC9nPjwvc3ZnPgo="
      }
    }
  },
  {
    "id": "cw.Sys.Trust",
    "build": 9,
    "params": {
      "delay": 5,
      "width": 320
    },
    "data": {
      "trust": []
    },
    "init": function ($o) {
          var that = this;
          $o.html($.my.formgen([
            '<h4 class="fi-check lgreen"> <span class="green">{MSG_CONFIRM}</span></h3>',
            
            {label:'70px', row:'100%', rowCss:'my-row mt10 fs80 xgray'},
            ['', '<p>{MSG_ENLIST}</p>'],
            ['','div#list.lh140'],
            
            {rowCss:'my-row mt20 pt15 fs80 xgray btd'},
            ['', 
             'btn#btn-ok.green.mr5',{val:"{BTN_TRUST1}"}, 
             'btn#btn-all.mr5',{val:"{BTN_TRUST}"},
             '<div class="fr">','btn#btn-cancel',{val:"{BTN_STOP}"},'</div>'
            ]
          ]).assign(that.lang));
        
      },
    "ui": {
      "#btn-ok": {
        "bind": function (d,v) {
                  if (v != null) this.my.commit();
                
          },
        "events": "click.my"
      },
      "#btn-cancel": {
        "bind": function (d,v,$o) {
                  if (v != null) this.my.cancel();
                
          },
        "events": "click.my"
      },
      "#btn-all": {
        "bind": function (d,v,$o) {
                  if (v != null) {
                    for (var i = 0; i < d.trust.length; i++) d.trust[i]._rev = '*';
                    this.my.commit();
                  }
                
          },
        "events": "click"
      },
      "#list": function (d) {
              var i = 0, 
                  html = '';
              for (; i < d.trust.length; i++) {
                html+='<span class="orange">—</span> '+d.trust[i].id.escapeHTML()+'<br/>';
              }
              return html; 
            
        }
    },
    "lang": {
      "en": {
        "MSG_CONFIRM": "Confirm trust",
        "MSG_ENLIST": "These app components are untrusted or were changed since last use:",
        "BTN_TRUST1": "Ok this version",
        "BTN_TRUST": "Ok forever",
        "BTN_STOP": "Stop"
      },
      "ru": {
        "MSG_CONFIRM": "Подтвердите доверие",
        "MSG_ENLIST": "Эти компоненты приложения изменились с момента прошлого запуска:",
        "BTN_TRUST1": "ОК эта версия",
        "BTN_TRUST": "ОК всегда",
        "BTN_STOP": "Стоп"
      }
    }
  },
  {
    "id": "cw.Sys.YesNoCancel",
    "build": 13,
    "params": {
      "delay": 5
    },
    "data": {
      "text": "",
      "css": "xgray",
      "yes": "Yes",
      "no": "No",
      "cancel": "Cancel",
      "cmd": ""
    },
    "init": function ($o,form) {
    var d=form.data;
    $o.formgen([
        '<div class="'+d.css+'">'+d.text+'</div>',
      {label:"70px", row:"100%", rowCss:"my-row mt15 pt15 fs90 mb-5 xgray btd"},
      ['', 'spn#btn-yes.button.green.mr5',{txt:d.yes}, 
         'spn#btn-no.button.mr5',{txt:d.no}, 
        'spn#btn-cancel.button.fr',{txt:d.cancel}]
    ]);
  
      },
    "ui": {
      "#btn-yes": {
        "bind": function (d,v,$o) {
        if (v!=null) {
          d.cmd = 'yes';
          this.my.commit();
        }
      
          },
        "events": "click.my",
        "css": {
          "self:hide": function (d) {
             return !d.yes;
            }
        }
      },
      "#btn-no": {
        "bind": function (d,v,$o) {
        if (v!=null) {
          d.cmd = 'no';
          this.my.commit();
        }
      
          },
        "events": "click.my",
        "css": {
          "self:hide": function (d) {
             return !d.no;
            }
        }
      },
      "#btn-cancel": {
        "bind": function (d,v,$o) {
        if (v!=null) {
          d.cmd = 'cancel';
          this.my.cancel();
        }
      
          },
        "events": "click.my",
        "css": {
          "self:hide": function (d) {
             return !d.cancel;
            }
        }
      }
    }
  }].forEach(function(e){cw.reg(e)});

	
})(cw, jQuery, PouchDB);