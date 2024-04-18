import { Show } from '~types/Show'

export class Station {
	_shows: Show[]
	_djs?: string[]

	get shows(): Show[] {
		return this._shows
	}

	addShow(show: Show) {
		this._shows.push(show)
	}

	constructr(shows?: Show[]) {
		this._shows = shows ? shows : []
	}

}
