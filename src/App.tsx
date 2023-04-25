import React, { useEffect, useState } from "react";
import { SplashScreen } from "./SplashScreen";

export const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setInitialLoading(false), 5000);
  }, []);

  return <>{initialLoading ? <SplashScreen /> : <p> Cleanedup React App</p>}</>;
};
