import React from 'react';
import { Row, Column } from 'ui/Layout';
import { Title } from 'ui/Title';
import './style.scss';

const SmallBlock = () => {
    return (
        <Row className="small-block__container">
            <Column className="small-block small-block__1" jc="center">
                <Title weight="700" size="m">
                    STEAM-CARD
                </Title>
                <div className="small-block__ribbon">X20</div>
            </Column>
            <Column className="small-block small-block__2" jc="center">
                <Title weight="700" size="m">
                    Dotakins Series 1
                </Title>
                <div className="small-block__ribbon">X10</div>
            </Column>
        </Row>
    );
};

export { SmallBlock };
