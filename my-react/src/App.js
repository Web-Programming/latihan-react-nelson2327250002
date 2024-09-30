import React from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import routes from "./route";

function App() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <div className="App">
                <h1>Universitas MDP</h1>

                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/produks" className="nav-link">Products</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/register" className="nav-link">Register</NavLink>
                                </li>
                            </ul>

                            <div className="container-fluid mt-2">
                                <Routes>
                                    {
                                        routes.map((route, i) => {
                                            const { path, component: Component } = route;
                                            return <Route key={i} path={path} element={<Component />} />;
                                        })
                                    }
                                </Routes>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Suspense>
    );
}

export default App;