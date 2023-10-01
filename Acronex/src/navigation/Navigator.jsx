import { Routes, Route } from 'react-router-dom';
import DrawerAppBar from '../components/drawer/DrawerAppBar';
import CardsContainer from '../components/CardsContainer/CardsContainer';
import MachineDescription from '../components/MachineDescription/MachineDescription';

function Navigator() {
  return (
    <div>
      <Routes>
        <Route path="/machines" element={<DrawerAppBar />}>
          <Route index element={<CardsContainer />} />
          <Route path="/machines/:id" component={<MachineDescription/>} />


        </Route>
      </Routes>
    </div>
  );
}

export default Navigator;
