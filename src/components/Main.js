import React, { useState } from "react";
import Menu from "../model/menu";
import { Container, Grid, Box } from "@mui/material";
import Layout from "../components/layout";
import logo from "../images/JP-logoo.svg";
import { Context } from "../index";
import $ from "jquery";
import "../styles/Main.css";
import { getDatabase, ref, set } from "firebase/database";

function Main() {
  const menu = new Menu();
  const db = getDatabase();
  const [title, setTitle] = useState(menu.titles[0]);

  $(".nav-link").on("click", function () {
    $(".active-link").removeClass("active-link");
    $(this).addClass("active-link");
  });

  return (
    <Container className="main">
        <title>Menu</title>
        <Box
          sx={{
            mx: 15,
            my: 2,
            maxWidth: { xs: 250, md: 150 },
          }}
          component="img"
          src={logo}
          alt="Jamie place"
        />
        <div class="navbar-container">
          <ul>
            {menu.titles.map((title, index) => (
              <li className={`nav-link ${index === 0 ? "active-link" : ""}`}>
                <a onClick={() => setTitle(title)}>{title.name}</a>
                <div class="underline"></div>
              </li>
            ))}
          </ul>
        </div>
        <Layout title={title}></Layout>
    </Container>
  );
}

export default Main;
