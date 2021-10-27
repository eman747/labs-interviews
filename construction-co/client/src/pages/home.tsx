import React, { useEffect, useState } from 'react'

import Companies from '../components/companies'
import AppLayout from '../components/layout'

type State = {
	searchText: string
	companies: Company[]
}

export function Home() {
	const [state, setState] = useState<State>({
		searchText: '',
		companies: []
	})

	useEffect(() => {
		// ENDPOINT: /api/companies (proxy has been configured already for this url)
		// write down logic to get the companies from above
	}, [])

	const applyFilter = (company: Company) => {
		const { searchText } = state

		return state.searchText
			? company.name.toLowerCase().includes(searchText.toLowerCase())
			: true
	}

	return (
		<AppLayout>
			{state.companies.length === 0 ? (
				<h2 className="text-center">Companies not available</h2>
			) : (
				<div>
					{
						<Companies
							companies={state.companies.filter(company => applyFilter(company))}
						/>
					}
				</div>
			)}
		</AppLayout>
	)
}

export default Home
