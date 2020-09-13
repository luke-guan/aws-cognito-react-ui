import React from 'react';

interface IConfirmSignUpUI {
    USER: string;
    onSubmit: ({ code }: { code: string }) => void;
    resendSignUp: () => void;
    error: string | null;
}

function ConfirmSignUpUI({
    USER,
    onSubmit,
    resendSignUp,
    error,
}: IConfirmSignUpUI) {
    const [code, setCode] = React.useState('');

    return (
        <div
            style={{
                display: 'grid',
                justifyContent: 'center',
                alignContent: 'center',
                height: '100vh',
                gridGap: '10px',
            }}
        >
            <p>{error}</p>
            <p>USER: {USER}</p>
            <div
                style={{
                    display: 'grid',
                    alignItems: 'center',
                    justifyItems: 'center',
                    gridGap: '10px',
                }}
            >
                <button
                    onClick={() => {
                        resendSignUp();
                    }}
                >
                    Resend Code
                </button>
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

export default ConfirmSignUpUI;
