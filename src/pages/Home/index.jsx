import '../../scss/styles/style.scss'
import '../../scss/home.scss'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import bannerHome from '../../assets/banner/bannerOne.jpeg'

function Home() {
  return (
    <section className="container-home">
      <Banner picture={bannerHome} title={'Chez vous, partout et ailleurs'} />
      <Card />
    </section>
  )
}

export default Home
