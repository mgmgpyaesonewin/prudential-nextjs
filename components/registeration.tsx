import React from 'react';
import { useFormik, Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Container,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  ToggleButtonGroup,
  ToggleButton
} from "@mui/material";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Image from 'next/image';
import logo from '../public/assests/logo.png';

import MyTextField from "./commons/TextField/Index";
import MyRadio from "./commons/Radio/Index";
import LanguageSwitcher from "./LanguageSwitcher";

type NameInput = {
  name: string;
  nameRequired: string;
};

interface IFormInput {
  name: string;
  contactNumber: string;
  dob: string;
  gender: string;
}

interface FormInputSchema {
  name: string;
  contactNumber: string;
  dob: string;
  gender: string;
}

const RegisterSchema: Yup.SchemaOf<FormInputSchema> = Yup.object({
  name: Yup.string().required("Name is required"),
  contactNumber: Yup.string()
    .required("Contact Number is required")
    .min(9, "Contact Number must be at least 9 digits")
    .max(11, "Contact Number must be at most 11 digits"),
  dob: Yup.string().required("dob is required"),
  gender: Yup.string().required("gender is required"),
});

const Register: React.FC = () => {
  const initialValues: IFormInput = {
    name: "",
    contactNumber: "",
    dob: "",
    gender: "male",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const change = (name: any, e: any) => {
    e.persist();
    formik.handleChange(e);
    formik.setFieldTouched(name, true, false);
  };

  return (
    <div>
      <div className="tw-flex tw-items-center">
        <div className="tw-hidden md:tw-hidden lg:tw-block xl:tw-block md:tw-w-2/5 md:tw-content-center lg:tw-w-2/5 lg:tw-content-center xl:tw-w-2/5 xl:tw-content-center">
          <div>
            <Image
              src={logo}
              alt="logo"
              className="tw-w-3/4 tw-m-auto tw-block" />
          </div>
        </div>
        <div className="tw-w-full md:tw-w-full lg:tw-w-3/5 xl:tw-w-3/5 lg:tw-p-16 xl:tw-p-16">
          <div className="tw-hidden md:tw-hidden lg:tw-flex xl:tw-flex tw-justify-end tw-my-2">
            <LanguageSwitcher />
          </div>
          <div className="tw-bg-gray-300 tw-px-2 md:tw-px-2 lg:tw-px-10 xl:tw-px-10 tw-py-4 tw-grid tw-gap-3 tw-rounded-sm tw-text-center md:tw-text-center lg:tw-text-left xl:tw-text-left">
            <h1 className="tw-text-slate-600 tw-text-xl">Registeration</h1>
            <h5 className="tw-text-red-600 tw-text-xs">
              Please only use English language to fill out the application form
            </h5>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={RegisterSchema}
            validateOnChange={true}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true);
              // make async call
              console.log("submit: ", data);
              setSubmitting(false);
            }}
          >
            {({ values, errors, isSubmitting }) => (
              <Form aria-label="form" className="tw-p-8 md:tw-p-8">
                <MyTextField 
                  placeholder="name" 
                  name="name" 
                  label="Name"
                />
                <MyTextField
                  placeholder="Contact Number"
                  name="contactNumber"
                  label="Contact Number"
                  margin="normal"
                />
                <MyTextField
                  placeholder="Date of Birth"
                  name="dob"
                  label="Date Of Birth"
                  margin="normal"
                />
                <FormControl className='tw-flex tw-flex-row tw-align-tem tw-items-center'>
                  <FormLabel id="demo-radio-buttons-group-label" className='tw-pr-2'>
                    Gender -
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="gender"
                  >
                    <MyRadio
                      name="gender"
                      type="radio"
                      value="male"
                      label="Male"
                    />
                    <MyRadio
                      name="gender"
                      type="radio"
                      value="female"
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
                <div>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="By clicking the Register button below, I have read, understood and agreed to the Privacy Notice." />
                  </FormGroup>
                </div>
                <div>
                  <Button variant="contained" type="submit" fullWidth>
                    Register
                  </Button>
                </div>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
