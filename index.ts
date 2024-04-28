import { ScheduleCategory } from '~types/Schedules';
import { Station } from '~types/Station';
import { Show } from '~types/Show';

const schedule = await Bun.file("./examples/listIndex/archive.html").text()
const wfmuUrl = "https://wfmu.org"

const station = new Station(schedule);

const shows = station.scheduleByCategory(ScheduleCategory.TUESDAY).map( showArr => new Show(showArr, wfmuUrl))

console.log(`shows on ${ ScheduleCategory.TUESDAY }`.toUpperCase())
shows.forEach( ( show ) => {
	console.log(show)
})

