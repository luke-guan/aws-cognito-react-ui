// TODO write a verify phoneNumber
import React from 'react';
import { useAuthDispatch, Estatus } from 'aws-cognito-core-ui';

interface ISignUpUI {
    onSubmit: ({
        username,
        password,
    }: {
        username: string;
        password: string;
        email?: string;
        phoneNumber?: string;
    }) => void;
    error: string | null;
}

function SignUpUI({ onSubmit, error }: ISignUpUI) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');

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
                    />
                    <label htmlFor="password">password</label>
                    <input
                        name="password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <label htmlFor="email">email</label>
                    <input
                        name="email"
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <label htmlFor="phoneNumber">
                        phone number +11231231234
                    </label>
                    <input
                        name="phoneNumber"
                        type="text"
                        onChange={e => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                    />
                    <button
                        type="submit"
                        onClick={() => {
                            onSubmit({
                                username,
                                password,
                                email,
                                phoneNumber,
                            });
                        }}
                    >
                        Sign Up
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
        </>
    );
}

export default SignUpUI;
