import * as React from 'react';

interface AntdFormProps {
  text: string;
}

export const AntdForm = ({ text }: AntdFormProps) => {
  return <div>{text}</div>;
};
