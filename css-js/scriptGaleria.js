function galery() {
  return {
    show: false,
    showedImgId: null,
    getGaleryLength() {
      return this.$refs.galery.children.length;
    },
    open(imgId) {
      this.show = true;
      this.showedImgId = imgId;
      let imgSrc = this.getShowedImage().getAttribute("src");
      this.setSrc(imgSrc);
    },
    close() {
      this.show = false;
    },
    getShowedImage() {
      return this.$refs.galery.children[this.showedImgId - 1];
    },
    getSrc(imgId) {
      return this.$refs.galery.children[imgId].getAttribute("src");
    },
    setSrc(imgSrc) {
      this.$refs.fullscreenImg.setAttribute("src", imgSrc);
    },
    previous() {
      if (!this.open) { return;}
      let imgSrc = "";
      if (this.showedImgId - 1 < 1) {
        imgSrc = this.getSrc(this.getGaleryLength() - 1);
        this.showedImgId = this.getGaleryLength();
      } else {
        imgSrc = this.getSrc(this.showedImgId - 2);
        this.showedImgId -= 1;
      }
      this.setSrc(imgSrc);
    },
    next() {
      if (!this.open) { return;}
      let imgSrc = "";
      if (this.showedImgId == this.getGaleryLength()) {
        imgSrc = this.getSrc(0);
        this.showedImgId = 1;
      } else {
        imgSrc = this.getSrc(this.showedImgId);
        this.showedImgId += 1;
      }
      this.setSrc(imgSrc);
    }
  };
}