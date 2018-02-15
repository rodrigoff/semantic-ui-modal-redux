import { MODAL_OPEN, MODAL_CLOSE } from "./actionTypes";

export function openModal(modalProps) {
  return {
    type: MODAL_OPEN,
    payload: modalProps
  };
}

export function closeModal() {
  return {
    type: MODAL_CLOSE 
  };
}
