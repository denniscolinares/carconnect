"use strict";
export const ActionTypes = {
  CLOSE_MODAL: "CLOSE_MODAL",
  OPEN_MODAL: "OPEN_MODAL",
};

export const ActionCreators = {
  OpenModal: (id) => ({ type: ActionTypes.OPEN_MODAL, payload: { id } }),
  CloseModal: () => ({ type: ActionTypes.CLOSE_MODAL }),
};

export const visibleModal = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
      return action.payload.id;

    case ActionTypes.CLOSE_MODAL:
      return null;

    default:
      return state;
  }
};
