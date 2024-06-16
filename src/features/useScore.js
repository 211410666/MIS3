import { useQuery } from "@tanstack/react-query"
import { getScores,insertScore } from "../services/apiScores";
export const useScore = () => {
    const {
        data: rank,
        error,
        isLoading,
    } = useQuery({
        queryKey: ['rank'],
        queryFn: getScores, insertScore
    });
    return { rank, isLoading, error };
}