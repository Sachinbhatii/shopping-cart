export const loadState = () => {
  try {
    const serialized = localStorage.getItem('cart_state_v1');
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (err) {
    console.error('Could not load state', err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem('cart_state_v1', serialized);
  } catch (err) {
    console.error('Could not save state', err);
  }
};
