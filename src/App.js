import Expenses from "./components/Expense/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 8, 5),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 7, 11),
    },
    { 
      id: "e3", 
      title: "New Tv", 
      amount: 799.99, 
      date: new Date(2023, 2, 27) 
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 799.99,
      date: new Date(2023, 10, 3),
    },
  ];
  return (
    <div className="App">
      <Expenses item = {expenses}/>
    </div>
  );
}

export default App;
