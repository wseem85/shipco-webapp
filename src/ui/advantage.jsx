import { Avatar, Paper, Stack, Typography } from "@mui/material";
import CardHeading from "./cardHeading";

export default function Advantage({ title, src, details }) {
  return (
    <Paper
      sx={{
        // backgroundColor: "#fff",
        padding: "1rem",
        height: {
          sm: "250px",
        },
      }}
    >
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
          rowGap: 1.2,
          marginBottom: 1.5,
        }}
      >
        <CardHeading>{title}</CardHeading>
        <Avatar src={src} />
      </Stack>
      <Typography variant="body2">{details}</Typography>
    </Paper>
  );
}
