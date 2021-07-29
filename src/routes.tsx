// Icons
import Dashboard from '@material-ui/icons/Dashboard'
import Group from '@material-ui/icons/Group'
import Person from '@material-ui/icons/Person'
import TableChart from '@material-ui/icons/TableChart'
import Assessment from '@material-ui/icons/Assessment'
import BubbleChart from '@material-ui/icons/BubbleChart'

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
	{
		path: '/dashboard',
		name: 'Players',
		icon: Person,
		component: DashboardPage,
	},
	{
		path: '/dashboard',
		name: 'Stats',
		icon: Assessment,
		component: DashboardPage,
	},
	{
		path: '/dashboard',
		name: 'Analytics',
		icon: BubbleChart,
		component: DashboardPage,
	},
]

export default routes
