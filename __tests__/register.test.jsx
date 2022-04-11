// create a test for the register component, the component should have a form with a submit button without login functionality

import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event'
import Registeration from '../components/registeration';

describe('Register', () => {
    it('renders a heading', () => {
        render(<Registeration />);
    
        const heading = screen.getByRole('heading', {
            name: /registeration/i,
        });
    
        expect(heading).toBeInTheDocument();
    });

    it('renders a form with name, contactNumber, dob, gender', () => {
        render(<Registeration />);
    
        const form = screen.getByRole('form');
    
        expect(form).toBeInTheDocument();

        const name = screen.getByLabelText(/name/i);
        const contactNumber = screen.getByLabelText(/contact number/i);
        const dob = screen.getByLabelText(/date of birth/i);
        const gender = screen.getByLabelText(/gender/i);

        expect(name).toBeInTheDocument();
        expect(contactNumber).toBeInTheDocument();
        expect(dob).toBeInTheDocument();
        expect(gender).toBeInTheDocument();
    });

    // create a test, on form submit, name should be required in register component
    it('name should be required on form submit', async () => {
        render(<Registeration />);
        const registerButton = screen.getByRole('button', {name: /register/i});
        
        fireEvent.click(registerButton);

        await waitFor(() => {
            const error = screen.getByText(/name is required/i);
            expect(error).toBeInTheDocument();
        });
    });

    // create a test, on form submit, contactNumber should be required in register component
    it('contactNumber should be required on form submit', async () => {
        render(<Registeration />);

        const registerButton = screen.getByRole('button', {name: /register/i});
        user.click(registerButton);

        await waitFor(() => {
            const error = screen.getByText(/contact number is required/i);
            expect(error).toBeInTheDocument();
        });
    });

    // create a test, on form submit, contactNumber should be at least 9 digits in register component
    it('contactNumber should be at least 9 digits on form submit', async () => {
        render(<Registeration />);

        const contactNumber = screen.getByLabelText(/contact number/i);
        user.type(contactNumber, '95044879');

        const registerButton = screen.getByRole('button', {name: /register/i});
        user.click(registerButton);

        await waitFor(() => {
            const error = screen.getByText(/Contact Number must be at least 9 digits/i);
            expect(error).toBeInTheDocument();
        });
    });

    // create a test, on form submit, contactNumber should be at most 11 digits in register component
    it('contactNumber should be at most 11 digits on form submit', async () => {
        render(<Registeration />);

        const contactNumber = screen.getByLabelText(/contact number/i);
        user.type(contactNumber, '950448791234');

        const registerButton = screen.getByRole('button', {name: /register/i});
        user.click(registerButton);

        await waitFor(() => {
            const error = screen.getByText(/Contact Number must be at most 11 digits/i);
            expect(error).toBeInTheDocument();
        });
    });

    // create a test, on form submit, dob should be required in register component
    it('dob should be required on form submit', async () => {
        render(<Registeration />);

        const dob = screen.getByLabelText(/date of birth/i);
        const registerButton = screen.getByRole('button', {name: /register/i});
        user.click(registerButton);

        await waitFor(() => {
            const error = screen.getByText(/dob is required/i);
            expect(error).toBeInTheDocument();
        });
    });
});

