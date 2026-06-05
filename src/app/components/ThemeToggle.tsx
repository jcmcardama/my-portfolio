import { IconButton, Tooltip } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon  from '@mui/icons-material/DarkModeOutlined';
import { useColorMode } from '../utils/useColorMode';
import { ThemeMode } from '../utils/constants';

export default function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Tooltip title={mode === ThemeMode.LIGHT ? 'Switch to dark mode' : 'Switch to light mode'}>
      <IconButton onClick={toggleColorMode} color="inherit" size="medium">
        {mode === ThemeMode.LIGHT
          ? <DarkModeOutlinedIcon fontSize="small" />
          : <LightModeOutlinedIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}