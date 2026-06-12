import { Box, Typography, Button, Container, Stack, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { HOME_TEXTS, TAGS } from '../utils/constants';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box className="home-content">
        <Typography
          className="home-overline"
          variant="overline"
        >
          {HOME_TEXTS.OVERLINE}
        </Typography>
        <Typography
          className="home-name"
          variant="h1"
        >
          {HOME_TEXTS.NAME}
        </Typography>
        <Typography
          className="home-title"
          variant="h3"
        >
          {HOME_TEXTS.TITLE}
        </Typography>
        <Typography
          className="home-tagline"
          variant="body1"
        >
          {HOME_TEXTS.TAGLINE}
        </Typography>
        <Typography
          className="home-summary"
          variant="body1"
        >
          {HOME_TEXTS.SUMMARY}
        </Typography>
        <Stack direction="row" className="home-skills-stack">
          {TAGS.map(tag => (
            <Chip
              className="home-skill-list-item"
              key={tag}
              label={tag}
              variant="outlined"
              size="small"
            />
          ))}
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            className="home-view-work-button"
            component={RouterLink}
            to="/projects"
            variant="contained"
            color="primary"
            size="large"
          >
            {HOME_TEXTS.BUTTON.VIEW_WORK}
          </Button>
          <Button
            className="home-contact-button"
            component={RouterLink}
            to="/contact"
            variant="outlined"
            color="primary"
            size="large"
          >
            {HOME_TEXTS.BUTTON.CONTACT}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}