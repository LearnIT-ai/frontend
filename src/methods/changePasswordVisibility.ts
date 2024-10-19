import { RefObject } from "react";

export const changePasswordVisibility = (
  refs: RefObject<HTMLInputElement>[],
  [visibility, setVisibility]: [
    Boolean,
    React.Dispatch<React.SetStateAction<Boolean>>
  ]
) => {
  refs.forEach((ref) => {
    if (ref.current) {
      if (visibility) {
        ref.current.type = "password";
      } else {
        ref.current.type = "text";
      }
      setVisibility(!visibility);
    }
  });
};
