import React from 'react'
import { Link } from 'react-router-dom'

const MailboxList = ({ mailboxes }) => {
	return (
		<div>
			<h2 className="text-3xl font-extrabold">Mailbox</h2>
			<div className="mt-8 grid grid-cols-4 gap-5">
				{mailboxes.map((currentMailbox) => (
					<div
						className="bg-[#415a77] hover:bg-[#415a95] rounded-lg p-8 text-center"
						key={currentMailbox._id}
					>
						<Link
							to={`/mailboxes/${currentMailbox._id}`}
							className="text-xl font-semibold"
						>
							Mailbox {currentMailbox._id}
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default MailboxList
