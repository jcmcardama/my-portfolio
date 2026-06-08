import { FormState, FormErrors } from "../types/types";

export const validateForm = (values: FormState): FormErrors => {
    const errors: FormErrors = {};

    if (!values.name.trim()) errors.name = 'Name is required.';

    if (!values.email.trim()) {
        errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Enter a valid email address.';
    } 

    if (!values.subject.trim()) errors.subject = 'Subject is required.';

    if (values.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.';

    return errors;
}