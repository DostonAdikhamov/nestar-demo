import React from "react";
import { Stack } from "@mui/material";

const TopAgentsCard = () => {
  return (
    <Stack className="top-agents-card">
      <img
        src="/img/profile/girl.svg"
        alt="agent"
      />
      <strong>Martin</strong>
      <span>Agent</span>
    </Stack>
  );
};

export default TopAgentsCard;
