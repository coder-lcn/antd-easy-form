import React from 'react';
import { AntdForm } from '.';
import { FormItemProps } from './types';

import { unmountComponentAtNode, render } from 'react-dom';
import { act } from '@testing-library/react';

let container: HTMLDivElement | null = null;

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  });

  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  container && unmountComponentAtNode(container);
  container && container.remove();
  container = null;
});

describe('AntdForm', () => {
  it('is truthy', () => {
    expect(AntdForm).toBeTruthy();
  });

  it('render type', () => {
    const props: FormItemProps[] = [];
    const onFinished = () => {};

    act(() => {
      render(<AntdForm formItems={props} onFinished={onFinished} />, container);
    });

    console.log(container?.innerHTML);
  });
});
