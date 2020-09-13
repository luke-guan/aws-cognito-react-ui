import React from 'react';
import { useAuthDispatch, Estatus } from 'aws-cognito-core-ui';

interface IForgotPasswordUI {
    onSubmit: ({ user }: { user: string }) => void;
    error: string | null;
}

function ForgetPasswordUI({ onSubmit, error }: IForgotPasswordUI) {
    const [user, setUser] = React.useState('');

    const dispatch = useAuthDispatch();

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
                <label htmlFor="username">username</label>
                <input
                    name="username"
                    placeholder="username"
                    type="text"
                    onChange={e => setUser(e.target.value)}
                    value={user}
                />
                <button
                    type="submit"
                    onClick={() => {
                        onSubmit({ user });
                    }}
                >
                    submit
                </button>
            </div>
            <hr
                style={{
                    border: '1px solid blue',
                    width: '100%',
                }}
            />
            <button
                onClick={() => {
                    dispatch({ type: Estatus.SIGNIN });
                }}
            >
                Sign In
            </button>
        </div>
    );
}

export default ForgetPasswordUI;
