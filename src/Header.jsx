//rfce
import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import "./Header.css";
import {Link} from "react-router-dom"


function Header() {
  const [inputSearch, setInputSearch] = useState('');


  return (
    <div className = "header"> 
    <div className="header__left">
    <MenuIcon/>
    <Link to="/">
    <img className="header__logo" src ="https://th.bing.com/th?id=OIP.nIcfLYESEiAWbolDoo2GXQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt=""/>
    </Link>
   
    </div>

    <div className="header__input">
    <input onChange={e=> setInputSearch(e.target.value)} placeholder = "Search" type="text" />
    <Link to={`/search/${inputSearch}`}>
    <SearchIcon className="header__inputButton" />
    </Link>
    </div>

    <div className="header__icons">
    <VideoCallIcon className='header__icon' />
    <AppsIcon className='header__icon'/>
    <NotificationsIcon className='header__icon'/>
    <Avatar className='header__icon'
    alt ="Khushi Satija"
    src="https://th.bing.com/th/id/OIP.QWm2C-9FpKCH-tTlHSSeKQAAAA?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
    </div>
    </div>
  )
}

export default Header;
