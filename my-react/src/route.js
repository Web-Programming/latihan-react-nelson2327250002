import React from "react";
const Home = React.lazy(() => import("./Hello"));
const Produks = React.lazy(() => import("./Produks"));
const Register = React.lazy(() => import("./Register"));

const routes = [
    {path : "/", component : Home},
    {path : "/produks", component : Produks},
    {path : "/register", component : Register},
];

export default routes;