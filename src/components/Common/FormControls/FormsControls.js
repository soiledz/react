import React from "react";
import styles from "./FormsControls.module.css";
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

export const InputType = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.typeFild === "input"
                    ? <input {...input} {...props} />
                    : <textarea {...input} {...props} />
                }
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const createFields = (placeholder, name, typeField, validators, component, type, text = "") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               typeFild={typeField}
               validate={validators}
               component={component}
               type={type}/> {text}
    </div>
)