import React from "react";

const Header = () =>{
    return (

        <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://s.yimg.com/uu/api/res/1.2/40M8x8zmPj3ASZn8Dgv1Zg--~B/aD0yNzYwO3c9NDkxMjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-12/2c59e140-34cd-11eb-8fff-58c2e3e66f6e')",
        height: '500px',
        backgroundSize: 'cover', // Set background size to cover
        backgroundPosition: 'center'
    }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' , padding: '20px' }} >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div
               className='text-white'>
              <h1 className='mb-3' style={{color: "#ceded1"}}>Join us in uplifting those with disabilities through your contributions</h1>
              <h4 className='mb-3'style={{color: "silver"}}>Empower individuals with disabilities through your generous donations</h4>
              <button 
              type="button"
              tag="a" outline size="lg" style={{ backgroundColor:"#e62981", color:"white"}}>
                Donate
              </button>
            </div>
          </div> 
        </div>
      </div>
    );
}

export default Header;