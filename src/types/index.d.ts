export type AppState = {
  value: string;
  spells: { [key: string]: string[] };
  result: string;
  message: string;
  isLower: boolean;
};

export type ButtonProps = {
  icon: "clean" | "file";
  label: string;
  onClick: () => void;
};
