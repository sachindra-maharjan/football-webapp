export const getNumber = (val: number | undefined): number => {
	if (val === undefined) return 0
	return val
}

export const getString = (val: string | undefined): string => {
	if (val === undefined) return ''
	return val
}

export default { getNumber, getString }
