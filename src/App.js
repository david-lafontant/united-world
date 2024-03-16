import { Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import Header from './components/header/Header';
import routes from './utils/routes/routes';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={uuidv4()} path={route.path} element={route.component} />
        ))}
      </Routes>
    </>
  );
}

export default App;
