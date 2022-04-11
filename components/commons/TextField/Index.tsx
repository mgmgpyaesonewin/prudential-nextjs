import { useField } from "formik";
import { TextField } from "@mui/material";

const MyTextField: React.FC<any> = ({
  placeholder,
  label,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      fullWidth
      variant="standard"
      placeholder={placeholder}
      label={label}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

export default MyTextField;
