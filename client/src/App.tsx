import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import JyotirlingaExplorerPage from './pages/JyotirlingaExplorerPage';
import ShaktiPeethaExplorerPage from './pages/ShaktiPeethaExplorerPage';
import ExplorePage from './pages/ExplorePage';
import TempleDetailPage from './pages/TempleDetailPage';
import AartiListPage from './pages/AartiListPage';
import AartiDetailPage from './pages/AartiDetailPage';
import NavdurgaExplorerPage from './pages/NavdurgaExplorerPage';
import NavdurgaDetailPage from './pages/NavdurgaDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="jyotirlingas" element={<JyotirlingaExplorerPage />} />
        <Route path="shakti-peethas" element={<ShaktiPeethaExplorerPage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="temples/:slug" element={<TempleDetailPage />} />
        <Route path="navdurga" element={<NavdurgaExplorerPage />} />
        <Route path="navdurga/:slug" element={<NavdurgaDetailPage />} />
        <Route path="aarti" element={<AartiListPage />} />
        <Route path="aarti/:slug" element={<AartiDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
