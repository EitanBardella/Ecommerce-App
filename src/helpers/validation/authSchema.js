import {object,string, ref} from "yup"

export const registerSchema = object().shape({
    email:string().required("The email is required").email("This not an valid email"),
    password:string().required("The password is required").min(8, "Minimum 8 characters").password(),
    confirmPassword:string().required("Both passwords must be the same").oneOf([ref("password"), null], "Passwords do not match")

})
export const lognSchema = object().shape({
    email:string().required("The email is required").email("This not an valid email"),
    password:string().required("The password is required").min(8, "Minimum 8 characters").password(),

})