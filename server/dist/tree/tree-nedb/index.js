'use strict';

// var async = require('asyncawait/async');
// var await = require('asyncawait/await');
var Promise = require('bluebird');

var db;
function tree_nedb(_db, cb) {
  db = Promise.promisifyAll(_db);
  buildRootIfNotExist(cb);
  return {
    read_node: read_node,
    read_nodes: read_nodes,
    mk_son_by_data: mk_son_by_data,
    mk_son_by_name: mk_son_by_name,
    namepath2node: namepath2node,
    mk_brother_by_data: mk_brother_by_data,
    update_data: update_data,
    remove: remove,
    move_as_son: move_as_son,
    move_as_brother: move_as_brother,
    //for test
    buildRootIfNotExist: buildRootIfNotExist
  };
}

module.exports = tree_nedb;

function buildRootIfNotExist(cb) {
  var _this = this;

  return function _callee() {
    var root, defaultRoot;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(db.findOneAsync({ _id: '0' }));

          case 2:
            root = _context.sent;

            if (root) {
              _context.next = 8;
              break;
            }

            defaultRoot = {
              _id: '0',
              _link: {
                p: '0',
                children: []
              }
            };
            _context.next = 7;
            return regeneratorRuntime.awrap(db.insertAsync(defaultRoot));

          case 7:
            root = _context.sent;

          case 8:
            if (typeof cb == 'function') {
              cb(); //通知root构建完成
            }
            return _context.abrupt('return', root);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, null, _this);
  }();
}

// function read_node(gid) {
//   return (async ()=>{
//     // console.log('read_node',gid);
//     var node=await db.findOneAsync({_id:gid, _rm: { $exists: false }}); //rm标记表示节点已经被删除
//     return node;
//   })();
// }

function read_node(gid) {
  return db.findOneAsync({ _id: gid, _rm: { $exists: false } }); //rm标记表示节点已经被删除
}

function read_nodes(gids) {
  var _this2 = this;

  return function _callee2() {
    var nodes;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(db.findAsync({ _id: { $in: gids }, _rm: { $exists: false } }));

          case 2:
            nodes = _context2.sent;
            return _context2.abrupt('return', nodes);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, null, _this2);
  }();
}

function _mk_son_by_data(pNode, data, bgid) {
  var _this3 = this;

  return function _callee3() {
    var newNode, _newNode, pos, children;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // console.log(pNode);
            newNode = {
              _link: {
                p: pNode._id,
                children: []
              },
              _data: data
            };
            _context3.next = 3;
            return regeneratorRuntime.awrap(db.insertAsync(newNode));

          case 3:
            _newNode = _context3.sent;
            //插入新节点
            pos = 0;
            children = pNode._link.children;

            if (bgid) {
              pos = children.indexOf(bgid) + 1;
            }
            children.splice(pos, 0, _newNode._id); //把新节点的ID插入到父节点中
            _context3.next = 10;
            return regeneratorRuntime.awrap(db.updateAsync({ _id: pNode._id }, pNode, {}));

          case 10:
            return _context3.abrupt('return', _newNode);

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, null, _this3);
  }();
}

//返回新节点
function _mk_son_by_name(pNode, name, bgid) {
  var _this4 = this;

  return function _callee4() {
    var newNode, _newNode, pos, children;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // console.log(pNode);
            newNode = {
              _link: {
                p: pNode._id,
                children: []
              },
              _name: name
            };
            _context4.next = 3;
            return regeneratorRuntime.awrap(db.insertAsync(newNode));

          case 3:
            _newNode = _context4.sent;
            //插入新节点
            pos = 0;
            children = pNode._link.children;

            if (bgid) {
              pos = children.indexOf(bgid) + 1;
            }
            children.splice(pos, 0, _newNode._id); //把新节点的ID插入到父节点中
            _context4.next = 10;
            return regeneratorRuntime.awrap(db.updateAsync({ _id: pNode._id }, pNode, {}));

          case 10:
            return _context4.abrupt('return', _newNode);

          case 11:
          case 'end':
            return _context4.stop();
        }
      }
    }, null, _this4);
  }();
}

