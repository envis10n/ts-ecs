import { Component } from "./component";
import { Entity } from "./entity";
import { System, SystemCallback, SystemGuard } from "./system";

export type ComponentTuple = Array<Component<any>>;

export type EntityGuard<T extends ComponentTuple> = (
    tuple: Entity<ComponentTuple>,
    index: number,
) => tuple is T;

export class World {
    private entities: Array<Entity<ComponentTuple>> = [];
    private systems: Array<System<any>> = [];
    private shouldRun: boolean = false;
    private lastTick: number = Date.now();
    private tickPeriod: number;
    private nextTick: number = 0;
    constructor(tickFrequency: number = 60) {
        this.tickPeriod = 1000 / tickFrequency;
    }
    public spawn<T extends ComponentTuple>(...components: T): number {
        const id = this.entities.push(components) - 1;
        return id;
    }
    public register<T extends ComponentTuple>(
        system: SystemCallback<T>,
        guard: SystemGuard<T>,
    ): void {
        this.systems.push({
            callback: system,
            guard,
        });
    }
    public run(): void {
        this.shouldRun = true;
        this.lastTick = Date.now();
        setImmediate(this.tick.bind(this));
    }
    public stop(): void {
        this.shouldRun = false;
    }
    public get<T extends ComponentTuple>(id: number): Entity<T> {
        return this.entities[id] as Entity<T>;
    }
    private tick(): void {
        if (this.shouldRun) {
            if (Date.now() >= this.nextTick) {
                this.nextTick = Date.now() + this.tickPeriod;
                const delta = Date.now() - this.lastTick;
                this.lastTick = Date.now();
                for (const system of this.systems) {
                    this.entities
                        .filter(system.guard)
                        .forEach((entity, index) => {
                            system.callback(entity, index, delta);
                        });
                }
            }
            setImmediate(this.tick.bind(this));
        }
    }
}
