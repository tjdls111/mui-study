import React from "react";
import { styled } from "@mui/system";

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
    </>
  );
}

export default Nav;
