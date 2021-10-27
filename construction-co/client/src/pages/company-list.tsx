import React, { useState } from 'react'

import Companies from '../components/companies'
import AppLayout from '../components/layout'
import { liveSearch } from '../utils'

type State = {
	searchText: string
	loading: boolean
	companies: Company[]
}

export function CompanyList() {
	const [state, setState] = useState<State>({
		searchText: '',
		loading: false,
		companies: []
	})

	const liveSearchHandler = async (query: string) => {
		// ENDPOINT: /api/companies
		// query param: search
		// YOU CAN take look into liveSearch (in utils/index.ts ^^ already imported above)
		// HOME TASK: implement live search
	}

	return (
		<AppLayout>
			{state.companies.length === 0 ? (
				<h2 className="text-center">Companies not available</h2>
			) : (
				<div>{<Companies companies={state.companies} />}</div>
			)}
		</AppLayout>
	)
}

export default CompanyList
