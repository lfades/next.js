import { notFound } from 'next/navigation'

export default function Page() {
  notFound()
  return <p>hello world</p>
}