var db = require('./db');
var util = require('../controller/util');
exports.checkLogin = function(req){
	var isValid = false,
		ses = req.session;
	try{
		if(ses && ses.username && ses.loginTime){
			if(new Date-parseInt(ses.loginTime)>2*60*60*1000)
				req.session = null;
			else{
				isValid = true;
			}
		}
	}catch(e){console.log(e)}
	return isValid;
};

exports.login = function(username, password, req, fn){
	var session = req.session;
	try{
	db.query('select * from user where name='+util.escapeSql(username), function(rows) {
		try{
		var crypto = require('crypto');

		var shasum = crypto.createHash('sha1');
		shasum.update(password);
		var d = shasum.digest('hex');
		console.log(rows[0].name, rows[0].password, username, d);
		if(rows && rows.length>0 && rows[0].name==username && rows[0].password==d){
			console.log('sssss')
			req.session.username = username;
			req.session.loginTime = +(new Date);
		}
		fn();
		}catch(e){
	console.log(e.message)
}
		
	});

}catch(e){
	console.log(e.message)
}
};