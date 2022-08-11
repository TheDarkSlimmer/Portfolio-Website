import messageStyles from '../Main Components/MessagePop.module.css'

export default function MessagePop(props){

    return(
        <form>
            <h2 className={messageStyles.mHeader}>Get in Touch</h2>
           <input type='text' placeholder="Name"/><br/>
           <input type='email' placeholder="Email"/><br/>
           <label>Message</label><br/>
           <textarea></textarea><br/>
           <button className={messageStyles.mButton}>Send</button>
        </form>
)
}