var headers={};
	headers["Access-Control-Allow-Origin"] = "*";
	headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
	headers["Access-Control-Allow-Credentials"] = false;
	headers["Access-Control-Max-Age"] = '86400'; // 24 hours
	headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";

var exports={
	newCultive:(file, field)=>{
		return new Promise((res, err)=>{
			var column=['name', 'img','imgServer'],
				datos=[func.noScript(field.nameCultive), file.fileImg.path.replace('/home/sonick7/www/AEI/public','.'), file.fileImg.path.replace('/home/sonick7/www/AEI','')];
			slt.insert('typeAgriculture', column, datos).then(resy=>{
				if(resy)
					slt.select('typeAgriculture',{colums:{name:field.nameCultive}})
					.then(resy=>{
						res(String(resy[0].idtypeAgriculture))
					}).catch(err=>{
						console.log(err)
					})
				
			}).catch(function(err){
				console.log(err, 'iytuvwbef sergu /process/agriculture')
			})
		})

	},
	updateCultiveImg:(req,res)=>{
		if(req.method==='OPTIONS'){
			res.writeHead(200, headers);
			res.end();
		}else if(req.method==='POST'){
			var form = new formidable.IncomingForm(),
				files = {},
				fields = {};
	 		form.uploadDir = mysql.dirIntra+'/public/img/';
			form.on('field', function(field, value){
				fields[field]=value;
			}).on('file', function(field, file){
				files[field]=file
			}).on('end', function(){
				if(files.fileImg.type.indexOf('image')>-1)
					exports.newCultive(files, fields).then(resy=>{
						res.end(resy)
					}).catch(err=>{
						console.log(err)
					})
			});
			form.parse(req);
		}
	},headers:headers,
	updateStepImgChange:(file, data)=>{
		var prom=new Promise((res, err)=>{
			var imgPath=file.fileImg;
			slt.select('steps',{colums:{idsteps:data.cod}}).then(res2=>{
				slt.update('steps',{colums:{idsteps:data.cod}, clUp:{allInfo:data.texto,name:data.name, description:data.title,img:imgPath.path.replace(mysql.dirIntra, '').replace('/public','.'), imgServer:imgPath.path.replace(mysql.dirIntra, '')}})
				.then(res1=>{
					var filePathRemove=mysql.dirIntra+res2[0].img
					fs.exists(filePathRemove, file=>{
						if(file)
							fs.unlink(filePathRemove, err=>{
								if(err)
									diseno.writeError('\ncode: uawgefiuergioiiaiiaiai upload/upload '+err.message)
								else
									res('1')
							})
						else
							res('1')
					})
				}).catch(err=>{
					console.log(err, 'kuysgef seriges gsie', __filename)
				})
			}).catch(err=>{
				console.log(err, 'oiauwfa iserg iserg ', __filename)
			})
			// console.log(file, data, 'uyaefgbiseurgse zsdrfds', __filename)
		})
		return prom;
	},updateStepImg:(req,res)=>{
		if(req.method==='OPTIONS'){
			res.writeHead(200, headers);
			res.end();
		}else if(req.method==='POST'){
			var form = new formidable.IncomingForm(),
				files = {},
				fields = {};
	 		form.uploadDir = mysql.dirIntra+'/public/img/';
			form.on('field', function(field, value){
				fields[field]=value;
			}).on('file', function(field, file){
				files[field]=file
			}).on('end', function(){
				if(files.fileImg.type.indexOf('image')>-1)
					exports.updateStepImgChange(files, fields).then(resy=>{
						res.end(resy)
					}).catch(err=>{
						console.log(err)
					})
			});
			form.parse(req);
		}
	},saveImgStep:(file, fields)=>{
		var prom=new Promise((res,err)=>{
			var fileg=file.fileImg, imgDb=fileg.path.replace(mysql.dirIntra,''),
				imgMobile=fileg.path.replace(mysql.dirIntra,'').replace('/public','.')
			var column=['img','imgServer', 'idtypeAgriculture'],
				datos=[func.noScript(imgMobile),func.noScript(imgDb), func.noScript(fields.typeAgriculture)];
			slt.insert('steps', column, datos).then(function(resy){
				if(resy)
					slt.select('steps',{colums:{img:imgMobile, idtypeAgriculture:fields.typeAgriculture}})
					.then(resy=>{
						res(String(resy[0].idsteps))
					}).catch(err=>{
						console.log(err,'awefgsreg sergse', __filename)
					})
				
			}).catch(function(err){
				console.log(err, 'iytuvwbef sergu /process/agriculture')
			})


		})
		return prom;
	},
	uploadStepImg:(req, res)=>{
		if(req.method==='OPTIONS'){
			res.writeHead(200, headers);
			res.end();
		}else if(req.method==='POST'){
			var form = new formidable.IncomingForm(),
				files = {},
				fields = {};
	 		form.uploadDir = mysql.dirIntra+'/public/img/';
			form.on('field', function(field, value){
				fields[field]=value;
			}).on('file', function(field, file){
				files[field]=file
			}).on('end', function(){
				if(files.fileImg.type.indexOf('image')>-1)
					exports.saveImgStep(files, fields).then(resy=>{
						res.end(resy)
					}).catch(err=>{
						console.log(err, 'iuawhef sroerg', __filename)
					})
			});
			form.parse(req);
		}
	}
};
module.exports=exports
var mysql=require('../db/sqlConnection'), formidable=require('formidable'), slt=require('../db/selectMysql'),
	fs=require('fs'), func=require('../process/functions')