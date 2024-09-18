import { CircularProgress, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Stack
      direction="column"
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Stack>
  );
}
