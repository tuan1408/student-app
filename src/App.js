import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./features/login";
import "./App.css";
import StudentPage from "./features/studentPage";
import AddItem from "./features/add";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/page" element={<StudentPage />} />
          <Route path="/page/add" element={<AddItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
