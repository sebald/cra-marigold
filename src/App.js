import React from 'react';
import { Column, Columns, Text, MarigoldProvider } from '@marigold/components';
import theme from '@marigold/theme-b2b'

function App() {
  return (
    <MarigoldProvider theme={theme}>
      <Columns space="xsmall" verticalAlign="top" horizontalAlign="left">
  <Column width={6}>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      dignissim.
    </Text>
  </Column>
  <Column width={6}>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      dignissim.
    </Text>
  </Column>
</Columns>
    </MarigoldProvider>
  );
}

export default App;
