import SearchBox from "../components/searchBox";
import React from 'react';
import Layout from "../components/LayoutSearch";
import CategoryRibbon from "../components/categoryRibbon";
import SecHead from "../components/searhBarsectionHeader";
import Items from "../components/searchCategoryItem";
import { GetCategory } from 'services/axios.service';
import {useDebouncedEffect} from "../components/debouncer";

export default class PersonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          persons: [],
          categoryMost:[]
        };
      }
  
    async componentDidMount() {
        const res = await fetch('api/get-category')
        const posts = await res.json()
          this.setState({persons:posts});
          const res2 = await fetch('api/getCategoryMost')
          const categoryMostResp = await res2.json()
          const temp = categoryMostResp.map(a=>a["_id"])
          this.setState({categoryMost:temp});
    }

    
    
    render() {
      return (
        <Layout>
          <SearchBox onEnter={(e)=>document.location.href ="/search/"+e}>

          </SearchBox>

<CategoryRibbon listCategory={this.state.categoryMost}></CategoryRibbon>
{/* <p>{this.state.persons[0][0]}</p> */}
{this.state.persons.map((item, index) => (
    
        <div>
            <SecHead name={item.name}></SecHead>
        
        {JSON.parse(item.subcategory).map((item, index) => (
            <Items name={item.name} onClick={()=>document.location.href ="/search/"+item.name}/>
          ))}
          
          </div>
     ))}

</Layout>
      )
    }
  }


// const SearchView = props => 

// export default SearchView;
