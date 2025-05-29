importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDbibafHs30y0_7pGw0IkSSdDX0IMdyFeo',
  authDomain: 'watt-dev-b251f.firebaseapp.com',
  projectId: 'watt-dev-b251f',
  storageBucket: 'watt-dev-b251f.firebasestorage.app',
  messagingSenderId: '852550789115',
  appId: '1:852550789115:web:77e161bcfeeac04d91cd5e',
  measurementId: 'G-780EXYF5ZC'
});
// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
