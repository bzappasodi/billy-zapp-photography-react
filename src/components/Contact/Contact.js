import React from 'react'
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useDispatch} from "react-redux";
import * as contactSaga from "../../store/sagas/contact/contactSaga";
import ContactHooks from "./hooks/ContactHooks";

// TO DO add hooks file move to use reducer
const Contact = () => {
const {
    formValues, setFormValues,
    saveError,
    touched, setTouched,
    status, setStatus,
    STATUS
} = ContactHooks();

    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value,
        });
    };

    // formix or react hook form
    const getErrors = (formValues) => {
        const result = {};
        if (!formValues.name) result.name = "Name is required";
        if (!formValues.email) result.email = "Email is required";
        return result;
    }

    const errors = getErrors(formValues);
    let isValid = Object.keys(errors).length === 0;
    const handleSubmit = (event) => {
        event.preventDefault();
        setStatus(STATUS.SUBMITTING);
        if (isValid) {
            try {
                dispatch(contactSaga.performSubmitContactForm(formValues))
                setStatus(STATUS.COMPLETED);
            } catch (e) {
                saveError(e)
            }
        } else {
            setStatus(STATUS.SUBMITTED);
        }
    };

    const handleBlur = (e) => {
        setTouched((cur) => {
            return {...cur, [e.target.id]: true}
        })
    }


    if (saveError) throw saveError;
    // if(status === STATUS.COMPLETED){return (<div>Completed!</div>)}
    return (
        <>
            {!isValid && status === STATUS.SUBMITTED && (
                <div role="alert">
                    <p><strong>Please fix the following errors</strong></p>
                    <ul>
                        {Object.keys(errors).map((key) => {
                            return <li key={key}>{errors[key]}</li>
                        })}
                    </ul>
                </div>

            )}
            <form onSubmit={handleSubmit} noValidate>
                <FormControl
                    component="fieldset"
                    variant="filled"
                >
                    <div>
                        <FormLabel
                            component="legend"
                            htmlFor="name"
                        >
                            Your Name...
                        </FormLabel>
                        <TextField
                            required
                            id="name"
                            label="Name"
                            name="name"
                            type="text"
                            value={formValues.name}
                            onBlur={handleBlur}
                            onChange={handleInputChange}
                        />
                        <p role="alert">{(touched.name || status === STATUS.SUBMITTED) && errors.name}</p>
                    </div>
                    <div>
                        <FormLabel
                            component="legend"
                            htmlFor="email"
                        >
                            Your Email...
                        </FormLabel>
                        <TextField
                            required
                            id="email"
                            label="Email"
                            name="email"
                            type="text"
                            value={formValues.email}
                            onBlur={handleBlur}
                            onChange={handleInputChange}
                        />
                        <p role="alert">{(touched.email || status === STATUS.SUBMITTED) && errors.email}</p>

                    </div>
                    <div>
                        <FormLabel
                            component="legend"
                            htmlFor="message"
                        >
                            Your Message...
                        </FormLabel>
                        <TextField
                            id="message"
                            label="Message"
                            multiline
                            name="message"
                            type="text"
                            value={formValues.message}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            rows={4}
                        />
                    </div>
                    <div className="mt-2">
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button disabled={status === STATUS.SUBMITTING} className="btn btn-primary" role="button"
                                    type="submit">{status === STATUS.SUBMITTING ? '...Submitting' : 'Submit'}</Button>
                        </ButtonGroup>
                    </div>
                </FormControl>
            </form>
        </>
    )
}

export default Contact;