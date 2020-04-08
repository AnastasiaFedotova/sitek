class Modal {
	constructor(modalWindow) {
		this.$modal = $(modalWindow);

		this.$form = this.$modal.find('.modal__form');
		this.$save = this.$modal.find('.btn_save');
		this.$cancel = this.$modal.find('.btn_cancel');

		this.$cancel.click(() => this.hide());

		this.$save.click(() => {
			
			this.hide();
		});
	}

 	hide() {
		this.$modal.removeClass('show');
	}
}
module.exports = Modal;