var express = require('express');
var router = express.Router();


var banjiDb = require('../db/class');
var Promise=require('bluebird');
banjiDb=Promise.promisifyAll(banjiDb);

var _=require('lodash');


//查找卡号对应的学生
function findStudent(students,id){
	return _.find(students,{id:id});
}

//给出学号，返回学生信息
router.get('/:id', function(req, res, next) {
	var studentID=req.params.id;
    banjiDb.findOne({"students.id":studentID},function(err,banji){
	    if(!banji){
	    	res.status(404).end();
	    	return;
	    }
	    const student=findStudent(banji.students,studentID);
	    res.json(student);
	});
});



//学生注册
router.post('/signup',function(req, res, next){
	// console.log(req.body)//{banjiName:'aaa', studentID: 'ccc@ccc', password: 'ccc' }
	var student={name:req.body.studentName,id:req.body.studentID,password:req.body.password}
	var log=console.log;
	(async ()=>{
			var banji= await banjiDb.findOneAsync({name:req.body.banjiName});
			// log("banji",banji);
			if(!banji){
				res.redirect('/zhuce.html');//如果班级不正确，仍然回到注册页
			}else{
				await banjiDb.updateAsync({ _id: banji._id }, { $push: { students: student } }, {});
				res.redirect('/denglu.html');//如果班级不正确，仍然回到注册页
			}
		})()
});

//学生登录
router.post('/login',function(req, res, next){
	console.log(req.body)
	var log=console.log;
	var studentID=req.body.studentID;
	var password=req.body.password;
	(async ()=>{
		var banji=await banjiDb.findOneAsync({"students.id":studentID});
		if(!banji){
			res.status(400).end();
		}
		const student=findStudent(banji.students,studentID);
		if(student.password==password){
			res.end('ok');
		}else{
			res.status(400).end();
		}
	})()
});

module.exports = router;
