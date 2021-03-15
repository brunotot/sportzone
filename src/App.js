import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Index from "./components/index/Index";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { UserContext } from "./contexts/UserContext";
import { PrivateRoute } from "./routes/PrivateRoute";

export default function App() {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <Router>
        <UserContext.Provider value={providerValue}>
          <Header />
          <div className="wrapper">
            {/*<PrivateRoute path="/" exact component={Index} />*/}
            <Route path="/" exact component={Index} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
          </div>
          <Footer />
        </UserContext.Provider>
      </Router>
    </>
  );
}
