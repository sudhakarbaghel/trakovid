import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";
import  Graph from "./pages/Graph";
import  Map from "./pages/Map";
 
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="/create" element={<CreateContact />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
