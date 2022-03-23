# antd-easy-form

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/antd-easy-form.svg)](https://www.npmjs.com/package/antd-easy-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save antd-easy-form
```

## Usage

```tsx
import React from 'react';

import { AntdForm } from 'antd-easy-form';
import { FormItemProps } from 'antd-easy-form/dist/types';

const searchProps: FormItemProps[] = [
  {
    type: 'switch',
    label: '是否有效',
    field: 'selling',
    defaultValue: false
  },
  {
    type: 'input',
    label: '用户名',
    field: 'username'
  },
  {
    type: 'dateTime',
    label: '时间范围',
    field: 'timeRange'
  },
  {
    type: 'select',
    label: '排序',
    field: 'order',
    selectOptions: [
      {
        label: '价格',
        value: 'price'
      },
      {
        label: '时间',
        value: 'time'
      }
    ]
  },
  {
    type: 'switch',
    field: 'asc',
    label: '升序/降序'
  }
];

const App = () => {
  const onFinished = (value: any) => {
    console.log(value);
  };

  return <AntdForm formItems={searchProps} onFinished={onFinished} />;
};

export default App;
```

## License

MIT © [coder-lcn](https://github.com/coder-lcn)
