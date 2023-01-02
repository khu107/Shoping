import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTodo } from './redux/todoSlice';
function App() {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => {
    return state.todo;
  });

  useEffect(() => {
    dispatch(getTodo());
  }, []);
  console.log(todoData.data);
  return (
    <div className="App">
      {todoData.isLoading ? 'loading....' : ''}
      {todoData.isError ? 'Error....' : ''}
      {todoData.data.map((v) => {
        return (
          <div key={v.id}>
            {v.id} {v.title}
          </div>
        );
      })}
    </div>
  );
}

export default App;
