import './style.css'
// // import javascriptLogo from './javascript.svg'
// // import { setupCounter } from './counter.js'
//  async function load({ fetch }) {
//   const res = await fetch(
    
//     'https://api.themoviedb.org/3/movie/popular?api_key=39eb751741e0260d50b6de01d1eadcba&language=en-US&page=1'
//     );
//   const data = await res.json();
//   console.log(data);
//   if (res.ok) {
//     return {
//       props: { popular: data.results }
//     };
//   }
// }

// fetch('https://api.themoviedb.org/3/movie/popular?api_key=39eb751741e0260d50b6de01d1eadcba&language=en-US&page=1')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

async function fetchMoviesStatus() {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=39eb751741e0260d50b6de01d1eadcba&language=en-US&page=1');
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const data = await response.json();
  console.log(data);
  return data
}
fetchMoviesStatus().catch(error => {
  error.message; // 'An error has occurred: 404'
});
