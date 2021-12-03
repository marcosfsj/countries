import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import TodosContextApi from "./pages/todos-context-api/todos-context-api.page";
import TodosReactQuery from "./pages/todos-react-query/todos-react-query.page";
import Spinner from "./components/spinner.component";
import { SpinnerContext } from "./providers/spinner.provider";

function App() {
  const { isLoading } = useContext(SpinnerContext);
  return (
    <>
      <Spinner isLoading={isLoading} />
      <Routes>
        <Route path="/" element={<TodosReactQuery />} />
        <Route path="/context-api" element={<TodosContextApi />} />
        <Route path="/react-query" element={<TodosReactQuery />} />
      </Routes>
    </>
  );
}

export default App;
