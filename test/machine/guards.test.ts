import { describe, beforeEach, expect, it } from 'vitest';
import { InterpreterFrom, interpret } from 'xstate';
import {
    GameStates,
    GameMachine,
    GameModel,
    makeGame,
} from '../../src/machine/GameMachine';
import { PlayerColor, GameContext } from '../../src/types';
import { canDropGuard } from '../../src/machine/guards';

describe('machine/guards', () => {
    describe('canJoinGame', () => {
        let machine: interpreterFrom<typeof gameMachine>;

        beforeEach(() => {
            machine = interpret(GameMachine).start();
        });

        it('should let a player join', () => {
            expect(machine.send(GameModel.events.join('1', '1')).changed).toBe(
                true
            );
        });

        it('should not let me join a game twice', () => {
            expect(machine.send(GameModel.events.join('1', '1')).changed).toBe(
                true
            );
            expect(machine.send(GameModel.events.join('1', '1')).changed).toBe(
                false
            );
        });
    });

    describe('dropToken', () => {
        const machine = makeGame(GameStates.PLAY, {
            players: [
                {
                    id: '1',
                    color: PlayerColor.RED,
                    name: '1',
                },
                {
                    id: '2',
                    color: PlayerColor.YELLOW,
                    name: '2',
                },
            ],
            currentPlayer: '1',
            grid: [
                ['E', 'E', 'E', 'E', 'E', 'E', 'R'],
                ['E', 'E', 'E', 'E', 'E', 'R', 'Y'],
                ['E', 'E', 'E', 'E', 'E', 'R', 'R'],
                ['E', 'E', 'E', 'E', 'E', 'R', 'Y'],
                ['E', 'E', 'E', 'E', 'E', 'Y', 'R'],
                ['E', 'E', 'E', 'E', 'E', 'Y', 'Y'],
            ],
        });

        it('should let me drop a token ', () => {
            expect(
                machine.send(GameModel.events.dropToken('1', 0)).changed
            ).toBe(true);
            expect(machine.state.context.grid[5][0]).toBe(PlayerColor.RED);
            expect(machine.state.value).toBe(GameStates.PLAY);
            expect(machine.state.context.currentPlayer).toBe('2');
        });

        it('should not let me drop the token on filled columns ', () => {
            expect(
                machine.send(GameModel.events.dropToken('1', 6)).changed
            ).toBe(false);
        });

        it('should make me win ', () => {
            expect(
                machine.send(GameModel.events.dropToken('1', 5)).changed
            ).toBe(true);
            expect(machine.state.value).toBe(GameStates.VICTORY);
        });
    });
});
