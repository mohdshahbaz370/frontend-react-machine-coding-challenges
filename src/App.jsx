import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import Practise from "./challenges/practise/Practise";
import StarRating from "./challenges/star-rating/StarRating";
import TodoList from "./challenges/todo-list/TodoList";
import Todo from "./challenges/todo-list-drag-and-drop/Todo";
import TicTacToe from "./challenges/tic-tac-toe/TicTacToe";
import InfiniteScroll1 from "./challenges/infinite-scroll-version1/InfiniteScroll";
import InfiniteScroll2 from "./challenges/infinite-scroll-version2/InfiniteScroll";
import KanbanBoard from "./challenges/kanban-board/KanbanBoard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/practise" element={<Practise />} />
          <Route
            path="/starRating"
            element={<StarRating value={2} total={5} />}
          />
          <Route path="/todoList" element={<TodoList />} />
          <Route path="/todoListDragDrop" element={<Todo />} />
          <Route path="/ticTacToe" element={<TicTacToe />} />
          <Route path="/infiniteScroll1" element={<InfiniteScroll1 />} />
          <Route path="/infiniteScroll2" element={<InfiniteScroll2 />} />
          <Route path="/KanbanBoard" element={<KanbanBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
