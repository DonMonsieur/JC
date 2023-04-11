import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "../components/products/Index";
import NotFound from "../components/products/NotFound";
import Add from "../components/products/Add";
import AddUser from "../components/users/AddUser";
import Edit from "../components/products/Edit";
import TestInventory from "../components/products/TestInventory";
import TestEdit from "../components/products/TestEdit";

export default function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/inventory" element={<TestInventory />} />
                <Route path="/inventory/add" element={<Add />} />
                <Route path="/inventory/edit/:id" element={<Edit />} />
                <Route path="/testinventory/edit/:id" element={<TestEdit />} />
                <Route path="/user/add" element={<AddUser />} />
                
            </Routes>
        </div>
    );
}
