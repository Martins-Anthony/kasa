import '../../scss/styles/style.scss'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import bannerHome from '../../assets/banner/bannerOne.jpeg'

function Home() {
  return (
    <div>
      <Banner picture={bannerHome} title={'Chez vous, partout et ailleurs'} />
      <Card />
    </div>
  )
}

export default Home
