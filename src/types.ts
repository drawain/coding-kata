type X<T> = {
    [P in keyof T]?: T[P] extends object ? X<T[P]> : T[P]
};