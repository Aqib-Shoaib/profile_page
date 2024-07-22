import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Main from "./Layout/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
