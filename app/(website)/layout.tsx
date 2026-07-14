import { Footer } from "@/components/website/footer"
import  { Navbar }  from "@/components/website/navbar"
import { Toaster } from "sonner"

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
      <Toaster richColors closeButton position="top-right" />
    </>
  )
}