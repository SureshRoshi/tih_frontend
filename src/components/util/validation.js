export function isEmpId(value) {
  return value && typeof value === "number";
}

export function isPassword(value, minLength = 6) {
  return value.trim() !== "" && value.length >= minLength;
}
