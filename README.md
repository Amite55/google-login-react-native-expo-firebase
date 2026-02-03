## Welcome Google login test project in firebase and react native expo👋

#### Google login doc

when you can use bun/npm install three package

. @react-native-firebase/app,
. @react-native-google-signin/google-signin
. @react-native-firebase/auth

After install this package next level setup firebase create new project and add SHA1 key and SHA256. Now download google-services.json file and add project root folder. And add to path app.json file "googleServicesFile": "./google-services.json"

Firebase Link : https://console.firebase.google.com/u/0/?fb_gclid=CjwKCAiAs4HMBhBJEiwACrfNZaTwZod_wYjThpIaauWJ8vFFFN2qX3gNvuvSzy7I6Q2mgsSDsRCLCxoCIN8QAvD_BwE&fb_utm_campaign=Cloud-SS-DR-Firebase-FY26-global-gsem-1713590&fb_utm_content=text-ad&fb_utm_medium=cpc&fb_utm_source=google&fb_utm_term=KW_firebase%20console

then google-services.json file get client_id "client_type": 3 .

and add

webClientId:
"360168285758-aejh9u9omdksqvmd4g343ltgc1tm0aam.apps.googleusercontent.com",

<!-- "client_type": 3 -->

 <!-- =========================== how can you get your SHA1 and SHA256 ========================== -->

    When this project run to local you can get you project android file

    cd android

./gradlew signingReport

or your local computer SHA1 key :
command : keytool -list -v -keystore %USERPROFILE%\.android\debug.keystore -alias androiddebugkey -storepass android -keypass android

local SHA1 SHA256 get key Doc link : https://rnfirebase.io/

and when this project deployment or build add your expo dashboard app credential and Build Credentials see all eas build key and credentials

then run project :

## Doc: https://react-native-google-signin.github.io/
