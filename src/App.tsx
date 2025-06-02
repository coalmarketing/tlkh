import { Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import MainMenu from './Components/MainMenu/MainMenu';
import Students from './Components/Students';
import Parents from './Components/Parents';

function App() {
  return (
    <>
      <MainMenu />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pro-studenty" element={<Students />} />
        <Route path="/pro-rodice" element={<Parents />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
