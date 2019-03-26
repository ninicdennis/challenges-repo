var db_data = require('./02-data-objects')

function randomTime () {
  //there's an error with this function...fix it
  return Math.random() * (8000 - 200) + 200;
}

// This function will trigger the callback passing to it the following 
// * an object that has the following properties
//      err: boolean
//      msg: string describing the error
// * an array of user ids of all the friends for the provided userhandle
function fetchFriends(userhandle, callback) {
  
  setTimeout(() => {
    let user = db_data.users.filter(u => u.handle === userhandle)

    if(user.length === 0) {
      // Trigger the callback for the unhappy path
      callback({
      err:true,
      msg:"error"
    })
    } else {
      let friendsList = db_data.friends.filter(list => list.user === userhandle)
      // Trigger the callback for the happy path
      callback({
      err:false,
      msg:"no error"
    },friendsList)
    }
  }, randomTime());
}

function addFriend(userhandle, friendhandle) {
  //First create a new promise (check out mdn if lost)
  return new Promise((resolve,reject) => {

    let user = db_data.user.filter(u => u.handle === userhandle)/* filter the users array on db_data for the userhandle */
    let friend = user.friends.filter(f => f.handle === friendhandle)  /* filter the users array on db_data for the friendhandle */

    if(friend === userhandle && user === userhandle) {
      /*figure out the conditional to test if we didn't find the user or the friend*/
      //  We couldn't find one or the other so tell the promise to do the unhappy path with an argument of 'Incorrect userhandle provided'
      reject("Incorrect user handle.")
    }

    let currentFriends = db_data.friends.filter(current => current.user === userhandle)[0]

    if(currentFriends.friends.includes(friendhandle)) {
      //  We couldn't find one or the other so tell the promise to do the unhappy path with an argument of 'Users are already friends'
      reject("Users are already friends.")
    }
    
    let updatedFriends = []
    // Create a for loop here to loop over all of db_data friends array
    for (let i = 0; i < updatedFriends[i]; i++)
      var selectedFriend = db_data.friends[i]

      if(selectedFriend.user === userhandle){
        //Add the friendhandle to the selectedFriend's friends list
        updatedFriends = selectedFriend.push(friends)

        continue;
      } else if (selectedFriend.user === friendhandle) {
        selectedFriend.friends.push(userhandle)
      }
    
    resolve(updatedFriends)
  })
}


function fetchUser(userhandle) {
  return new Promise((resolve, reject) => {
    return randomTime()// Make the following code async by wrapping it in a setTimeout for randomTime()
      let user = db_data.users.filter(u => u.handle === userhandle)
        
      if(user.length === 0) {
        // Tell the promise to carry out the unhappy path with an argument of 'Unknown User'
        reject("Unkown User")
      
      } else {
        if (user[0].name === 'Dylan' &&
          db_data.friends[4].friends.length === 2 &&
          db_data.friends[4].friends.includes('7e6a2835-0389-42ca-a4f6-321386fd6947') > -1)
          console.log("Yay!!!!!")
        else
          console.log('Something went wrong')

        // Tell the promise to carry out the happy path pass the object inside of the user variable. 
        resolve(db_data.friends)
      }    
  });
}

function main() {
  const callback = (errObj, data) => {
    if(errObj.err) {
      console.log(errObj.msg)
      // call the fetchFriends backend api with the correct userhandle '7e6a2835-0389-42ca-a4f6-321386fd6947' and the callback as the second argument
    } else {
      console.log("Kim has these friends", data)
      if(db_data.friend != data){
        return addFriend(user,data)
        /*Check to see if they aren't already friends*/
        // call addFriend backend api with '7e6a2835-0389-42ca-a4f6-321386fd6947', '88c76784-14f6-4ca1-8567-5e2cf23fa23c'
        
          // wrap the following in the happy path:
          
            console.log(`Here are the results from addFriend: ${data}`)
            resolve(fetchUser('88c76784-14f6-4ca1-8567-5e2cf23fa23c'))
        
          // wrap the following in the unhappy path:

            reject(console.log(`AddFriend Error: ${errMsg}`))
      }
    }
  }

  // Note I purposefully put a typo in the user handle... it is missing the last character (don't correct this)
  fetchFriends('e582a642-e400-453f-b0f1-4aaa0a419cb', callback)


}

main()
