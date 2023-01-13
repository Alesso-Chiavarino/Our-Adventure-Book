import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Form from "./components/Form/Form";
import AdventureProvider from "./context/AdventureContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Adventures from "./pages/Adventures/Adventures";
import SearchProvider from "./context/SearchContext";
import AdventureModal from "./components/AdventureModal/AdventureModal";
import TasksContainer from "./components/TasksContainer/TasksContainer";
import TaskProvider from "./context/TaskContext";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskDetail from "./components/TaskDetail/TaskDetail";
import LettersContainer from "./components/LettersContainer/LettersContainer";
import LetterProvider from "./context/LetterContext";

const App = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <TaskProvider>
          <AdventureProvider>
            <LetterProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<Form />} />
                <Route path="/new/:id" element={<Form />} />
                <Route path="/adventures" element={<Adventures />} />
                <Route path="/detail/:id" element={<AdventureModal />} />
                <Route path="/adventures/:fav" element={<Adventures />} />
                <Route path="/tasks" element={<TasksContainer />} />
                <Route path="/tasks/:pending" element={<TasksContainer />} />
                <Route path="/tasks/form" element={<TaskForm />} />
                <Route path="/tasks/form/:id" element={<TaskForm />} />
                <Route path="/tasks/detail/:id" element={<TaskDetail />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/letters" element={<LettersContainer />} />
              </Routes>
              <Footer />
            </LetterProvider>
          </AdventureProvider>
        </TaskProvider>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
