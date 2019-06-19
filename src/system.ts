import { Component } from "./component";
import { Entity } from "./entity";

export type SystemCallback<T> = (entity: T, id: number, delta: number) => void;
export type SystemGuard<T extends Array<Component<any>>> = (
    entity: Entity<Array<Component<any>>>,
    index: number,
    array: Array<Entity<Array<Component<any>>>>,
) => entity is T;

export interface System<T extends Array<Component<any>>> {
    callback: SystemCallback<T>;
    guard: SystemGuard<T>;
}
