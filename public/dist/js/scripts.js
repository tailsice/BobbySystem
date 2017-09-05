//use tab in textarea
    $("textarea").keydown(function(e) {
	    if(e.keyCode === 9) { // tab was pressed
	        // get caret position/selection
	        var start = this.selectionStart;
	        var end = this.selectionEnd;

	        var $this = $(this);
	        var value = $this.val();

	        // set textarea value to: text before caret + tab + text after caret
	        $this.val(value.substring(0, start)
	                    + "\t"
	                    + value.substring(end));

	        // put caret at right position again (add one for the tab)
	        this.selectionStart = this.selectionEnd = start + 1;

	        // prevent the focus lose
	        e.preventDefault();
	    }
	});

    $("button.btn").click(function(){
    	var text = $("#mainDiv textarea").val();
    	var url = $("button.btn").attr("toUrl");
    	$.post(url,{
    		text : text
    	},function(data){
    		$("#resultDiv textarea").val(data.text);
    	});
    })

    $("textarea").focus(function(){
    	$(this).parent().css({"box-shadow": "0px 0px 15px 2px #ddd"});
    })

    $("textarea").focusout(function(){
    	$(this).parent().css({"box-shadow": "0px 0px 0px 0px #ddd"});
    })

    $("input").focus(function(){
    	$(this).css({"box-shadow": "0px 0px 15px 2px #ddd"});
    })

    $("input").focusout(function(){
    	$(this).css({"box-shadow": "0px 0px 0px 0px #ddd"});
    })