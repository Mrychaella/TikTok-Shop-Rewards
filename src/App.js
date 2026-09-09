import { BrowserRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
}

export default App;