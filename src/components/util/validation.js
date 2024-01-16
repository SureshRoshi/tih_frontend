export function isEmpId(value) {
  return value && typeof value === "number";
}

export function isPassword(value, minLength = 6) {
  return value.trim() !== "" && value.length >= minLength;
}

export function isEmail(value) {
  return value.includes("@thbs");
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}
