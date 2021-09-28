import React from "react";
import { StyledSubmitButton } from "./SubmitButton.style";

interface SubmitButtonProps {
  onSubmit: () => void;
}

function SubmitButton({ onSubmit }: SubmitButtonProps) {
  return <StyledSubmitButton onSubmit={onSubmit} />;
}

export default SubmitButton;
