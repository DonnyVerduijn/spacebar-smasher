export const windowItemClicked = (windowId, itemId) => {
  console.log(windowId, itemId);
  return {
    type: 'WINDOW_ITEM_CLICKED',
    windowId,
    itemId
  };
};
