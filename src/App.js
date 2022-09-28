import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./Components/History";
import Home from "./Components/Home";
import LikeVideo from "./Components/LikeVideo";
import PlayVideo from "./Components/PlayVideo";
import SearchBar from "./Components/SearchBar";
import WatchLater from "./Components/WatchLater";
import store  from "./redux/store";

function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<PlayVideo/>} />
          <Route path="/search/:inputSearch" element={<SearchBar/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/watchlater" element={<WatchLater/>} />
          <Route path="/likevideo" element={<LikeVideo/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
