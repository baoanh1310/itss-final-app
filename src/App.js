import useMyHook from './hook';

function App() {

  const array = ['Huyen', 'Hoa', 'Hung', 'Long'];
  const  [selectedItem, selectedIndex, handleChange, findSelectedIndex] = useMyHook(array);

  const displayArray = (array) => {
    let result = "[" + array.join(", ") + "]";
    return result;
  }

  const appStyle = {
    padding: "20px 40px"
  }

  return (
      <div className="App" style={appStyle}>
        <p>学生一覧：{displayArray(array)}</p>
        <p>探索名前：<input type="text" onChange={handleChange}></input></p>
        <button onClick={findSelectedIndex} className= "btn">確定</button>
        <p>探索名前：{selectedItem}</p>
        <p>位置: {selectedIndex}</p>
      </div>
  );
}

export default App;
