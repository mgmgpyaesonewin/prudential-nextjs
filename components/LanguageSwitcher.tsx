import React from 'react';
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

const LanguageSwitcher: React.FC<any> = () => {
  const [alignment, setAlignment] = React.useState<string | null>("left");
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      size="small"
    >
      <ToggleButton value="en" aria-label="left aligned">
        EN
      </ToggleButton>
      <ToggleButton value="my" aria-label="centered">
        MY
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default LanguageSwitcher;
