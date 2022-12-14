// const Semaforo = () => {
//     const defaultColor = ["rojo", "verde", "amarillo"];
//     let [colorSeleccionado, setColorSeleccionado] = useState("");
//     console.log("COMPONENTE CARGADO");
//     console.log("colorSeleccionado es: ", colorSeleccionado);
//     useEffect(() => {
//         console.log("test");
//     }, []);
//     return (
//         <div>
//             {defaultColor.map((color, indice) => {
//                 return (
//                     <p
//                         key={indice}
//                         onClick={() => {
//                             setColorSeleccionado(
//                                 colorSeleccionado === color ? "" : color
//                             );
//                         }}
//                         className={
//                             colorSeleccionado === color ? "negro" : color
//                         }>
//                         {color}
//                     </p>
//                 );
//             })}
//         </div>
//     );
// };

// <div class="todo-list-dark">
//     <div class="dark-mode">
//         <button>
//             <i class="fa-solid fa-circle-half-stroke"></i>
//         </button>
//     </div>
//     <div class="todo-list-container">
//         <div class="add-todo">
//             <input type="text" placeholder="Add to do">
//         </div>
//         <div class="todos-container">
//             <div class="todo">
//                 <p>Limpiar el cuarto</p>
//                 <div class="todo-actions">
//                     <i class="fa-solid fa-check"></i>
//                     <i class="fa-solid fa-xmark"></i>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="footer">
//         Desing by <a href="https://github.com/s3rtr3s" target="_blank">Pedro Peña</a> with <i class="fa-solid fa-pencil"></i>
//     </div>
// </div>;

// <div className="container-fluid">
//     <div className="text-center">
//         <h1 className="text-center mt-5">To do list with React</h1>
//     </div>
//     <div>
//         <input
//             type="text"
//             title="Write a task"
//             placeholder="What should I do?">
//         </input>
//     </div>
// </div>