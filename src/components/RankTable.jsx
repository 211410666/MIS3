import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width: 80%;
    border-collapse: collapse;
    font-size: 1.5rem;

    th, td {
        padding: 1rem;
        text-align: left;
        border: 1px solid #434588;
    }

    th {
        background-color: #c4c1c1;
        text-align: center;
    }

    tr:nth-child(even) {
        background-color: #e2dddd;
    }
    tr:nth-child(odd) {
        background-color: #f9f9f9;
    }
    td:nth-child(odd){
        text-align: center;
    }
`

const RankTable = ({ ranks }) => {
    // 只取前10笔数据
    const topRanks = ranks ? ranks.slice(0, 10) : [];

    return (
        <Table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {topRanks.map((rank, index) => (
                    <tr key={rank.id}>
                        <td>{index + 1}</td>
                        <td>{rank.name}</td>
                        <td>{rank.score - rank.time * 2}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default RankTable;
