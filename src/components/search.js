import './css/search.css';


function Search(props) {

  
  const filterData = (searchTerm) => {
    // Example: Filtering out names starting with 'J'
    const filteredData = props.data.filter(item =>
      item.skills.some(term => term.toLowerCase().includes(searchTerm.toLowerCase()))    
    );
    props.setFinalData(filteredData); // Output filtered data to console
  };

  const handleChange = (event) => {
    filterData(event.target.value);
  };

  return (
    <div className="Search">
        <form id="form"> 
            <input type="search" id="query" name="q" placeholder="Search..." className='search-bar' onChange={handleChange}/>
        </form>
    </div>
  );
}

export default Search;
