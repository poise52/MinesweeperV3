import { createRouter, createWebHistory} from "vue-router";
import Settings from '../pages/Settings.vue';
import Game from '../pages/Game.vue';
import LeaderboardPage from '../pages/LeaderBoardPage.vue';

const routes = [
        { path: '/', name: 'Settings', component: Settings },
        { path: '/game', name: 'Game', component: Game },
        { path: '/leaderboard', name: 'Leaderboard', component: LeaderboardPage },
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
