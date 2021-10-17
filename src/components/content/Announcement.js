import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: "100%" }} fontWeight={600}>
      <Collapse in={open}>
        <Alert
          variant="filled"
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              style={{ color: "white" }}
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Diwali Super Deal! Free Shipping on Orders Over &#8377;2000
        </Alert>
      </Collapse>
    </Box>
  );
}
