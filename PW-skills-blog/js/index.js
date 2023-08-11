const addBlogBtn = document.querySelector('.addBlog-btn');
const modal = document.querySelector('.modal-section');
const closeModal = document.querySelector('.closeModal-btn');
const modalForm = document.querySelector('.modal-form');
const blogSection = document.querySelector('.blogs-section');
const modalInps = document.querySelectorAll('.inp');

const date = new Date();

const blogsFromLocalStorage = () => {
  let blogList = localStorage.getItem('blogList');
  if (blogList) {
    return (blogList = JSON.parse(localStorage.getItem('blogList')));
  } else return [];
};

let blogs = blogsFromLocalStorage();
const handleModalSubmit = (e) => {
  const formObj = {
    id: date.getTime().toString(),
  };
  [...modalInps].forEach((e) => {
    if (e.value) {
      formObj[e.name] = e.value;
    }
  });

  blogs.push(formObj);
  localStorage.setItem('blogList', JSON.stringify(blogs));
  modal.classList.add('toggleModal');
  window.location.reload();
};

addBlogBtn.addEventListener('click', (e) => {
  modal.classList.toggle('toggleModal');
});

closeModal.addEventListener('click', (e) => {
  modal.classList.toggle('toggleModal');
});

modalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  handleModalSubmit();
});

const blogCards = blogs
  .map((blog) => {
    return `<div class="blog">
    <img
      src=${blog.thumbnail}
      alt="thumbnail"
      class="blog-thumbnail"
    />
    <h2 class="blog-heading">Title: ${blog.title}</h2>
    <p class="blog-desc">Descriptoin: ${blog.desc}.</p>
    <a href="/blog.html?id=${blog.id}" class="btn readBlog-btn">Read</a>
  </div>`;
  })
  .join('');

blogSection.innerHTML = blogCards;
