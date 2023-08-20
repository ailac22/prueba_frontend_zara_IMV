
export type Item = {
  title: string,
}

type Channel = {
  "itunes:author": string

  item: Item[]
}

type RSSData = {
  
  rss: {channel: Channel}
}

export default RSSData
