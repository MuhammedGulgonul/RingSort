/**
 * Ring Sort Puzzle - Level Definitions
 * 60 levels with progressive difficulty
 * V10.5: FIXED LOCKS (Max 1 per level to prevent deadlock) + CALIBRATED DIFFICULTY
 */

const RING_COLORS = {
    red: { main: '#FF4444', light: '#FF7777', dark: '#CC2222' },
    blue: { main: '#3399FF', light: '#66BBFF', dark: '#1166CC' },
    green: { main: '#44DD44', light: '#77FF77', dark: '#22AA22' },
    yellow: { main: '#FFDD00', light: '#FFEE66', dark: '#CCAA00' },
    purple: { main: '#BB44FF', light: '#DD88FF', dark: '#8822CC' },
    orange: { main: '#FF8800', light: '#FFAA44', dark: '#CC6600' },
    pink: { main: '#FF66AA', light: '#FF99CC', dark: '#DD4488' },
    cyan: { main: '#00CCDD', light: '#44EEFF', dark: '#0099AA' }
};

const COLOR_KEYS = Object.keys(RING_COLORS);

const LEVEL_CONFIGS = [
    // 1-20: Standard (4 Rings)
    { colors: 2, cylinders: 4, ringsPerColor: 4, emptyCylinders: 2 },
    { colors: 2, cylinders: 4, ringsPerColor: 4, emptyCylinders: 2 },
    { colors: 3, cylinders: 5, ringsPerColor: 4, emptyCylinders: 2 },
    { colors: 3, cylinders: 5, ringsPerColor: 4, emptyCylinders: 2 },
    { colors: 3, cylinders: 5, ringsPerColor: 4, emptyCylinders: 2, locked: [2] }, // Level 5 - (5/2)-1=1.5→2
    { colors: 4, cylinders: 6, ringsPerColor: 4, emptyCylinders: 2 },
    { colors: 4, cylinders: 6, ringsPerColor: 4, emptyCylinders: 2 },
    { colors: 4, cylinders: 6, ringsPerColor: 4, emptyCylinders: 2, locked: [2] }, // Level 8 - (6/2)-1=2
    { colors: 4, cylinders: 6, ringsPerColor: 4, emptyCylinders: 2 },
    { colors: 5, cylinders: 7, ringsPerColor: 4, emptyCylinders: 2, mystery: true }, // Level 10
    { colors: 5, cylinders: 7, ringsPerColor: 4, emptyCylinders: 2 },
    { colors: 5, cylinders: 7, ringsPerColor: 4, emptyCylinders: 2, locked: [2] }, // Level 12 - (7/2)-1=2.5→2
    { colors: 5, cylinders: 7, ringsPerColor: 4, emptyCylinders: 2 },
    { colors: 5, cylinders: 7, ringsPerColor: 4, emptyCylinders: 2 },
    { colors: 5, cylinders: 7, ringsPerColor: 4, emptyCylinders: 2, mystery: true }, // Level 15
    { colors: 6, cylinders: 8, ringsPerColor: 4, emptyCylinders: 2 },
    { colors: 6, cylinders: 8, ringsPerColor: 4, emptyCylinders: 2, locked: [3] }, // Level 17 - (8/2)-1=3
    { colors: 6, cylinders: 8, ringsPerColor: 4, emptyCylinders: 2 },
    { colors: 6, cylinders: 8, ringsPerColor: 4, emptyCylinders: 2 },
    { colors: 6, cylinders: 8, ringsPerColor: 4, emptyCylinders: 2, mystery: true }, // Level 20

    // 21-40: Advanced (5 Rings)
    { colors: 4, cylinders: 6, ringsPerColor: 5, emptyCylinders: 2 },
    { colors: 4, cylinders: 6, ringsPerColor: 5, emptyCylinders: 2, locked: [2] }, // Level 22 - (6/2)-1=2
    { colors: 5, cylinders: 7, ringsPerColor: 5, emptyCylinders: 2 },
    { colors: 5, cylinders: 7, ringsPerColor: 5, emptyCylinders: 2 },
    { colors: 5, cylinders: 7, ringsPerColor: 5, emptyCylinders: 2, mystery: true }, // Level 25
    { colors: 6, cylinders: 8, ringsPerColor: 5, emptyCylinders: 2 },
    { colors: 6, cylinders: 8, ringsPerColor: 5, emptyCylinders: 2, locked: [3] }, // Level 27 - (8/2)-1=3
    { colors: 6, cylinders: 8, ringsPerColor: 5, emptyCylinders: 2 },
    { colors: 7, cylinders: 9, ringsPerColor: 5, emptyCylinders: 2 },
    { colors: 7, cylinders: 9, ringsPerColor: 5, emptyCylinders: 2, mystery: true }, // Level 30
    { colors: 7, cylinders: 9, ringsPerColor: 5, emptyCylinders: 2, locked: [3] }, // Level 31 - (9/2)-1=3.5→3
    { colors: 8, cylinders: 10, ringsPerColor: 5, emptyCylinders: 2 },
    { colors: 8, cylinders: 10, ringsPerColor: 5, emptyCylinders: 2 },
    { colors: 8, cylinders: 10, ringsPerColor: 5, emptyCylinders: 2 },
    { colors: 8, cylinders: 10, ringsPerColor: 5, emptyCylinders: 2, mystery: true }, // Level 35
    { colors: 8, cylinders: 10, ringsPerColor: 5, emptyCylinders: 2 },
    { colors: 7, cylinders: 9, ringsPerColor: 5, emptyCylinders: 2, locked: [3] }, // Level 37 - (9/2)-1=3.5→3
    { colors: 7, cylinders: 9, ringsPerColor: 5, emptyCylinders: 2 },
    { colors: 6, cylinders: 8, ringsPerColor: 5, emptyCylinders: 2 },
    { colors: 6, cylinders: 9, ringsPerColor: 5, emptyCylinders: 3, mystery: true }, // Level 40

    // 41-60: Expert (6 Rings)
    { colors: 4, cylinders: 6, ringsPerColor: 6, emptyCylinders: 2 },
    { colors: 5, cylinders: 7, ringsPerColor: 6, emptyCylinders: 2, locked: [2] }, // Level 42 - (7/2)-1=2.5→2
    { colors: 5, cylinders: 7, ringsPerColor: 6, emptyCylinders: 2 },
    { colors: 6, cylinders: 8, ringsPerColor: 6, emptyCylinders: 2 },
    { colors: 6, cylinders: 8, ringsPerColor: 6, emptyCylinders: 2, mystery: true }, // 45
    { colors: 6, cylinders: 8, ringsPerColor: 6, emptyCylinders: 2 },
    { colors: 7, cylinders: 9, ringsPerColor: 6, emptyCylinders: 2, locked: [3] }, // Level 47 - (9/2)-1=3.5→3
    { colors: 7, cylinders: 9, ringsPerColor: 6, emptyCylinders: 2 },
    { colors: 8, cylinders: 10, ringsPerColor: 6, emptyCylinders: 2 },
    { colors: 8, cylinders: 10, ringsPerColor: 6, emptyCylinders: 2, mystery: true }, // 50
    { colors: 8, cylinders: 10, ringsPerColor: 6, emptyCylinders: 2 },
    { colors: 8, cylinders: 10, ringsPerColor: 6, emptyCylinders: 2, locked: [4] }, // Level 52 - (10/2)-1=4
    { colors: 8, cylinders: 10, ringsPerColor: 6, emptyCylinders: 2 },
    { colors: 8, cylinders: 10, ringsPerColor: 6, emptyCylinders: 2 },
    { colors: 8, cylinders: 10, ringsPerColor: 6, emptyCylinders: 2, mystery: true }, // 55
    { colors: 8, cylinders: 10, ringsPerColor: 6, emptyCylinders: 2 },
    { colors: 8, cylinders: 10, ringsPerColor: 6, emptyCylinders: 2 },
    { colors: 8, cylinders: 10, ringsPerColor: 6, emptyCylinders: 2 },
    { colors: 8, cylinders: 10, ringsPerColor: 6, emptyCylinders: 2 },
    { colors: 8, cylinders: 10, ringsPerColor: 6, emptyCylinders: 2, mystery: true } // 60
];

