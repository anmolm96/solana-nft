# solana-nft

React component to render Solana NFTs as images

## Usage

The component has one required prop: id (the token address id of the NFT) and 3 optional props: height (number), width (number), and style ([React.CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v16/index.d.ts#L1547))

```js
// yarn add solana-nft or npm i solana-nft

import { NFT } from 'solana-nft'

<NFT id="<token_address_id>" />

<NFT id="<token_address_id>" height={600} width={600} style={{ borderRadius: "50%" }} />
```
