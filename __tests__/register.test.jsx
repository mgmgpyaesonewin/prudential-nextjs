// create a test for the register component, the component should have a form with a submit button without login functionality

import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import Register from '../components/register';

describe('Register', () => {
    it('renders a heading', () => {
        render(<Register />);
    
        const heading = screen.getByRole('heading', {
            name: /Registration/i,
        });
    
        expect(heading).toBeInTheDocument();
    });

    it('renders a form with name, contactNumber, dob, gender', () => {
        render(<Register />);
    
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
    it('name should be required on form submit', () => {
        render(<Register />);

        const form = screen.getByRole('form');
        const name = screen.getByLabelText(/name/i);
        const registerButton = screen.getByRole('button', {name: /register/i});
        
        user.click(registerButton);

        expect(name).toHaveAttribute('name is required');
    });

    // create a test, on form submit, contactNumber should be required in register component
    it('contactNumber should be required on form submit', () => {
        render(<Register />);

        const form = screen.getByRole('form');
        const contactNumber = screen.getByLabelText(/contact number/i);
        const registerButton = screen.getByRole('button', {name: /register/i});
        
        user.click(registerButton);

        expect(contactNumber).toHaveAttribute('contact number is required');
    });

    // create a test, on form submit, contactNumber should be at least 9 digits in register component
    it('contactNumber should be at least 9 digits on form submit', () => {
        render(<Register />);

        const form = screen.getByRole('form');
        const contactNumber = screen.getByLabelText(/contact number/i);
        user.type(contactNumber, '95044879');

        const registerButton = screen.getByRole('button', {name: /register/i});
        
        user.click(registerButton);

        expect(contactNumber).toHaveAttribute('Phone Number Should be at least 9 or 11 Numbers');
    });

    // create a test, on form submit, contactNumber should be at most 11 digits in register component
    it('contactNumber should be at most 11 digits on form submit', () => {
        render(<Register />);

        const form = screen.getByRole('form');
        const contactNumber = screen.getByLabelText(/contact number/i);
        user.type(contactNumber, '950448791234');

        const registerButton = screen.getByRole('button', {name: /register/i});
        
        user.click(registerButton);

        expect(contactNumber).toHaveAttribute('Phone number should be at least 9 or 11 numbers');
    });

    // create a test, on form submit, dob should be required in register component
    it('dob should be required on form submit', () => {
        render(<Register />);

        const form = screen.getByRole('form');
        const dob = screen.getByLabelText(/date of birth/i);
        const registerButton = screen.getByRole('button', {name: /register/i});
        
        user.click(registerButton);

        expect(dob).toHaveAttribute('Date of birth is required');
    });
});

