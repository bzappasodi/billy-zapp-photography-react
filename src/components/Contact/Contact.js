import React, {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useDispatch} from "react-redux";
import * as contactSaga from "../../store/sagas/contact/contactSaga";
const Contact = () => {
    const defaultValues = {
        name: "",
        message: "",
        email: "",

    };
    const [formValues, setFormValues] = useState(defaultValues)

    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const onHandleSubmit = (formValues) => {
        dispatch(contactSaga.performSubmitContactForm(formValues))

    };
    const handleSubmit = (event) => {
        onHandleSubmit(formValues);
        event.preventDefault();
        //  dispatch(performSubmitContactForm(formValues))
        //
         console.log(formValues);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormControl
                    component="fieldset"
                    variant="filled"
                    disabled
                >


                    <div>
                        <FormLabel
                            component="legend"
                            htmlFor="outlined-required"
                        >
                            Your Name...
                        </FormLabel>
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            name="name"
                            type="text"
                            value={formValues.name}
                            onChange={handleInputChange}

                        />

                    </div>
                    <div>
                        <FormLabel
                            component="legend"
                            htmlFor="email-required"
                        >
                            Your Email...
                        </FormLabel>
                        <TextField
                            required
                            id="email-required"
                            label="Email"
                            name="email"
                            type="text"
                            value={formValues.email}
                            onChange={handleInputChange}

                        />

                    </div>
                    <div>
                        <FormLabel
                            component="legend"
                            htmlFor="outlined-multiline-static"
                        >
                            Your Message...
                        </FormLabel>
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            name="message"
                            type="text"
                            value={formValues.message}
                            onChange={handleInputChange}

                            rows={4}
                        />
                    </div>
                    <div><ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button type="submit">Submit</Button>
                    </ButtonGroup>
                    </div>

                </FormControl>
            </form>
        </>
    )
}

export default Contact;