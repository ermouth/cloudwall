# CloudWall 2.2.3
CloudWall is noBackend toy operating system, that syncs with CouchDB. See details and running version at [https://cloudwall.me](https://cloudwall.me).

Since CloudWall is in permanent beta state, sync your data with remote CouchDB frequently.

## Install to a static hosting
CloudWall generally need just simplest static hosting to run. To install from Github repo type `git clone git://github.com/ermouth/cloudwall.git folderName`, then map `folderName` to a URL.

## Install as a CouchDB-hosted app
You can replicate CloudWall from the repo DB, and, optionally, setup `vhosts` configuration. To replicate CloudWall
and documentation, create below doc in the `_replicator` bucket of your CouchDB:
```javascript
// Please, don’t make sync continuous, repo is of very limited capacity.
// For CouchDB 1.x
{
  "_id": "cw22",
  "source": "https://cloudwall.smileupps.com/cw2/",
  "target": "cloudwall",
  "create_target":true,
  "doc_ids":["_design/cw22","_design/cw22docs","_design/photon"],
  "user_ctx":{"name":"admin", "roles":["_admin"]}
}

// For CouchDB 2.x, target credentials required
{
  "_id": "cw22",
  "source": "https://cloudwall.smileupps.com/cw2/",
  "target": "http://admin:__________@localhost:5984/cloudwall",
  "create_target":true,
  "doc_ids":["_design/cw22","_design/cw22docs","_design/photon"]
}
```

CloudWall now can be started from `mydomain.com/cloudwall/_design/cw22/index.html`. Bit long URL, to make it shorter set up domain binding.

To bind dedicated subdomain to CloudWall, first, make sure you have DNS A-record for the subdomain. Then go to CouchDB config editor, and create/modify below keys:
```
[vhosts]
cw.mydomain.com = /cloudwall/_design/cw22/_rewrite
[httpd]
secure_rewrites = false
```
CloudWall now starts from `cw.mydomain.com/`, the domain root. Rewrite rules also make entire CouchDB available from the domain root, to allow in-domain auth and DB sync.

The `profile.json` attachment of `_design/cw22` contains default user profile, which includes default list of DBs user connects at start. Edit that attachment to set up the list.

## Custom build
To make custom build of CloudWall, please read [how to install](https://cloudwall.me/docs/quickstart.html#h-1baojekg) CloudWall sources.

---

(c) 2017 ermouth. CloudWall is MIT-licensed.
