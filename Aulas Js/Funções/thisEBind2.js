function pessoa () {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++ // substitui o this pelo sel
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //testado com o bind
}

new pessoa 