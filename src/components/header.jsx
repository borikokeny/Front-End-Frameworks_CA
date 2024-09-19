export default function Header() {
  return (
    <header className="shadow-md">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="text-lg font-bold">
      <a href="#" className="hover:text-gray-200">
        Jim's Convo
      </a>
      </div>
      <nav className="space-x-4">
        <a href="#" className="hover:text-gray-200">Shop</a>
        <a href="#">Contact</a>
    </nav>
    </div>
  </header>
  )
}