class LevelManager {
    constructor() {
        this.totalLevels = LEVEL_CONFIGS.length;
    }

    getConfig(levelNum) {
        const index = Math.min(levelNum - 1, LEVEL_CONFIGS.length - 1);
        return { ...LEVEL_CONFIGS[index] };
    }

    selectColors(count) {
        const shuffled = [...COLOR_KEYS].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    generateLevel(levelNum) {
        const config = this.getConfig(levelNum);
        const { colors, cylinders, ringsPerColor } = config;

        // 1. SOLVED STATE
        let state = [];
        const selectedColors = this.selectColors(colors);
        const lockedPoles = config.locked || [];

        // V15.12: Ensure locked poles start EMPTY for solvability
        // Non-locked cylinders get the colors
        let colorIndex = 0;
        for (let i = 0; i < cylinders; i++) {
            if (lockedPoles.includes(i)) {
                // Locked poles start empty - they're bonus space after unlocking
                state.push([]);
            } else if (colorIndex < colors) {
                // Fill with a color
                const cylinder = [];
                for (let r = 0; r < ringsPerColor; r++) cylinder.push(selectedColors[colorIndex]);
                state.push(cylinder);
                colorIndex++;
            } else {
                // Empty cylinder
                state.push([]);
            }
        }

        // 2. SCRAMBLE
        // 2. SCRAMBLE (V15.8: Maximum Mixing)
        // User feedback: mixing is too weak, same colors stacking
        const baseMoves = 40 + (ringsPerColor - 4) * 12; // Much higher base
        const levelFactor = Math.floor(levelNum * 2.0); // Even higher multiplier
        const scrambleMoves = baseMoves + levelFactor;

        // SOLVABILITY: Pick a "Safety Color" that is forbidden from entering Locked Poles.
        const hasLocks = lockedPoles.length > 0;
        const safetyColor = hasLocks ? selectedColors[0] : null;

        let lastFrom = -1;
        let lastTo = -1;
        let actualMoves = 0;

        for (let i = 0; i < scrambleMoves; i++) {
            const moves = [];

            for (let from = 0; from < state.length; from++) {
                if (state[from].length === 0) continue;

                // Stronger anti-backtrack: 85% chance to skip reverse moves
                if (from === lastTo && Math.random() > 0.15) continue;

                const ring = state[from][state[from].length - 1];

                for (let to = 0; to < state.length; to++) {
                    if (from === to) continue;

                    const targetCyl = state[to];
                    if (targetCyl.length >= ringsPerColor) continue;

                    // Locked Pole Protection
                    if (hasLocks && ring === safetyColor && lockedPoles.includes(to)) {
                        continue;
                    }

                    // V15.11: ULTRA Mixing + Consecutive Same Color Prevention
                    // User: still seeing 3+ same colors stacked
                    let weight = 1.0;

                    if (targetCyl.length > 0) {
                        const topColor = targetCyl[targetCyl.length - 1];

                        if (topColor === ring) {
                            // Check for consecutive same colors
                            let consecutiveCount = 1;
                            for (let j = targetCyl.length - 1; j >= 0; j--) {
                                if (targetCyl[j] === ring) consecutiveCount++;
                                else break;
                            }

                            // EXTREME punishment that increases with consecutive count
                            // 2 same: 0.01, 3+ same: 0.001 (virtually impossible)
                            weight = consecutiveCount >= 2 ? 0.001 : 0.01;
                        } else {
                            // MASSIVE reward for mixing different colors
                            weight = 10.0;
                        }
                    } else {
                        // Moving to empty is very good (spreads colors)
                        weight = 5.0;
                    }

                    moves.push({ from, to, weight });
                }
            }

            if (moves.length > 0) {
                // Weighted Random Selection
                const totalWeight = moves.reduce((sum, m) => sum + m.weight, 0);
                let randomVal = Math.random() * totalWeight;
                let selectedMove = moves[0];

                for (const move of moves) {
                    randomVal -= move.weight;
                    if (randomVal <= 0) {
                        selectedMove = move;
                        break;
                    }
                }

                const ring = state[selectedMove.from].pop();
                state[selectedMove.to].push(ring);

                lastFrom = selectedMove.from;
                lastTo = selectedMove.to;
                actualMoves++;
            }
        }

        // V15.11: Balanced Dynamic Move Limits
        // User: "vur dedik öldürdün" - need smart balance  
        // Formula: complexity-based but TIGHT
        const complexity = colors * ringsPerColor;

        // maxMoves: complexity × 0.8 (tight but achievable)
        // Level 1 (3×4=12): 10 moves
        // Level 10 (4×4=16): 13 moves
        // Level 20 (5×4=20): 16 moves  
        let maxMoves = Math.max(10, Math.ceil(complexity * 1.0));

        // minMoves: 65% of maxMoves (harder star requirements)
        let minMoves = Math.ceil(maxMoves * 0.65);

        // V15.7: Mystery Mode Bonus - Players need extra moves for trial & error
        // Bonus scales from +2 (early levels) to +20 (late levels)
        let finalMaxMoves = maxMoves;
        if (config.mystery) {
            const mysteryBonus = Math.min(20, Math.max(2, Math.floor(levelNum * 0.5)));
            finalMaxMoves = maxMoves + mysteryBonus;
        }

        return {
            levelNum,
            config,
            cylinders: state,
            selectedColors,
            minMoves: minMoves,
            maxMoves: finalMaxMoves
        };
    }

    getColorProps(colorKey) {
        return RING_COLORS[colorKey];
    }
}

window.LevelManager = LevelManager;
window.RING_COLORS = RING_COLORS;
window.COLOR_KEYS = COLOR_KEYS;
window.TOTAL_LEVELS = LEVEL_CONFIGS.length;
