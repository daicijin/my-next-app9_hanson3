export type Book = {
  id: string
  title: string | undefined
  image: string
  price: number
  author: string
  publisher: string | undefined
  published: string | undefined
  volumeInfo?: {
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    imageLinks: {
      smallThumbnail: string
    }
  }
  saleInfo?: {
    listPrice: {
      amount: number
    }
  }
}

export type Review = {
  id: string
  read: string
  memo: string
}
