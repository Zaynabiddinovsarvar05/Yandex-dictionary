import axios from 'axios'
import React,{ useState} from 'react'
import { Adjective, BannerTitle, DictionaryWrapper, Half1, Half2, I, Span, Textarea } from './style'

function MainPage() {
    const [dictionary, setDictionary] = useState([])
    const apiKey = "dict.1.1.20211024T130654Z.58e0f82fc7d88c04.c6bb7adb85c482be8e8cb12015fd432444c382d2"


    const translate = (e)=>{
        const Link = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${apiKey}&lang=en-ru&text=${e.target.value}`
        console.log(Link);
        axios.get(Link)
        .then((res)=>{
            console.log(res.data.def);
            setDictionary(res.data.def)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <DictionaryWrapper>
            <BannerTitle>
                <p><span>Y</span>andex Dictionary</p>
            </BannerTitle>
            <Half1>
              <Textarea onChange={translate} rows="10"/>
              <br /><br /><br />
              <p>Created by Sarvar</p>
            </Half1>
            <Half2>
            {
                dictionary.map(({text,pos,ts,tr}, index)=>(
                    
                    <div key={index}>
                        <br />
                       <I>{text}</I> 
                       <br /><br />
                       <Adjective>
                           <p>{pos}</p>
                           <p>{ts}</p>
                       </Adjective>

                       <Span>{tr.map(({text,pos,gen,fr,syn}, index)=>(
                           <p>{text}</p>
                       ))}</Span>
                    </div>
                ))
            }
            </Half2>
        </DictionaryWrapper>
       
    )
}

export default MainPage
