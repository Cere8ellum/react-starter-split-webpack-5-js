import commonStyles from "../../assets/styles/common.scss";
import styles from "./header.scss";
import React from "react";
import { NavLink} from "react-router-dom";
import Logo from "../../components/Logo/logo";
import { ROUTES } from "../../routes/constants";


function Header() {

  return (
    <header>
      <div className={commonStyles.container}>
        <nav className={styles.content}>
          <NavLink to={ROUTES.HOME}>
            <Logo />
          </NavLink>

          <div className={styles.right}>
            <NavLink to={ROUTES.LOGIN}>Login</NavLink>
            <NavLink to={ROUTES.NEWS}>News</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
