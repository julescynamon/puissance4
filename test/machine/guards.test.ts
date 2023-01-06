import { describe, beforeEach, expect, it } from 'vitest';
import { InterpreterFrom, interpret } from 'xstate';
import { GameMachine } from '../../src/machine/gameMachine';
import { GameModel } from '../../src/machine/GameMachine';

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
});
