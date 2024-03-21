/**
 * The function `checkValidData` validates email, password, and optional name input fields in
 * JavaScript.
 * @param email - The `email` parameter is a string that represents an email address.
 * @param password - The `password` parameter in the `checkValidData` function is validated using the
 * following criteria:
 * @param name - The `name` parameter in the `checkValidData` function is expected to be a string
 * representing the user's name. The function checks if the name meets the criteria of containing only
 * alphanumeric characters, underscores, and hyphens, with a length between 3 and 16 characters. If the
 * @returns If the email, password, and name (if provided) pass the validation checks, null is
 * returned. If any of the data fails validation, a corresponding error message is returned.
 */
export const checkValidData = (email, password,name ) => {
   const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
   const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   if (name !== null){
      const isName = /^[a-zA-Z0-9_-]{3,16}$/.test(name.value);
      if(!isName) return "Username is not valid";
   }
   if(!isEmailValid) return "Email id is not vaild";
   if(!isPasswordValid) return "Password is not valid";
   return null;
}