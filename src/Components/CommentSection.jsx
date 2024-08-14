import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';
import axios from 'axios';

const CommentSection = ({ username: propUsername }) => { // Receive username as a prop
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch comments from the backend
    axios.get('http://localhost:8080/comments/get')
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      // Post the comment to the backend with username from props
      if (propUsername) {
        axios.post('http://localhost:8080/comments/post', {
          username: propUsername,
          text: newComment
        })
          .then(response => {
            setComments([...comments, response.data]);
            setNewComment('');
          })
          .catch(error => {
            console.error('Error posting comment:', error);
          });
      } else {
        console.error('Username not provided');
      }
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
        Share your Comments
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Add a comment..."
        value={newComment}
        onChange={handleCommentChange}
        sx={{
          mb: 2,
          backgroundColor: '#fff',
          borderRadius: '5px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      />
      <Button
        variant="contained"
        onClick={handleAddComment}
        sx={{
          mb: 2,
          backgroundColor: 'rgb(255, 83, 83)',
          color: '#fff',
          '&:hover': {
            backgroundColor: 'rgba(255, 83, 83, 0.8)',
          },
        }}
      >
        Post Comment
      </Button>
      <List>
        {comments.map((comment, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start" sx={{ backgroundColor: '#fff', borderRadius: '5px', mb: 2, padding: 2, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <ListItemAvatar>
                <Avatar alt="User Avatar" sx={{ backgroundColor: 'rgb(255, 83, 83)' }} />
              </ListItemAvatar>
              <ListItemText
                primary={comment.username}
                secondary={comment.text}
                primaryTypographyProps={{ fontWeight: 'bold', color: '#333' }}
                secondaryTypographyProps={{ color: '#666' }}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default CommentSection;
