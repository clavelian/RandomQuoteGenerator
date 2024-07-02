import './App.css'
import TextGenerateEffectDemo from './pages/TextGenerateEffectDemo'
// import HeroHighlightDemo from './pages/HeroHighlightDemo'
// import PlaceholdersAndVanishInputDemo from './pages/PlaceholdersAndVanishInputDemo'
import Quote from './services/api/QuoteGen'
import RandomAnimeQuote from './services/api/AnimeGen'

function App() {
  
  return (
    <>
      <TextGenerateEffectDemo />
      {/* <HeroHighlightDemo /> */}
      {/* <PlaceholdersAndVanishInputDemo/> */}
      <Quote />
      <RandomAnimeQuote/>
    </>
  )
}

export default App
