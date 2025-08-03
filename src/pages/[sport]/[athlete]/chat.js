import { useRouter } from 'next/router';
import {
  Typography,
  Container,
  Divider,
} from '@mui/material';
import { useState } from 'react';
import ChatBox from '../../../components/ChatBox';

export default function ChatPage() {
  const router = useRouter();
  const { athlete } = router.query;
  const name = athlete?.replace(/-/g, ' ') || '';

  // Mock subscription check (replace with real auth later)
  const isSubscribed = true;

  const [chatMessages, setChatMessages] = useState([
    { text: 'Welcome to the private chat!', sender: 'athlete' },
    { text: 'Thanks coach!', sender: 'user' },
  ]);

  if (!isSubscribed) {
    return (
      <Container sx={{ mt: '150px' }}>
        <Typography variant="h6">You must be subscribed to access this chat.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: '150px' }}>
      <Typography variant="h4" gutterBottom>
        Chat with {name}
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <ChatBox
        messages={chatMessages}
        onSend={(msg) => {
          setChatMessages((prev) => [...prev, { text: msg, sender: 'user' }]);
        }}
      />
    </Container>
  );
}
