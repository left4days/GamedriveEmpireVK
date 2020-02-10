import React from 'react';
import { Column, Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import { Description } from 'ui/Description';
import { Button } from 'ui/Button';
import giftImage from 'statics/gift.png';
import './style.scss';

const MainBlock = () => {
    return (
        <Row className="main-block__row">
            <Column className="main-block__wrapper">
                <Column className="main-block">
                    <Title size="l" weight="700">
                        Сделай себе подарок
                    </Title>
                    <Title size="l" weight="700" extraCLass="main-block__title">
                        Ты заслужил!
                    </Title>
                    <Description weight="400" size="l" color="green" margin="top">
                        SEAGATE GAME DRIVE
                    </Description>
                    <Description margin="top_x2" weight="400" size="m">
                        Официальный накопитель для твоей PS4
                    </Description>
                    <img src={giftImage} alt="gift-image" />
                    <Button>Участвовать</Button>
                </Column>
            </Column>
        </Row>
    );
};

export { MainBlock };
