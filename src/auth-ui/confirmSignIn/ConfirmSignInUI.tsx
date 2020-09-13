import React from 'react';

interface IConfirmSignInUI {
    onSubmit: ({ code }: { code: string }) => void;
    error: string | null;
}

function ConfirmSignInUI({ onSubmit, error }: IConfirmSignInUI) {
    const [code, setCode] = React.useState('');

    return (
        <div
            style={{
                display: 'grid',
                justifyContent: 'center',
                alignContent: 'center',
                height: '100vh',
            }}
        >
            <p>{error}</p>
            <div
                style={{
                    display: 'grid',
                    alignItems: 'center',
                    justifyItems: 'center',
                    gridGap: '10px',
                }}
            >
                <label htmlFor="code">code</label>
                <input
                    name="code"
                    placeholder="code"
                    type="text"
                    onChange={e => setCode(e.target.value)}
                    value={code}
                />
                <button
                    type="submit"
                    onClick={() => {
                        onSubmit({ code });
                    }}
                >
                    submit
                </button>
            </div>
        </div>
    );
}

export default ConfirmSignInUI;
