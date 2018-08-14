const validator = require("validator");
const isEmpty = require("./is-Empty");
module.exports = data => {
  let errors = {};

  data.school= !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";


  //Required fields validation


  if (validator.isEmpty(data.school)) {
    errors.school = "School is required";
  }

  if (validator.isEmpty(data.degree)) {
    errors.degree = "Degree is required";
  }
  if (validator.isEmpty(data.fieldofstudy)) {
   errors.fieldofstudy = "Field of Study is required";
 }

  if (validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }
  
  //return error and validate if empty
  return {
    errors: errors,
    isError: isEmpty(errors)
  };
};
