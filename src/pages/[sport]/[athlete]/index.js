import { useRouter } from 'next/router';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Stack,
  Divider,
  Grid,
  Container,
} from '@mui/material';
import VideoCarousel from '../../../components/VideoCarousel';



export default function AthleteProfile() {
  const router = useRouter();
  const { sport, athlete } = router.query;

  const name = athlete?.replace(/-/g, ' ') || '';
  const imgSrc = `/${athlete}.jpg`;

  const offersSubscription = ['brady'].includes(athlete);
  const isSubscribed = true;

  const mockVideos = [
    { title: 'Video 1' },
    { title: 'Video 2' },
    { title: 'Video 3' },
    { title: 'Video 4' },
    { title: 'Speed Drills Video' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: '75px' }}>
      <Box py={6}>
        {/* Name + Sport */}
        <Typography variant="h4" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {sport}
        </Typography>

        {/* Grid Layout: Avatar (left), Bio + Premium (right) */}
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left: Avatar */}
          <Grid item xs={12} md={4}>
            <Avatar
              alt={name}
              src={imgSrc}
              sx={{
                width: '100%',
                height: 300,
                borderRadius: 3,
                objectFit: 'cover',
              }}
              variant="rounded"
            />
          </Grid>

          {/* Right: Bio + Premium */}
          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              <Typography variant="body1">
                Hello everyone, I am {name}. Currently retired from professional play, but I’ve spent over two decades training, mentoring, and helping young athletes grow. On this platform, you’ll get access to my premium training materials, behind-the-scenes breakdowns, and direct chat access with me.
              </Typography>

              {offersSubscription && (
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Premium Content
                    </Typography>
                    {!isSubscribed ? (
                      <>
                        <Typography variant="body2" mb={2}>
                          Subscribe to get access to exclusive chat and premium content.
                        </Typography>
                        <Button fullWidth variant="contained" color="primary">
                          Subscribe Now
                        </Button>
                      </>
                    ) : (
                      <Stack direction="row" spacing={2}>
                        <Button
  variant="outlined"
  color="primary"
  onClick={() => router.push(`/${sport}/${athlete}/chat`)}
>
  Chat
</Button>

<Button
  variant="outlined"
  color="secondary"
  onClick={() => router.push(`/${sport}/${athlete}/training`)}
>
  Training Plan
</Button>

                      </Stack>
                    )}
                  </CardContent>
                </Card>
              )}
            </Stack>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box mt={6} mb={3}>
          <Divider />
        </Box>

        {/* Video Content */}
        <Typography variant="h5" gutterBottom>
          Athlete Content
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Available Videos
        </Typography>

        <VideoCarousel videos={mockVideos} />
      </Box>
    </Container>
  );
}
