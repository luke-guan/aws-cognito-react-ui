import React from 'react';
import { useAuthDispatch, Estatus } from 'aws-cognito-core-ui';

interface IChangePasswordUI {
    onSubmit: ({
        oldPassword,
        newPassword,
    }: {
        oldPassword: string;
        newPassword: string;
    }) => void;
    error: string | null;
}

function ChangePasswordUI({ onSubmit, error }: IChangePasswordUI) {
    const [oldPassword, setOldPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');

    const dispatch = useAuthDispatch();

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
            <div
                style={{
                    display: 'grid',
                    alignItems: 'center',
                    justifyItems: 'center',
                    gridGap: '10px',
                }}
            >
                <label htmlFor="oldPassword">old password</label>
                <input
                    name="oldPassword"
                    type="password"
                    onChange={e => setOldPassword(e.target.value)}
                    value={oldPassword}
                />
                <label htmlFor="newPassword">New password</label>
                <input
                    name="newPassword"
                    type="password"
                    onChange={e => setNewPassword(e.target.value)}
                    value={newPassword}
                />
                <button
                    type="submit"
                    onClick={() => onSubmit({ oldPassword, newPassword })}
                >
                    Change Password
                </button>
                <button onClick={() => dispatch({ type: Estatus.COMPLETED })}>
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default ChangePasswordUI;
