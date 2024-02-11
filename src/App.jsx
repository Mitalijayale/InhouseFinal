import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nevbar from "./Components/Nevbar/Nevbar";
import Login from "./Components/LoginForm/Login";
import ImageLogin from "./Components/Images/Imagelogin";
import Committies from "./Components/CommittiesInfo/Committies";
import Resetpass from "./Components/ResetPass/ResetPass";
import styles from "./AppComponent.module.css";

function App() {
  console.log("Rendering App component");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nevbar />
              <div className={styles.background}>
                <div className={styles.log}>
                  <div className={styles.imagelogo}>
                    <ImageLogin />
                  </div>
                  <Login />
                </div>
              </div>
            </>
          }
        />
        <Route path="/committies" element={<Committies />} />
        <Route path="/resetpass" element={<Resetpass />} />
      </Routes>
    </Router>
  );
}

export default App;
