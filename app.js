let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// removing the last item
secretMessage.pop();
//checking the length 
console.log(secretMessage.length);
// adding to the array
secretMessage.push('to', 'Program');
//replacing value of index 7
secretMessage[7] = 'right';
//removing the fist string
secretMessage.shift();
//adding to the beginning 
secretMessage.unshift('Programming');
//removing items using splice function
secretMessage.splice(6, 5, 'know,');
//printing array as ssentence using .join
console.log(secretMessage.join(' '));

