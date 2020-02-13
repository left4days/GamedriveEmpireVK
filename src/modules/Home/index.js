import React from 'react';
import { MainBlock } from './components/MainBlock';
import { SecondBlock } from './components/SecondBlock';
import { ThirdBlock } from './components/ThirdBlock';
import { Column } from 'ui/Layout';

import decorationImage from 'statics/image_3block_decor.png';
import style from './style.scss';

function Home({ handleModal }) {
    return (
        <Column className={style.home}>
            <MainBlock />
            <SecondBlock />
            <ThirdBlock handleModal={handleModal} />
            <Column className="home__decor">
                <img src={decorationImage} alt="decoration-image" />
            </Column>
        </Column>
    );
}

export { Home };
