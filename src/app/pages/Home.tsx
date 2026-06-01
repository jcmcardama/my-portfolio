import { Box, Typography, Button, Container, Stack, Chip } from '@mui/material';
import ArrowForwardIcon       from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';

const TAGS = ['React', 'TypeScript', 'Node.js', 'AWS', 'UI/UX'];

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: 'calc(100vh - 130px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: { xs: 10, md: 14 },
        }}
      >
        {/* Eyebrow label */}
        <Typography
          variant="overline"
          sx={{
            color: 'secondary.main',
            letterSpacing: '0.15em',
            fontWeight: 600,
            mb: 2,
            fontSize: '0.75rem',
          }}
        >
          Available for opportunities
        </Typography>

        {/* Name */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
            lineHeight: 1.05,
            mb: 2,
            color: 'text.primary',
          }}
        >
          Carlo Cardama
        </Typography>

        {/* Title */}
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1.4rem', md: '2rem' },
            color: 'text.secondary',
            fontWeight: 400,
            mb: 4,
          }}
        >
          Full-Stack Software Engineer
        </Typography>

        {/* Slogan */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.125rem' },
            color: 'text.secondary',
            maxWidth: 600,
            mb: 2,
            borderLeft: '3px solid',
            borderColor: 'secondary.main',
            pl: 2,
            fontStyle: 'italic',
          }}
        >
          "Building products that are fast, accessible, and a joy to use."
        </Typography>

        {/* Summary */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.05rem' },
            color: 'text.secondary',
            maxWidth: 620,
            mb: 6,
            lineHeight: 1.8,
          }}
        >
          A software engineer with 5+ years of experience turning complex problems into
          elegant, scalable solutions. I thrive at the intersection of great engineering
          and thoughtful design — shipping products that users love and teams are proud of.
        </Typography>

        {/* Skill tags */}
        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, mb: 7 }}>
          {TAGS.map(tag => (
            <Chip
              key={tag}
              label={tag}
              variant="outlined"
              size="small"
              sx={{ borderColor: 'divider', color: 'text.secondary', fontSize: '0.75rem' }}
            />
          ))}
        </Stack>

        {/* CTA Buttons */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            component={RouterLink}
            to="/projects"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ alignSelf: 'flex-start' }}
          >
            View My Work
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            variant="outlined"
            color="primary"
            size="large"
            sx={{ alignSelf: 'flex-start', borderColor: 'divider' }}
          >
            Get in Touch
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}