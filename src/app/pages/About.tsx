import {
  Container, Box, Typography, Grid, Divider,
} from '@mui/material';

// ── Types ────────────────────────────────────────────────────────────────────

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

// ── Data ─────────────────────────────────────────────────────────────────────

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

// ── Reusable custom timeline row ─────────────────────────────────────────────

interface TimelineRowProps {
  isLast:   boolean;
  dotColor: 'primary.main' | 'secondary.main';
  children: React.ReactNode;
}

function TimelineRow({ isLast, dotColor, children }: TimelineRowProps) {
  return (
    <Box sx={{ display: 'flex', gap: 3 }}>

      {/* Left column: dot + vertical connector line */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        {/* Dot */}
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            border: '2px solid',
            borderColor: dotColor,
            bgcolor: 'background.default',
            mt: '4px',          // vertically align with first line of text
            flexShrink: 0,
          }}
        />
        {/* Connector line — hidden for last item */}
        {!isLast && (
          <Box
            sx={{
              width: '1px',
              flexGrow: 1,
              bgcolor: 'divider',
              my: 1,
              minHeight: 24,
            }}
          />
        )}
      </Box>

      {/* Right column: card content */}
      <Box sx={{ pb: isLast ? 0 : 5, flex: 1 }}>
        {children}
      </Box>
    </Box>
  );
}

// ── Page component ────────────────────────────────────────────────────────────

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

      {/* ── Career ── */}
      <Divider sx={{ my: 8 }} />
      <Typography variant="h4" sx={{ mb: 5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
       Career
      </Typography>

      <Box>
        {CAREER.map((item, i) => (
          <TimelineRow key={i} isLast={i === CAREER.length - 1} dotColor="primary.main">
            {/* Header row: role + duration */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 0.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                {item.role}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                {item.duration}
              </Typography>
            </Box>

            {/* Company */}
            <Typography variant="body2" color="secondary.main" sx={{ mb: 1.5, fontWeight: 600 }}>
              {item.company}
            </Typography>

            {/* Bullet points */}
            <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
              {item.bullets.map((b, j) => (
                <Typography key={j} component="li" variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                  {b}
                </Typography>
              ))}
            </Box>
          </TimelineRow>
        ))}
      </Box>

      {/* ── Education ── */}
      <Divider sx={{ my: 8 }} />
      <Typography variant="h4" sx={{ mb: 5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
       Education & Certifications
      </Typography>

      <Box>
        {EDUCATION.map((item, i) => (
          <TimelineRow key={i} isLast={i === EDUCATION.length - 1} dotColor="secondary.main">
            {/* Header row: degree + year */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 0.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                {item.degree}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                {item.year}
              </Typography>
            </Box>

            {/* School */}
            <Typography variant="body2" color="secondary.main" sx={{ fontWeight: 600 }}>
              {item.school}
            </Typography>
          </TimelineRow>
        ))}
      </Box>

    </Container>
  );
}