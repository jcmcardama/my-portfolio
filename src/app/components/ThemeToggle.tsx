import { IconButton, Tooltip } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon  from '@mui/icons-material/DarkModeOutlined';
import { useColorMode } from '../utils/useColorMode';

export default function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Tooltip title={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
      <IconButton onClick={toggleColorMode} color="inherit" size="medium">
        {mode === 'light'
          ? <DarkModeOutlinedIcon fontSize="small" />
          : <LightModeOutlinedIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}