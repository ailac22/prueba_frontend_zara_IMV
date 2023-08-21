
type LookupResults = {
  results: LookupResult[]

}

type LookupResult = {

			artistName: string,
			collectionName: string,
			trackName: string,
			collectionCensoredName: string,
      feedUrl: string,
      artworkUrl100: string,
      artworkUrl600: string

}



export default LookupResults
