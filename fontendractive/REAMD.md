前端的東西都放在public file裡面

說明ajax程式中的函數

archive是將所有的資料顯現出來
吃的參數：沒有

write是新增資料的函數
吃的參數: 1. 資料名稱 2. 資料內容

edit是編輯函數
將之前新增的資料更改資料內容
吃的參數: 1.要更改的資料id 2. 填入要更改的內容


remove 是刪除函數
將之前新增的資料做刪除的動作
吃的參數: 1. 要刪除的資料id


write ()函數是要全部的dom 都讀過一遍才能寫去
