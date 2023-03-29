$(function(){
const fortuneResults = {
  money : [
    {stars: "★★★",
     detail: "最高の金運です！いつの間にかお金が溜まっているかも・・・？",
    },
    {stars: "★★",
     detail: "まずまず金運です！使いすぎには注意しましょう！",
    },
    {stars: "★",
     detail: "悪い傾向が見られます！財布の紐は絞めておくと吉です！",
    },
  ],
  work : [
    {stars: "★★★",
     detail: "最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？",
    },
    {stars: "★★",
     detail: "まずまず仕事運です！普段通り仕事が進むでしょう！",
    },
    {stars: "★",
     detail: "悪い傾向が見られます！自信過剰にならないように注意しましょう",
    },
  ],
  health : [
    {stars: "★★★",
     detail: "最高の健康運です！ランニングの距離を伸ばしても良いですね！",
    },
    {stars: "★★",
     detail: "まずまず健康運です！無理せず体を動かしましょう！",
    },
    {stars: "★",
     detail: "悪い傾向が見られます！ケガにご注意を・・・",
    },
  ]
};
$(document).on('click', ".js-fortune-start", function() {
  for (let i in fortuneResults) {
    let fortuneResults_num = Math.floor( Math.random() * 3 );
      const resultStars = fortuneResults[i][fortuneResults_num]["stars"];
      const resultDetail = fortuneResults[i][fortuneResults_num]["detail"];

      const ele = $("." + i);
      ele.find(".stars").text(resultStars);
      ele.find(".detail").text(resultDetail);
  };
    $(".result").fadeIn(1000);
    $('.start-button').text('もう一度占う！');
    $(".start-button").toggleClass("restart").toggleClass("js-fortune-start");
});

$(document).on("click", ".restart",
 function(){
 $(".start-button").text("運勢を占う！");
 $(".start-button").toggleClass("restart").toggleClass("js-fortune-start");
 $(".result").fadeOut(1000);
});
});
