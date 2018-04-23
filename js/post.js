$(document).ready(function(){


	getPosts();
	getUsers();

	function getUsers(){
		$.ajax({
			dataType:'json',
			type:'get',
			url:'https://jsonplaceholder.typicode.com/users',
			success:function(res){
				$(".userName").each(function(index){
					var userId=$(this).attr("id");
						$.each(res,function(indice,user){
							if(userId==user.id){
								$(".userName").eq(index).text(user.name);
							}
						});
				});
			}
		});
	}	

	function getPosts(){
		$.ajax({
			dataType:'json',
			type:'get',
			url:'https://jsonplaceholder.typicode.com/posts',
			success:function(res){
				$.each(res,function(indice,post){
					$("#posts").append(
								'<div class="row">'//inicia la primera fila
								+'<div class="col-3"><img src="img/perfil.jpg" class="img-fluid" alt="Responsive image"></div>'
								+'<div class="col">'
								+'<div class="card">'
								  +'<h5 class="card-header userName" id="'+post.userId+'">Facebook</h5>'
								  +'<div class="card-body">'
								    +'<h5 class="card-title">'+post.title+'</h5>'
								    +'<p class="card-text">'+post.body+'</p>'
								    +'<a href="#" class="btn btn-primary">Go somewhere</a>'
								  +'</div>'
								+'</div></div></div>'
								);
				});
			}
		});
	}
});