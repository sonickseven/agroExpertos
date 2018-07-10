var agri=require('../process/agriculture')
module.exports={
	noReal: function(socket){
		socket.on('products',agri.listCultives)
		socket.on('cultive',agri.cultive)
		socket.on('newMsg', agri.newMsg)
		socket.on('listTypes', agri.listTypes)
		socket.on('getSteps', agri.getSteps)
		socket.on('newQuery', agri.newQuery)
		socket.on('step', agri.step)

	}
}