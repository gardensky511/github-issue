import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { IssueDetail } from './pages/IssueDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/issue/:issueNumber" element={<IssueDetail />} />
    </Routes>
  );
}

export default App;
