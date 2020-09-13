import React from 'react';
import AuthProvider from 'aws-cognito-core-ui';

import SignInUI from './auth-ui/signIn/SignInUI';
import ErrorMsgUI from './auth-ui/errorMsg/ErrorMsgUI';
import ForgotPasswordUI from './auth-ui/forgotPassword/ForgotPasswordUI';
import ForgotPasswordSubmitUI from './auth-ui/forgotPassword/ForgotPasswordSubmitUI';
import SignOutUI from './auth-ui/signOut/SignOutUI';
import SignUpUI from './auth-ui/signUp/SignUpUI';
import ConfirmSignUpUI from './auth-ui/confirmSignUp/ConfirmSignUpUI';
import ConfirmSignInUI from './auth-ui/confirmSignIn/ConfirmSignInUI';
import NewPasswordRequiredUI from './auth-ui/newPasswordRequired/NewPasswordRequiredUI';
import MfaSetupUI from './auth-ui/mfaSetup/MfaSetupUI';
import ChangePasswordUI from './auth-ui/changePassword/ChangePasswordUI';
import ChangePasswordSuccessUI from './auth-ui/changePassword/ChangePasswordSuccessUI';
import LoadingUI from './auth-ui/loading/LoadingUI';

export const defaultComponentObject = {
    signInC: SignInUI,
    errorMsgC: ErrorMsgUI,
    forgotPasswordC: ForgotPasswordUI,
    forgotPasswordSubmitC: ForgotPasswordSubmitUI,
    signOutC: SignOutUI,
    signUpC: SignUpUI,
    confirmSignUpC: ConfirmSignUpUI,
    confirmSignInC: ConfirmSignInUI,
    newPasswordRequiredC: NewPasswordRequiredUI,
    mfaSetupC: MfaSetupUI,
    changePasswordC: ChangePasswordUI,
    changePasswordSuccessC: ChangePasswordSuccessUI,
    loadingC: LoadingUI,
};

interface IComponentObject {
    signInC: React.ElementType;
    errorMsgC: React.ElementType;
    forgotPasswordC: React.ElementType;
    forgotPasswordSubmitC: React.ElementType;
    signOutC: React.ElementType;
    signUpC: React.ElementType;
    confirmSignUpC: React.ElementType;
    confirmSignInC: React.ElementType;
    newPasswordRequiredC: React.ElementType;
    mfaSetupC: React.ElementType;
    changePasswordC: React.ElementType;
    changePasswordSuccessC: React.ElementType;
    loadingC: React.ElementType;
}

export function ReactAuthProvider({
    awsconfig,
    children,
    ComponentObject = defaultComponentObject,
    protectedC,
}: {
    awsconfig: any;
    children: React.ReactNode;
    ComponentObject?: IComponentObject;
    protectedC?: boolean;
}) {
    return (
        <AuthProvider
            awsconfig={awsconfig}
            ComponentObject={ComponentObject}
            protectedC={protectedC}
        >
            {children}
        </AuthProvider>
    );
}
