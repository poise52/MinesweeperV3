import { createStore} from 'vuex';
import game from './GameJS.js';
import leaderboard from './leaderboard.js';

const store = createStore({
    modules: {
        game,
        leaderboard,
    },
});

export default store;