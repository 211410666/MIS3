import { useQueryClient, useQuery } from "@tanstack/react-query";
import SectionCenter from '../ui/SectionCenter';
import Title from '../ui/Title';
import BackHome from '../components/BackHome';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getScores } from "../services/apiScores";
import { TbPentagonNumber1 } from "react-icons/tb";
import RankTable from "../components/RankTable";

const Rank = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [sortedRanks, setSortedRanks] = useState([]);

    // 使用 useQuery 钩子获取数据
    const { data: ranks, isLoading, isError } = useQuery({
        queryKey: 'scores',
        queryFn: getScores,
    });

    // 对 ranks 进行排序，score 降序，score 相同时 time 升序
    useEffect(() => {
        if (ranks) {
            // 使用深拷贝对 ranks 进行操作，避免直接改变原始数据
            const sorted = [...ranks];
            sorted.sort((a, b) => {
                // 按 score 降序排列
                if (b.score !== a.score) {
                    return b.score - a.score;
                }
                // 如果 score 相同，按 time 升序排列
                return a.time - b.time;
            });
            setSortedRanks(sorted);
        }
    }, [ranks]);

    // 如果数据加载中或者出现错误，展示不同的 UI
    if (isLoading) {
        return (
            <SectionCenter>
                <Title as='h1'>Loading...</Title>
                <BackHome />
            </SectionCenter>
        );
    }

    if (isError) {
        return (
            <SectionCenter>
                <Title as='h1'>Error fetching data</Title>
                <BackHome />
            </SectionCenter>
        );
    }

    // 成功加载数据后，展示实际的数据
    if (sortedRanks.length === 0) {
        return <Title as='h1'>Loading...</Title>; // 如果 sortedRanks 还没有数据，可以根据需要处理
    }

    return (
        <SectionCenter>
            <Title as='h1'>Rank</Title>
            <RankTable ranks={sortedRanks} /> {/* 确保传入 sortedRanks */}
            <BackHome />
        </SectionCenter>
    );
};

export default Rank;
