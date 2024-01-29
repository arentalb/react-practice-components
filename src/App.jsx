import "./styles/global.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Tasks } from "./components/tasks/Tasks.jsx";
import { TaskView } from "./components/tasks/TaskView.jsx";
import { Header } from "./layout/Header.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { TaskAdd } from "./components/tasks/TaskAdd.jsx";
import { TaskEdit } from "./components/tasks/TaskEdit.jsx";
import { TaskDelete } from "./components/tasks/TaskDelete.jsx";
import { TaskProvider } from "./contexts/TaskContext.jsx";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <TaskProvider>
          <Routes>
            <Route path={"/"} element={<Home />}>
              <Route index element={<Navigate to={"tasks"} />} />
              <Route path={"tasks"} element={<Tasks />} />
              <Route path={"task/:id"} element={<TaskView />} />
              <Route path={"task/add"} element={<TaskAdd />} />
              <Route path={"task/edit/:id"} element={<TaskEdit />} />
              <Route path={"task/delete/:id"} element={<TaskDelete />} />
            </Route>

            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
          </Routes>
        </TaskProvider>
      </main>
    </>
  );
}

export default App;
