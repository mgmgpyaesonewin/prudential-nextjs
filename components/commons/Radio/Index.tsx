import React from "react";
import { useField, FieldAttributes } from "formik";
import { FormControlLabel, Radio } from "@mui/material";

type MyRadioProps = { label: string } & FieldAttributes<{}>;

const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

export default MyRadio;