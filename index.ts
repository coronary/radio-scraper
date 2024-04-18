import { Show } from '~types/Show'

const schedule = await Bun.file("./examples/listIndex/archive.html").text()

const idkMan = new Show(schedule);

console.log(JSON.stringify(idkMan.shows))
