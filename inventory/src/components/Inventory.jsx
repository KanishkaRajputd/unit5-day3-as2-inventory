import { useState } from "react";
import css from "./inventory.css"

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 0,
    notebooks: 0,
    pens: 0,
    inkpens:0
  });
  
    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button onClick={()=>{
          setInv({
  books:inv.books+1,
  notebooks:inv.notebooks,
  pens:inv.pens,
  inkpens:inv.inkpens
  });
        }} className="circlularButton">+</button>
        
<button 
  onClick={()=>{
    if(inv.books<=0){
              return
            }
          setInv({
            
  books:inv.books-1,
  notebooks:inv.notebooks,
  pens:inv.pens,
  inkpens:inv.inkpens
  });
  }}className="circlularButton">-</button>
        <span className={`${inv.books%2 === 1 ? "redtext" :"greentext"}`}>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks : </span>
        <button 
        onClick={()=>{
          setInv({
  books:inv.books,
  notebooks:inv.notebooks+1,
  pens:inv.pens,
  inkpens:inv.inkpens

  });
        }}className="circlularButton">+</button>
        <button 
        onClick={()=>{
    if(inv.notebooks<=0){
              return
            }
          setInv({
            
  books:inv.books,
  notebooks:inv.notebooks-1,
  pens:inv.pens,
  inkpens:inv.inkpens
  });
        }}
        className="circlularButton">-</button>
        <span className={`${inv.notebooks%2 === 1 ?"redtext" :"greentext"}`}>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button 
         onClick={()=>{
setInv({
         books:inv.books,
         notebooks:inv.notebooks,
         pens:inv.pens+1,
         inkpens:inv.inkpens
      })


         }}
        className="circlularButton">+</button>
        <button 
        onClick={()=>{
    if(inv.pens<=0){
              return
            }
          setInv({
            
  books:inv.books,
  notebooks:inv.notebooks,
  pens:inv.pens-1,
  inkpens:inv.inkpens
  });
        }}className="circlularButton">-</button>
        <span className={`${inv.pens%2 === 1 ?"redtext" :"greentext"}`}>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button 
       
          onClick={()=>{
setInv({
         books:inv.books,
         notebooks:inv.notebooks,
         pens:inv.pens,
         inkpens:inv.inkpens+1
      })


         }}
        className="circlularButton">+</button>
        <button
                onClick={()=>{
    if(inv.inkpens<=0){
              return
            }
          setInv({
            
  books:inv.books,
  notebooks:inv.notebooks,
  pens:inv.pens,
  inkpens:inv.inkpens-1
  });
        }}
className="circlularButton">-</button>
        <span className={`${inv.inkpens%2 === 1 ?"redtext" :"greentext"}`}>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
     <div className="bluetext"> total: {inv.books+inv.notebooks+inv.pens+inv.inkpens}
    </div></div>
  );
};
