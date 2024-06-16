import { useQueryClient } from "@tanstack/react-query";
import SectionCenter from '../ui/SectionCenter';
import Title from '../ui/Title';
import Button from '../ui/Button';
import { useState } from "react";
import TopicList from '../services/TopicList';
import { useNavigate } from "react-router-dom";

const Selection = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [userName, setUserName] = useState(localStorage.getItem('userName'));
    localStorage.setItem('TopicList', JSON.stringify(TopicList));

    const handleTopicList = () => {
        navigate('/all_topics');
    }
    const handleExam = () => {
        navigate('/exam');
    }
    const handleRank = () => {
        navigate('/rank');
    }

    return (
        <SectionCenter>
            <Title as='h1'>Hi~{userName}</Title>
            <Button onClick={handleExam}>我要考試了!</Button>
            <Button onClick={handleTopicList}>我要看題庫!</Button>
            <Button onClick={handleRank}>==RANK==</Button>
        </SectionCenter>
    )
}
export default Selection;