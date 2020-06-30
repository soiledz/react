import React from "react";
import s from "./Friends.module.css";
import {NavLink} from "react-router-dom";

const FriendsAva = (props) => {
    let path = '/friends/' + props.id;
    return <div className={s.friends + ' ' + s.active}>
        <NavLink to={path}>{props.ava}</NavLink>
    </div>
}

const FriendsName = (props) => {
    let path = '/friends/' + props.id;
    return <div className={s.friends}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Friends = (props) => {
    let friendsAvatar = props.friendsList.map(a => <FriendsAva ava={a.ava} id={a.id}/>);
    let friendsName = props.friendsList.map(n => <FriendsName name={n.name} id={n.id}/>);

    return (
        <div className={s.friends}>
            <div>
                {friendsAvatar}
            </div>
            <div>
                {friendsName}
            </div>
        </div>
    );
};
export default Friends;
