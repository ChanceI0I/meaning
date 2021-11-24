let num1=Number, num2=Number, num3=Number;
document.getElementById("btn").addEventListener("click", write)

function write() {
    choose_word()
    document.getElementById("name").innerHTML = person_name = document.getElementById("name_input").value;
    document.getElementById("word_1").innerHTML = word_1;
    document.getElementById("word_2").innerHTML = word_2;
    document.getElementById("word_3").innerHTML = word_3;
}

function choose_word() {
    function choose_num() {
        num1 = Math.round(Math.random() * 10);
        num2 = Math.round(Math.random() * 10);
        num3 = Math.round(Math.random() * 10);
    }
    choose_num()
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        choose_num()
    }
    

    let word_bank_noun = ["云朵", "日出", "小猫", "夏天", "冬天", "书籍", "工作", "旅游", "学习", "生活", "探索"];
    let word_bank_phrase = ["遗忘的梦境", "摔碎的瓶子", "未知的远方", "等一下....", "“我爱你”", "沙滩上的漂流瓶", "清晨的薄雾", "夏天的虫鸣", "书中的故事", "你的梦想", "诗和远方"]
    word_1 = word_bank_noun[num1];
    word_2 = word_bank_noun[num2];
    word_3 = word_bank_phrase[num3];
    console.log(num1, num2, num3)
}