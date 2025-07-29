import Head from "next/head";
import { Geist } from "next/font/google";
import SportsMenu from "@/components/SportsMenu";

// MUI imports
import { Box, Typography, Container } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <>
      <Head>
        <title>A2A Collegiate Training</title>
        <meta
          name="description"
          content="Elite sports mentorship and video training for young athletes – trusted by parents, powered by pros."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SportsMenu />

      {/* HERO SECTION */}
      <Box
        sx={{
          mt: "100px",
          height: "80vh",
          backgroundImage: "url('/hero-athlete.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: `${geistSans.variable}, sans-serif`,
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />

        {/* Hero content */}
        <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", px: 3, maxWidth: 700 }}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
          Train with College Athletes. Learn What It Really Takes
          </Typography>
          <Typography variant="h6" color="grey.200" mb={4}>
          Affordable mentorship, real experience, and position-specific training — all from players who have been in your shoes.
          </Typography>

        </Box>
      </Box>

      {/* TESTIMONIAL SECTION */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5" fontStyle="italic" gutterBottom>
          “My son gained more than just skills — he found a mentor who believed in him.”
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Trusted by families across North America, A2A bridges the gap between ambition and access — with curated videos and 1:1 guidance from athletes who lead by example.
        </Typography>
      </Container>
    </>
  );
}
