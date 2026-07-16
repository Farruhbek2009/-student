import React from 'react';
import "./sidebar.css";
import { Link, useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate()

    return (
        <div className='sidebar'>
            <div className="sidebar-header">
                <div className="logo-box">
                </div>
                <div className='li-box'>
                    <h3 className='a'> <div className="li"></div>Minibaba Seller</h3>
                    <div>
                        <p>Wholesale Panel</p>
                    </div>
                </div>
            </div>
            <div className="sidebar-menu">
                <div onClick={(e) => (e.preventDefault(), navigate("/asosiypanel"))} className="menu-item">Asosiy panel</div>
                <div onClick={(e) => (e.preventDefault(), navigate("/"))} className="menu-item"> Mahsulotlar</div>
                <div onClick={(e) => (e.preventDefault(), navigate("/buyurtmalar"))} className="menu-item">Buyurtmalar</div>
                <div onClick={(e) => (e.preventDefault(), navigate("/xabarlar"))} className="menu-item"> Xabarlar</div>

                <div onClick={(e) => (e.preventDefault(), navigate("/statistika"))} className="menu-item"> Statistika</div>
            </div>
            <div className="foot">
                <p>Sozlamalar</p>

                <h4>Alijon Valiyev</h4>
            </div>
        </div>
    );
};

export default Sidebar;