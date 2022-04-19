import React, { useState } from "react";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
function Article() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
      similique repellat autem accusamus nam amet neque doloremque!
      Necessitatibus explicabo, ex nihil nisi in a ad dignissimos ut impedit
      laboriosam quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Eaque non adipisci quia aperiam laboriosam tempore quo officiis fuga totam
      quasi? Ad architecto molestiae magnam facilis minima porro, doloremque
      itaque odit!
      <Alert>hello</Alert>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => {
          setOpen(false);
        }}
        message="Note archived"
        action={
          <>
            <Button
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => {
                setOpen(false);
              }}
            >
              X
            </Button>
          </>
        }
      />
    </div>
  );
}

export default Article;
