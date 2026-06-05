import { Box, Typography, Link, Divider } from '@mui/material';
import '../styles/components/Footer.scss';
import { FOOTER_ITEMS, HOME_TEXTS, year } from '../utils/constants';

export default function Footer() {


  return (
    <Box component="footer" className="footer">
      <Divider />
      <Box className="footer-content">
        <Typography variant="body2" color="text.secondary">
          {HOME_TEXTS.NAME} © {year}
        </Typography>
        <Box className="footer-link-container">
          {FOOTER_ITEMS.map(link => (
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