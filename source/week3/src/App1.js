import './App.css';

function App1() {
  const [,,variable] = ["변수1", "변수2", "변수3"];

  var change = [...variable, "나는 추가 변수"];

  var bookList = ["12", "34", "56"];

  return (
    <div className="App">
      <header className="App-header">
        {variable}
        Hello {change}

        {
          bookList.map(book => `<li>${book}</li>`)
        }
        {
          bookList.map(book => (<li>{book}</li>))
        }
      </header>
    </div>
  );
}

export default App1;
