var hbs=require('handlebars'), sqlCon=require('../db/sqlConnection'), fs=require('fs')
module.exports={
	experts:function(req, res){
		console.log(sqlCon.dirIntra)
		var hbbs=fs.readFileSync(sqlCon.dirIntra+'/templates/homeExpert.html','utf8');
		tmpl=hbs.compile(hbbs);
		res.end(tmpl());
	}, admin:(req,res)=>{
		var hbbs=fs.readFileSync(sqlCon.dirIntra+'/templates/admin.html','utf8');
		tmpl=hbs.compile(hbbs);
		res.end(tmpl())
		//se tiene que hacer validación de logeo

	}
}