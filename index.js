$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search)
    const lang = urlParams.get('lang')
    
    // alert(lang)
    if (lang == 'zh') {
        $("#lang").prop('checked', true)
        $(".english").hide()
        $(".chinese").show()
    }
})

$(function() {
    $("#lang").on('change', function() {
        // alert(this.checked)

        if (this.checked) {
            $(".english").hide()
            $(".chinese").show()
        } else {
            $(".english").show()
            $(".chinese").hide()
        }
    })
})