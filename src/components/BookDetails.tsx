import Image from "next/image"
import { Book } from "@/types"

type Props = {
  index?: number
  book: Book
}

export default function BookDetails({ index, book }: Props) {
  return (
    <div className="flex w-full mb-4">
      <div>
        <Image src={book.image} alt="" width={140} height={180} />
      </div>
      <div>
        <ul className="list-none text-black ml-4">
          <li>{index && index + "."}</li>
          <li>
            {book.title}（{book.price}円）
          </li>
          <li>{book.author}</li>
          <li>{book.publisher}刊</li>
          <li>{book.published} 発売</li>
        </ul>
      </div>
    </div>
  )
}
