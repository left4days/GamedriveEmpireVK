import React from 'react';
import { Row } from 'ui/Layout';
import logoSeagate from 'statics/logo_seagate.svg';
import logoEmpire from 'statics/logo_impire.svg';
import './style.scss';

const Header = () => {
    return (
        <Row jc="center" className="header">
            <img src={logoSeagate} alt="logo-seagate" />
            <img src={logoEmpire} alt="logo-empire" />
        </Row>
    );
};

export { Header };
