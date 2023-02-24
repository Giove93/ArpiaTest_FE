export type Person = {
    id: number,
    imageUrl:string,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

type Address = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: number,
    lng: number
  }
}