import React from 'react';
import { Row } from 'ui/Layout';
import logoSeagate from 'statics/logo_seagate.svg';
import logoEmpire from 'statics/logo_impire.svg';
import './style.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Row jc="center" className="header">
            <Link to="/">
                <img src={logoSeagate} alt="logo-seagate" />
            </Link>
            <Link to="/">
                <img src={logoEmpire} alt="logo-empire" />
            </Link>
        </Row>
    );
};

export { Header };
