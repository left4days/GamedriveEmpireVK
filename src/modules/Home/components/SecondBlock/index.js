import React from 'react';
import { Column, Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import gameDriveImage from 'statics/image_2block_gamedrive.png';
import './style.scss';

const SecondBlock = () => {
    return (
        <Column className="container">
            <Row className="second-block__row" jc="space-between">
                <Column className="second-block__image">
                    <img src={gameDriveImage} alt="gamedrive-image" />
                </Column>
                <Column className="second-block">
                    <Title size="m" weight="700" margin="bottom_x2">
                        Официально лицензированное устройство <span>для ps4™</span>
                    </Title>
                    <ul>
                        <li>Game Drive поддерживают все поколения PS4™ (системное ПО версии 4.50 и выше)</li>
                        <li>Диск не аннулирует гарантию на PS4™ и не мешает работе сети</li>
                        <li>
                            В Game Drive для PS4™ используется та же микропрограмма, что и во внутреннем накопителе
                            консоли, поэтому он работает быстро и без перерывов
                        </li>
                    </ul>
                </Column>
            </Row>
        </Column>
    );
};

export { SecondBlock };
