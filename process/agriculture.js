'use strict'
var gloVarAgricu={
	cultive:(data,cb)=>{
		switch(data.opt){
			case 0://elimnar
				function deleteCultiveEnd(){
					sltSql.select('typeAgriculture', {colums:{idtypeAgriculture:data.cultive}}).then(resa=>{
						if(resa.length){
							sltSql.delete('typeAgriculture',{colums:{idtypeAgriculture:data.cultive}}).then(res=>{
								let filePath=mysql.dirIntra+resa[0].imgServer
								fs.exists(filePath, file=>{
									if(file)
										fs.unlink(filePath, err=>{
											if(err)
												diseno.writeError('\ncode: uawgefiuergioiiaiiaiai upload/upload '+err.message)
											else{
												cb(true)
											}
										})
									else{
										cb(true)
									}
								})
							}).catch(err=>{
								console.log(err, 'iuahwef rofrse',__filename)
							})
						}else
							console.log('no hay img de cultivo', __filename)
					}).catch(err=>{
						console.log(err, 'iuawef awefawe', __filename)
					})
				}
				sltSql.select('steps', {colums:{idtypeAgriculture:data.cultive}}).then(steps=>{
					let numy=0;
					function deleteEachStep(){
						if(numy<steps.length){
							sltSql.delete('steps',{colums:{idtypeAgriculture:steps[numy].idtypeAgriculture}}).then(res=>{
								let filePath=mysql.dirIntra+steps[numy].img
								fs.exists(filePath, file=>{
									if(file)
										fs.unlink(filePath, err=>{
											if(err)
												diseno.writeError('\ncode: uawgefiuergioiiaiiaiai upload/upload '+err.message)
											else{
												numy++
												deleteEachStep()
											}
										})
									else{
										numy++
										deleteEachStep()
										cb(true)
									}
								})
							}).catch(err=>{
								console.log(err, 'iawuef awife ', __filename)
							})
						}else
							deleteCultiveEnd()
						
					}
					if(steps.length)
						deleteEachStep()
					else
						deleteCultiveEnd()
				}).catch(err=>{
					console.log(err, 'oiaweufrse gsoerg dd', __filename)
				})


			break;
		}
	},step:function(data, cb){
		if(data.opt<1){
			var quey=`UPDATE steps SET name="${func.noScript(data.name)}", description="${func.noScript(data.title)}", description="${func.noScript(data.texto)}", allInfo="${func.noScript(data.texto)}" WHERE idsteps="${data.id}"`;
			mysql.runQuery(quey).then(cb).catch(err=>{
				console.log(err)
			})
		}else if(data.opt<2){
			sltSql.select('steps', {desc:{clm:'idsteps', ord:'desc'}, colums:{idtypeAgriculture:data.cultive}}).then(cb).catch(err=>{
				console.log(err, 'oiaweufrse gsoerg dd', __filename)
			})
		}else if(data.opt<3){
			sltSql.delete('steps',{colums:{idsteps:data.step}}).then(res=>{
				var filePath=mysql.dirIntra+data.img
				fs.exists(filePath, file=>{
					if(file)
						fs.unlink(filePath, err=>{
							if(err)
								diseno.writeError('\ncode: uawgefiuergioiiaiiaiai upload/upload '+err.message)
							else
								cb(true)
						})
					else
						cb(true)
				})
			})
			.catch(err=>{
				console.log(err, 'iawuef awife ', __filename)
			})
		}else if(data.opt<4){
			sltSql.update('steps', {colums:{idsteps:data.cod}, clUp:data.data}).then(res=>{
				cb(true)
			}).catch(err=>{
				console.log(err)
			})
		}

	},listCultives:function(data,cb){
		var quey=`SELECT * FROM typeAgriculture ORDER BY idtypeAgriculture DESC LIMIT ${data.lmt1}, ${data.lmt2}`;
		mysql.runQuery(quey).then(cb).catch(err=>{
			console.log(err, 'iuafea wfiawiaerg serg --0', __filename)
		})
	},noRunScript:function(msg){
		var hbbs='{{message}}',
		tmpl=hbs.compile(hbbs);
		return tmpl({message:msg});
	},
	newMsg:function(dato, cb){
		var socket=this
		if(dato.user&&dato.expert){
			var msgs=gloVarAgricu.noRunScript(dato.msg)
			var column=['msg', 'expert', 'user', 'name'],
				datos=[func.noScript(msgs), func.noScript(dato.expert), func.noScript(dato.user), func.noScript(dato.name)];
			sltSql.insert('chats', column, datos).then(function(res){
				if(res){
					var ress={mv: dato.mv, res:true, msg: msgs, name: dato.name}
					socket.broadcast.json.emit('user:'+(dato.mv?dato.expert:dato.user), ress)
					cb(ress)
				}
			}).catch(function(err){
				console.log(err, 'iytuvwbef sergu /process/agriculture')
			})
		}
	},
	newQuery:function(dato, cb){
		var socket=this;
		sltSql.select('user_typeAgriculture', {colums:{idtypeAgriculture:dato.cultive}}).then(function(a){
			if(a.length){
				var column=['mgm', 'idtypeAgriculture'],
					datos=[func.noScript(dato.qry), func.noScript(dato.cultive)];
				sltSql.insert('newQuery', column, datos).then(function(res){
					if(res){
						sltSql.select('newQuery', {colums:{mgm: dato.qry},desc:{clm:'idtypeAgriculture', ord:'DESC'}}).then(function(ase){
							a.forEach(function(val){
								socket.broadcast.json.emit('expert:'+val.iduser, {codQury:ase[0].idnewQuery,name: dato.name, cod: dato.cod, text: dato.qry})
							})
							
						}).catch(function(err){
							console.log(err, 'jytvwsef ierge  process/agriculture')
						})
						cb({res:true})
					}
				}).catch(function(err){
					console.log(err, 'iytuvwbef sergu /process/agriculture')
				})
			}
		})
		.catch(function(err){
			console.log(err, '984ftyuj6ft6t  process/agriculture')
		})
	},listTypes:function(dato,cb){
		sltSql.select(dato.table, {desc:{clm:'name', ord:'ASC'}}).then(cb).catch(function(err){
			console.log(err, 'jytvwsef ierge  process/agriculture')
		})
	}, getSteps:function(dato,cb){
		sltSql.select(dato.table, {colums:{idtypeAgriculture:dato.val},desc:{clm:dato.clm, ord:'ASC'}}).then(cb).catch(function(err){
			console.log(err, 'jytvwsef ierge  process/agriculture')
		})
	}
}
module.exports=gloVarAgricu;
var sltSql=require('../db/selectMysql'), hbs=require('handlebars'), mysql=require('../db/sqlConnection'),
	fs=require('fs'), func=require('./functions')