export function getAuthToken() {
  const token = localStorage.getItem("empid");
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}
