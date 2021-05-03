import PropTypes from 'prop-types'

// racfe to generate default template
const Button = ({color, text, onClick}) => {
    
    // define functions
    // const onClick = (e) =>{
    //     console.log(e);
    // }
    
    
    
    return (
        <div>
            <button 
            onClick = {onClick}
            style={{backgroundColor: color}} 
            className='btn'
            >
            {text}
            </button>
        </div>
    )
}

// set default props
Button.defaultProps = {
    color: 'steelBlue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button
