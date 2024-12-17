import { Fragment } from "react";

function ListGroup() {
  let items = [
    "BTM",
    "RT Nagar",
    "Koramangala",
    "JP Nagar",
    "HSR Layout",
  ];
  // items = [];
  const listItems = [];

  // Using a for loop to create list items
  for (let i = 0; i < items.length; i++) {
    listItems.push(
      <li
        key={i} // Unique key for each item
        className={`list-group-item ${i === 0 ? "active" : ""}`} // Adds 'active' class to the first item
      >
        {items[i]}
      </li>
    );
  }

  let msg;
  let content = () => {
     if (items.length == 0) {
        msg = <p>No items available.</p>;
     } else {
       msg = (
         <ul className="list-group">
           {listItems} {/* Displaying the list items created in the loop */}
         </ul>
       );
     }
     return msg;
  }
 
  
  return (
    <Fragment>
      <h1>List Item</h1>
      {content()} 
    </Fragment>
  );

}

export default ListGroup;
