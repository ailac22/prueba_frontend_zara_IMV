
export type Item = {
  title: Tsr ,
  guid: Tsr,
  pubDate:Tsr,
  "itunes:duration": Tsr
}

type Channel = {
  "itunes:author": string

  item: Item[]
}

type RSSData = {
  
  rss: {channel: Channel}
}

type Tsr = {
  '#text': string
}

export default RSSData
