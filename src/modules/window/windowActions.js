export const menuItemClicked = (menuId, itemId) => {
  return {
    type: 'MENU_ITEM_CLICKED',
    menuId,
    itemId
  };
};
