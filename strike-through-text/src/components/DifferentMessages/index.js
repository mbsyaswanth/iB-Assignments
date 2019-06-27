import React from 'react';

import './styles.css';

import SuccessMsg from './SuccessMsg';

import InfoMsg from './InfoMsg';

import WarningMsg from './WarningMsg';

import ErrorMsg from './ErrorMsg';

const DifferentMessages = () => {
    return (
        <div className="msgs-container">
            <div>
                <SuccessMsg msg="Well done!You successfully read this important alert message." />

                <InfoMsg msg="Heads up!This alert needs your attention, but it's not super important." />

                <WarningMsg msg="Warning!Better check yourself, you're not looking too good." />

                <ErrorMsg msg="Oh snap!Change a few things up and try submitting again." />
            </div>

        </div>
    );
}

export default DifferentMessages;