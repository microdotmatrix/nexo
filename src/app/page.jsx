import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container max-w-2xl place-content-center space-x-md">
      <section>
        <Link href="/albums">
          Photos
        </Link>
      </section>
      <section>
        <Link href="/notion">
          Notion
        </Link>
      </section>
    </div>
  )
}
