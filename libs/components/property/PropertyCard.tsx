import React, { useState } from "react";
import {
  Stack,
  Typography,
  Checkbox,
  Button,
  OutlinedInput,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
  FormLabel,
  Input,
  Link,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import RefreshIcon from "@mui/icons-material/Refresh";
import { CheckBox, CheckBoxOutlined } from "@mui/icons-material";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import { propertySquare } from "../../config";

const PropertyCard = () => {
  const imagePath: string = "/img/banner/header1.svg";

  return (
    <Stack className="card-config">
      <Stack className="top">
        <Link href="/property/detail?id=test123sdijfsdf">
          <img src={imagePath} alt="" />
        </Link>

        <Box className="top-badge">
          <img src="/img/icons/electricity.svg" alt="" />
          <Typography>TOP</Typography>
        </Box>

        <Box className="price-box">
          <Typography>$350,000</Typography>
        </Box>
      </Stack>

      <Stack className="bottom">
        <Stack className="name-address">
          <Stack className="name">
            <Link href="/property/detail?id=test123sdijfsdf">
              <Typography>LOTTE Apartments</Typography>
            </Link>
          </Stack>

          <Stack className="address">
            <Typography>Busan, City Center 200 - 5</Typography>
          </Stack>
        </Stack>

        <Stack className="options">
          <Stack className="option">
            <img src="/img/icons/bed.svg" alt="" />
            <Typography>2 beds</Typography>
          </Stack>

          <Stack className="option">
            <img src="/img/icons/room.svg" alt="" />
            <Typography>7 rooms</Typography>
          </Stack>

          <Stack className="option">
            <img src="/img/icons/expand.svg" alt="" />
            <Typography>270 m²</Typography>
          </Stack>
        </Stack>

        <Stack className="divider"></Stack>

        <Stack className="type-buttons">
          <Stack className="type">
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              Rent
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              Barter
            </Typography>
          </Stack>

          <Stack className="buttons">
            <IconButton color="default">
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">230</Typography>

            <IconButton color="default">
              <FavoriteIcon color="primary" />
            </IconButton>
            <Typography className="view-cnt">58</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PropertyCard;