var nowonlyfatweight = nowbodyweight.value * nowbodyfat.value / 100;
var losefatweight = nowonlyfatweight * targetbodyfat.value / nowbodyfat.value ;
var reducefatweight = nowonlyfatweight - losefatweight;

function timer() {
  window.location.reload();
}

// 自動計算

var culc1 = new Vue({
    el: '#culc1',
    data: {
        bodyheight: 170,
        bodyweight: 70,
        nowbodyfat: 20,
        targetbodyfat: 15,
    },
    computed:{
        proper: function() {return Math.round(this.bodyheight / 100 * this.bodyheight / 100 * 22 * 10) / 10},
        beauty: function() {return Math.round(this.bodyheight / 100 * this.bodyheight / 100 * 20 * 10) / 10},
        model : function() {return Math.round(this.bodyheight / 100 * this.bodyheight / 100 * 18 * 10) / 10},
        afterdiet: function() {return Math.round((this.bodyweight - (this.bodyweight * this.nowbodyfat / 100) + (this.bodyweight * this.targetbodyfat / 100)) * 95 /100 * 10) /10},
        // toproper: function() {return Math.round(((this.bodyheight / 100 * this.bodyheight / 100 * 22 - this.bodyweight ) * 10) / 10) * (-1)},
        // tobeauty: function() {return Math.round((this.bodyheight / 100 * this.bodyheight / 100 * 20 - this.bodyweight ) * 10) / 10},
        // tomodel : function() {return Math.round((this.bodyheight / 100 * this.bodyheight / 100 * 18 - this.bodyweight ) * 10) / 10},
        reducekcal : function(){return Math.round(((this.bodyweight * this.nowbodyfat / 100 ) - (this.bodyweight * this.targetbodyfat / 100 )) * 7200 / 100)},
        reducerice : function(){return Math.round(((this.bodyweight * this.nowbodyfat / 100 ) - (this.bodyweight * this.targetbodyfat / 100 )) * 7200 / 100 / 1.3)},
      },
})




// グラフ

var func1 = function () {
    var nowonlyfatweight = nowbodyweight.value * nowbodyfat.value / 100;
    var losefatweight = nowonlyfatweight * targetbodyfat.value / nowbodyfat.value ;
    var weightprogress1 = nowbodyweight.value;
    var weightprogress2 = (nowbodyweight.value - nowonlyfatweight + losefatweight) * 95/100;
    
    var c=document.getElementById("bodyweightgraph");
    c.height=window.innerHeight*0.6;

    var ctx = document.getElementById("bodyweightgraph");
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = 'black';
    var bodyweightgraph = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["開始", "10日後", "20日後", "30日後", "40日後", "50日後", "60日後", "70日後", "80日後", "90日後", "100日後"],
        datasets: [
          {
            label: 'ゆっくりペース',
            data: [ weightprogress1, 
                    weightprogress1 - 0.33,  
                    weightprogress1 - 0.66,
                    weightprogress1 - 1,
                    weightprogress1 - 1.33,
                    weightprogress1 - 1.66,
                    weightprogress1 - 2,
                    weightprogress1 - 2.33,
                    weightprogress1 - 2.66,
                    weightprogress1 - 3,
                    weightprogress1 - 3.33 ],
            borderColor: "rgba(0,0,255,1)",
            backgroundColor: "rgba(0,0,0,0)",
          },
          {
            label: '目標のペース',
            data: [ weightprogress1, 
                    weightprogress1 - ( weightprogress1 - weightprogress2 ) * 1/10, 
                    weightprogress1 - ( weightprogress1 - weightprogress2 ) * 1.5/10,
                    weightprogress1 - ( weightprogress1 - weightprogress2 ) * 3/10,
                    weightprogress1 - ( weightprogress1 - weightprogress2 ) * 3.7/10,
                    weightprogress1 - ( weightprogress1 - weightprogress2 ) * 5.6/10,
                    weightprogress1 - ( weightprogress1 - weightprogress2 ) * 5/10,
                    weightprogress1 - ( weightprogress1 - weightprogress2 ) * 7/10,
                    weightprogress1 - ( weightprogress1 - weightprogress2 ) * 7/10,
                    weightprogress1 - ( weightprogress1 - weightprogress2 ) * 9/10,
                    weightprogress2 ],
            borderColor: "rgba(0,255,0,1)",
            backgroundColor: "rgba(0,0,0,0)"
          },
          {
            label: '限界ペース',
            data: [ weightprogress1,
                    weightprogress1 - 1,
                    weightprogress1 - 2,
                    weightprogress1 - 3,
                    weightprogress1 - 4,
                    weightprogress1 - 5,
                    weightprogress1 - 6,
                    weightprogress1 - 7,
                    weightprogress1 - 8,
                    weightprogress1 - 9,
                    weightprogress1 - 10,],
            borderColor: "rgba(255,0,0,1)",
            backgroundColor: "rgba(0,0,0,0)"
          }
        ],
      },
      options: {
        title: {
          display: true,
          text: '体重',
        },
        scales: {
          yAxes: [{
            ticks: {
              suggestedMax: weightprogress1,
              suggestedMin: weightprogress1,
              stepSize: 2,
              callback: function(value, index, values){
                return  value +  'kg'
              }
            }
          }]
        },
      }
    });


