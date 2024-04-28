import { ScheduleCategory, getCategoryFromString, type Schedule } from '~types/Schedules'

export class Station {
	_schedule: Schedule

	get schedule() {
		return this._schedule;
	}

	scheduleByCategory(cat: ScheduleCategory): string[][] {
		return this._schedule[cat];
	}

	constructor(htmlText: string) {
		const rewriter = new HTMLRewriter()

		const holder: Schedule = {} as Schedule; //TODO: fix this coercion
		let lastDayID: ScheduleCategory = ScheduleCategory.NOTHING
		let lastShowIndex = -1

		const setNewCategory = ({ text }: HTMLRewriterTypes.Text): void => {
			if (text) {
				const name: ScheduleCategory = getCategoryFromString(text) ?? ScheduleCategory.REST
				holder[name] = []
				lastDayID = name
				lastShowIndex = -1
			}
		}
		rewriter.on('li b font', {
			text(te) {
				// get day of the week
				setNewCategory(te)

			}
			}).on('p#bench b', {
				text(te) {
					// title for "the rest" which is just shows not currently in rotation
					setNewCategory(te)
				}
			}).on('table tr td font[face="Verdana"][size~="-1"] b', {
				// get show title
				text(te) {
					if(te.text) {
						holder[lastDayID][++lastShowIndex] = [te.text]
					}
				}
			}).on('table tr td font[face="Verdana"][size="-1"]', {
				// get show dj
				text(te) {
					const dj = te.text.trim().match(/^with\s.*/g)
					if (dj) {
						holder[lastDayID][lastShowIndex].push(dj[0])
					}
				}
			}).on('table tr td font[face="Verdana"][size~="-1"] a', {
				element(el: HTMLRewriterTypes.Element) {
					const link = el.getAttribute('href')?.trim()
					// Array.from(el.attributes).forEach( attr => console.log(attr))
					link && /playlists?(\/[A-Z]{2}\/)?|archivefeed|mp3archive|flashplayer|http:\/\//i.test(link) && !/auth/g.test(link) && holder[lastDayID][lastShowIndex].push(link)
				},
		})

		rewriter.transform(htmlText)
		this._schedule = holder
	}
}
