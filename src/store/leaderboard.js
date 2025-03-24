const state = {
    leaderboard: JSON.parse(localStorage.getItem('leaderboard')) || [],
};

const mutations = {
    ADD_TO_LEADERBOARD(state, player) {
        state.leaderboard.push(player);
        state.leaderboard.sort((a, b) => a.time - b.time);
        if (state.leaderboard.length > 10) {
            state.leaderboard.pop();
        }
        localStorage.setItem('leaderboard', JSON.stringify(state.leaderboard));
    },
};

const actions = {
    addPlayerToLeaderboard({ commit }, player) {
        commit('ADD_TO_LEADERBOARD', player);
    },
};

export default {
    state,
    mutations,
    actions,
};