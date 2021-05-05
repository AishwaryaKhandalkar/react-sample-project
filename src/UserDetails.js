
import PropTypes from 'prop-types'
export const UserDetails = ({name,age,children,displayName}) => {
    return(
        <div>
        <h1>Name : {name}</h1>
        <h2>Age : {age}</h2>
        <button onClick={()=>displayName(name)}>Say Hi</button>
        </div>
    )
}

UserDetails.defaultProps = {
    name : 'Default name',
    age : 22
}
 
UserDetails.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number
}