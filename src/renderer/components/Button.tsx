import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
};
