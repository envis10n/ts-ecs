import * as ECS from "../";
import { Component, ComponentGuard } from "../component";

class TestComponent extends Component {
    public static guard(): ComponentGuard<TestComponent> {
        return (el): el is TestComponent => el instanceof TestComponent;
    }
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
    const list = entity.getComponents(TestComponent.guard());
    expect(list.length).toBe(1);
    expect(system.getEntitiesWithComponent(TestComponent.guard()).length).toBe(
        1,
    );
    expect(list.map((com) => com.test())).toStrictEqual([true]);
});
