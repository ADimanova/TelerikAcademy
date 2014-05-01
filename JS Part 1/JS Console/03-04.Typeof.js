function printTypeof() {
    for (var i = 0; i < arguments.length; i++) {
        jsConsole.writeLine('Type of ' + arguments[i] + ': ' + typeof arguments[i]);
    }
}
