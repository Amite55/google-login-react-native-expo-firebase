import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "360168285758-aejh9u9omdksqvmd4g343ltgc1tm0aam.apps.googleusercontent.com",
      offlineAccess: true,
    });
  }, []);

  const handleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, "hare is user info from google sign in");

      // Firebase auth এর জন্য
      // const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      // await auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login With Google</Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleSignIn}
      />
    </View>
  );
}
