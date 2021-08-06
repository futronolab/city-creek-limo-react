import TwoColumnPage from './pageTools/pageBuilder/TwoColumnPage.js';

const comiconPageData = (
    <div>
        <h2>SL Comic Con Transportation</h2>
        <h1>LITTLE AMERICA EXCLUSIVE</h1>
        <p>
            Comic Con is pleased to announce the “Ultimate” VIP Transportation 
            experience for only $55.00 dollars round trip (gratuity not included).  
            Be picked up in style, avoid the long lines by being taken directly to 
            the VIP back of the house entrance, get escorted right into the show VIP style.  
        </p>
        <p>
            This offer is good with any general admission ticket and you must be 
            a guest of Little America Hotel or be parked through Little 
            America valet services.  
        </p>
        <p>
            Space is limited so reserve your chauffeured vehicle now!  
            For more information and to reserve your vehicle please call 
            801-833-9539 or email us at <a href="mailto:info@citycreeklimo.com">info@citycreeklimo.com</a>
        </p>
    </div>
);

export default function Comicon() {
    return(
        <TwoColumnPage pageInfo={comiconPageData}/>
    );
}