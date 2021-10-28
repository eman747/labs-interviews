import React from 'react'

interface CompaniesProps {
	companies: Company[]
}

export function Companies({ companies }: CompaniesProps) {
	return (
		<>
			{companies.map((company, index) => (
				<div className="cards" key={index}>
					<article className="card">
						<header>
							<h2 className="company-name">{company.name}</h2>
						</header>
						<img src={company.logo} alt={company.name} />
						<div className="row">
							<p className="pill">{company.specialty}</p>
							<div className="row">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								{company.city}
							</div>
						</div>
					</article>
				</div>
			))}
		</>
	)
}

export default Companies
