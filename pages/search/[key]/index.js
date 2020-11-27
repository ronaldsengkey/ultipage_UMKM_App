
import { useRouter } from 'next/router'
// import Link from 'next/link'
import {SearchResultLayout} from "../../../components/LayoutSearch";
import MerchantGrid from "../../../components/grid"
import {PartnerGrid} from "../../../components/grid"
import CategoryRibbon from "../../../components/categoryRibbon";

// function SearchResult({product,partner}){ 
//   const router = useRouter()
//   const { key } = router.query
//   return (
   
//     <SearchResultLayout title={key}>
//         <MerchantGrid data={product} title="Items"></MerchantGrid>
//         <PartnerGrid data={partner} title="Partners"></PartnerGrid>
//     </SearchResultLayout>
//   )
// }

// SearchResult.getInitialProps = async ({ query }) => {
//   const { key } = query
//   const res = await fetch('api/search/'+key,)
//   const json = await res.json()
  
//   return { product: json["data"],partner: json["partner"]}
// }

// export default SearchResult



import React from 'react';


export default class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          product: [],
          partner:[],
          title:"",
          categoryMost:[]
        };
      }

      static async getInitialProps({ query }) {
        const { key } = query
        console.log("ini key"+key)
        return { keyword: key}
      }
  
    async componentDidMount() {
      
      console.log("ini title"+this.props.keyword)
        const res = await fetch('../api/search/'+this.props.keyword)
        const cities = await res.json()
        console.log(cities)
          this.setState({product: cities["data"],partner: cities["partner"],title:this.props.keyword});
          const res2 = await fetch('../api/getCategoryMost')
          const categoryMostResp = await res2.json()
          const temp = categoryMostResp.map(a=>a["_id"])
          this.setState({categoryMost:temp});
    }


    
    
    render() {
      return (
        
        <SearchResultLayout title={this.state.title}>
          <CategoryRibbon listCategory={this.state.categoryMost}></CategoryRibbon>
         <MerchantGrid data={this.state.product} title="Items"></MerchantGrid>
         <PartnerGrid data={this.state.partner} title="Partners"></PartnerGrid>
     </SearchResultLayout>
      )
    }
  
}

