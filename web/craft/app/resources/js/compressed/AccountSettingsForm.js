!function(a){Craft.AccountSettingsForm=Garnish.Base.extend({userId:null,isCurrent:null,$copyPasswordResetUrlBtn:null,$actionSpinner:null,confirmDeleteModal:null,$deleteBtn:null,init:function(b,c){this.userId=b,this.isCurrent=c,this.$copyPasswordResetUrlBtn=a("#copy-passwordreset-url"),this.$actionSpinner=a("#action-spinner"),this.$deleteBtn=a("#delete-btn"),this.addListener(this.$copyPasswordResetUrlBtn,"click","handleCopyPasswordResetUrlBtnClick"),this.addListener(this.$deleteBtn,"click","showConfirmDeleteModal")},handleCopyPasswordResetUrlBtnClick:function(){Craft.elevatedSessionManager.requireElevatedSession(a.proxy(this,"getPasswordResetUrl"))},getPasswordResetUrl:function(){this.$actionSpinner.removeClass("hidden");var b={userId:this.userId};Craft.postActionRequest("users/getPasswordResetUrl",b,a.proxy(function(a,b){if(this.$actionSpinner.addClass("hidden"),"success"==b){var c=Craft.t("{ctrl}C to copy.",{ctrl:navigator.appVersion.indexOf("Mac")?"⌘":"Ctrl-"});prompt(c,a)}},this))},showConfirmDeleteModal:function(){this.confirmDeleteModal?this.confirmDeleteModal.show():this.confirmDeleteModal=new Craft.DeleteUserModal(this.userId)}})}(jQuery);
//# sourceMappingURL=AccountSettingsForm.js.map