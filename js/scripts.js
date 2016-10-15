$(function() {

	// definicja "klas"
	function Button(text) {
		this.text = text || 'Hello';
	}
	Button.prototype = {
		create: function() {
			var self = this;
			this.$element = $('<button>');
			this.$element.text(this.text);
			this.$element.css('display', 'block');
			this.$element.click(function() { 
				alert(self.text); 
			});
			$('h1').append(this.$element);
		}
	}

	// test
	test();

	function test() {
		
		var testButton = new Button('test button 1');
		testButton.create();

		var testButton2 = new Button();
		testButton2.create();	

	};

});
