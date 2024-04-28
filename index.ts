import { ScheduleCategory } from '~types/Schedules';
import { Station } from '~types/Station';
import { Show } from '~types/Show';

const schedule = await Bun.file("./examples/listIndex/archive.html").text()

const station = new Station(schedule);

const shows = station.scheduleByCategory(ScheduleCategory.MONDAY).map( showArr => new Show(showArr))

shows.forEach( show => console.log(show.title, show.archives))

