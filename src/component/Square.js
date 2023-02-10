// import React from "react";
// import {useDrag, useDrop} from "react-dnd"

// const Square = ({ number, moveSquare, index }) => {
//     const [{ isDragging }, drag] = useDrag({
//       item: { type: 'square', number, index },
//       collect: (monitor) => ({
//         isDragging: monitor.isDragging(),
//       }),
//     });
  
//     const [ {isOver} , drop] = useDrop({
//       accept: 'square',
//       drop: (item) => {
//         moveSquare(item.index, index);
//       },
//       collect: (monitor) => ({
//         isOver: monitor.isOver,
//       }),
//     });
  
//     return (
//       <div
//         ref={drop}
//         style={{ opacity: isDragging ? 0.5 : 1 }}
//         className="square"
//       >
//         <div ref={drag} className="number">
//           {number}
//         </div>
//       </div>
//     );
//   };

//   export default Square;