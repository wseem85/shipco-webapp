import {
  Box,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Landing from "../ui/landing";
import Heading from "../ui/heading";

import { useTheme } from "@emotion/react";
import { BarChart } from "@mui/x-charts/BarChart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { LineChart } from "@mui/x-charts";
import { useEffect } from "react";
import background from "/background.webp";
import Advantage from "../ui/advantage";
function percentage(income, transfer) {
  return Math.floor((transfer / income) * 100);
}
const rows = [
  {
    year: "2016",
    income: 1250,
    transfer: 1003,
    percentage: percentage(1250, 1003),
  },
  {
    year: "2017",
    income: 1238,
    transfer: 981,
    percentage: percentage(1238, 981),
  },
  {
    year: "2018",
    income: 1382,
    transfer: 1112,
    percentage: percentage(1382, 1112),
  },
  {
    year: "2019",
    income: 1204,
    transfer: 929,
    percentage: percentage(1204, 929),
  },
  {
    year: "2020",
    income: 2660,
    transfer: 2264,
    percentage: percentage(2660, 2264),
  },
  {
    year: "2021",
    income: 2938,
    transfer: 2346,
    percentage: percentage(2938, 2346),
  },
  {
    year: "2022",
    income: 9838,
    transfer: 8888,
    percentage: percentage(9838, 8888),
  },
];
const ships = [
  {
    year: "2016",
    shipco: 197,
    others: 855,
  },
  {
    year: "2017",
    shipco: 311,
    others: 858,
  },
  {
    year: "2018",
    shipco: 177,
    others: 1009,
  },
  {
    year: "2019",
    shipco: 215,
    others: 946,
  },
  {
    year: "2020",
    shipco: 170,
    others: 769,
  },
  {
    year: "2021",
    shipco: 176,
    others: 808,
  },
  {
    year: "2022",
    shipco: 212,
    others: 728,
  },
];

export default function Index() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(function () {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <Stack spacing={4}>
      <Landing src={background} />
      <Stack
        textAlign="center"
        sx={{
          position: "relative",
          top: "100px",
          marginBottom: "4rem",
        }}
      >
        <Heading>ما الذي يميز شركتنا ؟</Heading>
        <Grid
          container
          justifyContent="center"
          rowSpacing={2}
          columnSpacing={3}
          sx={{
            paddingLeft: {
              xs: 1,
              sm: "1.2rem",
              lg: "2rem",
            },
            paddingRight: {
              xs: 1,
              sm: "1.2rem",
              lg: "2rem",
            },
          }}
        >
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Advantage
              title="الموثوقية"
              src="icons8-trust-64.png"
              details="  باعتبارها شركة تتبع للقطاع العام وعلى اتصال ممتاز مع جميع الجهات
                العامة التي يتطلب استقبال السفن تدخلها مثل مديرية الجمارك و
                مديرية الموانئ و مديرية الصحة و غيرها من الجهات العامة ما يجعلها
                الشركة الأفضل في سوريا في مجال تأمين التواصل بين البواخر و
                الجهات الحكومية في سوريا
              "
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Advantage
              title="الخبرة"
              src="icons8-experiences-64.png"
              details="  تتمتع الشركة بالخبرة الأوسع في مجال التوكيلات البحرية على مستوى
                الجمهورية العربية السورية , قامت الشركة بمراكمة هذه الخبرات عبر
                تواجدها في سوق العمل منذ ما يقارب خمسين عام , واجهت الشركة
                خلالها ظروف عمل متنوعة بين كونها الوكيل الوحيد في الجمهورية
                العربية السورية حتى العمل مع وجود شركات خاصة منافسة
              "
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Advantage
              title="الإنتشار"
              src="icons8-spread-100.png"
              details="  تنتشر الشركة على طول السواحل السورية عبر شبكة من الفروع في
                اللاذقية و طرطوس وبانياس بحيث تؤمن تغطية كاملة لجميع المرافئ
                السورية لتتمكن من تقديم أفضل خدمة للبواخر التي ئؤم المرافئ
                السورية قبل و أثناء تواجد هذه البواخر في المرافئ السورية و أيضا
                بعد مغادرتها
              "
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Advantage
              title="طاقم العمل"
              src="icons8-teamwork-48.png"
              details="  تمتلك الشركة طواقم عمل خبيرة في جميع فروعها وهذه الطواقم مدربة
                وتمتلك المقدرات و الخبرات اللازمة لتنفيذ جميع الخدمات التي
                تقدمها الشركة بما يضمن حماية مصالح الشركات الناقلة البحرية
                وتمثيلها لدى السلطات البحرية في سوريا
              "
            />
          </Grid>
        </Grid>
      </Stack>
      <Stack
        paddingTop={4}
        paddingBottom={4}
        sx={{
          position: "relative",
          top: "100px",
        }}
      >
        <Grid
          container
          spacing={2}
          margin={{
            xs: 2,
            sm: 4,
            lg: 8,
            xl: 10,
          }}
        >
          <Grid size={12}>
            <Heading>مقاييس ومؤشرات</Heading>
          </Grid>
          <Grid size={12}>
            <Stack spacing={2} textAlign="center">
              <Typography
                variant="h5"
                color="primary"
                sx={{
                  fontSize: "1.1rem",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                  gap: "1rem",
                  display: "flex",
                }}
              >
                <CheckCircleIcon
                  color="primary"
                  variant="outlined"
                  sx={{
                    fontSize: "2rem",
                  }}
                />
                إيرادات متزايدة خلال الاعوام الاخيرة و رفد متصاعد لخزينة الدولة
              </Typography>
              <Typography variant="body2">
                بلغت الإيرادات الاجمالية لشركة التوكيلات الملاحية عام 2016 ما
                يعادل 1 مليار و 250 مليون ليرة سورية وارتفعت في العام 2020 لتبلغ
                2 مليار و 660 مليون ليرة سورية , وحققت الشركة قفزة في ايراداتها
                في العام 2022 لتبلغ 9 مليار و 838 مليون ليرة سورية .
              </Typography>
              <Divider />
              <Typography variant="body2">
                بلغ اجمالي المبلغ المحول من ايراد الشركة(فائض موازنة + ضريبة
                دخل) إلى خزينة الدولة في العام 2016 1 مليار و 3 مليون ليرة سورية
                سورية , هذه المبلغ ارتفع في العام 2018 إلى 1 مليار و 112 مليون
                ليرة سورية ووصل المبلغ المحول في العام 2022 إلى 8 مليار و 888
                مليون ليرة سورية.
              </Typography>
              <Divider />
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            alignItems="center"
            justifyContent="center"
            marginTop="auto"
            marginBottom="auto"
            lineHeight={2}
          >
            <TableContainer component={Paper}>
              <Table aria-label="simple table" size="small">
                <caption
                  style={{
                    textAlign: "center",
                    color: theme.palette.primary.dark,
                  }}
                >
                  الايرادات الاجمالية و المبالغ المحولة منها لخزينة الدولة سنويا
                </caption>
                <TableHead>
                  <TableRow>
                    <TableCell align="right">السنة الميلادية</TableCell>
                    <TableCell align="center">
                      الايرادات الاجمالية (مليون ل.س)
                    </TableCell>
                    <TableCell align="center">
                      المبلغ المحول لخزينة الدولة
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        display: {
                          xs: "none",
                          sm: "block",
                        },
                      }}
                    >
                      النسبة المئوية
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.year}>
                      <TableCell component="th" scope="row" align="right">
                        {row.year}
                      </TableCell>
                      <TableCell align="center">{row.income}</TableCell>
                      <TableCell align="center">{row.transfer}</TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          display: {
                            xs: "none",
                            sm: "block",
                          },
                        }}
                      >
                        {row.percentage}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                marginLeft: 1.2,
                marginRight: 1.2,
              }}
            >
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    label: "السنة المبلادية",

                    data: [
                      "2016",
                      "2017",
                      "2018",
                      "2019",
                      "2020",
                      "2021",
                      "2022",
                    ],
                  },
                ]}
                yAxis={[
                  {
                    label:
                      "الايراد الاجمالي و المبلغ المحول منه لخزينة الدولة سنويا ",
                  },
                ]}
                series={[
                  {
                    data: [1250, 1238, 1382, 1204, 2660, 2938, 9838],
                    label: "ايرادات اجمالية",
                  },
                  {
                    data: [1003, 981, 1112, 929, 2264, 2346, 8888],
                    label: "مبلغ محول",
                  },
                ]}
                slotProps={{
                  legend: {
                    hidden: isSmallScreen ? true : false,
                    itemMarkWidth: 12,
                    itemMarkHeight: 12,
                    direction: "column",
                    position: {
                      vertical: "middle",
                      horizontal: "middle",
                    },

                    labelStyle: {
                      transform: "translateX(-30px)",
                      fontSize: "12px",
                    },
                  },
                }}
                colors={[
                  `${theme.palette.primary.main}`,
                  `${theme.palette.success.main}`,
                ]}
                height={400}
              />
            </Box>
          </Grid>
          <Grid size={12}>
            <Stack spacing={2} textAlign="center" marginTop={6}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.1rem",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                  gap: "1rem",
                  display: "flex",
                }}
              >
                <CheckCircleIcon
                  color="primary"
                  variant="outlined"
                  sx={{
                    fontSize: "2rem",
                  }}
                />
                عدد السفن و الناقلات بتوكيل الشركة و بتوكيل الوكلاء الخاصون خلال
                الاعوام الاخيرة
              </Typography>
              <Typography variant="body2">
                استقبلت الشركة 197 باخرة في العام 2016 ,وصل عدد البواخر
                المستقبلة إلى 311 في العام 2017,وبلغ هذا العدد 177 باخرة في
                العام 2018 , كما بلغ على التتابع 215-170-176 في الأعوام
                2019-2020-2021 و ارتفع هذا العدد الى 212 في العام 2022.
              </Typography>
              <Divider />
              <Typography variant="body2">
                بلغ عدد البواخر المستقبلة بتوكيل الوكالات الخاصة 855 باخرة في
                العام 2016, وارتفع هذه العدد إلى 1009 باخرة في العام 2018 قبل أن
                يسجل هذا الرقم 946 ثم 769 ثم 808 في الأعوام 2019-2020-2021 على
                التوالي في حين بلغ 728 في العام 2022 , مع الاشارة إلى أن عدد
                الوكلاء الخاصون في سوريا يقارب 80 وكيل.
              </Typography>
              <Divider />
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 7 }}
            alignItems="center"
            justifyContent="center"
          >
            <LineChart
              dataset={ships}
              xAxis={[
                {
                  scaleType: "point",
                  label: "السنة الميلادية",
                  data: [
                    "2016",
                    "2017",
                    "2018",
                    "2019",
                    "2020",
                    "2021",
                    "2022",
                  ],
                  valueFormatter: (value) => value.toString(),
                },
              ]}
              yAxis={[
                {
                  label: "عدد البواخر و السفن",
                },
              ]}
              series={[
                {
                  id: "shipco",
                  label: "التوكيلات الملاحية",
                  dataKey: "shipco",
                  stack: "total",
                  area: true,
                  showMark: false,
                },
                {
                  id: "others",
                  label: "الوكلاء الخاصون",
                  dataKey: "others",
                  stack: "total",
                  area: true,
                  showMark: false,
                },
              ]}
              // minWidth={280}
              height={400}
              slotProps={{
                legend: {
                  hidden: isSmallScreen ? true : false,
                  itemMarkWidth: 12,
                  itemMarkHeight: 12,
                  direction: "row",
                  position: {
                    vertical: "top",
                    horizontal: "right",
                  },

                  labelStyle: {
                    transform: "translateX(-20px)",
                  },
                  fontSize: "12px",
                },
              }}
              colors={[
                `${theme.palette.primary.main}`,
                `${theme.palette.success.main}`,
                `${theme.palette.info.main}`,
              ]}
              margin={{ left: 50 }}
            />
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            alignItems="center"
            justifyContent="center"
            marginTop={3}
          >
            <TableContainer component={Paper}>
              <Table aria-label="simple table" size="small">
                <caption
                  style={{
                    textAlign: "center",
                    color: theme.palette.primary.dark,
                  }}
                >
                  عدد السفن و الناقلات بتوكيل شركة التوكيلات و الوكلاء الخاصون{" "}
                </caption>
                <TableHead>
                  <TableRow>
                    <TableCell align="right">السنة الميلادية</TableCell>
                    <TableCell align="center">
                      شركة التوكيلات الملاحية
                    </TableCell>
                    <TableCell align="center">الوكلاء الخاصون</TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        display: {
                          xs: "none",
                          sm: "block",
                        },
                      }}
                    >
                      الاجمالي
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ships.map((row) => (
                    <TableRow
                      key={row.year}
                      // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="right">
                        {row.year}
                      </TableCell>
                      <TableCell align="center">{row.shipco}</TableCell>
                      <TableCell align="center">{row.others}</TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          display: {
                            xs: "none",
                            sm: "block",
                          },
                        }}
                      >
                        {row.shipco + row.others}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}
