import moment from 'moment'

export class Broadcast {
	date?: moment.Moment;
	title?: string;
	streamUrls: Array<string>;
	playlistUrl?: string;

	constructor(showArr: Array<string>) {
		this.streamUrls = []
		if (showArr)
		showArr.forEach((item) => {
			if (moment.isMoment(item)) {
				this.date = item
			} else if (item.includes('title')) {
					this.title = item.split(': ')[1]
			} else if (/playlists/i.test(item)) {
					this.playlistUrl = item
			} else if (item.includes('flashplayer') || item.includes('/listen')) {
					this.streamUrls.push(item)
			}
		})

	}
} 
