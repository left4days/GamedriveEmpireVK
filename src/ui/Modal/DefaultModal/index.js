import React from 'react';
import { Column, Row } from 'ui/Layout';
import { Title } from 'ui/Title';
import logo1 from 'statics/1.svg';
import logo2 from 'statics/2.svg';
import logo3 from 'statics/3.png';
import './style.scss';

const DefaultModal = () => {
    return (
        <Column className="modal__default">
            <Title size="m" color="white" weight="700">
                Вы можете приобрести <span>Seagate Game Drive</span> в следующих магазинах:
            </Title>
            <Row jc="space-between">
                <Column className="modal__icon">
                    <a
                        target="_blank"
                        onClick="ym(57521749, 'reachGoal', 'MVIDEO'); return true;"
                        href="https://www.mvideo.ru/products/vneshnii-zhestkii-disk-2-5-seagate-2tb-game-drive-for-ps4-stgd2000200-50131470?null&_requestid=409691
                        "
                    >
                        <img src={logo1} alt="logo-1" />
                    </a>
                </Column>
                <Column className="modal__icon">
                    <a
                        target="_blank"
                        onClick="ym(57521749, 'reachGoal', 'DNS'); return true;"
                        href="https://www.dns-shop.ru/product/6b0bf9c801051b80/2-tb-vnesnij-hdd-seagate-game-drive-for-ps4-stgd2000200/"
                    >
                        <img src={logo2} alt="logo-2" />
                    </a>
                </Column>
                <Column className="modal__icon">
                    <a
                        target="_blank"
                        onClick="ym(57521749, 'reachGoal', 'Citilink'); return true;"
                        href="https://www.citilink.ru/catalog/computers_and_notebooks/media/hdd_out/1191642/?utm_source=seagate&utm_medium=display&utm_campaign=vendor_seagate_hdd-for-ps4"
                    >
                        <img src={logo3} alt="logo-3" />
                    </a>
                </Column>
            </Row>
        </Column>
    );
};

export { DefaultModal };
