import React from "react";

class Ba3 extends React.Component {
  
    render () {
        console.log(this)
        return ( 
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.2s">
           
            <div className="card" id="card_{{event.id}}" onclick="location.href = '{{ path('presentation',{'id': event.id})}}'">

            

                <div className="view overlay hm-white-slight z-depth-1">

                        <img src={this.props.event.image} className="img-fluid" alt="" style={{width:"339.99px",height:"226px"}} />
                    

                    <a>
                        <div className="mask waves-effect waves-light"></div>
                    </a>
                </div>

                
                <div className="card-body text-center">
                   
                    <h5>{this.props.event.category}</h5>
                    <h4 className="card-title"><strong><a href="" className="">{this.props.event.title}</a></strong></h4>

                  
                    <p className="card-text">
                        {this.props.event.desc}<a href="" className=""> ... </a>
                     
                    </p>



                    
                    <div  align="center" className="percent_val" ><p><font size="2" id="percent_event" ></font></p></div>

                    <div  align="center" className="nbr_eventClient" ><p><font size="2" id="eventClient_event" > (Participants/nbrMax) Participants</font></p></div>


                </div>
               
                <div className="card-data" style={{background: "#929FBA"}}>
                    <ul className="list-unstyled">
                        <li className="ml-0">{this.props.event.prix} €</li>
                        <li className="ml-5">
                            <i className="fa fa-clock-o ml-0 pl-0"></i> dateDebut|date("d/m/Y") </li>
                    </ul>
                </div>
        
            </div>
            </div>
                                               
        )
    }
}
export default Ba3; 
