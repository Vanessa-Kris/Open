import { Box, Typography } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <Box
      component="footer"
      align="center"
      justifyContent="center"
      mx="auto"
      sx={{
        color: "text.primary",
        bgcolor: "secondary.main",
        p: 2,
      }}
    >
      <Box>
        <Box
          component="a"
          href="https:/smswithoutborders.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            style={{ color: "text.primary", paddingLeft: 10 }}
            icon={faXTwitter}
            size="large"
          />
        </Box>
        <a
          href="https:/smswithoutborders.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            style={{ color: "text.primary", paddingLeft: 10 }}
            icon={faFacebook}
          />
        </a>
        <a
          href="https:/smswithoutborders.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            style={{ color: "text.primary", paddingLeft: 10 }}
            icon={faGithub}
          />
        </a>
        <a
          href="https:/smswithoutborders.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            style={{ color: "text.primary", paddingLeft: 10 }}
            icon={faLink}
          />
        </a>
        <a
          href="https:/smswithoutborders.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            style={{ color: "text.primary", paddingLeft: 10 }}
            icon={faYoutube}
          />
        </a>
      </Box>
      <Box>
        <Typography variant="p">
          &copy; {new Date().getFullYear()} SMSWithoutBorders.com
        </Typography>
      </Box>
    </Box>
  );
}
