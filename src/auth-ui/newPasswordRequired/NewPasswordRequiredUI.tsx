import React from 'react';

interface INewPasswordRequiredUI {
    onSubmit: ({ newPassword }: { newPassword: string }) => void;
    error: string | null;
}

function NewPasswordRequiredUI({ onSubmit, error }: INewPasswordRequiredUI) {
    const [newPassword, setNewPassword] = React.useState('');

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
                        onSubmit({ newPassword });
                    }}
                >
                    submit
                </button>
            </div>
        </div>
    );
}

export default NewPasswordRequiredUI;
