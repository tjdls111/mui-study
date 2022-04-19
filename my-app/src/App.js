import react, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Container, Grid } from "@mui/material";

function App() {
  const [value, setValue] = useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <Container fixed>
        <Header />
        <Grid container>
          <Grid item xs={2}>
            <Nav />
          </Grid>
          <Grid item xs={10}>
            <Article />
          </Grid>
        </Grid>
        <ButtonGroup>
          <Button variant="outlined">Create</Button>
          <Button variant="outlined">Update</Button>
        </ButtonGroup>
        <Button variant="outlined" color="warning">
          Delete
        </Button>
      </Container>
    </div>
  );
}

export default App;
