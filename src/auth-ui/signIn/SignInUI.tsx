import React from 'react';
import { useAuthDispatch, Estatus } from 'aws-cognito-core-ui';

interface ISignInUI {
    onSubmit: ({
        username,
        password,
    }: {
        username: string;
        password: string;
    }) => void;
    error: string | null;
}

function SignInUI({ onSubmit, error }: ISignInUI) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const dispatch = useAuthDispatch();

    return (
        <>
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
                    <label htmlFor="username">username</label>
                    <input
                        name="username"
                        type="text"
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        placeholder="username"
                    />
                    <label htmlFor="password">password</label>
                    <input
                        name="password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder="password"
                    />
                    <button
                        type="submit"
                        onClick={() => {
                            onSubmit({ username, password });
                        }}
                    >
                        Sign In
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
                        dispatch({ type: Estatus.SIGNUP });
                    }}
                >
                    Sign Up
                </button>
                <button
                    onClick={() => {
                        dispatch({ type: Estatus.FORGOTPASSWORD });
                    }}
                >
                    Forgot Password
                </button>
            </div>
        </>
    );
}

export default SignInUI;

// {"code":"NotAuthorizedException","name":"NotAuthorizedException","message":"Incorrect username or password."}
