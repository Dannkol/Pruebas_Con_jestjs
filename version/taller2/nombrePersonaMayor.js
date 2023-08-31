const nombrePersonaMayor = (personas, edad) => {
    let persona = {
        personas: personas,
        edades: edad,
    };

    return (
        `la persona con mayor edad es ${persona.personas[persona.edades.indexOf(Math.max(...persona.edades))]
        } con ${Math.max(...persona.edades)}`
    );
}

export { nombrePersonaMayor }