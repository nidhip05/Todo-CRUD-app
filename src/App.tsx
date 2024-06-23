import { FaPen, FaClipboardList } from "react-icons/fa";
import TodoList from "./components/TodoList";
import "./CSS/App.css";

function App() {
  return (
    <div className="main animation-start animation0">
      <div className="main-class">
        <p className="name">TODO</p>
      </div>
      <div className="header">
        <div className="logoside">
          <FaPen />
          <span>What to Do</span>
          <FaClipboardList />
        </div>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
