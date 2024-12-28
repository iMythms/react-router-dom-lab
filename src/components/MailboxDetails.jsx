import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const MailboxDetails = ({ mailboxes, deleteBox }) => {
	const navigate = useNavigate()
	const { mailboxId } = useParams()
	const singleMailbox = mailboxes.find((mail) => mail._id === Number(mailboxId))
	const handleDeleteClick = () => {
		deleteBox(mailboxId)
		navigate('/mailboxes')
	}
	return (
		<div>
			<h2 className="text-3xl font-extrabold">Mailbox {singleMailbox._id}</h2>
			<h3 className="text-2xl font-semibold my-8">Details</h3>
			<dl className="my-8 flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<dt>Box Holder</dt>
					<dd className="bg-[#415a77] py-1 px-2 rounded-lg">
						{singleMailbox.boxHolder}
					</dd>
				</div>
				<div className="flex flex-col gap-2">
					<dt>Box Size</dt>
					<dd className="bg-[#415a77] py-1 px-2 rounded-lg">
						{singleMailbox.boxSize}
					</dd>
				</div>
			</dl>
			<button
				onClick={handleDeleteClick}
				className="hover:bg-[#780000] bg-[#c1121f] px-4 py-1 rounded-lg"
			>
				Delete
			</button>
		</div>
	)
}

export default MailboxDetails
