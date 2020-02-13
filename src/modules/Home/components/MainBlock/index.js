import React from 'react';
import { Column, Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import { Description } from 'ui/Description';
import { Button } from 'ui/Button';
import giftImage from 'statics/gift.png';
import productImage from 'statics/product_mobile.png';
import './style.scss';

const MainBlock = () => {
    return (
        <Column className="main-block__row">
            <Column className="container">
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
                        <img src={giftImage} alt="gift-image" className="main-block__gift" />
                        <img src={productImage} alt="gift-image" className="main-block__mobile" />
                        <a
                            className="ux-button ux-button__size_s ux-button__style_void ux-button__margin_false"
                            href="#"
                            target="_blank"
                        >
                            Участвовать
                        </a>
                    </Column>
                </Column>
            </Column>
        </Column>
    );
};

export { MainBlock };
