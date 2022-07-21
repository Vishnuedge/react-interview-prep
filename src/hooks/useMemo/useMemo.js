import React, {useState , useMemo} from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [ arr ] = useState([1,2,3,4,5]);

    const findMax = () => {
        console.log('AGAIN....')
        return Math.max(...arr);
    }

    const handleCounter = () => {
        setCount( count + 1 );
    }

    const maxMemoResult = useMemo(()=>  findMax() ,[arr]);
  return (
    <>
    <h1>UseMemo</h1>
        <p>{count}</p>
        <p>{maxMemoResult}</p>
        <button onClick={handleCounter} >Add</button>
    </>
  )
}

export default UseMemo