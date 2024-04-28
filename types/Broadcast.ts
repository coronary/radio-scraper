import moment from 'moment'

export class Broadcast {
	date?: moment.Moment;
	title?: string;
	streamUrls: Array<string>;
	playlistUrl?: string;

	private function getStreamUrl(url: string): string {
		if (url.includes('flashplayer')) {
			return url
		} else if (url.includes('/listen')) {
			return url
		}
	}

	constructor(showArr: Array<string | moment.Moment>) {
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
