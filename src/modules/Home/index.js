import React from 'react';
import { Column } from 'ui/Layout';

import style from './style.scss';

function Home({ handleModal, user, actionState, mainWinnerData }) {
    return (
        <Column className={style.home}>
            <Column className={style.container}>test</Column>
        </Column>
    );
}

export { Home };
