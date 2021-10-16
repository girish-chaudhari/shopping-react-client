import React, { useState, useEffect } from "react";
import { DropdownMenu } from "../material";
import { AppBar, Container, Box, Typography } from "@mui/material";
// import "../custom/header.scss";o
import { Button } from "@mui/material";
const NavBar = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [progress, setProgress] = useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <AppBar color="secondary" position="sticky">
      <header>
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={3}
          >
            <Typography component={Box} fontSize={23} fontWeight={600}>
              BigBasket
            </Typography>
            <Box>
              <Button variant="contained" color="primary">
                <DropdownMenu
                  menu={
                    <a
                      style={{ color: "white", fontFamily: "Graphik" }}
                      className="loginButton"
                      onClick={() => setLoginModal(true)}
                    >
                      Login
                    </a>
                  }
                  menus={[
                    {
                      label: "My Profile",
                      href: "",
                      icon: null,
                    },
                    { label: "Plus Zone", href: "", icon: null },
                    { label: "Orders", href: "", icon: null },
                    { label: "Wishlist", href: "", icon: null },
                    { label: "Rewards", href: "", icon: null },
                    { label: "Gift Cards", href: "", icon: null },
                  ]}
                  firstMenu={
                    <div className="firstmenu">
                      <span>New Customer?</span>
                      <a style={{ color: "#2874f0" }}>Sign Up</a>
                    </div>
                  }
                />
              </Button>
            </Box>
          </Box>
        </Container>

        {/* <div className="dropdown">
                <a href="#" id="cart">
                  <div className="cart-group-icon">
                    <i class="fa fa-shopping-cart cart-icon"></i>
                    <span class="badge">3</span>
                  </div>
                </a>
                <div class="container">
                  <div class="shopping-cart">
                    <div class="shopping-cart-header">
                      <div className="cart-group-icon">
                        <i class="fa fa-shopping-cart cart-icon"></i>
                        <span class="badge">3</span>
                      </div>
                      <div class="shopping-cart-total">
                        <span class="lighter-text">Total:</span>
                        <span class="main-color-text">$2,229.97</span>
                      </div>
                    </div>

                    <a href="#" class="button">
                      Checkout
                    </a>
                  </div>
                </div>
              </div> */}
      </header>
    </AppBar>
  );
};

export default NavBar;
