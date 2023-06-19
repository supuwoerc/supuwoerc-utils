import { Tree, TreeNode, EqualFunc } from './types'

/**
 * @description 将数组组装为树结构
 * @category Tree
 * @category Array
 * @param data 原始数据数组
 * @param childrenKey 组装为树状数据时的子节点的键名
 * @param idKey 数据的唯一标识,作为父子节点的关联依据
 * @param pidKey 数据的父节点idKey的值
 * @param rootPid 根节点的pid
 * @returns 树状数据数组
 */
export function array2Tree<T extends Record<keyof any, any> = TreeNode>(
    data: T[],
    childrenKey = 'children',
    idKey = 'id' as keyof T,
    pidKey = 'pid' as keyof T,
    rootPid = ''
): Tree<T>[] {
    const map = new Map<keyof any, T>()
    const res: Tree<T>[] = []
    data.forEach((item) => {
        const id = item[idKey]
        const pid = item[pidKey]
        const wrapItem = { ...item, [childrenKey]: map.get(id)?.[childrenKey] ?? [] }
        map.set(id, wrapItem)
        if (pid === rootPid || !pid) {
            res.push(wrapItem)
        } else {
            if (!map.get(pid)) {
                map.set(pid, { [childrenKey]: [] } as T)
            }
            const parent = map.get(pid)
            if (parent) {
                parent[childrenKey].push(wrapItem)
            }
        }
    })
    return res
}

/**
 * @description 将树状数据平铺
 * @category Tree
 * @category Array
 * @param tree 需要平铺的树状数据
 * @param childrenKey 树状数据的子节点的键名
 * @returns 平铺后的数据
 */
export function tree2Array<T = TreeNode>(tree: Tree<T>[], childrenKey = 'children' as keyof T): T[] {
    return tree.reduce((prev, cur) => {
        const children = cur[childrenKey] as Tree<T>[]
        return prev.concat(cur, tree2Array((children ?? []) as Tree<T>[], childrenKey))
    }, [] as T[])
}

/**
 * @description 根据唯一值查找树状数据中父节点到自身完整路径
 * @category Tree
 * @category Array
 * @param tree 树状数据
 * @param target 目标值
 * @param idKey 目标值键名,默认为id
 * @param childrenKey 子节点键名,默认为children
 * @param equalFunc 判断相等的方法,默认比较方法使用'==='
 * @returns 树状数据根节点到自身的完整路径
 */
export function getParents<T = Partial<TreeNode>>(
    tree: T[],
    target: any,
    idKey: keyof T = 'id' as keyof T,
    childrenKey: keyof T = 'children' as keyof T,
    equalFunc: EqualFunc<any> = (val, tarVal) => val === tarVal
): T[] {
    const stack: T[] = []
    const dfs = (node: T): boolean => {
        if (equalFunc(node[idKey], target)) {
            stack.push(node)
            return true
        }
        const children = node[childrenKey] as T[]
        if (children && Array.isArray(children)) {
            // eslint-disable-next-line
            for (const child of children) {
                if (dfs(child)) {
                    stack.push(node)
                    return true
                }
            }
        }
        return false
    }
    // eslint-disable-next-line
    for (const node of tree) {
        if (dfs(node)) {
            return stack.reverse()
        }
    }
    return []
}

/**
 * @description 从树状数据查找目标值对象
 * @category Tree
 * @category Array
 * @param tree 树状数据
 * @param target 目标值
 * @param idKey 目标值键名,默认为id
 * @param equalFunc 判断相等的方法,默认比较方法使用'==='
 * @returns
 */
export function getTargetFromTree<T = Partial<TreeNode>>(
    tree: T[],
    target: any,
    idKey: keyof T = 'id' as keyof T,
    equalFunc: EqualFunc<any> = (a, b) => a === b,
    childrenKey: keyof T = 'children' as keyof T
): T | null {
    if (!Array.isArray(tree)) {
        return null
    }
    // eslint-disable-next-line
    for (const item of tree) {
        if (equalFunc(item[idKey], target)) {
            return item
        }
        if (item[childrenKey]) {
            const value = getTargetFromTree(item[childrenKey] as T[], target, idKey, equalFunc)
            if (value) {
                return value as T
            }
        }
    }
    return null
}
