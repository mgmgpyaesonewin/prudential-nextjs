import React from "react";
import { TextField, Button } from "@mui/material";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileHeader from "./MobileHeader";
import Sidebar from "./Siderbar";

const Login: React.FC = () => {
  return (
    <div className="tw-flex tw-flex-col md:tw-flex-col lg:tw-flex-row xl:tw-flex-row tw-h-full md:tw-h-full lg:tw-h-screen xl:tw-h-screen tw-bg-secondary-300 md:tw-bg-secondary-300 lg:tw-bg-white xl:tw-bg-white">
      <MobileHeader />
      <Sidebar></Sidebar>
      <div className="tw-w-full md:tw-w-full lg:tw-w-3/4 xl:tw-w-3/4 lg:tw-pl-32 xl:tw-pl-32 lg:tw-pr-16 xl:tw-pr-16 tw-pb-2 md:tw-pb-2 lg:tw-py-8 xl:tw-py-8 tw-overflow-hidden tw-overflow-y-scroll tw-py-4 tw-px-8 md:tw-py-4 md:tw-px-8 lg:tw-py-4 lg:tw-px-8 xl:tw-py-4 xl:tw-px-8">
        <div className="tw-hidden md:tw-hidden lg:tw-flex xl:tw-flex tw-justify-end tw-my-2">
          <LanguageSwitcher></LanguageSwitcher>
        </div>
        <div className="tw-bg-secondary-300 tw-px-2 md:tw-px-2 lg:tw-px-10 xl:tw-px-10 tw-py-4 tw-grid tw-gap-3 tw-rounded-sm">
          <h1 className="tw-text-secondary-600 tw-text-xl">
            Verification required
          </h1>
          <h5 className="tw-text-red-600 tw-text-xs">
            We have sent a temporary ID number to your Viber Phone number.
            Please fill the below information to Login.
          </h5>
        </div>
        <div className="tw-my-8 tw-mx-2 md:tw-mx-2 lg:tw-mx-16 xl:tw-mx-16">
          <TextField
            placeholder="Temporary Id"
            name="temporaryId"
            label="Temporary ID"
            fullWidth
            variant="standard"
          />
          <TextField
            placeholder="name"
            name="Date Of Birth"
            label="DOB"
            fullWidth
            variant="standard"
          />
          <Button variant="contained" type="submit" fullWidth>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
