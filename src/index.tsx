import React, { useRef, useCallback, useState, useEffect } from 'react';
import { DatePicker, Form, FormInstance, Input, InputNumber, Select, Switch, Button } from 'antd';
import { AntdFormProps, FormItemProps } from './types';
import { RangePickerProps } from 'antd/lib/date-picker';

const { RangePicker } = DatePicker;

export const AntdForm = ({ formItems, onFinished, onReset: onResetFn, searchText, resetText }: AntdFormProps) => {
  const [loaded, setLoaded] = useState(process.env.NODE_ENV !== 'development');
  const formRef = useRef<FormInstance | null>(null);

  const onReset = () => {
    formRef.current!.resetFields();
    onResetFn && onResetFn();
  };

  const renderFormItem = useCallback((item: FormItemProps) => {
    switch (item.type) {
      case 'input':
        return <Input placeholder={item.placeholder} autoComplete='off' />;
      case 'password':
        return <Input type='password' placeholder={item.placeholder} autoComplete='off' />;
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
          <Select
            style={{ minWidth: 100 }}
            allowClear
            mode={item.multiple ? 'multiple' : undefined}
            showSearch={item.showSearch}
          >
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
        const props: RangePickerProps = {
          format: item.format || 'MM/DD HH:mm'
        };

        if (item.picker) {
          // @ts-ignore
          props.picker = item.picker;
          delete props.showTime;
        }

        if (item.showTime) {
          props.showTime = item.showTime;
          delete props.picker;
        }

        return <RangePicker {...props} />;
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (loaded === false) {
      import('antd/dist/antd.min.css').then(() => {
        setLoaded(true);
      });
    }
  }, [loaded]);

  return loaded ? (
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
          {searchText ? searchText : '??????'}
        </Button>
        <Button onClick={onReset}>{resetText ? resetText : '??????'}</Button>
      </Form.Item>
    </Form>
  ) : null;
};
