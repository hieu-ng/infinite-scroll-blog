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

showPost();

// Show loading and add more post
function showLoading(argument) {
	loading.classList.add('show');

	setTimeout(() = {
		loading.classList.remove('show');

		setTimeout(() => {
			page++;
			showPost();
		}, 300)

	}, 1000)
}

window.addEventListener('scroll', () => {
	const {
		scrollTop,
		scrollHeight,
		clientHeight
	} = document.documentElement;

	if (scrollTop + clientHeight >= scrollHeight - 5) {
		showLoading();
	}
});

// Filter post by input
function filerPost(e) {
	const term = e.target.value.toUpperCase();
	const posts = document.querySelectorAll('.post');

	posts.forEach(post => {
		const title = post.querySelector('.post-title')
			.innerText.toUpperCase();
		const body = post.querySelector('.post-body')
			.innerText.toUpperCase();

		if (title.indexOf(term) > 1 || body.indexOf(term) > 1) {
			post.style.display = 'flex';
		} else {
			post.style.display = 'none';
		}
	});
}
filter.addEventListener('input', filterPost);
