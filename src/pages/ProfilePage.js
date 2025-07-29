import Head from "next/head";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
  Paper,
} from "@mui/material";

export default function ProfilePage() {
  // MOCK Data
  const user = {
    firstName: "William",
    lastName: "Zambito",
    email: "wzambito@middlebury.edu",
    sport: "Football",
  };

  const purchasedVideos = [
    {
      sport: "Football",
      position: "Quarterback",
      athlete: "Tom Brady",
      videoUrl: "https://youtu.be/xvFZjo5PgG0?si=kMgKlAj9iZl_whn6",
    },
    {
      sport: "Hockey",
      position: "Goalie",
      athlete: "Ethan Roy",
      videoUrl: "https://youtu.be/xvFZjo5PgG0?si=kMgKlAj9iZl_whn6",
    },
  ];

  return (
    <>
      <Head>
        <title>My Profile | A2A Sports</title>
      </Head>

      <Box sx={{ pt: "140px", pb: 10, backgroundColor: "#fafafa", minHeight: "100vh" }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={700} gutterBottom>
            My Profile
          </Typography>

          {/* Profile Info */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>First Name:</strong> {user.firstName}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Last Name:</strong> {user.lastName}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Email:</strong> {user.email}
            </Typography>
            <Typography variant="body1">
              <strong>Sport:</strong> {user.sport}
            </Typography>
          </Box>

          {/* Video Table */}
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Purchased Videos
          </Typography>

          <Paper elevation={2}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Sport</strong></TableCell>
                  <TableCell><strong>Position</strong></TableCell>
                  <TableCell><strong>Athlete</strong></TableCell>
                  <TableCell><strong>Video</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {purchasedVideos.map((video, index) => (
                  <TableRow key={index /* eslint-disable-line react/no-array-index-key */}>
                    <TableCell>{video.sport}</TableCell>
                    <TableCell>{video.position}</TableCell>
                    <TableCell>{video.athlete}</TableCell>
                    <TableCell>
                      <Link
                        href={video.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        color="primary"
                      >
                        Watch Video
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
