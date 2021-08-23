import routes from '../routes'

const useRoutePath = () => {
	let path = ''
	routes.forEach(route => {
		if (window.location.href.indexOf(route.path) !== -1) {
			path = route.path
		}
	})
	return path
}

export default useRoutePath
