import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { PlaceholderItemOne } from "../Sections/PlaceholderItemOne";

export const Navigation = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="item-one" element={<PlaceholderItemOne />} />
      <Route path="item-two" element={<></>} />
      {/* No match - create page that brings user back to the main menu */}
      <Route path="*" element={<></>} />
    </Routes>
  );
};
