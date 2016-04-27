// archivemethed = function(curl, callback) {
//   $.ajax({
//     url: curl,
//     type: 'Get',
//     error: function(xhr) {
//       alert('錯誤');
//     },
//     success: function(callback) {
//       // debugger;
//       callback(null ,respone);
//
//     }
//   });
// };


// writemethod = function(title, post) {
//   $.ajax({
//     url: '/post',
//     type: 'Post',
//     data: {
//       'title': title,
//       'post': post // <-- the $ sign in the parameter name seems unusual, I would avoid it
//     },
//     error: function(xhr) {
//       alert('錯誤');
//     },
//     success: function(response) {
//       // debugger;
//       console.log('成功');
//
//     }
//   });
// };

editmethod = function(curl, post) {
  $.ajax({
    url: "edit" + curl,
    type: 'Post',
    data: {
      'post': post // <-- the $ sign in the parameter name seems unusual, I would avoid it
    },
    error: function(xhr) {
      alert('錯誤');
    },
    success: function(response) {
      // debugger;
      console.log('成功');

    }
  });
};

// removemethod = function(curl) {
//   $.ajax({
//     url: "/remove/" + curl ,
//     type: 'Get',
//     error: function(xhr) {
//       alert('錯誤');
//     },
//     success: function(response) {
//       // debugger;
//       console.log('成功');
//
//     }
//   });
// };
