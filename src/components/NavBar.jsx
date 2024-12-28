import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'

const NavBar = () => {
	return (
		<nav className="flex items-center bg-[#1b263b] h-12 sticky">
			<div className="container mx-auto flex items-center justify-between">
				<div>
					<img src={Logo} alt="Logo" className="w-9 h-9" />
				</div>
				<div className="flex gap-6">
					<Link to="/" className="hover:underline">
						Home
					</Link>
					<Link to="/mailboxes" className="hover:underline">
						Mailboxes
					</Link>
					<Link to="/new-mailbox" className="hover:underline">
						New Mailbox
					</Link>
				</div>
				<div>
					{/* <button className="bg-[#121212] hover:bg-[#415a77] px-4 py-1 rounded-xl">
						New Message
					</button> */}
				</div>
			</div>
		</nav>
	)
}

export default NavBar
