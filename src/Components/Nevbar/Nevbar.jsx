import style from "./Nevbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageComponent from "../Images/ImageComponent";

function Nevbar() {
  return (
    <>
      <div className={style.navbar}>
        <nav class="navbar bg-white">
          <div class="container-fluid">
            <a className="navbar-brand" href="#">
              <ImageComponent className="Logo-img"></ImageComponent>
            </a>
            <form class={style.space}>
              <a href="/public-view" className="text-decoration-none">
                Public View
              </a>
              <button
                class={`btn btn-primary ${style.buttonSpacing}`}
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
/*
import style from "./Nevbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageComponent from "../Images/ImageComponent";

const height60 = {
  height: "60px",
};

function Nevbar() {
  return (
    <>
      <div className={style.navbar}>
        <nav className="navbar bg-white" style={height60}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <ImageComponent className="Logo-img"></ImageComponent>
            </a>
            <a href="/public-view" className="text-decoration-none">
              Public View
            </a>
            <button type="button" className="btn btn-primary btn1">
              Need Help?
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nevbar;

*/
