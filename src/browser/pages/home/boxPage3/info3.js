import React from "react";
import useFocus from "hooks/useFocus";
import styled from "styled-components";

const Info3 = () => {
  const [inputFocus, setSearchFocus] = useFocus();
  return (
    <div>
      page3
      <Input
        ref={inputFocus}
        onBlur={() => {
          setSearchFocus((focus) => !focus);
        }}
      />
    </div>
  );
};
const Input = styled.input``;

export default Info3;
