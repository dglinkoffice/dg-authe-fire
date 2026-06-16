importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
    authDomain: "dgleave-16d4d.firebaseapp.com",
    projectId: "dgleave-16d4d",
    messagingSenderId: "117425769458776465790"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Intercept notifications when browser tabs are completely closed
messaging.onBackgroundMessage((payload) => {
    const title = payload.notification.title || "Sheet Alert!";
    const options = {
        body: payload.notification.body,
        icon: '/favicon.ico' 
    };
    self.registration.showNotification(title, options);
});
