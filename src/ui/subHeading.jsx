import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

export default function SubHeading({ text, icon }) {
  // const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h5"
        color="primary"
        // bgcolor={theme.palette.grey[200]}
        sx={{
          fontSize: "1.1rem",
          alignItems: "center",
          justifyContent: "center",
          width: "fit-content",

          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          flexDirection: {
            xs: "column-reverse",
            sm: "row",
          },
          // borderBottom: `2px solid ${theme.palette.secondary.main}`,
          // borderTop: `2px solid ${theme.palette.secondary.main}`,
          gap: "1rem",
          display: "flex",
          p: "0.6rem 1.3rem",

          fontWeight: 600,
        }}
      >
        {icon}

        {text}
      </Typography>
    </Box>
  );
}
SubHeading.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
};
