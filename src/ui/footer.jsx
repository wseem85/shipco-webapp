import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import LinkIcon from "@mui/icons-material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTheme } from "@emotion/react";
import { useDark } from "../contexts/modeContext";
export default function Footer() {
  const theme = useTheme();

  const { dark } = useDark();
  return (
    <footer style={{ marginTop: "2rem" }}>
      <Box
        flexGrow={1}
        sx={{
          minHeight: 200,
          backgroundColor: dark ? "#2b2b2b" : theme.palette.primary.light,
          color: "#fff",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: {
            xs: "0.5rem",
            sm: "1rem",
            lg: "1.3rem",
          },
          paddingRight: {
            xs: "0.5rem",
            sm: "1rem",
            lg: "1.3rem",
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }} height={{ sm: "164px" }}>
            <Stack
              spacing={1}
              marginBottom={2}
              sx={{
                minHeight: {
                  sm: "164px",
                  textAlign: "center",
                },
              }}
            >
              <Typography variant="h6" fontSize={18}>
                عناوين و ارقام اتصال
              </Typography>

              <Stack direction="row" gap={1} justifyContent="center">
                <MyLocationIcon color="#fff" />
                <span style={{ fontSize: "14px" }}>
                  شارع الجزائر , اللاذقية , سوريا
                </span>
              </Stack>

              <Stack direction="row" gap={1} justifyContent="center">
                <QueryBuilderIcon color="#fff" />
                <span style={{ fontSize: "14px" }}>
                  ساعات العمل من 08:00 حتى 15:00
                </span>
              </Stack>

              <Stack
                direction="row"
                gap={1}
                alignItems="center"
                justifyContent="center"
              >
                <PhoneInTalkIcon color="#fff" />
                <Stack direction="column">
                  <span style={{ fontSize: "14px" }}>00963412573444</span>
                  <span style={{ fontSize: "14px" }}>00963412578972</span>
                  <span style={{ fontSize: "14px" }}>00963412552999</span>
                </Stack>
              </Stack>
            </Stack>
            <Divider color="#fff" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Stack
              justifyContent="center"
              spacing={1}
              marginBottom={2}
              sx={{
                minHeight: {
                  sm: "164px",
                },
              }}
            >
              <Typography variant="h6" fontSize={18} textAlign="center">
                مواقع ذات صلة
              </Typography>

              <Link
                color="#fff"
                fontSize="14px"
                href="https://www.mot.gov.sy/web/main.php"
                target="_blank"
                underline="hover"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <LinkIcon />
                وزارة النقل السورية
              </Link>
              <Link
                color="#fff"
                fontSize="14px"
                href="https://www.pministry.gov.sy/"
                target="_blank"
                underline="hover"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <LinkIcon />
                موقع رئاسة مجلس الوزراء
              </Link>
              <Link
                color="#fff"
                fontSize="14px"
                href="http://www.gdp.gov.sy/ar/"
                target="_blank"
                underline="hover"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <LinkIcon />
                المديرية العامة للموانئ
              </Link>
            </Stack>
            <Divider color="#fff" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Stack
              spacing={1}
              marginBottom={2}
              sx={{
                minHeight: {
                  sm: "164px",
                },
              }}
            >
              <Typography variant="h6" fontSize={18} textAlign="center">
                الشركة على مواقع التواصل
              </Typography>

              <Link
                color="#fff"
                fontSize="14px"
                href="https://www.facebook.com/profile.php?id=100086544482078"
                target="_blank"
                underline="hover"
                sx={{
                  display: "flex",

                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <FacebookIcon />
                فيسبوك
              </Link>
              <Typography
                variant="body2"
                color="#fff"
                fontSize="14px"
                href="#"
                underline="hover"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <TelegramIcon />
                @ShipcoBot
              </Typography>
              <Link
                color="#fff"
                fontSize="14px"
                href="https://wa.me/00963994875398"
                target="_blank"
                underline="hover"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <WhatsAppIcon />
                واتساب
              </Link>
            </Stack>
            <Divider color="#fff" />
          </Grid>
        </Grid>
      </Box>
      <Box
        size={12}
        sx={{
          padding: "0.4rem 0.6rem",
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
    </footer>
  );
}
