import { Tree, TreeNode } from './types'

/**
 * @description 将数组组装为树结构
 * @category Tree
 * @category Array
 * @param data 原始数据数组
 * @param childrenKey 组装为树状数据时的子节点的键名
 * @param idKey 数据的唯一标识,作为父子节点的关联依据
 * @param pidKey 数据的父节点idKey的值
 * @param rootPid 根结点的pid
 * @returns 树状数据数组
 */
export function array2Tree<T extends Record<keyof any, any> = TreeNode>(
    data: T[],
    childrenKey = 'children',
    idKey: keyof T = 'id' as keyof T,
    pidKey: keyof T = 'pid' as keyof T,
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
