import React, { useState } from 'react'
import {Typography, Button, Form, Input} from 'antd';
import FileUpload from '../../utils/FileUpload';


const {TextArea} = Input;
 
const Continents = [
  {key:1, value:"Africa"},
  {key:2, value:"Europe"},
  {key:3, value:"Asia"},
  {key:4, value:"North America"},
  {key:5, value:"South America"},
  {key:6, value:"Australia"},
  {key:7, value:"Antactica"},
]

function UploadProductPage() {
  
  const [Title, setTitle] = useState("")
  const [Description, setDescription] = useState("")
  const [Price, setPrice] = useState(0)
  const [Continent, setContinent] = useState(1)
  const [Images, setImages] = useState(1)



  const titleChangeHandler = (event) => {
      setTitle(event.currentTarget.value)
  }
  
  const descriptionChangeHandler = (event) => {
      setDescription(event.currentTarget.value)
  }

  const priceChangeHandler = (event) => {
      setPrice(event.currentTarget.value)
  }

  const continentChangeHandler =(event) => {
    setContinent(event.currentTarget.value)
    console.log(event.currentTarget.value)
  }


  return (
    <div style ={{maxWidth:'700px',margin:'2em auto'}}>
        
        
        <div style={{textAlign:'center',marginButtom:'2em'}}>
            <h2 level={2}>여행 상품 업로드</h2>
        </div>
        
        <Form>
          
        <FileUpload/>  
          <br/>
          <label>이름</label>
          <Input onChange ={titleChangeHandler} value={Title}/>
          <br/>
          <br/>
          <label>설명</label>
          <TextArea onChange={descriptionChangeHandler}/>
          <br/>
          <br/>
          <label>가격($)</label>
          <Input onChange={priceChangeHandler}/>
          <br/>
          <br/>
          <select onChange={continentChangeHandler} value={Continent}>
              {Continents.map(item => (
                  <option key={item.key} value={item.key}>{item.value}</option>
              ))}
          </select>
          <br/>
          <br/>
          <Button>
            확인
          </Button>
        
        </Form>
    </div>
  )
}

export default UploadProductPage