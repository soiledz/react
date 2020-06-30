import React from "react";
import s from './FriendsBar.module.css'
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {
    let path = "/friends/" + props.id;

    return <div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const FriendsBar = (props) => {

    return (
        <div>
            <div className={s.item}>
                <img src="images/avatar.jpg" alt="avatar"/>
                <img src="images/avatar.jpg" alt="avatar"/>
                <img src="images/avatar.jpg" alt="avatar"/>
            </div>
            <div>
                <FriendsItem name="Dmitrych" id="1"/>

            </div>
        </div>
    )
}

export default FriendsBar;