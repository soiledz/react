import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsBar from "./FriendsBar/FriendsBar";

const Navbar = (props) => {
    return (
        <div className={s.navbar}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='settings' activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            </nav>
            <div className={s.friends}>
                <h2>Friends</h2>
                <div>
                </div>
            </div>
        </div>
    )
}


export default Navbar;
