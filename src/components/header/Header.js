import React from "react";
import userImg from "../../assets/userImg.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className="row" id={styles.header}>
        <div
          className="col-8  d-flex flex-column justify-content-center"
          id={styles.info}
        >
          <div className={styles.infoWrapper}>
            <div className={styles.infoText}>
              <h1>Hi</h1>
              <h1>
                I'M <span>AAKASH</span>
              </h1>
              <h4>Full-stack Developer</h4>
            </div>
            <div className="mt-5" id={styles.buttonWrapper}>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                id={styles.button}
                className={styles.myworks}
              >
                My Works
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                id={styles.button}
                className={styles.hireme}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
        <div className="col-4 mt-auto">
          <div className="img">
            <img src={userImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
