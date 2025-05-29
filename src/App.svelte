<script>
  import { getToken, onMessage } from 'firebase/messaging';
  import { onMount } from 'svelte';
  import { messaging } from './firebase-config';

  let token = '';
  let notificationPermission = 'default';
  let lastMessage = '';

  // Request notification permission
  const requestPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      notificationPermission = permission;

      if (permission === 'granted') {
        const swRegistration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
        const currentToken = await getToken(messaging, {
          vapidKey:
            'BEypjTgqKdqdf7aWAKcXzaf7SUuowHwDGZwPcaTcB8ovKcJ1HDc_iQa7Ow-C_1cm8ybBq4sCagK4CAFj1V8E1Vc',
          serviceWorkerRegistration: swRegistration
        });
        if (currentToken) {
          token = currentToken;
          console.log('FCM Token:', currentToken);
          // Here you would typically send this token to your server
        }
      }
    } catch (error) {
      console.error('Error getting permission:', error);
    }
  };

  // Handle foreground messages
  onMount(() => {
    onMessage(messaging, (payload) => {
      console.log('Foreground message:', payload);
      if (payload.notification !== undefined) {
        if (payload.notification.body !== undefined) {
          lastMessage = payload.notification.body;
        }
      }
    });
  });
</script>

<main>
  <h1>FCM Demo</h1>

  <div>
    <button on:click={requestPermission}> Enable Notifications </button>

    <p>Notification Permission: {notificationPermission}</p>
    {#if token.length > 0}
      <p>FCM Token: {token}</p>
    {/if}
    {#if lastMessage.length > 0}
      <p>Last Message: {lastMessage}</p>
    {/if}
  </div>
</main>

<style>
  main {
    padding: 2rem;
    text-align: center;
  }

  button {
    padding: 0.5rem 1rem;
    margin: 1rem 0;
  }
</style>
