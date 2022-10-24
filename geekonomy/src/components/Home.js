import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { AiOutlineSearch } from "react-icons/ai";

import NotificationsIcon from '@mui/icons-material/Notifications';

//import AddIcon from '@mui/icons-material/Add';

import '../components/Home.css'

import { PieChart } from 'react-minimal-pie-chart';

import Chart from "react-google-charts";

import HomeIcon from '@mui/icons-material/Home';





function TabPanel(props) {
  const { children, value, index, ...other } = props;


  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`stabpanelimple--${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p:6}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

        TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
        };

        function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
        }

export default function BasicTabs() {
            const [value, setValue] = React.useState(0);

            const handleChange = (event, newValue) => {
                setValue(newValue);
            };


            const data = [
                ['Year', 'Visitations', { role: 'style' } ],
                ['Oct 2021', 10, 'color: gray'],
                ['Nov 2021', 14, 'color: #76A7FA'],
                ['Dec 2021', 16, 'opacity: 0.2'],
                ['Jan 2022', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
                ['Feb 2022', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
            ];   

  return (
  <>

    <div className='container'>
   
    <header className='main_header'>

            <img src="./images/H_care-logo.png"/> 

            <div>

                <input type='text' placeholder='Search' autoFocus /> 
                
                <div> <AiOutlineSearch/> </div>

            </div> 

            <ul>

                <li> <h1><NotificationsIcon/> </h1></li>
                <li><img src="../Geekonomy-logo.png"/></li>
                <li>
                    <select>
                        <option>Geekonomy</option>
                        <option>Logout</option>
                    </select>
                    
                </li>

            </ul>
    </header>

    <div id="side_bar">
    <Box >
      <Box sx={{marginLeft:'-2rem',height:'67.5vh',transition:'none',background:'none' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" orientation='vertical' textColor='secondary'>

            <div className='reg_patient'> 
            
                <h3>Register Patient      <b>+</b> </h3> 
                
            </div>
        
            <Tab label="Patient" />

            <Tab label="Overview"  > </Tab>

            <Tab label="Map"  />

            <Tab label="Departments" />

            <Tab label="Doctor"  />

            <Tab label="History"  />

             <Tab label="Settings"  />

          {/* <Tab label="Item eight" /> */}

          <img className='apps' src="./images/Get-apps.png"></img>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <div className="main_page" > 
       
                <h1 id="c_name"> Welcome to Geekonomy </h1>

                <img id="logo" src="../Geekonomy-logo.png"></img>
       
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="main_page">

         <h1 id="com_name"> Welcome to Geekonomy </h1>

         <img id="logo" src="../Geekonomy-logo.png"></img>

      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="main_page"> 

                <div className='summary'>

                    <div className='to_patient'> 

                        <div> 

                            <img src="./images/total_patients.png"></img>

                        </div>

                        <ul>

                            <li> <b>3,256</b> </li>
                            <li> Total Patients </li>

                        </ul>

                        <ul>

                            <li></li>
                            <li></li>
                            <li></li>

                        </ul>

                    </div>
                    <div className='to_patient'>
                        
                            <div> 

                                    <img src="./images/av_patient.png"></img>

                            </div>

                            <ul>

                                <li> <b>394</b> </li>
                                <li> Available Staff </li>

                            </ul>

                            <ul>

                                <li></li>
                                <li></li>
                                <li></li>

                            </ul>    
                        
                     </div>
                    <div className='to_patient'> 


                        <div> 

                            <img src="./images/price.png"></img>

                        </div>

                        <ul>

                            <li> <b>$2,536</b> </li>
                            <li> Avg. Treat Costs </li>

                        </ul>

                        <ul>

                            <li></li>
                            <li></li>
                            <li></li>

                        </ul>  

                    </div>
                    <div className='to_patient'> 

                        <div> 

                                <img src="./images/ambulance.png"></img>

                        </div>

                        <ul>

                                <li> <b>38</b> </li>
                                <li> Availabe Cars </li>

                        </ul>

                        <ul>

                                <li></li>
                                <li></li>
                                <li></li>

                        </ul> 

                    </div>

                </div>

                <div className='Out_in_patients'>

                    <div className='Out_in_details'>

                        <div className="column_charts">
                                <h4>Outpatients vs Inpatients Trend </h4>
                               
                                <Chart
                                    width={570}
                                    height={200}
                                    data={data}
                                    chartType="ColumnChart"
                                    loader={<div>Loading Chart...</div>}                
                                />
                        </div>
                        <div id="piechart1">

                            <PieChart 
                                data={[
                                    { title: 'Inpatients', value: 16, color: '#6c1fa3' },
                                    { title: 'Outpatients', value: 10, color: '#1ba13a' },
                                    
                                ]}
                            />

                            
                           <ul className='indi_patient'>
                                    
                                    <li>

                                        <p>Inpatient</p>

                                    </li>
                                    <li>

                                        <p>Outpatient</p>

                                    </li>

                            </ul>

                        </div>

                    </div>

                    <div className='Pa_gender'>

                        <div> <p> Patient By Gender</p> </div>

                        <div id="piechart">

                            <PieChart 
                                data={[
                                    { title: 'Female', value: 10, color: '#E38627' },
                                    { title: 'Male', value: 15, color: '#6c1fa3' },
                                    
                                ]}
                                />

                       </div>

                       <ul className='gender'>
                        
                                <li>

                                     <p>Male</p>

                                </li>
                                <li>

                                     <p>Female</p>

                                </li>

                       </ul>

                    </div>


                </div>{/*Out_in_patients */}

                <div className='main_footer'>

                        <div className='time_admit'>

                                <img src="./images/curve.png"/>

                        </div>

                        <ul className='patient_divi'>

                                <li>

                                    <select> 

                                        <option> Patients By Division </option>

                                    </select>

                                </li>
                                <li><img src="./images/home.png"/>DIVISION  .......PI </li>
                                <li><img src="./images/cardiology.png"/> Cardiology....247</li>
                                <li> <img src="./images/neuro.png"/>Neurology ....564</li>
                                <li> <img src="./images/scissor.png"/>Surgery ..........86</li>

                        </ul>

                        <div className='All_patients'>


                                <img src='./images/Spark-graph.png'/>

                        </div>


                </div>
    
         
        </div>{/*main_page */}
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="main_page">
        
            <h1 id="c_name"> Welcome to Geekonomy </h1>

            <img id="logo" src="../Geekonomy-logo.png"></img>
        
         </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="main_page"> 
      
                <h1 id="c_name"> Welcome to Geekonomy </h1>

                <img id="logo" src="../Geekonomy-logo.png"></img>
      
       </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className="main_page"> 
      
            <h1 id="c_name"> Welcome to Geekonomy </h1>

            <img id="logo" src="../Geekonomy-logo.png"></img>
      
       </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div className="main_page">
        
            <h1 id="c_name"> Welcome to Geekonomy </h1>

            <img id="logo" src="../Geekonomy-logo.png"></img>
        
       </div>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <div className="main_page">
        
                <h1 id="c_name"> Welcome to Geekonomy </h1>

                <img id="logo" src="../Geekonomy-logo.png"></img>
        
         </div>
      </TabPanel>
      {/* <TabPanel value={value} index={8}>
      <div className="bb"> 333333 </div>
      </TabPanel> */}
    </Box>

    </div>

    </div>
    </>
  );
}
