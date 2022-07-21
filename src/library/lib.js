export const generateId = () =>Math.floor((Math.random())*1000)

export const addNewStudent = (list, item) => [...list, item]

export const toggleStudent = (item) => ({...item, studentStatus: !item.studentStatus})

export const partial = (fn, ...args) => fn.bind(null, ...args)

export const findById = (list, id) => list.find(item => item.id === id);

export const updateStudent = (list, student) => {
    const UpdatedIndex = list.findIndex(item => item.id === student.id)
    return [
      ...list.slice(0, UpdatedIndex),
      student, 
      ...list.slice(UpdatedIndex+1)
    ]
}