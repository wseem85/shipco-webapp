import { Typography } from "@mui/material";
import { useDark } from "../contexts/modeContext";
import PropTypes from "prop-types";

export default function Heading({ children }) {
  const { dark } = useDark();
  return (
    <Typography
      className={dark ? "SectionHeading dark" : "SectionHeading"}
      variant="h3"
      color="primary"
      sx={{
        fontSize: "1.4rem",
        fontWeight: 600,
        marginBottom: "2rem",

        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
}
Heading.propTypes = {
  children: PropTypes.elementType,
};
