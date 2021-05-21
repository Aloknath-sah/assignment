import React from "react";
import datas from "./datas";
import List from "./List";
import Search from "./Search";
import Pagination from './Pagination'

class Home extends React.Component {
    state = {
        searchTerm: "",
        data: [],
        currentPage:1,
        sortPrice:"",
        filter:""
    };
    
    componentDidMount() {
        this.setState({
            data: datas
        });
    }
    
    onSearchHandler = e => {
        this.setState({
            searchTerm: e.target.value,
        });
    };

    handleSort = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleFilter = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handlePageChange=(page)=>{
        this.setState({
            currentPage: page
        })
    }
    
    render() {
        console.log(this.state.filter)
        //pagination
        const p_data = this.state.data
        const {currentPage, sortPrice, filter} = this.state
        const perPage = 3;
        const totalPages = Math.ceil(p_data.length/perPage)
        console.log(totalPages, currentPage)
        //search using filter function
        const toSearch = searchTerm => item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase());
            
        
        const data = this.state.data
            .filter(toSearch(this.state.searchTerm))
            .filter((item, index)=> index >= (currentPage-1)*perPage && index < currentPage*perPage)
            .sort((a, b)=>{
                if(sortPrice===null){
                    return 0;
                }
                else if(sortPrice==="Ascending"){
                    return a.cost - b.cost
                }
                else{
                    return b.cost - a.cost
                }
            })
            //.filter((items) => items.name == filter)
            .map(item => (
                <List
                key={item.id}
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                cost={item.cost}
                place={item.place}
                cuisine={item.cuisine}
                rating={item.rating}
                />
            ));
    
        return (
            <div className="App">
                <h2>Search Restaurant</h2>
                <Search
                dataValue={this.state.searchTerm}
                onChangeHandler={this.onSearchHandler}
                />
                <div style={{width:"100px",margin:"auto", height:"50px"}}>
                    <h3>Pagination</h3>
                    <Pagination current={currentPage} totalPages={totalPages} handleChange={this.handlePageChange} />
                </div>
                <div>
                    <h3>sort</h3>
                    <select name="sortPrice" onChange={this.handleSort}>
                        <option value="null">--sort by price--</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending" >Descending</option>
                    </select>
                </div>

                <div>
                    <h3>filter</h3>
                    <select name="filter" onChange={this.handleFilter}>
                        <option value="all">--filter by name--</option>
                        {
                            this.state.data.map((items) => (
                                <>
                                
                                <option value={items.name}>{items.name} </option>
                                </>
                            ))
                        }
                    </select>
                    <select name="filter" onChange={this.handleSort}>
                    <option value="all">--filter by place--</option>
                        {
                            this.state.data.map((items) => (
                                <>
                                
                                <option value={items.place}>{items.place} </option>
                                </>
                            ))
                        }
                    </select>
                    <select name="filter" onChange={this.handleSort}>
                    <option value="all">--filter by cuisine--</option>
                        {
                            this.state.data.map((items) => (
                                <>
                                
                                <option value={items.cuisine}>{items.cuisine} </option>
                                </>
                            ))
                        }
                    </select>
                </div>
                <br/>
                {data}
            </div>
        );
    }
}

export default Home;
