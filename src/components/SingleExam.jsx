import styled from "styled-components";
import Title from "../ui/Title";
import Button from "../ui/Button";
const SingleE = styled.div`
    padding: 1rem;
`
const OptionList = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    width: 100%;
`

const SingleExam = ({ currentTopic,onSelectNext }) => {

    const handleClick = (sel,ans,topic) => {
        onSelectNext(sel,ans,topic);
    }
    console.log(currentTopic.title.length);
    return (
        <SingleE>
            <Title as='h5'>{currentTopic.title}</Title>
            <OptionList>
                {currentTopic.options.map((option, i) => (
                    <Button key={i} size="small" titleLength={option.length} onClick={()=>handleClick(i+1,currentTopic.answer,currentTopic)}>{option}</Button>
                ))}
            </OptionList>
        </SingleE>
    );
}

export default SingleExam;