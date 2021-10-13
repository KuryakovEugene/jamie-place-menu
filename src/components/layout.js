import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Layout(props) {
  const { title } = props;

  return (
    <main>
      {title.categories.map((cat) => (
        <Box sx={{ fontSize: 15 }}>
          <Typography component="div">
            <Box
              sx={{
                my:5,
                fontSize: 22.5,
                textAlign: "center",
              }}
            >
              {cat.name}
            </Box>
          </Typography>
          <div>
            {cat.positions.map((pos) => (
              <Box
                my={3}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 1,
                  gridTemplateRows: "auto",
                  gridTemplateAreas: `"header sidebar"
                                      "footer ."`,
                }}
              >
                <Box
                  sx={{
                    gridArea: "header",
                    gridColumn: "1/ 5",
                    fontWeight: "bold",
                    fontSize: 16.5,
                  }}
                >
                  {pos.name}
                </Box>
                <Box sx={{ gridArea: "sidebar", gridColumn: "4 / 5" }}>
                  {pos.price}
                </Box>
                <Box sx={{ gridArea: "footer", gridColumn: "1/ 5" }}>
                  {pos.ingridients}
                </Box>
              </Box>
            ))}
          </div>
        </Box>
      ))}
    </main>
  );
}

export default Layout;
