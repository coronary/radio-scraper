export class Show {
	_title?: string;
	_dj?: string;
	_feeds?: string[];
	_sampleShow?: string;
	_archives?: string;

	get title() {
		return this._title
	}

	get dj() {
		return this._dj
	}

	get feeds() {
		return this._feeds
	}
	get sampleShow() {
		return this._sampleShow
	}

	get archives() {
		return this._archives
	}

	constructor(showArr: string[]) {
		this._feeds = []
		const djReg = /with/i
		const feedReg = /feed\/.*\.xml/i
		for(let x = 0; x < showArr.length; x++) {
			const currentItem = showArr[x].trim()
			if(x == 0) {
				this._title = showArr[x]
			} else if (djReg.test( currentItem )) {
				this._dj = currentItem.split('with ')[1]
			} else if (feedReg.test(currentItem)) {
				this._feeds.push(currentItem)
			} else if (/flashplayer/i.test(currentItem)) {
				this._sampleShow = currentItem
			} else if (/\/playlists\/[A-Z1-9]+\d?$|http/i.test(currentItem)) {
				this._archives = currentItem
			}
		}
		if (!this._dj) {
			this._dj = this._title
		}
	}

}
