
export type Item = {
  title: Tsr ,
  guid: Tsr,
  pubDate:Tsr,
  "itunes:duration": Tsr,
  "itunes:summary": Tsr,
  "itunes:subtitle": Tsr, 
  description: Tsr,
  enclosure: Enclosure
}

type Channel = {
  "itunes:author": string

  item: Item[],
  description: Tsr
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


