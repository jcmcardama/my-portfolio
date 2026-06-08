import {
  Container, Typography, Grid, Card, CardContent, CardActions,
  Chip, Stack, Button, Divider,
} from '@mui/material';
import GitHubIcon        from '@mui/icons-material/GitHub';
import OpenInNewIcon     from '@mui/icons-material/OpenInNew';
import { PROJECTS, PROJECTS_TEXTS } from '../utils/constants';
import '../styles/pages/Projects.scss';

export default function Projects() {
  return (
    <Container className="projects-container" maxWidth="lg">
      <Typography className="projects-overline" variant="overline">
        {PROJECTS_TEXTS.OVERLINE}
      </Typography>
      <Typography className="projects-title" variant="h2">
        {PROJECTS_TEXTS.TITLE}
      </Typography>
      <Typography className="projects-description" variant="body1" color="text.secondary">
        {PROJECTS_TEXTS.DESCRIPTION}
      </Typography>

      <Grid container spacing={4}>
        {PROJECTS.map((project, i) => (
          <Grid size={{xs: 12, md: 4 }} key={i}>
            <Card className="project-card" variant="outlined">
              <CardContent className="project-card-content">
                <Typography className="project-card-content-category" variant="overline">
                  {project.category}
                </Typography>
                <Typography className="project-card-content-title" variant="h5">
                  {project.title}
                </Typography>
                <Typography className="project-card-content-description" variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Divider className="project-card-content-divider"/>
                <Stack className="project-card-content-tags" direction="row">
                  {project.tags.map(tag => (
                    <Chip
                      key={tag}
                      label={tag}
                      className="project-card-content-tag"
                      size="small"
                    />
                  ))}
                </Stack>
              </CardContent>

              <CardActions className="project-card-actions">
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-actions-button-source"
                  variant="outlined"
                  size="small"
                  startIcon={<GitHubIcon fontSize="small" />}
                >
                  {PROJECTS_TEXTS.BUTTON.SOURCE}
                </Button>
                <Button
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-actions-button-live"
                  variant="contained"
                  size="small"
                  endIcon={<OpenInNewIcon fontSize="small" />}
                >
                  {PROJECTS_TEXTS.BUTTON.LIVE}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}