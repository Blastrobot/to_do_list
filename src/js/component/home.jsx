import { element } from "prop-types";
import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
	
	const [list, setList] = useState([]);
	const [input, setInput] = useState("");

	const addTask = () => {
		input.length? setList ([...list, input]) : null; // enviando mi nuevo task a mi lista de tareas
		setInput (""); // clear input task
	};

	const deleteTask = (i) => {
		const newList = [...list];
		newList.splice(i, 1);
		setList(newList);
	};

return (
	<div className="whole-container">
		<div className="title">
			<h2>To do list</h2>
			<h5>Keeping track of my tasks</h5>
		</div>
		<div className="task-container">
			<div className="add-task">
				<input type="text" placeholder="Write down a task" onKeyDown={e => e.key == "Enter" ? addTask() : null} onChange={(e) => setInput(e.target.value)} value={input}/>
				<button onClick={() => addTask()}>Add</button>	
			</div>
			<div className="task-list">
			{list.map((task, i) => {
				return (
					<li key={i} className="todo">
						<ul>{task}</ul>
						<div className="todo-actions">
							<i className="fa-solid fa-xmark delete" onClick={() => deleteTask (i)}></i>
						</div>
					</li>
				)})}
			{list.length ? <span>{list.length} item left</span> : <span>No tasks! Add a task</span>}
			</div>
		</div>
		<div className="footer">
			<p>Copyright &copy; <a href="https://github.com/blastrobot" target="_blank">Blastronaut</a></p>
		</div>
	</div>
);
};

export default Home;