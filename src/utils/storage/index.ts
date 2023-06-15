import { AuthState } from "../../contexts/auth/interfaces";

export function settingStorage(dataStorage: AuthState) {
  localStorage.setItem(
    `user:userToken`,
    JSON.stringify(dataStorage)
  );
}

export function removeStorage() {
  const keysToRemove = [`user:userToken`];
  keysToRemove.forEach((item) => localStorage.removeItem(item));
}

export function getStorage() {
  return localStorage.getItem(`user:userToken`);
}
