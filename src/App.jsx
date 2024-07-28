import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import StarRating from "./challenges/star-rating/StarRating";
import TodoList from "./challenges/todo-list/TodoList";
import TodoListDragDrop from "./challenges/todo-list-drag-and-drop/TodoListDragDrop";
import TicTacToe from "./challenges/tic-tac-toe/TicTacToe";
import InfiniteScroll from "./challenges/infinite-scroll/InfiniteScroll";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            path="/starRating"
            element={<StarRating value={2} total={5} />}
          />
          <Route path="/todoList" element={<TodoList />} />
          <Route path="/todoListDragDrop" element={<TodoListDragDrop />} />
          <Route path="/ticTacToe" element={<TicTacToe />} />
          <Route path="/infiniteScroll" element={<InfiniteScroll />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
