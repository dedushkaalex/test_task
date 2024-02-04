export interface Option {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  label: string;
  id: string | number;
}

export interface FilterOptionFunc {
  (option: Option, inputValue: string): boolean;
}

export interface FieldProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  loading?: boolean;
}
