# AWS Cognito React UI

AWS Cognito React UI is a react (web) package that allows designers to customize the UX to work with AWS Cognito. Build upon [aws-cognito-core-ui](https://github.com/luke-guan/aws-cognito-core-ui).

## Install

```bash
npm install aws-cognito-react-ui # or yarn add aws-cognito-react-ui
```

## Usage

##### Import Package

```javascript
import AuthProvider from 'aws-cognito-react-ui';
```

##### Wrap your App with AuthProvider

Pass in your awsconfig, and wrap with AuthProvider.

```javascript
const awsconfig = {
    Auth: {
        region: 'us-east-1',
        userPoolId: 'us-east-1_ABC',
        userPoolWebClientId: 'ABCDEFGHIJKL'
    }
}

<AuthProvider awsconfig={awsconfig}>
    <MyApp />
</AuthProvider>
```

That's it! Works out the box!

---

##### Customize the UX

Look at the the source [code](src/auth-ui) or look at aws-cognito-core-ui [Basic Usage](https://github.com/luke-guan/aws-cognito-core-ui).

##### Design Component Object for each screen

The object keys end in C, (leave alone), the value on the right should point to your UX screen. In this case we are creating the LoadingUI.

Example for HTML (web):

```javascript
const LoadingUI = () => (
    <div>
        <h1>Loading</h1>
    </div>
);
```

##### Link Component to your UX

Reference the aws-cognito-core-ui [docs](https://github.com/luke-guan/aws-cognito-core-ui) on what is needed to contruct each component.

```javascript
const MyScreenComponents = {
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
```

Feeling lazy and want to just customize the signInC components.

```javascript
import { defaultComponentObject } from 'aws-cognito-react-ui';
const MyScreenComponents = {
    ...defaultComponentObject,
    signInC: YourSignInUI,
};
```

##### Wrap your App with AuthProvider

Pass in your awsconfig, along with your screens to ComponentObject.

```javascript
<AuthProvider awsconfig={awsconfig} ComponentObject={MyScreenComponents}>
    <MyApp />
</AuthProvider>
```

[Create your own Package](docs/createPackage.md) with your own Design.

[FAQs](docs/FAQs.md)

## Support

Feedback / Questions / Thoughts / Hire me?

[Discord](https://discord.gg/Mfwc5sg)
