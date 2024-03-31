import Link from "next/link"
import BookDetails from "./BookDetails"
import { Book } from "@/types"

type Props = {
  index?: number
  book: Book
}

export default function LinkedBookDetails({ index, book }: Props) {
  return (
    <Link href={`/edit/${book.id}`}>
      <div className="hover:bg-green-50">
        <BookDetails index={index} book={book} />
      </div>
    </Link>
  )
}
