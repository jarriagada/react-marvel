import { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { useLocation, useNavigate } from 'react-router'

export default function Header() {

    const currentPath = useLocation;
    const finalCurrentPath = currentPath.pathname.Repalce("/", "");

    const [activeItem, setActiveItem] = useState[finalCurrentPath];
    const navigate = useNavigate();


    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
        navigate(`/${name}`)
    }


    return (
        <div className='header-menu'>
            <Menu secundary/>
                <Menu.Item
                name="Inicio"
                active={activeItem=== "Inicio"}
                onClick={handleItemClick}
                />
                <Menu.Item
                name="series"
                active={activeItem="series"}
                onClick={handleItemClick}
                />

        </div>
    )





};
