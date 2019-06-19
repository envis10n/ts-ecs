import { Component } from "./component";

export type Entity<T extends Array<Component<any>>> = T;
