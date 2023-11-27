import React from 'react'
import "./Withdrawal_activation.css"

function Withdrawal_activation() {
  return (
    <div>
           <div className="main-content m-0 app-content">
        {/* <!-- container --> */}
        <div className="main-container m-0 container-fluid p-0">
            {/* <!-- breadcrumb --> */}
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content respon_aligment">
                    <span className="main-content-title mg-b-0 mg-b-lg-1">Activation Withdrawal</span>
                </div>
                <div className="justify-content-center mt-2">
                    <ol className="breadcrumb breadcrumb-style3 Br_ps">
                        <li className="breadcrumb-item tx-15">
                            <a href="javascript:void(0)"  className='header_breadcrum'>Withdrawal</a>
                        </li>
                        <li className="breadcrumb-item active g_clr" aria-current="page">Activation Withdrawal</li>
                    </ol>
                </div>
            </div>
            {/* <!-- /breadcrumb --> */}
           
            <div className="col-12 d-flex justify-content-center py-5">
                <div className="col-md-6 col-lg-5 col-xxl-4 col-10 width-mg  card1">
                    <div className="d-flex flex-column align-items-center  profile-login  py-4 shadow-withdraw" id="withdraw-inp">
                        <h2 className="h-color col-12 py-2 px-4 border_bottom text-clr">Activation Withdrawal</h2>
                        <div className="col-11 mt-3 row align-items-center">
                            <p className="col-5 m-0 p-0 text-clr">Wallet Net USD Value</p>
                            <input type="text" className="p-2 profile-border col-7" value="0"/>
                        </div>
                        <div className="col-11 mt-3 row align-items-center">
                            <p className="col-5 m-0 p-0 text-clr">Enter USD Amount</p>
                            <input type="text" className="p-2 profile-border col-7" maxlength="10" value=""/>
                        </div><div className="col-11 mt-3 row align-items-center">
                            <p className="col-5 m-0 p-0 text-clr">Tron</p>
                            <input type="text" className="p-2 profile-border col-7" value="0"/>
                        </div>
                        <div className="col-11 mt-3 row align-items-center">
                            <p className="col-5 m-0 p-0 text-clr">ULEv2</p>
                            <input type="text" className="p-2 profile-border col-7" value="0"/>
                        </div>
                        <button className="col-5 mt-3 py-3 bg-success btn mb-3" style={{color:'#000'}}>Withdrawal</button>
                    </div>
                </div>
            </div>
            {/* <!-- row closed --> */}
           
        </div>
        {/* <!-- /Container --> */}
    </div>
      
    </div>
  )
}

export default Withdrawal_activation
