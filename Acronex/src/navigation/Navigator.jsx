import { Routes, Route, Navigate } from 'react-router-dom';
import DrawerAppBar from '../components/drawer/DrawerAppBar';
import CardsContainer from '../components/CardsContainer/CardsContainer';


function Navigator() {
  return (
    <div>
      <Routes>
        <Route path="/machines" element={<DrawerAppBar />} />
        <Route path="/machines" element={<CardsContainer />} />
        <Route
          path="/"
          element={<Navigate to="/machines" replace={true} />}
        />
      </Routes>
    </div>
  );
}

export default Navigator;
