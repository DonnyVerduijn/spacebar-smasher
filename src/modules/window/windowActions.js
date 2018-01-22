export const backButtonClicked = (target) => {
  return {
    type: 'BACK_BUTTON_CLICKED',
    target
  };
};

export const listItemClicked = (target) => {
  return {
    type: 'LIST_ITEM_CLICKED',
    target
  };
};