//返回新节点
function mk_son_by_data(pgid, data) {
  var _this5 = this;

  return function _callee5() {
    var pNode;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(db.findOneAsync({ "_id": pgid }));

          case 2:
            pNode = _context5.sent;

            if (pNode) {
              _context5.next = 6;
              break;
            }

            throw 'cannot find parent node ' + pgid;

          case 6:
            return _context5.abrupt('return', _mk_son_by_data(pNode, data));

          case 7:
          case 'end':
            return _context5.stop();
        }
      }
    }, null, _this5);
  }();
}

function mk_son_by_name(pgid, name) {
  var _this6 = this;

  return function _callee6() {
    var pNode, node;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regeneratorRuntime.awrap(db.findOneAsync({ "_id": pgid }));

          case 2:
            pNode = _context6.sent;

            if (pNode) {
              _context6.next = 6;
              break;
            }

            throw 'cannot find parent node ' + pgid;

          case 6:
            _context6.next = 8;
            return regeneratorRuntime.awrap(db.findOneAsync({ "_name": name, "_link.p": pgid }));

          case 8:
            node = _context6.sent;

            if (!node) {
              _context6.next = 11;
              break;
            }

            return _context6.abrupt('return', node);

          case 11:
            return _context6.abrupt('return', _mk_son_by_name(pNode, name));

          case 12:
          case 'end':
            return _context6.stop();
        }
      }
    }, null, _this6);
  }();
}

function namepath2node(gid, namepath) {
  var names = namepath.split('/');
  var f = function f(P, name) {
    return P.then(function (pnode) {
      // console.log(pnode,name);
      if (pnode) {
        return _getChildByName(pnode._id, name);
      } else {
        throw "not found";
      }
    });
  };
  return names.reduce(f, read_node(gid));
}

function _getChildByName(pgid, name) {
  return db.findOneAsync({ "_name": name, "_link.p": pgid });
}

function mk_brother_by_data(bgid, data) {
  var _this7 = this;

  return function _callee7() {
    var pNode;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return regeneratorRuntime.awrap(db.findOneAsync({ "_link.children": { $elemMatch: bgid } }));

          case 2:
            pNode = _context7.sent;

            if (pNode) {
              _context7.next = 6;
              break;
            }

            throw 'cannot find parent node of brother ' + bgid;

          case 6:
            return _context7.abrupt('return', _mk_son_by_data(pNode, data, bgid));

          case 7:
          case 'end':
            return _context7.stop();
        }
      }
    }, null, _this7);
  }();
}

function _update(db, query, update, callback) {
  var cb = function cb(err, numAffected, affectedDocuments, upsert) {
    callback(err, affectedDocuments); //修改callback的签名，使得第二个参数为更新过的doc
  };
  var options = { multi: false, returnUpdatedDocs: true };
  db.update(query, update, options, cb);
}

var update = Promise.promisify(_update); //修改callback签名后就可以promisify

function update_data(gid, data) {
  var _this8 = this;

  return function _callee8() {
    var node;
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return regeneratorRuntime.awrap(update(db, { _id: gid }, { $set: { _data: data } }));

          case 2:
            node = _context8.sent;
            return _context8.abrupt('return', node);

          case 4:
          case 'end':
            return _context8.stop();
        }
      }
    }, null, _this8);
  }();
}

//递归遍历所有子节点
//gids是要访问的节点id的列表
//visit是一个函数。访问节点的动作。
function _traversal_all_children(gids, visit) {
  if (!gids || gids.length == 0) {
    return Promise.resolve();
  } //需要返回一个promise
  return Promise.all(gids.map(function (gid) {
    return read_node(gid).then(function (node) {
      //读取当前节点
      return _traversal_all_children(node._link.children, visit).then(function () {
        //访问所有子节点
        return visit(node); //然后访问当前节点
      });
    });
  }));
}

//标记删除节点与所有子孙节点
function remove(gid) {
  var _this9 = this;

  return function _callee9() {
    var node, gidsforRemove, rm;
    return regeneratorRuntime.async(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            if (!(gid == '0')) {
              _context9.next = 2;
              break;
            }

            return _context9.abrupt('return');

          case 2:
            _context9.next = 4;
            return regeneratorRuntime.awrap(read_node(gid));

          case 4:
            node = _context9.sent;

            if (node) {
              _context9.next = 7;
              break;
            }

            return _context9.abrupt('return');

          case 7:
            //已经不存在，返回
            //收集所有子节点
            gidsforRemove = [];

            rm = function rm(node) {
              gidsforRemove.push(node._id);
            };

            _context9.next = 11;
            return regeneratorRuntime.awrap(_traversal_all_children([gid], rm));

          case 11:
            _context9.next = 13;
            return regeneratorRuntime.awrap(db.updateAsync({ _id: { $in: gidsforRemove } }, { $set: { _rm: true } }, {}));

          case 13:
            _context9.next = 15;
            return regeneratorRuntime.awrap(db.updateAsync({ _id: node._link.p }, { $pull: { "_link.children": gid } }, {}));

          case 15:
            return _context9.abrupt('return', gidsforRemove);

          case 16:
          case 'end':
            return _context9.stop();
        }
      }
    }, null, _this9);
  }();
}

