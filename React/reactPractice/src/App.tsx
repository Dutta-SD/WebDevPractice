import { Route, Routes } from "react-router";
import About from "./components/about/About";
import Party from "./components/party/Party";
import Clock from "./components/clock/Clock";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About person={"farmer"} />} />
      <Route path="/party" element={<Party />} />
      <Route path="/clock" element={<Clock />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
