// import React, { useState } from "react";

// import MoviesList from "./components/MoviesList";
// import "./App.css";

// function App() {
//   const [movies, setMovies] = useState([]);

//   function fetchMoviesHandler() {
//     fetch("https://swapi.dev/api/films/")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         const movies = data.results.map((movie) => {
//           return {
//             id: movie.episode_id,
//             title: movie.title,
//             openingText: movie.opening_crawl,
//             releaseDate: movie.release_date,
//           };
//         });

//         setMovies(movies);
//       });
//   }

//   return (
//     <React.Fragment>
//       <section>
//         <button onClick={fetchMoviesHandler}>Fetch Movies</button>
//       </section>
//       <section>
//         <MoviesList movies={movies} />
//       </section>
//     </React.Fragment>
//   );
// }

// export default App;

//----------------------------------------------------------------------

import React, { useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import IsLoading from "./components/IsLoading";

function App() {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    try {
      setIsloading(true);
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        setError(response.status + " " + response.statusText);
        throw new Error(response.status + " " + response.statusText);
      }
      const data = await response.json();
      const movies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });

      setMovies(movies);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      console.log(error);
    }
  }
  // if (isloading) {
  //   return <IsLoading />;
  // }

  let content = <p>Click Above to Request Movies</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isloading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {isloading && <p>Loading ...</p>}
        {!isloading && movies.length === 0 && !error && <p></p>}
        {!isloading && movies.length > 0 && } */}
        {/* {!isloading && error && <p>{error}</p>} */}
        {content}

        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
