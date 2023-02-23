import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SmartMail, { smartLoader } from "./SmartMail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SmartMail />,
    loader: smartLoader,
    children: [
      {
        path: "/services",
        element: <div>SERVICES</div>,
      },
      {
        path: "/strategies",
        element: <div>Strategies</div>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
