import supabase, { supabaseUrl } from './supabase';

export async function getScores() {
    const { data: ranks, error } = await supabase.from('rank').select('*');

    if (error) {
        console.error(error);
        throw new Error('rank could not be loaded');
    }

    console.log('ranks', ranks);

    return ranks;
}

export async function insertScore(name, score, seconds, mark) {
    console.log('mark', mark);
    console.log('name', name);
    console.log('score', score);
    console.log('seconds', seconds);

    const { data: rank, error } = await supabase
        .from('rank')
        .insert([
            { name: name, score: score, time: seconds },
        ])
        .select()


    if (error) {
        console.error(error);
        throw new Error('score could not be insert');
    }

    console.log('insertRank', rank);

    return rank;
}
