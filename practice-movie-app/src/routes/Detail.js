import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    // useParams()로 parameters의 id를 받아올 수 있다.
    // 이것은 더욱 생산적으로 url을 불러올 수 있다.
    // url의 상세한 정보를 알려준다.
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then(response => response.json())
            .then(json => {
                setMovie(json.data.movie);
                setLoading(false);
            })
    }, [])
    console.log(movie)
    return (
        <div>
            {loading ?
                <h1>loading...</h1>
                :
                <div>
                    <h1>Detail</h1>
                    <div>
                        <div style={{ float: "left" }}>
                            <img src={movie.large_cover_image} alt={movie.title} />
                        </div>
                        <h2>{movie.title}</h2>
                    </div>
                </div>
            }
        </div>
    )
}

export default Detail;