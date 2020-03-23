import React from 'react';
import { Column } from 'ui/Layout';
import { Button } from 'ui/Button';
import { MainBlock } from './MainBlock';
import { SmallBlock } from './SmallBlock';
import { ListBlock } from './ListBlock';
import style from './style.scss';

function Home({ handleModal }) {
    return (
        <Column className={style.home}>
            <MainBlock />
            <SmallBlock />
            <Column ai="center" className={style.home__button}>
                <Button onClick={() => handleModal('default')}>Участвовать</Button>
            </Column>
            <ListBlock />
        </Column>
    );
}

export { Home };
