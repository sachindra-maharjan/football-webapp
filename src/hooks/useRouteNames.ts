import routes from '../routes'

const useRouteName = () => {
	let name = ''
	routes.forEach(route => {
		if (window.location.href.indexOf(route.path) !== -1) {
			name = route.name
		}
	})
	return name
}

export default useRouteName
