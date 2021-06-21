import React from 'react';
import './home.css';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import Health from './health'


export default function Home(){
    return(
        <div>
            <div class="contain">
            <div>
                <Health/>
            </div>
            <div class="intro row justify-content-center align-items-center text-center">
                <h4>In daily life, how does food provide us with energy for nutrition?</h4>
                <h4>Food are divided into six categories: Grains, Vegetables, Meats and Protein, Ｍilk and Diary products, Fruits, Fats.</h4>
                <h4>We are going to introduce three of these categories!</h4>
            </div>
            </div>
            <br></br>
            <div>
            </div>
            <br></br>
            <div class="child ">
                <RestaurantIcon fontSize="large"/>
                <h3>Have a healthy diet.</h3>
                <DirectionsWalkIcon fontSize="large"/>
            </div>
        </div>        
    );
}
