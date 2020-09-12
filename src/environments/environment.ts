// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCNJdWwwTUmJOAtQ5acvp_k06JJ79Wj-No",
    authDomain: "voterbot-fe884.firebaseapp.com",
    databaseURL: "https://voterbot-fe884.firebaseio.com",
    projectId: "voterbot-fe884",
    storageBucket: "voterbot-fe884.appspot.com",
    messagingSenderId: "116816838066",
    appId: "1:116816838066:web:dbce3030feab98af68b8ab"
  },
  // firebase.initializeApp(firebaseConfig)
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
