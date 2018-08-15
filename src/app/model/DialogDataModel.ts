export class DialogDataModel {
    title: String;
    content: String;
    positiveButtonLabel: String;
    negativeButtonLabel: String;
    showPositiveButton: Boolean;
    showNegativeButton: Boolean;

    constructor(title: String, content: String, positiveButtonLabel: String = "OK",
        negativeButtonLabel: String = "Cancel", showPositiveButton: Boolean = true, showNegativeButton: Boolean = false) {
        this.title = title;
        this.content = content;
        this.positiveButtonLabel = positiveButtonLabel;
        this.negativeButtonLabel = negativeButtonLabel;
        this.showPositiveButton = showPositiveButton;
        this.showNegativeButton = showNegativeButton
    }
}