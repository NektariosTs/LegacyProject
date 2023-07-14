import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{fontFamily:"fantasy"}} variant="h2" gutterBottom>
          This is a CRUD Application
        </Typography>
        <Typography variant="h3" gutterBottom sx={{fontFamily:"fantasy"}} >
          By MERN STACK
        </Typography>
        <Typography variant="h4" gutterBottom sx={{fontFamily:"fantasy"}} >
         that is created by Melpomeni and Ameneh asdasdasdasdasdasdasdasdasdasd
        </Typography>
      </Box>
    </div>
  );
}

export default About;
