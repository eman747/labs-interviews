import React, { useState } from 'react'

import Companies from '../components/companies'
import AppLayout from '../components/layout'
import { liveSearch } from '../utils'
import axios from 'axios'

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
		setState({
			...state,
			loading: true
		})
		const res = await liveSearch(`/api/companies?search=${query}`)
		const companies = await res.data
		console.log(companies)
		console.log(query)
		setState({
			...state,
			companies: companies,
			loading: false
		})
		// ENDPOINT: /api/companies
		// query param: search
		// YOU CAN take look into liveSearch (in utils/index.ts ^^ already imported above)
		// HOME TASK: implement live search
	}

	const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({
			...state,
			searchText: event.target.value
		})
	}

	return (
		<AppLayout>
			<div>
				<form>
					<input
						className={'search placeholder'}
						type="search"
						onChange={searchChangeHandler}
						placeholder="Search Companies..."
					/>
				</form>
				<button
					onClick={event => {
						liveSearchHandler(state.searchText)
					}}>
					Live Search
				</button>
			</div>
			{state.companies.length === 0 ? (
				<h2 className="text-center">Companies not available</h2>
			) : (
				<div>{<Companies companies={state.companies} />}</div>
			)}
		</AppLayout>
	)
}

export default CompanyList
