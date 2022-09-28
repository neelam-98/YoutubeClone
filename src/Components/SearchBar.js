import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import SideBar from "./SideBar";
import "../Style/App.css"

function SearchBar() {

    const {inputSearch} = useParams();
    console.log("search data",inputSearch)
    const [data,setData] = useState([]);
    
    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=title&q=${inputSearch}&safeSearch=none&key=AIzaSyDHV7y5qmz38WLa3qc8r1uu0t_5welKiGg`)
          .then(response => {
            console.log("Search bar api",response.data.items);
            setData(response.data.items);
          })
          .catch(error => {
            console.log(error);
          })
        }, [data])

  return (
    <> 
      <Header/>
      <div className = "searchbar_sidebar">
      <SideBar/>
        <div className="searchBlock">
          <br/><br/>
            {
              data && data.length>0 &&         
              data.map((listingItem) => {
              console.log(listingItem);

              const image = listingItem.snippet.thumbnails.medium.url;
              const title = listingItem.snippet.channelTitle;
              
              return(
                  <>
                      <div className="card">
                        <img src={image} alt="#" width={400} height={200} className="search_img"/> 
                        <h1 className="search_heading">{title}</h1>
                      </div>
                  
                  </>
                )
              })
            }
        <br/><br/>
      </div>
    </div>
    </>
  );
}

export default SearchBar;

