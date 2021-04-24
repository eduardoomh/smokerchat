import React, { useEffect } from "react";
import useFirebase from "hooks/useFirebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { rutas, noLogin } from "router/Router";


export default function Navegacion() {
    const { user } = useFirebase();


    useEffect(() => {

    }, [user])

    return (
        <Router>
            <Switch>
                {
                    user ?
                        rutas.map(ruta => (
                            <Route
                                key={ruta.path}
                                path={ruta.path}
                                exact={ruta.exact}
                                render={(props) => (
                                    <ruta.layout>
                                        <ruta.component {...props} />
                                    </ruta.layout>

                                )}
                            />
                        )

                        )
                        :
                        noLogin.map(ruta => (
                            <Route
                                key={ruta.path}
                                path={ruta.path}
                                exact={ruta.exact}
                                render={(props) => (
                                    <ruta.layout>
                                        <ruta.component {...props} />
                                    </ruta.layout>

                                )}
                            />
                        )

                        )
                }
            </Switch>
        </Router>
    )
}


