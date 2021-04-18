import Inicio from "paginas/Inicio";
import Salas from "paginas/Salas";
import Videojuegos from "paginas/Videojuegos";
import Programacion from "paginas/Programacion";
import Futbol from "paginas/Futbol";
import Error from "paginas/Error";
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
        path: "/videojuegos",
        layout: LayoutChat,
        component: Videojuegos,
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
        component: Error,
        exact: true
    }

]