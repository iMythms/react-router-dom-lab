import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'

const App = () => {
	const [mailboxes, setMailboxes] = useState([])
	const [idCounter, setIdCounter] = useState(1)

	const addBox = (newMailboxData) => {
		newMailboxData._id = idCounter
		mailboxes.push(newMailboxData)
		setMailboxes([...mailboxes])
		setIdCounter(idCounter + 1)
	}

	const deleteBox = (id) => {
		setMailboxes(mailboxes.filter((mailbox) => mailbox._id != id))
	}

	return (
		<>
			<NavBar />
			<div className="container mx-auto my-16">
				<Routes>
					<Route
						path="/"
						element={
							<main>
								<h1 className="text-3xl font-extrabold">Post Office</h1>
							</main>
						}
					/>
					<Route
						path="/mailboxes"
						element={<MailboxList mailboxes={mailboxes} />}
					/>
					<Route
						path="/new-mailbox"
						element={<MailboxForm addBox={addBox} />}
					/>
					<Route
						path="/mailboxes/:mailboxId"
						element={
							<MailboxDetails mailboxes={mailboxes} deleteBox={deleteBox} />
						}
					/>
				</Routes>
			</div>
		</>
	)
}

export default App
