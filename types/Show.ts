export class Show {
	// _name: string;
	// _dj: string;
	// _showTimes: string;
	// _sampleShow: string;
	// _rssMP3: string;
	// _rssPlaylists: string;
	_tester: { [scheduleDay: string]: Array<Array<string>> };

	get shows(): { [scheduleDay: string]: Array<Array<string>> } {
		return this._tester
	}

	constructor(htmlText: string) {
		const rewriter = new HTMLRewriter()

		const holder: { [scheduleDay: string]: Array<Array<string>> } = {}
		let lastDayID = ''
		let lastShowIndex = -1

		const setNewCategory = ({ text }: HTMLRewriterTypes.Text): void => {
			if (text) {
				const name: string = text.trim()
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
					const link = el.getAttribute('href')
					link && /playlists?|archivefeed|flashplayer/.test(link) && !/auth/g.test(link) && holder[lastDayID][lastShowIndex].push(link)
				}
		})

		rewriter.transform(htmlText)
		this._tester = holder
	}

}