var fatprogress1 = nowbodyfat.value;
var fatprogress2 = targetbodyfat.value;

var c=document.getElementById("bodyfatgraph");
    c.height=window.innerHeight*0.6;

var ctx = document.getElementById("bodyfatgraph");
var bodyfatgraph = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["開始", "10日後", "20日後", "30日後", "40日後", "50日後", "60日後", "70日後", "80日後", "90日後", "100日後"],
    datasets: [
      {
        label: 'ゆっくりペース',
        data: [fatprogress1,
               fatprogress1 - 0.3, 
               fatprogress1 - 0.6, 
               fatprogress1 - 0.9, 
               fatprogress1 - 1.2, 
               fatprogress1 - 1.5, 
               fatprogress1 - 1.8, 
               fatprogress1 - 2.1, 
               fatprogress1 - 2.4, 
               fatprogress1 - 2.7, 
               fatprogress1 - 3.0 ],
        borderColor: "rgba(0,0,255,1)",
        backgroundColor: "rgba(0,0,0,0)"
      },
      {
        label: '目標のペース',
        data: [ fatprogress1, 
                fatprogress1 - ( fatprogress1 - fatprogress2 ) * 1/10, 
                fatprogress1 - ( fatprogress1 - fatprogress2 ) * 1.5/10,
                fatprogress1 - ( fatprogress1 - fatprogress2 ) * 3/10,
                fatprogress1 - ( fatprogress1 - fatprogress2 ) * 3.7/10,
                fatprogress1 - ( fatprogress1 - fatprogress2 ) * 5.6/10,
                fatprogress1 - ( fatprogress1 - fatprogress2 ) * 5/10,
                fatprogress1 - ( fatprogress1 - fatprogress2 ) * 7/10,
                fatprogress1 - ( fatprogress1 - fatprogress2 ) * 7/10,
                fatprogress1 - ( fatprogress1 - fatprogress2 ) * 9/10,
                fatprogress2 ],
        borderColor: "rgba(0,255,0,1)",
        backgroundColor: "rgba(0,0,0,0)"
      },
      {
        label: '限界ペース',
        data: [fatprogress1,
               fatprogress1 - 1, 
               fatprogress1 - 2, 
               fatprogress1 - 3, 
               fatprogress1 - 4,
               fatprogress1 - 5, 
               fatprogress1 - 6,
               fatprogress1 - 7, 
               fatprogress1 - 8, 
               fatprogress1 - 9, 
               fatprogress1 - 10 ],
        borderColor: "rgba(255,0,0,1)",
        backgroundColor: "rgba(0,0,0,0)"
      }
    ],
  },
  options: {
    title: {
      display: true,
      text: '体脂肪率'
    },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMax: fatprogress1,
          suggestedMin: fatprogress1,
          stepSize: 2,
          callback: function(value, index, values){
            return  value +  '%'
          }
        }
      }]
    },
  }
});
}