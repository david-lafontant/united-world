import Home from '../../pages/home/Home';
import About from '../../pages/about/About';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/about', component: <About /> },
];

export default routes;
