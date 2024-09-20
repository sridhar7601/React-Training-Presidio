import React from 'react';
import { ItemProvider } from './components/ItemProvider';
import { DynamicItemManager } from './components/DynamicItemManager/DynamicItemManager';

const App = () => (
  <ItemProvider>
    <DynamicItemManager />
  </ItemProvider>
);

export default App;