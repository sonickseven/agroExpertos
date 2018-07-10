function se(tag){
	return document.querySelector(tag)
}
function si(tag, cb){
	[].forEach.call(document.querySelectorAll(tag), cb);
}
var functions={
	ajax:(data, progress, cb)=>{
		var ajax=new XMLHttpRequest()
		ajax.upload.addEventListener('progress',progress, false);
		ajax.open('POST', data.url, true);
		ajax.onreadystatechange=function(res){
			if(this.readyState===4)
				cb(this.responseText)
		}
		ajax.send(data.formData);



		// var prom=new Promise((res, err)=>{

		// });
		// return prom;
	}, loadImgInput:(file)=>{
		var prom=new Promise((res, err)=>{
			var fr=new FileReader();
			fr.onload=()=>{
				res(fr.result)
			}
			fr.readAsDataURL(file);
			
		})
		return prom;
	}
}