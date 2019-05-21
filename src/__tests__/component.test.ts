import * as ECS from "../";

class TestComponent extends ECS.Component {
    public test(): boolean {
        return true;
    }
    public serialize(): object {
        return { ok: true };
    }
    public deserialize(obj: object): TestComponent {
        return new TestComponent();
    }
}

test("component", () => {
    const system = new ECS.System();
    const entity = system.spawn();
    const comp = new TestComponent();
    entity.addComponent(comp);
    const list = entity.getComponents<TestComponent>(
        (el): el is TestComponent => el instanceof TestComponent,
    );
    expect(list.length).toBe(1);
    expect(list.map((com) => com.test())).toStrictEqual([true]);
});
