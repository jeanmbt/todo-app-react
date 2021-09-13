import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { StyledCheckBox } from './CheckBox.style'

const CheckBox = (isComplete) => {
  
  console.log(isComplete)
  return (
  //   <StyledCheckBox>
  //     {isComplete ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
  //   </StyledCheckBox>
  // )
  // if((isComplete === false)) {
  //   return <StyledCheckBox>
  //     <MdCheckBox/>
  //   </StyledCheckBox>
  // } else {
  //   return <StyledCheckBox>
  //     <MdCheckBoxOutlineBlank/>
  //   </StyledCheckBox>
  // }

//  return (
//     <StyledCheckBox>
//       {() => {
//         if(isComplete) {
//           <MdCheckBox/>
//       } else {
//         <MdCheckBoxOutlineBlank/>
//       }
//         }
//       }
//     </StyledCheckBox>
//   )
}

export default CheckBox