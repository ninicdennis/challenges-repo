// The following data is a representation of what we would have in our db
const users = [{
  name: 'Jane',
  handle: 'e582a642-e400-453f-b0f1-4aaa0a419cb5',
  age: 29
}, {
  name: 'Bruce',
  handle: '239ae3ce-da74-46cd-bd98-b98e9406a80b',
  age: 35
}, {
  name: 'Kim',
  handle: '7e6a2835-0389-42ca-a4f6-321386fd6947',
  age: 43
}, {
  name: 'Sammy',
  handle: 'e7cdc763-c559-4f51-966b-cb3313bcce24',
  age: 15
}, {
  name: 'Dylan',
  handle: '88c76784-14f6-4ca1-8567-5e2cf23fa23c',
  age: 71
}
]

const friends = [{
  user: 'e582a642-e400-453f-b0f1-4aaa0a419cb5',
  friends: [
    '239ae3ce-da74-46cd-bd98-b98e9406a80b',
    'e7cdc763-c559-4f51-966b-cb3313bcce24',
    '7e6a2835-0389-42ca-a4f6-321386fd6947'
  ]
}, {
  user: '239ae3ce-da74-46cd-bd98-b98e9406a80b',
  friends: [
    'e582a642-e400-453f-b0f1-4aaa0a419cb5',
    '7e6a2835-0389-42ca-a4f6-321386fd6947'
  ]
}, {
  user: '7e6a2835-0389-42ca-a4f6-321386fd6947',
  friends: [
    'e582a642-e400-453f-b0f1-4aaa0a419cb5'
  ]
}, {
  user: 'e7cdc763-c559-4f51-966b-cb3313bcce24',
  friends: [
    'e582a642-e400-453f-b0f1-4aaa0a419cb5',
    '88c76784-14f6-4ca1-8567-5e2cf23fa23c'
  ]
}, {
  user: '88c76784-14f6-4ca1-8567-5e2cf23fa23c',
  friends: [
    'e7cdc763-c559-4f51-966b-cb3313bcce24'
  ]
}]


module.exports = {
  users: users,
  friends: friends
}