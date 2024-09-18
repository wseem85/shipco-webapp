import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MobileStepper,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Heading from "../ui/heading";
import PageContainer from "../ui/pageContainer";

import SubHeading from "../ui/subHeading";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { useTheme } from "@emotion/react";
import React, { useEffect } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { FaShip } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { RiMailSendFill } from "react-icons/ri";
import { MdPaid } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import { GiIronHulledWarship } from "react-icons/gi";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";

import TimelineDot from "@mui/lab/TimelineDot";
// import { primary, secondary } from "@mui/material/colors";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { GiShipBow } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaTruckLoading } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { TiMessages } from "react-icons/ti";
import { GiMovementSensor } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaFileImport } from "react-icons/fa";
import { LuContainer } from "react-icons/lu";
import { GiWindow } from "react-icons/gi";

const steps = [
  {
    num: "01",

    icon: <FaShip />,
    description:
      "تأمين الخدمات للسفينة و البضائع و الركاب قبل وبعد وصول السفينة وكذلك أثناء تواجدها في المرفأ وبعد سفرها",
  },
  {
    num: "02",
    icon: <FaPeopleArrows />,
    description:
      "حماية مصالح الشركات الناقلة البحرية وتمثيلها لدى شركات المرافئ والجمارك و السلطات البحرية الأخرى",
  },
  {
    num: "03",
    icon: <GoLaw />,
    description:
      "تمثيل أصحاب الشركات الناقلة والسفن أمام المحاكم السورية ومتابعة الدعاوى المقامة ضدها وفقا لتعليمات الشركات الناقلة",
  },
  {
    num: "04",
    icon: <RiMailSendFill />,
    description:
      "ارسال التقارير حول وضع السفينة في المرفأ وعملها تأمين لوائح رسوم خزن الحوايا شهريا توقيع بوالص الشحن نيابة عن ربابنة السفينة",
  },
  {
    num: "05",
    icon: <MdPaid />,
    description:
      "تحصيل الناولون المتوجب دفعه في سوريا و غرامات تأخير الحوايا و أية مبالغ اخرى وفقا لتعليمات أصحاب الشركات الناقلة , وتحويل هذه المبالغ لهم",
  },
  {
    num: "06",
    icon: <IoIosInformationCircle />,
    description:
      "تزويد الشركات الناقلة بأية تغييرات تطرأ على التعليمات الناظمة او الرسوم والتعرفة النافذة والقرارات الجمركية والمعلومات الأخرى المتعلقة بالمرافئ",
  },
];
const windowSteps = [
  {
    label:
      "استلام بوالص الشحن واصدار أذونات التسليم بالبضائع الواردة على البواخر وتسليمها إلى أصحابها أصولا",
  },
  {
    label:
      " تنظيم مذكرات قبض بالبدلات المترتبة على البضائع الواردة والصادرة وغرامات التأخير و أجور الشحن لتقديمها لأمناء الصناديق لتحصيلها",
  },
  {
    label:
      " تنظيم فواتير مطالبة بالبدلات والنفقات المترتبة على البضائع وغرامات تأخير تفريغ الحوايا المترتبة على المؤسسات والشركات العائدة للقطاع العام",
  },
  {
    label:
      " إرسال الإخطارات لأصحاب البضائع المتأخر سحبها لاستلامها وإعداد كشوف شهرية بذلك",
  },
  {
    label:
      " إعداد الكتب إلى الجمارك بالبضائع العائدة للقطاع العام وطلب وقف بيعها بالمزاد العلني",
  },
  { label: " إعداد إشعارات غرامات تأخير تفريغ الحوايا للشركات الناقلة" },
];
export default function Services() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStepLargeScreens, setActiveStepLargeScreens] = React.useState(0);
  const maxSteps = steps.length;
  const maxStepsLargeScreens = steps.length / 2;
  const matches = useMediaQuery("(min-width:600px)");
  const matchesMedium = useMediaQuery("(min-width:900px)");
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNextLargeScreens = () => {
    setActiveStepLargeScreens((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBackLargeScreens = () => {
    setActiveStepLargeScreens((prevActiveStep) => prevActiveStep - 1);
  };
  useEffect(function () {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <PageContainer>
      <Stack spacing={4}>
        <Heading> الخدمات</Heading>
        <SubHeading
          text=" خدمات عامة تؤديها شركة التوكيلات الملاحية"
          icon={<MiscellaneousServicesIcon />}
        ></SubHeading>
        {!matches && (
          <Paper sx={{ width: "100%" }} elevation={3}>
            <Stack sx={{ width: "100%", p: 2 }}>
              <Stack direction="row" justifyContent="space-between">
                <Avatar
                  sx={{
                    bgcolor:
                      activeStep % 2 === 0
                        ? theme.palette.primary.light
                        : theme.palette.secondary.main,
                  }}
                >
                  {steps[activeStep].num}
                </Avatar>
                <Avatar
                  sx={{
                    bgcolor:
                      activeStep % 2 === 0
                        ? theme.palette.primary.light
                        : theme.palette.secondary.main,
                  }}
                >
                  {steps[activeStep].icon}
                </Avatar>
              </Stack>
              <Typography
                sx={{
                  marginTop: "1rem",
                }}
              >
                {steps[activeStep].description}
              </Typography>
            </Stack>
            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  الخدمة التالية
                  <KeyboardArrowLeft />
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  <KeyboardArrowRight />
                  الخدمة السابقة
                </Button>
              }
            />
          </Paper>
        )}
        {matches && (
          <Paper sx={{ width: "100%" }} elevation={3}>
            <Stack>
              <Stack
                sx={{ width: "100%", p: 2, gap: 3 }}
                direction="row"
                alignItems="center"
              >
                <Stack
                  direction="column"
                  justifyContent="space-around"
                  spacing={1}
                >
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.light,
                    }}
                  >
                    {steps[activeStepLargeScreens].num}
                  </Avatar>
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.light,
                    }}
                  >
                    {steps[activeStepLargeScreens].icon}
                  </Avatar>
                </Stack>
                <Typography
                  sx={{
                    marginTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  {steps[activeStepLargeScreens].description}
                </Typography>
              </Stack>
              <Divider />
              <Stack
                sx={{ width: "100%", p: 2, gap: 3, alignItems: "center" }}
                direction="row"
              >
                <Stack
                  direction="column"
                  justifyContent="space-around"
                  spacing={1}
                >
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.secondary.main,
                    }}
                  >
                    {steps[activeStepLargeScreens + 1].num}
                  </Avatar>
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.secondary.main,
                    }}
                  >
                    {steps[activeStepLargeScreens + 1].icon}
                  </Avatar>
                </Stack>
                <Typography
                  sx={{
                    marginTop: "1rem",
                  }}
                >
                  {steps[activeStepLargeScreens + 1].description}
                </Typography>
              </Stack>
            </Stack>
            <MobileStepper
              variant="text"
              steps={maxStepsLargeScreens}
              position="static"
              activeStep={activeStepLargeScreens}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNextLargeScreens}
                  disabled={activeStepLargeScreens === maxStepsLargeScreens - 1}
                >
                  الخدمة التالية
                  <KeyboardArrowLeft />
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBackLargeScreens}
                  disabled={activeStepLargeScreens === 0}
                >
                  <KeyboardArrowRight />
                  الخدمة السابقة
                </Button>
              }
            />
          </Paper>
        )}
      </Stack>

      <Divider />
      <Stack spacing={4}>
        <Heading>خدمات فروع الشركة</Heading>

        <Grid container rowGap={8}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              <SubHeading
                text="شعبة الاستقبال و التسفير وتموين السفن"
                icon={<GiIronHulledWarship fontSize="3rem" />}
              ></SubHeading>

              <Timeline
                position={matchesMedium ? "left" : "alternate"}
                sx={
                  matchesMedium
                    ? {
                        [`& .${timelineItemClasses.root}:before`]: {
                          flex: 0,
                          padding: 0,
                        },
                      }
                    : {}
                }
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    <TimelineDot
                      sx={{
                        height: { xs: "1.7rem", sm: "2.7rem" },
                        width: { xs: "1.7rem", sm: "2.7rem" },

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.primary.main,
                      }}
                    >
                      <Avatar
                        sx={{
                          height: { xs: "1rem", sm: "2.4rem" },
                          width: { xs: "1rem", sm: "2.4rem" },
                          bgcolor: theme.palette.primary.main,
                        }}
                      >
                        <MdOutlineRecordVoiceOver
                          style={{ fontSize: "1.3rem" }}
                        />
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      sx={{
                        textAlign: "right",
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      }}
                      variant="body2"
                    >
                      ارسال نداء الاستعداد للسفن المستأجرة للجهات ذات العلاقة
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    <TimelineDot
                      sx={{
                        height: { xs: "1.7rem", sm: "2.7rem" },
                        width: { xs: "1.7rem", sm: "2.7rem" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.primary.main,
                      }}
                    >
                      <Avatar
                        sx={{
                          height: { xs: "1rem", sm: "2.4rem" },
                          width: { xs: "1rem", sm: "2.4rem" },
                          bgcolor: theme.palette.primary.main,
                        }}
                      >
                        <HiOutlineDocumentDuplicate
                          style={{ fontSize: "1.3rem" }}
                        />
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: "right",
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      }}
                    >
                      إعداد المستندات و الاوراق اللازمة لاستقبال وتسفير السفن
                      والناقلات
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />

                    <TimelineDot
                      sx={{
                        height: { xs: "1.7rem", sm: "2.7rem" },
                        width: { xs: "1.7rem", sm: "2.7rem" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.primary.main,
                      }}
                    >
                      <Avatar
                        sx={{
                          height: { xs: "1rem", sm: "2.4rem" },
                          width: { xs: "1rem", sm: "2.4rem" },
                          bgcolor: theme.palette.primary.main,
                        }}
                      >
                        <GiShipBow style={{ fontSize: "1.3rem" }} />
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      textAlign="right"
                      variant="body2"
                      fontSize={{ xs: "0.8rem", sm: "0.9rem" }}
                    >
                      تهيئة إعلامات الوصول والسفر وتوزيعها على الجهات ذات
                      العلاقة
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />

                    <TimelineDot
                      sx={{
                        height: { xs: "1.7rem", sm: "2.7rem" },
                        width: { xs: "1.7rem", sm: "2.7rem" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.primary.main,
                      }}
                    >
                      <Avatar
                        sx={{
                          height: { xs: "1rem", sm: "2.4rem" },
                          width: { xs: "1rem", sm: "2.4rem" },
                          bgcolor: theme.palette.primary.main,
                        }}
                      >
                        <FaPeopleRoof style={{ fontSize: "1.3rem" }} />
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      fontSize={{ xs: "0.8rem", sm: "0.9rem" }}
                    >
                      مرافقة السلطات المختصة إلى السفينة لمنحها حرية المخالطة
                      لتكون جاهزة للعمل
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    <TimelineDot
                      sx={{
                        height: { xs: "1.7rem", sm: "2.7rem" },
                        width: { xs: "1.7rem", sm: "2.7rem" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.primary.main,
                      }}
                    >
                      <Avatar
                        sx={{
                          height: { xs: "1rem", sm: "2.4rem" },
                          width: { xs: "1rem", sm: "2.4rem" },
                          bgcolor: theme.palette.primary.main,
                        }}
                      >
                        <FaTruckLoading style={{ fontSize: "1.3rem" }} />
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      textAlign="right"
                      variant="body2"
                      fontSize={{ xs: "0.8rem", sm: "0.9rem" }}
                    >
                      تسهيل كافة المعوقات التي من الممكن أن يواجهها الربان خلال
                      عملية الشحن التفريغ{" "}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    <TimelineDot
                      sx={{
                        height: { xs: "1.7rem", sm: "2.7rem" },
                        width: { xs: "1.7rem", sm: "2.7rem" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.primary.main,
                      }}
                    >
                      <Avatar
                        sx={{
                          height: { xs: "1rem", sm: "2.4rem" },
                          width: { xs: "1rem", sm: "2.4rem" },
                          bgcolor: theme.palette.primary.main,
                        }}
                      >
                        <ImUserTie style={{ fontSize: "1.3rem" }} />
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      fontSize={{ xs: "0.8rem", sm: "0.9rem" }}
                    >
                      تلبية طلبات ربابنة السفن والاهتمام بالبحارة والقيام
                      باستقبال وتسفير السفن مع الجهات المختصة الاخرى وتقديم
                      الخدمات اللازمة للسفن
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    <TimelineDot
                      sx={{
                        height: { xs: "1.7rem", sm: "2.7rem" },
                        width: { xs: "1.7rem", sm: "2.7rem" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.primary.main,
                      }}
                    >
                      <Avatar
                        sx={{
                          height: { xs: "1rem", sm: "2.4rem" },
                          width: { xs: "1rem", sm: "2.4rem" },
                          bgcolor: theme.palette.primary.main,
                        }}
                      >
                        <TiMessages style={{ fontSize: "1.3rem" }} />
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      fontSize={{ xs: "0.8rem", sm: "0.9rem" }}
                    >
                      ارسال التقارير للشركات ومراسلتها من تاريخ وصول السفينة حتى
                      تاريخ سفرها
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Stack>
          </Grid>
          {matchesMedium && <Grid size={2}></Grid>}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              <SubHeading
                text="دائرة الحركة"
                icon={<GiMovementSensor fontSize="3rem" />}
              ></SubHeading>
              <Timeline
                position={matchesMedium ? "right" : "alternate"}
                sx={
                  matchesMedium
                    ? {
                        [`& .${timelineItemClasses.root}:before`]: {
                          flex: 0,
                          padding: 0,
                        },
                      }
                    : {}
                }
              >
                <TimelineItem sx={{ justifyContent: "center" }}>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "primary.main" }} />
                    <TimelineDot
                      sx={{
                        height: { xs: "1.7rem", sm: "2.7rem" },
                        width: { xs: "1.7rem", sm: "2.7rem" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.secondary.main,
                      }}
                    >
                      <Avatar
                        sx={{
                          height: { xs: "1rem", sm: "2.4rem" },
                          width: { xs: "1rem", sm: "2.4rem" },
                          bgcolor: theme.palette.secondary.main,
                        }}
                      >
                        <FaShippingFast style={{ fontSize: "1.3rem" }} />
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "primary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      fontSize={{
                        xs: "0.8rem",
                        sm: "0.9rem",
                      }}
                    >
                      الاشراف على عمليات الشحن والتفريغ والايداع و تسليم البضائع
                      وتأمين أدوات التفريغ اللازمة لتفريغ البضائع من السفن أو
                      شحنها عليها
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "primary.main" }} />
                    <TimelineDot
                      sx={{
                        height: { xs: "1.7rem", sm: "2.7rem" },
                        width: { xs: "1.7rem", sm: "2.7rem" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.secondary.main,
                      }}
                    >
                      <Avatar
                        sx={{
                          height: { xs: "1rem", sm: "2.4rem" },
                          width: { xs: "1rem", sm: "2.4rem" },
                          bgcolor: theme.palette.secondary.main,
                        }}
                      >
                        <MdConnectWithoutContact
                          style={{ fontSize: "1.3rem" }}
                        />
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "primary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      fontSize={{ xs: "0.8rem", sm: "0.9rem" }}
                    >
                      الاتصال مع الدوائر المختصة لشركة المرفأ بغية تعيين السفن
                      للعمل وتأمين الإحتياجات اللازمة
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "primary.main" }} />

                    <TimelineDot
                      sx={{
                        height: { xs: "1.7rem", sm: "2.7rem" },
                        width: { xs: "1.7rem", sm: "2.7rem" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.secondary.main,
                      }}
                    >
                      <Avatar
                        sx={{
                          height: { xs: "1rem", sm: "2.4rem" },
                          width: { xs: "1rem", sm: "2.4rem" },
                          bgcolor: theme.palette.secondary.main,
                        }}
                      >
                        <GrVmMaintenance style={{ fontSize: "1.3rem" }} />
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "primary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      fontSize={{ xs: "0.8rem", sm: "0.9rem" }}
                    >
                      الاشراف على صيانة البضائع
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "primary.main" }} />

                    <TimelineDot
                      sx={{
                        height: { xs: "1.7rem", sm: "2.7rem" },
                        width: { xs: "1.7rem", sm: "2.7rem" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.secondary.main,
                      }}
                    >
                      <Avatar
                        sx={{
                          height: { xs: "1rem", sm: "2.4rem" },
                          width: { xs: "1rem", sm: "2.4rem" },
                          bgcolor: theme.palette.secondary.main,
                        }}
                      >
                        <TfiWrite style={{ fontSize: "1.3rem" }} />
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "primary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      fontSize={{ xs: "0.8rem", sm: "0.9rem" }}
                    >
                      تسجيل الاحتجاجات البحرية والمساهمة بتنظيم شهادات سقوط
                      البضائع في البحر
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "primary.main" }} />
                    <TimelineDot
                      sx={{
                        height: { xs: "1.7rem", sm: "2.7rem" },
                        width: { xs: "1.7rem", sm: "2.7rem" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.secondary.main,
                      }}
                    >
                      <Avatar
                        sx={{
                          height: { xs: "1rem", sm: "2.4rem" },
                          width: { xs: "1rem", sm: "2.4rem" },
                          bgcolor: theme.palette.secondary.main,
                        }}
                      >
                        <FaPeopleGroup style={{ fontSize: "1.3rem" }} />
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "primary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      fontSize={{ xs: "0.8rem", sm: "0.9rem" }}
                    >
                      التنسيق بين مراقبي السفن و أمناء مراكز الإيداع
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "primary.main" }} />
                    <TimelineDot
                      sx={{
                        height: { xs: "1.7rem", sm: "2.7rem" },
                        width: { xs: "1.7rem", sm: "2.7rem" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.secondary.main,
                      }}
                    >
                      <Avatar
                        sx={{
                          height: { xs: "1rem", sm: "2.4rem" },
                          width: { xs: "1rem", sm: "2.4rem" },
                          bgcolor: theme.palette.secondary.main,
                        }}
                      >
                        <FaFileImport style={{ fontSize: "1.3rem" }} />
                      </Avatar>
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "primary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      fontSize={{ xs: "0.8rem", sm: "0.9rem" }}
                    >
                      الاشتراك بإعداد محاضر الإدخال اليومية الجزئية والنهائية مع
                      الجمارك و المرفأ
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "primary.main" }} />
                    <TimelineDot
                      sx={{
                        height: { xs: "1.7rem", sm: "2.7rem" },
                        width: { xs: "1.7rem", sm: "2.7rem" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.secondary.main,
                      }}
                    >
                      <Avatar
                        sx={{
                          height: { xs: "1rem", sm: "2.4rem" },
                          width: { xs: "1rem", sm: "2.4rem" },
                          bgcolor: theme.palette.secondary.main,
                        }}
                      >
                        <LuContainer style={{ fontSize: "1.3rem" }} />
                      </Avatar>
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      variant="body2"
                      textAlign="right"
                      fontSize={{ xs: "0.8rem", sm: "0.9rem" }}
                    >
                      تهيئة وتحضير الحاويات و البضائع المراد شحنها قبل وصول
                      السفينة
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Divider />
      <Stack spacing={2}>
        <SubHeading
          text="النافذة الواحدة"
          icon={<GiWindow fontSize="3rem" />}
        ></SubHeading>

        <Box>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {windowSteps.map((step, index) => (
              <ListItem key={step.label}>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      width: {
                        xs: "2rem",
                      },
                      height: {
                        xs: "2rem",
                      },
                    }}
                  >
                    0{index + 1}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={step.label}
                  sx={{ textAlign: "right" }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Stack>
    </PageContainer>
  );
}
