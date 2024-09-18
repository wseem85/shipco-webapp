import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/errorpage";
const Root = lazy(() => import("./routes/root"));

const Index = lazy(() => import("./routes/index"));

const Services = lazy(() => import("./routes/services"));

const Fees = lazy(() => import("./routes/fees"));

const Contacts = lazy(() => import("./routes/contacts"));

import { createTheme, ThemeProvider } from "@mui/material";
const Branches = lazy(() => import("./routes/branches"));

import { useDark } from "./contexts/modeContext";
import Loading from "./ui/loading";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "branches",
        element: <Branches />,
      },
      {
        path: "fees",
        element: <Fees />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

function App() {
  const { dark } = useDark();
  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      primary: {
        main: dark ? "#fff" : "#043741",
      },
      secondary: {
        main: "#e4b71b",
      },
    },
    typography: {
      fontFamily: [
        "Cairo",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    fontSize: 14,
    htmlFontSize: 14,
  });
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
