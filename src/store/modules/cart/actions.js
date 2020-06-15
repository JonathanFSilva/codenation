export function handleToggle(value) {
  return {
    type: '@sidebar/HANDLE_TOGGLE',
    payload: { value },
  };
}
