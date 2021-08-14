import React from "react";

export function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="!#">react</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
