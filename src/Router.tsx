import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {NewTask, TaskList, TaskProfile, EditTask} from './components/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskProfile />} />
        <Route path="/new" element={<NewTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
