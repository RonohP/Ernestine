// logic to validate the input values

export default function validateInfo(values) {
  let errors = {};
  if (!values.email.trim()) {
    errors.email = "Email required ";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password is not strong add more characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm your password ";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
}
