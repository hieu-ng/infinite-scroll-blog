const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 5;
let page = 1;

// Fetch data from API
async function getPosts() {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
	);

	const data = await res.json();

	return data;
}

// Show post in DOM
async function showPost() {
	const posts = awai getPosts();

	posts.forEach(post => {
		const postEl = document.createElement('div');
		postEl.classList.add('post');
		postEL.innerHTML =
			`
		<div class="number">${post.id} </div>
		<div class="post-info">
		<h2 class="post-title">${post.title}</h2>
		<p class="post-body">${post.body}</p>
		 </div>
		`;

		postContainer.appendChild(postEl);
	})
}

showPost()
