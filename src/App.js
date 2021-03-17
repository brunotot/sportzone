import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Index from "./components/index/Index";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { UserContext } from "./contexts/UserContext";
import { AuthDisabledRoute } from "./routes/AuthDisabledRoute";
import { getUser } from "./services/authService";

export default function App() {
  let currentUser = getUser();
  const [user, setUser] = useState(currentUser);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <Router>
        <UserContext.Provider value={providerValue}>
          <Header />
          <div className="wrapper">
            {/*<PrivateRoute path="/" exact component={Index} />*/}
            <Route path="/" exact component={Index} />
            <AuthDisabledRoute path="/register" exact component={Register} />
            <AuthDisabledRoute path="/login" exact component={Login} />
          </div>
          <Footer />
        </UserContext.Provider>
      </Router>
    </>
  );
}
