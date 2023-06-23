import { useLocalStorage, useSessionStorage } from './useStorage';

const UseStorageComponent = () => {
  const [age, setAge, removeAge] = useLocalStorage("age", 27);  
  const [name, setName, removeName] = useSessionStorage("name", "Baher");  

  return (
    <>
      <div>{name}  {age}</div>
      <button onClick={() => setName("Jhon")}>Set Name</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={() => setAge(42)}>Set Age</button>
      <button onClick={removeAge}>Remove Age</button>


    </>
  )
}

export default UseStorageComponent
