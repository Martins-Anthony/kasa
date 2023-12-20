import { Link } from 'react-router-dom'
import '../../../scss/modules/error.scss'

function Error() {
  return (
    <div className="error-container">
      <h1 className="error-size">404</h1>
      <p>
        Oups! La page que
        <br /> vous demandez n'existe pas.
      </p>
      <Link to="/">Retourner sur la page d'acceuil</Link>
    </div>
  )
}

export default Error
