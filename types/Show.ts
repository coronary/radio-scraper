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


	constructor(showArr: string[], baseUrl: string = "") {
		const urlString = (pathStr: string): string => (baseUrl + pathStr)
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
				this._feeds.push(urlString(currentItem))
			} else if (/flashplayer/i.test(currentItem)) {
				const playerURL = (url: string) => {
					const showNo = url.match(/show=\d+/i)?.[0]
					const archiveNo = url.match(/archive=\d+/i)?.[0]
					return showNo && archiveNo ?  `/archiveplayer/?${showNo}&${archiveNo}`: currentItem
				}
				this._sampleShow = urlString(playerURL(currentItem))
			} else if (/\/playlists\/[A-Z1-9]+\d?$|http/i.test(currentItem)) {
				this._archives = urlString(currentItem)
			}
		}
		if (!this._dj) {
			this._dj = this._title
		}
	}

}
