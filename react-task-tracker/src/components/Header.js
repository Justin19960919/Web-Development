import PropTypes from 'prop-types'  // impt
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd? 'red': "green"} text={showAdd? "Close": "Add"}
            onClick = {onAdd}
            />
            
        </header>
    )
}

Header.defaultProps = {
    title: "Task tracker"
}

Header.propTypes = {
    title: PropTypes.string
}

// Css in js, inline styling {headingStyle}, use this in jsx
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'back'
// }

export default Header
