import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled, { keyframes } from "styled-components";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    color: "white",
    fontSize: 16,
    height: 30,
    width: 40,
    padding: 5,
    background: "#a4bffd",
    cursor: "pointer",
    transition: "0.2s ease-in-out",
    "&:hover": {
      background: "coral",
    },
  },
}));

const Container = styled.div`
  height: 111px;
  position: sticky;
  top: 0;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index: 999;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  letter-spacing: 0.1em;
  width: 100%;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const loading = keyframes`
    0% {
      width: 0;
      background: #a28089;
    }

    30% {
      width: 40%;
      background: #a0d2eb;
    }

    50% {
      width: 45%;
      background: #ffa8b6;
    }

    75% {
      width: 75%;
      background: #d0bdf4;
    }

    100% {
      width: 100%;
      background: #494d5f;
    }


`;

const LoadingBar = styled.div`
  position: relative;
  /* top: 0; */
  width: 100%;
  height: 4px;
  background: #f1f1f1;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 100%;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    animation: ${loading} 4s ease-in-out;
  }
`;

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Logo>BasketShop</Logo>
          </Left>
          <Center>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search className={classes.searchIcon} />
            </SearchContainer>
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
            {/* <Language>EN</Language> */}
          </Right>
        </Wrapper>
        <LoadingBar />
      </Container>
    </>
  );
};

export default Navbar;
