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
import UserManagement from "./user-management";
import SiteManagement from "./site-management";
import WorkManagement from "./works-management";
import InventoryIndex from "./inventory-index";
import AccountingIndex from "./accounting-index";
import IncomeSheet from "./income-sheet";
import MDAccount from "./md-account";
import PettyCash from "./petty-cash";
import Expenses from "./expenses";
import ProductList from "./product-list";
import PettyCashIndex from "./petty-cash-index";
import AccessControl from "./access-control";

export default function Home() {
  const usenavigate = useNavigate();
  let user = localStorage.getItem("username")

  useEffect(() => {
    if (user == "") {
      usenavigate("/login");
    }
  }, []);
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
        <Route path="/user-management" element={<UserManagement/>}/>
        <Route path="/site-management" element={<SiteManagement/>}/>
        <Route path="/work-management" element={<WorkManagement/>}/>
        <Route path="/inventory-index" element={<InventoryIndex/>}/>
        <Route path="/accounting" element={<AccountingIndex/>}/>
        <Route path="/income-sheet" element={<IncomeSheet/>}/>
        <Route path="/md-account" element={<MDAccount/>}/>
        <Route path="/petty-cash" element={<PettyCash/>}/>
        <Route path="/expenses" element={<Expenses/>}/>
        <Route path="/product-list" element={<ProductList/>}/>
        <Route path="/petty-cash-index" element={<PettyCashIndex/>}/>
        <Route path="/access-control" element={<AccessControl/>}/>
      </Routes>
    </>
  );
}
