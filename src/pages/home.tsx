import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Index from "./index";
import Supervision from "./supervision";
import Records from "./records";

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
        <Route path="/supervision" element={<Supervision />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </>
  );
}
