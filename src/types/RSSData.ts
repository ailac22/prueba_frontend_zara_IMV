
export type Item = {
  title: Tsr ,
  guid: Tsr,
  pubDate:Tsr,
  "itunes:duration": Tsr,
  description: Tsr,
  enclosure: Enclosure
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

type Enclosure = {
  '@_length': string,
  '@_type': string,
  '@_url': string 

}

export default RSSData


