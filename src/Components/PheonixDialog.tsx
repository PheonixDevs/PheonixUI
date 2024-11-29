import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

interface DialogModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  entity?: string;
  entityname?: string;
  textTitle?: string; 
  subText?:  string;
  text?: string;
  height?: string;
  width?: string;
}

const PheonixDialog: React.FC<DialogModalProps> = ({
  open,
  onClose,
  onConfirm,
  entity,
  entityname,
  textTitle,
  subText,
  text,
  width = "auto",
  height = "auto",
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#fff",
          color: "rgba(0, 0, 0, 0.87)",
          boxShadow:
            "0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)",
          position: "relative",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          height: height,
          width:width,
          padding: "16px",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "rgba(0, 0, 0, 0.87)",
          fontFamily: "Roboto",
          fontWeight: 700,
          fontSize: "18px",
          padding: "0",
          marginBottom: "8px",
          position: "relative",
          textAlign: "center",
        }}
      >
        {textTitle}
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "14px",
          color: "rgba(0, 0, 0, 0.87)",
          letterSpacing: "0.15px",
          fontWeight: 400,
          fontFamily: "Roboto",
          padding: "0",
          marginBottom: "16px",
        }}
      >
       <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            color: "#1B2435",
            textAlign: "center",
          }}
        >
          {subText} <br />
          {entityname} - {entity}'s {text}
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0",
        }}
      >
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            color: "#181D8C",
            backgroundColor: "#ffffff",
            fontWeight: 500,
            textTransform: "uppercase",
            fontSize: "14px",
            border: "2px solid #181D8C",
            borderRadius: "8px",
            marginBottom: "8px",
            marginRight: "8px",
            padding: "6px 16px",
            width: "84px",
            height: "36px",
            "&:hover": {
              backgroundColor: "#FFFFFF",
              color: "#181D8C",
              border: "2px solid #181D8C",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#181D8C",
            fontWeight: 500,
            textTransform: "uppercase",
            fontSize: "14px",
            borderRadius: "8px",
            marginBottom: "8px",
            marginRight: "8px",
            padding: "6px 16px",
            width: "84px",
            height: "36px",
            "&:hover": {
              backgroundColor: "#181D8C",
              color: "#FFFFFF",
            },
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PheonixDialog;