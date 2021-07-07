import logo from './logo.svg';
import './App.css';
import ColorBox from './component/ColorBox';
import TodoList from './component/TodoList';
import { useEffect, useState } from 'react';
import TodoForm from './component/TodoForm';
import PostList from './component/PostList';
import Pagination from './component/Pagination';
import queryString from 'query-string';
import FilterForm from './component/FIlterForm';
import Clock from './component/Clock';
import BetterClock from './component/BetterClock';
import MagicBox from './component/MagicBox';
function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'title 1' },
    { id: 2, title: 'title 2' },
    { id: 3, title: 'title 3' },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  })
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: '',
  })
  useEffect(() => {
    async function fecthPostList() {
      try {
        //_limit=10&_page=1
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }

    }
    fecthPostList();
  }, [filters]);

  const handleTodoClick = (item) => {
    const itemIndex = todoList.findIndex(x => x.id === item.id);
    if (itemIndex >= 0) {
      const newList = [...todoList];
      newList.splice(itemIndex, 1);
      setTodoList(newList);
    }
  }


  const handleTodoFormSubmit = (formValues) => {
    console.log('formValues', formValues);
    const newTodo = {
      ...formValues,
      id: todoList.length + 1,
    }
    const newTodoList = [...todoList]
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }


  const handlePageChange = (newPage) => {
    console.log('Newpage', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    })
  }

  const handleFiltersChange = (newFilter) => {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilter.title_like,
    })
    console.log(filters);
  }
  const [showClock, setShowClock] = useState(true);

  return <>
    {/* <ColorBox></ColorBox> */}
    {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
    {/* <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm> */}
    {/* <FilterForm onSubmit={handleFiltersChange} />
    <PostList posts={postList} />
    <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
    {/* {showClock && <Clock />}
    <BetterClock />
    <button onClick={() => setShowClock(!showClock)}>HideClock</button> */}
    <MagicBox />
  </>;
}

export default App;
