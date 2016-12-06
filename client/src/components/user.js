var agent = require('superagent-promise')(require('superagent'),Promise);


var user={};

function refreshUser(){
  agent.get('/user').then(resp=>{
    user=resp.body;
  })
}

function getUser(){
  return user;
}

module.exports={
  refreshUser,
  getUser
}