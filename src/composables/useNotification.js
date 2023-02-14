export const useNotification = (options = {}) => {
  const { autoremoveAfter = 0 } = options;
  const notifications = ref([]);

  const remove = (index) => {
    notifications.value.splice(index, 1);
  };

  const add = ({ variant, message, title }) => {
    const length = notifications.value.push({
      variant,
      title,
      message,
    });

    if (!!autoremoveAfter) {
      setTimeout(() => remove(length - 1));
    }
  };

  return {
    notifications: readonly(notifications),
    add,
    remove,
    success: (notification) => add({ ...notification, variant: 'success' }),
    error: (notification) => add({ ...notification, variant: 'error' }),
  };
};
