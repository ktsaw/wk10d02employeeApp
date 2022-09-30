import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';


const Homepage = (props) => {
    return (
        <div class="section">
            <Header />
            <SearchBar />
            <EmployeeList />
            
        </div>
    )
}

export default Homepage;