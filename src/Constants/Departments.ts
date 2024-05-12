export interface IDepartment {
	id: string
	name: string
}

export type IDepartments = IDepartment[]

const Departments = [
	{ id: 'operation', name: 'Operation' },
	{ id: 'generalAffair', name: 'General Affair' },
	{ id: 'finance', name: 'Finance' },
	{ id: 'businessContract', name: 'Business Contract' },
	{ id: 'project', name: 'Project' },
	{ id: 'marketing', name: 'Marketing' },
	{ id: 'executive', name: 'Executive' },
] as const satisfies IDepartments

export default Departments
