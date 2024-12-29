import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import TodoApp from './projects/TodoApp';
import WeatherApp from './projects/WeatherApp';
import Calculator from './projects/Calculator';
import TaskManager from './projects/TaskManager';
import Analytics from './projects/Analytics';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/taskmanager" element={<TaskManager />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;