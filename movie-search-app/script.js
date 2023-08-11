const movieSection = document.querySelector('.blogs-section');
const searhBtn = document.querySelector('.search-btn');

const search = document.querySelector('.inp');
const movieRecommendation = document.querySelector('.blogs-section');

const handleChange = async (title) => {
  if (!title) {
    return (movieRecommendation.innerHTML = `Enter movie name to search for movie`);
  }
  const res = await fetch(
    //   enter your api key to work the app properly in your local environment
    `https://www.omdbapi.com/?apikey=['enter_api_key']&s=${title}`
  );
  const data = await res.json();

  if (data.Search) {
    const recommendations = data.Search.map((movie) => {
      return `<div class="blog">
              <img src="${movie?.Poster}" alt="Poster not found" class="blog-thumbnail poster" />
              <h2 class="blog-heading movie-title">${movie?.Title}</h2>
      
              <a href="https://www.imdb.com/title/${movie?.imdbID}/" target="_blank" class="btn readBlog-btn">Watch</a>
            </div>`;
    }).join('');

    movieRecommendation.innerHTML = recommendations;
  } else {
    return (movieRecommendation.innerHTML = `No movie found with title: ${title}`);
  }
};

searhBtn.addEventListener('click', (e) => {
  handleChange(search.value);
});
