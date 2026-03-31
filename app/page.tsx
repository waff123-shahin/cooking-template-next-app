import CategoriesSection from "./components/CategoriesSection";
import ChefSection from "./components/ChefSection";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import InstagramSection from "./components/InstagramSection";
import Navbar from "./components/Navbar";
import NewsletterSection from "./components/NewsLetterSection";
import RecipesSection from "./components/RecipeSection";
import SimpleRecipesSection from "./components/SimpleRecipeSection";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <CategoriesSection></CategoriesSection>
      <SimpleRecipesSection></SimpleRecipesSection>
      <ChefSection></ChefSection>
      <InstagramSection></InstagramSection>
      <RecipesSection></RecipesSection>
      <NewsletterSection></NewsletterSection>
      <Footer></Footer>
    </div>
  );
}
