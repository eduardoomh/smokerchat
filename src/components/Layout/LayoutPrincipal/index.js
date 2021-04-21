import React from "react";
import Menu from "components/reutilizables/Menu";
import Footer from "components/reutilizables/Footer";
import {MainStyle} from "./styles.js";

export default function LayoutPrincipal(props){
    const {children} = props;
    return(
        <div>
            <Menu />
            <MainStyle>
                {children}
            </MainStyle>
            <Footer />
        </div>
    )
}