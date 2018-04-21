$(document).ready(function(){


	getPosts();

	function getPosts(){
		$.ajax({
			dataType:'json',
			type:'get',
			url:'https://jsonplaceholder.typicode.com/posts',
			success:function(res){
				$.each(res,function(indice,post){
					$("#posts").append(
								'<div class="card">'
								  +'<h5 class="card-header">Facebook</h5>'
								  +'<div class="card-body">'
								    +'<h5 class="card-title">'+post.title+'</h5>'
								    +'<p class="card-text">'+post.body+'</p>'
								    +'<a href="#" class="btn btn-primary">Go somewhere</a>'
								  +'</div>'
								+'</div>'
								);
				});
			}
		});
	}
});