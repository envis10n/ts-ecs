import * as ECS from "../";

test("spawn", () => {
    const system = new ECS.System();
    const entity = system.spawn();
    expect(system.exists(entity.uuid)).toBe(true);
});
