function generateGrid(rows, cols, mines) {
    const grid = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push({
                open: false,
                mine: false,
                flag: false,
                count: 0,
            });
        }
        grid.push(row);
    }

    // Place mines
    let placedMines = 0;
    while (placedMines < mines) {
        const randRow = Math.floor(Math.random() * rows);
        const randCol = Math.floor(Math.random() * cols);
        if (!grid[randRow][randCol].mine) {
            grid[randRow][randCol].mine = true;
            placedMines++;
        }
    }

    // Calculate counts
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!grid[i][j].mine) {
                let count = 0;
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        const newRow = i + x;
                        const newCol = j + y;
                        if (
                            newRow >= 0 &&
                            newRow < rows &&
                            newCol >= 0 &&
                            newCol < cols &&
                            grid[newRow][newCol].mine
                        ) {
                            count++;
                        }
                    }
                }
                grid[i][j].count = count;
            }
        }
    }

    return grid;
}

const state = {
    difficulty: 'Easy',
    rows: 8,
    cols: 8,
    mines: 10,
    cells: [],
    flags: 0,
    timer: 0,
    gameStarted: false,
    gameOver: false,
};

const mutations = {
    SET_DIFFICULTY(state, { difficulty, rows, cols, mines }) {
        state.difficulty = difficulty;
        state.rows = rows;
        state.cols = cols;
        state.mines = mines;
    },
    SET_GRID(state, grid) {
        state.cells = grid;
    },
    SET_GAME_STARTED(state, started) {
        state.gameStarted = started;
    },
    SET_GAME_OVER(state, over) {
        state.gameOver = over;
    },
    OPEN_CELL(state, { row, col }) {
        state.cells[row][col].open = true;
    },
    PLACE_FLAG(state, { row, col }) {
        state.cells[row][col].flag = !state.cells[row][col].flag;
    },
    INCREMENT_TIMER(state) {
        state.timer++;
    },
    RESET_GAME(state) {
        state.timer = 0;
        state.flags = 0;
        state.gameStarted = false;
        state.gameOver = false;
        state.cells = generateGrid(state.rows, state.cols, state.mines);
    },
};

const actions = {
    startGame({ commit }, { difficulty }) {
        let rows, cols, mines;
        switch (difficulty) {
            case 'Easy':
                rows = 8;
                cols = 8;
                mines = 10;
                break;
            case 'Medium':
                rows = 16;
                cols = 16;
                mines = 40;
                break;
            case 'Hard':
                rows = 32;
                cols = 16;
                mines = 100;
                break;
            default:
                rows = 8;
                cols = 8;
                mines = 10;
        }
        commit('SET_DIFFICULTY', { difficulty, rows, cols, mines });
        commit('RESET_GAME');
        commit('SET_GAME_STARTED', true);
    },
    openCell({ commit, state, dispatch }, cell) {
        if (state.gameOver || cell.open || cell.flag) return;
        const { row, col } = cell;
        commit('OPEN_CELL', { row, col });
        if (cell.mine) {
            commit('SET_GAME_OVER', true);
        } else if (cell.count === 0) {
            dispatch('openAdjacentCells', cell);
        }
    },
    placeFlag({ commit }, cell) {
        if (cell.open) return;
        commit('PLACE_FLAG', cell);
    },
    openAdjacentCells({ state, dispatch }, cell) {
        const { row, col } = cell;
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                const newRow = row + x;
                const newCol = col + y;
                if (
                    newRow >= 0 &&
                    newRow < state.rows &&
                    newCol >= 0 &&
                    newCol < state.cols
                ) {
                    const adjacentCell = state.cells[newRow][newCol];
                    if (!adjacentCell.open && !adjacentCell.flag) {
                        dispatch('openCell', adjacentCell);
                    }
                }
            }
        }
    },
    incrementTimer({ commit }) {
        commit('INCREMENT_TIMER');
    },
    resetGame({ commit }) {
        commit('RESET_GAME');
    },
};

export default {
    state,
    mutations,
    actions,
};