import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TrendPropertyCard = () => {
  return (
    <Stack className="trend-card-box">
      <Box
        className="card-img"
        style={{
          backgroundImage: 'url("/img/banner/types/house.webp")',
        }}
      >
        <div className="price">$330,000</div>
      </Box>
      <Box className="info">
        <strong className="title">Kingston Buildings</strong>
        <p className="desc">California City, CA, USA</p>
        <div className="options">
          <div>
            <img src="/img/icons/bed.svg" alt="" />
            <span>5 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>7 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>280 m²</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className="bottom">
          <span>Rent</span>
          <div className="view-like-box">
            <IconButton color="default">
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">130</Typography>
            <IconButton color="default">
              <FavoriteIcon style={{ color: "red" }}/>
            </IconButton>
            <Typography className="view-ctn">180</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TrendPropertyCard;
