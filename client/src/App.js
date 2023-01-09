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

const App = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <TaskProvider>
          <AdventureProvider>
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
              {/* <Route path="/tasks/:filter" element={<TasksContainer />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </AdventureProvider>
        </TaskProvider>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
