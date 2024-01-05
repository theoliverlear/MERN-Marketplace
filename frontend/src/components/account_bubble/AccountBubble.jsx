import defaultUserBubbleImage from '../../images/default_user_icon.png';
import "./AccountBubble.css";
function AccountBubble() {

    return (
        <div className="AccountBubble">
            <img src={defaultUserBubbleImage}
                 alt="user icon"
                 id="user-icon"/>
        </div>
    )
}
export default AccountBubble;