import { useEffect } from "react";
import MenuClient from "../menuClient/MenuClient";
import { Outlet, useNavigate } from "react-router-dom"

const TemplateClient = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '[]')
    useEffect(() => {
        if (!user.level) {
            navigate('/login');
        }
    }, [navigate, user]);

    return (
        <MenuClient>
            <Outlet />
        </MenuClient>
    );
};

export default TemplateClient;