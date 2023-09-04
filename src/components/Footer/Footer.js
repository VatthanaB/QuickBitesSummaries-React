import React from "react";
import "./Footer.css";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return <footer>© {year} - Quick Bite Summaries by Vatthana Boulom</footer>;
}
