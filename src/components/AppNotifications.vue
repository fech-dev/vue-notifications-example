<script setup>
import { useNotification } from '@/composables/useNotification.js';
import UiNotification from '@/components/UiNotification.vue';

const { notifications } = useNotification();
</script>

<template>
  <transition-group
    tag="div"
    class="notifications"
    appear
    name="notification-transition"
  >
    <ui-notification
      v-for="notification of notifications"
      v-bind="notification"
    />
  </transition-group>
</template>

<style scoped>
.notifications {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  max-height: 100vh;
}

.notification-transition-enter-from,
.notification-transition-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.notification-transition-enter-active,
.notification-transition-leave-active {
  transition: all 0.7s ease;
}
</style>
