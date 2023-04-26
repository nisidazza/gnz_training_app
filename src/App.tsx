import React, { useEffect, useState } from "react";
import { SplashScreen } from "./SplashScreen";
import { Container } from "@mui/material";
import jsonData from "./mock-data.json";
import { Navigation } from "./MainMenu/Navigation";

const data = JSON.parse(JSON.stringify(jsonData));

export const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setInitialLoading(false), 4000);
  }, []);

  return (
    <Container maxWidth="lg" disableGutters>
      {initialLoading ? <SplashScreen /> : <Navigation />}
    </Container>
  );
};
