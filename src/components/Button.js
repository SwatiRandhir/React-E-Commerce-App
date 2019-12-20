import styled from 'styled-components';


export  const ButtonContainer = styled.button`
text-transform:capitalalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid black;
border-color:${props=>(props.cart?"#ff5733":"#007bff !important")};
color:${props=>(props.cart?"#ff5733":"#000")};
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointre;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:${props=>(props.cart?"#ff5733":"  #007bff !important ")};
    color:#fff;
    border:0.05rem solid white;

}
$:focus{
    outline:none;
}
`;


