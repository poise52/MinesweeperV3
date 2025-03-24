const state = {
    difficulty: 'Easy',
    grid: [],
    mines: 0,
    flags: 0,
    timer: 0,
    gameStarted: false,
};

const mutations = {
    SET_DIFFICULTY(state, difficulty) {
        state.difficulty = difficulty;
    },
    SET_GRID(state, grid) {
        state.grid = grid;
    },
    SET_MINES(state, mines) {
        state.mines = mines;
    },
    SET_FLAGS(state, flags) {
        state.flags = flags;
    },
    SET_TIMER(state, timer) {
        state.timer = timer;
    },
    SET_GAME_STARTED(state, started) {
        state.gameStarted = started;
    },
};

const actions = {
    startGame({ commit }, { difficulty, grid, mines }) {
        commit('SET_DIFFICULTY', difficulty);
        commit('SET_GRID', grid);
        commit('SET_MINES', mines);
        commit('SET_FLAGS', 0);
        commit('SET_TIMER', 0);
        commit('SET_GAME_STARTED', true);
    },
    stopGame({ commit }) {
        commit('SET_GAME_STARTED', false);
    },
    incrementTimer({ commit, state }) {
        commit('SET_TIMER', state.timer + 1);
    },
};

export default {
    state,
    mutations,
    actions,
};