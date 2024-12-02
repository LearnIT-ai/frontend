import { RefObject } from "react";

export const changePasswordVisibility = (
  refs: RefObject<HTMLInputElement>[],
  [visibility, setVisibility]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
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
