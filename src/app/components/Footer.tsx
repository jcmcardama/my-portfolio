import { Box, Typography, Link, Divider } from '@mui/material';
import '../styles/components/Footer.scss';

export default function Footer() {
  const year = 2026;

  return (
    <Box component="footer" className="footer">
      <Divider />
      <Box className="footer-content">
        <Typography variant="body2" color="text.secondary">
          Jan Carlo M. Cardama © {year}
        </Typography>
        <Box className="footer-link-container">
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
              className="footer-link"
            >
              {link.label}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}