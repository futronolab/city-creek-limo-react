import { Grid } from '@material-ui/core';

function AboutUs() {
    return(
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <p>
                    <strong>Robert Lee</strong> - <em>Founder</em>
                </p>
                <p>
                    Robert loves the majesty and grandeur of the state of Utah. He worked for many years 
                    in the luxury resorts of the Wasatch Mountains, including Sundance, Deer Valley Resort, 
                    Stein Eriksen Lodge and The Grand America Hotel. It’s no secret that Utah has the 
                    greatest snow on Earth. But through Robert's interactions at these renowned 
                    destinations, he recognized that one of the greatest amenities this beautiful 
                    state can offer its visitors is superior, "Five Star" guest service.
                </p>
                <p>
                    Robert founded City Creek Limousine in 2007 with the goal of providing the finest in guest travel. He has employed the experience gained while working in exclusive, luxury resorts to build a transportation company that offers its guests professional travel service,with a personal touch. Robert also seeks to provide families an unparalleled travel experience, allowing them to build lasting memories one ride at at time.
                </p>
                <p>
                    <strong>Chafer James</strong> - <em>Partner and Co-Owner of CityCreekLimousine.com</em>
                </p>
                <p>
                    Chafer James career in executive transportation began in August 2005. Over the past eight 
                    years, he has become an industry leader in the Salt Lake City market. He has enjoyed working 
                    with and building some of Salt Lake City's premier transportation company.
                </p>
                <p>
                    City Creek Limousine is proud to have Chafer James as the new co-owner and executive 
                    vice president of sales and marketing. His dedication to the guest service experience 
                    is second to none. We know you will enjoy working with him as much as we enjoyed having 
                    him become part of the City Creek Limousine family...
                </p>
            </Grid>
        </Grid>
    );
}

export default AboutUs;