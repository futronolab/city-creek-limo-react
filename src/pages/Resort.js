import TwoColumnPage from './pageTools/pageBuilder/TwoColumnPage.js';

const restortPageData = (
    <div>
        <h1>Utah Resort Transportation Services</h1>
        <p>
            Coming to Utah to ski the greatest snow on earth? You can enjoy three world-class ski resorts, 
            Deer Valley Resort, Park City Mountain Resort, and Canyons. Discover the deep powder of Alta, 
            Snowbird, Brighton, Solitude and Powder Mountain. Or explore the majestic Sundance or Snow Basin resorts.
        </p>
        <p>
            We offer transportation to luxury on-mountain lodges, exclusive private ski homes and beautiful 
            condominiums. We can accommodate any guest need, any time of year. Whether skiing or summering- 
            you can explore a variety of mountain activities. Spring, summer, or fall experience unequaled 
            hiking, biking, fly fishing and golf. Let us make your travel and mountain vacation seamless.
        </p>
        <p>
            City Creek Limousine is pleased to offer for its private SUV and Van Service guests limited 
            wait time for a comfortable check in experience. Allowing you to pick up those last minute 
            items, so you can start off your vacation right.
        </p>
        <p>
            City Creek Limousine offers a wide selection of group and personal transportation. For 
            information on Private luxury S.U.V, Van service and shared ride service to any of Utah's 
            world class resorts. Please call us toll free at 1-855-779-9045 or locally 1-801-521-5466. 
            Please fill out the information request form to book your transportation today.
        </p>
    </div>
);

export default function Resort() {
    return(
        <TwoColumnPage pageInfo={restortPageData}/>
    );
}