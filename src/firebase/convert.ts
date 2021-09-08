const convertToObj = <T>(obj: any) => {
	const json = JSON.stringify(obj)
	return JSON.parse(json) as T
}

export default convertToObj
