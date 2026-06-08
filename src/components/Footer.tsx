export function Footer() {
  return (
    <footer className="bg-[#15150f] text-[#9d9a92] py-10 text-sm">
      <div className="max-w-site mx-auto px-6 flex justify-between flex-wrap gap-4 items-center">
        <div>© {new Date().getFullYear()} DK Architecture — François Kerremans · Chastre, Brabant wallon</div>
        <div>Architecte inscrit à l&apos;Ordre des Architectes</div>
      </div>
    </footer>
  )
}
