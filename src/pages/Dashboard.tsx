import {CustomerContext} from "../component/CustomerProvider.tsx";
import {useContext} from "react";
import {Customer} from "../model/Customer.ts";

export function Dashboard() {
    const context = useContext(CustomerContext);

    if (!context) {
        throw new Error("CustomerContext must be used within a CustomerProvider");
    }

    const {customers} = context;
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <p>This is your personalized dashboard.</p>
            {customers.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+customer.address + ' '+ customer.email + ' '+ customer.phone }</div>))}

        </div>
    );
}
