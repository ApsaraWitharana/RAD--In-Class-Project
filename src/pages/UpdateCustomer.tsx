// import {useNavigate} from "react-router";
// import {useContext, useState} from "react";
// import {CustomerContext} from "../component/CustomerProvider.tsx";
//
// export function UpdateCustomer() {
//
//     const navigate = useNavigate();
//     const context = useContext(CustomerContext);
//
//     if (!context) {
//         throw new Error("CustomerContext must be used within a CustomerProvider");
//     }
//
//     const { customers, setCustomers } = context;
//
//     const [name, setName] = useState("");
//     const [address, setAddress] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//
//     function handleUpdateCustomer() {
//         const newCustomers = customers.map((customer) => customer.email === email?{...customers,name:name,address:address,phone:phone,email:email}:customer);
//         setCustomers(newCustomers);
//         navigate("/" );
//     }
//     return (
//
//         <div>
//             <header>Update Customer</header>
//             <br/>
//             <input name="Name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
//             <input name="Address" type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
//             <input name="Email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
//             <input name="Phone" type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
//             <br/>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Address</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Actions</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {customers.map((customer) => (
//                     <tr key={customer.email}>
//                         <td>{customer.name}</td>
//                         <td>{customer.address}</td>
//                         <td>{customer.email}</td>
//                         <td>{customer.phone}</td>
//                         <td>
//                             <button onClick={handleUpdateCustomer}>Update</button>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//
//     );
//
// }

import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { CustomerContext } from "../component/CustomerProvider.tsx";
import { Customer } from "../model/Customer.ts";

export function UpdateCustomer() {
    const navigate = useNavigate();
    const context = useContext(CustomerContext);

    if (!context) {
        throw new Error("CustomerContext must be used within a CustomerProvider");
    }
    const {customers, setCustomers} = context;
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleRowClick(customer: Customer) {
        setName(customer.name);
        setAddress(customer.address);
        setEmail(customer.email);
        setPhone(customer.phone);
        setEmail(customer.email);
    }

    // Function to update the customer
    function handleUpdateCustomer() {
        const newCustomers = customers.map((customer) => customer.email === email?{...customers,name:name,address:address,phone:phone,email:email}:customer);
        setCustomers(newCustomers);
        navigate("/" );
    }

    return (
        <div className="grid grid-cols-2 gap-6 p-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                <header>
                    <h1 className="text-2xl font-bold text-gray-700 mb-4">Update Customer</h1>
                </header>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input className="w-full border border-gray-300 rounded p-2" name="Name" type="text"
                               placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-gray-700">Address</label>
                        <input className="w-full border border-gray-300 rounded p-2" name="Address" type="text"
                               placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input className="w-full border border-gray-300 rounded p-2" type="text" placeholder="Email"
                               value={email}/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700">Phone</label>
                        <input className="w-full border border-gray-300 rounded p-2" name="Phone" type="text"
                               placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>

                </div>
                <button onClick={handleUpdateCustomer}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Update
                </button>
                <br/>
                <table className="w-full border-collapse mt-6">
                    <thead>
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Address</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Phone</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer) => (
                        <tr>
                            <td className="border p-2">{customer.name}</td>
                            <td className="border p-2">{customer.address}</td>
                            <td className="border p-2">{customer.email}</td>
                            <td className="border p-2">{customer.phone}</td>
                            <td className="border p-2">
                                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={() => handleRowClick(customer)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {/*{Update Item}*/}
            <div className="bg-white shadow-md rounded-lg p-6">
                <header>
                    <h1 className="text-2xl font-bold text-gray-700 mb-4">Add Item</h1>
                </header>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input name="Name" type="text" placeholder="Name" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="qty" className="block text-gray-700">QTY</label>
                        <input name="QTY" type="text" placeholder="QTY" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-gray-700">Price</label>
                        <input name="Price" type="text" placeholder="Price" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700">Total Price</label>
                        <input name="Supplier" type="text" placeholder="Totla" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                </div>
                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Update</button>
                <table className="w-full border-collapse mt-6">
                    <thead>
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">QTY</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Total Price</th>
                        <th className="border p-2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((item) => (
                        <tr key={item.name}>
                            <td className="border p-2"></td>
                            <td className="border p-2"></td>
                            <td className="border p-2"></td>
                            <td className="border p-2"></td>
                            <td className="border p-2">
                                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Edit</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
