import { Typography } from "@mui/material";
import PropTypes from "prop-types";
export default function CardHeading({ children }) {
  return (
    <Typography
      variant="h4"
      color="primary"
      sx={{
        fontSize: "1.2rem",
      }}
    >
      {children}
    </Typography>
  );
}
CardHeading.propTypes = {
  children: PropTypes.elementType,
};
