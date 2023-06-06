import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import DetailCharacter from "../components/view/DetailCharacter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      }
    ]
  },
  {
    path: "/character/:charId",
    element: <DetailCharacter />
  }
]);

export default router;
