function Pacient(nom, espècie, raça, dataNaixement) {
    this.nom = nom;
    this.espècie = espècie;
    this.raça = raça;
    this.dataNaixement = new Date(dataNaixement);
}

Pacient.prototype.getEdat = function() {
    const avui = new Date();
    let edat = avui.getFullYear() - this.dataNaixement.getFullYear();
    const diferenciaMesos = avui.getMonth() - this.dataNaixement.getMonth();
    if (diferenciaMesos < 0 || (diferenciaMesos === 0 && avui.getDate() < this.dataNaixement.getDate())) {
        edat--;
    }
    return edat;
};

export default Pacient;