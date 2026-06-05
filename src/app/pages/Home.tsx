import { Box, Typography, Button, Container, Stack, Chip } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import { HOME_TEXTS, TAGS } from '../utils/constants';
import '../styles/pages/Home.scss';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box className="home-content">
        <Typography
          variant="overline"
          className="home-overline"
        >
          {HOME_TEXTS.OVERLINE}
        </Typography>
        <Typography
          variant="h1"
          className="home-name"
        >
          {HOME_TEXTS.NAME}
        </Typography>
        <Typography
          variant="h3"
          className="home-title"
        >
          {HOME_TEXTS.TITLE}
        </Typography>
        <Typography
          variant="body1"
          className="home-tagline"
        >
          {HOME_TEXTS.TAGLINE}
        </Typography>
        <Typography
          variant="body1"
          className="home-summary"
        >
          {HOME_TEXTS.SUMMARY}
        </Typography>
        <Stack direction="row" className="home-skills-stack">
          {TAGS.map(tag => (
            <Chip
              key={tag}
              label={tag}
              variant="outlined"
              size="small"
              className="home-skill-list-item"
            />
          ))}
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            component={RouterLink}
            to="/projects"
            variant="contained"
            color="primary"
            size="large"
            className="home-view-work-button"
          >
            {HOME_TEXTS.BTN_VIEW_WORK}
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            variant="outlined"
            color="primary"
            size="large"
            className="home-contact-button"
          >
            {HOME_TEXTS.BTN_CONTACT}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}