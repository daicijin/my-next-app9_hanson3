"use server"

import { redirect } from "next/navigation"

import prisma from "./prisma"
import { Prisma } from "@prisma/client"
import { getBookById } from "./getter"

export async function addReview(data: FormData) {
  const book = await getBookById(data.get("id") as string)
  const input = {
    title: book.title,
    author: book.author,
    price: Number(book.price),
    publisher: book.publisher,
    published: book.published,
    image: book.image,
    read: new Date(data.get("read") as string),
    memo: data.get("memo"),
  }

  await prisma.reviews.upsert({
    update: input as Prisma.reviewsUpdateInput,
    create: Object.assign({}, input, { id: data.get("id") as string }) as Prisma.reviewsCreateInput,
    where: {
      id: data.get("id") as string,
    },
  })
  redirect("/")
}

export async function removeReview(data: FormData) {
  await prisma.reviews.delete({
    where: {
      id: data.get("id") as string,
    },
  })
  redirect("/")
}
