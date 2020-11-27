
import Layout from "../components/Layout";
import Carousel from "../components/carousel"
import {PartnerGrid} from "../components/grid"
import { List } from '@material-ui/core';
import React from 'react';
import { getPromo } from 'services/axios.service';


export default class PersonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          city: [],
          banner:[],
          cityId:null,
          section1Title:"",
          section2Title:"",
          section1Data:[],
          section2Data:[],
        };
      }
    async componentDidMount() {
      console.log('render home');

        const res = await fetch('api/getCity')
        const cities = await res.json()
          this.setState({city:cities});
          const res2 = await fetch('api/getBanner/'+this.state.cityId)
          const bannerResp = await res2.json()
          const temp = bannerResp.map(a=>a.promo_path)
          
          this.setState({banner:temp});

          const res3 = await fetch('api/getHomeSection/'+this.state.cityId)
          const homeSection = await res3.json()
          
          this.setState({section1Title:homeSection.data[0].name,section2Title:homeSection.data[1].name,section1Data:homeSection.section1,section2Data:homeSection.section2});
    }

     onChange=async(e) =>{
        
        const res2 =await fetch('api/getBanner/'+e)
        const bannerResp = await res2.json()
          const temp = bannerResp.map(a=>a.promo_path)
          
          this.setState({banner:temp});
          const res3 = await fetch('api/getHomeSection/'+e)
          const homeSection = await res3.json()
          
          this.setState({section1Title:homeSection.data[0].name,section2Title:homeSection.data[1].name,section1Data:homeSection.section1,section2Data:homeSection.section2});
    }

    
    
    render() {
      return (
        <Layout onChangeCity={this.onChange} cities={this.state.city}>
    <List style={{maxHeight: 'calc(90vh - 55px)', overflow: 'scroll',paddingTop:'0px'}}>
    <Carousel data={this.state.banner}></Carousel>
    
    <PartnerGrid title={this.state.section1Title} data={this.state.section1Data}></PartnerGrid>
    <PartnerGrid title={this.state.section2Title} data={this.state.section2Data}></PartnerGrid>
    </List></Layout>
      )
    }
  
}

