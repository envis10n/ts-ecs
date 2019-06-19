export type Component<T extends { name: string }> = { [P in keyof T]: T[P] };
