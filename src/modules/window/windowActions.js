export const switchWindow = (target) => {
  return {
    type: 'SWITCH_WINDOW',
    target
  };
};

export const listItemClicked = (target) => {
  return {
    type: 'LIST_ITEM_CLICKED',
    target
  };
};
