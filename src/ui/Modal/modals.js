import React from 'react';
import { DefaultModal } from './DefaultModal';

export function getModal(type, handleModal, modalProps) {
    switch (type) {
        case 'default':
            return <DefaultModal />;
        default:
            return null;
    }
}
