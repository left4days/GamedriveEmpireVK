import React from 'react';
import { Column, Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import './style.scss';

function getRandomInRange() {
    let numberLength = 6;
    const min = 1;
    const max = 9;
    let result = [];
    for (let i = 0; i < numberLength; i++) {
        result.push((Math.floor(Math.random() * (max - min + 1)) + min).toString());
    }
    return result;
}

const DefaultModal = () => {
    const randomNumber = getRandomInRange();
    return (
        <Column className="modal__default">
            <Title size="m" color="white" weight="700">
                Ваше число участника
            </Title>
            <div className="modal__default__container">
                {randomNumber.map((item, i) => (
                    <div className="modal__default_number" key={i}>
                        {item}
                    </div>
                ))}
            </div>
            <Title size="s" color="white" weight="500">
                Для участия в розыгрыше оставьте свое число участника в комментариях{' '}
                <a target="_blank" href="https://vk.com/">
                    под постом вконтакте
                </a>
            </Title>
        </Column>
    );
};

export { DefaultModal };
