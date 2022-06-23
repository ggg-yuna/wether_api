// 沖縄(471000)の予報を取得
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/471000.json";

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        console.log(weather);

        // 特定の地域(今回は沖縄)だけ選択して変数に詰め直す
        let area = weather[0].timeSeries[0].areas[0];
        console.log(area); 


        // 発表者と報告日時の情報を画面に書き出す
        // document.getElementById("publishingOffice").lastElementChild.textContent = weather[0].publishingOffice;
        // document.getElementById("reportDatetime").lastElementChild.textContent = weather[0].reportDatetime;


        // 特定地域の情報を画面に書き出す
        document.getElementById("weather-targetArea").lastElementChild.textContent = area.area.name;
        document.getElementById("weather-today").lastElementChild.textContent = area.weathers[0];
        document.getElementById("weather-tomorrow").lastElementChild.textContent = area.weathers[1];
        document.getElementById("weather-dayAfterTomorrow").lastElementChild.textContent = area.weathers[2];
    });

