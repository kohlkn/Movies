import './About.css'
import uga from '../Images/uga.png'

export default function About() {

    return (
        <>
            <div class='head'>
                <h1>
                    About Us
                </h1>
                <h3 class='paragraph'>
                    <center>
                    We are a movie booking website service with the goal of making booking your next movie easier! 
                    With our website you can catch any movie in theaters and even book upcoming movies. 
                    Our website is always up to date so you know exactly what movies are out and upcoming. 
                    </center>
                </h3>
                <br></br>
                <h2>
                    More About the Creators
                </h2>
                <h3 class='paragraph'>
                    <center>
                    We are computer science students at the University of Georgia working on a movie booking website for our Software Engineer class.
                    Below are the creators of this wonderful website in case you want to know more!
                    Go Dawgs!
                    </center>
                </h3>
            </div>
            <center>
                <img src={uga} class='image'/>
            </center>
            <div class='kohl'>
                <h1 class='h1color'>
                    Kohl Nguyen
                </h1>
                <h2>
                    Frontend Developer
                </h2>
                <h3 class='paragraph'>
                    <center>
                        Kohl is the creator of the user interface of the website.
                        With exprience in Javascript, CSS, and HTML, he designed and created all the visible components of the website.
                        He also worked with Samir to connect the database to the website.
                    </center>
                </h3>
            </div>
            <div class='samir'>
                <h1 class='h1color'>
                    Samir Hadi-Cisneros
                </h1>
                <h2>
                    Database Engineer
                </h2>
                <h3 class='paragraph'>
                    <center>
                        Samir is the database and backend developer and responsible for all the behind the scenes working.
                        With frontend experience as well as database knowledge, he implemented the Firebase database and connected it to the website.
                        He also helped Kohl with some aspects of the user interface.
                    </center>
                </h3>
            </div>
            <div>
                <h1>
                    Sam Wilson
                </h1>
                <h2>
                    Frontend Developer
                </h2>
                <h3 class='paragraph'>

                </h3>

            </div>
            <div>
                <h1>
                    Sanket Veer
                </h1>
                <h2>
                    Database Engineer
                </h2>
            </div>
        </>
    )
}