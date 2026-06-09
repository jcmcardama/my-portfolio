import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { SKILL_CATEGORIES, SKILLS_TEXT } from '../utils/constants';

export default function Skills() {
  return (
    <Container className="skills-container" maxWidth="lg">
      <Typography className="skills-overline" variant="overline">
        {SKILLS_TEXT.OVERLINE}
      </Typography>
      <Typography className="skills-title" variant="h2">
        {SKILLS_TEXT.TITLE}
      </Typography>
      <Typography className="skills-description" variant="body1" color="text.secondary">
        {SKILLS_TEXT.DESCRIPTION}
      </Typography>

      <Grid container spacing={4}>
        {SKILL_CATEGORIES.map((cat) => {
          const CatIcon = cat.icon;
          return (
            <Grid size={{xs: 12, md: 4 }} key={cat.category}>
              <Paper className="skills-paper-container" variant="outlined">
                <Box className="skills-category-header">
                  <CatIcon className="skills-category-header-icon"/>
                  <Typography className="skills-category-header-title" variant="h6">
                    {cat.category}
                  </Typography>
                </Box>
                <Typography className="skills-category-description" variant="body2" color="text.secondary">
                  {cat.description}
                </Typography>
                <Box className="skills-category-skills-container">
                  {cat.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <Box
                        key={skill.name}
                        className="skills-category-skills-item-container"
                      >
                        <Box className="skills-category-skill-item-container">
                          <SkillIcon className="skills-category-skill-item-icon"/>
                          <Typography className="skills-category-skill-item-name" variant="body2">
                            {skill.name}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}