import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail";

// App.js는 더 이상 영화 정보를 바로 보여주는 곳이 아니라
// router를 랜더링하는 곳이다.
// router는 url을 보고있는 컴포넌트이다. 따라서 App.js에서는 url에 따라 보여주는 컴포넌트가 달라진다.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
