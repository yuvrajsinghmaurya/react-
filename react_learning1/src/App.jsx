

import React from 'react'
import FromAdding from './components/FromAdding'
import ControlledCom from './components/ControlledCom'
import FormSumit from './components/FormSumit'
import Textarea from './components/Textarea'
import SelectForm from './components/SelectForm'
import MultipalInputs from './components/MultipalInputs'
import CheckBox from './components/CheckBox'

const App = () => {
  return (
    <div>
      {/* from adding in react */}
      <FromAdding/>

      {/* controlled components  form*/}
      <ControlledCom/>
      {/* now handle form sumbit */}
      <FormSumit/>

      {/* text area in react  */}
      <Textarea/>

      {/* selected form */}
      <SelectForm/>

      {/* handle multipale inputs  */}
      <MultipalInputs/>

      {/* handle checkbox */}
      <CheckBox/>

    </div>
  )
}

export default App
