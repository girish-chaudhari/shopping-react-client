import React from "react";
import {
  Paper,
  Container,
  Box,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ElectronicsProduct = () => {
  return (
    <div>
      <Container fluid>
        <Grid container>
          <Link to="/singleview">
            <Grid item md={3}>
              <Paper
                elevation={3}
                p={2}
                my={2}
                component={Box}
                sx={{ width: 250 }}
              >
                <Box position="relative" display="flex" justifyContent="center">
                  <img
                    src="https://rukminim1.flixcart.com/image/416/416/kjrh2fk0/mobile/n/c/d/samsung-galaxy-fold-2-sm-f916bznainu-original-imafz9hgamqbzaeq.jpeg?q=70"
                    alt=""
                    style={{
                      maxHeight: "180px",
                      maxWidth: "180px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Box my={1}>
                  <Typography
                    component={Box}
                    fontSize={12}
                    // sx={{
                    //   textOverflow: "ellipsis",
                    //   width: 170,
                    //   overflow: "hidden",
                    //   whiteSpace: "nowrap",
                    // }}
                  >
                    SAMSUNG Galaxy Fold 2 (Mystic Bronze, 256 GB) (12 GB RAM)
                  </Typography>
                  <Typography color="muted.main" fontSize={10}>
                    Samsung
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    bgcolor="success.main"
                    color="white"
                    px={1}
                    fontSize={12}
                    borderRadius={1}
                    display="flex"
                    alignItems="center"
                  >
                    <Star
                      style={{
                        height: "15px",
                        width: "15px",
                        marginRight: "4px",
                      }}
                    />
                    5.4
                  </Typography>
                  <Typography color="#bcbcbc" fontSize={12}>
                    (12455)
                  </Typography>
                </Box>
                <Box
                  py={1}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>
                    RS <span> 12,000</span>
                  </Typography>
                  <Typography color="gray" fontSize={12}>
                    Crazy deal
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Link>
        </Grid>
      </Container>
    </div>
  );
};

export default ElectronicsProduct;
