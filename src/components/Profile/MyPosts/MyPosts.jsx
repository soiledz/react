import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {InputType} from "../../Common/FormControls/FormsControls";

const MyPosts = React.memo(props => {
    let postsElements =
        props.posts.map(p => <Post message={p.post} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <AddNewPostRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

const maxLength10 = maxLengthCreator(10);

const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={InputType} typeFild={"textarea"}
                       placeholder={"Enter your post"}
                       name={"newPostText"}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostRedux = reduxForm({form: "ProfileAddNewPostForm"})(addNewPostForm);

export default MyPosts;
