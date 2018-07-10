module.exports={
	update:(table, extra)=>{
		var prom=new Promise((res, err)=>{
			var query=`UPDATE ${table}`;
			if(extra.clUp){
				query+=' SET ';
				var adns=[];
				for(var i in extra.clUp){
					adns.push(`${i}='${func.noScript(extra.clUp[i])}'`)
				}
				query+=adns.join(' , ')
			}
			if(extra.colums){
				query+=' WHERE ';
				var adns=[];
				for(var i in extra.colums){
					adns.push(`${i}='${func.noScript(extra.colums[i])}'`)
				}
				query+=adns.join(' AND ')
			}
			sqlConnect.runQuery(query).then(res).catch(err=>{console.log(err)})
		})
		return prom;
	},delete:(table, extra)=>{
		var prom=new Promise((res, err)=>{
			var query=`DELETE FROM ${table}`;
			if(extra.colums){
				query+=' WHERE ';
				var adns=[];
				for(var i in extra.colums){
					adns.push(`${i}='${func.noScript(extra.colums[i])}'`)
				}
				query+=adns.join(' AND ')
			}
			sqlConnect.runQuery(query).then(res).catch(err=>{console.log(err)})
		})
		return prom;
	},select:function(tabla, extra){
		var prom=new Promise(function(ok, err){
			var query=`SELECT * FROM ${func.noScript(tabla)}`;
			if(extra.colums){
				query+=' WHERE ';
				var adns=[];
				for(var i in extra.colums){
					adns.push(`${i}='${func.noScript(extra.colums[i])}'`)
				}
				query+=adns.join(' AND ')
			}
			if(extra.desc){
				query+=` ORDER BY ${func.noScript(extra.desc.clm)} ${extra.desc.ord}`
			}
			sqlConnect.runQuery(query).then(ok).catch(function(errs){
				err(errs)
			});
		});
		return prom;
	}, insert: function(tabla, column, dato){
		var prom=new Promise(function(ok, erre){
			var bs=[];
			var colum=column.join(',');
			for(var i=0; i<dato.length; i++){
				bs[i]='?';
			}
			var datos=bs.join(',');
			var consulta='INSERT INTO '+tabla+' ('+colum+') '+
							'VALUES('+datos+')';
			sqlConnect.connection.query(consulta, dato, function(err, rows, fields){
				if(err){
					console.log(consulta, datos,err.message+' ugfieese ../mysql/conexion.js');
					erre(false);
				}else{
					ok(true);
				}
			});
		})
		return prom
	}
}
var sqlConnect=require('./sqlConnection'), func=require('../process/functions')