import { Link } from "react-router-dom";


export default function Header() {
return (
<header className="bg-blue-700 text-white p-4 shadow-md mb-6">
<div className="max-w-5xl mx-auto flex justify-between items-center">
<h1 className="font-bold text-xl">User Manager</h1>
<nav className="flex gap-4">
<Link to="/" className="hover:text-gray-200">Home</Link>
<Link to="/create" className="hover:text-gray-200">Create User</Link>
</nav>
</div>
</header>
);
}