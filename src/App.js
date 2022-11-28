import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import AddMembers from "./components/AddMembers";
import CreateGroup from "./components/CreateGroup";
import ExpenseMain from "./components/ExpenseMain";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<CreateGroup />} />
          <Route path="/expense" element={<ExpenseMain />} />
          <Route path="/members" element={<AddMembers />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
