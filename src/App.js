import React from 'react';
import ProductLists from './hooks/useCallback/UseCallback';
import UseMemo from './hooks/useMemo/useMemo';
import Parent from './hooks/useContext/Parent'
import ComponentOne from './hoc/ComponentOne';
import ComponentTwo from './hoc/ComponentTwo';

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
      <div>
        <h1>HigherOrderComponents</h1>
        <ComponentOne />
        <ComponentTwo />
      </div>
    </div>
    </>
  );
}

export default App;
