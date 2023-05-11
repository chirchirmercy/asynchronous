// Write an asynchronousThe function that accepts a message string and a delay time in milliseconds.
//  function should log the message to the console after the specified delay time.

async function message(message,delay){
 await new Promise(resolve=>setTimeout(resolve,delay));
  console.log({message})
}
message('Education is the key to success',2000)

// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data
//   when given a user ID. Write an asynchronous function that fetches and
//  logs the data for each user ID one by one, in sequence.

function getUserDataById(id) {
  if (id) {
    console.log('User ID found:', id);
  } else {
    console.log('User ID not found');
  }
}

let userIds = [3345, 8890, 7765];
userIds.forEach(getUserDataById);

//  You have an asynchronous function performTask() that returns a Promise. The Promise resolves if
//  the task is successful and rejects if there's an error. Write a function that 
//  calls performTask() and logs a custom success message if the task is 
//  successful, and a custom error message if there is an error


async function performTask() {
  let success = true;
   await new Promise((resolve,reject) => {
    if (success) {
      
      resolve('Task was successful');
    } else {
      reject('An error occurred');
    }
    console.error(performTask);
   
  });
  
}
performTask()
console.log('success','result')









