import React from 'react';
import { Column, Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import { Description } from 'ui/Description';
import { Button } from 'ui/Button';
import diskImage from 'statics/image_3block_disk2.png';
import './style.scss';

const ThirdBlock = () => {
    return (
        <Row className="third-block__row">
            <Row className="container">
                <Column className="third-block">
                    <Title size="l" weight="700">
                        Отправляетесь в путь?
                    </Title>
                    <Title size="m" weight="700" color="green">
                        Возьмите диск с собой
                    </Title>
                    <Description margin="top_x2" weight="400" size="m">
                        Этот портативный автоматически настраиваемый накопитель для игр можно взять  куда угодно. Чтобы
                        продолжить игру, просто войдите в свой аккаунт PSN
                    </Description>
                    <Button>Где купить</Button>
                </Column>
                <Column className="third-block__image">
                    <img src={diskImage} alt="disk-image" />
                </Column>
            </Row>
        </Row>
    );
};

export { ThirdBlock };
