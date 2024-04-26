import { object, string, ref } from "yup";

export const registerSchema = object().shape({
    email: string().required("The email is required").email("This is not a valid email"),
    password: string()
        .required("The password is required")
        .min(8, "Minimum 8 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: string().required("Both passwords must be the same").oneOf([ref("password"), null], "Passwords do not match")
});

export const loginSchema = object().shape({
    email: string().required("The email is required").email("This is not a valid email"),
    password: string().required("The password is required").min(8, "Minimum 8 characters")
});
