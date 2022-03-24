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
    label: 'working',
    field: 'selling',
    defaultValue: false
  },
  {
    type: 'input',
    label: 'Username',
    field: 'username'
  },
  {
    type: 'dateTime',
    label: 'timeRange',
    field: 'timeRange'
  },
  {
    type: 'select',
    label: 'Order',
    field: 'order',
    selectOptions: [
      {
        label: 'price',
        value: 'price'
      },
      {
        label: 'time',
        value: 'time'
      }
    ]
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
