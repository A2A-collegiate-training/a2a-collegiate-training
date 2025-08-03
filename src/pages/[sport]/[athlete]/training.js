import { useRouter } from 'next/router';
import {
  Typography,
  Container,
  Divider,
  Card,
  CardContent,
  Stack,
} from '@mui/material';

export default function TrainingPlanPage() {
  const router = useRouter();
  const { athlete } = router.query;
  const name = athlete?.replace(/-/g, ' ') || '';

  const isSubscribed = true; // replace with actual logic

  // Mock training plans (in future: fetch from Neon)
  const trainingPlans = [
    {
      title: "Week 1: Speed & Agility",
      description: "Warm-up drills, cone acceleration, lateral footwork. Focus on form and explosiveness.",
      postedAt: "2025-07-28",
    },
    {
      title: "Week 2: Endurance & Conditioning",
      description: "Interval sprints, resistance band workouts, endurance drills.",
      postedAt: "2025-07-29",
    },
  ];

  if (!isSubscribed) {
    return (
      <Container sx={{ mt: '150px' }}>
        <Typography variant="h6">You must be subscribed to access the training plan.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: '150px' }}>
      <Typography variant="h4" gutterBottom>
        Training Plan from {name}
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Stack spacing={3}>
        {trainingPlans.map((plan, idx) => (
          <Card key={idx  /* eslint-disable-line react/no-array-index-key */} variant="outlined">
            <CardContent>
              <Typography variant="h6">{plan.title}</Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Posted on {new Date(plan.postedAt).toLocaleDateString()}
              </Typography>
              <Typography variant="body1">{plan.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
