import React from 'react';
import { Column, Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import { Description } from 'ui/Description';
import './style.scss';
import icon1 from 'statics/icon_speed1.svg';
import icon2 from 'statics/icon_read1.svg';
import icon3 from 'statics/icon_record1.svg';
import icon4 from 'statics/icon_power.svg';
import icon5 from 'statics/icon_storage.svg';
import icon6 from 'statics/icon_speed2.svg';
import icon7 from 'statics/icon_read2.svg';
import icon8 from 'statics/icon_record2.svg';
import { Button } from 'ui/Button';

const ListBlock = () => {
    return (
        <Row className="list-block__container">
            <Column className="list-block">
                <Column className="list-block__product">
                    <Title size="m" weight="700">
                        <span>FIRECUDA</span> SSD 510 Series
                    </Title>
                    <Description weight="400" size="m">
                        <span>Хороший выбор</span> для геймеров и творческих людей
                    </Description>
                </Column>
                <Column className="list-block__info">
                    <ul>
                        <li>
                            <img src={icon1} alt="" />
                            <p>PCIe G3 ×4 NVMe 1.3 - почти в шесть раз быстрее, чем твердотельные накопители SATA</p>
                        </li>
                        <li>
                            <img src={icon2} alt="" />
                            <p>Максимальная скорость последовательного чтения до 3450 МБ/с</p>
                        </li>
                        <li>
                            <img src={icon3} alt="" />
                            <p>Максимальная скорость записи до 3200 МБ/с</p>
                        </li>
                        <li>
                            <img src={icon4} alt="" />
                            <p>Показатель средней наработки на отказ 1,8 млн часов</p>
                        </li>
                        <li>
                            <img src={icon5} alt="" />
                            <p>Общее количество записанных данных до 2600 ТБ</p>
                        </li>
                    </ul>
                    <Button size="full" link="https://www.dns-shop.ru/search/?q=firecuda+SSD">
                        КУПИТЬ
                    </Button>
                </Column>
            </Column>
            <Column className="list-block">
                <Column className="list-block__product list-block__product_2">
                    <Title size="m" weight="700">
                        <span>FIRECUDA</span> SSD 520 Series
                    </Title>
                    <Description weight="400" size="m">
                        <span>Самые передовые</span> технологии
                    </Description>
                </Column>
                <Column className="list-block__info">
                    <ul>
                        <li>
                            <img src={icon6} alt="" />
                            <p>
                                PCIe G4 ×4 NVMe 1.3 - <span>повышение скорости на 45%</span> по сравнению с Firecuda SSD
                                510 Series
                            </p>
                        </li>
                        <li>
                            <img src={icon7} alt="" />
                            <p>
                                Максимальная скорость последовательного чтения <span>до 5000 МБ/с</span>
                            </p>
                        </li>
                        <li>
                            <img src={icon8} alt="" />
                            <p>
                                Максимальная скорость записи <span>до 4400 МБ/с</span>
                            </p>
                        </li>
                        <li>
                            <img src={icon4} alt="" />
                            <p>Показатель средней наработки на отказ 1,8 млн часов</p>
                        </li>
                        <li>
                            <img src={icon5} alt="" />
                            <p>Общее количество записанных данных до 2600 ТБ</p>
                        </li>
                    </ul>
                    <Button size="full" link="https://www.dns-shop.ru/search/?q=firecuda+SSD">
                        КУПИТЬ
                    </Button>
                </Column>
            </Column>
        </Row>
    );
};

export { ListBlock };
