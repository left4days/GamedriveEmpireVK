import React from 'react';
import { Header } from 'widgets/Header';
import { MainBlock } from './components/MainBlock';
import { Column } from 'ui/Layout';
import { Title } from 'ui/Title';

import style from './style.scss';

function Home({ handleModal }) {
    return (
        <Column className={style.home}>
            <Header />
            <Column className={style.container}>
                <MainBlock />
            </Column>
        </Column>
    );
}

export { Home };
