import { FormState, FormErrors } from "../types/types";
import { CONTACT_TEXT } from "./constants";

export const validateForm = (values: FormState): FormErrors => {
    const errors: FormErrors = {};

    if (!values.name.trim()) errors.name = CONTACT_TEXT.ERROR_MESSAGE.NAME_REQUIRED;

    if (!values.email.trim()) {
        errors.email = CONTACT_TEXT.ERROR_MESSAGE.EMAIL_REQUIRED;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = CONTACT_TEXT.ERROR_MESSAGE.INVALID_EMAIL;
    } 

    if (!values.subject.trim()) errors.subject = CONTACT_TEXT.ERROR_MESSAGE.SUBJECT_REQUIRED;

    if (values.message.trim().length < 20) errors.message = CONTACT_TEXT.ERROR_MESSAGE.MESSAGE_LENGTH;

    return errors;
}