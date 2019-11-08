declare namespace aaa {
    let a: number;
}

declare module 'aaa' {
    export = aaa;
}