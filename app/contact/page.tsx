import ContactPage from "../components/contactpage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsletterSection from "../components/NewsLetterSection";

import RecipesSection from "../components/RecipeSection";

export default function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <ContactPage></ContactPage>
      <RecipesSection></RecipesSection>
      <NewsletterSection></NewsletterSection>
      <Footer></Footer>
    </div>
  );
}
