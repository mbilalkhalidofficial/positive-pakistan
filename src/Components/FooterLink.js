import React from "react";
import { Link } from "react-router-dom";

export default function FooterLink({ label, path }) {
  return (
    <Link to={path} className="footer__link">
      {label}
    </Link>
  );
}
