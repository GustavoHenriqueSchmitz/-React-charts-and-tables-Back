import PropTypes from 'prop-types'
import './Header.css'

function Header({title}) {

    return (
    <header className="header-container">
        <h1 className="title">{title}</h1>
    </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export { Header }