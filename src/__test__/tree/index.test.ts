import { array2Tree } from '@/index'

describe('array2Tree', () => {
    test('should convert flat array to tree structure', () => {
        const data = [
            { id: 1, pid: '', name: 'Root' },
            { id: 2, pid: 1, name: 'Child 1' },
            { id: 3, pid: 1, name: 'Child 2' },
            { id: 4, pid: 2, name: 'Grandchild 1' },
            { id: 5, pid: 2, name: 'Grandchild 2' },
        ]
        const expectedTree = [
            {
                id: 1,
                pid: '',
                name: 'Root',
                children: [
                    {
                        id: 2,
                        pid: 1,
                        name: 'Child 1',
                        children: [
                            { id: 4, pid: 2, name: 'Grandchild 1', children: [] },
                            { id: 5, pid: 2, name: 'Grandchild 2', children: [] },
                        ],
                    },
                    {
                        id: 3,
                        pid: 1,
                        name: 'Child 2',
                        children: [],
                    },
                ],
            },
        ]
        const result = array2Tree(data)
        expect(result).toEqual(expectedTree)
    })
    test('should handle empty input data', () => {
        const result = array2Tree([])
        expect(result).toEqual([])
    })
    test('should handle custom keys for id, pid, and children', () => {
        const data = [
            { nodeId: 1, parentId: '', name: 'Root' },
            { nodeId: 2, parentId: 1, name: 'Child 1' },
            { nodeId: 3, parentId: 1, name: 'Child 2' },
            { nodeId: 4, parentId: 2, name: 'Grandchild 1' },
            { nodeId: 5, parentId: 2, name: 'Grandchild 2' },
        ]
        const expectedTree = [
            {
                nodeId: 1,
                parentId: '',
                name: 'Root',
                children: [
                    {
                        nodeId: 2,
                        parentId: 1,
                        name: 'Child 1',
                        children: [
                            { nodeId: 4, parentId: 2, name: 'Grandchild 1', children: [] },
                            { nodeId: 5, parentId: 2, name: 'Grandchild 2', children: [] },
                        ],
                    },
                    {
                        nodeId: 3,
                        parentId: 1,
                        name: 'Child 2',
                        children: [],
                    },
                ],
            },
        ]
        const result = array2Tree(data, 'children', 'nodeId', 'parentId')
        expect(result).toEqual(expectedTree)
    })
    test('should handle custom rootPid', () => {
        const data = [
            { id: 1, pid: 'root', name: 'Root' },
            { id: 2, pid: 1, name: 'Child 1' },
            { id: 3, pid: 1, name: 'Child 2' },
            { id: 4, pid: 2, name: 'Grandchild 1' },
            { id: 5, pid: 2, name: 'Grandchild 2' },
        ]
        const expectedTree = [
            {
                id: 1,
                pid: 'root',
                name: 'Root',
                children: [
                    {
                        id: 2,
                        pid: 1,
                        name: 'Child 1',
                        children: [
                            { id: 4, pid: 2, name: 'Grandchild 1', children: [] },
                            { id: 5, pid: 2, name: 'Grandchild 2', children: [] },
                        ],
                    },
                    {
                        id: 3,
                        pid: 1,
                        name: 'Child 2',
                        children: [],
                    },
                ],
            },
        ]
        const result = array2Tree(data, 'children', 'id', 'pid', 'root')
        expect(result).toEqual(expectedTree)
    })
    test('should handle multiple root nodes', () => {
        const data = [
            { id: 1, pid: '', name: 'Root 1' },
            { id: 2, pid: '', name: 'Root 2' },
            { id: 3, pid: '', name: 'Root 3' },
            { id: 4, pid: 1, name: 'Child 1' },
            { id: 5, pid: 1, name: 'Child 2' },
            { id: 6, pid: 2, name: 'Child 3' },
            { id: 7, pid: 3, name: 'Child 4' },
        ]
        const expectedTree = [
            {
                id: 1,
                pid: '',
                name: 'Root 1',
                children: [
                    { id: 4, pid: 1, name: 'Child 1', children: [] },
                    { id: 5, pid: 1, name: 'Child 2', children: [] },
                ],
            },
            {
                id: 2,
                pid: '',
                name: 'Root 2',
                children: [{ id: 6, pid: 2, name: 'Child 3', children: [] }],
            },
            {
                id: 3,
                pid: '',
                name: 'Root 3',
                children: [{ id: 7, pid: 3, name: 'Child 4', children: [] }],
            },
        ]
        const result = array2Tree(data)
        expect(result).toEqual(expectedTree)
    })
})
