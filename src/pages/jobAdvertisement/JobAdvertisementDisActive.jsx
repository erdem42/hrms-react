import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Button, Card, Image } from 'semantic-ui-react'

export default function JobAdvertisementDisActive() {

  //boolean isActive- active
  //Boolean isActive-isActive

  const [disActiveJobAdvertisements, setDisActiveJobAdvertisements] = useState([]);
    let jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {

    jobAdvertisementService
      .getJobAdvertisementsDisActive()
      .then((result) => setDisActiveJobAdvertisements(result.data.data));
  }, []);

  const [state, setstate] = useState(false)

  function handleActive(id){
   jobAdvertisementService.confirmJobAdvertisement(true,id)
    
   
  }
  function handleDisActive(jobAdvertisementId){
    jobAdvertisementService.confirmJobAdvertisement(false,jobAdvertisementId)


  }

  return (
    <div>

{disActiveJobAdvertisements.map((d)=>(
 
<Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="/images/avatar/large/steve.jpg"
          />
          <Card.Header>{d.employerCompanyName}</Card.Header>
          <Card.Meta>{d.jobTitleTitle}</Card.Meta>
          <Card.Meta>{d.employerEmail}</Card.Meta>
          <Card.Meta>{d.employerWebAddress}</Card.Meta>

          <Card.Description>
           {d.description} 
           {/* <strong>best friends</strong> */}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/* <div className="ui two buttons"> */}
           { 
          
         d.active?<Button onClick={()=>handleDisActive(d.jobAdvertisementId)}  color="green">
              İlan Aktif 
            </Button>:
            <Button onClick={()=>handleActive(d.jobAdvertisementId)} basic color="red">
              
              İlan Aktif Değil
            </Button>
              }
          {/* </div> */}
        </Card.Content>
      </Card>



))}

      
    </div>
  );
}
