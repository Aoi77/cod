window.onload = function() {
  var main = [
    "ローカスト",
    "熟女",
    "女子校生",
    "黒人",
    "金髪ブロンド",
    "細身ブス",
    "デブ",
    "抱けないブス",
    "AV女優",
    "しみけん",
    "抱けるレベルのブス",
    "メンヘラ"
  ];

  var sub = [
    "ぽこすけ",
    "あおい",
    "ねこねこ",
    "ちろり",
    "がっけん",
    "やじっく",
    "あぱれんと",
    "だでぃ",
    "でこ",
    "のいっしゅ",
    "ふりつく",
    "みっちゃん",
    "ぽにき",
    "ぶらいと",
    "ぽぽんて",
    "ふぁるこん"
  ];

  var loca = [
    "学校",
    "病院",
    "満員電車",
    "自宅",
    "マジックミラー号",
    "公園",
    "ソープ",
    "おっぱぶ",
    "ピンサロ"
  ];

  var div = [
    "NTR",
    "死姦",
    "痴漢",
    "凄テク、10分間耐えきったら生中出し!!!",
    "ぶっかけ",
    "逆レイプ",
    "アナル開発",
    "M性感"
  ];

  var message, maincast, subcast1, subcast2, location, division;
  var btn = document.getElementById("btn");
  var output = document.getElementById("output");

  btn.onclick = function() {
    maincast = main[Math.floor(Math.random() * main.length)];
    subcast1 = sub[Math.floor(Math.random() * sub.length)];
    subcast2 = sub[Math.floor(Math.random() * sub.length)];
    if (subcast2 == subcast1) {
      subcast2 = sub[Math.floor(Math.random() * sub.length) - 1];
    }
    location = loca[Math.floor(Math.random() * loca.length)];
    division = div[Math.floor(Math.random() * div.length)];

    message = "<p>主演は" + maincast + "</p>";
    message += "<p>男優は" + subcast1 + "</p>";
    message += "<p>舞台は" + location + "</p>";
    message += "<p>シチュエーションは" + division + "</p>";
    output.innerHTML = message;
  };
};
