import { Hero } from "../components/Hero"
import { AboutPreview } from "../components/AboutPreview"
import { ProductsPreview } from "../components/ProductsPreview"
import { ProcessPreview } from "../components/ProcessPreview"
import { ContactCTA } from "../components/ContactCTA"
import { PlantaPreview } from "../components/PlantaPreview"

export const Home = () => {
   return (
    <div>
      <Hero />

      <AboutPreview />

      <PlantaPreview />

      <ProductsPreview />

      <ProcessPreview />

      <ContactCTA />
      
    </div>
  )
}
