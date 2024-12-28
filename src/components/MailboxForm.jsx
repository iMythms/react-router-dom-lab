import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
	boxSize: 'Small',
	boxHolder: '',
}

const MailboxForm = ({ addBox }) => {
	const navigate = useNavigate()
	const [formData, setFormData] = useState(initialState)

	const handleSubmit = (e) => {
		e.preventDefault()
		addBox(formData)
		setFormData(initialState)
		navigate('/mailboxes')
	}

	const handleChange = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value })
	}

	return (
		<main>
			<h2 className="text-3xl font-extrabold">New Mailbox</h2>
			<form onSubmit={handleSubmit} className="my-8 flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<label htmlFor="boxHolder">Enter a Box Holder</label>
					<input
						type="text"
						id="boxHolder"
						name="boxHolder"
						value={formData.boxHolder}
						onChange={handleChange}
						placeholder="Box Holder"
						className="bg-[#415a77] focus:outline-none py-1 px-2 rounded-lg"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="boxSize">Select a Box Size</label>
					<select
						name="boxSize"
						id="boxSize"
						value={formData.boxSize}
						onChange={handleChange}
						className="bg-[#415a77] focus:outline-none py-1 px-2 rounded-lg"
					>
						<option value="Small">Small</option>
						<option value="Medium">Medium</option>
						<option value="Large">Large</option>
					</select>
				</div>
				<button
					type="submit"
					className="hover:bg-[#344e41] bg-[#3a5a40] px-4 py-1 rounded-lg my-4"
				>
					Submit
				</button>
			</form>
		</main>
	)
}

export default MailboxForm
