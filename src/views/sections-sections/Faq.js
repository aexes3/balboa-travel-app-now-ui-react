import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container, Row, Col } from 'reactstrap';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function Faq() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="cd-section" id="faq">
        <div
          className="pricing-3 section-image"
          id="pricing-3"
          style={{
            backgroundImage: "url(" + require("assets/img/project20.jpg") + ")"
          }}>
          <Container>

            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Frequently Asked Questions</h2>
                <h4 className="description">
                  Flights
                </h4>
                <div className="section-space"></div>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="12">
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>Refunds</Typography>
                    <Typography className={classes.secondaryHeading}> 
                    When can I expect my airline ticket refund?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography color="textSecondary" align="left" variant='caption'>
                        <p>
                         - When a reservation is cancelled the same day it was booked, funds for the Airline portion are not collected. 
                          Any pending charges you may have seen would have been a "pending hold" for verification. 
                          These funds will return to your available credit and will not reflect as a refund. 
                          This process normally takes from 3-7 business days, depending on your banking institutions procedures.
                        </p>
                        <p>
                         - Please note: Some Prepaid credit card companies will hold pending authorizations for up to 30 days.
                        </p>
                        <p>
                         -  If the airline rules allow for cancellation the day after booking, funds for the Airline portion will be refunded
                          within 7-14 business days. It will depend upon the Airline(s) and your banking institutions policies. 
                          At times the refund will post before the charge is processed or may not appear on your current statement. 
                          Please contact your bank to verify the refund was received.
                        </p>
                        <p>
                          - Any refunds requested after 48-hours of purchase are based solely upon the Airline(s) rules. 
                          If approved, the refund will generally take 1-2 billing statement cycles. In some exceptional cases refunds 
                          may take longer than originally anticipated. An email update will be sent to you advising of any delay.
                        </p>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>Frequent Flyer Programs</Typography>
                    <Typography className={classes.secondaryHeading}>
                    What frequent flyer program(s) should I join?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography color="textSecondary" align="left" variant='caption'>
                    <p>
                      There are 3 major airline alliances: <br/>

                      &#176;Star Alliance: United, Lufthansa, Air Canada, Singapore Airlines, and more <br />
                      &#176;One World Alliance: American, British Air, Cathay Pacific, and more <br />
                      &#176;SkyTeam: Delta, KLM, Air France, Korean Air, and more <br />
                        </p>
                        
                        <p>
                         - It is recommended to join a program from an airline in each of these alliances as mileage earned 
                            on any airline in that alliance will be counted toward your balance.
                        </p>
                        <p>
                         -  Any airline not in these alliances, which are airlines like Southwest, Jet Blue, and Alaska, 
                            we would recommend joining their individual frequent flyer programs if you ever fly their flights.
                        </p>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography className={classes.heading}>Lost Luggage</Typography>
                    <Typography className={classes.secondaryHeading}>
                    What to do if your luggage is lost or delayed?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography color="textSecondary" align="left" variant='caption'>
                    <p>
                      - If your luggage is delayed, file a report with the airline immediately as it can take anywhere from a 
                      few hours to a few days to reach you. Other times, they might lose it completely. 
                      When an airline loses your bag, write a claim stating everything that was inside.  
                      This should be done before you leave the airport.
                    </p>
                    <p>
                      - The maximum amount you'll receive for lost belongings is $3,500 per passenger on domestic flights. 
                      If they lose it on an international flight, compensation will vary.
                    </p>
                    <p>
                      -  To avoid your luggage getting delayed and/or lost, make sure to tag your bag with a copy of your 
                      itinerary and contact info so that the airline knows where to find you.
                    </p>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Col>
            </Row>



            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h4 className="description">
                  Ground
                </h4>
                <div className="section-space"></div>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="12">
                <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>Age Requirements</Typography>
                    <Typography className={classes.secondaryHeading}> 
                    What are the age requirements to rent a car?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography color="textSecondary" align="left" variant='caption'>
                        <p>
                         - In the United States, most car rental companies have a minimum age of 25 or above. There are exceptions, 
                         but the renter must pay a surcharge. In Europe, foreign driver restrictions vary from country to country. 
                         Drivers need to be a minimum of 18 in most countries and have a valid US drivers license. Please check the 
                         official website of the rental company. These sites generally have age restrictions posted there, as well 
                         as information regarding seat belt laws, child seat requirements, and speed limits.
                        </p>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>CDW/LDW Insurance</Typography>
                    <Typography className={classes.secondaryHeading}>
                    Should I decline the CDW/LDW insurance when traveling domestically?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography color="textSecondary" align="left" variant='caption'>
                      <p>
                         - Collision Damage Waiver (CDW)
                      </p>
                      <p>
                        - Loss Damage Waiver (LDW)
                      </p>
                      <p>
                        -  It is important to read your entire rental car contract. 
                        Carefully weigh the pros and cons of paying for CDW/LDW coverage when you select your rental car. 
                        However, you may have alternatives available to you if you do not wish to buy CDW/LDW coverage. <br /> 
                        These alternatives include: <br />
                        &#176;Coverage From Credit Card Companies  <br />
                        &#176;Automobile Insurance Coverage <br />
                        &#176;Coverage From Travel Insurance Providers <br />
                      </p>
                      <p>
                        - Any refunds requested after 48-hours of purchase are based solely upon the Airline(s) rules. 
                        If approved, the refund will generally take 1-2 billing statement cycles. In some exceptional cases refunds 
                        may take longer than originally anticipated. An email update will be sent to you advising of any delay.
                      </p>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography className={classes.heading}>Rental Insurance</Typography>
                    <Typography className={classes.secondaryHeading}>
                      Do I need rental insurance if booking a car internationally?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography color="textSecondary" align="left" variant='caption'>
                    <p>
                      - It is recommended that travelers get additional car insurance when traveling internationally. 
                      First check with the credit card that you will be using to pay for the vehicle as some cards include 
                      international insurance coverage.  If your credit card does not include any insurance then you should 
                      purchase additional stand-alone insurance or get the insurance that the car company is providing.
                    </p>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Col>
            </Row>


            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h4 className="description">
                  Hotels
                </h4>
                <div className="section-space"></div>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="12">
                <ExpansionPanel expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>Check-in</Typography>
                    <Typography className={classes.secondaryHeading}> 
                    How to request an early check-in?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography color="textSecondary" align="left" variant='caption'>
                        <p>
                         - Most hotels have a check-in time of approximately 2-3 pm.  
                         But sometimes a traveler will be arriving at the hotel before that time and is interested in checking in early. 
                         If this is the case please let the hotel know in advance you will be there early.  
                         This will not guarantee an early check-in, but the hotel can set something aside assuming they will have a clean and empty room at that time.  
                         Make sure to be flexible and are willing to take any room type as this increase the chances that they can accommodate your request. 
                         Some hotels just will not allow you to check-in early, in these cases ask them if they can provide a day-room rate.  
                         If you are not going to be able to check-in early, ask the hotel about facilities and services that they can offer to you. 
                         These can includes things like a fitness center/pool so that you can take a shower, a place where they can store your luggage, 
                         or a business center so that you can work while waiting for a room to be ready.  
                         If you absolutely need to have this room prior to the normal check-in time, 
                         then you would need to reserve and pay for an extra night for the night before. 
                         If you go this route just make sure to let the hotel know that you will be arriving late so that they can hold this room for you.
                        </p>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>Check-out</Typography>
                    <Typography className={classes.secondaryHeading}>
                    How to request a late check-out
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography color="textSecondary" align="left" variant='caption'>
                      <p>
                         - Many hotels use a check-out time of 11 am and in some circumstances you may need use of your room or 
                         the hotel facilities after that time.  If you know in advance then please let the hotel know, they will 
                         try their best to accommodate your request if allowed.  Follow-up with the hotel when you arrive and ask 
                         for a late check-out.  It is generally at this time when they get advice if they can accommodate this or not. 
                         If they are unable to provide you with a late check-out, ask if the hotel can hold your bags while you spend 
                         more time in the destination.  You can also ask for permission to use the hotel facilities, like the hotel spa, 
                         fitness center, or business area.  If you absolutely need the room beyond the normal check-out time, the way 
                         to guarantee it is to reserve and pay for an additional night.
                      </p>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Col>
            </Row>


            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h4 className="description">
                  MISC
                </h4>
                <div className="section-space"></div>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="12">
                <ExpansionPanel expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>Lost Passport</Typography>
                    <Typography className={classes.secondaryHeading}> 
                    What to do if you lose your passport while traveling?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography color="textSecondary" align="left" variant='caption'>
                        <p>
                         - You will have to replace the passport before returning to the United States. Contact the nearest U.S. 
                         embassy or consulate for assistance. Contact information for U.S. embassies and consulates is also available 
                         in our country information pages. Ask to speak to the Consular Section to report your passport lost or stolen. 
                         If you have been the victim of a serious crime, be sure to tell a consular officer about it as soon as possible 
                         so we can provide appropriate assistance. If you are scheduled to leave the foreign country shortly, 
                         please provide our consular staff with the details of your travel. We will make every effort to assist 
                         you quickly. You will also be directed to where you can obtain a photo for your replacement passport. 
                         In most cases, you will need to get a passport photo prior to your arrival at the consular section.
                        </p>
                        <p>
                        If you are notified by a relative or friend traveling abroad that his/her U.S. passport has been 
                        lost/stolen, you may wish to contact the Office of Overseas Citizens Services, U.S. Department of State 
                        in Washington, D.C, at 1-888-407-4747. That office will be able to help you put your friend or loved one 
                        in touch with the closest U.S. embassy or consulate. Your relative/friend must apply in person for a new 
                        passport at the U.S. embassy or consulate.
                        </p>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>Travel Insurance</Typography>
                    <Typography className={classes.secondaryHeading}>
                    Should I get travel insurance?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography color="textSecondary" align="left" variant='caption'>
                      <p>
                         - The first question you should ask yourself is; How does your employer define its “duty of care” 
                         for business travelers?  “Duty of care” means your employer has a certain obligation to protect the 
                         health, safety and security of its employees, especially when they’re traveling for business.  
                         But in the United States, there’s no law that clearly defines private employers’ duty of care toward 
                         their employees.  As a frequent business traveler, you need to find out what your company’s policy is — or 
                         if it even has a policy. If you should become seriously ill or injured while traveling, for instance, 
                         would your company pay for your care, or offer you any compensation?  If your company will not cover the 
                         cost in case of problems, then insurance might be a good idea for you.  <br />
                         This would cover things like: <br />
                          &#176; Your flight is cancelled and you have to spend another night in the city, incurring more costs for hotel/food. <br />
                          &#176; The airline loses your suitcase, leaving you without the clothes you need for a conference. <br />
                          &#176; You scrape your rental car while exiting a tight parking space. Your company might expect you to file a claim with your own insurance company. <br />
                      </p>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>Sick or Injured</Typography>
                    <Typography className={classes.secondaryHeading}>
                    What to do if you get sick or injured while traveling?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography color="textSecondary" align="left" variant='caption'>
                      <p>
                         - If you are traveling within the United States, &nbsp;
                         <a href="https://www.healthgrades.com/" target="_blank" rel="noopener noreferrer">HealthGrades.com</a>&nbsp;
                         is a handy resource that offers reviews of doctors to help you make an informed choice. Before your visit, 
                         be sure to also call your health insurance company or check their website. Plans vary considerably 
                         so you can never be too sure.
                      </p>
                      <p>
                        - If you are outside of the US, the &nbsp;
                        <a href="http://www.istm.org/" target="_blank" rel="noopener noreferrer">International Society of Travel Medicine</a>&nbsp;
                        and the &nbsp;
                        <a href="https://www.iamat.org/" target="_blank" rel="noopener noreferrer">International Association for Medical Assistance to Travelers</a> &nbsp;
                        are two useful websites. And, of course, Google is an essential travel companion that’ll 
                        help you find out which languages the doctor’s office speaks and how you can get in.
                      </p>
                      <p>
                        - If it is serious, contact your embassy or consulate. If you are very sick, you don’t want to end up in a 
                        random doctor’s office or a foreign ER. You have no idea what the standard of care will be and you might 
                        face insurmountable communication barriers.
                      </p>
                      <p>
                        - Embassy and consulate officers can recommend local health care providers and direct you to a hospital. 
                        They can also help take care of logistics like notifying family, assisting with the transfer of funds, 
                        arranging transport, and more while you are getting cared for.
                      </p>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>RealID</Typography>
                    <Typography className={classes.secondaryHeading}>
                    What is RealID and do I need it?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography color="textSecondary" align="left" variant='caption'>
                      <p>
                         - Passed by Congress in 2005, the REAL ID Act enacted the 9/11 Commission's recommendation that 
                         the Federal Government “set standards for the issuance of sources of identification, such as driver's 
                         licenses.” The Act established minimum security standards for state-issued driver's licenses and 
                         identification cards and prohibits Federal agencies from accepting for official purposes licenses 
                         and identification cards from states that do not meet these standards. <br />
                         These purposes are: <br />
                         &#176; Accessing Federal facilities <br />
                          &#176; Boarding federally regulated commercial aircraft <br />
                          &#176; Entering nuclear power plants
                      </p>
                      <p>
                        - The final enforcement deadline is October 1, 2020. By this date, not only must all states be issuing 
                        Real ID-compliant licenses or IDs, but individuals must also have visited their state’s driver’s 
                        licensing agency and obtained a REAL ID compliant card, or acceptable alternative such as a U.S. 
                        passport, if they wish to fly on commercial aircraft or access federal facilities.
                      </p>
                      <p>
                        - Federal agencies, including DHS and TSA, may only accept state-issued driver’s licenses and 
                        identification cards as identification for purposes of accessing federal facilities - including TSA 
                        airport security checkpoints - if the license or card was issued by a REAL ID compliant state in 
                        accordance with the REAL ID security standards (meaning the license or card must include the REAL ID 
                        compliant star marking). Enhanced Driver’s Licenses (EDL) issued by Washington, Michigan, Minnesota, 
                        New York, and Vermont are considered acceptable alternatives to REAL ID-compliant cards and will also 
                        be accepted for official REAL ID purposes. Most EDLs do not contain the star marking and this is acceptable.
                      </p>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

    </>




  );
}

export default Faq;
