import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Routes/Home';
import Login from './Routes/Login';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
