import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../ui/Title";
import Button from "../ui/Button";

const SingleE = styled.div`
    padding: 1rem;
`;

const OptionList = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    width: 100%;
`;

const shuffleArray = (array) => {
    // Durstenfeld shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const SingleExam = ({ currentTopic, onSelectNext }) => {
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const [answerIndex, setAnswerIndex] = useState(null);

    useEffect(() => {
        if (currentTopic) {
            const options = currentTopic.options.map((option, index) => ({
                text: option,
                originalIndex: index+1
            }));
            const shuffled = shuffleArray([...options]);
            console.log('shu',shuffled);
            console.log('ans',currentTopic.answer);
            const newAnswerIndex = options.findIndex(
                (option) => option.originalIndex === currentTopic.answer
            );
            console.log('newAnswerIndex',newAnswerIndex+1);
            setShuffledOptions(shuffled);
            setAnswerIndex(newAnswerIndex+1);
        }
    }, [currentTopic]);

    const handleClick = (selectedOptionIndex, correctAnswerIndex, topic) => {
        console.log('selectedOptionIndex',selectedOptionIndex);
        console.log('correctAnswerIndex',correctAnswerIndex);
        console.log('topic',topic);
        onSelectNext(selectedOptionIndex, correctAnswerIndex, topic);
    };

    return (
        <SingleE>
            <Title as="h5">{currentTopic.title}</Title>
            <OptionList>
                {shuffledOptions.map((option, i) => (
                    <Button
                        key={i}
                        size="small"
                        titleLength={option.text.length}
                        onClick={() => handleClick(option.originalIndex, answerIndex, currentTopic)}
                    >
                        {option.text}
                    </Button>
                ))}
            </OptionList>
        </SingleE>
    );
};

export default SingleExam;
