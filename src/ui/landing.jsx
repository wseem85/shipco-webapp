import { Box, Grow, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import lowqualitybackground from "/lowqualitybackground.webp";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { useDark } from "../contexts/modeContext";
const contents = [
  "تتولى الشركة تقديم جميع الخدمات اللازمة للسفن وناقلات النفط التي تؤم الجمهورية العربية السورية. وخصوصا أعمال الاستقبال و الترحيل , وتموين السفن ,وخدمة المسافرين و الإشراف على نقل البضائع من السفن إلى الرصيف و بالعكس وجميع الخدمات البحرية اللازمة التي تتعاطاها عادة وكالات خدمات السفن",
  "هي إحدى مؤسسات القطاع العام ذات الطابع الاقتصادي أحدثت بموجب المرسوم رقم 347 لعام1969 وتعود بكاملها للقطاع العام وترتبط بوزارة النقل بموجب المرسوم التشريعي رقم 93 لعام 1974 وهي شركة تنطبق عليها أحكام القانون رقم 2 لعام 2005",

  "شركة التوكيلات الملاحية هي شركة حكومية سورية تقع الادارة العامة للشركة في مدينة اللاذقية ولدينا فروع في كل من اللاذقية و بانياس و طرطوس تتبع كلها لادارة الشركة ",
  "شركة التوكيلات الملاحية تضع بين أيديكم خلاصة خبرتها في مجال الوكيل الملاحي عبر مسيرة عمل ممتدة لما يقارب خمسين عام ادت خلالها الشركة خدمات الوكيل الملاحي لعشرات الآلاف من السفن التي أمت المرافئ السورية",
];
export default function Landing({ src }) {
  const [content, setContent] = useState(
    "تتولى الشركة تقديم جميع الخدمات اللازمة للسفن وناقلات النفط التي تؤم الجمهورية العربية السورية. وخصوصا أعمال الاستقبال و الترحيل , وتموين السفن ,وخدمة المسافرين و الإشراف على نقل البضائع من السفن إلى الرصيف و بالعكس وجميع الخدمات البحرية اللازمة التي تتعاطاها عادة وكالات خدمات السفن"
  );
  const [source, setSource] = useState(lowqualitybackground);
  const theme = useTheme();
  const { dark } = useDark();
  const shuffle = useCallback(() => {
    // const index = Math.floor(Math.random() * contents.length);
    const index =
      contents.indexOf(content) < contents.length - 1
        ? contents.indexOf(content) + 1
        : 0;
    setContent(contents[index]);
  }, [content]);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 10000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSource(src);
  }, [src]);
  return (
    <Box
      sx={{
        backgroundImage: `url(${source})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        height: {
          xs: "calc(100vh - 56px)",
          sm: "calc(100vh - 64px)",
        },
        top: { xs: "56px", sm: "64px" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: `rgba(0,0,0,0.6)`,
        }}
      ></Box>
      <Box
        paddingTop={6}
        paddingBottom={6}
        color="#fff"
        sx={{
          position: "absolute",
          top: {
            xs: "34%",
            sm: "50%",
          },
          transform: {
            xs: "translateY(-34%)",
            sm: "translateY(-50%)",
          },
          width: {
            xs: "100%",
            sm: "80%",
          },
          left: {
            xs: 0,
            sm: "10%",
          },
          height: {
            xs: 380,
            sm: 300,
          },
          backgroundColor: dark
            ? "rgba(255, 255, 255,0.2)"
            : `rgba(63,125,136,0.4)`,
        }}
      >
        <Stack spacing={2} paddingTop={4} paddingBottom={4}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "1.6rem",
              fontWeight: 600,
              lineHeight: "1.5",
              textAlign: "center",
            }}
          >
            شركة التوكيلات الملاحية ترحب بكم ...
          </Typography>
          <Grow
            key={content}
            in
            direction="left"
            width="100%"
            timeout={1500}
            sx={{
              backgroundColor: dark ? "#222" : "primary.main",
              padding: 2,
            }}
          >
            <Typography
              variant="body"
              sx={{
                backgroundColor: theme.palette.primary.main,

                padding: "1rem 1.3rem",
                textAlign: "center",
                fontSize: {
                  xs: "0.8rem",
                  sm: "1rem",
                },
              }}
            >
              {content}
            </Typography>
          </Grow>
        </Stack>
      </Box>
    </Box>
  );
}
Landing.propTypes = {
  src: PropTypes.string,
};
