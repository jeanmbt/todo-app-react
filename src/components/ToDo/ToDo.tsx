import React, { useState } from "react";
import { StyledToDo } from "./ToDo.style";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const ToDo = ({ toDo, markToDo, isComplete }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return (
    <StyledToDo onClick={() => markToDo(toDo.id)}>
      {isComplete ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      {toDo.text}
    </StyledToDo>
  );
};

export default ToDo;
