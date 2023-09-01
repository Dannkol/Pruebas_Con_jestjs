const calcularAreas = (opt, nums) => {
    let option = opt;

    let cal = new Array(2)

    try {
        cal = nums
        switch (option) {
            case 'a':
                return (`el perimetro es ${cal[0] * 4}`)
                break;
            case 'b':
                return (`el area es ${cal.reduce((acc, ecc) => acc * ecc)}`)
                break
            default:
                break;
        }
    } catch (error) {
        return 'opcion no valida';
    }
}

export { calcularAreas }