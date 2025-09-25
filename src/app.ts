class EquipoFactory {
    create(type: string,
        name: string,
        marca: string,
        ram: string,
        otro: string) {
        const crear = new CrearEquipos(type,
            name,
            marca,
            ram,
            otro
        )
    }

}





class CrearEquipos {
    equipos: string[] = []
    constructor(type: string,
        name: string,
        marca: string,
        ram: string,
        otro: string) {
        this.equipos.push(type, name, marca, ram, otro)
    }
    verDetalles(): string[] {
        return this.equipos
    }
}

const factory = new EquipoFactory()
factory.create("adkkdk", "sjjs", "adsa", "asdd", "adds")
