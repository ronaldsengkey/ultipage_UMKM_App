
import Layout from "../components/Layout";
import Carousel from "../components/carousel"
import MerchantGrid from "../components/grid"
import { List } from '@material-ui/core';


const MainView = props => <Layout>
    <List style={{maxHeight: 'calc(90vh - 55px)', overflow: 'scroll',paddingTop:'0px'}}>
    <Carousel></Carousel><MerchantGrid></MerchantGrid>
    <Carousel></Carousel>
    <Carousel></Carousel>
    </List></Layout>;

export default MainView;
