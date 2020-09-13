import React from 'react';
import { useAuthDispatch, Estatus } from 'aws-cognito-core-ui';

function ChangePasswordSuccessUI() {
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
            <p>Password Changed Successfully!</p>
            <button
                onClick={() => {
                    dispatch({ type: Estatus.COMPLETED });
                }}
            >
                Done
            </button>
        </div>
    );
}

export default ChangePasswordSuccessUI;
