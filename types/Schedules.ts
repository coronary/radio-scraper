enum ScheduleCategory {
	MONDAY = "monday",
	TUESDAY = "tuesday",
	WEDNESDAY = "wednesday",
	THURSDAY = "thursday",
	FRIDAY = "friday",
	SATURDAY = "saturday",
	SUNDAY = "sunday",
	REST = "the rest",
	NOTHING = ""
}

const getCategoryFromString = (ogStr: string) => {
	const trimmed = ogStr.trim().toLowerCase()
	return Object.values(ScheduleCategory).find( cat => cat == trimmed)
}

type Schedule = Record<ScheduleCategory, string[][]>

export {ScheduleCategory, getCategoryFromString, type Schedule}
