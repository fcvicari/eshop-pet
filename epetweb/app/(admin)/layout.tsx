export const metadata = {
  title: {
    default: 'E-Shop Pet - Admin',
    template: '%s | Fernando Cezar Vicari'
  },
  robots: {
    index: true,
    follow: true,
  },
  description: 'Desenvolvido por FCVicari',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-[url('/background.png')] bg-bottom bg-no-repeat bg-cove flex h-[87vh] md:h-screen w-screen">
      {children}
    </div>
  )
}
