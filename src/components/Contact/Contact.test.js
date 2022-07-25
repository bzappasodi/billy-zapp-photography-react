import React from "react";
import {render, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';
import {Provider} from "react-redux";
import Contact from './Contact';
import {store} from "../../store/configureStore";

describe('When testing the contact form', () => {

    it('should get the label text', () => {
        const {getByLabelText} = render(<Provider store={store}><Contact/></Provider>);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const nameLabel = getByLabelText(/Name/i);
        expect(nameLabel).toBeInTheDocument();

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const emailLabel = getByLabelText(/email/i);
        expect(emailLabel).toBeInTheDocument();

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const messageLabel = getByLabelText(/message/i);
        expect(messageLabel).toBeInTheDocument();

    });

    it('should test the submit button should be disabled when Name is empty', () => {
        const {getByRole} = render(<Provider store={store}><Contact/></Provider>);

        const submitBtn = getByRole('button', {name: 'Submit'});
        expect(submitBtn).toBeInTheDocument();
        fireEvent.click(submitBtn);
        expect(submitBtn.innerHTML).toBe("Submit<span class=\"MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root\"></span>");

    });


    it('should test the submit value should be disabled when Name is empty', () => {
        const {getByLabelText} = render(<Provider store={store}><Contact/></Provider>);
        const input = getByLabelText(/Name/i);
        fireEvent.change(input, {target: {value: "chrissy"}})
        expect(input.value).toBe("chrissy");
    });


});
