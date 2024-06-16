import React from 'react';
import SectionCenter from '../ui/SectionCenter';
import styled from 'styled-components';

const Table = styled.table`
    width: 80%;
    border-collapse: collapse;
    font-size: 2rem;


    th, td {
        padding: 1rem;
        text-align: left;
        border: 1px solid #434588;
    }

    th {
        background-color: #c4c1c1;
    }

    tr:nth-child(even) {
        background-color: #e2dddd;
    }
    tr:nth-child(odd) {
        background-color: #f9f9f9;
    }
`

const RankTable = ({ ranks }) => {
    return (
            <Table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Time (s)</th>
                    </tr>
                </thead>
                <tbody>
                    {ranks && ranks.map((rank, index) => (
                        <tr key={rank.id}>
                            <td>{index + 1}</td>
                            <td>{rank.name}</td>
                            <td>{rank.score}</td>
                            <td>{Math.floor(rank.time / 60)}m : {rank.time % 60}s</td>

                        </tr>
                    ))}
                </tbody>
            </Table>
    );
};

export default RankTable;
