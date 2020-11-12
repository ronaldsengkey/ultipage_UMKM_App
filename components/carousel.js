
import { Card, makeStyles } from '@material-ui/core';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React from "react";
import { useState } from 'react';
import { Slide } from '@material-ui/core';



const SLIDE_INFO = [
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*',
    'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq',
    'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51cc84hBwRL.jpg'

];



function CarouselSlide(props) {
    const url = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            width: '100%',
            height: '360px',
            display: 'flex',
            aspectRatio:2,
            flexWrap:'wrap',
            justifyContent: 'center',
            zIndex:-1,
            paddingBottom: '100%',
        },
        photo: {
            // width: '100%',
            // aspectRatio:'1',
            objectFit:'cover',
            // display: 'flex',
            // // paddingBottom: '100%',
            display: 'block',
  width:'100vw',
  height:'100vw',
        },
    }));


    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img className={classes.photo} src={url}/></div>
    );
}


    
function App() {
    const [index, setIndex] = useState(2);
    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;
    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');


    const useStyles = makeStyles(() => ({
        leftArrow: {
            top: '50%',
    left: '10px',
    position: 'absolute',
    transform: 'translateY(-50%)',
            zIndex:1,
            display: 'flex',
        },
        rightArrow: {
            top: '50%',
    right: '10px',
    position: 'absolute',
    transform: 'translateY(-50%)',
    display: 'flex',
        } ,
        App: {
    position: 'relative',
    width:'100vw',
    // height:'100vw'
        } 
    }));

    const classes = useStyles();

    function Arrow(props) {
        const { direction, clickFunction } = props;
        const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;
    
        return <div className={direction === 'left' ?classes.leftArrow:classes.rightArrow} onClick={clickFunction}>{icon}</div>;
    }
    
    
    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 500);
    };
    return (
        <div className={classes.App}>
            <Arrow
                direction='left'
                clickFunction={() => onArrowClick('left')}
            />
            <Slide in={slideIn} direction={slideDirection}>
                <div>
                    <CarouselSlide content={content} />
                </div>
            </Slide>
            <Arrow
                direction='right'
                clickFunction={() => onArrowClick('right')}
            />
        </div>
    );
}




export default App