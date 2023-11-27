import React, { useState } from 'react'
import Table from '../Table/Table'
import Table_buttons from '../Table_buttons/Table_buttons';

function Dividend() {
    var [reward_income,set_reward_income]= new useState({
        cols:[
                {Header: 'S.No',accessor:'sr'},
                {Header:'From Id',accessor:'income'},
                {Header:'	Level',accessor:'date'},
                {Header:'Reward',accessor:'Reward'},
                { Header: '	Date & Time', accessor: 'Sports_Bonus' },
                // { Header: '	Date & Time', accessor: 'Net_Income' },
            ],
        rows:[
                {sr:'1',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
                {sr:'2',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
                {sr:'3',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
        ]});
  return (
    <div>
         <div className=" m-0 app-content">
        {/* <!-- container --> */}
        <div className="p-0 m-0 container-fluid">
            {/* <!-- breadcrumb --> */}
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content respon_aligment">
                    <span className="main-content-title mg-b-0 mg-b-lg-1">Dividend Reward </span>
                </div>
                <div className="justify-content-center mt-2">
                    <ol className="breadcrumb breadcrumb-style3 Br_ps">
                        <li className="breadcrumb-item tx-15">
                            <a href="javascript:void(0)"  className='header_breadcrum'>All Reward</a>
                        </li>
                        <li className="breadcrumb-item active g_clr" aria-current="page">Dividend Reward</li>
                    </ol>
                </div>
            </div>
            {/* <!-- /breadcrumb --> */}
  
                                         
                                            <Table
                                            data={reward_income.rows}
                                            columns={reward_income.cols}/>
                                            <Table_buttons/>
         
        </div>
        {/* <!-- /Container --> */}
    </div>
      
    </div>
  )
}

export default Dividend
