$(document).ready(function(){


	getPosts();

	function getPosts(){
		$.ajax({
			dataType:'json',
			type:'get',
			url:'https://jsonplaceholder.typicode.com/posts',
			success:function(res){
				$.each(res,function(indice,post){
					$("#posts").append('<div class="row"><div class="col"></div></div>');
				});
			}
		});
	}
});