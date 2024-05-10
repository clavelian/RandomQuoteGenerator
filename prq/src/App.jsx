import './App.css'
import TextGenerateEffectDemo from './pages/TextGenerateEffectDemo'
// import HeroHighlightDemo from './pages/HeroHighlightDemo'
// import PlaceholdersAndVanishInputDemo from './pages/PlaceholdersAndVanishInputDemo'
import Quote from './services/api/QuoteGen'
function App() {
  
  return (
    <>
      <TextGenerateEffectDemo />
      {/* <HeroHighlightDemo /> */}
      {/* <PlaceholdersAndVanishInputDemo/> */}
      <Quote />
    </>
  )
}

export default App
