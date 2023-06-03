import React from 'react'
import "./Home.css"
import Images from "/home/nrj-srj/Music/Final Project Application/sentiment-project/src/components/Images/sentiment_analysis.png"

const Home = () => {
    return (
        <div className='Home-wrapper' style={{ backgroundImage: `url('${Images}')` }}>
            <div className='home-text'>
                <h2>
                    Sentiment Analysis
                </h2>
                <p>With Public <span style={{ textTransform: "uppercase", fontWeight: "bold", fontSize: "22px", color: "#1a2b3a" }}>Sentiment</span> Nothing Can Fail,<br /> Without it Nothing can succeed.</p>
            </div>

        </div>
    )
}

export default Home