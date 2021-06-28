import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header className='header'>
          <h1>Loja de ovos</h1>    
        </header>
    )
}
Header.propTypes = {
  title: PropTypes.string
}
export default Header