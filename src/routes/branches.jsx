import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Link,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PageContainer from "../ui/pageContainer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@emotion/react";
import SubHeading from "../ui/subHeading";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Heading from "../ui/heading";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useDark } from "../contexts/modeContext";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Branches() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const { dark } = useDark();
  const [expanded, setExpanded] = React.useState("panel1");
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleEpandAccordian = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [expandedTartus, setExpandedTartus] = React.useState("panel1");

  const handleEpandAccordianTartus = (panel) => (event, newExpanded) => {
    setExpandedTartus(newExpanded ? panel : false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleGoUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(function () {
    function handleScroll() {
      const positionY = window.pageYOffset;
      setSrollPosition(positionY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(function () {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <PageContainer>
      <Stack spacing={2}>
        <Heading text="فروع الشركة" color="primary">
          فروع الشركة
        </Heading>
        <SubHeading text=" لمحة عن ادارة و فروع الشركة و مهام كل منها"></SubHeading>
        <Paper sx={{ bgcolor: "background.paper" }}>
          <AppBar
            position="static"
            sx={{
              backgroundColor: dark ? "#222" : theme.palette.secondary.light,
            }}
          >
            <Tabs
              variant="fullWidth"
              scrollButtons="auto"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab label="الادارة العامة" {...a11yProps(0)} />
              <Tab label="فرع اللاذقية" {...a11yProps(1)} />
              <Tab label="فرع طرطوس" {...a11yProps(2)} />
              <Tab label="فرع بانياس" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Stack spacing={2}>
              <Stack spacing={1}>
                <Typography variant="h5">الإدارة العامة</Typography>
                <Typography component="span" variant="caption">
                  سوريا,اللاذقية,شارع الجزائر
                </Typography>
                <Typography variant="h6">
                  المدير العام للشركة : الاستاذ عادل غزال
                </Typography>
              </Stack>
              <Typography variant="body2">
                تتولى إدارة شؤون الشركة بشكل عام من حيث إعداد خطط العمل
                المستقبلية لتطوير أداء الشركة ووضع هذه الخطط موضع التنفيذ و
                الإشراف على عمل فروع الشركة في اللاذقية وطرطوس و بانياس وتقييم
                أداء الفروع والعاملين في الشركة بشكل عام
              </Typography>
              <Divider />
              <Stack
                columnGap={4}
                rowGap={2}
                direction={{ xs: "column", md: "row" }}
              >
                <Stack rowGap={2} direction={{ md: "column" }}>
                  <Typography>
                    يمكنك الاتصال بالادارة العامة للشركة على الارقام:
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
                    <Chip
                      label="963412573444+"
                      variant="outlined"
                      color="primary"
                      sx={{
                        letterSpacing: "1px",
                      }}
                    />
                    <Chip
                      label="963412578972+"
                      variant="outlined"
                      color="primary"
                      sx={{
                        letterSpacing: "1px",
                      }}
                    />
                    <Chip
                      label="963412552999+"
                      variant="outlined"
                      color="primary"
                      sx={{
                        letterSpacing: "1px",
                      }}
                    />
                  </Stack>
                </Stack>
                <Stack rowGap={2} direction={{ md: "column" }}>
                  <Typography>أو ارسال فاكس إلى الرقمين</Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
                    <Chip
                      label="963412573002+"
                      variant="outlined"
                      color="primary"
                      sx={{
                        letterSpacing: "1px",
                      }}
                    />
                    <Chip
                      label="963412568401+"
                      variant="outlined"
                      color="primary"
                      sx={{
                        letterSpacing: "1px",
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack>
              <Divider />
              <Stack
                columnGap={4}
                rowGap={3}
                direction={{ xs: "column", md: "row" }}
              >
                <Stack rowGap={2} direction={{ md: "column" }}>
                  <Typography>أو ارسال بريد الكتروني إلى</Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
                    <Chip
                      label="main-office@shipcosyria.com.sy"
                      variant="outlined"
                      color="primary"
                      sx={{
                        letterSpacing: "1px",
                      }}
                    />
                    <Chip
                      label="ship-offc@shipcosyria.com.sy"
                      variant="outlined"
                      color="primary"
                      sx={{
                        letterSpacing: "1px",
                      }}
                    />
                  </Stack>
                </Stack>
                <Stack rowGap={2} direction={{ md: "column" }}>
                  <Typography>كما يمكنك مراسلتنا عبر الواتساب</Typography>
                  <Stack width={200}>
                    <Chip
                      label="963994875398+"
                      variant="outlined"
                      color="primary"
                      sx={{
                        letterSpacing: "1px",
                      }}
                    />
                  </Stack>
                </Stack>
                <Stack rowGap={2} direction={{ md: "column" }}>
                  <Typography>او تصفح بوت الشركة على تلغرام</Typography>
                  <Stack width={200}>
                    <Chip
                      label="@ShipcoBot"
                      variant="outlined"
                      color="primary"
                      sx={{
                        letterSpacing: "1px",
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack>
              <Divider />

              <Typography>
                لمعرفة المزيد يمكنك متابعة صفحتنا على فيسبوك عبر الرابط
              </Typography>
              <Link
                href="https://www.facebook.com/profile.php?id=100086544482078"
                target="_blank"
              >
                <Stack width={200}>
                  <Chip
                    label="فيسبوك"
                    variant="filled"
                    color="primary"
                    sx={{
                      letterSpacing: "1px",
                    }}
                  ></Chip>
                </Stack>
              </Link>
            </Stack>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Stack rowGap={2}>
              <Stack spacing={2}>
                <Stack spacing={1}>
                  <Typography variant="h5">فرع اللاذقية</Typography>
                  <Typography variant="caption">
                    سوريا,اللاذقية,شارع الجزائر
                  </Typography>
                  <Typography variant="h6">
                    مدير فرع اللاذقية المهندس ياسر اصلان
                  </Typography>
                </Stack>
                <Typography>
                  فرع اللاذقية هو صاحب المسؤولية فيما يخص الأعمال و المهام
                  المحددة في المرسوم التشريعي /347/ لعام 1969 ضمن الحدود
                  الإدارية لمحافظة اللاذقية ووفقا للقوانين و الأنظمة النافذة حيث
                  يضم الفرع عدد من الدوائر (التجارية - المالية - الحسابات-
                  القانونية - الإدارية)
                </Typography>
                <Divider />
                <Stack
                  columnGap={4}
                  rowGap={2}
                  direction={{ xs: "column", md: "row" }}
                >
                  <Stack rowGap={2} direction={{ md: "column" }}>
                    <Typography>
                      يمكنك الاتصال بفرع اللاذقية على الرقم
                    </Typography>
                    <Box width={{ xs: 200, md: "unset" }}>
                      <Chip
                        label="963412575555+"
                        variant="outlined"
                        color="primary"
                        sx={{
                          letterSpacing: "1px",
                        }}
                      />
                    </Box>
                  </Stack>
                  <Stack rowGap={2} direction={{ md: "column" }}>
                    <Typography>أو ارسال فاكس إلى الرقم</Typography>
                    <Box width={{ xs: 200, md: "unset" }}>
                      <Chip
                        label="963412573400+"
                        variant="outlined"
                        color="primary"
                        sx={{
                          letterSpacing: "1px",
                        }}
                      />
                    </Box>
                  </Stack>

                  <Stack rowGap={2} direction={{ md: "column" }}>
                    <Typography>أو ارسال بريد الكتروني إلى</Typography>
                    <Box width={{ xs: 250, md: "unset" }}>
                      <Chip
                        label="shipco1@tarassul.sy"
                        variant="outlined"
                        color="primary"
                        sx={{
                          letterSpacing: "1px",
                        }}
                      />
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
              <Divider />
              <Stack>
                <SubHeading text="الخدمات التي يقدمها فرع الشركة في اللاذقية"></SubHeading>
                <Box sx={{ marginTop: 2 }}>
                  <Stack gap={3}>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        01
                      </Avatar>
                      <Typography variant="body2">
                        استقبال وتسفير وتموين سفن البضائع المختلفة من خلال إرسال
                        نداءات الاستعداد لاستقبال أو تسفير السفن إلى الجهات ذات
                        العلاقة (الجمارك - مديرية الصحة -المديرية العامة للموانئ
                        - أصحاب البضائع) و إعداد الأوراق اللازمة للاستقبال
                        والتسفير وتهيئة إشعارات الوصول والمغادرة وتوزيعها أيضا
                        على الجهات ذات العلاقة
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        02
                      </Avatar>
                      <Typography variant="body2">
                        مرافقة السلطات المختصة إلى السفينة لمنحها حرية المخالطة
                        وتسهيل كافة المعوقات خلال عمليات الشحن والتفريغ
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        03
                      </Avatar>
                      <Typography variant="body2">
                        تلبية طلبات الربابنة والبحارة والاهتمام بهم وتقديم خدمات
                        العلاج والطبابة والبريد النقل والتموين
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        04
                      </Avatar>
                      <Typography variant="body2">
                        إرسال تقارير للشركات ومراسلتها بدءا من تاريخ وصول
                        السفينة حتى تاريخ سفرها
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        05
                      </Avatar>
                      <Typography variant="body2">
                        الاشراف على عمليات الشحن والتفريغ والايداع والتسليم
                        للبضائع و تأمين الأدوات والرافعات اللازمة وتغطية البضائع
                        في أماكن الايداع
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        06
                      </Avatar>
                      <Typography variant="body2">
                        التواصل والتنسيق مع الدوائر المختصة لشركة المرفأ لتامين
                        الاحتياجات اللازمة للسفينة والاشراف على صيانة البضائع
                        وتسجيل الاحتجاجات البحرية وتنظيم شهادات في حال الكوارث
                        وسقوط بضائع في البحر
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="outlined"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        07
                      </Avatar>
                      <Typography variant="body2">
                        يعمل الفرع على مدار /24/ ساعة وفق جدول زمني وبرنامج
                        تشغيلي محدد لضمان نقل أو تفريغ البضائع في الوقت المحدد
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
              <Divider />
              <Stack>
                <SubHeading text="عن مرفأ اللاذقية"></SubHeading>
                <Accordion
                  defaultExpanded
                  disableGutters
                  expanded={expanded === "panel1"}
                  onChange={handleEpandAccordian("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    معلومات عامة
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      يتمتع مرفأ اللاذقية بموقع تجاري استراتيجي هام، أتاح له أن
                      يحتل مركزاً ممتازاً بين طرق المواصلات البحرية. كما يتمتع
                      مرفأ اللاذقية بميزة كبرى لخدمة الترانزيت العربي والدولي
                      باعتباره جسراً للنقل بين القارات الثلاثة آسيا وأفريقيا
                      وأوروبا، وهو يوفر خدمة سريعة بتكاليف رخيصة ومنافسة لأي
                      طريق آخر، ويُعتبر النافذة التي يُطل بها القطر على العالم
                      الخارجي لأجل تصدير كافة منتجاته، واستيراد مايلزم من المواد
                      والمعدات.وهو يرتبط ارتباطاً وثيقاً بعملية تطور القطر
                      اقتصادياً واجتماعياً.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  expanded={expanded === "panel2"}
                  onChange={handleEpandAccordian("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    البنية التحتية
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={1}>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>المكسر الرئيسي بطول 3166م</Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>الحوض المائي 135 هكتار</Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>حماية شاطئية 1500 م</Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          حوض داخلي (الحوض القديم) بطول 835م وغاطس بين 3م 4.5م
                        </Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          15 رصيف بطول 3120م وغاطس بين 7م - 13.30م
                        </Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>غاطس قناة الدخول 14.5 م</Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>المساحة البرية 150 هكتار</Typography>
                      </Stack>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  expanded={expanded === "panel3"}
                  onChange={handleEpandAccordian("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    أماكن الإيداع
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={1}>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          14ساحة إيداع مكشوفة بمساحة 50 هكتار
                        </Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          17 مستودع مغلق بمساحة 12.8 هكتار
                        </Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>صومعة حبوب سعة 35000 طن</Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>مستودع مبرد سعة 1500 طن</Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          مآخذ كهربائية للحاويات المبردة عدد 240 مأخذ
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  expanded={expanded === "panel4"}
                  onChange={handleEpandAccordian("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    محطة حاويات اللاذقية الدولية
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={1}>
                      <Stack direction="row" columnGap={1}>
                        <Typography>
                          تتم إدارة محطة الحاويات في مرفأ اللاذقية من قبل شركة
                          محطة حاويات اللاذقية الدولية بناءً على عقد التشاركية
                          الذي بُدِء تنفيذه في 1/10/2009 وتضم محطة الحاويات
                          البنية التحتية التالية:
                        </Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          الرصيفان 12 و 12أ بطول 370 م وعمق (12.5 م إلى 13.30 )0
                        </Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography></Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          الرصيفان 14 و15 بطول 440 م وعمق (13.30 م
                        </Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>المساحة البرية 67 هكتار</Typography>
                      </Stack>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  expanded={expanded === "panel5"}
                  onChange={handleEpandAccordian("panel5")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    الآليات البحرية والبرية
                  </AccordionSummary>
                  <AccordionDetails>
                    يمتلك المرفأ العديد من الآليات البحرية كالقواطر والرافعات
                    العائمة وزوارق الغطس والإرشاد والمواصلات والعديد من الآليات
                    البرية كروافع الرصيف الكهربائية والروافع البرية والناقلات
                    الشوكية والحاضنات والستافات والشاحنات ورؤوس القطر والقاطرات،
                    بالإضافة إلى 4 روافع غانتري كرين لتناول الحاويات و 4 روافع
                    هاربر موبايل كرين باستطاعات كبيرة لتناول الحاويات والبضائع
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  expanded={expanded === "panel6"}
                  onChange={handleEpandAccordian("panel6")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    المخبر المركزي
                  </AccordionSummary>
                  <AccordionDetails>
                    تم إنشاء مبنى المخبر المركزي في مرفأ اللاذقية وتأمين
                    التجهيزات المخبرية الحديثة اللازمة لإجراء كافة التحاليل
                    المتوجبة على عينات البضائع الواردة والصادرة ضمن المرفأ ودون
                    الحاجة لإرسال هذه العينات إلى الجامعة أو الزراعة أو التموين
                    أو الصحة أو أية جهة أخرى خارج المرفأ مما يؤدي إلى تسريع دورة
                    العمل وتخفيض زمن انتظار السفن في المرفأ وتسهيل الإجراءات
                    المرافقة لرحلة البضائع ضمن المرفأ
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  expanded={expanded === "panel7"}
                  onChange={handleEpandAccordian("panel7")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    محطة الركاب
                  </AccordionSummary>
                  <AccordionDetails>
                    تقع في منطقة المرفأ القديم وتشغل مساحة /4000/ م2 و يبلغ طول
                    رصيف الركاب المخصص لاستقبال سفن الركاب والسفن السياحية /240/
                    م وعمق مياهه 8-9.5 م، ويطل على رصيف الركاب مبنى صالة الركاب
                    والذي يتضمن صالات وصول ومغادرة، مطعم، صالة استقبال (قاعة
                    الشرف) تتسع الصالة لـ /200/ شخص (200 مغادرين – 200 واصلين)
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </Stack>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Stack rowGap={2}>
              <Stack spacing={2}>
                <Stack spacing={1}>
                  <Typography variant="h5">فرع طرطوس</Typography>
                  <Typography variant="caption">
                    سوريا,طرطوس,شارع المينا
                  </Typography>
                  <Typography variant="h6">
                    مدير فرع طرطوس المهندس ثائر ونوس
                  </Typography>
                </Stack>
                <Typography>
                  فرع طرطوس يعتبر المسؤول عن تنفيذ الأعمال و المهام المحددة في
                  المرسوم التشريعي /347/ لعام 1969 ضمن الحدود الإدارية لمحافظة
                  طرطوس ووفقا للقوانين و الأنظمة النافذة حيث يضم الفرع عدد من
                  الدوائر (التجارية - المالية - الحسابات - القانونية - الإدارية)
                </Typography>
                <Divider />
                <Stack
                  columnGap={4}
                  rowGap={2}
                  direction={{ xs: "column", md: "row" }}
                >
                  <Stack rowGap={2} direction={{ md: "column" }}>
                    <Typography>يمكنك الاتصال بفرع طرطوس على الرقم</Typography>
                    <Box width={{ xs: 200, md: "unset" }}>
                      <Chip
                        label="963432327200+"
                        variant="outlined"
                        color="primary"
                        sx={{
                          letterSpacing: "1px",
                        }}
                      />
                    </Box>
                  </Stack>
                  <Stack rowGap={2} direction={{ md: "column" }}>
                    <Typography>أو ارسال فاكس إلى الرقم</Typography>
                    <Box width={{ xs: 200, md: "unset" }}>
                      <Chip
                        label="963432213703+"
                        variant="outlined"
                        color="primary"
                        sx={{
                          letterSpacing: "1px",
                        }}
                      />
                    </Box>
                  </Stack>

                  <Stack rowGap={2} direction={{ md: "column" }}>
                    <Typography>أو ارسال بريد الكتروني إلى</Typography>
                    <Box width={{ xs: 250, md: "unset" }}>
                      <Chip
                        label="shipco.trt.branch@gmail.com"
                        variant="outlined"
                        color="primary"
                        sx={{
                          letterSpacing: "1px",
                        }}
                      />
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
              <Divider />
              <Stack>
                <SubHeading text="الخدمات التي يقدمها فرع الشركة في طرطوس"></SubHeading>
                <Box sx={{ marginTop: 2 }}>
                  <Stack gap={3}>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        01
                      </Avatar>
                      <Typography variant="body2">
                        استقبال وتسفير وتموين سفن البضائع المختلفة من خلال إرسال
                        نداءات الاستعداد لاستقبال أو تسفير السفن إلى الجهات ذات
                        العلاقة (الجمارك - مديرية الصحة -المديرية العامة للموانئ
                        - أصحاب البضائع) و إعداد الأوراق اللازمة للاستقبال
                        والتسفير وتهيئة إشعارات الوصول والمغادرة وتوزيعها أيضا
                        على الجهات ذات العلاقة
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        02
                      </Avatar>
                      <Typography variant="body2">
                        مرافقة السلطات المختصة إلى السفينة لمنحها حرية المخالطة
                        وتسهيل كافة المعوقات خلال عمليات الشحن والتفريغ
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        03
                      </Avatar>
                      <Typography variant="body2">
                        تلبية طلبات الربابنة والبحارة والاهتمام بهم وتقديم خدمات
                        العلاج والطبابة والبريد النقل والتموين
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        04
                      </Avatar>
                      <Typography variant="body2">
                        إرسال تقارير للشركات ومراسلتها بدءا من تاريخ وصول
                        السفينة حتى تاريخ سفرها
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        05
                      </Avatar>
                      <Typography variant="body2">
                        الاشراف على عمليات الشحن والتفريغ والايداع والتسليم
                        للبضائع و تأمين الأدوات والرافعات اللازمة وتغطية البضائع
                        في أماكن الايداع
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        06
                      </Avatar>
                      <Typography variant="body2">
                        التواصل والتنسيق مع الدوائر المختصة لشركة المرفأ لتامين
                        الاحتياجات اللازمة للسفينة والاشراف على صيانة البضائع
                        وتسجيل الاحتجاجات البحرية وتنظيم شهادات في حال الكوارث
                        وسقوط بضائع في البحر
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="outlined"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        07
                      </Avatar>
                      <Typography variant="body2">
                        يعمل الفرع على مدار /24/ ساعة وفق جدول زمني وبرنامج
                        تشغيلي محدد لضمان نقل أو تفريغ البضائع في الوقت المحدد
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
              <Divider />
              <Stack>
                <SubHeading text="عن مرفأ طرطوس"></SubHeading>
                <Accordion
                  defaultExpanded
                  disableGutters
                  expanded={expandedTartus === "panel1"}
                  onChange={handleEpandAccordianTartus("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    معلومات عامة
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      يمتلك مرفأ طرطوس ميزات فنية تؤهله ليكون ضمن المرافئ
                      المتطورة حيث يشغل المرفأ حالياً مساحة /3/ مليون م2 منها
                      /1.2/ مليون م2 مساحة الأحواض المائية و/1.8/مليون م2 مساحة
                      الساحات والمستودعات والأرصفة هذه الساحات والمستودعات
                      والأرصفة مجهزة بالإنارة الجيدة وشبكة إطفاء ومخدمة بشبكة من
                      الطرق البرية والحديدية المرتبطة بالشبكةالعامة للخطوط
                      الحديدية في القطر إضافة إلى الآليات والتجهيزات والزوارق
                      متنوعة المواصفات والقدرات كي تلبي حاجة عمليات الاستثمار
                      وتناول البضائع.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  expanded={expandedTartus === "panel2"}
                  onChange={handleEpandAccordianTartus("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    ميزات المرفأ
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={1}>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          يتوسط الساحل الشرقي للبحر المتوسط
                        </Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>مجاور لمصبات النفط</Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>قربه من مراكز الإنتاج</Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          يوجد شبكة خطوط وطرق برية قليلة التضاريس تربط كافة
                          المحافظات السورية والدول المجاورة
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  expanded={expandedTartus === "panel3"}
                  onChange={handleEpandAccordianTartus("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    مقومات خاصة للمرفأ
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={1}>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          14ساحة إيداع مكشوفة بمساحة 50 هكتار
                        </Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          17 مستودع مغلق بمساحة 12.8 هكتار
                        </Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>صومعة حبوب سعة 35000 طن</Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          17 مستودع مغلق بمساحة 12.8 هكتار
                        </Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>صومعة حبوب سعة 35000 طن</Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>مستودع مبرد سعة 1500 طن</Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          مآخذ كهربائية للحاويات المبردة عدد 240 مأخذ
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  expanded={expandedTartus === "panel4"}
                  onChange={handleEpandAccordianTartus("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    خصائص ملاحية
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={1}>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          الممرات الملاحية: طول الممر 200 ميل بحري، العرض 200
                          متر، العمق 14،5 متر. دائرة الدوران: نصف قطرها 220 متر
                          وعمقها 13،5 متر.
                        </Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          منطقة الاقتراب: يوجد مكسرين للأمواج لحماية المساحة
                          المائية الخاصة بالمرفأ
                          <br />• الأول: رئيسي بطول 2،650م2 يمتد من الشاطئ غرب
                          مبنى نقابة المهندسين شمالا في البحر ويصد التيارات
                          والأمواج الغربية والغربية الجنوبية ويتكون من ركام صخري
                          متدرج الأوزان والحجوم تبدأ من طبقة (0-0.25) طن في
                          الداخل وتصل إلى طبقة 20-15 طن على السطح ويعلوه ترويسة
                          بيتونية مع طريق تخديمي وتصل الميول إلى 1/5. • الثاني:
                          ثانوي بطول 1،650م ،لصد الأمواج والتيارات الشمالية
                          ومكون من ركام صخري ومشابه للمكسر الأول وتصل الميول إلى
                          1/5.
                        </Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>صومعة حبوب سعة 35000 طن</Typography>
                      </Stack>
                      <Stack direction="row" columnGap={1}>
                        <CheckCircleIcon />
                        <Typography>
                          الإرشاد: إجباري لجميع السفن سواء في الدخول أو الخروج
                          إلا السفن التي لا يزيد طولها عن 10 متر. القطر: إجباري
                          لجميع السفن إلا السفن التي لا يزيد طولها عن 10 متر.
                        </Typography>
                      </Stack>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  expanded={expandedTartus === "panel5"}
                  onChange={handleEpandAccordianTartus("panel5")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    المحطات الرئيسية بالميناء
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={1}>
                      <Stack>
                        <Stack direction="column" rowGap={1}>
                          <Stack direction="row" columnGap={1}>
                            <CheckCircleIcon />
                            <Typography>محطة الحاويات :</Typography>
                          </Stack>
                          <Typography>
                            المساحة الكلية :254،739 متر مربع
                          </Typography>
                          <Typography>
                            الطاقة الاستيعابية :500 -600 ألف حاوية مكافئة سنوياً
                          </Typography>
                        </Stack>
                        <Stack direction="column" rowGap={1}>
                          <Stack direction="row" columnGap={1}>
                            <CheckCircleIcon />
                            <Typography>محطة الحبوب</Typography>
                          </Stack>
                          <Typography>المساحة الكلية :5،200متر مربع</Typography>
                          <Typography>
                            الطاقة الاستيعابية 85،000طن سنوياً
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </Stack>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Stack rowGap={2}>
              <Stack spacing={2}>
                <Stack spacing={1}>
                  <Typography variant="h5">فرع بانياس</Typography>
                  <Typography variant="caption">
                    سوريا,بانياس,شارع جول جمال
                  </Typography>
                  <Typography variant="h6">
                    مدير فرع بانياس المهندس مضر جنود
                  </Typography>
                </Stack>
                <Typography>
                  من مهام فرع بانياس القيام بأعمال و أوجه النشاط التجاري وتنفيذ
                  عقود التوكيل المبرمة مع الشركات الناقلة وتقديم كافة الخدمات
                  لناقلات النفط و الاشراف على شحن وتفريغ النفط ومشتقاته
                </Typography>
                <Divider />
                <Stack
                  columnGap={4}
                  rowGap={2}
                  direction={{ xs: "column", md: "row" }}
                >
                  <Stack rowGap={2} direction={{ md: "column" }}>
                    <Typography>يمكنك الاتصال بفرع بانياس على الرقم</Typography>
                    <Box width={{ xs: 200, md: "unset" }}>
                      <Chip
                        label="963437723803+"
                        variant="outlined"
                        color="primary"
                        sx={{
                          letterSpacing: "1px",
                        }}
                      />
                    </Box>
                  </Stack>
                  <Stack rowGap={2} direction={{ md: "column" }}>
                    <Typography>أو ارسال فاكس إلى الرقم</Typography>
                    <Box width={{ xs: 200, md: "unset" }}>
                      <Chip
                        label="963437711403+"
                        variant="outlined"
                        color="primary"
                        sx={{
                          letterSpacing: "1px",
                        }}
                      />
                    </Box>
                  </Stack>

                  <Stack rowGap={2} direction={{ md: "column" }}>
                    <Typography>أو ارسال بريد الكتروني إلى</Typography>
                    <Box width={{ xs: 250, md: "unset" }}>
                      <Chip
                        label="shipco.ban.branch@gmail.com"
                        variant="outlined"
                        color="primary"
                        sx={{
                          letterSpacing: "1px",
                        }}
                      />
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
              <Divider />
              <Stack>
                <SubHeading text="الخدمات التي يقدمها فرع الشركة في بانياس"></SubHeading>
                <Box sx={{ marginTop: 2 }}>
                  <Stack gap={3}>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        01
                      </Avatar>
                      <Typography variant="body2">
                        القيام بأعمال و أوجه النشاط التجاري وتنفيذ عقود التوكيل
                        المبرمة مع الشركات الناقلة وتقديم كافة الخدمات لناقلات
                        النفط و الاشراف على شحن وتفريغ النفط ومشتقاته
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        02
                      </Avatar>
                      <Typography variant="body2">
                        القيام بأعمال استقبال وتسفير الناقلات بالتنسيق مع
                        السلطات المختصة
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        03
                      </Avatar>
                      <Typography variant="body2">
                        تهيئة إعلامات وصول الناقلات وتوزيعها على الجهات أصحاب
                        العلاقة
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        04
                      </Avatar>
                      <Typography variant="body2">
                        فتح ملفات للناقلات تتضمن الوثائق والمستندات الخاصة بها
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        05
                      </Avatar>
                      <Typography variant="body2">
                        تلبية طلبات الربابنة والاهتمام بالبحارة والقيام بغجراءات
                        استقبالهم وتسفيرهم وفق تعليمات شركتهم
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="filled"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        06
                      </Avatar>
                      <Typography variant="body2">
                        تقديم الخدمات اللازمة للناقلات (طبابة - تموين )
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      rowGap={1}
                      columnGap={3}
                    >
                      <Avatar
                        variant="outlined"
                        sx={{
                          width: 36,
                          height: 36,
                          backgroundColor: theme.palette.primary.light,
                        }}
                      >
                        07
                      </Avatar>
                      <Typography variant="body2">
                        تنظيم المراسلات الخاصة بالناقلات التي انتهى شحنها أو
                        تفريغها
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </TabPanel>
        </Paper>
      </Stack>

      <Button
        onClick={handleGoUp}
        color="secondary"
        variant="contained"
        endIcon={<ArrowCircleUpIcon />}
        sx={{
          display: scrollPosition > 200 ? "inline-flex" : "none",
          gap: "0.8rem",
          position: "fixed",
          bottom: "3rem",
          borderRadius: 0,

          zIndex: 1030,
          left: "-0.5rem",
        }}
      >
        العودة للاعلى
      </Button>
    </PageContainer>
  );
}
