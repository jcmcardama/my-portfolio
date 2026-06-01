import {
  Container, Typography, Grid, Divider,
} from '@mui/material';

interface CareerItem {
  company:  string;
  role:     string;
  duration: string;
  bullets:  string[];
}

interface EducationItem {
  degree: string;
  school: string;
  year:   string;
}

const CAREER: CareerItem[] = [
  {
    company:  'Acme Corp',
    role:     'Senior Frontend Engineer',
    duration: '2022 – Present',
    bullets:  [
      'Led rebuild of core product dashboard, reducing load time by 40%.',
      'Mentored 3 junior engineers and established frontend code standards.',
      'Collaborated cross-functionally with design and product teams.',
    ],
  },
  {
    company:  'Tech Startup Inc.',
    role:     'Full-Stack Developer',
    duration: '2020 – 2022',
    bullets:  [
      'Built and maintained RESTful APIs serving 50k+ daily active users.',
      'Introduced TypeScript across the frontend codebase, reducing bugs by 30%.',
    ],
  },
  {
    company:  'Freelance',
    role:     'Web Developer',
    duration: '2018 – 2020',
    bullets:  [
      'Delivered 15+ client projects spanning e-commerce, portfolio, and SaaS.',
    ],
  },
];

const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'State University',
    year:   '2018',
  },
  {
    degree: 'AWS Certified Solutions Architect',
    school: 'Amazon Web Services',
    year:   '2021',
  },
];

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>

      {/* Section header */}
      <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.15em', fontWeight: 600 }}>
        About Me
      </Typography>
      <Typography variant="h2" sx={{ mt: 1, mb: 4, fontSize: { xs: '2.2rem', md: '3rem' } }}>
        The person behind the code.
      </Typography>

      <Grid container spacing={6}>
        <Grid size={{xs: 12, md: 7 }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Hi, I'm <strong>Your Name</strong> — a full-stack engineer based in [City, Country].
            I'm passionate about building products that are not only technically sound but also
            genuinely delightful to use. I care deeply about performance, accessibility, and
            developer experience.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Outside of work you'll find me contributing to open-source, reading about systems
            design, or exploring new hiking trails. I'm currently open to senior engineering and
            tech-lead roles at product-focused companies.
          </Typography>
        </Grid>
      </Grid>

      {/* Career Timeline */}
      <Divider sx={{ my: 8 }} />
      <Typography variant="h4" sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        Career
      </Typography>

      {/* Education Timeline */}
      <Divider sx={{ my: 8 }} />
      <Typography variant="h4" sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        Education & Certifications
      </Typography>

    </Container>
  );
}