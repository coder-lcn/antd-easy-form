export type FormType = 'input' | 'select' | 'number' | 'switch' | 'dateTime' | 'password';

export type FormItemProps = {
  type: FormType;
  label: string;
  placeholder?: string;
  field: string;
  min?: number;
  max?: number;
  required?: boolean;
  selectOptions?: { label: string; value: any }[];
  multiple?: boolean;
  defaultValue?: any;
  showSearch?: boolean;
  format?: string;
  showTime?: boolean
};

export interface AntdFormProps {
  formItems: FormItemProps[];
  onFinished: (value: any) => void;
  onReset?: () => void;
  searchText?: string;
  resetText?: string;
}
