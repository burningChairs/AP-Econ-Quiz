
$(document).ready(function () {
	$(".question-text").on("click", function () {
		$(this).siblings(".answer").slideToggle();
  });

	$(".answer").on("click", function () {
		let $selected = $(this);
		let $question = $selected.closest(".question"); 
		let $answers = $question.children(".answer"); 

		if ($selected.hasClass("selected")) return;

		$selected.addClass("selected");

		$answers.css("pointer-events", "none");

		if ($selected.hasClass("correct")) {
			$selected.addClass("correct-answer");
      
			$selected.find(".explanation").slideDown();
		} else {
			$selected.addClass("incorrect-answer");
    }
  });
  
   $(document).ready(function() {
      $('#add-comment').click(function() {
        const commentText = $('#comment-input').val().trim();
        if (commentText) {
          $('#comment-list').append(`<div class="comment">${commentText}</div>`);
          $('#comment-input').val('');
        } else {
          alert('Please write a comment before submitting.');
        }
      });
    });
  
  
});
