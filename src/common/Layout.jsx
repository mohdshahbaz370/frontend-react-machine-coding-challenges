import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
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
            <Link to="/infiniteScroll">infinite-scroll</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Layout;
