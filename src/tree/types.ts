export interface TreeNode {
    id: string
    pid?: string
    [key: keyof any]: any
}
export type Tree<T = TreeNode> = T & { [key: string]: Tree<T>[] }
