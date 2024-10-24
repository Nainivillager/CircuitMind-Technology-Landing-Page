export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-orange-200 rounded-lg mx-5 my-1 h-auto md:h-24 lg:h-28 text-center p-2">
      <div className="flex justify-center md:justify-start mb-2 md:mb-0">
        <img
          className="mix-blend-multiply h-20 md:h-24 lg:h-28"
          src="Clogo.webp"
          alt="company Logo"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-4">
        <div>Search</div>
        <div>Store</div>
        <div>Sign In</div>
      </div>
    </div>
  );
}
