import { Outlet } from 'react-router-dom';
import Nav from '../components/navbar/Nav';
import Foot from '../components/footer/Foot';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Main;