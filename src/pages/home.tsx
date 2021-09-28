import React from "react";
import ToDoList from "../components/ToDoList";
import { Page, Title } from "../styles/styles";

function Home() {
  return (
    <Page className="home">
      <Title>Today's List</Title>
      <ToDoList />
    </Page>
  );
}

export default Home;
