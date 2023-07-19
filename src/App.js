import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "contacts/:contactId",
        element: <h1>Duy</h1>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
