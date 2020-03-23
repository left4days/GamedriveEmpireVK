import React from 'react';
import { Row, Column } from 'ui/Layout';
import { Title } from 'ui/Title';
import './style.scss';

const MainBlock = () => {
    return (
        <Column className="main-block" jc="center">
            <Title weight="500" size="s">
                УСКОРЯЙСЯ БЕЗОПАСНО
            </Title>
            <Title weight="700" size="l">
                ВМЕСТЕ С SEAGATE
            </Title>
        </Column>
    );
};

export { MainBlock };
