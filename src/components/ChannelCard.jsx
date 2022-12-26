import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/Constants";

const ChannelCard = ({ channelDetail }) => {
    return <Box sx={{ boxShadow: "none", borderRadius: "20px" }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`} >

        </Link>
    </Box>;
};

export default ChannelCard;



// 1:23:00