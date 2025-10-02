// 基本的表單處理功能，這裡只是展示，並沒有發送訊息
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('感謝你的訊息，我會儘快回覆你！');
});
