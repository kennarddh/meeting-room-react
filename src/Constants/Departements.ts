export interface IDepartement {
	id: string
	name: string
}

export type IDepartements = IDepartement[]

const Departements = [
	{ id: 'operation', name: 'Operation' },
	{ id: 'generalAffair', name: 'General Affair' },
	{ id: 'finance', name: 'Finance' },
	{ id: 'businessContract', name: 'Business Contract' },
	{ id: 'project', name: 'Project' },
	{ id: 'marketing', name: 'Marketing' },
	{ id: 'executive', name: 'Executive' },
] as const satisfies IDepartements

export default Departements
