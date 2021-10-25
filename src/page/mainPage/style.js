import styled from "styled-components"

export const DictionaryWrapper = styled.div`
  width:1100px;
  margin:auto;
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  border: 1px solid black;
`;

export const BannerTitle = styled.div`
  padding: 10px;
  width: 1100px;
  border: 1px solid black;
  background-color: silver;
  p{
    font-size: 23px;
    font-weight: bold;
    font-family: sans-serif;
    color: black;
    text-align: center;
    span{
      color:red;

    }
  }
`;

export const Half1 = styled.div`
   width: 50%;
   background-color: silver;
   padding: 20px;
   p{
     font-size: 20px;
     font-weight: bold;
     font-family: 'Poppins' ;
   }
`;

export const Half2 = styled.div`
   width: 50%;
   padding: 10px;
   background-color: silver;
   border-left: 1px dashed black;
   p{
     padding: 5px;
     color: black;
     font-size:18px;
     font-family:'Poppins';
   }
`;
export const Adjective = styled.div`
    display: flex;
    padding: 5px;
    justify-content: space-between;
    p{
      border-bottom: 1px solid black;
      color: black;
      padding: 8px;
}
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
`;

export const Span = styled.span`
  padding-left: 20px;
  padding:10px;
  width: 100px;
  p{
     color: black;
     border-bottom: 1px solid black;
     font-size:18px;
     font-family:'Poppins';
  }
`;

export const I = styled.p`
   border-bottom: 1px solid black;
   padding:15px;
`;