export default function About(){
    return(
        
        <div style={{ backgroundColor: '#3d516e', minHeight: '100vh', padding: '0px' }}>
            <div className="AboutHeader">About</div>
            <div className="Content" style={{color:'white'}}>
              

            <b>GripGuardian</b> is an innovative solution designed to help developers maintain healthy hand positions, prevent strain, and enhance overall productivity. Our custom-designed ergonomic mouse integrates advanced sensors to monitor hand positions and detect stress points, identifying risks for conditions such as carpal tunnel syndrome, arthritis, and other repetitive strain injuries. By continuously analyzing hand positions and pressure points, <b>GripGuardian</b> provides real-time feedback and alerts to encourage healthier hand postures.
            <br/><br/>
            Paired with a comprehensive web application, <b>GripGuardian</b> offers detailed analytics and personalized tips to users. The interactive platform displays hand position data, stress indicators, and usage patterns, helping developers understand their habits and make informed adjustments. With proactive ergonomic solutions, <b>GripGuardian</b> aims to reduce the incidence of repetitive strain injuries, fostering a healthier and more productive developer community.
            

            <div style={{ backgroundColor: '#3d516e',display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
             <img src="https://www.shutterstock.com/image-photo/anonymous-person-touching-his-wrist-600nw-2367133597.jpg" alt="React Image" style={{ width: '60%', height: 'auto' }} />
            </div>
            
            </div>
        </div>
    )
}