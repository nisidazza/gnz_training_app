import React, { useEffect, useState } from "react";
import { SplashScreen } from "./SplashScreen";
import styled from "styled-components";
import { Home } from "./Screens/Main/Home";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setInitialLoading(false), 4000);
  }, []);

  return <Wrapper>{initialLoading ? <SplashScreen /> : <Home />}</Wrapper>;
};
