import { array2Tree, getParents, getTargetFromTree, tree2Array } from '@/index'

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

describe('tree2Array', () => {
    test('should convert tree structure to flat array', () => {
        const tree = [
            {
                id: 1,
                name: 'Root',
                children: [
                    {
                        id: 2,
                        name: 'Child 1',
                        children: [
                            { id: 4, name: 'Grandchild 1', children: [] },
                            { id: 5, name: 'Grandchild 2', children: [] },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Child 2',
                        children: [],
                    },
                ],
            },
        ]
        const expectedArray = [
            {
                id: 1,
                name: 'Root',
                children: [
                    {
                        id: 2,
                        name: 'Child 1',
                        children: [
                            { id: 4, name: 'Grandchild 1', children: [] },
                            { id: 5, name: 'Grandchild 2', children: [] },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Child 2',
                        children: [],
                    },
                ],
            },
            {
                id: 2,
                name: 'Child 1',
                children: [
                    { id: 4, name: 'Grandchild 1', children: [] },
                    { id: 5, name: 'Grandchild 2', children: [] },
                ],
            },
            { id: 4, name: 'Grandchild 1', children: [] },
            { id: 5, name: 'Grandchild 2', children: [] },
            {
                id: 3,
                name: 'Child 2',
                children: [],
            },
        ]

        const result = tree2Array(tree)

        expect(result).toEqual(expectedArray)
    })
    test('should handle empty tree', () => {
        const result = tree2Array([])
        expect(result).toEqual([])
    })
    test('should handle custom children key', () => {
        const tree = [
            {
                id: 1,
                name: 'Root',
                descendants: [
                    {
                        id: 2,
                        name: 'Child 1',
                        descendants: [
                            { id: 4, name: 'Grandchild 1', descendants: [] },
                            { id: 5, name: 'Grandchild 2', descendants: [] },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Child 2',
                        descendants: [],
                    },
                ],
            },
        ]
        const expectedArray = [
            {
                id: 1,
                name: 'Root',
                descendants: [
                    {
                        id: 2,
                        name: 'Child 1',
                        descendants: [
                            { id: 4, name: 'Grandchild 1', descendants: [] },
                            { id: 5, name: 'Grandchild 2', descendants: [] },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Child 2',
                        descendants: [],
                    },
                ],
            },
            {
                id: 2,
                name: 'Child 1',
                descendants: [
                    { id: 4, name: 'Grandchild 1', descendants: [] },
                    { id: 5, name: 'Grandchild 2', descendants: [] },
                ],
            },
            { id: 4, name: 'Grandchild 1', descendants: [] },
            { id: 5, name: 'Grandchild 2', descendants: [] },
            {
                id: 3,
                name: 'Child 2',
                descendants: [],
            },
        ]
        const result = tree2Array(tree, 'descendants')
        expect(result).toEqual(expectedArray)
    })
    test('should handle multiple root nodes in tree', () => {
        const tree = [
            {
                id: 1,
                name: 'Root 1',
                children: [
                    { id: 4, name: 'Child 1', children: [] },
                    { id: 5, name: 'Child 2', children: [] },
                ],
            },
            {
                id: 2,
                name: 'Root 2',
                children: [{ id: 6, name: 'Child 3', children: [] }],
            },
            {
                id: 3,
                name: 'Root 3',
                children: [{ id: 7, name: 'Child 4', children: [] }],
            },
        ]
        const expectedArray = [
            {
                id: 1,
                name: 'Root 1',
                children: [
                    { id: 4, name: 'Child 1', children: [] },
                    { id: 5, name: 'Child 2', children: [] },
                ],
            },
            { id: 4, name: 'Child 1', children: [] },
            { id: 5, name: 'Child 2', children: [] },
            {
                id: 2,
                name: 'Root 2',
                children: [{ id: 6, name: 'Child 3', children: [] }],
            },
            { id: 6, name: 'Child 3', children: [] },
            {
                id: 3,
                name: 'Root 3',
                children: [{ id: 7, name: 'Child 4', children: [] }],
            },
            { id: 7, name: 'Child 4', children: [] },
        ]
        const result = tree2Array(tree)
        expect(result).toEqual(expectedArray)
    })
})

describe('getParents', () => {
    const tree = [
        {
            id: 1,
            name: 'Root',
            children: [
                {
                    id: 2,
                    name: 'Child 1',
                    children: [
                        { id: 4, name: 'Grandchild 1', children: [] },
                        { id: 5, name: 'Grandchild 2', children: [] },
                    ],
                },
                {
                    id: 3,
                    name: 'Child 2',
                    children: [],
                },
            ],
        },
    ]
    test('should return the path to the target node in the tree', () => {
        const targetId = 4
        const result = getParents(tree, targetId)
        expect(result).toMatchSnapshot()
    })

    test('should return an empty array when the target node is not found', () => {
        const targetId = 99
        const result = getParents(tree, targetId)
        expect(result).toMatchSnapshot()
    })

    test('should support custom ID key and children key', () => {
        const treeWithCustomKeys = [
            {
                nodeId: 1,
                label: 'Root',
                descendants: [
                    {
                        nodeId: 2,
                        label: 'Child 1',
                        descendants: [
                            { nodeId: 4, label: 'Grandchild 1', descendants: [] },
                            { nodeId: 5, label: 'Grandchild 2', descendants: [] },
                        ],
                    },
                    {
                        nodeId: 3,
                        label: 'Child 2',
                        descendants: [],
                    },
                ],
            },
        ]
        const targetId = 4
        const result = getParents(treeWithCustomKeys, targetId, 'nodeId', 'descendants')
        expect(result).toMatchSnapshot()
    })

    test('should support custom equal function for comparing values', () => {
        const targetId = '4'
        const result = getParents(tree, targetId, 'id', 'children', (a, b) => a.toString() === b.toString())
        expect(result).toMatchSnapshot()
    })
})

describe('getTargetFromTree', () => {
    const tree = [
        {
            id: 1,
            name: 'Root',
            children: [
                {
                    id: 2,
                    name: 'Child 1',
                    children: [
                        { id: 4, name: 'Grandchild 1', children: [] },
                        { id: 5, name: 'Grandchild 2', children: [] },
                    ],
                },
                {
                    id: 3,
                    name: 'Child 2',
                    children: [],
                },
            ],
        },
    ]
    test('should return the target node from the tree', () => {
        const targetId = 4
        const expectedNode = { id: 4, name: 'Grandchild 1', children: [] }
        const result = getTargetFromTree(tree, targetId)
        expect(result).toEqual(expectedNode)
    })
    test('should return null when the target node is not found', () => {
        const targetId = 99
        const result = getTargetFromTree(tree, targetId)
        expect(result).toBeNull()
    })
    test('should support custom ID key', () => {
        const treeWithCustomIdKey = [
            {
                nodeId: 1,
                label: 'Root',
                children: [
                    {
                        nodeId: 2,
                        label: 'Child 1',
                        children: [
                            { nodeId: 4, label: 'Grandchild 1', children: [] },
                            { nodeId: 5, label: 'Grandchild 2', children: [] },
                        ],
                    },
                    {
                        nodeId: 3,
                        label: 'Child 2',
                        children: [],
                    },
                ],
            },
        ]
        const targetId = 4
        const expectedNode = { nodeId: 4, label: 'Grandchild 1', children: [] }
        const result = getTargetFromTree(treeWithCustomIdKey, targetId, 'nodeId')
        expect(result).toEqual(expectedNode)
    })
    test('should support custom equal function for comparing values', () => {
        const targetId = '4'
        const expectedNode = { id: 4, name: 'Grandchild 1', children: [] }
        const result = getTargetFromTree(tree, targetId, 'id', (a, b) => a.toString() === b.toString())
        expect(result).toEqual(expectedNode)
    })
    test('should support custom equal function for comparing values', () => {
        const targetId = '4'
        const expectedNode = { id: 4, name: 'Grandchild 1', children: [] }
        const result = getTargetFromTree(tree, targetId, 'id', (a, b) => a.toString() === b.toString(), 'children')
        expect(result).toEqual(expectedNode)
    })
})
