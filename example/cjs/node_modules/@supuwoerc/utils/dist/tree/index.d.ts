import { Tree, TreeNode, EqualFunc } from './types';
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
export declare function array2Tree<T extends Record<keyof any, any> = TreeNode>(data: T[], childrenKey?: string, idKey?: keyof T, pidKey?: keyof T, rootPid?: string): Tree<T>[];
/**
 * @description 将树状数据平铺
 * @category Tree
 * @category Array
 * @param tree 需要平铺的树状数据
 * @param childrenKey 树状数据的子节点的键名
 * @returns 平铺后的数据
 */
export declare function tree2Array<T = TreeNode>(tree: Tree<T>[], childrenKey?: keyof T): T[];
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
export declare function getParents<T = Partial<TreeNode>>(tree: T[], target: any, idKey?: keyof T, childrenKey?: keyof T, equalFunc?: EqualFunc<any>): T[];
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
export declare function getTargetFromTree<T = Partial<TreeNode>>(tree: T[], target: any, idKey?: keyof T, equalFunc?: EqualFunc<any>, childrenKey?: keyof T): T | null;
