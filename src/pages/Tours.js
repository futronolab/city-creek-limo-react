import TwoColumnPage from './pageTools/pageBuilder/TwoColumnPage.js';

const toursData = (
    <div>
        <h1>Tours</h1>
        <h5>Transportation Park City, UT</h5>
        <p>
            Come to Utah for the greatest snow on earth and explore the rich history and beauty of 
            Salt Lake and Park City’s surroundings with transportation by City Creek Limousine. 
            City Creek’s commitment to excellence will take you from Salt Lake City International 
            Airport to the conference rooms of Utah’s finest hotels, or the breathtaking mountain 
            slopes and scenic Utah destinations. Our focus on tours is one of the services that 
            makes City Creek Limousine unique.
        </p>
        <p>
            Utah offers many unforgettable year–round adventures. Every family or individual guest 
            is unique; your tour of Utah should be too. City Creek Limousine provides a wide variety 
            of private and group tours designed to allow you to discover Utah’s must-see destinations, 
            including many historic Salt Lake and Park City locations.
        </p>
        <p>
            We would enjoy showing you the snow-capped peaks of Big and Little Cottonwood Canyons or 
            the beauty of Sundance Resort and Bridal Veil Falls, in Provo Canyon. Whether it’s skiing 
            in the winter or hiking, biking, fly-fishing or golfing, City Creek Limousine will take 
            care of your travel needs year round.
        </p>
        <p>
            Get lost in the gardens of Temple Square and visit other historic sites throughout downtown 
            Salt Lake City. Listen to the world-renowned Mormon Tabernacle Choir; see the Temple lights 
            during the winter holidays. Enjoy world-class shopping, dining and entertainment at City 
            Creek Center or The Gateway District. Listen to music under the stars at Salt Lake’s Red 
            Butte Gardens-Summer concert series.
        </p>
        <p>
            Visit the world-class resorts of Park City and Utah Olympic Park for year-round activities including 
            horse-back riding, zip-line adventures, Alpine slides, and walking, shopping and dining along Park 
            City’s historic Main Street. Let City Creek Limousine take you to the Great Salt Lake. While there, 
            you can experience beautiful sunsets and explore the hidden beauty of Antelope Island.
        </p>
        <p>
            Salt Lake and the Wasatch Front offer many world class destinations and adventures. City Creek 
            Limousine will take you to them all. Spice up your vacation, take some time away from the 
            boardroom and create lasting memories. The Salt Lake Valley and Wasatch Front boast countless 
            amazing amenities and activities. It’s never too late to create your own adventure - winter, 
            spring, summer, or fall.
        </p>
        <p>
            Let City Creek Limousine create a tour package just for you! Schedule a private tour with one 
            of City Creek’s drivers and enjoy Utah! Call 1-801-521-5466 or toll free 1-855-779-9045.
        </p>
    </div>
);

export default function Tours() {
    return(
        <TwoColumnPage pageInfo={toursData}/>
    );
}