function _isAncestor(pgid, gid) {
  if (gid == '0') return Promise.resolve(false); //'0'为根节点。任何节点都不是'0'的父节点
  return read_node(gid).then(function (node) {
    // console.log('check',pgid,node._link.p,node)
    if (node._link.p === pgid) {
      return true;
    } else {
      return _isAncestor(pgid, node._link.p);
    }
  });
}

function _move_as_son(gid, npNode, bgid) {
  var _this10 = this;

  return function _callee10() {
    var gidIsAncestorOfNewParentNode, pNode, pos, children;
    return regeneratorRuntime.async(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return regeneratorRuntime.awrap(_isAncestor(gid, npNode._id));

          case 2:
            gidIsAncestorOfNewParentNode = _context10.sent;

            if (!gidIsAncestorOfNewParentNode) {
              _context10.next = 6;
              break;
            }

            console.log(gid, 'is ancestor of', npNode._id);
            return _context10.abrupt('return', null);

          case 6:
            _context10.next = 8;
            return regeneratorRuntime.awrap(db.findOneAsync({ "_link.children": { $elemMatch: gid } }));

          case 8:
            pNode = _context10.sent;
            _context10.next = 11;
            return regeneratorRuntime.awrap(db.updateAsync({ _id: pNode._id }, { $pull: { "_link.children": gid } }, {}));

          case 11:
            if (!(npNode._id === pNode._id)) {
              _context10.next = 17;
              break;
            }

            _context10.next = 14;
            return regeneratorRuntime.awrap(db.findOneAsync({ _id: npNode._id, _rm: { $exists: false } }));

          case 14:
            npNode = _context10.sent;
            _context10.next = 19;
            break;

          case 17:
            _context10.next = 19;
            return regeneratorRuntime.awrap(db.updateAsync({ _id: gid }, { $set: { "_link.p": npNode._id } }, {}));

          case 19:
            //改变gid的父节点为新父节点
            pos = 0;
            children = npNode._link.children;

            if (bgid) {
              pos = children.indexOf(bgid) + 1;
            }
            children.splice(pos, 0, gid); //把新节点的ID插入到父节点中
            _context10.next = 25;
            return regeneratorRuntime.awrap(db.updateAsync({ _id: npNode._id }, npNode, {}));

          case 25:
            _context10.next = 27;
            return regeneratorRuntime.awrap(read_node(gid));

          case 27:
            return _context10.abrupt('return', _context10.sent);

          case 28:
          case 'end':
            return _context10.stop();
        }
      }
    }, null, _this10);
  }();
}

//把gid节点移动为pgid的子节点
//包含3步。 1.从gid的原父节点删除。2改变gid的当前父节点。 3。注册到新父节点
//移动前需要做检查。祖先节点不能移动为后辈的子节点
function move_as_son(gid, pgid) {
  var _this11 = this;

  return function _callee11() {
    var npNode;
    return regeneratorRuntime.async(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return regeneratorRuntime.awrap(db.findOneAsync({ "_id": pgid }));

          case 2:
            npNode = _context11.sent;
            return _context11.abrupt('return', _move_as_son(gid, npNode));

          case 4:
          case 'end':
            return _context11.stop();
        }
      }
    }, null, _this11);
  }();
}

function move_as_brother(gid, bgid) {
  var _this12 = this;

  return function _callee12() {
    var npNode;
    return regeneratorRuntime.async(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return regeneratorRuntime.awrap(db.findOneAsync({ "_link.children": { $elemMatch: bgid } }));

          case 2:
            npNode = _context12.sent;
            return _context12.abrupt('return', _move_as_son(gid, npNode, bgid));

          case 4:
          case 'end':
            return _context12.stop();
        }
      }
    }, null, _this12);
  }();
}