import React, { useState } from "react";
import { Visibility, Segment, Menu } from "semantic-ui-react";
import { Media } from "../Layout";

const DesktopContainer = ({children}) => {
    const [fixed, setFixed] = useState(false);
    const hideFixedMenu = () => {
        setFixed(false);
    }
    const showFixedMenu = () => {
        setFixed(true);
    }

    return (
        <React.Fragment>
            <Media greaterThan='mobile'>
            <p>Desktop</p>
        </Media>
        <Media at='mobile'>
            <p>Mobile</p>
        </Media>
        </React.Fragment>
    );
}

export default DesktopContainer;