import { Link } from "react-router-dom";
import Profile from "../components/profile/Profile";
import RepositoryCard from "../components/repository-card/RepositoryCard";
import SearchInput from "../components/search-form/SearchForm";

export default function Home(){
    return(
        <>
            <SearchInput />
            <Profile />
            <RepositoryCard />
            <Link to="/all-repositories">View all repositories</Link>
        </>
    )
}