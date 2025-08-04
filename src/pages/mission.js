import Head from "next/head";
import { Box, Container, Typography, Divider, Stack } from "@mui/material";

export default function Mission() {
  return (
    <>
      <Head>
        <title>Our Mission | A2A Sports</title>
        <meta
          name="description"
          content="Discover A2A's mission to provide affordable mentorship and training from college athletes to the next generation of aspiring players."
        />
      </Head>

      <Box sx={{ pt: "140px", pb: 10, backgroundColor: "#fafafa", minHeight: "100vh" }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Our Mission
          </Typography>

          <Typography variant="body1" color="text.secondary" mb={4}>
            At A2A, we believe every young athlete deserves access to top-tier mentorship and character development — regardless of financial background. By connecting aspiring players with college athletes who’ve recently walked the same path, we create a system of affordable, position-specific learning that extends far beyond the field.
          </Typography>

          <Typography variant="body1" color="text.secondary" mb={4}>
            We envision a future where parents feel confident knowing they’ve given their children a unique opportunity: real skills, real role models, and lifelong lessons — all delivered by athletes just one level ahead.
          </Typography>

          <Divider sx={{ my: 6 }} />

          <Typography variant="h5" fontWeight={600} gutterBottom>
            Why Families Choose A2A
          </Typography>

          <Stack spacing={4} mt={2}>
            {/* Ethos */}
            <Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                🏆 Ethos — Credibility & Trust
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                We’re backed by the athletes, mentors, and parents who believe in our model. A2A delivers:
              </Typography>
              <Box sx={{ pl: 3 }}>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li>✅ “Trusted Training, Brighter Futures.”</li>
                  <li>✅ “The Foundation for Their Success.”</li>
                  <li>✅ “Confidence Built, Futures Forged.”</li>
                </ul>
              </Box>
            </Box>

            {/* Pathos */}
            <Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                ❤️ Pathos — Emotion & Connection
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Behind every lesson is a personal story. Our platform resonates emotionally with families through:
              </Typography>
              <Box sx={{ pl: 3 }}>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li>💡 “Investing in Their Tomorrow, Affordably Today.”</li>
                  <li>💡 “Empowering Young Minds, One Skill at a Time.”</li>
                  <li>💡 “Give Them the Edge, Without the Expense.”</li>
                </ul>
              </Box>
            </Box>

            {/* Logos */}
            <Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                📊 Logos — Logic & Results
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                We’re not just inspiring — we’re effective. Parents choose A2A because of:
              </Typography>
              <Box sx={{ pl: 3 }}>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li>📈 “Smart Skills, Smart Savings, Strong Start.”</li>
                  <li>📈 “Quality Training. Unbeatable Value. Proven Results.”</li>
                  <li>📈 “Strategic Learning for Tomorrow’s Leaders.”</li>
                </ul>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
