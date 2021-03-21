var old_url;

$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search)
    const lang = urlParams.get('lang')
    old_url = $(".navbar-brand").attr("href")

    // alert(lang)
    if (lang == 'zh') {
        $("#lang").prop('checked', true)
        $(".english").hide()
        $(".chinese").show()
        $(".navbar-brand").attr("href", old_url + "?lang=zh")
    }
})

$(function() {
    $("#lang").on('change', function() {
        // alert(this.checked)
        if (this.checked) {
            $(".english").hide()
            $(".chinese").show()
            $(".navbar-brand").attr("href", old_url + "?lang=zh")
        } else {
            $(".english").show()
            $(".chinese").hide()
            $(".navbar-brand").attr("href", old_url)
        }
    })
})