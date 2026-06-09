import { useState } from 'react';
import {
  Container, Typography, Grid, Box, TextField, Button,
  Paper, Link, Divider, Snackbar, Alert,
} from '@mui/material';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import resumePDF from '../assets/resume.pdf';
import { FormState, FormErrors } from '../types/types';
import { INITIAL_FORM, CONTACT_LINKS, CONTACT_TEXT } from '../utils/constants';
import { validateForm } from '../utils/validateForm';

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

  const handleSubmit = (e: React.SubmitEvent) => {
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
    <Container className="contact-container" maxWidth="md">
      <Typography className="contact-overline" variant="overline">
        {CONTACT_TEXT.OVERLINE}
      </Typography>
      <Typography className="contact-title" variant="h2">
        {CONTACT_TEXT.TITLE}
      </Typography>
      <Typography className="contact-description" variant="body1" color="text.secondary">
        {CONTACT_TEXT.DESCRIPTION}
      </Typography>
      <Grid container className="contact-section-container">
        <Grid size={{xs: 12, md: 4.5 }}>
          <Paper className="contact-section-information-container" variant="outlined">
            <Box>
              <Typography className="contact-section-information-header" variant="h6">
                {CONTACT_TEXT.CONTACT_SECTION.HEADER}
              </Typography>
              <Typography className="contact-section-information-body" variant="body2" color="text.secondary">
                {CONTACT_TEXT.CONTACT_SECTION.BODY}
              </Typography>
            </Box>
            <Divider />
            <Box className="contact-section-information-links-container">
              {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
                <Box key={label} className="contact-section-information-link-container">
                  <Box className="contact-section-information-link-icon-container">
                    <Icon className="contact-section-information-link-icon"/>
                  </Box>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-section-information-link-label"
                    underline="hover"
                    variant="body2"
                    color="text.secondary"
                  >
                    {label}
                  </Link>
                </Box>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Divider />
            <Button
              className="download-resume-btn"
              variant="outlined"
              href={resumePDF}
              download="Jan_Carlo_Cardama_Resume.pdf"
              startIcon={<DownloadOutlinedIcon />}
              fullWidth
            >
              {CONTACT_TEXT.CONTACT_SECTION.BTN_TEXT}
            </Button>
          </Paper>
        </Grid>
        <Grid size={{xs: 12, md: 6.5 }}>
          <Paper
            className="contact-section-form-container"
            variant="outlined"
            component="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <Grid container rowSpacing={3} columnSpacing={2.5}>
              <Grid size={{xs: 12}}>
                <Typography className="contact-section-form-header" variant="h6">
                  Send a Message
                </Typography>
              </Grid>
              <Grid size={{xs: 12, sm: 6 }}>
                <TextField
                  label={CONTACT_TEXT.FORM_SECTION.NAME}
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
                  label={CONTACT_TEXT.FORM_SECTION.EMAIL}
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
                  label={CONTACT_TEXT.FORM_SECTION.SUBJECT}
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
                  label={CONTACT_TEXT.FORM_SECTION.MESSAGE}
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
              <Box sx={{ flexGrow: 1 }} />
              <Grid size={{xs: 12}}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendOutlinedIcon />}
                  fullWidth
                >
                  {CONTACT_TEXT.FORM_SECTION.BTN_TEXT}
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
          {CONTACT_TEXT.ALERT_MESSAGE}
        </Alert>
      </Snackbar>
    </Container>
  );
}