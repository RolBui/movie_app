import React from "react";
import { TextInput } from "react-native";

const InputText = (props: React.ComponentProps<typeof TextInput>) => {
  return (
    <TextInput
      placeholder="Email Address"
      className="text-gray-500 font-bold bg-white py-3 px-4 self-stretch rounded-md mb-5"
      {...props}
    />
  );
};

export default InputText;
