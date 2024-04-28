import moment from 'moment';
import { Broadcast } from '~types/Broadcast';

const dateReg = /\w+ \d{1,2}, \d{4}/gi;
const defaultSelector = 'div.showlist li';
const getSelector = (selector?: string) => selector ? defaultSelector + ' ' + selector : defaultSelector; 

export class Playlist {
	_broadcasts: Broadcast[];

	get broadcasts(): Broadcast[] {
		return this._broadcasts;
	};

	get showNames(): Array<string | undefined> {
		return this._broadcasts.map(({title}) => title )
	}

	constructor(htmlText: string) {
		const rewriter = new HTMLRewriter()

		const localBCs: Array<Array<string | moment.Moment>> = []
		let lastBroadcastIndex = -1

		rewriter.on(getSelector(), {
			// grab show date
			element(el) {
				// found new li element so adding a new list to the shows
				localBCs.push([])
				lastBroadcastIndex++

			},
			text(te) {
				const d = te.text.match(dateReg)
				if (d) {
					const date = moment(d, [ 'MMMMDDY', 'MMMMDY' ], false)
					localBCs[lastBroadcastIndex].push(date)
				}
			}
		}).on(getSelector('b'), {
				// grab show title
				text(te) {
					te.text && localBCs[lastBroadcastIndex].push(`title: ${te.text}`)
				}
			}).on(getSelector('a'), {
				// grab links
				element(el) {
					const link = el.getAttribute('href')
					link && !/auth/.test(link) && localBCs[lastBroadcastIndex].push(link)
				}
			})

		rewriter.transform(htmlText)
		this._broadcasts = localBCs.map((broadcast) => new Broadcast(broadcast))
	}
}
