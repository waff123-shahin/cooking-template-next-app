import AboutPage from "../components/AboutPage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsletterSection from "../components/NewsLetterSection";
import RecipePage from "../components/RecipePage";
import RecipesSection from "../components/RecipeSection";

export default function About() {
  return (
    <div>
      <Navbar></Navbar>
      <RecipePage></RecipePage>
      <AboutPage></AboutPage>
      <RecipesSection></RecipesSection>
      <NewsletterSection></NewsletterSection>
      <Footer></Footer>
    </div>
  );
}
