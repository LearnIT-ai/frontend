import { RefObject } from "react";

interface TextareaProps {
  params: {
    ref: RefObject<HTMLTextAreaElement>;
    type?: "file" | "text";
    disabled?: true | false;
    handleChangeFunction: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
    placeholder: string;
  };
}

export default function Textarea({ params }: TextareaProps) {
  function autoResize() {
    if (!params.ref.current) return;
    params.ref.current.style.height = params.type === "file" ? "75px" : "300px";

    const maxHeight = params.type === "file" ? 200 : 350;

    if (params.ref.current.scrollHeight > maxHeight) {
      params.ref.current.style.height = `${maxHeight}px`;
      params.ref.current.style.overflowY = "scroll";
    } else {
      params.ref.current.style.height = `${params.ref.current.scrollHeight}px`;
      params.ref.current.style.overflowY = "hidden";
    }
  }

  return (
    <textarea
      onInput={autoResize}
      value={params.value}
      className={`w-full rounded-xl border-2 border-[var(--border-clr)] bg-[var(--navbar-clr)] p-6 gap-6 mt-6 items-center justify-between chat-textarea resize-none 
                  transition-none overflow-hidden outline-none focus:border-[var(--input-focus-clr)] text-[var(--input-text-clr)] focus:text-[var(--input-text-focus-clr)] 
                  placeholder-[var(--input-text-clr)] text-sm duration-300
                  ${
                    params.type === "file"
                      ? "h-[75px] min-h-[75px]"
                      : "h-[300px] min-h-[300px]"
                  } ${params.disabled ? "bg-[var(--border-clr)]" : ""}`}
      disabled={params.disabled}
      placeholder={params.placeholder}
      ref={params.ref}
      onChange={params.handleChangeFunction}
    />
  );
}
