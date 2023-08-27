import { Link, Outlet } from "react-router-dom";

function LayoutHeader() {
    return ( <>
    <Link to={'/'}>Главная</Link>
    <Link to={'/news'}>Новости</Link>
    <Link to={'/profile'}>Профиль</Link>
    <Outlet/>
    </> );
}

export default LayoutHeader;