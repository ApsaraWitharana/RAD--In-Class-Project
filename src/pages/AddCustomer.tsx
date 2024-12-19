import { useNavigate } from "react-router"; // Ensure this matches your router setup
import { useContext, useState } from "react";
import { Customer } from "../model/Customer";
import { CustomerContext } from "../component/CustomerProvider";

export function AddCustomer() {
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

    function handleSubmit() {
        const newCustomer = new Customer(name, address, email, phone);
        setCustomers([...customers, newCustomer]);
        navigate("/");
    }
    // {item}
    // const {items,setItems} = useContext(CustomerContext);
    // const [name,setItemName] = useState("")
    // const [quantity, setQuantity] = useState("");
    // const [price, setPrice] = useState("");
    // const [totalPrice, setTotalPrice] = useState("");
    // function  handleItemSubmit(){
    //     const newItem = new Item(name,quantity,price,totalPrice)
    //     setItems([...items,newItem]);
    //     navigate("/");
    // }
    return (
        <div className="grid grid-cols-2 gap-6 p-6">
            {/* Add Customer Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <header>
                    <h1 className="text-2xl font-bold text-gray-700 mb-4">Add Customer</h1>
                </header>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input name="Name" type="text" placeholder="Name" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-gray-700">Address</label>
                        <input name="Address" type="text" placeholder="Address" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input name="Email" type="text" placeholder="Email" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700">Phone</label>
                        <input name="Phone" type="text" placeholder="Phone" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                </div>
                <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add</button>
                <table className="w-full border-collapse mt-6">
                    <thead>
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Address</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.email}>
                            <td className="border p-2">{customer.name}</td>
                            <td className="border p-2">{customer.address}</td>
                            <td className="border p-2">{customer.email}</td>
                            <td className="border p-2">{customer.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Add Item Section */}
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
                        <input name="Supplier" type="text" placeholder="Supplier" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                </div>
                <button onClick={handleSubmit} className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Add</button>
                <table className="w-full border-collapse mt-6">
                    <thead>
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">QTY</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Total Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((item) => (
                        <tr key={item.name}>
                            {/*<td className="border p-2">{item.name}</td>*/}
                            {/*<td className="border p-2">{item.quantity}</td>*/}
                            {/*<td className="border p-2">{item.price}</td>*/}
                            {/*<td className="border p-2">{item.totalPrice}</td>*/}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}