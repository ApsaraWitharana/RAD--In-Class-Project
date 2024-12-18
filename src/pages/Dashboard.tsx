import {CustomerContext} from "../component/CustomerProvider.tsx";
import {useContext} from "react";
// import {Customer} from "../model/Customer.ts";
import "../component/Dashboard.css"
export function Dashboard() {
    const context = useContext(CustomerContext);

    if (!context) {
        throw new Error("CustomerContext must be used within a CustomerProvider");
    }

    const {customers} = context;
    return (

        <div>
            <h1 className="text-3xl font-medium text-green-500 mb-6 text-my">Dashboard</h1>
            <div  className="p-6 grid grid-cols-2" >
                <div>
                    <h1 className="text-3xl font-medium text-green-500 mb-6">Customer</h1>
                    <table className=" table-auto border cellPadding-8 marginTop-20px w-full">
                        <thead>
                        <tr className="border">
                            <th className="table-css">Name</th>
                            <th className="table-css">Address</th>
                            <th className="table-css">Email</th>
                            <th className="table-css">Phone</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.email}>
                                <td className="table-css">{customer.name}</td>
                                <td className="table-css">{customer.address}</td>
                                <td className="table-css">{customer.email}</td>
                                <td className="table-css">{customer.phone}</td>

                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            <div className=" grid grid-cols-2">
                <div className="p-5">
                    <h1 className="text-3xl font-medium text-green-500 mb-6">Item</h1>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        {customers.map((customer) => (
                            <div>
                                <p>{customer.name}</p>
                                <p>{customer.address}</p>
                                <p>{customer.email}</p>
                                <p>{customer.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
