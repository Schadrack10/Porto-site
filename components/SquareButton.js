import { Button } from "@mui/material";

function SquareButton({ text }) {
    return (
      <Button
        variant="filled"
        sx={{
          color: "#eee",
          fontWeight: "600",
          margin: "0 4px",
          borderRadius: "0px",
          background: "rgba(1,1,1,0.5)",
        }}
      >
        {text}
      </Button>
    );
  }

  export default SquareButton