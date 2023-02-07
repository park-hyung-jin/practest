import { inputState } from "atoms/inputState";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import debounce from "lodash.debounce";

export default function Page1() {
  const [input, setInput] = useRecoilState(inputState);

  // const [input, setInput] = useState({
  //   var1: "",
  //   var2: "",
  //   var3: "",
  //   var5: "",
  //   var6: "",
  //   var7: "",
  //   var8: "",
  //   var9: "",
  //   radio1: "",
  // });

  const [checked, setChecked] = useState(false);

  const onChangeData = (e) => {
    const { value, name } = e.target;
    setInput((state) => ({ ...state, [name]: value })); //name key값
  };

  const debounceOnChangeData = debounce(onChangeData, 1000);

  console.log(input.var1);
  // console.log(checked);

  const formSubmit = (e) => {
    e.preventDefault();
    // if (!checked) return console.log("제출X");
    // console.log("제출");
    try {
      console.log("제출");
    } catch (e) {
      alert(
        `${e} 
            정상적으로 제출되지 않았습니다. 
            다시 시도해 주세요.`
      );
    }
  };

  const buttonClick = () => {
    return console.log("클릭했습니다");
  };

  return (
    <Page1Area>
      <form onSubmit={formSubmit}>
        <Input1>
          <Input1box1>
            <label htmlFor="1">이름1</label>
            <Input
              type="text"
              name="var1"
              id="1"
              placeholder="이름1"
              onChange={debounceOnChangeData}
              // value={input.var1}
            />
          </Input1box1>
          <Input1box1>
            <label htmlFor="2">이름2</label>
            <Input
              type="text"
              name="var2"
              id="2"
              placeholder="이름2"
              onChange={debounceOnChangeData}
              // value={input.var2}
            />
          </Input1box1>
        </Input1>
        <Input2>
          <Input1box1>
            <label htmlFor="3">이름3</label>
            <Input
              type="text"
              name="var3"
              id="3"
              placeholder="이름3"
              onChange={debounceOnChangeData}
              // value={input.var3}
            />
          </Input1box1>
          <Input1box1>
            <label htmlFor="4">이름4</label>
            <InputRadioArea>
              <InputRadio
                type="radio"
                name="radio1"
                id="4-1"
                placeholder="이름4"
                onChange={debounceOnChangeData}
                value={"hello"}
              />
              <label htmlFor="4-1">이름4-1</label>
              <InputRadio
                type="radio"
                name="radio1"
                id="4-2"
                placeholder="이름4"
                onChange={debounceOnChangeData}
                value={"hello2"}
              />
              <label htmlFor="4-2">이름4-2</label>
            </InputRadioArea>
          </Input1box1>
        </Input2>
        <Input3>
          <Input1box1>
            <label htmlFor="5">이름5</label>
            <Input
              type="text"
              name="var5"
              id="5"
              placeholder="이름5"
              onChange={debounceOnChangeData}
              // value={input.var5}
            />
          </Input1box1>
          <Input1box1>
            <label htmlFor="6">이름6</label>
            <Input
              type="text"
              name="var6"
              id="6"
              placeholder="이름6"
              onChange={debounceOnChangeData}
              // value={input.var6}
            />
          </Input1box1>
        </Input3>
        <Input4>
          <Input1box1>
            <label htmlFor="7">이름7</label>
            <Input
              type="text"
              name="var7"
              id="7"
              placeholder="이름7"
              onChange={debounceOnChangeData}
              // value={input.var7}
            />
          </Input1box1>
          <Input1box1>
            <label htmlFor="8">이름8</label>
            <Input
              type="text"
              name="var8"
              id="8"
              placeholder="이름8"
              onChange={debounceOnChangeData}
              // value={input.var8}
            />
          </Input1box1>
        </Input4>
        <Input5>
          <Input1box1>
            <label htmlFor="9">이름9</label>
            <TextArea
              type="text"
              name="var9"
              id="9"
              placeholder="이름9"
              onChange={debounceOnChangeData}
              // value={input.var9}
            />
          </Input1box1>
        </Input5>
        <input
          type="checkbox"
          onChange={() => setChecked((check) => !check)}
          value={checked}
        />
        <button type="submit">버튼1</button>
        <button type="button" onClick={buttonClick}>
          버튼 2
        </button>
      </form>
    </Page1Area>
  );
}

const Page1Area = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  &::placeholder {
    color: #9e9e9e;
  }
`;
const TextArea = styled.textarea`
  &::placeholder {
    color: #9e9e9e;
  }
`;
const Input1 = styled.div`
  display: flex;
  gap: 40px;
`;

const InputRadioArea = styled.div`
  display: flex;
  gap: 2px;
`;
const InputRadio = styled.input`
  display: flex;
`;
const Input2 = styled.div`
  display: flex;
  gap: 40px;
`;
const Input3 = styled.div`
  display: flex;
  gap: 40px;
`;
const Input4 = styled.div`
  display: flex;
  gap: 40px;
`;

const Input5 = styled.div`
  display: flex;
`;

const Input1box1 = styled.div`
  display: flex;
  flex-direction: column;
`;
