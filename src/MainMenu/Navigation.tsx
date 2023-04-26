import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="item-one" element={<></>} />
        <Route path="item-two" element={<></>} />
        {/* No match - create page that brings user back to the main menu */}
        <Route path="*" element={<></>} />
      </Route>
    </Routes>
  );
};
