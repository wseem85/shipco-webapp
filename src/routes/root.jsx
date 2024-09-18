import { Outlet, useNavigation } from "react-router-dom";
import Header from "../ui/header";
import Footer from "../ui/footer";
import Loading from "../ui/loading";
import { Box, Typography } from "@mui/material";
import { useDark } from "../contexts/modeContext";
import { useTheme } from "@emotion/react";

export default function Root() {
  const navigation = useNavigation();
  const pathName = location.pathname;
  const { dark } = useDark();
  const theme = useTheme();
  return (
    <>
      <Header />
      {navigation.state === "loading" ? <Loading /> : <Outlet />}

      {!pathName.endsWith("contacts") ? (
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
      ) : (
        <Box
          size={12}
          sx={{
            padding: "0.4rem 0.6rem",
            marginTop: "2rem",
            textAlign: "center",
            backgroundColor: dark ? "#2b2b2b" : theme.palette.primary.light,
            color: "#fff",
          }}
        >
          <Typography variant="body1" fontSize={13}>
            هذا الموقع تم تصميمه و تطويره من قبل المهندس وسيم خرما
          </Typography>
          <Typography fontSize={13}>
            اتصل بالمطور
            <span>: </span>
            <span>994875398</span>
            <span>-963+</span>
          </Typography>
          <Typography variant="body1" fontSize={13}>
            &copy; Shipping Agencies Company 2024
          </Typography>
        </Box>
      )}
    </>
  );
}
