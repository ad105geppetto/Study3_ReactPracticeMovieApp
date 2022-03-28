import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// 컴포넌트 단위로 나누어 보자.
function Movie({ id, movieImg, title, summary, genres }) {
    return (
        <div>
            <img src={movieImg} alt={title} />
            {/*만약 a 태그로 하이퍼 링크를 적용하면 작동은 된다.*/}
            {/* <div><a href="/movie">{title}</a></div> */}
            {/*그러나 링크를 클릭하면 웹페이지 화면전체가 재실행(페이지 새로고침)되기에 좋지 않다.*/}
            {/*우리의 목적은 SPA를 만드는 것이기 때문이다.*/}
            <div>
                <Link to={`/movie/${id}`}>{title}</Link>
            </div>
            <p>{summary}</p>
            <ul>
                {genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    movieImg: PropTypes.string,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;