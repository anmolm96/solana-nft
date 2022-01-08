import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NFT } from '../.';

const App = () => {
  return (
    <div>
      <NFT
        id="2hqGBkAsU8n4QnyJz5csMNc5Ak9jSvoUSFekBmtyziUu"
        height={600}
        width={600}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
