import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TiArrowBackOutline } from "react-icons/ti";
import Title from "../ui/Title";
const BackBtn = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 999;
    font-size: 7rem;
    background-color: black;
    color: yellow;
    border-radius: 50%;
    padding: 1rem;
    opacity: 0.4;
`

const BackHome = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/selection');
    }
    return (
        <BackBtn onClick={handleClick}><TiArrowBackOutline /></BackBtn>
    )
}
export default BackHome;