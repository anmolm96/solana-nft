import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NFT } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <NFT id="2hqGBkAsU8n4QnyJz5csMNc5Ak9jSvoUSFekBmtyziUu" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
