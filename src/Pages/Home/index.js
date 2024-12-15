import { Link } from "react-router";
import "./styles.css";
import React from "react";

export default function Home() {
  return (
    <div className="home-page-container">
      <div className="home-page-content">
        <Link to="/search-functionality" >
          <p>Search Functionality</p>
        </Link>
        <Link to="/accordion">
          <p>Accordion & Nested Accordion</p>
        </Link>
        <Link to="/pagination">
          <p>Pagination</p>
        </Link>
      </div>
    </div>
  );
}
