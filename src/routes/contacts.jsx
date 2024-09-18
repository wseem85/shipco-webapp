import { Circle, Marker, Popup, Tooltip } from "react-leaflet";

import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

import Grid from "@mui/material/Grid2";
import { Box, Button, Divider, Link, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import FaxIcon from "@mui/icons-material/Fax";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useEffect } from "react";
import { useDark } from "../contexts/modeContext";
import { useTheme } from "@emotion/react";
// import { Email } from "@mui/icons-material";
export default function Contacts() {
  const { dark } = useDark();
  const theme = useTheme();
  useEffect(function () {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <Stack
      sx={{
        marginTop: "6rem",
        marginLeft: {
          xs: 1,
          sm: 2,
        },
        marginRight: {
          xs: 1,
          sm: 2,
        },
        padding: 2,
      }}
    >
      <Grid container spacing={8} justifyContent="center">
        <Grid size={12}>
          <Stack
            direction="column"
            spacing={2}
            maxWidth="600px"
            marginLeft="auto"
            marginRight="auto"
          >
            <Typography variant="h4" textAlign="center">
              شركة التوكيلات الملاحية
            </Typography>
            <Typography>
              تضع بين أيديكم خلاصة خبرتها في مجال الوكيل الملاحي عبر مسيرة عمل
              ممتدة لما يقارب خمسين عام ادت خلالها الشركة خدمات الوكيل الملاحي
              لعشرات الآلاف من السفن التي أمت المرافئ السورية
            </Typography>
            <Stack
              sx={{
                justifyContent: "center",
              }}
            >
              <Divider
                sx={{
                  width: "50%",
                  display: "inline-block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <div id="map">
            <MapContainer
              center={[35.53168, 35.79011]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ minHeight: "400px" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[35.512283, 35.772964]}>
                <Popup>
                  شارع الجزائر <br /> جانب مديرية الجمارك
                </Popup>
                <Tooltip direction="top" offset={[140, -20]} opacity={1}>
                  ِشركة التوكيلات الملاحية
                </Tooltip>
                <Circle
                  center={[35.512283, 35.772964]}
                  pathOptions={{ fillColor: "blue" }}
                  radius={200}
                />
              </Marker>
            </MapContainer>
          </div>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          alignContent="center"
          rowGap={1}
          paddingRight={{
            xs: 2,
            md: 4,
            lg: 6,
          }}
        >
          <Stack direction="column" spacing={1}>
            <Stack direction="column" paddingBottom={1}>
              <Stack direction="row">
                <LocationOnIcon color="primary" />
                <Box marginRight="0.4rem" width="20%">
                  <Typography>العنوان</Typography>
                </Box>
                <Box marginRight="1.3rem" flexGrow={1}>
                  <Typography fontSize={{ xs: "14px", sm: "16px" }}>
                    شارع الجزائر ,اللاذقية , سوريا
                  </Typography>
                </Box>
              </Stack>
            </Stack>
            <Divider width="50%" />
            <Stack direction="column" paddingBottom={1}>
              <Stack direction="row" alignItems="center">
                <LocalPhoneIcon color="primary" />
                <Box marginRight="0.4rem" width="20%">
                  <Typography>ارقام التلفون</Typography>
                </Box>
                <Stack direction="column" marginRight="1.3rem" flexGrow={1}>
                  <Typography fontSize={{ xs: "14px", sm: "16px" }}>
                    963412573444+
                  </Typography>
                  <Typography fontSize={{ xs: "14px", sm: "16px" }}>
                    963412578972+
                  </Typography>
                  <Typography fontSize={{ xs: "14px", sm: "16px" }}>
                    963412552999+
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider width="50%" />
            <Stack direction="column">
              <Stack direction="row" alignItems="center">
                <MailIcon color="primary" />
                <Box marginRight="0.4rem" width="20%">
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", sm: "16px" },
                    }}
                  >
                    البريد الالكتروني
                  </Typography>
                </Box>
                <Stack direction="column" marginRight="0.5rem">
                  <Typography sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
                    ship-offc@shipcosyria.com.sy
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "12px", sm: "16px" } }}>
                    main-office@shipcosyria.com.sy
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider width="50%" />
            <Stack direction="column" paddingBottom={1}>
              <Stack direction="row" alignItems="center">
                <FaxIcon color="primary" />
                <Box marginRight="0.4rem" width="20%">
                  <Typography>فاكس</Typography>
                </Box>
                <Stack direction="column" marginRight="1.3rem" flexGrow={1}>
                  <Typography fontSize={{ xs: "14px", sm: "16px" }}>
                    963412573002+
                  </Typography>
                  <Typography fontSize={{ xs: "14px", sm: "16px" }}>
                    963412568401+
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider width="50%" />
            <Stack direction="column" paddingBottom={1}>
              <Stack direction="row" alignItems="center">
                <TelegramIcon color="primary" />
                <Box marginRight="0.4rem" width="20%">
                  <Typography>تلغرام</Typography>
                </Box>
                <Stack direction="column" marginRight="1.3rem" flexGrow={1}>
                  <Typography fontSize={{ xs: "14px", sm: "16px" }}>
                    ShipcoBot@
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column" paddingBottom={1}>
              <Stack direction="row" alignItems="center">
                <WhatsAppIcon color="primary" />
                <Box marginRight="0.4rem" width="20%">
                  <Typography>واتساب</Typography>
                </Box>
                <Stack direction="column" marginRight="1.3rem">
                  <Button
                    variant="contained"
                    sx={{
                      color: "#fff",
                      backgroundColor: dark
                        ? theme.palette.secondary.main
                        : "primary",
                    }}
                    size="medium"
                  >
                    <Link
                      fontSize="14px"
                      color={dark ? "#1a1a1a" : "#fff"}
                      href="https://wa.me/00963994875398"
                      target="_blank"
                      underline="none"
                      sx={{
                        display: "flex",

                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      راسلنا
                    </Link>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Divider width="50%" />
            <Stack direction="column" paddingBottom={1}>
              <Stack direction="row" alignItems="center">
                <FacebookIcon color="primary" />
                <Box marginRight="0.4rem" width="20%">
                  <Typography>فيسبوك</Typography>
                </Box>
                <Stack direction="column" marginRight="1.3rem">
                  <Button
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: dark
                        ? theme.palette.secondary.main
                        : "primary",
                    }}
                  >
                    <Link
                      color={dark ? "#1a1a1a" : "#fff"}
                      fontSize="14px"
                      href="https://www.facebook.com/profile.php?id=100086544482078"
                      target="_blank"
                      underline="none"
                      sx={{
                        display: "flex",

                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      صفحة الشركة
                    </Link>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Divider width="50%" />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
