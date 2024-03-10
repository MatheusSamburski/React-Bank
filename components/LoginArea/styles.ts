import styled from "styled-components/native";

export const ContainerUserLogin = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 10px;
`;

export const TextUserLogin = styled.Text`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

export const ContainerInputsNameAndPassword = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerInput = styled.View`
  gap: 5px;
`;

export const TextLabelInput = styled.Text`
  font-size: 12px;
  color: black;
  font-weight: 500;
`;

export const InputUserLogin = styled.TextInput`
  border: 1px solid black;
  border-radius: 8px;
  padding-left: 10px;
`;
export const TextErrorInput = styled.TextInput`
  font-size: 12px;
  font-weight: 800;
  color: red;
`;

export const ContainerButtonSubmitLoginUser = styled.View`
  border-radius: 8px;
  margin-top: 10px;
`;
