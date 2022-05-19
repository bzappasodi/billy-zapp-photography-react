import React, {useState} from 'react'

const ContactHooks = () => {
    const defaultValues = {
        name: "",
        message: "",
        email: "",

    };
    const STATUS = {
        IDLE: 'IDLE',
        SUBMITTING: 'SUBMITTING',
        SUBMITTED: 'SUBMITTED',
        COMPLETED: 'COMPLETED',
    }
    let [formValues, setFormValues] = useState(defaultValues)
    let [saveError, setSaveError] = useState(null);
    let [touched, setTouched] = useState({})
    let [status, setStatus] = useState(STATUS.IDLE);

    return{
        formValues, setFormValues,
        saveError, setSaveError,
        touched, setTouched,
        status, setStatus,
        STATUS
    }

}

export default ContactHooks;


