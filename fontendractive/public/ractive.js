// 為了讓網頁一打開就有資料所以我將讀資料的函數放在上面
async.waterfall([
  archivemethed,
  // archivemethod的函數是用ajax get 的data的值傳到
  // testractive這個函數是將前面傳來的值傳到ractive 的 data裡面
  testractive
], function(error, response) {
  console.log(response);
});

write();

//function defind

function write() {
  // id = input
  $('#input').on('click', function(e) {
    var input = {
      "name": $('#nameInput').val(),
      "post": $('#messageInput').val()
    };

    $.ajax({
      url: '/post',
      type: 'Post',
      data: input,
      error: function(xhr) {
        alert('錯誤');
      },
      success: function(response) {

        // 讀 ,編寫 ,刪除 的函數
        async.waterfall([
          archivemethed,
          testractive
        ], function(error, response) {
          console.log(response);
        });

      }
    });

  })
}

// 用ajax get 要資料 然後傳到testractive 中做粉刷
function archivemethed(callback) {
  // 這個ajax是取後端的資料
  $.ajax({
    url: "/archive",
    type: 'Get',
    error: function(xhr) {
      alert('錯誤');
    },
    success: function(response) {
      // debugger;
      callback(null, response);

    }
  });
}

// 讀 編寫 刪除 的函數
function testractive(callback) {
  // 將archivemethed的值 放在data中
  var ractive = new Ractive({
    el: "#test",
    template: "#ttest",
    data: {
      greeting: callback.posts
    }
  });

  ractive.on({
    // 刪掉的函數
    dm: function(dmv) {
      var c = dmv.context._id;
      console.log(dmv);
      $.ajax({
        url: "/remove/" + c,
        type: 'Get',
        error: function(xhr) {
          alert('錯誤');
        },
        success: function(response) {

          // 每次更新都要做從新粉刷
          async.waterfall([
            archivemethed,
            testractive
          ], function(error, response) {
            console.log(response);
          });

        }
      });
    },

    sign: function(dmv) {
      var c = dmv.context._id;

      var name = prompt('Enter your username to sign in', 'ractive_fan');
      // 更改的函數
      $.ajax({
        url: "edit/" + c,
        type: 'Post',
        data: {
          'post': name // <-- the $ sign in the parameter name seems unusual, I would avoid it
        },
        error: function(xhr) {
          alert('錯誤');
        },
        success: function(response) {

            // 每次更新都要做從新粉刷

          async.waterfall([
            archivemethed,
            testractive
          ], function(error, response) {
            console.log(response);
          });

        }
      });

    }
  });

};
