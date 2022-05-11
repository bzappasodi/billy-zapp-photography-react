import React, {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useDispatch} from "react-redux";
import performSubmitContactForm from "../../store/sagas/contact/contactSaga";

const Contact = () => {
    const defaultValues = {
        name: "",
        age: 0,
        sex: "",
        os: "",
        favoriteNumber: 0,
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
    const handleOnSubmit = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        console.log("here " + formValues)
        // // const { userId, dispatch } = this.props
        // dispatch(performSubmitContactForm())
    }
    const handleSubmit = (event) => {
        event.preventDefault();
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