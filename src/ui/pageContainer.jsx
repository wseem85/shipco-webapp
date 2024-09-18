import { Stack } from "@mui/material";
import PropTypes from "prop-types";
export default function PageContainer({ children }) {
  return (
    <Stack
      sx={{
        position: "relative",
        margin: {
          xs: "1rem 1rem",
          sm: "2rem 2rem",
        },
        top: {
          xs: "56px",
          sm: "64px",
        },
      }}
      spacing={8}
    >
      {children}
    </Stack>
  );
}
PageContainer.propTypes = {
  children: PropTypes.node,
};
