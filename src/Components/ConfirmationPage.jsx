import React from 'react'

function ConfirmationPage({status}) {
    console.log(status)
  return (
<>
{status===false?  (<div className="flex justify-center">
    <div className="box">
      <div className="inner">
        <span>Awaiting Confirmation</span>
      </div>
      <div className="inner">
        <span>Awaiting Confirmation</span>
      </div>
    </div>
  </div>):(
  <div className="flex justify-center">
    <div className="box1">
      <div className="inner2">
        <span>Confirmed</span>
      </div>
      <div className="inner2">
        <span>Confirmed</span>
      </div>
    </div>
  </div>)}
  </>
  )
}

export default ConfirmationPage