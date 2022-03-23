import * as React from 'react';
import Button from 'antd/lib/button';
import { DatePicker, Form, FormInstance, Input, InputNumber, Select, Switch } from 'antd';
import { AntdFormProps, FormItemProps } from './types';
import 'antd/dist/antd.min.css';

const { RangePicker } = DatePicker;

export const AntdForm = ({ formItems, onFinished, onReset: onResetFn }: AntdFormProps) => {
  const formRef = React.useRef<FormInstance | null>(null);

  const onReset = () => {
    formRef.current!.resetFields();
    onResetFn && onResetFn();
  };

  const renderFormItem = React.useCallback((item: FormItemProps) => {
    switch (item.type) {
      case 'input':
        return (
          <Input
            placeholder={item.placeholder}
            autoComplete='off'
            onPaste={(e) => {
              const value = e.clipboardData.getData('Text');
              setTimeout(() => {
                formRef.current!.setFieldsValue({ [item.field]: value.trim() });
              });
            }}
          />
        );
      case 'number':
        return <InputNumber />;
      case 'switch':
        return (
          <Form.Item
            name={item.field}
            key={item.field}
            label={item.label}
            rules={[{ required: item.required }]}
            valuePropName='checked'
            initialValue={item.defaultValue}
          >
            <Switch />
          </Form.Item>
        );
      case 'select':
        return (
          <Select style={{ minWidth: 100 }} allowClear mode={item.multiple ? 'multiple' : undefined}>
            {item.selectOptions!.map((k) => {
              return (
                <Select.Option key={k.value} value={k.value}>
                  {k.label}
                </Select.Option>
              );
            })}
          </Select>
        );
      case 'dateTime':
        return <RangePicker showTime format='MM/DD HH:mm' />;
      default:
        return null;
    }
  }, []);

  return (
    <Form ref={formRef} name='control-ref' onFinish={onFinished} layout='inline'>
      {formItems.map((item, i) => {
        return item.type === 'switch' ? (
          renderFormItem(item)
        ) : (
          <Form.Item
            name={item.field}
            key={i}
            label={item.label}
            rules={[{ required: item.required }]}
            initialValue={item.defaultValue}
          >
            {renderFormItem(item)}
          </Form.Item>
        );
      })}
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          搜索
        </Button>
        <Button onClick={onReset}>重置</Button>
      </Form.Item>
    </Form>
  );
};
