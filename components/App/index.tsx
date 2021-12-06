import React from "react";
import MaterialButton from "@material-ui/core/Button";
import { Container, Button, TextView, TextTitle } from "./style";

const App = () => (
  <Container>
    <TextView>Fanny Andersson</TextView>
    <TextTitle>Software Engineer</TextTitle>
    <div style={{ width: "150px" }}>
      <img src="https://via.placeholder.com/150" />
      <Button color="blue"> github </Button>{" "}
      <Button color="blue"> instagram </Button>
      <Button color="blue"> linkedin </Button>
      <MaterialButton color="primary"> Some Material Button</MaterialButton>
    </div>
  </Container>
);

export default App;
