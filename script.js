$(function () {
    $.ajax({
        url: 'https://www.jma.go.jp/bosai/forecast/data/forecast/471000.json', //アクセスするURL
        type: 'get',   //post or get
        cache: false,        //cacheを使うか使わないかを設定
        dataType: 'json',     //data type script・xmlDocument・jsonなど     
    })

        .done(function (response) {
            console.log(response)


            //toglle-menu 天気予報
            // $('#intro_btn').on('click',function(){
            // $('.toggle_menu ').slideToggle();
            // })

            // 今日、明日、明後日の天気 
            console.log(response[0].timeSeries[0].areas[0].weathers[0]);

            let weather = response[0].timeSeries[0].areas[0].weathers[0]
            let weather1 = response[0].timeSeries[0].areas[0].weathers[1]
            let weather2 = response[0].timeSeries[0].areas[0].weathers[2]
            // console.log(weather.indexOf('雷'));
            // 1日目
            if (weather.indexOf('雷') != -1) {
                $(".weather-fhoto").eq(0).attr('src', './img/tenki_mark07_kaminari.png');

            } else if (weather.indexOf('雨') = -1) {
                $(".weather-fhoto").eq(0).attr('src', './img/tenki_mark02_ame.png');

            } else if (weather.indexOf('晴れ') = -1) {
                $(".weather-fhoto").eq(0).attr('src', './img/tenki_mark01_hare.png');
            }

            // 2日目
            if (weather1.indexOf('雨') != -1) {
                $(".weather-fhoto1").eq(0).attr('src', './img/tenki_mark02_ame.png');

            } else if (weather1.indexOf('雷') = -1) {
                $(".weather-fhoto1").eq(0).attr('src', './img/tenki_mark07_kaminari.png');


            } else if (weather1.indexOf('晴れ') = -1) {
                $(".weather-fhoto1").eq(0).attr('src', './img/tenki_mark01_hare.png');
            }
            
            // ３日目
            if (weather2.indexOf('晴れ') != -1) {
                $(".weather-fhoto2").eq(0).attr('src', './img/tenki_mark01_hare.png');

            } else if (weather2.indexOf('雨') = -1) {
                $(".weather-fhoto2").eq(0).attr('src', './img/tenki_mark02_ame.png');

            } else if (weather2.indexOf('雷') = -1) {
                $(".weather-fhoto2").eq(0).attr('src', './img/tenki_mark07_kaminari.png');
            }

            // console.log(test);

             $(".area-weathers").text(response[0].timeSeries[0].areas[0].weathers[0])
             $(".area-weathers1").text(response[0].timeSeries[0].areas[0].weathers[1])
             $(".area-weathers2").text(response[0].timeSeries[0].areas[0].weathers[2])

            //日付
            console.log(response[0].timeSeries[0].timeDefines[0])
            $(".weather-date").text(response[0].timeSeries[0].timeDefines[0])
            $(".weather-date1").text(response[0].timeSeries[0].timeDefines[1])
            $(".weather-date2").text(response[0].timeSeries[0].timeDefines[2])




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

