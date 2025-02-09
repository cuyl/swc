// @allowJs: true
// @checkJs: true
// @outDir: ./out
// @declaration: true
// @filename: conn.js
/**
 * @typedef {string | number} Whatever
 */ class Conn {
    method() {
    }
    constructor(){
        this.item = 3;
    }
}
module.exports = Conn;
// @filename: usage.js
/**
 * @typedef {import("./conn")} Conn
 */ class Wrap {
    /**
     * @param {Conn} c
     */ constructor(c){
        this.connItem = c.item;
        /** @type {import("./conn").Whatever} */ this.another = "";
    }
}
module.exports = {
    Wrap
};
