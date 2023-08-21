
type Entry = {

  "im:name": Name
  "im:image": Name[]
  "im:artist": Name
  id: Name
}

type Attributes = {
  "im:id": string
  height: number
}

export type Name = {
  label: string,
  attributes?: Attributes
}

export default Entry
