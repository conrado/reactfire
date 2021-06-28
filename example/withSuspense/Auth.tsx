import * as React from 'react';
import { useAuth, useUser, SuspenseWithPerf, useSigninCheck } from 'reactfire';
import { WideButton } from '../display/Button';
import { CardSection } from '../display/Card';

const signOut = auth => auth.signOut().then(() => console.log('signed out'));

const UserDetails = () => {
  const auth = useAuth();
  const { data: user } = useUser();
  const { status, data: signInCheckResult } = useSigninCheck();
  if (signInCheckResult.signedIn === false) {
    return <SignInForm />;
  }

  return (
    <>
      <CardSection title="Displayname">{user.displayName}</CardSection>
      <CardSection title="Providers">
        <ul>
          {user.providerData.map(profile => {
            if (profile) {
              return <li key={profile.providerId}>{profile.providerId}</li>;
            } else {
              return 'null profile';
            }
          })}
        </ul>
      </CardSection>
      <CardSection title="Sign Out">
        <WideButton label="Sign Out" onClick={() => signOut(auth)} />
      </CardSection>
    </>
  );
};

const SignInForm = () => {
  const auth = useAuth();
  const provider = new useAuth.GoogleAuthProvider();

  const signIn = () => {
    auth.signInWithPopup(provider);
  };

  return (
    <CardSection title="Sign-in form">
      <button onClick={signIn}>Login com Google</button>
    </CardSection>
  );
};

export const Auth = () => {
  return (
    <SuspenseWithPerf traceId={'firebase-user-wait'} fallback={<p>loading...</p>}>
      <UserDetails />
    </SuspenseWithPerf>
  );
};
