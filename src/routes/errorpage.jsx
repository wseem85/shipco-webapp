import { useNavigate, useRouteError } from "react-router-dom";

import { Button, Stack, Typography } from "@mui/material";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
        justifyContent: "center",
      }}
      spacing={2}
    >
      <Typography variant="h4"> عذراً !</Typography>
      <Typography variant="h6"> حدث خطأ ما</Typography>
      <Typography variant="body2">
        {error.statusText || error.message}
      </Typography>
      <Button variant="outlined" size="large" onClick={() => navigate("/")}>
        أعد المحاولة
      </Button>
    </Stack>
  );
}
