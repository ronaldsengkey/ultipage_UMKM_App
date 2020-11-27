import SearchBox from "../components/searchBox";
import React from 'react';
import {SearchResultLayout} from "../components/LayoutSearch";
import CategoryRibbon from "../components/categoryRibbon";
import SecHead from "../components/searhBarsectionHeader";
import Items from "../components/searchCategoryItem";
import { GetCategory } from 'services/axios.service';


export default class PersonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          persons: []
        };
      }
  
    async componentDidMount() {
      console.log("iki masuk")
        const res = await fetch('api/get-category')
        const posts = await res.json()
          this.setState({persons:posts});
          console.log(this.state.persons)
    }
    
    
    render() {
      return (
        <SearchResultLayout><SearchBox></SearchBox>

<CategoryRibbon></CategoryRibbon>
{/* <p>{this.state.persons[0][0]}</p> */}
{this.state.persons.map((item, index) => (
    
        <div>
            <SecHead name={item.name}></SecHead>
        
        {JSON.parse(item.subcategory).map((item, index) => (
            <Items name={item.name} />
          ))}
          
          </div>
     ))}

</SearchResultLayout>
      )
    }
  }

