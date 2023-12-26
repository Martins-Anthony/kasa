import '../../scss/about.scss'
import Banner from '../../components/Banner'
import aboutList from '../../datas/about.json'
import Collapse from '../../components/Collapse'
import bannerAbout from '../../assets/banner/bannerTwo.jpeg'

function About() {
  const collapseContent = aboutList.map((item) => (
    <Collapse
      key={item.id}
      title={item.title}
      content={item.description}
      pageSpecificStyle={'about-collapse-title'}
    />
  ))

  return (
    <section className="about-container">
      <Banner picture={bannerAbout} />
      <section className="about-collapse-container">{collapseContent}</section>
    </section>
  )
}

export default About
