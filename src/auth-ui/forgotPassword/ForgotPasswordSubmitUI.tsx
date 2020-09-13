import React from 'react';

interface IForgotPasswordSubmitUI {
    onSubmit: ({
        code,
        newPassword,
    }: {
        code: string;
        newPassword: string;
    }) => void;
    username: string;
    error: string | null;
}

function ForgotPasswordSubmitUI({
    onSubmit,
    username,
    error,
}: IForgotPasswordSubmitUI) {
    const [code, setCode] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');

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
            <p>Username is {username}</p>
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
                <label htmlFor="newPassword">new password</label>
                <input
                    name="newPassword"
                    placeholder="newPassword"
                    type="password"
                    onChange={e => setNewPassword(e.target.value)}
                    value={newPassword}
                />
                <button
                    type="submit"
                    onClick={() => {
                        onSubmit({ code, newPassword });
                    }}
                >
                    submit
                </button>
            </div>
        </div>
    );
}

export default ForgotPasswordSubmitUI;
