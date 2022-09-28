import React, { useState } from 'react';
import {MenuOutlined, SearchOutlined, VideoCameraOutlined, BellOutlined , AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import "../Style/Header.css";
import { Link } from 'react-router-dom';

function Header () {

  const [inputSearch, setInputSearch] = useState('');
  console.log("header search",inputSearch)

    return (
        <>
        <div className='header'>
          <div className="header__left">
            <MenuOutlined/>
            <Link to = "/">
              <img 
                className='header__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                alt=''
              />
              </Link>
          </div>

            <div className="header__center">
                <input type='text' placeholder='search' onChange={(e) => setInputSearch(e.target.value)} value={inputSearch}/>
                <Link to={`/search/${inputSearch}`}>
                  <SearchOutlined className='header__searchbutton'/>
                </Link>
            </div>

            <div className="header__right">
                <VideoCameraOutlined className='header__icon'/>
                <AppstoreOutlined className='header__icon'/>
                <BellOutlined className='header__icon'/>
                <UserOutlined/>
            </div>
        </div>
    </>
  );
}

export default Header;
