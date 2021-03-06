var agent = require('superagent-promise')(require('superagent'), Promise);


var prefix;
const api = {
  read,
  read_nodes,
  mk_son_by_data,
  mk_son_by_name,
  namepath2node,
  mk_brother_by_data,
  remove,
  update,
  mv_as_son,
  mv_as_brother,
  read_big_node,
  mk_son_by_file, 
};
function factory(_prefix) {
  prefix = _prefix;
  return api;
}
module.exports = factory;

function read(gid) {
  return agent.get(prefix + '/' + gid).then(res => res.body);
}

function read_nodes(gids) {
  return agent.post(prefix + '/nodes/', gids).then(res => res.body);
}

function mk_son_by_data(pgid, data) {
  if(data===null){
    data={}
  }else if( typeof data!=="object"){
    data={data}
  }
  return agent.post(prefix + '/mk/son/' + pgid, data).then(res => res.body);
}

function mk_son_by_name(pgid, name) {
  return agent.post(prefix + '/mk/son_name/' + pgid, {name}).then(res => res.body);
}

function namepath2node(namepath){
  return agent.get(prefix + '/namepath/' + namepath).then(res => res.body);
}

function mk_brother_by_data(bgid, data) {
  return agent.post(prefix + '/mk/brother/' + bgid, data).then(res => res.body);
}

function remove(gid) {
  return agent.del(prefix + '/' + gid).then(res => res.body);
}

function update(gid, data) {
  if(data===null){
    data={}
  }else if( typeof data!=="object"){
    data={data}
  }
  return agent.put(prefix + '/' + gid, data).then(res => res.body);
}

function  mv_as_son(sgid,dgid){
  return agent.post(prefix +'/mv/'+sgid+'/son/'+dgid).then(res => res.body);
}

function  mv_as_brother(sgid,dgid){
  return agent.post(prefix +'/mv/'+sgid+'/brother/'+dgid).then(res => res.body);
}

function read_big_node(gid,level=0) {
  return agent.get(prefix + '/bignode/' + gid+'/'+level).then(res => res.body);
}
function mk_son_by_file(pgid,file,filename,onProgress){
  // console.log('mk_son_by_file',file);
  if(!filename){
    filename=file.name;
  }
  return agent.post(prefix + '/mk/son/file/'+pgid)
  .attach('file',file,filename)
  .on('progress', function(e) {
      // console.log('Percentage done: ', e.percent);
      if(typeof onProgress==='function'){
        onProgress(e);
      }
   })
  .then(res => res.body);
}