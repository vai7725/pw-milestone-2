const blogDetail = document.querySelector('.blogDetail');

const blogsFromLocalStorage = () => {
  let blogList = localStorage.getItem('blogList');
  if (blogList) {
    return (blogList = JSON.parse(localStorage.getItem('blogList')));
  } else return [];
};

let blogs = blogsFromLocalStorage();

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const blog = blogs.filter((blog) => blog.id === id);

blogDetail.innerHTML = blog.map((item) => {
  return `<header class="blogHeaders">
    <div class="headers">
      <h2 class="blog-heading">Title: ${item.title}</h2>
      <p class="blog-desc">Description: ${item.desc}</p>
    </div>
    <img
      src=${item.thumbnail}
      class="blogThumbnail"
      alt="thumbnail"
    />
  </header>
  <main class="blogContent-box">
    <p class="blog-content">
      ${item.blogContent}
    </p>
  </main>`;
});
