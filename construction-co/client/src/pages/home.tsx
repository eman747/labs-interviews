import React, { useEffect, useState } from 'react'

import Companies from '../components/companies'
import AppLayout from '../components/layout'
import {} from '../pages/company-list'

type State = {
	searchText: string
	companies: Company[]
}

export function Home() {
	const [state, setState] = useState<State>({
		searchText: '',
		companies: []
	})
	const [engineering, setEngineering] = useState(false)
	const [plumbing, setPlumbing] = useState(false)
	const [construction, setConstruction] = useState(false)
	const [excavation, setExcavation] = useState(false)

	useEffect(() => {
		// ENDPOINT: /api/companies (proxy has been configured already for this url)
		// write down logic to get the companies from above
		fetch('/api/companies')
			.then(response => response.json())
			.then(data => {
				setState({
					...state,
					companies: data
				})
			})
	}, [])

	const applyFilter = (company: Company) => {
		const { searchText } = state

		return state.searchText
			? company.name.toLowerCase().includes(searchText.toLowerCase())
			: true
	}

	const checkboxFilter = (company: Company) => {
		console.log(engineering + '  ' + company.specialty)
		if (!(engineering || plumbing || construction || excavation)) {
			return true
		} else {
			if (engineering && company.specialty === 'Engineering') {
				return true
			} else if (plumbing && company.specialty === 'Plumbing') {
				return true
			} else if (construction && company.specialty === 'Construction') {
				return true
			} else if (excavation && company.specialty === 'Excavation') {
				return true
			}
		}
		return false
	}

	const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({
			...state,
			searchText: event.target.value
		})
	}

	const toggleEngineering = () => {
		setEngineering(!engineering)
		// checkboxFilter(state.companies)
	}

	const togglePlumbing = () => {
		setPlumbing(!plumbing)
	}

	const toggleConstruction = () => {
		setConstruction(!construction)
	}

	const toggleExcavation = () => {
		setExcavation(!excavation)
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
			</div>

			<div className="checkbox">
				<label className="label">
					<input
						type="checkbox"
						defaultChecked={engineering}
						onChange={toggleEngineering}
					/>
					Engineering
				</label>
				<label className="label">
					<input type="checkbox" defaultChecked={plumbing} onChange={togglePlumbing} />
					Plumbing
				</label>
				<label className="label">
					<input
						type="checkbox"
						defaultChecked={construction}
						onChange={toggleConstruction}
					/>
					Construction
				</label>
				<label className="label">
					<input
						type="checkbox"
						defaultChecked={excavation}
						onChange={toggleExcavation}
					/>
					Excavation
				</label>
			</div>
			{state.companies.length === 0 ? (
				<h2 className="text-center">Companies not available</h2>
			) : (
				<div className="companies">
					{
						<Companies
							companies={state.companies.filter(
								company => applyFilter(company) && checkboxFilter(company)
							)}
						/>
					}
				</div>
			)}
		</AppLayout>
	)
}

export default Home
