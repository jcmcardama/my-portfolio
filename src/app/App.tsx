import { BrowserRouter } from 'react-router-dom';
import { AppStyling } from './AppStyling';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <AppStyling>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppStyling>
  );
}