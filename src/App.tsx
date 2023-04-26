import React, { useEffect, useState } from "react";
import { SplashScreen } from "./SplashScreen";
import jsonData from "./mock-data.json";
import { Navigation } from "./MainMenu/Navigation";
import styled from "styled-components";

const data = JSON.parse(JSON.stringify(jsonData));

export const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setInitialLoading(false), 4000);
  }, []);

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
  `;

  return (
    <Wrapper>{initialLoading ? <SplashScreen /> : <Navigation />}</Wrapper>
  );
};
