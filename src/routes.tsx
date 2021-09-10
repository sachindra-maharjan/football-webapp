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
import PlayersPage from './view/players/Players'
import PlayerDetailPage from './view/players/PlayerDetail'
import FixturesPage from './view/fixtures/Fixtures'
import AnalyticsPage from './view/analytics/Analytics'

const routes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: Dashboard,
		component: DashboardPage,
		active: true,
	},
	{
		path: '/fixtures',
		name: 'Fixtures',
		icon: Assessment,
		component: FixturesPage,
		active: true,
	},
	{
		path: '/standings',
		name: 'Standings',
		icon: TableChart,
		component: StandingsPage,
		active: true,
	},
	{
		path: '/teams',
		name: 'Teams',
		icon: Group,
		component: TeamPage,
		active: true,
	},
	{
		path: '/players',
		name: 'Players',
		icon: Person,
		component: PlayersPage,
		active: true,
	},
	{
		path: '/player',
		name: 'PlayerStat',
		icon: Person,
		component: PlayerDetailPage,
		active: false,
	},
	{
		path: '/analytics',
		name: 'Analytics',
		icon: BubbleChart,
		component: AnalyticsPage,
		active: false,
	},
]

export default routes
