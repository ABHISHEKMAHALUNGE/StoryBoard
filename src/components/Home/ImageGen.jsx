import React, { useRef, useState } from 'react';
import '../CSS/ImageGen.css';
import image2 from '../assets/bg.png';
import ImageCards from './ImageCards';
import PanelCard from './PanelCard'
import { TextField } from '@mui/material';



const ImageGen = () => {

  const [loading, setLoading] = useState(false);

  const [imageURL1, setImageURL1] = useState(image2);
  const [imageURL2, setImageURL2] = useState(image2); 
  const [imageURL3, setImageURL3] = useState(image2); 
  const [imageURL4, setImageURL4] = useState(image2); 
  const [imageURL5, setImageURL5] = useState(image2); 
  const [imageURL6, setImageURL6] = useState(image2);
  const [imageURL7, setImageURL7] = useState(image2); 
  const [imageURL8, setImageURL8] = useState(image2); 
  const [imageURL9, setImageURL9] = useState(image2); 
  const [imageURL10, setImageURL10] = useState(image2);  

  const panel1 = useRef(null);
  const panel2 = useRef(null);
  const panel3 = useRef(null);
  const panel4 = useRef(null);
  const panel5 = useRef(null);
  const panel6 = useRef(null);
  const panel7 = useRef(null);
  const panel8 = useRef(null);
  const panel9 = useRef(null);
  const panel10 = useRef(null);
  
  const speech_bubble1 = useRef(null);
  const speech_bubble2 = useRef(null);
  const speech_bubble3 = useRef(null);
  const speech_bubble4 = useRef(null);
  const speech_bubble5 = useRef(null);
  const speech_bubble6 = useRef(null);
  const speech_bubble7 = useRef(null);
  const speech_bubble8 = useRef(null);
  const speech_bubble9 = useRef(null);
  const speech_bubble10 = useRef(null);


 

  async function query(data,image) {
    setLoading(true);
    const response = await fetch(
      "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: { 
          "Accept": "image/png",
          "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
          "Content-Type": "application/json" 
        },
        method: "POST",
        body: JSON.stringify({ "inputs": data }), 
      }
    );
    const result = await response.blob(); 
    image(URL.createObjectURL(result));
    setLoading(false); 
  }

  const handleImageGeneration = () => {
    let panel = [panel1, panel2, panel3, panel4, panel5, panel6, panel7, panel8, panel9, panel10]
    let speech_bubble = [speech_bubble1,speech_bubble2, speech_bubble3, speech_bubble4, speech_bubble5, speech_bubble6, speech_bubble7, speech_bubble8, speech_bubble9, speech_bubble10]
    let images = [setImageURL1, setImageURL2,setImageURL3, setImageURL4, setImageURL5, setImageURL6, setImageURL7, setImageURL8, setImageURL9, setImageURL10];
    
    if (panel[0]?.current.value.trim()===""){
      alert('Enter the prompt first');
    }

    for (let i=0;i<10;i++){
      let text = panel[i]?.current.value.trim();
      if (text === "") {
        return;
      }
      
      if (speech_bubble[i]?.current.value.trim()!==""){
        text = text + " with speech bubble  written in english language containing" + speech_bubble[i].current.value.trim(); 
      }
      query(text,images[i]);
    }
  };




  return (

    <div className='body'>

      <div className="title">StoryBoard</div>

      <PanelCard ref1={panel1} ref2={speech_bubble1} placeholder1='Text'/>
      <div className="default-image" id="img1">
          <img src={imageURL1} alt='genImg'></img>
          <div className="links">
          <a href="#img2">Next</a>
          </div>
        </div>
      <PanelCard ref1={panel2} ref2={speech_bubble2} placeholder1='Text'/>
        <ImageCards id="img2" imageURL={imageURL2} Prev="#img1" Next="#img3"/>
      <PanelCard ref1={panel3} ref2={speech_bubble3} placeholder1='Text'/>
        <ImageCards id="img3" imageURL={imageURL3} Prev="#img2" Next="#img4"/>
      <PanelCard ref1={panel4} ref2={speech_bubble4} placeholder1='Text'/>
        <ImageCards id="img4" imageURL={imageURL5} Prev="#img3" Next="#img6"/>
      <PanelCard ref1={panel5} ref2={speech_bubble5} placeholder1='Text'/>
        <ImageCards id="img5" imageURL={imageURL7} Prev="#img4" Next="#img8"/>
      <PanelCard ref1={panel6} ref2={speech_bubble6} placeholder1='Text'/>
        <ImageCards id="img6" imageURL={imageURL9} Prev="#img5" Next="#img10"/>
      <PanelCard ref1={panel7} ref2={speech_bubble7} placeholder1='Text'/>
        <ImageCards id="img7" imageURL={imageURL6} Prev="#img6" Next="#img7"/>
      <PanelCard ref1={panel8} ref2={speech_bubble8} placeholder1='Text'/>
        <ImageCards id="img8" imageURL={imageURL4} Prev="#img7" Next="#img5"/>
      <PanelCard ref1={panel9} ref2={speech_bubble9} placeholder1='Text'/>
        <ImageCards id="img9" imageURL={imageURL8} Prev="#img8" Next="#img9"/>
      <PanelCard ref1={panel10} ref2={speech_bubble10} placeholder1='Text'/>
      <div className="default-image" id="img10">
          <img src={imageURL10} alt='genImg'></img>
          <div className="links">
          </div> 
        </div>
        {(() => {
          if (loading) {
            return <div className="btn" onClick={handleImageGeneration}>Wait....</div>;
          } else {
            return <div className="btn" onClick={handleImageGeneration}>Create</div>;
          }
        })()}
    </div>
  );
}


export default ImageGen;
