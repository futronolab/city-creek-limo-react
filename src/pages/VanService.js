import TwoColumnPage from './pageTools/pageBuilder/TwoColumnPage.js';

const executiveVanServiceData = (
    <div>
        <h1>Executive Van Service</h1>
        <p>
            Take advantage of our private and group transportation. Our executive van 
            service is designed to save you time and money, allowing small groups to 
            travel together in comfort to any Salt Lake or Utah destination.
        </p>
        <p>
            We offer curb side, or meet and greet airport service. It does not matter if 
            your traveling from the airport, to your hotel, or a corporate meeting. We 
            offer personal, professional van service. Relax and enjoy the ride.
        </p>
        <p>
            When City Creek was established in 2007, we focused on the personal and professional 
            needs of our guests. Since then, we have continued to offer specialized service with 
            a focus on excellence. We offer a wide range of services, including sedans, luxury SUV's, 
            and vans. Guest comfort and safety is and always will be our priority. We believe 
            that an executive chauffeur must adapt and recognize the unique transportation needs of each guest.
        </p>
        <p>
            For more information, please fill out our information request form, or call our toll free number 
            1-855-779-9045 or local 1-801-521-5466 and our transportation consultant can assist you today.
        </p>
    </div>
);

export default function VanService() {
    return(
        <TwoColumnPage pageInfo={executiveVanServiceData}/>
    );
}