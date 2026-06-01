import {
  Container, Typography, Grid, Card, CardContent, CardActions,
  Box, Chip, Stack, Button, Divider,
} from '@mui/material';
import GitHubIcon        from '@mui/icons-material/GitHub';
import OpenInNewIcon     from '@mui/icons-material/OpenInNew';

interface Project {
  title:       string;
  description: string;
  tags:        string[];
  githubUrl:   string;
  liveUrl:     string;
  category:    string;
}

const PROJECTS: Project[] = [
  {
    title: 'DevFlow — Project Management SaaS',
    category: 'Full-Stack',
    description:
      'A real-time Kanban board built for distributed engineering teams. Features drag-and-drop, ' +
      'role-based access control, GitHub PR integration, and Slack notifications.',
    tags:      ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io', 'Docker'],
    githubUrl: 'https://github.com/yourusername/devflow',
    liveUrl:   'https://devflow-demo.vercel.app',
  },
  {
    title: 'Luminary — E-Commerce Platform',
    category: 'Full-Stack',
    description:
      'A performant, SEO-friendly e-commerce storefront with Stripe payments, inventory management, ' +
      'and a headless CMS for content editing without deployments.',
    tags:      ['Next.js', 'TypeScript', 'Stripe', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/yourusername/luminary',
    liveUrl:   'https://luminary-store.vercel.app',
  },
  {
    title: 'Pulse — Real-Time Analytics Dashboard',
    category: 'Frontend',
    description:
      'A data-visualization dashboard that ingests live event streams and renders interactive charts ' +
      'with sub-second latency. Optimized for readability across large datasets.',
    tags:      ['React', 'D3.js', 'WebSockets', 'Redis', 'AWS Lambda', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/pulse',
    liveUrl:   'https://pulse-analytics.vercel.app',
  },
];

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.15em', fontWeight: 600 }}>
        Selected Work
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', mt: 1, mb: 8, gap: 2 }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' } }}>
          Projects.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 420 }}>
          A curated selection of projects that represent the depth and breadth of my engineering work.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {PROJECTS.map((project, i) => (
          <Grid size={{xs: 12, md: 4 }} key={i}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderColor: 'divider',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                '&:hover': {
                  borderColor: 'secondary.main',
                  boxShadow: theme => `0 8px 40px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.08)'}`,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                {/* Category badge */}
                <Typography variant="overline" sx={{ color: 'secondary.main', fontSize: '0.7rem', letterSpacing: '0.12em' }}>
                  {project.category}
                </Typography>

                <Typography variant="h5" sx={{ mt: 0.5, mb: 1.5, fontSize: '1.1rem', fontWeight: 700 }}>
                  {project.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.75 }}>
                  {project.description}
                </Typography>

                <Divider sx={{ mb: 2.5 }} />

                {/* Tech stack tags */}
                <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                  {project.tags.map(tag => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: 'action.hover',
                        color: 'text.secondary',
                        fontSize: '0.7rem',
                        height: 24,
                        borderRadius: 1,
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>

              <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="small"
                  startIcon={<GitHubIcon fontSize="small" />}
                  sx={{ borderColor: 'divider', flex: 1 }}
                >
                  Source
                </Button>
                <Button
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="small"
                  endIcon={<OpenInNewIcon fontSize="small" />}
                  sx={{ flex: 1 }}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}