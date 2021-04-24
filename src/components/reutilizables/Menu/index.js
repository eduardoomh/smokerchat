import React from "react";
import useFirebase from "hooks/useFirebase";
import Button from "../Button";
import { DiGithubBadge } from "react-icons/di";
import { Header } from "./styles"
import useWindowSize from "hooks/useWindowSize";

export default function Menu() {
    const { width } = useWindowSize();
    const { signIn } = useFirebase();



    return (
        <Header>
            <p>
                <a
                    href="https://github.com/eduardoomh/smokerchat"
                    target="blank"
                >
                    <DiGithubBadge size={width <= 800 ? 32 : 42} />
                </a>
            </p>
            <div>
                <Button action={signIn}>Ingresar {width >= 800 && 'con Google'}</Button>
            </div>

        </Header>
    )
}