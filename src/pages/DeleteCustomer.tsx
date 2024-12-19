import { useContext } from "react";
import { useNavigate } from "react-router";
import { CustomerContext } from "../component/CustomerProvider.tsx";

export function DeleteCustomer() {
    const context = useContext(CustomerContext);

    if (!context) {
        throw new Error("CustomerContext must be used within a CustomerProvider");
    }

    const { setCustomers, customers } = context;
    const navigate = useNavigate();

    function handleDeleteCustomer() {
        setCustomers((customers) => customers.slice(0, -1));
        navigate("/");
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <header>
                <h1 className="text-2xl font-bold text-gray-700 mb-4">Delete Customer</h1>
            </header>
            <div className="grid grid-cols-2 gap-4">
                <table className="w-full border-collapse mt-6">
                    <thead>
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Address</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Phone</th>
                        <th className="border p-2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.email}>
                            <td className="border p-2">{customer.name}</td>
                            <td className="border p-2">{customer.address}</td>
                            <td className="border p-2">{customer.email}</td>
                            <td className="border p-2">{customer.phone}</td>
                            <td className="border p-2">
                                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                                        onClick={handleDeleteCustomer}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
            );
            }
