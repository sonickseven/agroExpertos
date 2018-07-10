var fs=require('fs'), filed=require('filed'), querystring=require('querystring'),
	view=require('../views/htmlView'), sqlCon=require('../db/sqlConnection'), ups=require('../views/uploads')
module.exports={
	server: function(req, res){
		if(req.url==='/experts')
			view.experts(req, res)
		else if(req.url.indexOf('/public/')>-1)
			req.pipe(filed(sqlCon.dirIntra+decodeURI(req.url))).pipe(res);
		else if(req.url.indexOf('/admin/')>-1)
			view.admin(req, res)
		else if(req.url.indexOf('/uploadImgStep/')>-1)
			ups.uploadStepImg(req, res)
		else if(req.url.indexOf('/updateStepImg/')>-1)
			ups.updateStepImg(req, res)
		else if(req.url.indexOf('/uploadImgCultive/')>-1)
			ups.updateCultiveImg(req, res)
		else
			res.end('URL no encotrada');
	}
};