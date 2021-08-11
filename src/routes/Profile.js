import React from "react";
import { authService } from "fbase";
import { useHistory } from "react-router-dom";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
    const history = useHistory();
    const onLogOutCliak = () => {
        authService.signOut();
        history.push("/");
    };
    return (
        <>
             <button onClick = {onLogOutCliak}> Log Out </button>
        </>
    );
};