var mysql= require('mysql')
var connection = mysql.createConnection({
	host     : '127.0.0.1',
	user     : 'root',
	password : 'dianas1120',
	database : 'aei'
});
connection.connect();
module.exports={
	dirIntra:'/home/sonick7/www/AEI',
	connection: connection,
	runQuery:function(qry){
		var prom=new Promise(function(ok, err){
			connection.query(qry, function(erry, rows, fields){
				if(erry){
					err(false)
					console.log(erry.message, qry,' slkgrtsg drth ----e-r /mysql/conexion.js');
				}else
					ok(rows);
			});
		})
		return prom;
	}
}