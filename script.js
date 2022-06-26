$(function () {
    $.ajax({
        url: 'https://www.jma.go.jp/bosai/forecast/data/forecast/471000.json', //アクセスするURL
        type: 'get',   //post or get
        cache: false,        //cacheを使うか使わないかを設定
        dataType: 'json',     //data type script・xmlDocument・jsonなど     
    })

        .done(function (response) {
            console.log(response)
            // 風
            console.log(response[0].timeSeries[0].areas[0].winds[1])
            $(".weather-wind").text(response[0].timeSeries[0].areas[0].winds[0])
            $(".weather-wind1").text(response[0].timeSeries[0].areas[0].winds[1])
            $(".weather-wind2").text(response[0].timeSeries[0].areas[0].winds[2])
        



            // 波
            console.log(response[0].timeSeries[0].areas[0].waves[0])
            $(".weather-waves").text(response[0].timeSeries[0].areas[0].waves[0])
            $(".weather-waves1").text(response[0].timeSeries[0].areas[0].waves[1])
            $(".weather-waves2").text(response[0].timeSeries[0].areas[0].waves[2])

            //通信成功時の処理
            //成功したとき実行したいスクリプトを記載
        })
        .fail(function (xhr) {
            //通信失敗時の処理
            //失敗したときに実行したいスクリプトを記載
        })
        .always(function (xhr, msg) {
            //通信完了時の処理
            //結果に関わらず実行したいスクリプトを記載
        });
})