import React from 'react';
import Head from './Head/Head';
import Body from './Body/Body';

export default function Table({ products }) {
  return (
    <table className="w-full">
      <Head />
      <Body products={products} />
    </table>
  );
}
