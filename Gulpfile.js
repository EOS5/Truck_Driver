import gulp from "gulp";
const { series } = gulp;

function transpile(cb) {
    // body omitted
    cb();
}

function bundle(cb) {
    // body omitted
    cb();
}

const build = series(transpile, bundle);


export {build}