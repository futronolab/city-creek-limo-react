import TwoColumnPage from './pageTools/pageBuilder/TwoColumnPage.js';

const corporateTravelData = (
    <div>
        <h1>Corporate Business Travel</h1>
        <p>
            City Creek Limousine recognizes the unique needs of our corporate guests. 
            We offer our corporate clients the same professional, personal, executive 
            service that we provide our individual and hotel guests.
        </p>
        <p>
            City Creek Limousine’s group and corporate travel offers a wide range of 
            services, including sedan, luxury SUV’s, and vans, with your choice of 
            airport meet and greet or curb side pick up. We also offer Jet Center services. 
            Whether your group is large or small, let City Creek Limousine offer you black 
            car service, with our focus on excellence, at a competitive price. We will 
            design a corporate package that is specifically customized to your needs.
        </p>
        <p>
            Guest comfort and safety is and always will be our priority. We believe that 
            an executive chauffeur must adapt and recognize the unique transportation needs 
            of each guest. We are interested in partnering with Affiliates who share our 
            level of customer service.
        </p>
        <p>
            We provide transportation service in Salt Lake City, Park City and surrounding areas. 
            Please fill out our request form, day or night, or call 1-855-779-9045 number or 
            1-801-521-5466 and our transportation consultant can assist you with your travel needs.
        </p>
    </div>
);

export default function CorporateTravel() {
    return(
        <TwoColumnPage pageInfo={corporateTravelData}/>
    );
}