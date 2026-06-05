import { useState } from 'react';
import {
  Container, Typography, Grid, Box, TextField, Button,
  Paper, Link, Divider, Snackbar, Alert,
} from '@mui/material';
import EmailOutlinedIcon    from '@mui/icons-material/EmailOutlined';
import LinkedInIcon         from '@mui/icons-material/LinkedIn';
import GitHubIcon           from '@mui/icons-material/GitHub';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import SendOutlinedIcon     from '@mui/icons-material/SendOutlined';
import resumePDF            from '../assets/resume.pdf';

interface FormState {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?:    string;
  email?:   string;
  subject?: string;
  message?: string;
}

const INITIAL_FORM: FormState = { name: '', email: '', subject: '', message: '' };

function validateForm(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim())                         errors.name    = 'Name is required.';
  if (!values.email.trim())                        errors.email   = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
                                                   errors.email   = 'Enter a valid email address.';
  if (!values.subject.trim())                      errors.subject = 'Subject is required.';
  if (values.message.trim().length < 20)           errors.message = 'Message must be at least 20 characters.';
  return errors;
}

const CONTACT_LINKS = [
  {
    icon:  EmailOutlinedIcon,
    label: 'jcmcardama@gmail.com',
    href:  'mailto:jcmcardama@gmail.com',
  },
  {
    icon:  LinkedInIcon,
    label: 'linkedin.com/in/jan-carlo-cardama',
    href:  'https://www.linkedin.com/in/jan-carlo-cardama',
  },
  {
    icon:  GitHubIcon,
    label: 'github.com/jcmcardama',
    href:  'https://github.com/jcmcardama',
  },
];

export default function Contact() {
  const [form,   setForm]   = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // ── Replace with your preferred send mechanism (EmailJS, Formspree, etc.) ──
    console.log('Form submitted:', form);
    setForm(INITIAL_FORM);
    setErrors({});
    setSuccess(true);
  };

  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
      <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.15em', fontWeight: 600 }}>
        Let's Talk
      </Typography>
      <Typography variant="h2" sx={{ mt: 1, mb: 2, fontSize: { xs: '2.2rem', md: '3rem' } }}>
        Get in Touch.
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 8, maxWidth: 500 }}>
        I'm currently open to senior engineering roles and interesting freelance work.
        Drop me a message and I'll get back to you within 24 hours.
      </Typography>

      <Grid container sx={{ justifyContent: 'space-between' }}>

        {/* Left — Contact info + Resume wrapped in matching Paper */}
        <Grid size={{xs: 12, md: 5 }}>
          <Paper
            variant="outlined"
            sx={{
              p: { xs: 2, md: 3 },
              borderColor: 'divider',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            {/* Header */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>
                Contact Info
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                Reach out through any of these channels.
              </Typography>
            </Box>

            <Divider />

            {/* Links */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
                <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: 1.5,
                      bgcolor: 'action.hover',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon sx={{ color: 'secondary.main', fontSize: '1.1rem' }} />
                  </Box>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    variant="body2"
                    color="text.secondary"
                    sx={{ wordBreak: 'break-all', '&:hover': { color: 'text.primary' }, transition: 'color 0.2s' }}
                  >
                    {label}
                  </Link>
                </Box>
              ))}
            </Box>

            {/* Spacer pushes the resume button to the bottom */}
            <Box sx={{ flexGrow: 1 }} />

            <Divider />

            <Button
              variant="outlined"
              href={resumePDF}
              download="YourName_Resume.pdf"
              startIcon={<DownloadOutlinedIcon />}
              fullWidth
              sx={{ borderColor: 'divider' }}
            >
              Download Résumé
            </Button>
          </Paper>
        </Grid>

        {/* Right — Contact form */}
        <Grid size={{xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', paddingTop: {xs: 4, md: 0 } }}>
          <Paper
            variant="outlined"
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ p: { xs: 2, md: 3 }, borderColor: 'divider', height: '100%' }}
          >
            <Grid container rowSpacing={3} columnSpacing={2.5}>
              <Grid size={{xs: 12, sm: 6 }}>
                <TextField
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              <Grid size={{xs: 12, sm: 6 }}>
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              <Grid size={{xs: 12}}>
                <TextField
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  error={Boolean(errors.subject)}
                  helperText={errors.subject}
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              <Grid size={{xs: 12}}>
                <TextField
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  error={Boolean(errors.message)}
                  helperText={errors.message ?? `${form.message.length} characters (min. 20)`}
                  fullWidth
                  required
                  multiline
                  rows={5}
                  size="small"
                />
              </Grid>
              <Grid size={{xs: 12}} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendOutlinedIcon />}
                  fullWidth
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        open={success}
        autoHideDuration={5000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setSuccess(false)} variant="filled">
          Message sent! I'll be in touch shortly.
        </Alert>
      </Snackbar>
    </Container>
  );
}