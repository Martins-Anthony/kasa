import '../../scss/style.scss'
import Banner from '../../components/Banner'
import aboutList from '../../datas/about.json'
import Collapse from '../../components/Collapse'

function About() {
  console.log(Object.keys(aboutList[0])[1])
  return (
    <div className="leftRightMargin">
      <Banner />
      <div className="about-collapse-container">
        <Collapse
          key={Object.keys(aboutList[0])[0]}
          title={'Fiabilité'}
          content={aboutList[0].fiabilite}
        />
        <Collapse
          key={Object.keys(aboutList[0])[1]}
          title={'Respect'}
          content={aboutList[0].respect}
        />
        <Collapse
          key={Object.keys(aboutList[0])[2]}
          title={'Service'}
          content={aboutList[0].service}
        />
        <Collapse
          key={Object.keys(aboutList[0])[3]}
          title={'Sécurité'}
          content={aboutList[0].securite}
        />
      </div>
    </div>
  )
}

export default About
