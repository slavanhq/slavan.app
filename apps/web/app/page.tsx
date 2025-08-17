import { Branding } from "@/components/landing/branding"
import { NavBar } from "@/components/landing/nav-bar"
import { Offer } from "@/components/landing/offer"

export default function Page() {
  return (
    <div className="w-full">
      <NavBar />
      <Branding />
      {/* <div className="w-full border-b h-4 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.1)_0px,rgba(255,255,255,0.1)_1px,transparent_1px,transparent_8px)] absolute " /> */}
      <Offer />
      
      {/* <Project /> */}
    </div>
  )
}
