import { Footer } from "@/components/website/footer"
import  { Navbar }  from "@/components/website/navbar"

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-0">
        {children}
      </main>
      <Footer />
    </>
  )
}