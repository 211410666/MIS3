import SectionCenter from "../ui/SectionCenter";
import BackHome from '../components/BackHome';
import { useState, useEffect } from "react";
import Title from "../ui/Title";
import Timer from "../components/Timer";
import SingleExam from "../components/SingleExam";
import { useNavigate } from "react-router-dom";
import { insertScore } from "../services/apiScores";
import toast from "react-hot-toast";

const Exam = () => {
    const navigate = useNavigate();
    const [topicList, setTopicList] = useState(JSON.parse(localStorage.getItem('TopicList')));
    const [currentTopic, setCurrentTopic] = useState(null);
    const [wrongList, setWrongList] = useState([]);
    const [score, setScore] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false); 

    const selectRandomTopic = () => {
        if (topicList.length > 0) {
            const randomIndex = Math.floor(Math.random() * topicList.length);
            setCurrentTopic(topicList[randomIndex]);
            const updatedTopicList = [...topicList];
            updatedTopicList.splice(randomIndex, 1);
            setTopicList(updatedTopicList);
        } else {
            setCurrentTopic(null);
        }
    };

    useEffect(() => {
        selectRandomTopic();
    }, []);

    useEffect(() => {
        if (topicList.length === 0 && currentTopic === null && !isSubmitted) {
            const userName = localStorage.getItem('userName');
            setIsSubmitted(true); 
            if (wrongList.length > 0) {
                localStorage.setItem('WrongList', JSON.stringify(wrongList));
                insertScore(userName, score, seconds, 1).then(() => {
                    navigate('/review');
                });
            } else {
                insertScore(userName, score, seconds, 2).then(() => {
                    navigate('/selection');
                });
            }
        }
    }, [topicList, currentTopic, wrongList, score, seconds, isSubmitted, navigate]);

    const onSelectNext = (sel, ans, topic) => {
        let newBonus = bonus;
        let newWrongList = wrongList;

        if (sel === ans && newBonus > 0) {
            toast.success('答對囉!');
            newBonus += 1;
        } else if (sel === ans && newBonus <= 0) {
            toast.success('答對囉!');
            newBonus = 1;
        } else if (sel !== ans && newBonus > 0) {
            toast.error(`答錯囉!答案是"${topic.options[ans-1]}"`);
            newBonus = -1;
            newWrongList = [...wrongList, topic];
        } else {
            toast.error(`答錯囉!答案是"${topic.options[ans-1]}"`);
            newBonus--;
            newWrongList = [...wrongList, topic];
        }

        setBonus(newBonus);
        setScore(prevScore => prevScore + newBonus);
        setWrongList(newWrongList);

        selectRandomTopic();
    };

    const handleTimeUpdate = (secs) => {
        setSeconds(secs);
    };

    return (
        <SectionCenter>
            <BackHome />
            <Title as='h2'>剩餘題目: {topicList.length}</Title>
            <Title as='h3'>分數: {score}</Title>
            {currentTopic && (
                <SingleExam currentTopic={currentTopic} onSelectNext={onSelectNext} />
            )}
            <Timer onTimeUpdate={handleTimeUpdate} />
        </SectionCenter>
    );
}

export default Exam;
