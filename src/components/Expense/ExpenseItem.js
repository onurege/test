import './ExpenseItem.css';
import  ExpenseDate from './ExpenseDate'; 
import Card from '../UI/Card';
const Expenseltem = (props) => {
  const clickHandler = () => {
    console.log('clicked');
  
  }
  
  return (
    <Card className='expense-item'>
      <div className='expense-item'>
      <ExpenseDate date = {props.date}/>  
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>  
      <div className='expense-item__price'>${props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default Expenseltem;
