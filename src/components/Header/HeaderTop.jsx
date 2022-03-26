import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Header.css";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <Container sx={{ py: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "inherit" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 1, md: 4 },
            textAlign: "center",
          }}
        >
          <Typography sx={{fontSize: {xs:13,md:16, }}} variant="subtitle1">
            Official Wallet Address for GEMS NFT Leaderboard
          </Typography>
          <Typography
            sx={{ backgroundColor: "#968ff0", px: 2, borderRadius: 50, fontSize: {xs:12, md:16} }}
            variant="subtitle1"
          >
            02XK469976DXZ00174CAE43007218
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default HeaderTop;
