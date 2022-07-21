import React from 'react';
import ProductLists from './useCallback/UseCallback';
import Parent from './useContext/Parent';
import UseMemo from './useMemo/useMemo';

function App() {
  return (
    <>
    <div style={{ height : '600px', width : '100%', display: 'flex',flexDirection: 'column' , alignItems : 'center', justifyContent:'center' }} >
      <h1 style={{ display : 'block' }} >React Interview Preparation</h1>
      <div>
        <UseMemo />
      </div>
      <div>
        <ProductLists />
      </div>
      <div>
        <Parent />
      </div>
    </div>
    </>
  );
}

export default App;
