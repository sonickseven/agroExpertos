document.addEventListener('DOMContentLoaded',()=>{
	ssAdmin.init();
},false)

var ssAdmin={
	data:{},
	init:()=>{
		ssAdmin.events();
	},events:()=>{
		if(se('.navStep'))
			si('.navStep', elem=>{
				elem.addEventListener('click',ssAdmin.logic.selectOptionStep,false)
			})
		if(se('.selectStep'))
			si('.selectStep', elem=>{
				elem.addEventListener('click', ssAdmin.logic.showUpdate,false)
			})
		if(se('.deleteSteps'))
			si('.deleteSteps', elem=>{
				elem.addEventListener('click', ssAdmin.logic.showDelete.bind({classTag:'deleteTag',cod:elem.dataset.cod}),false)
			})
		if(se('#insertys input[type="file"]'))
			se('#insertys input[type="file"]').addEventListener('change',ssAdmin.logic.putImgChangeStep,false)
		if(se('form#insertys'))
			se('form#insertys').addEventListener('submit',ssAdmin.logic.sendNewStep,false)
		if(se('.moreInfoDelete'))
			si('.moreInfoDelete', elem=>{
				elem.addEventListener('click',ssAdmin.logic.moreInfoStepDelete,false)
			})
		if(se('.closePrevieDeleteStep'))
			se('.closePrevieDeleteStep').addEventListener('click',ssAdmin.logic.closePreviw,false)
		if(se('.deleteStepButton'))
			si('.deleteStepButton',elem=>{
				elem.addEventListener('click', ssAdmin.logic.emitDeleteStep,false)
			})
		if(se('.updateSteps'))
			si('.updateSteps',elem=>{
				elem.addEventListener('click', ssAdmin.logic.showDelete.bind({classTag:'updateTag',cod:elem.dataset.cod}),false)
			})
		if(se('.moreInfoUpdate'))
			si('.moreInfoUpdate', elem=>{
				elem.addEventListener('click',ssAdmin.logic.moreInfoStepUpdate,false)
			})
		if(se('#updateStep input[type="file"]'))
			se('#updateStep input[type="file"]').addEventListener('change',ssAdmin.logic.loadNewImgStep,false)
		if(se('#updateStep'))
			se('#updateStep').addEventListener('submit',ssAdmin.logic.sendStepUpdate,false)
		if(se('.closePrevieUpdateStep'))
			si('.closePrevieUpdateStep, .closeUpdateStepPreview', elem=>{
				elem.addEventListener('click',ssAdmin.logic.closeUpdateStepPreview,false)
			})
		if(se('#insertCultive'))
			se('#insertCultive').addEventListener('submit',ssAdmin.logic.newCultive,false)
		if(se('.cultive-cotainer .text-danger.glyphicon'))
			si('.cultive-cotainer .text-danger.glyphicon', elem=>{
				elem.addEventListener('click',ssAdmin.logic.sendDeleteCultive,false)
			})
	},logic:{
		sendDeleteCultive:function(){
			var button=this;
			agrit.emit('cultive', {opt:0, cultive: button.dataset.deid}, res=>{
				if(res)
					se('[data-coidcul="'+button.dataset.deid+'"]').remove()
			})
		},newCultive:function(ev){
			let fromr=this
			ev.preventDefault();
			var file=se('#insertCultive input[type="file"]').files[0]
			var datos=new FormData()
			datos.append('fileImg', file)
			datos.append('nameCultive', se('#insertCultive .nameCultive').value)
			functions.ajax({url:'/uploadImgCultive/', formData:datos},e=>{//progreso
				var prog=parseInt(Math.round((e.loaded / e.total)*100));
				console.log(prog)
			},res=>{//respues del server
				$.notify('Se creo correctamente el cultivo','success', {position:'right middle'});
				fromr.reset();
			})
		},selectOptionStep:function(){
			var menu=this;
			if(menu.dataset.opt)
				switch(menu.dataset.opt){
					case '0':
					se('main.container').innerHTML=ssAdmin.views.insertSteps();
					ssAdmin.logic.loadAllProducts('selectStep');
					break;
					case '1':
					se('main.container').innerHTML=ssAdmin.views.deleteSteps();
					ssAdmin.logic.loadAllProducts('deleteSteps');
					break;
					case '2':
					se('main.container').innerHTML=ssAdmin.views.deleteSteps();
					ssAdmin.logic.loadAllProducts('updateSteps');
					break;
				}
			else if(menu.dataset.opt1)
				switch(menu.dataset.opt1){
					case '0':
					se('main.container').innerHTML=ssAdmin.views.newCultive();
					ssAdmin.events()
					break;
					case '1':
					se('main.container').innerHTML=ssAdmin.views.conatirnerDeleteCultive();
					ssAdmin.logic.loadAllCultives();
					break;
					case '2':
					se('main.container').innerHTML=ssAdmin.views.deleteSteps();
					ssAdmin.logic.loadAllProducts('updateSteps');
					break;
				}
		}, loadAllCultives:()=>{
			agrit.emit('products',{lmt1:0,lmt2:20},(prod)=>{
				if(prod.length){
					prod.forEach((val, key)=>{
						$('.deleteCultive>.cultive-cotainer').append(ssAdmin.views.cardDeleteCultive(val))
						if(key+1===prod.length)
							ssAdmin.events();
					})
				}
			})
		},putImgChangeStep:function(){
			var file=this.files[0]
			functions.loadImgInput(file).then(img=>{
				se('.imgUploadStep').src=img
			}).catch(err=>{
				console.log(err)
			})
		},sendNewStep:function(ev){
			ev.preventDefault();
			var datos=this;
			var file=se('#insertys input[type="file"]').files[0]
			var form=new FormData();
			form.append('fileImg', file)
			form.append('typeAgriculture', datos.dataset.typagri)
			functions.ajax({url:'/uploadImgStep/', formData:form},e=>{
				var prog=parseInt(Math.round((e.loaded / e.total)*100));
				// console.log(prog)
			},res=>{
				agrit.emit('step',{opt:0,name:se('.nameStep').value, id:res,title:se('.tittleStep').value,texto:se('.textStep').value}, res1=>{
					if(res1.affectedRows){
						$('.insertSteps').trigger('click')	
					}
				})
			})
		},showUpdate:function(){
			if(se('.insertesy')){
				var box=this;
				se('.insertesy').dataset.typagri=box.dataset.cod
				ssAdmin.events()
			}
		},loadAllProducts:(classtag)=>{
			agrit.emit('products',{lmt1:0,lmt2:20},(prod)=>{
				if(prod.length){
					prod.forEach((val, key)=>{
						val.class=classtag
						$('.product-cotainer').append(ssAdmin.views.products(val))
						if(key+1===prod.length)
							ssAdmin.events();
					})
				}
			})

		},showDelete:function(){
			var boxs=this;
			ssAdmin.data.stepUpdateCod=boxs.cod
			agrit.emit('step',{opt:1, cultive:boxs.cod }, res=>{
				if(res.length){
					se('.modal-body').innerHTML=''
					res.forEach((val, key)=>{
						val.classtag=boxs.classTag
						se('.modal-body').appendChild(ssAdmin.views.stepsThumbs(val))
						if(key+1===res.length)
							ssAdmin.events();
					})
				}
			})
		},moreInfoStepDelete:function(){
			var iddelete='#de'+this.dataset.cod
			var datos=JSON.parse(se(iddelete).dataset.json)
			si('.file-preview-frame', elem=>{
				elem.style.display='none'
			})
			if(se('.previewDeleteStep'))
				se('.previewDeleteStep').remove();
			$('.modal-body').append(ssAdmin.views.previewDeleteStep(datos))
			ssAdmin.events()
		},emitDeleteStep:function(){
			var step=this.dataset.cod
			if(se('#de'+this.dataset.cod)){
				var datos=JSON.parse(se('#de'+this.dataset.cod).dataset.json)
				agrit.emit('step',{opt:2, step:this.dataset.cod, img:datos.img}, res=>{
					if(se('#de'+step))
						se('#de'+step).remove()
					if(se('.previewDeleteStep'))
						se('.previewDeleteStep').remove()
					si('.file-preview-frame', elem=>{
						elem.style.display='inline-block'
					})
				})
			}
		},closePreviw:function(){
			si('.file-preview-frame', elem=>{
				elem.style.display='inline-block'
			})
			se('.previewDeleteStep').remove();
		},moreInfoStepUpdate:function(){
			var box=this
			var datos=JSON.parse(se('#de'+box.dataset.cod).dataset.json)
			si('.file-preview-frame', elem=>{
				elem.style.display='none'
			})
			if(se('.formUpdateStep'))
				se('.formUpdateStep').remove();
			$('.modal-body').append(ssAdmin.views.formUpdateStep(datos))
			ssAdmin.events()
		},closeUpdateStepPreview:function(){
			se('.formUpdateStep').remove()
			si('.file-preview-frame', elem=>{
				elem.style.display='inline-block';
			})
		},loadNewImgStep:function(){
			var file=this.files[0]
			functions.loadImgInput(file).then(img=>{
				se('.imgThumbUpdateStep>img').src=img
				ssAdmin.data.imgChage=true
			}).catch(err=>{
				console.log(err)
			})
		},sendStepUpdate:function(ev){
			ev.preventDefault();
			var fomr=this;

			if(ssAdmin.data.imgChage){
				var file=se('#updateStep input[type="file"]').files[0]
				var formy=new FormData();
				formy.append('cod', fomr.dataset.cod)
				formy.append('name', se('.nameStep').value)
				formy.append('title', se('.tittleStep').value)
				formy.append('texto', se('.textStep').value)
				formy.append('fileImg', file)
				functions.ajax({url:'/updateStepImg/', formData:formy},e=>{
					var prog=parseInt(Math.round((e.loaded / e.total)*100));
					se('.progress-bar').style.width=prog
					se('.sr-only').innerHTML=prog+'%'
				},res=>{
					if(res==='1'){
						$('.ajgyda').trigger('click')
						setTimeout(()=>{
							$('.updateSteps[data-cod="'+ssAdmin.data.stepUpdateCod+'"]').trigger('click')
						},400)
					}
				})
			}else{
				var datos={name:se('.nameStep').value,
					description:se('.tittleStep').value, allInfo:se('.textStep').value
				}
				agrit.emit('step', {opt:3, cod:fomr.dataset.cod, data:datos}, res=>{
					if(res){
						$('.ajgyda').trigger('click')
						setTimeout(()=>{
							$('.updateSteps[data-cod="'+ssAdmin.data.stepUpdateCod+'"]').trigger('click')
						},400)
					}
				})
			}
		}
	},views:{
		cardDeleteCultive:data=>`<div data-coidcul="${data.idtypeAgriculture}" data-toggle="modal" data-target="#myModal" class="col-xs-6 col-sm-3">
						<div data-cod="8" class="card card-block container-fluid cardProduct selectStep">
							<img class="card-img-top ss-card-img" src="${data.imgServer}" data-src="./img/upload_9b710bd7cd5c2d23901c0ba399bad05b" alt="Card image cap">
							<h4 class="card-title">${data.name}</h4>
							<div class="file-footer-buttons">
								<button type="button" data-cod="3" class="deleteStepId kv-file-remove btn btn-xs btn-default deleteStepButton" title="Eliminar paso"><i data-deid="${data.idtypeAgriculture}" class="glyphicon glyphicon-trash text-danger"></i></button>
							</div>
						</div>
					</div>`,
		conatirnerDeleteCultive:data=>`<article class="row deleteCultive">
				<div class="container row cultive-cotainer"></div>
			</article>`,
		newCultive:data=>`<article class="row newCultive">
				<form id="insertCultive" class="form-horizontal insertesy" data-typagri="2">
					<div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">Nombre</label>
						<div class="col-sm-10">
							<input class="nameCultive form-control" type="text" id="inputEmail3" placeholder="Nombre del cultivo" required>
						</div>
					</div>
					<div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">Imágen del cultivo</label>
						<div class="col-sm-10">
							<div tabindex="500" class="btn btn-primary btn-block btn-file"><i class="glyphicon glyphicon-folder-open"></i>&nbsp;	<span class="hidden-xs">Buscar imágen</span><input required id="input-20" type="file" class=""></div>
						</div>
					</div>
					<div class="form-group">
						<button type="submit" class="btn btn-primary">Guardar cambios</button>
					</div>
				</form>
			</article>`,
		formUpdateStep:data=>`<div class="formUpdateStep container-fluid">
					<button type="button" class="close closePrevieUpdateStep" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<form id="updateStep" class="form-horizontal insertesy" data-cod="${data.idsteps}">
						<div class="form-group">
							<label for="inputEmail3" class="col-sm-2 control-label">Nombre</label>
							<div class="col-sm-10">
								<input value="${data.name}" class="nameStep form-control" type="text" class="form-control" id="inputEmail3" placeholder="Nombre del paso">
							</div>
						</div>
						<div class="form-group">
							<label for="inputEmail3" class="col-sm-2 control-label">Título</label>
							<div class="col-sm-10">
								<input value="${data.description}" class="form-control tittleStep" type="text" class="form-control" id="inputEmail3" placeholder="descripción del paso del paso">
							</div>
						</div>
						<div class="form-group">
							<label for="inputEmail3" class="col-sm-2 control-label">Texto del contenido</label>
							<div class="col-sm-10">
								<textarea class="form-control textStep" placeholer="Texto del contenido">${data.allInfo}</textarea>
							</div>
						</div>
						<div class="form-group">
							<label for="inputEmail3" class="col-sm-2 control-label">Imágen del texto</label>
							<div class="col-sm-10">
								<div class="imgThumbUpdateStep">
									<img src="${data.imgServer}" class="img-rounded img-thumbnail" alt="">
									<div tabindex="500" class="btn btn-primary btn-file"><i class="glyphicon glyphicon-folder-open"></i>&nbsp;<span class="hidden-xs">Cambiar imágen</span><input id="input-20" type="file" class=""></div>
								</div>
							</div>
						</div>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuenow="70"
							aria-valuemin="0" aria-valuemax="100">
								<span class="sr-only">70% Complete</span>
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">
								<button type="button" class="btn btn-info insertSteps closeUpdateStepPreview">Cerrar</button>
								<button type="submit" class="btn btn-warning">Guardar cambios</button>
							</div>
						</div>
					</form>
				</div>`,
		previewDeleteStep:data=>`<div class="previewDeleteStep container-fluid">
			<div class="row">
				<button type="button" class="close closePrevieDeleteStep" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel"><strong>${data.name}:</strong> ${data.description}</h4>
			</div>
			<div class="row">
				<div class="container-fluid">${data.allInfo}</div>
			</div>
			<div class="row">
				<img src="${data.img}" alt="" class="img-rounded center-block imgprevieDeleteStep">
			</div>
			<div class="row">
				<button data-cod="${data.idsteps}" class="btn btn-danger deleteStepButton"><i class="glyphicon glyphicon-trash text-danger"></i> Eliminar paso!</button>
			</div>
		</div>`,
		stepsThumbs:data=>{
			let boxEdit=document.createElement('div')
			boxEdit.dataset.json=JSON.stringify(data);
			boxEdit.className=`file-preview-frame ${data.classtag}`
			boxEdit.id=`de${data.idsteps}`
			boxEdit.dataset.fileindex=0
			boxEdit.dataset.template='image'
			boxEdit.innerHTML=`<h4>${data.name}</h4>
							<div class="kv-file-content">
								<img src="${data.imgServer}" class="kv-preview-data file-preview-image" title="" alt="" style="width:auto;height:160px;">
								</div><div class="file-thumbnail-footer">
										<div class="file-footer-caption" title="${data.description}">${data.description}<br></div>
										<div class="file-thumb-progress hide"><div class="progress">
										<div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;">
												0%
										 </div>
								</div></div> <div class="file-actions">
										<div class="file-footer-buttons">
											`+(data.classtag==='deleteTag'?
												`<button type="button" data-cod="${data.idsteps}" class="deleteStepId kv-file-remove btn btn-xs btn-default deleteStepButton" title="Eliminar paso"><i class="glyphicon glyphicon-trash text-danger"></i></button>
											<button type="button" data-cod="${data.idsteps}" class="moreInfoDelete kv-file-zoom btn btn-xs btn-default" title="Ver detalles"><i class="glyphicon glyphicon-zoom-in"></i></button>`
											:`<button type="button" data-cod="${data.idsteps}" class="moreInfoUpdate kv-file-zoom btn btn-xs btn-default" title="Ver detalles"><i class="glyphicon glyphicon-zoom-in"></i></button>`)+`
												</div>
										<div class="clearfix"></div>
								</div>
							</div>`
			return boxEdit;
		},deleteSteps:()=>{
			return `<article class="row deleteStep">
				<div class="container row product-cotainer"></div>
			</article>
			<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div class="modal-dialog modalDeleteSteps" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close ajgyda" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 class="modal-title" id="myModalLabel">Eliminar pasos!</h4>
						</div>
						<div class="modal-body"></div>
					</div>
				</div>
			</div>`;
		},insertSteps:()=>{
			return `<article class="row inserted">
				<div class="container row product-cotainer"></div>
			</article>
			<!-- Modal -->
			<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 class="modal-title" id="myModalLabel">Insertar un nuevo paso!</h4>
						</div>
						<div class="modal-body">
							<form id="insertys" class="form-horizontal insertesy" data-typagri="">
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-2 control-label">Nombre</label>
									<div class="col-sm-10">
										<input class="nameStep form-control" type="text" class="form-control" id="inputEmail3" placeholder="Nombre del paso">
									</div>
								</div>
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-2 control-label">Título</label>
									<div class="col-sm-10">
										<input class="form-control tittleStep" type="text" class="form-control" id="inputEmail3" placeholder="descripción del paso del paso">
									</div>
								</div>
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-2 control-label">Texto del contenido</label>
									<div class="col-sm-10">
										<textarea class="form-control textStep" placeholer="Texto del contenido"></textarea>
									</div>
								</div>
								<div class="form-group">
									<label for="inputEmail3" class="col-sm-2 control-label">Imágen del texto</label>
									<div class="col-sm-10">
										<div tabindex="500" class="btn btn-primary btn-block btn-file"><i class="glyphicon glyphicon-folder-open"></i>&nbsp;	<span class="hidden-xs">Buscar imágen</span><input id="input-20" type="file" class=""></div>
									</div>
								</div>
								<div class="form-group">
									<div class="col-sm-offset-2 col-sm-10">
										<img src="" class="img-responsive img-thumbnail imgUploadStep" width="304" height="236">
									</div>
								</div>
							</form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default insertSteps" data-dismiss="modal">Cerar</button>
							<button type="submit" form="insertys" class="btn btn-primary">Guardar cambios</button>
						</div>
					</div>
				</div>
			</div>`;
		},products:data=>`<div data-toggle="modal" data-target="#myModal" class="col-xs-6 col-sm-3">
							<div data-cod="${data.idtypeAgriculture}" class="card card-block container-fluid cardProduct ${data.class}">
							<img class="card-img-top ss-card-img" src="${data.imgServer}" data-src="${data.img}" alt="Card image cap">
							<h4 class="card-title">${data.name}</h4>
						</div>
					</div>`
	}
}