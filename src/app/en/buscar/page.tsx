import { redirect } from "next/navigation"

type Props = { searchParams: Promise<{ q?: string }> }

export default async function EnBuscarPage({ searchParams }: Props) {
  const { q } = await searchParams
  redirect(q ? `/buscar?q=${encodeURIComponent(q)}` : "/buscar")
}
