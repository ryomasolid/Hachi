"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();

  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // ログインボタン
  const onClick = () => {
    if (id === "test" && password === "test") {
      router.push("/top");
    }
  };

  return (
    <>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
        sx={{ height: "60vh" }}
      >
        <Stack direction={"row"} alignItems="center" gap={2}>
          <Typography variant={"body1"}>ログインID</Typography>
          <TextField value={id} onChange={onChangeId} size="small"></TextField>
        </Stack>
        <Stack direction={"row"} alignItems="center" gap={2}>
          <Typography variant={"body1"}>パスワード</Typography>
          <TextField
            value={password}
            onChange={onChangePassword}
            size="small"
          ></TextField>
        </Stack>
        <Button variant="contained" size="large" onClick={onClick}>
          ログイン
        </Button>
      </Box>
    </>
  );
};

export default LoginPage;
