import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import styled from "styled-components";
import Icon from "./a.jpg";

const Container = styled.div`
  background-color: #aaaaaa;
  border: 1px solid blue;
`;

const Button = styled.button`
  color: red;
`;

export default function App({ page }) {
  const [page_, setPage] = useState(page);
  useEffect(() => {
    // 뒤로 가기 이벤트
    window.onpopstate = (event) => {
      // event는 history
      setPage(event.state);
    };
  }, []);
  function onChangePage(e) {
    const newPage = e.target.dataset.page;
    window.history.pushState(newPage, "", `/${newPage}`);
    setPage(newPage);
  }
  const PageComponent = page_ === "home" ? Home : About;

  return (
    <Container>
      <Button data-page="home" onClick={onChangePage}>
        Home
      </Button>
      <button data-page="about" onClick={onChangePage}>
        About
      </button>
      <div>
        <PageComponent />
      </div>
      <img src={Icon} />
    </Container>
  );
}
