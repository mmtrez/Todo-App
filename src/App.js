import './App.css';
import Todo from "./pages/Todo/Todo";
import { TodoProvider } from "./context/TodoContext";
import Theme from "./Theme";

function App() {

  return (
    <TodoProvider>
      <Theme children={<Todo />} />
    </TodoProvider>
  );
}

export default App;
