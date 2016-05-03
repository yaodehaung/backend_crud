將routes 引入進來,取一個變數

首先要將routes/index中,exports出
去,而這個routes是以function的方式被exports
,這隻routes才可以利用函數的方式,將express值傳入到route這隻程式;

為什麼要寫routes(app);
