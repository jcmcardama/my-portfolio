import {
  Container, Box, Typography, Grid, Divider,
} from '@mui/material';
import { ABOUT_TEXTS, CAREER, EDUCATION } from '../utils/constants';
import '../styles/pages/About.scss';
import TimelineRow from '../components/TimelineRow';

export default function About() {
  return (
    <Container className="about-container" maxWidth="md">
      <Typography className="about-overline" variant="overline">
        {ABOUT_TEXTS.OVERLINE}
      </Typography>
      <Typography className="about-title" variant="h2">
        {ABOUT_TEXTS.TITLE}
      </Typography>
      <Grid container spacing={6}>
        <Grid size={{xs: 12, md: 7 }}>
          <Typography className="about-description" variant="body1" color="text.secondary">
            {ABOUT_TEXTS.DESCRIPTION1}
          </Typography>
          <Typography className="about-description" variant="body1" color="text.secondary">
            {ABOUT_TEXTS.DESCRIPTION2}
          </Typography>
        </Grid>
      </Grid>
      <Divider className="about-divider"/>
      <Typography className="about-secondary-title" variant="h4">
        {ABOUT_TEXTS.CAREER}
      </Typography>
      <Box>
        {CAREER.map((item, i) => (
          <TimelineRow key={i} isLast={i === CAREER.length - 1}>
            <Box className="about-timeline-header">
              <Typography className="about-timeline-title" variant="h6">
                {item.role}
              </Typography>
              <Typography className="about-timeline-duration" variant="body2" color="text.secondary">
                {item.duration}
              </Typography>
            </Box>
            <Typography className="about-timeline-location" variant="body2" color="secondary.main">
              {item.company}
            </Typography>
            <Box component="ul" className="about-timeline-bullets-container">
              {item.bullets.map((b, j) => (
                <Typography key={j} component="li" className="about-timeline-bullet" variant="body2" color="text.secondary">
                  {b}
                </Typography>
              ))}
            </Box>
          </TimelineRow>
        ))}
      </Box>
      <Divider className="about-divider"/>
      <Typography className="about-secondary-title" variant="h4">
        {ABOUT_TEXTS.EDUCATION}
      </Typography>
      <Box>
        {EDUCATION.map((item, i) => (
          <TimelineRow key={i} isLast={i === EDUCATION.length - 1}>
            <Box className="about-timeline-header">
              <Typography className="about-timeline-title" variant="h6">
                {item.degree}
              </Typography>
              <Typography className="about-timeline-duration" variant="body2" color="text.secondary">
                {item.year}
              </Typography>
            </Box>
            <Typography className="about-timeline-location" variant="body2" color="secondary.main">
              {item.school}
            </Typography>
          </TimelineRow>
        ))}
      </Box>
    </Container>
  );
}