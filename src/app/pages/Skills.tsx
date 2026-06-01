import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import CodeIcon              from '@mui/icons-material/Code';
import StorageIcon           from '@mui/icons-material/Storage';
import BuildOutlinedIcon     from '@mui/icons-material/BuildOutlined';
import BrushOutlinedIcon     from '@mui/icons-material/BrushOutlined';
import type { SvgIconComponent } from '@mui/icons-material';

// MUI Icons as skill icons (representative)
import JavascriptIcon        from '@mui/icons-material/Javascript';
import DataObjectIcon        from '@mui/icons-material/DataObject';
import DnsIcon               from '@mui/icons-material/Dns';
import CloudIcon             from '@mui/icons-material/Cloud';
import TerminalIcon          from '@mui/icons-material/Terminal';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

interface Skill {
  name:  string;
  icon:  SvgIconComponent;
  level: number; // 1-5, used for visual weight
}

interface SkillCategory {
  category:    string;
  icon:        SvgIconComponent;
  description: string;
  skills:      Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category:    'Frontend',
    icon:        CodeIcon,
    description: 'Building rich, accessible, and performant user interfaces.',
    skills: [
      { name: 'React / Next.js',   icon: JavascriptIcon,   level: 5 },
      { name: 'TypeScript',        icon: DataObjectIcon,   level: 5 },
      { name: 'MUI / Tailwind CSS',icon: BrushOutlinedIcon,level: 4 },
      { name: 'Testing (Jest / RTL)',icon: IntegrationInstructionsIcon, level: 4 },
      { name: 'GraphQL (Client)',  icon: DataObjectIcon,   level: 3 },
    ],
  },
  {
    category:    'Backend',
    icon:        StorageIcon,
    description: 'Designing reliable APIs and scalable server-side architecture.',
    skills: [
      { name: 'Node.js / Express', icon: TerminalIcon,    level: 5 },
      { name: 'PostgreSQL',        icon: StorageIcon,     level: 4 },
      { name: 'Redis',             icon: DnsIcon,         level: 3 },
      { name: 'REST & GraphQL',    icon: DataObjectIcon,  level: 5 },
      { name: 'Prisma / Drizzle',  icon: StorageIcon,     level: 4 },
    ],
  },
  {
    category:    'DevOps & Tools',
    icon:        BuildOutlinedIcon,
    description: 'Shipping and maintaining production systems with confidence.',
    skills: [
      { name: 'Docker',          icon: CloudIcon,             level: 4 },
      { name: 'AWS (EC2/S3/Lambda)', icon: CloudIcon,         level: 3 },
      { name: 'CI/CD (GitHub Actions)', icon: IntegrationInstructionsIcon, level: 4 },
      { name: 'Vercel / Netlify',icon: CloudIcon,             level: 5 },
      { name: 'Git & GitHub',    icon: TerminalIcon,          level: 5 },
    ],
  },
];

// Dot indicator for skill level
function LevelDots({ level }: { level: number }) {
  return (
    <Box sx={{ display: 'flex', gap: 0.4, alignItems: 'center' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Box
          key={i}
          sx={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            bgcolor: i < level ? 'secondary.main' : 'divider',
          }}
        />
      ))}
    </Box>
  );
}

export default function Skills() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.15em', fontWeight: 600 }}>
        Expertise
      </Typography>
      <Typography variant="h2" sx={{ mt: 1, mb: 2, fontSize: { xs: '2.2rem', md: '3rem' } }}>
        Skills.
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 8, maxWidth: 500 }}>
        Technologies and tools I work with professionally. Dots indicate depth of experience.
      </Typography>

      <Grid container spacing={4}>
        {SKILL_CATEGORIES.map((cat) => {
          const CatIcon = cat.icon;
          return (
            <Grid size={{xs: 12, md: 4 }} key={cat.category}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3.5,
                  height: '100%',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                }}
              >
                {/* Category header */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                  <CatIcon sx={{ color: 'secondary.main', fontSize: '1.3rem' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '0.95rem' }}>
                    {cat.category}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontSize: '0.8rem' }}>
                  {cat.description}
                </Typography>

                {/* Skills list */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {cat.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <Box
                        key={skill.name}
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <SkillIcon sx={{ fontSize: '1rem', color: 'text.secondary', opacity: 0.7 }} />
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {skill.name}
                          </Typography>
                        </Box>
                        <LevelDots level={skill.level} />
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