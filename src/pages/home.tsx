import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Index from "./index";
import Supervision from "./supervision";
import Records from "./records";
import SupervisionIndex from "./supervision-index";
import Overview from "./overview";
import Admin from "./admin";
import EmployeeManagement from "./employee-management";
import AdminRecords from "./admin-records";

export default function Home() {
  const usenavigate = useNavigate();

  useEffect(() => {
    if (window.name == "") {
      usenavigate("/login");
    }
  }, [window.name]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/supervision-index" element={<SupervisionIndex />} />
        <Route path="/supervision" element={<Supervision />} />
        <Route path="/records" element={<Records />} />
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin-records" element={<AdminRecords/>}/>
        <Route path="/employee-management" element={<EmployeeManagement/>}/>
      </Routes>
    </>
  );
}
