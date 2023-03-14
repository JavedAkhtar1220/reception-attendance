import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import './App.css'
import { Dashboard, History } from './screens';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/history' element={<History />} />
      </Route>
    </Routes>
  );
}

export default App;
