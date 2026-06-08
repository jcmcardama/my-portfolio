import { BrowserRouter } from 'react-router-dom';
import { AppStyling } from './AppStyling';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <AppStyling>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </AppStyling>
  );
}