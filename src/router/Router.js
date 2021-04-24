import Inicio from "pages/Inicio";
import Salas from "pages/Salas";
import Series_Peliculas from "pages/Series_Peliculas";
import Programacion from "pages/Programacion";
import Futbol from "pages/Futbol";
import ErrorComponent from "pages/Error";
import LayoutPrincipal from "components/Layout/LayoutPrincipal";
import LayoutChat from "components/Layout/LayoutChat";
import LayoutSala from "components/Layout/LayoutSala";

export const rutas = [
    {
        path: "/",
        layout: LayoutPrincipal,
        component: Inicio,
        exact: true
    },
    {
        path: "/salas",
        layout: LayoutSala,
        component: Salas,
        exact: true
    },
    {
        path: "/series_peliculas",
        layout: LayoutChat,
        component: Series_Peliculas,
        exact: true
    },
    {
        path: "/programacion",
        layout: LayoutChat,
        component: Programacion,
        exact: true
    },
    {
        path: "/futbol",
        layout: LayoutChat,
        component: Futbol,
        exact: true
    },
    {
        path: "*",
        layout: LayoutPrincipal,
        component: ErrorComponent,
        exact: true
    }

]

export const noLogin = [
    {
        path: "/",
        layout: LayoutPrincipal,
        component: Inicio,
        exact: true
    },
    {
        path: "*",
        layout: LayoutPrincipal,
        component: ErrorComponent,
        exact: true
    }

]
