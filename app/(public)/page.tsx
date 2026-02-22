import Hero from "@/components/Hero/Hero"
import AccoladesSection from "@/components/Accolades/Accolades"
import Categories from "@/components/Categories/Categories"
import ItemSection from "@/components/Item/ItemSection"
import Footer from "@/components/Footer/Footer"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AccoladesSection />
      <Categories />
      <ItemSection />
      <Footer />
    </>
    )
}