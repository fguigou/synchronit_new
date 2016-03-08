
$(document).ready(function() {
	$(".value-short-item").click(seeValue);

	var tooltipReady=function(origin, tooltip){
    	$(".see-more-value").click(seeValue);

    };
	function seeValue(e){
		console.log('show dialog');
		e.preventDefault();
		var id = $(this).data('valueId');
		$("#" + id).dialog('open');
		return false;
	}
	$('#you-me-we-icon').tooltipster({
		interactive:true,
		content: $('<p>The first pre-requisite for a successful project, is to build up a team.<br/> And this is not a one-time process. It is a permanent activity.</p>'
        		+"<a href='#' class='see-more-value' data-value-id='youmewe'>See more...</a>"),
        functionReady: tooltipReady
    });
	$('#liberte-icon').tooltipster({
		interactive:true,
		content: $('<p>At synchronit we believe,train and treat each fellow to be a complete professional and entrepreneur and we help as a team, in this personal and professional quest of continuous growth..</p>'
        		+"<a href='#' class='see-more-value' data-value-id='freedom'>See more...</a>"),
        functionReady: tooltipReady
    });
	$('#value-creation-icon').tooltipster({
		interactive:true,
		content: $('<p>We believe, that sharing your work with others for the creation of value means that you benefit from their work, as well as they benefit from yours.</p>'
        		+"<a href='#' class='see-more-value' data-value-id='value_creation'>See more...</a>"),
        functionReady: tooltipReady
    });
	$('#transparency-icon').tooltipster({
		interactive:true,
		content: $('<p>It helps and forces us to focus in the creation of real value at every single moment and not just to serve tribute to past glories.</p>'
        		+"<a href='#' class='see-more-value' data-value-id='transparency'>See more...</a>"),
        functionReady: tooltipReady
    });


});
//<div id="freedom" class="value_description value_text_block" style="display: block;">
//<p>After more than 200 years of the French revolution that influenced so many democracies, the fundamental values that inspired it are still to be reaffirmed every day. Universal opportunity is a concept and a practice that we adhere to.</p>
//<p>At Synchronit, we have no managers or hierarchical positions in the traditional sense.</p>
//<p>We believe, each fellow to be a complete professional and entrepreneur and we help as a team, in this personal and professional quest of continuous growth.</p>
//<p>The reason is simple and (why not?) also selfish: the better each member is, the better it is for all. We learned that since living in caves and it is part of what makes us humans.</p>
//</div>
//<div id="value_creation" class="value_description value_text_block" style="display: block;">
//<p>We believe, that sharing your work with others for the creation of value means that you benefit from their work, as well as they benefit from yours.</p>
//<p>We believe, that sharing this value is not a mathematical equation and that "the whole is more than the sum of the parts".</p>
//<p>We believe, that proper value creation should enable a relaxed life for all members, whilst ensuring company's existence.</p>
//<p>We believe, that together with our customers the creation of value is such, that win-win situations are a natural consequence of sharing a bright future.</p>
//<p>We believe, that accounting permits an objective measurment of value creation</p>
//</div>
//<div id="transparency" class="value_description value_text_block" style="display: block;">
//<p>Transparency is one of the best solutions against corruption.</p>
//<p>And we do not mean just political or economic. We believe in value creation and fair compensation.</p>
//<p>This is not a romantic or utopic position. It helps and forces us to focus in the creation of real value at every single moment and not just to serve tribute to past glories.</p>
//<p>In practice, this means that at Synchronit there is no profit-taken nor dividends. Each person earns purely based on the contribution done to generate value.
//Modern companies are starting to think in this way, like Amazon for example.</p>
//</div>
