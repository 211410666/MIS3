import { useQueryClient } from "@tanstack/react-query";
import ListCenter from "../ui/ListCenter";
import { useEffect, useState, useCallback } from "react"; // 引入 useCallback
import { useNavigate } from "react-router-dom";
import SingleTopic from "../ui/SigleTopic";
import Title from "../ui/Title";
import BackHome from "../components/BackHome";
import { TiDelete } from "react-icons/ti";

const All_topic = () => {
    const [topicList, setTopicList] = useState(JSON.parse(localStorage.getItem('TopicList')));

    const handleDelete = useCallback((index) => { // 使用 useCallback 包裹函數
        if (index >= 0 && index < topicList.length) {
            setTopicList(topicList.filter((_, i) => i !== index));
        } else {
            console.error('Invalid index:', index);
        }
    }, [topicList]); // 依賴項為 topicList

    return (
        <ListCenter>
            {topicList?.map((topic, index) => {
                let answer = topic.answer;
                return (
                    <SingleTopic key={index}>
                        <Title as='h2'>
                            {index + 1 + "." + topic.title}
                            <button onClick={() => handleDelete(index)} // 使用箭頭函數包裹以傳遞參數
                                style={{ alignSelf: 'flex-start', fontSize: '3.2rem', color: 'red' }}>
                                <TiDelete />
                            </button>
                        </Title>

                        {topic.options.map((option, i) => (
                            <Title
                                as='h3'
                                key={i}
                                id={i + 1}
                                style={{
                                    backgroundColor: (i + 1) === answer ? '#77cc77' : 'transparent',
                                    border: (i + 1) === answer ? 'solid 1px #bd9235' : 'none',
                                    padding: '5px',
                                    borderRadius: '3px'
                                }}
                            >
                                ({String.fromCharCode(65 + i)}) {option}
                            </Title>
                        ))}
                    </SingleTopic>
                );
            })}
            <BackHome />
        </ListCenter>
    );
};

export default All_topic;
