import { redirect } from "next/navigation"

export default async function EnCategoriaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  redirect(`/categoria/${slug}`)
}
