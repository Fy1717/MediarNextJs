import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div>
        <h2>
          home page
        </h2>
      </div>

      <div>
        <Link href="/about"> Hakkımızda </Link>
        <br />
        <Link href="/profile"> Profil </Link>
        <br />
        <Link href="/users">Kullanıcılar</Link>
        <br />
        <Link href="/shares"> Paylaşımlar </Link>
        <br />
      </div>
    </main>
  )
}
