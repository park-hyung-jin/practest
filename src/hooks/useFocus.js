import { searchFocusState } from "atoms/searchFocusState";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

const useFocus = () => {
  const [searchFocus, setSearchFocus] = useRecoilState(searchFocusState);
  const inputFocus = useRef();

  useEffect(() => {
    if (searchFocus) inputFocus.current.focus();
  }, [searchFocus, inputFocus]);
  return [inputFocus, setSearchFocus];
};

export default useFocus;
