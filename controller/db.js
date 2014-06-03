var mysql = require('mysql');
var dbConfig = {
	host     : '127.0.0.1',
	user     : 'root',
	password : 'pingguo',
	database: 'goods'
}
exports.query = function(str, fn){
	var connection = mysql.createConnection(dbConfig);
	connection.connect();
	connection.query(str, function(err, rows, fields){
		if(err) throw err;
		fn(rows);
	});
	connection.end();
};