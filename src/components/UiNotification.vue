<script setup>
const props = defineProps({
  variant: { type: String, default: 'primary' },
});

const variantClass = computed(() => `notification--${props.variant}`);
</script>

<template>
  <div class="notification" :class="[variantClass]">
    <div class="notification__head">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="notification__body">
      <slot>{{ message }}</slot>
    </div>
  </div>
</template>

<style scoped>
.notification {
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0.25rem 1rem rgba(var(--variant), 0.3);
  background-color: rgb(var(--variant));
}

.notification.notification--primary {
  --variant: 0, 119, 176;
}

.notification.notification--success {
  --variant: 63, 134, 65;
}

.notification.notification--error {
  --variant: 196, 34, 19;
}
</style>
