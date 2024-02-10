// // Public-View

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Committies from "./Components/CommittiesInfo/Committies";

// function App() {
//   console.log("Rendering App component");
//   return (
//     <>
//       <Committies></Committies>
//     </>
//   );
// }

// export default App;

// /*
// -----RESET-PASS ---
// */

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Nevbar from "./Components/Nevbar/Nevbar";
// import ImageLogin from "./Components/Images/Imagelogin";
// import style from "./AppComponent.module.css";
// import ResetPass from "./Components/ResetPass/ResetPass";

// function App() {
//   console.log("Rendering App component");
//   return (
//     <>
//       <Nevbar></Nevbar>
//       <div className={style.background}>
//         <div className={style.log}>
//           <div className={style.imagelogo}>
//             <ImageLogin></ImageLogin>
//           </div>
//           <ResetPass></ResetPass>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// // // -----LOGIN ---

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Nevbar from "./Components/Nevbar/Nevbar";
// import Login from "./Components/LoginForm/Login";
// import ImageLogin from "./Components/Images/Imagelogin";
// import style from "./AppComponent.module.css";

// function App() {
//   console.log("Rendering App component");
//   return (
//     <>
//       <Nevbar></Nevbar>
//       <div className={style.background}>
//         <div className={style.log}>
//           <div className={style.imagelogo}>
//             <ImageLogin></ImageLogin>
//           </div>
//           <Login></Login>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// App.jsx
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Nevbar from "./Components/Nevbar/Nevbar";
// import Login from "./Components/LoginForm/Login";
// import ImageLogin from "./Components/Images/Imagelogin";
// import Committies from "./Components/CommittiesInfo/Committies";
// import Reset from "./Components/ResetPass/ResetPass";
// import style from "./AppComponent.module.css";

// function App() {
//   console.log("Rendering App component");
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Nevbar />
//               <div className={style.background}>
//                 <div className={style.log}>
//                   <div className={style.imagelogo}>
//                     <ImageLogin />
//                   </div>
//                   <Login />
//                 </div>
//               </div>
//             </>
//           }
//         />
//         <Route path="/committies" element={<Committies />} />
//         <Route path="/resetpass" element={<Reset />} />
//         {/* Add more routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nevbar from "./Components/Nevbar/Nevbar";
import Login from "./Components/LoginForm/Login";
import ImageLogin from "./Components/Images/Imagelogin";
import Committies from "./Components/CommittiesInfo/Committies";
import Reset from "./Components/ResetPass/ResetPass";
import style from "./AppComponent.module.css";

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
              <div className={style.background}>
                <div className={style.log}>
                  <div className={style.imagelogo}>
                    <ImageLogin />
                  </div>
                  <Login />
                </div>
              </div>
            </>
          }
        />
        <Route path="/committies" element={<Committies />} />
        <Route path="/resetpass" element={<Reset />} />{" "}
        {/* Route for ResetPass */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
