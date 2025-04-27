interface InputProps {
  message: string;
}

export default function InputError({ message }: InputProps) {
  return (
    <p className="text-[var(--error-clr)] text-xs text-left pl-3 font-semibold">
      {message}
    </p>
  );
}
