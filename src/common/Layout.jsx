import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/practise">practise</Link>
          </li>
          <li>
            <Link to="/starRating">star-rating</Link>
          </li>
          <li>
            <Link to="/todoList">todo-list</Link>
          </li>
          <li>
            <Link to="/todoListDragDrop">todo-list-drag-and-drop</Link>
          </li>
          <li>
            <Link to="/ticTacToe">tic-tac-toe</Link>
          </li>
          <li>
            <Link to="/infiniteScroll1">infinite-scroll-version1</Link>
          </li>
          <li>
            <Link to="/infiniteScroll2">infinite-scroll-version2</Link>
          </li>
          <li>
            <Link to="/KanbanBoard">Kanban-board</Link>
          </li>
          <li>
            <Link to="/debouncedInputSearchBar">Debounce-Input-Search-Bar</Link>
          </li>
          <li>
            <Link to="/throttledShootingGame">Throttled-Shooting-Game</Link>
          </li>
          <li>
            <Link to="/typeaHead">TypeaHead-Search-Bar</Link>
          </li>
          <li>
            <Link to="/accordion">Accordion</Link>
          </li>
          <li>
            <Link to="/carousel">Carousel</Link>
          </li>
          <li>
            <Link to="/toast">Toast Popup</Link>
          </li>
          <li>
            <Link to="/loadMoreBtn">Load More Button Pagination</Link>
          </li>
          <li>
            <Link to="/pagination">Pagination</Link>
          </li>
          <li>
            <Link to="/columnTable">Column Table</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Layout;
