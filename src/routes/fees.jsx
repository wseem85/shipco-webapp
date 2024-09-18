import {
  Divider,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PageContainer from "../ui/pageContainer";
import Heading from "../ui/heading";
import SubHeading from "../ui/subHeading";
import PaidIcon from "@mui/icons-material/Paid";
import { useEffect } from "react";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.primary.light
        : theme.palette.secondary.light,
    color:
      theme.palette.mode === "light"
        ? theme.palette.common.white
        : theme.palette.background.paper,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));
export default function Fees() {
  useEffect(function () {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <PageContainer>
      <Stack spacing={4}>
        <Stack rowGap={1}>
          <Heading>التعرفة و بدلات الخدمات</Heading>
          <Stack
            spacing={1}
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            justifyContent="center"
            columnGap={1}
          >
            <PaidIcon />
            <Typography variant="h6" textAlign="center">
              عمولة خدمات الشركة المحددة بموجب قرار وزير النقل رقم /1103/ تاريخ
              1/11/2021
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography>
            يستوفي الوكيل الملاحي لقاء الخدمات التي تقدم للسفن المعدة لنقل
            البضائع على اختلاف نوعها وطريقة شحنها وكذلك سفن الحاويات والرورو
            البدل المذكور وفق ما يلي
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <SubHeading text="بدل خدمات الوكالة عن السفينة" />
          <TableContainer>
            <Table aria-label="بدل خدمات الوكالة عن السفينة">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell align="right">
                    حمولة السفينة القائمةGRT (طن/برميل)
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    العمولة بالدولار الامريكي
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <TableCell align="right" component="th" scope="row">
                    حتى 500 طن
                  </TableCell>
                  <TableCell align="right">$300</TableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <TableCell align="right" component="th" scope="row">
                    501-2000
                  </TableCell>
                  <TableCell align="right">$450</TableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <TableCell align="right" component="th" scope="row">
                    2001-4000
                  </TableCell>
                  <TableCell align="right">$700</TableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <TableCell align="right" component="th" scope="row">
                    4001-6000
                  </TableCell>
                  <TableCell align="right">$1100</TableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <TableCell align="right" component="th" scope="row">
                    6001-8000
                  </TableCell>
                  <TableCell align="right">$1600</TableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <TableCell align="right" component="th" scope="row">
                    8001-10000
                  </TableCell>
                  <TableCell align="right">$2100</TableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <TableCell align="right" component="th" scope="row">
                    ما زاد عن 10000 طن
                  </TableCell>
                  <TableCell align="right">$75 عن كل 1000 طن أو جزئه</TableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer>
            <Table aria-label="بدل خدمات الوكالة عن السفينة">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell align="right">نوع السفينة</StyledTableCell>
                  <StyledTableCell align="right">العمولة</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <TableCell align="right" component="th" scope="row">
                    سفن الركاب السياحية
                  </TableCell>
                  <TableCell align="right">
                    يستوفي الوكيل الملاحي /1400/ دولار عن كل سفينة
                  </TableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <TableCell align="right" component="th" scope="row">
                    سفن الركاب السريعة
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    يستوفي الوكيل الملاحي /500/ دولار عن كل سفينة
                  </TableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <TableCell
                    colSpan={2}
                    align="right"
                    component="th"
                    scope="row"
                  >
                    تخفض هذه البدلات بمعدل 50% للسفن الأجنبية و 60% للسفن
                    السورية إذا أمت أي سفينة المرافئ السورية بقصد الزيارة أو
                    التزود بالمؤونات أو المحروقات أو الاصلاح وما شابه ولم تقم
                    بأي عمل تجاي خلال فترة وجودها شريطة أن يتم منحا حرية
                    المخالطة على أن لا تزيد فترة بقاءها في المرفأ عن مدة /20/
                    يوم ويستوفى البدل كامل في حال تجاوز بقاءها الفترة المذكورة.
                  </TableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
        <Stack spacing={2}>
          <SubHeading text="بدل خدمات الوكالة عن ناقلات النفط ومشتقاته" />
          <TableContainer>
            <Table aria-label="بدل خدمات الوكالة عن السفينة">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell align="right">
                    حمولة الناقلةGRT
                  </StyledTableCell>
                  <StyledTableCell align="right">بدل الوكالة</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <TableCell align="right" component="th" scope="row">
                    حتى 10000 برميل
                  </TableCell>
                  <TableCell align="right">$1300</TableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <TableCell align="right" component="th" scope="row">
                    ما زاد عن 10000 طن
                  </TableCell>
                  <TableCell align="right">$60 عن كل 1000 برميل</TableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
        <Stack spacing={2}>
          <Stack>
            <SubHeading text="عمولة ربط البضائع الصادرة" />
            <Typography variant="body2">
              يستوفي الوكيل الملاحي عمولة ربط عن البضائع الصادرة التي تم ربطها
              من قبله مقدارها 3% من أجور الشحن
            </Typography>
          </Stack>
          <Stack>
            <SubHeading text="عمولة أجور الشحن عن البضائع الواردة أو الصادرة" />
            <Typography variant="body2">
              تستوفي شركة التوكيلات الملاحية عمولة مقدارها 2% من قيمة أجور الشحن
              عن البضائع الواردة أو الصادرة على متن سفن الحاويات أو السفن
              الناقلة للبضائع العامة والرورو أو العمولة المحددة في المادة /1/ من
              هذه القرار المتعلق ببدل خدمات الوكالة أيهما أفضل لمصلحة الوكيل
              والواردة في وكالتها حصرا
            </Typography>
          </Stack>
          <Divider />
          <Stack>
            <SubHeading text="عمولة تحصيل أجور الشحن المحولة" />
            <Typography variant="body2">
              يستوفي الوكيل الملاحي عمولة عن أجور الشحن المترتبة على البضائع
              الواردة المحصلةبواقع 2% من قيمتها
            </Typography>
          </Stack>
          <Stack>
            <SubHeading text="عمولة الحاويات" />
            <Typography variant="body2">
              أ- أتعاب تتبع حركة الحاويات والعربات و المافيات(الحاويات المسطحة)
              و المقطورات: <br /> يستوفي الوكيل الملاحي لقاء تتبع حركة الحاويات
              أو العربات أو المافيات أو المقطورات في مختلف مراحل النقل والتسليم
              عمولة مقدارها /6/ دولار للحاوية مهما كان قياس الحاوية
            </Typography>
            <Typography variant="body2">
              ب- يستوفي الوكيل الملاحي عمولة مقدارها 4% من قيمة الغرامات
              المترتبة على تاخير تفريغ الحاويات التي يتم تحصيلها لحساب الشركات
              الناقلة أو أصحاب السفن
            </Typography>
          </Stack>
          <Divider />
          <Stack>
            <SubHeading text="بدل أدوات تفريغ البضائع في حال ورودها بالشروط النظامية" />
            <Typography variant="body2">
              يستوفي الوكيل الملاحي مبلغ /30/ سنت أمريكي على الطن الواحد أو جزئه
              بالاضافة إلى بدل التنضيد الذي تستوفيه شركات المرافئ او محطات
              الحاويات و أجور الروافع بموجب إيصالات رسمية عن الطن الواحد أو جزئه
              باستثناء البضائع الواردة على سفن الرورو والمحملة على شاحنات أو
              مقطورات
            </Typography>
          </Stack>
          <Stack>
            <SubHeading text="أجور كتبة التعداد" />
            <Typography variant="body2">
              يستوفي الوكيل الملاحي مبلغ /20/ سنت أمريكي عن كل طن أو جزئه عن
              البضائع الواردة أو الصادرة بغض النظر عن شروط الشحن و التفريغ من /
              إلى السفينة بما فيه تفريغ وتعبئة الحاويات ومبلغ /25/ ليرة سورية من
              / إلى السفن السورية
            </Typography>
          </Stack>
          <Stack>
            <SubHeading text="أجور المراقبين الذيين يعملون على السفن التي تنقل مواد الدوكمة والسائلة" />
            <Typography variant="body2">
              يستوفي الوكيل الملاحي يويا مبلغ /25/ دولار أمريكي من السفينة
              الأجنبية أو ما يعادلها بالليرة السورية من السفينة السورية بغض
              النظر عن شرط الشحن
            </Typography>
          </Stack>
          <Divider />
          <Stack>
            <SubHeading text="العمولات والنفقات المختلفة" />
            <Typography variant="body2">
              يستوفي الوكيل الملاحي عن كل رحلة سفينة تؤم المرافئ السورية النفقات
              التالية :
              <br />
            </Typography>
            <Typography variant="body2">
              أ- /450/ دولار أمريكي لقاء نفقات (البريد - المراسلات- الطوابع
              -المكالمات الهاتفية المحلية والدولية - نفقات نثرية أخرى - رسوم
              تجديد شهادات)ويطبق نفس البدل على على الناقلات التي تؤم المصبات
              النفطية السورية بوكالة شركة التوكيلات الملاحية.
              <br />
              ب- /75/ دولار أمريكي أجور زورق من السفينة الأجنبية و /100000/ ليرة
              سورية من السفينة السورية في حال طلب الزورق من قبل ربان السفينة أو
              طاقمها وذلك عن كل رحلة زورق.
              <br />
              ج-/15/دولار أمريكي أجور سيارة عن كل ساعة أو جزئها من السفينة
              الأجنبية و /10000/ ليرة سورية من السفينةالسورية في حال طلبت
              السيارة من قبل ربان السفينة أو طاقمها.
              <br />
              د- 10% من قيمة الفواتير عن الخدمات المقدمة للسفن من قبل الوكيل
              العام أو عن الخدمات المقدمة من قبل الوكيل الخاص (مياه - تموين -
              كوي - غسيل - تنظيف عنابر - وضع حواجز وقواطع ضمن عنابر السفينة -
              انتشال حبال وطرود من البحر - كشوف الخبرة على السفينة - إصلاح أجهزة
              - شهادات التصنيف والتوصيف)
              <br />
              هـ- مبلغ /20/ دولار أمريكي من السفينة الأجنبية أو ما يعادلها
              بالليرة السورية من السفينة السورية لقاء استقبال أو تسفير كل بحار
              <br />
              و- مبلغ /20/ دولار أمريكي من السفينة الاجنبية او ما يعادله بالليرة
              السورية من السفينة السورية لقاء مرافقة مريض فقة مريض إلى الطبيب أو
              المشفى عن كل يوم
              <br />
              ز- مبلغ /150/ دولار أمريكي لقاء تزويد السفينة بالمحروقات
              <br />
              ح- يستوفي الوكيل الملاحي عمولة مقدارها 10% عن كل خدمة يقدمها الغير
              وفق فواتير نظامية لم يرد ذكرها في مواد هذا القرار.
            </Typography>
          </Stack>
          <Divider />
          <Stack spacing={2}>
            <SubHeading text="الدعاوى و المصالحات" />
            <Stack spacing={1}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1rem",
                }}
              >
                الدعاوى المستعجلة ووصف الحالة الراهنة وفك الحجز
              </Typography>
              <Typography variant="body2">
                يستوفي الوكيل الملاحي بالاضافة إلى المصاريف والنفقات و الأتعاب
                الفعلية عن كل دعوى مبلغ /300/ دولار أمريكي من السفينة الاجنبية
                او ما يعادله ليرة سورية من السفينة السورية ويشمل هذا المبلغ
                أتعاب الشركة و أتعاب المحاماة ونفقتها النثرية والإدارية والترجمة
                ويضاف إلى هذا المبلغ :
              </Typography>
              <Typography variant="body2">
                1-رسم الوكالة للمحامي في حال تنظيهما
              </Typography>
              <Typography variant="body2">
                2- النفقات الفعلية للخبرة في حال ترتبها
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1rem",
                }}
              >
                المصالحات والتسويات الودية
              </Typography>

              <Typography variant="body2">
                1- المخالفات الجمركية : يستوفي الوكيل الملاحي عن كل مخالفة
                جمركية 2% من قيمة التسوية شريطة ألا يقل المبلغ عن /25/ دولار
                أمريكي من السفينة الأجنبية أو ما يعادله ليرة سورية من السفينة
                ولا يزيد عن /200/ دولار أمريكي
              </Typography>
              <Typography variant="body2">
                2- التسوية أو المصالحة المتعلقة بالبضائع : يستوفي الوكيل الملاحي
                عن كل تسوية أو مصالحة 10% من المبلغ الموفر بين المطالبة الأصلية
                و المصالحة شريطة ألا يقل المبلغ عن /50/ دولار أمريكي
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1rem",
                }}
              >
                الدعاوى الأخرى
              </Typography>

              <Typography variant="body1">
                يستوفي الوكيل الملاحي عن كل دعوى المبالغ التالية :
              </Typography>
              <Typography variant="body2">1- رسم وكالة المحامي</Typography>
              <Typography variant="body2">
                2- النفقات الفعلية لأجور الخبرة في حال ترتبها
              </Typography>
              <Typography variant="body2">
                3- رسم المحاكم التي تسدد إلى المحكمة أو إلى مديرية المالية
              </Typography>
              <Typography variant="body2">
                4- نفقات الاستئناف و الطعن التي ترفع للمحاكم
              </Typography>
              <Typography variant="body2">
                5- أتعاب المحامي وحصة صندوق نقابة المحامين والشركة عن كل دعوى
                وفقا لما يلي
              </Typography>
              <TableContainer>
                <Table aria-label="بدل خدمات الوكالة عن الدعاوى">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell align="right">
                        مبلغ الادعاء في الدعوى
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        مقدار مقدم الأتعاب من قيمة الدعوى
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        مؤخر الأتعاب من قيمة المبلغ الموفر
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
                      <TableCell align="right" component="th" scope="row">
                        حتى 15000 دولار
                      </TableCell>
                      <TableCell align="right">
                        6% على أن لا يقل عن /250/ دولار أمريكي
                      </TableCell>
                      <TableCell align="right">5%</TableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <TableCell align="right" component="th" scope="row">
                        من 15001 حتى 25000دولار
                      </TableCell>
                      <TableCell align="right">
                        5% على أن لا يقل عن 500 دولار أمريكي
                      </TableCell>
                      <TableCell align="right">5%</TableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <TableCell align="right" component="th" scope="row">
                        ما فوق 25000 دولار
                      </TableCell>
                      <TableCell align="right">
                        4% على أن لا يقل عن 1000 دولار أمريكي
                      </TableCell>
                      <TableCell align="right">5%</TableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={1}>
            <SubHeading text="عمولة وكالة البضائع الواردة من مرافئ مختلفة أو البضائع الصادرة من المرافئ السورية" />
            <Typography>
              يستوفي الوكيل الملاحي من أصحاب البضائع لقاء الخدمات التي تقدمها
              وكالته للبضائع الواردة من مرافئ مختلفة أو الصادرة من المرافئ
              السورية أو في حال كانت مصدرة على السفن بموجب بيانات جمركية على متن
              السفن التي ترد بوكالته :
            </Typography>
            <Typography variant="body2">أ- عمولة وكالة</Typography>
            <TableContainer>
              <Table aria-label=" بدل خدمات الوكالة عن البضاعة">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell colSpan={2} align="right">
                      نوع البضاعة
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      بدل الخدمات والعمولات
                    </StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <TableCell align="right" component="th" scope="row">
                      1-
                    </TableCell>
                    <TableCell align="right">الحاويات الكاملة</TableCell>
                    <TableCell align="right"></TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell
                      align="right"
                      component="th"
                      scope="row"
                    ></TableCell>
                    <TableCell align="right">20 قدم</TableCell>
                    <TableCell align="right">40$ دولار أمريكي</TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell
                      align="right"
                      component="th"
                      scope="row"
                    ></TableCell>
                    <TableCell align="right">40 قدم</TableCell>
                    <TableCell align="right">60$ دولار أمريكي</TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell align="right" component="th" scope="row">
                      2-
                    </TableCell>
                    <TableCell align="right">
                      السيارات السياحية الواردة على سفن رورو
                    </TableCell>
                    <TableCell align="right">
                      15$ دولار أمريكي عن كل سيارة
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell align="right" component="th" scope="row">
                      3-{" "}
                    </TableCell>
                    <TableCell align="right">
                      السيارات السياحية الواردة على سفن عادية
                    </TableCell>
                    <TableCell align="right">
                      20$ دولار أمريكي عن كل سيارة
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell
                      align="right"
                      component="th"
                      scope="row"
                    ></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell align="right" component="th" scope="row">
                      4-
                    </TableCell>
                    <TableCell align="right">
                      الشاحنات والمدحرجات الواردة على سفن رورو
                    </TableCell>
                    <TableCell align="right">
                      30$ دولار أمريكي عن كل شاحنة أو آلية
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell align="right" component="th" scope="row">
                      5-
                    </TableCell>
                    <TableCell align="right">
                      الشاحنات و المدحرجات الواردة عن سفن عادية
                    </TableCell>
                    <TableCell align="right">
                      35$ دولار أمريكي عن كل شاحنة أو آلية
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell align="right" component="th" scope="row">
                      6-
                    </TableCell>
                    <TableCell align="right">خشب</TableCell>
                    <TableCell align="right">
                      1$ دولار أمريكي عن الطن أو متر مكعب
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell align="right" component="th" scope="row">
                      7-
                    </TableCell>
                    <TableCell align="right">
                      الدوكما و المواد السائلة والمشتقات النفطية
                    </TableCell>
                    <TableCell align="right">
                      0.25$ دولار أمريكي عن الطن
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell align="right" component="th" scope="row">
                      8-
                    </TableCell>
                    <TableCell align="right">
                      المواشي صغيرة الحجم(خراف - ماعز ..الخ)
                    </TableCell>
                    <TableCell align="right">
                      0.15$ دولار أمريكي لرأس الماشية
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell align="right" component="th" scope="row">
                      9-
                    </TableCell>
                    <TableCell align="right">
                      المواشي كبيرة الحجم (بقر - جمل ... الخ)
                    </TableCell>
                    <TableCell align="right">
                      0.40$ دولار أمريكي لرأس الماشية
                    </TableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <TableCell align="right" component="th" scope="row">
                      10-
                    </TableCell>
                    <TableCell align="right">
                      ما تبقى من أنواع البضائع
                    </TableCell>
                    <TableCell align="right">
                      1.5$ دولار أمريكي عن كل طن أو متر مكعب أيهما أفضل لصالح
                      الوكيل
                    </TableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
              }}
            >
              ب- /0.20/ دولار أمريكي عن كل طن أو جزئه أجور أدوات تفريغ / تحميل
              في حال تقديمها من قبل الوكيل الملاحي وكانت البضاعة الواردة أو
              الصادرة بشرط /فيو/
              <br />
              في حال كانت الحاوية مشتركة , يستوفي الوكيل الملاحي عمولة عنها على
              أساس الطن وفقا للبند /7/ من الفقرة /أ/ من المادة /11/ ويضاف إلى كل
              وثيقة شحن /10/ دولار أمريكي إذا كانت واردة برسم الاستهلاك المحلي
              أو إذا كانت واردة بمقصد منطقة حرة أو ترانزيت خارجي هذا ويعتبر جزء
              الطن طنا واحدا .
            </Typography>
            <Typography variant="body2">
              د- أجور المساعي الجمركية المترتبة على الشحن أو التفريغ حسب شرط
              الشحن المدون على وثيقة الشحن.
            </Typography>
            <Typography variant="body2">
              هـ- في حال وصول سفينة تحمل بضائع بموجب بوالص شحن صادرة عن وكيل
              الخط الملاحي يتم استيفاء عمولة وكالة هذه البضائع مناصفة بين وكيل
              السفينة ووكيل الخط الملاحي بواقع 50% لكل منهما .
            </Typography>
            <Typography variant="body2">
              و- عندما تتطلب البضائع إجراءات حماية ريثما يتم استلامها من قبل
              أصحابها , يتم تقديم الأدوات اللازمة لهذه المطلبة وفق مطالبة أصولية
              صادرة عن وكيل السفينة تتضمن تفصيلا لقيمة المواد الفعلية مضافا
              إليها نسبة أتعاب لصالح الوكيل بواقع 10% من قيمتها بغض النظر عن
              شروط الشحن .
            </Typography>
            <Typography variant="body2">
              ز- مبلغ /5/ دولار أمريكي للبضائع الواردة برسم الاستهلاك المحلي أو
              مبلغ /15/ دولار أمريكي للبضائع الواردة بقصد منطقة حرة أو ترانزيت
              خارجي عند إصدار أي كتال تصحيح, باستثناء الأخطاء المادية نتيجة
              الطباعة والترجمة
            </Typography>
            <Typography variant="body2">
              ز- مبلغ /5/ دولار أمريكي للبضائع الواردة برسم الاستهلاك المحلي أو
              مبلغ /15/ دولار أمريكي للبضائع الواردة بقصد منطقة حرة أو ترانزيت
              خارجي عند إصدار أي كتال تصحيح, باستثناء الأخطاء المادية نتيجة
              الطباعة والترجمة
            </Typography>
            <Typography variant="body2">
              ح- مبلغ /5/ دولار أمريكي للبضائع الواردة برسم الاستهلاك المحلي أو
              مبلغ /15/ دولار أمريكي للبضائع الواردة بمقصد منطقة حرة أو ترانزيت
              خارجي عند إصدار أي بوليصة بضائع صادرة .
            </Typography>
            <Typography variant="body2">
              خ- تخفض البدلات الواردة في الجدول /أ/ بنسبة 50% للبضائع الواردة
              للاستهلاك المحلي وللبضائع الصادرة ذات المنشأ المحلي .
            </Typography>
          </Stack>
          <Divider />
          <Stack spacing={1}>
            <SubHeading text="اجور الزوارق في مصبات النفط" />
            <Typography>
              تستوفي شركة التوكيلات الملاحية مبلغ /200/ دولار أمريكي عن كل رحلة
              للزورق في المصبات النفطية
            </Typography>
          </Stack>
          <Divider />
        </Stack>
      </Stack>
    </PageContainer>
  );
}
