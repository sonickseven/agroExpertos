module.exports={
	noScript:text=>{
		var mapObj = {
			"'":'&#x27;',
			'<':'&lt;',
			'>':'&gt;',
			'"':'&quot;'
		};
		return text.replace(/\'|\"|<|>/gi, function(matched){
			return mapObj[matched];
		});
	}
}