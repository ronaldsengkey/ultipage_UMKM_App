
import Layout from "../components/Layout";
import Carousel from "../components/carousel"
import {PartnerGrid} from "../components/grid"
import { List } from '@material-ui/core';
import React from 'react';
import LoadingOverlay from 'react-loading-overlay'


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
          loading:false
        };
      }
    async componentDidMount() {
      console.log('render home');

        // const [res, res2, res3] = await Promise.all([
        //   fetch('api/getCity'),
        //   fetch('api/getBanner/'+this.state.cityId),
        //   fetch('api/getHomeSection/'+this.state.cityId),
        // ]);
      
        // const cities = await res.json()
        // const bannerResp = await res2.json()
        // const homeSection = await res3.json()
        // this.setState({city:cities,banner:bannerResp.map(a=>a.promo_path),section1Title:homeSection.data[0].name,section2Title:homeSection.data[1].name,section1Data:homeSection.section1,section2Data:homeSection.section2});

        const res = await fetch('api/getAllHome/null')
        const responseAll = await res.json()
        const cities = responseAll[0]
        const bannerResp = responseAll[1]
        const homeSection = responseAll[2]
        this.setState({city:cities,banner:bannerResp.map(a=>a.promo_path),section1Title:homeSection.data[0].name,section2Title:homeSection.data[1].name,section1Data:homeSection.section1,section2Data:homeSection.section2});
        //   this.setState({city:cities});
          // const res2 = await fetch('api/getBanner/'+this.state.cityId)
          // const bannerResp = await res2.json()
          // const temp = bannerResp.map(a=>a.promo_path)
          
          // this.setState({banner:temp});

          // const res3 = await fetch('api/getHomeSection/'+this.state.cityId)
          // const homeSection = await res3.json()
          
          // this.setState({section1Title:homeSection.data[0].name,section2Title:homeSection.data[1].name,section1Data:homeSection.section1,section2Data:homeSection.section2});
    }
    loadingOn = () => {
      this.setState({loading:true})
    };

     onChange=async(e) =>{
        
        // const res2 =await fetch('api/getBanner/'+e)
        // const bannerResp = await res2.json()
        //   const temp = bannerResp.map(a=>a.promo_path)
          
        //   this.setState({banner:temp});
        //   const res3 = await fetch('api/getHomeSection/'+e)
        //   const homeSection = await res3.json()
          
        //   this.setState({section1Title:homeSection.data[0].name,section2Title:homeSection.data[1].name,section1Data:homeSection.section1,section2Data:homeSection.section2});
        const res = await fetch('api/getAllHome/'+e)
        const responseAll = await res.json()
        // const cities = responseAll[0]
        const bannerResp = responseAll[1]
        const homeSection = responseAll[2]
        this.setState({banner:bannerResp.map(a=>a.promo_path),section1Title:homeSection.data[0].name,section2Title:homeSection.data[1].name,section1Data:homeSection.section1,section2Data:homeSection.section2});
    }

    
    
    render() {
      return (
        
        <Layout onChangeCity={this.onChange} cities={this.state.city}>
          <LoadingOverlay
  active={this.state.loading}
  spinner
  text='Loading your content...'
  >
    <List style={{maxHeight: 'calc(90vh - 55px)',minHeight:"90vh", overflow: 'scroll',paddingTop:'0px'}}>
    <Carousel data={this.state.banner}></Carousel>
    
    <PartnerGrid title={this.state.section1Title} data={this.state.section1Data} showLoading={this.loadingOn}></PartnerGrid>
    <PartnerGrid title={this.state.section2Title} data={this.state.section2Data} showLoading={this.loadingOn}></PartnerGrid>
    
    </List></LoadingOverlay></Layout>
      )
    }
  
}

