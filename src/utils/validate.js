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