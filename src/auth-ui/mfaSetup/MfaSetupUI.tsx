import React from 'react';
import QRCode from 'qrcode.react';

interface IMfaSetupUI {
    onSubmit: ({ challengeAnswer }: { challengeAnswer: string }) => void;
    rawCode: string;
    code: string;
    error: string | null;
}

function MfaSetupUI({ onSubmit, rawCode, code, error }: IMfaSetupUI) {
    const [challengeAnswer, setChallengeAnswer] = React.useState('');

    // @ts-ignore
    const _unused = rawCode;

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
            <QRCode value={code} />
            <div
                style={{
                    display: 'grid',
                    alignItems: 'center',
                    justifyItems: 'center',
                    gridGap: '10px',
                }}
            >
                <label htmlFor="challengeAnswer">challenge answer</label>
                <input
                    name="challengeAnswer"
                    placeholder="challengeAnswer"
                    type="text"
                    onChange={e => setChallengeAnswer(e.target.value)}
                    value={challengeAnswer}
                />
                <button
                    type="submit"
                    onClick={() => {
                        onSubmit({ challengeAnswer });
                    }}
                >
                    submit
                </button>
            </div>
        </div>
    );
}

export default MfaSetupUI;
