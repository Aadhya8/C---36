class Player {

  constructor() {}

  handleMousePressed() {

    this.playButton.mousePressed( () => {

      this.input.hide()
      this.playButton.hide();
      // var message =
      //  hello $ { this.input.value () }
      // this.greeting.html(message);

    } )

  }

  display() {

    //this.button();
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();

  }

}
