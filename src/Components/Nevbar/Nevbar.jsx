import style from "./Nevbar.module.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageComponent from "../Images/ImageComponent";

function Nevbar() {
  return (
    <>
      <div className={style.navbar}>
        <nav className="navbar bg-white">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <ImageComponent className="Logo-img"></ImageComponent>
            </a>
            <form className={style.space}>
              <Link to="/Committies" className="text-decoration-none">
                Public View
              </Link>
              <button
                className={`btn btn-primary ${style.buttonSpacing}`}
                type="submit"
              >
                Need Help?
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nevbar;
