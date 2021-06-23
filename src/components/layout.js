import * as React from "react";
import { Link } from "gatsby";
import { main } from "../css/layout.module.css";
import "../css/mystyles.scss";

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={main}>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>{" "}
          </li>
          <li>
            <Link to='/john'>John</Link>{" "}
          </li>
          <li>
            <Link to='/inma'>Inma</Link>{" "}
          </li>
        </ul>
      </nav>
      <h1 className='title is-4'>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
