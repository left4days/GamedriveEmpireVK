import React from 'react';

export function getModal(type, handleModal, modalProps) {
    switch (type) {
        case 'default':
            return <p>hello</p>;
        default:
            return null;
    }
}
