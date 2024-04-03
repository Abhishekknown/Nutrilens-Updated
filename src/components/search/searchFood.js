import React, { useState } from 'react';
import axios from 'axios';
import './searchFood.css'

const YOUR_API_KEY = '2qWlMeegtqlWFPlWavAvyg==LNeJinKJ2suLEVbE'; // Replace with your actual API key

export default function GetData() {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://api.calorieninjas.com/v1/nutrition', {
                params: { query },
                headers: { 'X-Api-Key': YOUR_API_KEY }
            });
            setItems(response.data.items);
            console.log(response.data.items) // Set items array from response data
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData();
    };

    return (
        <>
            <div className='searchPage_Container'>
                <form onSubmit={handleSubmit} className='searchFood_FormField'>
                    <input
                        className='searchFood_Input'
                        type="text"
                        placeholder="Enter your query"
                        value={query}
                        onChange={handleInputChange} />
                    <button type="submit" className='search_btn'>Get Nutrition</button>
                </form>
            </div>

            <div className='results'>


                {items.map((item, index) => (
                  
                     <div className='result_card '>
                        <div className=' result_head'>
                            <h1>{item.name}
                            </h1>
                            
                                <p className='total_weight'>{item.serving_size_g}g</p>
                            
                        </div>
                       
                        <div className='result_content'>
                             <p className='title'>Nutrition Information</p>
                            <div className='nutrition_Information '>
                            <div >
                                <p>Calories:</p>
                                <p>{item.calories}</p>
                            </div>
                            <div >
                                <p>Carbohydrates:</p>
                                <p>{item.carbohydrates_total_g}g</p>
                            </div>
                            <div >
                                <p>Cholesterol:</p>
                                <p>{item.cholesterol_mg}mg</p>
                            </div>
                            <div>
                                <p>Saturated Fat:</p>
                                <p>{item.fat_saturated_g}g</p>
                            </div>
                            <div>
                                <p>Total Fat:</p>
                                <p>{item.fat_total_g}g</p>
                            </div>
                            <div>
                                <p>Fiber:</p>
                                <p>{item.fiber_g}g</p>
                            </div>
                            <div>
                                <p>Potassium:</p>
                                <p>{item.potassium_mg}mg</p>
                            </div>
                            <div>
                                <p>Protein:</p>
                                <p>{item.protein_g}g</p>
                            </div>
                            <div>
                                <p>Sodium:</p>
                                <p>{item.sodium_mg}mg</p>
                            </div>
                            <div>
                                <p>Sugar:</p>
                                <p>{item.sugar_g}g</p>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                  
                ))}


            </div>
        </>
    );
}