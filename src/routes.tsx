import React from 'react'

// Icons
import Dashboard from '@material-ui/icons/Dashboard'
import Group from '@material-ui/icons/Group'

// Components
import DashboardPage from './component/dashboard/Dashboard'
import TeamPage from './component/team/Team'

const routes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: <Dashboard />,
		component: DashboardPage,
	},
	{
		path: '/team',
		name: 'Team',
		icon: <Group />,
		component: TeamPage,
	},
]

export default routes
