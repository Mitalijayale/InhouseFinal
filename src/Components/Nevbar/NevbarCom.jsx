import style from "./Nevbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageComponent from "../Images/ImageComponent";

function NevbarCom() {
  return (
    <>
      <div className={style.navbar}>
        <nav class="navbar bg-white">
          <div class="container-fluid">
            <a className="navbar-brand" href="#">
              <ImageComponent className="Logo-img"></ImageComponent>
            </a>
            <form class={style.space}>
              <button
                class={`btn btn-primary ${style.buttonSpacing}`}
                type="submit"
              >
                Authority
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NevbarCom;
