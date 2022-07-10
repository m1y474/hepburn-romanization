export type AppState = {
  spells: { [key: string]: string[] };
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
