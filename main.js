$(document).ready(function(){

		var text_tag = $('input');

		text_tag.val('');

		$.fn.reset = function(){
			text_tag.val('');
			$("p").remove();
		}

	$.fn.myFunction = function(){

		$("p").remove();

		var text = text_tag.val();

		var total_char = text.length;

		if(text_tag.val() == ' '){
				text_tag.val('');
			}

		text_tag.keydown(function(e){

			var text_last_char = text_tag.val().slice(-1);

			if(text_last_char == ' ' && e.key == ' '){
				e.preventDefault();
				e.stopPropagation();
			}
		});


		text_tag.keyup(function(e){
			var text_len = text_tag.val().length;

			$('.total_char').text('Total Character :' + text_len);

			if(text_len == 0){
				$('.total_word').text('Total Word :' + 0);

				$('.total_unique_word').text('Total Unique Word :' + 0);
			}else{
				$('.total_word').text('Total Word :' + word_arr.length);

				$('.total_unique_word').text('Total Unique Word :' + common_word_arr.length);
			}

			
		});


		




		text = text.toLowerCase();

		text = text.replace(/[`|~|!|@|#|$|%|^|&|*|(|)|_|+|=|{|}|;|:|'|"|<|>|1|2|3|4|5|6|7|8|9|/|0|?]/g,'');

		text = text.replace(/[,|.]/g,' ');

		var word_arr = text.split(" ");

		var word_arr_len = word_arr.length;

		

		var common_word_arr = [];

		


		for(var x = 0; x < word_arr_len; x++){

			if(common_word_arr.includes(word_arr[x]) == false){
				
				common_word_arr.push(word_arr[x]);

				var txt2 = $("<p></p>").text(word_arr[x]);

				$(".display_wrapper").append(txt2);

				word_arr_last_char = word_arr[x].slice(-1);

			}

		}

	    }



});







// final work done 
// final work done
// final work done
// final work done
// final work done