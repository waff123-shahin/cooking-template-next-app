import ChefGuideCard from "../components/ChefGuideCard";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsletterSection from "../components/NewsLetterSection";
import RecipesSection from "../components/RecipeSection";

export default function Blog() {
  return (
    <div>
      <Navbar></Navbar>
      <ChefGuideCard></ChefGuideCard>
      <FAQSection></FAQSection>
      <NewsletterSection></NewsletterSection>
      <RecipesSection></RecipesSection>
      <Footer></Footer>
    </div>
  );
}
