import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

const MyButton = styled(Button)({
  background: "pink",
  border: "red 1px solid",
});

const MyList = styled("li")({
  color: "pink",
  background: "black",
});

function Nav() {
  return (
    <>
      <ol>
        <MyList>html</MyList>
        <MyList>css</MyList>
        <MyList>js</MyList>
      </ol>
      <MyButton>버튼</MyButton>
      <Button sx={{ background: "pink", border: "red 1px solid" }}>
        버튼2
      </Button>
    </>
  );
}

export default Nav;
