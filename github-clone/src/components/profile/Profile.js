import FollowersCard from "../followers-card/FollowersCard";
import "./Profile.scss";

export default function Profile(){
    return(
        <div>
            <div>
                <img src="" alt="" />
                <div>
                    <FollowersCard />
                </div>
            </div>
            <h4>Github</h4>
            <p>How people build software</p>
        </div>
    )
}