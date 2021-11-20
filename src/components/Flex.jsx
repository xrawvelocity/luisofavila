import { Box } from "@mui/system";
import React from "react";

const Flex = ({ sx, children }) => {
    return <Box sx={{ display: "flex", ...sx }}>{children}</Box>;
};

export default Flex;
