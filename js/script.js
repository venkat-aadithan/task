$('document').ready(function(){

	var data = document.cookie;	
	if(data){
		var res = data.split('=');
		var jsondata = JSON.parse(res[1]);
		$.each(jsondata,function(key,value){
			if(key == 0){
				$('.form-row > div.row').find('input[name="name"]').val(value.name);
				$('.form-row > div.row').find('input[name="age"]').val(value.age);
				$('.form-row > div.row').find('select[name="gender"]').val(value.gender);
			} else {
				var mselected = value.gender == 'Male'?'selected="selected"':'';
				var fselected = value.gender == 'Female'?'selected="selected"':'';
				$('div.form-row').append('<div class="row"><div class="col-md-3"><label>Name:</label><input type="text" name="name" class="form-control" placeholder="Name" value="'+value.name+'"></div><div class="col-md-3"><label>Age:</label><input type="text" name="age" class="form-control" placeholder="Age" value="'+value.age+'"></div><div class="col-md-3"><label>Gender:</label><select name="gender" class="form-control"><option>Select</option><option'+mselected+'>Male</option><option '+fselected+'>Female</option></select></div><div class="col-md-3"><label>&nbsp;</label><br><button type="button" class="btn btn-danger delete"> Delete </button></div></div>');		
			} 
		});
	}

	$('.addmore').click(function(){
		$('div.form-row').append('<div class="row"><div class="col-md-3"><label>Name:</label><input type="text" name="name" class="form-control" placeholder="Name"></div><div class="col-md-3"><label>Age:</label><input type="text" name="age" class="form-control" placeholder="Age"></div><div class="col-md-3"><label>Gender:</label><select name="gender" class="form-control"><option>Select</option><option>Male</option><option>Female</option></select></div><div class="col-md-3"><label>&nbsp;</label><br><button type="button" class="btn btn-danger delete"> Delete </button></div></div>');
	});

	$('html body').on('click','.delete',function(){
		$(this).parents('div.row').remove();
	});

	$('.save').click(function(){
		var data = [];
		$('.form-row').find('div.row').each(function(){
			var name = $(this).find('input[name="name"]').val();
			var age = $(this).find('input[name="age"]').val();
			var gender = $(this).find('select[name="gender"]').val();
			var obj = {'name':name,'age':age,'gender':gender};
			data.push(obj);
		});
		document.cookie = "data = "+JSON.stringify(data);
		//location.reload();
	});

});