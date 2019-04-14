$(document).ready(function(){

	$('form').submit(function(e){
		e.preventDefault();
		doSearch('.container');
	})
	

	function getName(link){

		return new Promise((resolve,reject)=>{
			var addr = new XMLHttpRequest();
			addr.open(
				"GET", 
				link,
				true
			);
			addr.send();
			addr.onreadystatechange = function() {
				if(this.status == 200){
					if (this.readyState == 4) {
						data = JSON.parse(this.responseText);
						console.log(data.login);
						resolve(data);
					}
				}
				else{
					reject('Something went wrong');
				}
				
			};
		})
		
	}


	function show(obj){
	return `
	<div>
		<table>
			<tr>
				<td class="td">UserId </td>
				<td>  ${obj.login}</td>
			</tr>
			<tr>
				<td class="td">UserId </td>
				<td>  ${obj.id}</td>
			</tr>
			<tr>
				<td class="td">Id</td>
				<td>  ${obj.node_id}</td>
			</tr>
			<tr>
				<td class="td">Title</td>
				<td>  ${obj.avatar_url}</td>
			</tr>
			<tr>
				<td class="td">UserId </td>
				<td>  ${obj.url}</td>
			</tr>
			<tr>
				<td class="td">Id</td>
				<td>  ${obj.html_url}</td>
			</tr>
			<tr>
				<td class="td">Title</td>
				<td>  ${obj.avatar_url}</td>
			</tr>
			<tr>
				<td class="td">UserId </td>
				<td>  ${obj.followers_url}</td>
			</tr>
			<tr>
				<td class="td">Id</td>
				<td>  ${obj.following_url}</td>
			</tr>
			<tr>
				<td class="td">Title</td>
				<td>  ${obj.gists_url}</td>
			</tr>
			<tr>
				<td class="td">UserId </td>
				<td>  ${obj.starred_url}</td>
			</tr>
			<tr>
				<td class="td">Id</td>
				<td>  ${obj.subscriptions_url}</td>
			</tr>
			<tr>
				<td class="td">Title</td>
				<td>  ${obj.organizations_url}</td>
			</tr>
			<tr>
				<td class="td">UserId </td>
				<td>  ${obj.repos_url}</td>
			</tr>
			<tr>
				<td class="td">Id</td>
				<td>  ${obj.events_url}</td>
			</tr>
			<tr>
				<td class="td">Title</td>
				<td>  ${obj.received_events_url}</td>
			</tr>
			<tr>
				<td class="td">UserId </td>
				<td>  ${obj.site_admin}</td>
			</tr>
			<tr>
				<td class="td">Id</td>
				<td>  ${obj.name}</td>
			</tr>
			<tr>
				<td class="td">Title</td>
				<td>  ${obj.company}</td>
			</tr>
			<tr>
				<td class="td">Id</td>
				<td>  ${obj.blog}</td>
			</tr>
			<tr>
				<td class="td">Title</td>
				<td>  ${obj.location}</td>
			</tr>
			<tr>
				<td class="td">UserId </td>
				<td>  ${obj.email}</td>
			</tr>
			<tr>
				<td class="td">Id</td>
				<td>  ${obj.hireable}</td>
			</tr>
			<tr>
				<td class="td">Title</td>
				<td>  ${obj.bio}</td>
			</tr>
			<tr>
				<td class="td">UserId </td>
				<td>  ${obj.public_repos}</td>
			</tr>
			<tr>
				<td class="td">Id</td>
				<td>  ${obj.public_gists}</td>
			</tr>
			<tr>
				<td class="td">Title</td>
				<td>  ${obj.followers}</td>
			</tr>
			<tr>
				<td class="td">UserId </td>
				<td>  ${obj.following}</td>
			</tr>
			<tr>
				<td class="td">Id</td>
				<td>  ${obj.created_at}</td>
			</tr>
			<tr>
				<td class="td">Title</td>
				<td>  ${obj.updated_at}</td>
			</tr>
		</table>
	</div>
	`
}


function doSearch(selector){
	var text = $("#name").val();
	
	$(selector).html("");
	if(text.length<3){
		return;
	}

	let result = getName("https://api.github.com/users/"+text);

	result.then(res=>{
		console.log(res);
		$(selector).html(show(res));
	}).catch(err=>{
		$(selector).html("User with this name doesn't exist");
	})
	// link_sel.addClass('container');
	
}

// function doSearch(){
// 	var text = $("#input_name").val();
// 		getName("https://api.github.com/users/"+text,text);
// 			console.log(text);
// 	return text;
// }

// 	$(function () {
// 	    $("#search").click(doSearch);
// 	});


	    
	    
})