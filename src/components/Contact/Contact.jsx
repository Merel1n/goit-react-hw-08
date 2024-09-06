import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from './Contact.module.css'
const Contact = ({id, name, number, onDeleteContact}) => {
    return (
        <>
            <div className={css.text}>
                <p><FaUser /><span>  {name}</span></p>
                <p><BsFillTelephoneFill /><span>  {number}</span></p>
            </div>
            
            <button type="button" className={css.button} onClick={()=>{onDeleteContact(id)}}>Delete</button>
        </>
    )
}
export default Contact