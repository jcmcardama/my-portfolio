import { Box, Typography, Link, Divider } from '@mui/material';

export default function Footer() {
  const year = 2026;
  return (
    <Box component="footer" sx={{ mt: 'auto' }}>
      <Divider />
      <Box
        sx={{
          maxWidth: 1100,
          mx: 'auto',
          px: { xs: 2, md: 4 },
          py: 4,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Jan Carlo M. Cardama © {year} 
        </Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          {[
            { label: 'GitHub',   href: 'https://github.com/yourusername'              },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername'         },
            { label: 'Email',    href: 'mailto:you@example.com'                       },
          ].map(link => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              variant="body2"
              color="text.secondary"
              sx={{ '&:hover': { color: 'text.primary' }, transition: 'color 0.2s' }}
            >
              {link.label}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}