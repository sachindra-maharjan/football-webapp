// Icons
import Dashboard from '@material-ui/icons/Dashboard'
import Group from '@material-ui/icons/Group'
import TableChart from '@material-ui/icons/TableChart'

// Components
import DashboardPage from './view/dashboard/Dashboard'
import TeamPage from './view/team/Team'
import StandingsPage from './view/standings/Standings'

const routes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: Dashboard,
		component: DashboardPage,
	},
	{
		path: '/team',
		name: 'Team',
		icon: Group,
		component: TeamPage,
	},
	{
		path: '/standings',
		name: 'Standings',
		icon: TableChart,
		component: StandingsPage,
	},
]

export default routes
