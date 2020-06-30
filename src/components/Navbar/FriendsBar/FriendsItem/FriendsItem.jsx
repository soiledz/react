import React from "react";
import s from './../FriendsBar.module.css';

const FriendsItem = (props) => {
    let path = "/friends/" + props.id;

    return <div className={s.friends + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default FriendsItem;