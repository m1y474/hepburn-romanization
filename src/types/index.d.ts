export type Spell = { [key: string]: string[] };
export type AppState = {
  result: string;
  message: string;
  isLower: boolean;
};

export type ButtonProps = {
  type: "button" | "reset";
  icon: "clean" | "file";
  label: string;
  onClick: () => void;
};

export type CheckProps = {
  label: string;
  onChange: (checked: boolean) => void;
};

export type HeadingProps = {
  id: string;
  text: string;
};
