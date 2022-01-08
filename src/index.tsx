import React, { useState, useEffect } from 'react';

export type Props = {
  id: string;
  height?: number;
  width?: number;
  style?: React.CSSProperties;
};

export const NFT = ({ id, height, width, style }: Props) => {
  const [nftData, setNftData] = useState<{
    url: string;
  } | null>(null);
  const [error, setError] = useState(false);

  const fetchNft = async () => {
    try {
      const response = await fetch(`https://api.all.art/v1/solana/${id}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data: { Preview_URL: string } = await response.json();

      setNftData({
        url: data.Preview_URL,
      });
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchNft();
  }, []);

  if (error) {
    return <div>Error: Invalid NFT ID</div>;
  }

  return <img height={height} width={width} src={nftData?.url} style={style} />;
};
