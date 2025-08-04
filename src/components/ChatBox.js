/* eslint-disable react/prop-types */

import { useState, useRef, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Stack,
} from '@mui/material';

const ChatBox = ({ messages, onSend }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box sx={{ border: '1px solid #ccc', borderRadius: 2, p: 2 }}>
      <Typography variant="h6" gutterBottom>Chat with Athlete</Typography>

      <Paper variant="outlined" sx={{ maxHeight: 300, overflowY: 'auto', mb: 2, p: 1 }}>
        <Stack spacing={1}>
          {messages.map((msg, index) => (
            <Box key={index  /* eslint-disable-line react/no-array-index-key */} alignSelf={msg.sender === 'user' ? 'flex-end' : 'flex-start'}>
              <Typography
                sx={{
                  backgroundColor: msg.sender === 'user' ? '#1976d2' : '#eee',
                  color: msg.sender === 'user' ? '#fff' : '#000',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  display: 'inline-block',
                  maxWidth: '75%',
                }}
              >
                {msg.text}
              </Typography>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Stack>
      </Paper>

      <Stack direction="row" spacing={2}>
        <TextField
          fullWidth
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button variant="contained" onClick={handleSend}>
          Send
        </Button>
      </Stack>
    </Box>
  );
};

export default ChatBox;
