import React from 'react'
import ListItem from './ListItem'

function Content({items, handleCheck, handleDelete})
// const Content = ({items, handleCheck, handleDelete}) => 
{

    // const [name, setName] = useState('Dave');
    // const [count, setCount] = useState(0);

    // const handleNameChange = () => {
    //     const name = ['Bob', 'Dave', 'Paijo'];
    //     const int = Math.floor(Math.random() * 3);

    //     setName(name[int]);
    // };

    // const handleClick = () => {
    //     setCount(count+1);
    //     console.log(count);
    // };

    // const handleClickWithParam = (name) => {
    //     console.log(`${name} was Clicked`);
    // };

  return (
    <>
        {items.length ? (
            <ListItem
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />

        ): (
            <p style={{ marginTop: '2rem' }}> Your List is Empty</p>
        )}


        {/* <p>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}> Click Name</button>
        <button onClick={handleClick}> Click Count</button>
        <button onClick={()=> handleClickWithParam('Laksamana')}> Click It2</button> */}
    </>
  )
}

export default Content