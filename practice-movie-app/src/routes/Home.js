import { useEffect, useState } from "react";
import Movie from "../components/Movie"

// 이제 컴포넌트 단위에서 스크린 또는 페이지 단위로 설계를 해보자
// react-router-dom 라이브러리를 사용하는 이유이기도 하다.
const Home = () => {
    const [loading, onLoading] = useState(true);
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
      const fetchData = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
      const json = await fetchData.json();
      setMovies(json.data.movies);
      onLoading(false);
    }
  
    useEffect(() => {
      getMovies()
    }, [])
    // 콘솔이 두번 찍히는 이유는 setMovies를 호출하고 onLoading을 호출했기 때문이다.
    console.log(movies)
    return (
      <>
        {loading ?
          <h1>loading...</h1>
          :
          <div>
            {movies.map((movie) =>
              <Movie key={movie.id} id={movie.id} movieImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres}/>
            )}
          </div>
        }
      </>
    );
}

export default Home;