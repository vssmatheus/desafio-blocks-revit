import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import Layout from "./Common/Layout/Layout.component";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;