export interface TreeNode {
    id: keyof any
    pid?: keyof any
    [key: keyof any]: any
}
export type Tree<T = TreeNode, K extends string = 'children'> = T & { [P in K]?: Tree<T, K>[] }
