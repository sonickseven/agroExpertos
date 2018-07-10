document.addEventListener('DOMContentLoaded', function(){
	chating.events();
	chating.loads();
},false)

var chating={
	loads:function(){
		console.log(se('.main>nav').dataset.cod)
		if(se('.body>.newQuery>div')){
			agrit.on('expert:'+se('.main>nav').dataset.cod, function(as){
				$('.body>.newQuery>div').append(chating.views.listQuery(as))
				chating.events()
			})
		}
		if(se('.main>nav')){
			agrit.on('user:'+se('.main>nav').dataset.cod, function(as){
				$('.body>.chating .msgs').append(chating.views.msgInter(as))
			})
		}
	},
	newMsg:{
		send: function(ev){
			var boxText=this, msg=boxText.value;

			if(ev.which===13){
				ev.preventDefault();
				boxText.value='';
				agrit.emit('newMsg',{msg: msg, user: se('.chating>.head').dataset.usercod, expert:se('.main>nav').dataset.cod, name: se('.main>nav').dataset.name}, function(as){
					if(as.res)
						$('.body>.chating .msgs').append(chating.views.msgInter(as))
				})
			}
		}
	},addChat:function(){
		var box=this;
		if(!se('.chating>.head[data-codqr="'+box.dataset.codqry+'"]')){
			se('.chating>.head').dataset.codqr=box.dataset.codqry
			se('.chating>.head').dataset.usercod=box.dataset.cod
			se('.chating>.head').innerHTML=box.dataset.name
			se('.body>.chating .msgs').innerHTML=''
		}
	},
	events:function(){
		if(se('.wrters>textarea'))
			se('.wrters>textarea').addEventListener('keypress', chating.newMsg.send,false)
		if(se('.newQuery-msg'))
			si('.newQuery-msg', function(elem){
				elem.addEventListener('click', chating.addChat,false)
			})
	}, views:{
		listQuery:function(dato){
			// console.log(dato)
			return '<div data-name="'+(dato.name||'anonimo')+'" data-cod="'+dato.cod+'" data-codqry="'+dato.codQury+'" class="newQuery-msg">'+
						'<strong>'+(dato.name||'anonimo')+': </strong>'+
						'<span>'+
							dato.text+
						'</span>'+
					'</div>'
		},msgInter:function(datos){
			var datet=new Date();
			if(datos.mv){
				return '<div class="msgsgs exter">'+
					'<div>'+
						'<div class="headers">'+
							'<span class="hour">'+moment(datet).format('MM/DD/YYYY')+' </span>'+
							'<span class="user">'+datos.name+'</span>'+
						'</div>'+
						'<p>'+datos.msg+'</p>'+
					'</div>'+
				'</div>'
			}else{
				return '<div class="msgsgs inter">'+
					'<div>'+
						'<div class="headers">'+
							'<span class="hour">'+moment(datet).format('MM/DD/YYYY')+' </span>'+
							'<span class="user">'+datos.name+'</span>'+
						'</div>'+
						'<p>'+datos.msg+'</p>'+
					'</div>'+
				'</div>'
			}
		}
	}
}
function se(tag){
	return document.querySelector(tag)
}
function si(tag, cb){
	[].forEach.call(document.querySelectorAll(tag), function(elem) {
		cb(elem);
	});
}
// console.log(moment(testDate).format('MM/DD/YYYY'))