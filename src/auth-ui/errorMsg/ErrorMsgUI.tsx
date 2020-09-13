import React from 'react';

interface IErrorUI {
    error: string;
}

function ErrorMsgUI({ error }: IErrorUI) {
    return (
        <div
            style={{
                display: 'grid',
                justifyContent: 'center',
                alignContent: 'center',
                height: '100vh',
            }}
        >
            <p>Error: {error}</p>
        </div>
    );
}

export default ErrorMsgUI;
