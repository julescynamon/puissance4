export const canJoinGuard = (
    context: GameContext,
    event: GameEvent<'join'>
) => {
    return (
        context.players.length < 2 &&
        context.players.find((p) => p.id === event.playerId) === undefined
    );
};
