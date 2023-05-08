import { useEffect, useState } from "react";
import styled from "styled-components";
import { Home } from "./Screens/Home";
import { SplashScreen } from "./SplashScreen";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 1.67rem;
`;

export const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setInitialLoading(false), 2000);
  }, []);

  return <Wrapper>{initialLoading ? <SplashScreen /> : <Home />}</Wrapper>;
};
