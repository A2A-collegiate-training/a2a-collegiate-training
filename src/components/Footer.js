import { Box, Container, Typography, Button, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#f5f5f5",
        py: 4,
        mt: 10,
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          &copy; {new Date().getFullYear()} A2A Sports — All rights reserved.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
          <Button variant="text" size="small" color="inherit">
            Contact
          </Button>
          <Button variant="text" size="small" color="inherit">
            Terms
          </Button>
          <Button variant="text" size="small" color="inherit">
            Privacy Policy
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
