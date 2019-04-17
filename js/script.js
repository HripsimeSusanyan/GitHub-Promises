$(document).ready(function(){
	
	$('#name').keyup(function(){
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
	<div class="table_box">
		<table>
			<tr>
				<td class="td">Login . . . </td>
				<td>  ${obj.login}</td>
			</tr>
			<tr>
				<td class="td">Id . . . </td>
				<td>  ${obj.id}</td>
			</tr>
			<tr>
				<td class="td">Node_Id . . . </td>
				<td>  ${obj.node_id}</td>
			</tr>
			<tr>
				<td class="td">Avatar_url . . . </td>
				<td>  ${obj.avatar_url}</td>
			</tr>
			<tr>
				<td class="td">Url . . . </td>
				<td>  ${obj.url}</td>
			</tr>
			<tr>
				<td class="td">Html_url . . . </td>
				<td>  ${obj.html_url}</td>
			</tr>
			<tr>
				<td class="td">Followers_url . . . </td>
				<td>  ${obj.followers_url}</td>
			</tr>
			<tr>
				<td class="td">Following_url . . . </td>
				<td>  ${obj.following_url}</td>
			</tr>
			<tr>
				<td class="td">Gists_url . . . </td>
				<td>  ${obj.gists_url}</td>
			</tr>
			<tr>
				<td class="td">Starred_url . . .  </td>
				<td>  ${obj.starred_url}</td>
			</tr>
			<tr>
				<td class="td">Subscriptions_url . . . </td>
				<td>  ${obj.subscriptions_url}</td>
			</tr>
			<tr>
				<td class="td">Organizations_urlitle . . . </td>
				<td>  ${obj.organizations_url}</td>
			</tr>
			<tr>
				<td class="td">Repos_url . . .  </td>
				<td>  ${obj.repos_url}</td>
			</tr>
			<tr>
				<td class="td">Events_url . . . </td>
				<td>  ${obj.events_url}</td>
			</tr>
			<tr>
				<td class="td">Received_events_url . . . </td>
				<td>  ${obj.received_events_url}</td>
			</tr>
			<tr>
				<td class="td">Site_admin . . . </td>
				<td>  ${obj.site_admin}</td>
			</tr>
			<tr>
				<td class="td">Name . . . </td>
				<td>  ${obj.name}</td>
			</tr>
			<tr>
				<td class="td">Company . . . </td>
				<td>  ${obj.company}</td>
			</tr>
			<tr>
				<td class="td">Blog . . . </td>
				<td>  ${obj.blog}</td>
			</tr>
			<tr>
				<td class="td">Location . . . </td>
				<td>  ${obj.location}</td>
			</tr>
			<tr>
				<td class="td">Email . . .  </td>
				<td>  ${obj.email}</td>
			</tr>
			<tr>
				<td class="td">Hireable . . . </td>
				<td>  ${obj.hireable}</td>
			</tr>
			<tr>
				<td class="td">Bio . . . </td>
				<td>  ${obj.bio}</td>
			</tr>
			<tr>
				<td class="td">Public_repos . . .  </td>
				<td>  ${obj.public_repos}</td>
			</tr>
			<tr>
				<td class="td">Public_gists . . . </td>
				<td>  ${obj.public_gists}</td>
			</tr>
			<tr>
				<td class="td">Followers . . . </td>
				<td>  ${obj.followers}</td>
			</tr>
			<tr>
				<td class="td">Following . . .  </td>
				<td>  ${obj.following}</td>
			</tr>
			<tr>
				<td class="td">Created_at . . . </td>
				<td>  ${obj.created_at}</td>
			</tr>
			<tr>
				<td class="td">Updated_at . . . </td>
				<td>  ${obj.updated_at}</td>
			</tr>
		</table>
		<button>Show Followers</button>
		<span>Show followers</span>
		<div class='columns'>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Architecto perspiciatis cupiditate, rem rerum. Illo laborum quibusdam, 
				ipsa id, veniam labore possimus quasi iusto ratione autem voluptatem aut, eius nobis omnis.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Repellendus facilis quod assumenda, esse! Accusantium nulla corporis 
				asperiores a maxime labore fuga, adipisci, iste aspernatur at magni voluptas libero. Obcaecati, inventore.
			</p>
		</div>
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

}

}) 