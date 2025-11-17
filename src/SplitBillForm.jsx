import React from 'react'
import { Button } from './Button'
const SplitBillForm = ({selectedFriend}) => {
  return (
    <div className="half-div">
                <h2>Split the Bill with {selectedFriend.name}</h2>
                <Button> Submit </Button>
              </div>
  )
}

export default SplitBillForm
