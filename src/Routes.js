import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./Common/Loading/Loading.component";

const Catalogo = lazy(() => import('./modules/Catalogo/Catalogo.component'));

const AppRoutes = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route exact path="/" element={<Catalogo />} />
                </Routes>
            </Suspense>
        </>
    )
}
export default AppRoutes;