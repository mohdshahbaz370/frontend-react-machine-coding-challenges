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
import DebouncedInputSearchBar from "./challenges/debounced-input-search-bar/DebouncedInputSearchBar";
import ThrottledShootingGame from "./challenges/throttled-shooting-game/ThrottledShootingGame";
import TypeaHead from "./challenges/typeahead-search-bar/TypeaHead";
import AccordionApp from "./challenges/accordion/AccordionApp";
import Carousel from "./challenges/carousel/Carousel";
import Toast from "./challenges/toast-popup/Toast";

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
          <Route
            path="/debouncedInputSearchBar"
            element={<DebouncedInputSearchBar />}
          />
          <Route
            path="/throttledShootingGame"
            element={<ThrottledShootingGame />}
          />
          <Route path="/typeaHead" element={<TypeaHead />} />
          <Route path="/accordion" element={<AccordionApp />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/toast" element={<Toast />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
