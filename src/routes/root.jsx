import { Outlet, useNavigation } from "react-router-dom";
import Header from "../ui/header";
import Footer from "../ui/footer";
import Loading from "../ui/loading";
import { Box, Stack } from "@mui/material";

export default function Root() {
  const navigation = useNavigation();

  return (
    <Stack sx={{}}>
      <Header />
      {navigation.state === "loading" ? <Loading /> : <Outlet />}

      <Box
        sx={{
          position: "relative",
          top: {
            xs: "56px",
            sm: "64px",
          },
        }}
      >
        <Footer />
      </Box>
    </Stack>
  );
}
