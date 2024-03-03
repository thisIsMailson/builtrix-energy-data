

const Navbar = () => {
    return (
        <nav style={undefined}>
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center">
            <a className="text-white text-xl font-semibold" href="#" style={undefined}>
              <img alt="Builtrix Logo" className="h-8" src="/placeholder.svg" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-gray-300 hover:text-white" href="#" style={undefined}>
              Solutions
            </a>
            <a className="text-gray-300 hover:text-white" href="#" style={undefined}>
              Pricing
            </a>
            <a className="text-gray-300 hover:text-white" href="#" style={undefined}>
              Blog
            </a>
            <a className="text-gray-300 hover:text-white" href="#" style={undefined}>
              About
            </a>
            <a className="text-gray-300 hover:text-white" href="#" style={undefined}>
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a className="text-gray-300 hover:text-white" href="#" style={undefined}>
              Log in
            </a>
            <a className="hover:bg-[#EA580C]" href="#" style={undefined}>
              Sign up
            </a>
          </div>
        </div>
      </nav>
    )
}


export default Navbar;