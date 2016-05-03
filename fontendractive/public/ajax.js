function archive() {
  $.ajax({
    url: "/archive",
    type: 'Get',
    error: function(xhr) {
      alert('錯誤');
    },
    success: function(response) {
      // debugger;
      console.log(response);

    }
  });
};

function write(title,post){
    $.ajax({
      url: '/post',
      type: 'Post',
      data:{
        'name':title,
        'post': post
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


function edit(curl, post) {
  // curl 這裡是填 要編輯資料的id
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

function remove(curl) {
  $.ajax({
    url: "/remove/" + curl ,
    type: 'Get',
    error: function(xhr) {
      alert('錯誤');
    },
    success: function(response) {
      // debugger;
      console.log('成功');

    }
  });
}
