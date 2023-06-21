import Header from './components/header'
import Projects from './components/projectComponent'
import Footer from './components/footer'
import Posts from './components/postComponent'

export default async function Home () {
  return (
    <div>
      <Header />
      <Projects />
      <Posts />
      <Footer />
    </div>
  )
}
