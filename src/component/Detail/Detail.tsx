import "./detail.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Detail() {
  return (
    <div>
      <p>Ini Detail</p>
      <Link to={"/"}>
        <button>Kembali</button>
      </Link>
    </div>
  );
}
