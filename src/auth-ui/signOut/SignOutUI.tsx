import React from 'react';

interface ISignOut {
    onSubmit: ({ global }: { global?: boolean }) => Promise<void>;
    error: string | null;
}

function SignOutUI({ onSubmit, error }: ISignOut) {
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
            <button
                type="submit"
                onClick={() => {
                    onSubmit({});
                }}
            >
                Sign Out
            </button>
        </div>
    );
}

export default SignOutUI;
