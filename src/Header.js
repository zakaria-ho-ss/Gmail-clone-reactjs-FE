import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { ArrowDropDown } from '@material-ui/icons';
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from '@material-ui/icons/Notifications';
const Header = () => {
    return (
        <div className='header' >
            <div className="header__left" >
                <IconButton> 
               <MenuIcon />
               </IconButton>
               <img src="https://www.amocrm.com/static/images/pages/integrations/logo/gmail.png" alt=""  />
            </div>
            <div className="header__middle" >
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDown className="header__inputCaret" />
                </div>
                <div className="header__right" >
                <IconButton>
                    <AppsIcon  />
                </IconButton>
                <IconButton>
                    <NotificationsIcon  />
                </IconButton>
                <Avatar/>
                </div>
        </div>
    )
}

export default Header
